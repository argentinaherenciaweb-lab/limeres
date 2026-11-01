import React, { useState } from 'react';
import { ChevronDown, BookOpen, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/legalData';

interface LegalFAQProps {
  language: 'en' | 'es';
}

export const LegalFAQ: React.FC<LegalFAQProps> = ({ language }) => {
  const isEn = language === 'en';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openItem, setOpenItem] = useState<string | null>('travel-requirement');

  const categories = [
    { id: 'all', label: isEn ? 'All Questions' : 'Todas' },
    { id: 'remote_representation', label: isEn ? 'Remote Representation & Travel' : 'Representación Remota' },
    { id: 'probate_process', label: isEn ? 'Probate & Tracto Abreviado' : 'Proceso Sucesorio' },
    { id: 'funds_repatriation', label: isEn ? 'Funds & Wire Repatriation' : 'Repatriación de Fondos' },
    { id: 'taxes_fees', label: isEn ? 'Taxes & Attorney Fees' : 'Honorarios e Impuestos' }
  ];

  const filteredFaqs =
    selectedCategory === 'all'
      ? FAQ_DATA
      : FAQ_DATA.filter((item) => item.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="bg-[#FBFBFA] border-b border-[#E5E7EB] py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#BFA15F]"></span>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#121417] uppercase">
              {isEn ? 'STATUTORY & PROCEDURAL ANSWERS' : 'RESPUESTAS Y MARCO JURÍDICO'}
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl text-[#121417] font-normal leading-tight">
            {isEn
              ? 'Frequently Asked Questions on Argentine Inheritance Law'
              : 'Preguntas Frecuentes sobre Sucesiones y Herencias en Argentina'}
          </h2>

          <p className="text-sm sm:text-base text-[#6B7280] mt-3 leading-relaxed">
            {isEn
              ? 'Clear, statutory guidance addressing cross-border heirs’ foremost concerns regarding travel requirements, court durations, wire transfers, and attorney fee transparency.'
              : 'Respuestas jurídicas claras sobre comparecencia, tiempos judiciales, venta directa y transferencias internacionales.'}
          </p>
        </div>

        {/* Clean Interactive Category Filter Controls (Segmented, no pill clutter) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[#E5E7EB]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-[4px] transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#121417] text-white shadow-xs'
                  : 'bg-white border border-[#D1D5DB] text-[#4B5563] hover:text-[#121417] hover:border-[#9CA3AF]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3 max-w-4xl">
          {filteredFaqs.map((faq) => {
            const isOpen = openItem === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-[#E5E7EB] rounded-[4px] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FBFBFA] transition-colors"
                >
                  <span className="font-editorial text-lg text-[#121417] font-medium leading-snug">
                    {isEn ? faq.question : faq.questionEs}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#717680] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#BFA15F]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4B5563] leading-relaxed border-t border-[#F3F4F6] animate-fadeIn">
                    <p className="mb-4">
                      {isEn ? faq.answer : faq.answerEs}
                    </p>

                    {faq.legalBasis && (
                      <div className="flex items-center gap-1.5 text-[11px] text-[#1E3A8A] font-medium pt-2 border-t border-[#F3F4F6]">
                        <BookOpen className="w-3.5 h-3.5 text-[#BFA15F] flex-shrink-0" />
                        <span>
                          {isEn ? 'Statutory Reference:' : 'Marco Legal:'} {faq.legalBasis}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
