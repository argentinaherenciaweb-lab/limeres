import React, { useState } from 'react';
import {
  FileSignature,
  FileCheck,
  Building,
  Landmark,
  Scale,
  ArrowRight,
  ShieldCheck,
  Send,
  UserCheck,
  Briefcase
} from 'lucide-react';
import { PROBATE_PHASES } from '../data/legalData';

interface RemoteRoadmapProps {
  language: 'en' | 'es';
  onOpenConsultation: () => void;
}

export const RemoteRoadmap: React.FC<RemoteRoadmapProps> = ({
  language,
  onOpenConsultation
}) => {
  const isEn = language === 'en';
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <section id="roadmap" className="bg-[#FFFFFF] border-b border-[#E5E7EB] py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#BFA15F]"></span>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#121417] uppercase">
              {isEn ? 'REMOTE SUCCESSION BLUEPRINT' : 'PROTOCOLO REMOTO PASO A PASO'}
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl text-[#121417] font-normal leading-tight">
            {isEn
              ? 'Administering Your Argentine Estate Without You Ever Flying to Argentina'
              : 'Cómo Tramitamos su Sucesión en Argentina sin que Tenga que Viajar'}
          </h2>

          <p className="text-sm sm:text-base text-[#6B7280] mt-3 leading-relaxed">
            {isEn
              ? 'Our structured 6-phase legal roadmap ensures strict adherence to the Argentine Civil Code while enabling seamless transatlantic coordination through local notaries and Hague Apostilles.'
              : 'Nuestro protocolo estructurado de 6 etapas garantiza el estricto cumplimiento judicial mientras coordina cada trámite de forma remota.'}
          </p>
        </div>

        {/* Phase Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {PROBATE_PHASES.map((phase, idx) => (
            <button
              key={phase.step}
              onClick={() => setActivePhase(idx)}
              className={`p-3 text-left rounded-[4px] border transition-all ${
                activePhase === idx
                  ? 'bg-[#121417] text-white border-[#121417] shadow-sm'
                  : 'bg-[#FBFBFA] border-[#E5E7EB] text-[#4B5563] hover:border-[#9CA3AF]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`font-mono text-xs font-bold ${
                    activePhase === idx ? 'text-[#BFA15F]' : 'text-[#9CA3AF]'
                  }`}
                >
                  {phase.step}
                </span>
                <span
                  className={`text-[10px] font-mono ${
                    activePhase === idx ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
                  }`}
                >
                  {phase.duration}
                </span>
              </div>
              <div
                className={`text-xs font-semibold line-clamp-1 ${
                  activePhase === idx ? 'text-white' : 'text-[#121417]'
                }`}
              >
                {phase.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Phase Deep Dive Card */}
        <div className="bg-[#FBFBFA] border border-[#E5E7EB] rounded-[4px] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Cols: Detailed Description & Statutory Deliverable */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-sm font-bold text-[#BFA15F] px-2 py-0.5 bg-[#FBF7EE] border border-[#E5E7EB] rounded-[2px]">
                  {isEn ? `PHASE ${PROBATE_PHASES[activePhase].step}` : `ETAPA ${PROBATE_PHASES[activePhase].step}`}
                </span>
                <span className="text-xs font-mono text-[#6B7280]">
                  {isEn ? 'Estimated Timeline:' : 'Plazo Estimado:'}{' '}
                  <strong>{PROBATE_PHASES[activePhase].duration}</strong>
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-[#121417] font-medium mb-2">
                {PROBATE_PHASES[activePhase].title}
              </h3>
              <div className="text-xs font-semibold text-[#1E3A8A] uppercase tracking-wider mb-5">
                {PROBATE_PHASES[activePhase].subtitle}
              </div>

              <p className="text-sm text-[#374151] leading-relaxed mb-6 font-normal">
                {PROBATE_PHASES[activePhase].description}
              </p>

              {/* Judicial Deliverable Box */}
              <div className="bg-white border border-[#E5E7EB] p-4 rounded-[4px] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#15803D] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#15803D] block">
                    {isEn ? 'OFFICIAL PHASE DELIVERABLE' : 'ENTREGABLE OFICIAL DE LA ETAPA'}
                  </span>
                  <span className="text-xs font-semibold text-[#121417]">
                    {PROBATE_PHASES[activePhase].keyDeliverable}
                  </span>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Dual Responsibilities (Client From Home vs Attorney in Court) */}
            <div className="lg:col-span-5 bg-white border border-[#E5E7EB] p-6 rounded-[4px]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#121417] mb-4 pb-2 border-b border-[#E5E7EB]">
                {isEn ? 'Operational Division of Responsibility' : 'División Operativa de Responsabilidades'}
              </h4>

              <div className="space-y-4">
                {/* Client Responsibility */}
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-[#EEF2FF] text-[#1E3A8A] rounded-[4px] mt-0.5">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#1E3A8A] uppercase tracking-wider block">
                      {isEn ? 'Your Action (From Home / US / Abroad)' : 'Su Acción (Desde su Residencia)'}
                    </span>
                    <p className="text-xs text-[#4B5563] mt-1">
                      {activePhase === 0 && (isEn ? 'Provide scanned family certificates and schedule preliminary consultation.' : 'Enviar copias digitales de partidas y coordinar consulta inicial.')}
                      {activePhase === 1 && (isEn ? 'Sign bilingual Power of Attorney before your local notary public and request state Hague Apostille.' : 'Firmar Poder Especial ante notario local en su ciudad y solicitar Apostilla de La Haya.')}
                      {activePhase === 2 && (isEn ? 'None. Relax while our litigation attorneys file the court docket in Argentina.' : 'Ninguna. Nuestro equipo patrocina la apertura judicial.')}
                      {activePhase === 3 && (isEn ? 'Receive certified copy of judicial Declaratoria de Herederos decree.' : 'Recibir testimonio judicial de la Declaratoria de Herederos.')}
                      {activePhase === 4 && (isEn ? 'Approve real estate purchase offer or retain property deed.' : 'Aprobar oferta de compraventa inmobiliaria o conservar el bien.')}
                      {activePhase === 5 && (isEn ? 'Provide domestic bank wire coordinates (routing/SWIFT) to receive funds.' : 'Informar coordenadas bancarias de su cuenta destino para la transferencia.')}
                    </p>
                  </div>
                </div>

                {/* Attorney Responsibility */}
                <div className="flex items-start gap-3 pt-3 border-t border-[#F3F4F6]">
                  <div className="p-1.5 bg-[#FBF7EE] text-[#A88B46] rounded-[4px] mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#A88B46] uppercase tracking-wider block">
                      {isEn ? 'Limeres Team (In Argentine Courts)' : 'Equipo Limeres (En Tribunales)'}
                    </span>
                    <p className="text-xs text-[#4B5563] mt-1">
                      {activePhase === 0 && (isEn ? 'Conflict search across Argentine judicial registries and cadastral cross-checks.' : 'Chequeo de conflictos de interés y verificación catastral.')}
                      {activePhase === 1 && (isEn ? 'Drafting custom dual-column Spanish/English Power of Attorney tailored to court rules.' : 'Redacción a medida del Poder Especial con cláusulas procesales específicas.')}
                      {activePhase === 2 && (isEn ? 'Sworn translation, court filing, tax registration (CDI/AFIP), and 30-day edicts publication.' : 'Traducción pública, apertura del expediente, obtención de CDI y edictos.')}
                      {activePhase === 3 && (isEn ? 'Proving kinship to judge and obtaining Declaratoria de Herederos decree.' : 'Acreditación de vínculos y obtención de la resolución judicial de herederos.')}
                      {activePhase === 4 && (isEn ? 'Securing court authorization for Tracto Abreviado and escrow oversight.' : 'Obtención de autorización judicial para Tracto Abreviado y retención impositiva.')}
                      {activePhase === 5 && (isEn ? 'Executing compliant SWIFT transfer under Central Bank (BCRA) rules.' : 'Ejecución de la transferencia bancaria en USD bajo normas del BCRA.')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation between phases */}
              <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <button
                  type="button"
                  disabled={activePhase === 0}
                  onClick={() => setActivePhase((prev) => Math.max(0, prev - 1))}
                  className="text-xs font-semibold text-[#4B5563] hover:text-[#121417] disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {isEn ? '← Previous Phase' : '← Etapa Anterior'}
                </button>

                <button
                  type="button"
                  disabled={activePhase === PROBATE_PHASES.length - 1}
                  onClick={() => setActivePhase((prev) => Math.min(PROBATE_PHASES.length - 1, prev + 1))}
                  className="text-xs font-bold text-[#1E3A8A] hover:text-[#172554] disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1"
                >
                  <span>{isEn ? 'Next Phase →' : 'Siguiente Etapa →'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
