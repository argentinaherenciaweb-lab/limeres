import React, { useState } from 'react';
import {
  Scale,
  Building2,
  FileCheck2,
  DollarSign,
  ScrollText,
  Search,
  ArrowRight,
  CheckCircle2,
  X,
  Clock,
  BookOpen
} from 'lucide-react';
import { PRACTICE_AREAS } from '../data/legalData';
import { PracticeArea } from '../types/legal';

interface PracticeAreasProps {
  language: 'en' | 'es';
  onOpenConsultation: () => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({
  language,
  onOpenConsultation
}) => {
  const isEn = language === 'en';
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case 'probate-succession':
        return <Scale className="w-5 h-5 text-[#1E3A8A]" />;
      case 'real-estate-farmland':
        return <Building2 className="w-5 h-5 text-[#BFA15F]" />;
      case 'tracto-abreviado':
        return <FileCheck2 className="w-5 h-5 text-[#1E3A8A]" />;
      case 'funds-repatriation':
        return <DollarSign className="w-5 h-5 text-[#BFA15F]" />;
      case 'apostille-poa':
        return <ScrollText className="w-5 h-5 text-[#1E3A8A]" />;
      case 'asset-search':
        return <Search className="w-5 h-5 text-[#BFA15F]" />;
      default:
        return <Scale className="w-5 h-5 text-[#1E3A8A]" />;
    }
  };

  return (
    <section id="practices" className="bg-[#FBFBFA] border-b border-[#E5E7EB] py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#BFA15F]"></span>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#121417] uppercase">
              {isEn ? 'CORE PRACTICE SPECIALIZATIONS' : 'ÁREAS DE PRÁCTICA PROFESIONAL'}
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl text-[#121417] font-normal leading-tight">
            {isEn
              ? 'International Estate Administration & Cross-Border Wealth Transfer'
              : 'Administración Sucesoria Internacional y Transmisión de Bienes'}
          </h2>

          <p className="text-sm sm:text-base text-[#6B7280] mt-3 leading-relaxed">
            {isEn
              ? 'Our practice is strictly focused on cross-border inheritance matters involving Argentine real estate, agricultural assets, and financial holdings for non-resident beneficiaries.'
              : 'Nuestra firma se dedica con exclusividad a sucesiones transfronterizas que involucran bienes inmuebles, campos y activos financieros en Argentina para herederos en el extranjero.'}
          </p>
        </div>

        {/* 6-Card Minimalist Architectural Grid (4px corners, 1px border-subtle, Level 2 hover lift) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICE_AREAS.map((practice) => (
            <div
              key={practice.id}
              onClick={() => setSelectedPractice(practice)}
              className="bg-white border border-[#E5E7EB] rounded-[4px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(18,20,23,0.08),0_2px_6px_rgba(18,20,23,0.04)] cursor-pointer group"
            >
              <div>
                {/* Framed Architectural Image (4px radius with 1px hairline border) */}
                <div className="relative mb-4 overflow-hidden rounded-[4px] border border-[#E5E7EB] h-44 bg-[#F3F4F6]">
                  <img
                    src={practice.imageUrl}
                    alt={practice.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                  
                  {/* Floating Icon & Code Badge */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                    <div className="p-1.5 bg-[#0B0C0E]/85 backdrop-blur-xs rounded-[3px] border border-[#272A30]">
                      {getIcon(practice.id)}
                    </div>
                    <span className="font-mono text-xs font-bold text-[#BFA15F] bg-[#0B0C0E]/85 px-2 py-0.5 rounded-[2px] border border-[#272A30]">
                      {practice.code}
                    </span>
                  </div>
                </div>

                {/* Eyebrow */}
                <div className="text-[10px] font-bold tracking-[0.12em] text-[#717680] uppercase mb-1.5">
                  {practice.eyebrow}
                </div>

                {/* Card Title */}
                <h3 className="font-editorial text-xl font-medium text-[#121417] mb-2.5 group-hover:text-[#1E3A8A] transition-colors leading-snug">
                  {isEn ? practice.title : practice.spanishTitle}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                  {practice.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-1.5 mb-5">
                  {practice.bullets.slice(0, 3).map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#374151]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BFA15F] mt-1.5 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Meta & Action Link */}
              <div className="pt-3.5 border-t border-[#F3F4F6] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#9CA3AF] font-mono">
                  {practice.typicalDuration}
                </span>

                <span className="text-xs font-bold text-[#121417] group-hover:text-[#BFA15F] flex items-center gap-1.5 transition-colors">
                  <span>{isEn ? 'View Guidelines' : 'Ver Guía'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Practice Detail Modal */}
        {selectedPractice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
            <div className="bg-white max-w-2xl w-full rounded-[4px] border border-[#121417] p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedPractice(null)}
                className="absolute top-5 right-5 text-[#9CA3AF] hover:text-[#121417] p-1 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2 text-xs font-bold tracking-[0.14em] text-[#BFA15F] uppercase">
                <span>{selectedPractice.eyebrow}</span>
                <span>·</span>
                <span>{selectedPractice.code}</span>
              </div>

              <div className="mb-4 overflow-hidden rounded-[4px] border border-[#E5E7EB] h-48 sm:h-56">
                <img
                  src={selectedPractice.imageUrl}
                  alt={selectedPractice.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-[#121417] font-medium mb-3">
                {isEn ? selectedPractice.title : selectedPractice.spanishTitle}
              </h3>

              <div className="flex flex-wrap items-center gap-4 py-3 border-y border-[#E5E7EB] mb-5 text-xs text-[#4B5563]">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#1E3A8A]" />
                  <span className="font-semibold text-[#121417]">{selectedPractice.statute}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#BFA15F]" />
                  <span>
                    {isEn ? 'Estimated Duration:' : 'Plazo Estimado:'}{' '}
                    <strong>{selectedPractice.typicalDuration}</strong>
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#374151] leading-relaxed mb-6 font-normal">
                {selectedPractice.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#121417] mb-3">
                  {isEn ? 'Key Legal Scope & Deliverables:' : 'Alcance del Procedimiento:'}
                </h4>
                <div className="space-y-2.5">
                  {selectedPractice.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#374151]">
                      <CheckCircle2 className="w-4 h-4 text-[#15803D] flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB] flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={() => setSelectedPractice(null)}
                  className="px-4 py-2.5 border border-[#D1D5DB] hover:bg-[#F3F4F6] text-xs font-semibold rounded-[4px] text-[#374151]"
                >
                  {isEn ? 'Close' : 'Cerrar'}
                </button>
                <button
                  onClick={() => {
                    setSelectedPractice(null);
                    onOpenConsultation();
                  }}
                  className="px-5 py-2.5 bg-[#121417] hover:bg-[#1E2229] text-white text-xs font-bold uppercase tracking-wider rounded-[4px] flex items-center justify-center gap-2"
                >
                  <span>{isEn ? 'Consult on This Practice Area' : 'Consultar sobre esta Área'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#BFA15F]" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
