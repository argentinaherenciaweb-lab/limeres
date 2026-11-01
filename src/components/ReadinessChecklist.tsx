import React, { useState } from 'react';
import {
  FileCheck2,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Download,
  Printer,
  Sparkles,
  Info,
  ShieldCheck
} from 'lucide-react';
import { REQUIRED_DOCUMENTS } from '../data/legalData';

interface ReadinessChecklistProps {
  language: 'en' | 'es';
  onOpenConsultation: () => void;
}

export const ReadinessChecklist: React.FC<ReadinessChecklistProps> = ({
  language,
  onOpenConsultation
}) => {
  const isEn = language === 'en';

  // Checked documents state (defaulting to a few commonly available ones)
  const [checkedDocs, setCheckedDocs] = useState<string[]>([
    'doc-death-cert',
    'doc-birth-cert',
    'doc-passport'
  ]);

  const toggleDoc = (id: string) => {
    if (checkedDocs.includes(id)) {
      setCheckedDocs(checkedDocs.filter((d) => d !== id));
    } else {
      setCheckedDocs([...checkedDocs, id]);
    }
  };

  const criticalCount = REQUIRED_DOCUMENTS.filter((d) => d.critical).length;
  const checkedCritical = REQUIRED_DOCUMENTS.filter(
    (d) => d.critical && checkedDocs.includes(d.id)
  ).length;

  const scorePercentage = Math.round(
    (checkedDocs.length / REQUIRED_DOCUMENTS.length) * 100
  );

  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);

  return (
    <section id="checklist" className="bg-[#FFFFFF] border-b border-[#E5E7EB] py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#BFA15F]"></span>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#121417] uppercase">
              {isEn ? 'HEIR PREPARATION DOSSIER' : 'DOCUMENTACIÓN Y READINESS'}
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl text-[#121417] font-normal leading-tight">
            {isEn
              ? 'Evaluate Your Estate Filing Readiness'
              : 'Verifique el Estado de su Documentación Sucesoria'}
          </h2>

          <p className="text-sm sm:text-base text-[#6B7280] mt-3 leading-relaxed">
            {isEn
              ? 'Check off the documents in your possession to evaluate your probate readiness. Missing items (such as lost deeds or apostilles) can be reconstructed or secured by our legal team.'
              : 'Marque los documentos que posee. Aquellos faltantes (como escrituras extraviadas o apostillas) pueden ser tramitados y reconstruidos judicialmente por nuestra firma.'}
          </p>
        </div>

        {/* 2-Column Readiness Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 7 Cols: Interactive Document Checklist */}
          <div className="lg:col-span-7 space-y-3">
            {REQUIRED_DOCUMENTS.map((doc) => {
              const isChecked = checkedDocs.includes(doc.id);
              return (
                <div
                  key={doc.id}
                  onClick={() => toggleDoc(doc.id)}
                  className={`p-5 rounded-[4px] border cursor-pointer transition-all ${
                    isChecked
                      ? 'bg-white border-[#121417] shadow-xs'
                      : 'bg-[#FBFBFA] border-[#E5E7EB] hover:border-[#D1D5DB]'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-5 h-5 rounded-[3px] border mt-0.5 flex items-center justify-center transition-colors flex-shrink-0 ${
                        isChecked
                          ? 'bg-[#121417] border-[#121417] text-white'
                          : 'bg-white border-[#D1D5DB]'
                      }`}
                    >
                      {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-[#BFA15F]" />}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <span className="text-sm font-semibold text-[#121417]">
                          {isEn ? doc.name : doc.nameEs}
                        </span>

                        {doc.critical ? (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#991B1B] bg-[#FEF2F2] px-2 py-0.5 rounded-[2px]">
                            {isEn ? 'Essential for Docket' : 'Requisito Fundamental'}
                          </span>
                        ) : (
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6B7280] bg-[#F3F4F6] px-2 py-0.5 rounded-[2px]">
                            {isEn ? 'Secondary / Supplemental' : 'Complementario'}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#4B5563] mb-1.5 leading-relaxed">
                        {doc.description}
                      </p>

                      <div className="text-[11px] text-[#6B7280] flex items-center gap-1.5 font-sans">
                        <Info className="w-3.5 h-3.5 text-[#BFA15F] flex-shrink-0" />
                        <span>{doc.notes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right 5 Cols: Filing Readiness Score & Custom Dossier Summary */}
          <div className="lg:col-span-5 bg-[#FBFBFA] border border-[#E5E7EB] rounded-[4px] p-6 sm:p-8">
            <span className="text-[10px] font-bold tracking-[0.14em] text-[#BFA15F] uppercase block mb-1">
              {isEn ? 'READINESS EVALUATION' : 'DIAGNÓSTICO DE INICIACIÓN'}
            </span>
            <h3 className="font-editorial text-2xl text-[#121417] font-medium mb-4">
              {isEn ? 'Probate Docket Viability' : 'Viabilidad de Inicio Judicial'}
            </h3>

            {/* Score Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#374151]">
                  {isEn ? 'Preparation Index' : 'Índice de Preparación'}
                </span>
                <span className="font-editorial text-3xl font-bold text-[#121417]">
                  {scorePercentage}%
                </span>
              </div>

              <div className="w-full h-2.5 bg-[#E5E7EB] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#121417] transition-all duration-500 rounded-full"
                  style={{ width: `${scorePercentage}%` }}
                ></div>
              </div>

              <div className="flex justify-between text-[11px] text-[#6B7280] mt-2">
                <span>
                  {checkedCritical} of {criticalCount} essential records verified
                </span>
                <span>
                  {checkedDocs.length} of {REQUIRED_DOCUMENTS.length} total
                </span>
              </div>
            </div>

            {/* Assessment Verdict */}
            <div className="p-4 bg-white border border-[#E5E7EB] rounded-[4px] mb-6 text-xs">
              <div className="flex items-center gap-2 mb-2 font-semibold text-[#121417]">
                <ShieldCheck className="w-4 h-4 text-[#15803D]" />
                <span>
                  {checkedCritical >= 3
                    ? (isEn ? 'Ready for Immediate Court Docket Filing' : 'Listo para radicar expediente judicial')
                    : (isEn ? 'Partial Records — Attorney Procurement Needed' : 'Documentación Parcial — Gestión Profesional')}
                </span>
              </div>
              <p className="text-[#4B5563] leading-relaxed">
                {checkedCritical >= 3
                  ? (isEn
                      ? 'You hold the requisite vital certificates to file the succession petition immediately in Buenos Aires civil courts and order the publication of edicts.'
                      : 'Cuenta con los elementos esenciales para radicar la apertura del sucesorio y solicitar la publicación de edictos.')
                  : (isEn
                      ? 'Our firm can request duplicate certified title deeds (Segundo Testimonio) or execute judicial searches for missing certificates.'
                      : 'Nuestro estudio puede tramitar judicialmente segundos testimonios de escrituras o gestionar partidas faltantes.')}
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={() => setShowPrintModal(true)}
                className="w-full h-11 bg-white hover:bg-[#F3F4F6] border border-[#121417] text-[#121417] text-xs font-bold uppercase tracking-wider rounded-[4px] transition-colors flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4 text-[#BFA15F]" />
                <span>{isEn ? 'View / Print Personalized Dossier' : 'Ver / Imprimir Dossier Personalizado'}</span>
              </button>

              <button
                onClick={onOpenConsultation}
                className="w-full h-11 bg-[#121417] hover:bg-[#1E2229] text-white text-xs font-bold uppercase tracking-wider rounded-[4px] transition-colors flex items-center justify-center gap-2"
              >
                <span>{isEn ? 'Send Records for Attorney Review' : 'Enviar Antecedentes para Dictamen'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Print / Dossier Modal */}
        {showPrintModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
            <div className="bg-white max-w-xl w-full rounded-[4px] border border-[#121417] p-8 relative shadow-2xl">
              <div className="border-b border-[#E5E7EB] pb-4 mb-6 flex justify-between items-start">
                <div>
                  <span className="font-editorial text-2xl font-bold tracking-tight text-[#121417]">
                    LIMERES
                  </span>
                  <div className="text-[10px] tracking-[0.2em] font-sans font-semibold text-[#BFA15F] uppercase">
                    ESTATE PREPARATION DOSSIER
                  </div>
                </div>
                <button
                  onClick={() => setShowPrintModal(false)}
                  className="text-xs font-semibold text-[#6B7280] hover:text-[#121417]"
                >
                  ✕ {isEn ? 'Close' : 'Cerrar'}
                </button>
              </div>

              <div className="space-y-4 text-xs mb-6">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#6B7280] block mb-1">
                    {isEn ? 'Documents Currently on File:' : 'Documentos Verificados:'}
                  </span>
                  <ul className="space-y-1.5">
                    {REQUIRED_DOCUMENTS.filter((d) => checkedDocs.includes(d.id)).map((d) => (
                      <li key={d.id} className="flex items-center gap-2 text-[#15803D] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{isEn ? d.name : d.nameEs}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {REQUIRED_DOCUMENTS.some((d) => !checkedDocs.includes(d.id)) && (
                  <div className="pt-3 border-t border-[#F3F4F6]">
                    <span className="text-[10px] uppercase font-bold text-[#B45309] block mb-1">
                      {isEn ? 'Pending / To Be Procured by Counsel:' : 'Pendientes de Gestión Notarial:'}
                    </span>
                    <ul className="space-y-1.5">
                      {REQUIRED_DOCUMENTS.filter((d) => !checkedDocs.includes(d.id)).map((d) => (
                        <li key={d.id} className="flex items-center gap-2 text-[#4B5563]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#BFA15F]"></span>
                          <span>{isEn ? d.name : d.nameEs}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t border-[#E5E7EB]">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-[#121417] text-white text-xs font-semibold rounded-[4px] hover:bg-[#1E2229]"
                >
                  {isEn ? 'Print Official Dossier' : 'Imprimir Dossier'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
