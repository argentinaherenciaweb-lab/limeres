import React, { useState } from 'react';
import { ShieldCheck, Phone, MessageSquare, ArrowRight, X } from 'lucide-react';

interface StickyConsultationBarProps {
  language: 'en' | 'es';
  onOpenConsultation: () => void;
}

export const StickyConsultationBar: React.FC<StickyConsultationBarProps> = ({
  language,
  onOpenConsultation
}) => {
  const isEn = language === 'en';
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  if (isDismissed) return null;

  return (
    <aside
      aria-label={isEn ? "Legal Consultation Assistance Bar" : "Barra de Asistencia Legal"}
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B0C0E]/95 backdrop-blur-md border-t border-[#272A30] text-white py-3 px-4 sm:px-6 shadow-[0_-4px_24px_rgba(0,0,0,0.3)] transition-all"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Availability Status Indicator */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 bg-[#10B981] rounded-full inline-block animate-pulse"></span>
            <span className="w-2.5 h-2.5 bg-[#10B981] rounded-full inline-block absolute opacity-50 scale-150"></span>
          </div>

          <div className="text-xs sm:text-sm">
            <span className="font-semibold text-white tracking-wide">
              {isEn ? 'Argentina & U.S. Jurisdictions' : 'Jurisdicción Argentina y EE.UU.'}
            </span>
            <span className="text-[#6B7280] mx-2">|</span>
            <span className="text-[#D1D5DB] font-normal">
              {isEn ? 'Next Available Consultation Today' : 'Próxima Consulta Disponible Hoy'}
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
          <a
            href="tel:+18005558390"
            className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-[4px] border border-[#272A30] text-xs font-semibold text-[#D1D5DB] hover:text-white hover:border-[#4B5563] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#BFA15F]" />
            <span>+1 (800) 555-8390</span>
          </a>

          <a
            href="https://wa.me/5491152782200"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-[4px] border border-[#272A30] text-xs font-semibold text-[#10B981] hover:border-[#10B981] transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="flex-1 sm:flex-initial bg-[#BFA15F] hover:bg-[#A88B46] text-[#0B0C0E] text-xs font-bold uppercase tracking-wider px-4 sm:px-5 py-2 rounded-[4px] transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.99]"
          >
            <span>{isEn ? 'Schedule Case Review' : 'Agendar Consulta'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            className="text-[#6B7280] hover:text-white p-1 ml-1"
            aria-label="Dismiss bar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
