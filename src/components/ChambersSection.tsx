import React from 'react';
import { MapPin, Scale, Shield, Building2, Phone, ArrowRight, Award } from 'lucide-react';

interface ChambersSectionProps {
  language: 'en' | 'es';
  onOpenConsultation: () => void;
}

export const ChambersSection: React.FC<ChambersSectionProps> = ({
  language,
  onOpenConsultation
}) => {
  const isEn = language === 'en';

  return (
    <section className="bg-[#FFFFFF] border-b border-[#E5E7EB] py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#BFA15F]"></span>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#121417] uppercase">
              {isEn ? 'TRANSATLANTIC LEGAL HERITAGE' : 'PRESENCIA Y SEDES TRANSATLÁNTICAS'}
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl text-[#121417] font-normal leading-tight">
            {isEn
              ? 'Rooted in Buenos Aires, Calibrated for Heirs in North America & Europe'
              : 'Sede en Buenos Aires, Orientados a Herederos en EE.UU. y Europa'}
          </h2>

          <p className="text-sm sm:text-base text-[#6B7280] mt-3 leading-relaxed">
            {isEn
              ? 'Our physical presence along Avenida Alvear in the historic heart of Recoleta places our attorneys within minutes of the National Civil Courts, the Real Estate Property Registry, and the Central Bank of Argentina.'
              : 'Nuestras oficinas en Avenida Alvear, en pleno corazón de Recoleta, nos sitúan a minutos de los Tribunales Civiles, el Registro de la Propiedad Inmueble y el Banco Central.'}
          </p>
        </div>

        {/* 4-Image Editorial Architectural Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1: Buenos Aires Classical Headquarters */}
          <div className="bg-[#FBFBFA] border border-[#E5E7EB] rounded-[4px] overflow-hidden group hover:shadow-md transition-all">
            <div className="h-52 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80"
                alt="Avenida Alvear Recoleta"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <span className="text-[10px] font-mono uppercase font-bold text-[#BFA15F] block">
                  BUENOS AIRES
                </span>
                <span className="text-xs font-semibold">Av. Alvear 1780, Recoleta</span>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-editorial text-base font-medium text-[#121417] mb-1.5">
                {isEn ? 'Chambers & Client Reception' : 'Sede Central y Despacho'}
              </h4>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                {isEn
                  ? 'Our primary litigation chambers coordinating probate dockets across all Argentine jurisdictions.'
                  : 'Sede de litigación y coordinación procesal para sucesiones en todo el país.'}
              </p>
            </div>
          </div>

          {/* Card 2: Legal Library & Jurisprudence Archive */}
          <div className="bg-[#FBFBFA] border border-[#E5E7EB] rounded-[4px] overflow-hidden group hover:shadow-md transition-all">
            <div className="h-52 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
                alt="Law Library & Legal Research"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <span className="text-[10px] font-mono uppercase font-bold text-[#BFA15F] block">
                  LEGAL RESEARCH
                </span>
                <span className="text-xs font-semibold">Civil & Commercial Code</span>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-editorial text-base font-medium text-[#121417] mb-1.5">
                {isEn ? 'Estate Title & Registry Audits' : 'Auditoría Registral y Títulos'}
              </h4>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                {isEn
                  ? 'Rigorous examination of property deeds, cadastral liens, and inheritance tax clearances.'
                  : 'Estudio exhaustivo de títulos, gravámenes y solvencia impositiva previa a la venta.'}
              </p>
            </div>
          </div>

          {/* Card 3: Agricultural Pampas Land Administration */}
          <div className="bg-[#FBFBFA] border border-[#E5E7EB] rounded-[4px] overflow-hidden group hover:shadow-md transition-all">
            <div className="h-52 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
                alt="Agrarian Pampas Estancias"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <span className="text-[10px] font-mono uppercase font-bold text-[#BFA15F] block">
                  PAMPA HÚMEDA
                </span>
                <span className="text-xs font-semibold">Farmland & Estancias</span>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-editorial text-base font-medium text-[#121417] mb-1.5">
                {isEn ? 'Agricultural Succession Oversight' : 'Sucesiones Agrarias y Campos'}
              </h4>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                {isEn
                  ? 'Representing foreign heirs in large agrarian estates, grain leases, and rural conveyances.'
                  : 'Gestión y venta de campos agrícolas, contratos de arrendamiento y partición rural.'}
              </p>
            </div>
          </div>

          {/* Card 4: Transatlantic Coordination & Notary Signing */}
          <div className="bg-[#FBFBFA] border border-[#E5E7EB] rounded-[4px] overflow-hidden group hover:shadow-md transition-all">
            <div className="h-52 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
                alt="Notary & Power of Attorney Signing"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <span className="text-[10px] font-mono uppercase font-bold text-[#BFA15F] block">
                  TRANSATLANTIC
                </span>
                <span className="text-xs font-semibold">U.S. & European Liaison</span>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-editorial text-base font-medium text-[#121417] mb-1.5">
                {isEn ? 'Remote Notary & Hague Apostille' : 'Poder Notarial y Apostilla'}
              </h4>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                {isEn
                  ? 'Bilingual instructions enabling heirs to execute valid powers of attorney in their home state.'
                  : 'Instrucciones bilingües para otorgar poderes notariales válidos ante notario local.'}
              </p>
            </div>
          </div>
        </div>

        {/* Fiduciary Banner with Contact Callout */}
        <div className="bg-[#121417] text-white rounded-[4px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#272A30]">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[10px] font-bold tracking-[0.14em] text-[#BFA15F] uppercase font-mono">
              {isEn ? 'ESTABLISHED 2004 · RECOLETA, BUENOS AIRES' : 'FUNDADO EN 2004 · RECOLETA, BUENOS AIRES'}
            </span>
            <h3 className="font-editorial text-2xl font-medium">
              {isEn ? 'Entrust Your Argentine Inheritance to Specialized Counsel' : 'Confíe su Sucesión en Argentina a Especialistas'}
            </h3>
            <p className="text-xs text-[#9CA3AF] max-w-xl">
              {isEn
                ? 'Direct attorney access without intermediary delays. We handle all court hearings, notarizations, tax filings, and foreign exchange bank operations.'
                : 'Atención personalizada sin intermediarios. Gestionamos audiencias, escrituras, liquidación fiscal y transferencias bancarias.'}
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="bg-[#BFA15F] hover:bg-[#A88B46] text-[#0B0C0E] text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-[4px] transition-all flex items-center gap-2 flex-shrink-0 shadow-sm"
          >
            <span>{isEn ? 'Schedule Consultation' : 'Iniciar Consulta'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
