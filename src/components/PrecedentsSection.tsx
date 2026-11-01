import React, { useState } from 'react';
import {
  ShieldAlert,
  CheckCircle2,
  Clock,
  MapPin,
  Building2,
  DollarSign,
  PlaneTakeoff,
  Award,
  ChevronRight
} from 'lucide-react';
import { CASE_PRECEDENTS } from '../data/legalData';
import { CasePrecedent } from '../types/legal';

interface PrecedentsSectionProps {
  language: 'en' | 'es';
  onOpenConsultation: () => void;
}

export const PrecedentsSection: React.FC<PrecedentsSectionProps> = ({
  language,
  onOpenConsultation
}) => {
  const isEn = language === 'en';
  const [selectedCase, setSelectedCase] = useState<CasePrecedent>(CASE_PRECEDENTS[0]);

  return (
    <section id="precedents" className="bg-[#FBFBFA] border-b border-[#E5E7EB] py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#BFA15F]"></span>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#121417] uppercase">
              {isEn ? 'VERIFIED CROSS-BORDER PRECEDENTS' : 'CASOS TESTIGO Y ANTECEDENTES'}
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl text-[#121417] font-normal leading-tight">
            {isEn
              ? 'Proven Cross-Border Case Outcomes & Asset Liquidations'
              : 'Precedentes Reales de Sucesiones y Liquidación de Activos'}
          </h2>

          <p className="text-sm sm:text-base text-[#6B7280] mt-3 leading-relaxed">
            {isEn
              ? 'Every cross-border estate presents unique hurdles: lost deeds, estranged co-heirs, bank secrecy, and currency compliance. Explore how our judicial strategies deliver lawful results.'
              : 'Cada sucesión internacional involucra particularidades procesales, notariales y cambiarias resueltas con absoluta solvencia técnica.'}
          </p>
        </div>

        {/* Dual Layout: Case Selector on Left, Expanded Case Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 4 Cols: Case Selector List */}
          <div className="lg:col-span-4 space-y-3">
            {CASE_PRECEDENTS.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedCase(item)}
                className={`p-4 sm:p-5 rounded-[4px] border cursor-pointer transition-all ${
                  selectedCase.id === item.id
                    ? 'bg-white border-[#121417] shadow-sm'
                    : 'bg-[#F3F4F6] border-[#E5E7EB] hover:bg-white text-[#4B5563]'
                }`}
              >
                <div className="flex gap-3.5 items-center">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-[3px] border border-[#E5E7EB] flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center text-[10px] uppercase font-mono mb-1">
                      <span className="text-[#BFA15F] font-bold">{item.caseCode}</span>
                      <span className="text-[#6B7280] font-semibold">{item.totalValueUsd}</span>
                    </div>

                    <h3
                      className={`font-editorial text-sm font-medium line-clamp-1 mb-1 ${
                        selectedCase.id === item.id ? 'text-[#121417]' : 'text-[#374151]'
                      }`}
                    >
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-[11px] text-[#6B7280]">
                      <MapPin className="w-3 h-3 text-[#1E3A8A] flex-shrink-0" />
                      <span className="line-clamp-1">{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-4 bg-white border border-[#E5E7EB] rounded-[4px] text-xs text-[#6B7280]">
              <span className="font-semibold text-[#121417] block mb-1">
                {isEn ? 'Confidentiality Guaranteed' : 'Secreto Profesional'}
              </span>
              {isEn
                ? 'Case names and specific familial identifiers are anonymized to protect client privacy in accordance with attorney-client confidentiality rules.'
                : 'Los datos identificatorios se encuentran anonimizados en resguardo del secreto profesional.'}
            </div>
          </div>

          {/* Right 8 Cols: Detailed Case Profile */}
          <div className="lg:col-span-8 bg-white border border-[#E5E7EB] rounded-[4px] p-6 sm:p-8 shadow-sm">
            {/* Header Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E5E7EB] mb-5">
              <div>
                <span className="text-[10px] font-bold tracking-[0.14em] text-[#BFA15F] uppercase font-mono">
                  {selectedCase.caseCode} · {selectedCase.location}
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#121417] font-medium mt-1">
                  {selectedCase.title}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#EEF2FF] text-[#1E3A8A] rounded-[2px] text-xs font-semibold">
                  {selectedCase.durationMonths} {isEn ? 'Months Total' : 'Meses'}
                </span>
                <span className="px-3 py-1 bg-[#F0FDF4] text-[#15803D] rounded-[2px] text-xs font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Zero In-Person Travel' : 'Sin Viajes'}</span>
                </span>
              </div>
            </div>

            {/* Featured Case Real Estate / Asset Image */}
            <div className="relative mb-6 overflow-hidden rounded-[4px] border border-[#E5E7EB] h-60 sm:h-72 bg-[#F3F4F6]">
              <img
                src={selectedCase.imageUrl}
                alt={selectedCase.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 text-white flex justify-between items-end">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#BFA15F] font-bold block">
                    {isEn ? 'Liquidated Estate Asset' : 'Activo Liquidado'}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold">{selectedCase.assetSummary}</span>
                </div>
                <span className="font-mono text-base font-bold bg-[#0B0C0E]/90 px-3 py-1 rounded-[2px] border border-[#272A30] text-[#BFA15F]">
                  {selectedCase.totalValueUsd}
                </span>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-[#F8F9FA] border border-[#E5E7EB] rounded-[4px] mb-6 text-xs">
              <div>
                <span className="text-[#9CA3AF] uppercase text-[10px] font-bold block mb-0.5">
                  {isEn ? 'Client Residence' : 'Residencia del Cliente'}
                </span>
                <span className="font-medium text-[#121417]">{selectedCase.clientLocation}</span>
              </div>

              <div>
                <span className="text-[#9CA3AF] uppercase text-[10px] font-bold block mb-0.5">
                  {isEn ? 'Estate Valuation' : 'Valuación del Acervo'}
                </span>
                <span className="font-mono font-bold text-[#121417]">{selectedCase.totalValueUsd}</span>
              </div>

              <div>
                <span className="text-[#9CA3AF] uppercase text-[10px] font-bold block mb-0.5">
                  {isEn ? 'Asset Portfolio' : 'Composición de Bienes'}
                </span>
                <span className="font-medium text-[#121417] line-clamp-1">{selectedCase.assetSummary}</span>
              </div>
            </div>

            {/* Narrative: Challenge vs Solution vs Outcome */}
            <div className="space-y-5 mb-8 text-xs sm:text-sm">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#991B1B] mb-1 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-[#991B1B]" />
                  <span>{isEn ? 'The Legal & Factual Challenge' : 'El Desafío Fáctico y Procesal'}</span>
                </h4>
                <p className="text-[#4B5563] leading-relaxed pl-5 font-normal">
                  {selectedCase.keyChallenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A] mb-1 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#1E3A8A]" />
                  <span>{isEn ? 'The Limeres Strategic Solution' : 'Estrategia Jurídica Aplicada'}</span>
                </h4>
                <p className="text-[#4B5563] leading-relaxed pl-5 font-normal">
                  {selectedCase.legalSolution}
                </p>
              </div>

              <div className="p-4 bg-[#F0FDF4] border border-[#DCFCE7] rounded-[4px]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#15803D] mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
                  <span>{isEn ? 'Final Judicial & Financial Outcome' : 'Resultado Judicial y Liquidación'}</span>
                </h4>
                <p className="text-[#166534] leading-relaxed pl-5 text-xs font-medium">
                  {selectedCase.outcome}
                </p>
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="pt-4 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#6B7280]">
                {isEn
                  ? 'Have a similar estate profile in Buenos Aires or Argentine provinces?'
                  : '¿Tiene un caso similar en Buenos Aires o el interior del país?'}
              </span>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#121417] hover:bg-[#1E2229] text-white text-xs font-bold uppercase tracking-wider rounded-[4px] transition-colors flex items-center justify-center gap-2"
              >
                <span>{isEn ? 'Discuss Your Estate Details' : 'Analizar su Caso'}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#BFA15F]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
