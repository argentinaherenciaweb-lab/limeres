import React from 'react';
import { Phone, Mail, Globe, Clock, ShieldCheck, MessageSquare } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'es';
  onLanguageChange: (lang: 'en' | 'es') => void;
  onOpenConsultation: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onOpenConsultation,
  activeSection,
  onNavigate
}) => {
  const isEn = language === 'en';

  return (
    <header className="sticky top-0 z-40 bg-[#0B0C0E] border-b border-[#272A30] text-white">
      {/* Top Utility Bar */}
      <div className="hidden lg:block border-b border-[#1F2228] bg-[#07080A] text-xs text-[#9CA3AF] py-2 px-6">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#BFA15F] rounded-full inline-block"></span>
              <span className="text-[#E5E7EB] font-medium tracking-wide">
                BUENOS AIRES & U.S. JURISDICTIONS
              </span>
              <span className="text-[#6B7280]">·</span>
              <span>Av. Alvear 1780, Recoleta, CABA</span>
              <span className="text-[#6B7280]">·</span>
              <span>New York Liaison</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:+18005558390"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#BFA15F]" />
              <span>US Toll-Free: +1 (800) 555-8390</span>
            </a>
            <span className="text-[#374151]">|</span>
            <a
              href="https://wa.me/5491152782200"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#10B981] hover:text-[#34D399] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct: +54 (911) 5278-2200</span>
            </a>
            <span className="text-[#374151]">|</span>
            <div className="flex items-center gap-1 text-[#E5E7EB]">
              <Clock className="w-3.5 h-3.5 text-[#9CA3AF]" />
              <span>BA Time: {new Date().toLocaleTimeString('en-US', { timeZone: 'America/Argentina/Buenos_Aires', hour: '2-digit', minute: '2-digit' })} ART</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Brand Wordmark */}
        <div
          onClick={() => onNavigate('hero')}
          className="cursor-pointer flex flex-col group select-none"
        >
          <div className="flex items-baseline gap-2">
            <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#BFA15F] transition-colors">
              LIMERES
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] font-sans font-semibold text-[#BFA15F] uppercase">
              CROSS-BORDER LEGAL
            </span>
          </div>
          <span className="text-[10px] text-[#9CA3AF] tracking-[0.14em] uppercase font-sans">
            Argentine Inheritance, Probate & Succession Attorneys
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-[#D1D5DB]">
          <button
            onClick={() => onNavigate('overview')}
            className={`transition-colors hover:text-white py-1 relative ${
              activeSection === 'overview' ? 'text-white' : ''
            }`}
          >
            {isEn ? 'Overview' : 'Inicio'}
            {activeSection === 'overview' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#BFA15F]" />
            )}
          </button>

          <button
            onClick={() => onNavigate('practices')}
            className={`transition-colors hover:text-white py-1 relative ${
              activeSection === 'practices' ? 'text-white' : ''
            }`}
          >
            {isEn ? 'Practice Areas' : 'Áreas de Práctica'}
            {activeSection === 'practices' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#BFA15F]" />
            )}
          </button>

          <button
            onClick={() => onNavigate('calculator')}
            className={`transition-colors hover:text-white py-1 relative flex items-center gap-1.5 ${
              activeSection === 'calculator' ? 'text-white' : ''
            }`}
          >
            <span>{isEn ? 'Fee & Timeline Calculator' : 'Calculador de Costos'}</span>
            <span className="text-[9px] font-bold bg-[#1E3A8A] text-[#93C5FD] px-1.5 py-0.5 rounded-[2px] uppercase tracking-wider">
              Tool
            </span>
            {activeSection === 'calculator' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#BFA15F]" />
            )}
          </button>

          <button
            onClick={() => onNavigate('roadmap')}
            className={`transition-colors hover:text-white py-1 relative ${
              activeSection === 'roadmap' ? 'text-white' : ''
            }`}
          >
            {isEn ? 'Remote Roadmap' : 'Procedimiento Remoto'}
            {activeSection === 'roadmap' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#BFA15F]" />
            )}
          </button>

          <button
            onClick={() => onNavigate('precedents')}
            className={`transition-colors hover:text-white py-1 relative ${
              activeSection === 'precedents' ? 'text-white' : ''
            }`}
          >
            {isEn ? 'Case Precedents' : 'Casos Resueltos'}
            {activeSection === 'precedents' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#BFA15F]" />
            )}
          </button>

          <button
            onClick={() => onNavigate('checklist')}
            className={`transition-colors hover:text-white py-1 relative ${
              activeSection === 'checklist' ? 'text-white' : ''
            }`}
          >
            {isEn ? 'Dossier Readiness' : 'Documentación'}
            {activeSection === 'checklist' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#BFA15F]" />
            )}
          </button>

          <button
            onClick={() => onNavigate('chambers')}
            className={`transition-colors hover:text-white py-1 relative ${
              activeSection === 'chambers' ? 'text-white' : ''
            }`}
          >
            {isEn ? 'Chambers & Heritage' : 'Sede & Despacho'}
            {activeSection === 'chambers' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#BFA15F]" />
            )}
          </button>

          <button
            onClick={() => onNavigate('faq')}
            className={`transition-colors hover:text-white py-1 relative ${
              activeSection === 'faq' ? 'text-white' : ''
            }`}
          >
            FAQ
            {activeSection === 'faq' && (
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#BFA15F]" />
            )}
          </button>
        </nav>

        {/* Right CTA & Language Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Switcher */}
          <div className="flex items-center bg-[#16181D] border border-[#272A30] rounded-[4px] p-0.5 text-xs font-semibold">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 rounded-[2px] transition-colors ${
                language === 'en'
                  ? 'bg-[#BFA15F] text-[#0B0C0E] font-bold'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('es')}
              className={`px-2 py-1 rounded-[2px] transition-colors ${
                language === 'es'
                  ? 'bg-[#BFA15F] text-[#0B0C0E] font-bold'
                  : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              ES
            </button>
          </div>

          {/* Schedule Review Button */}
          <button
            onClick={onOpenConsultation}
            className="bg-[#BFA15F] hover:bg-[#A88B46] text-[#0B0C0E] text-xs sm:text-sm font-semibold tracking-wider uppercase px-4 sm:px-5 py-2.5 rounded-[4px] transition-all shadow-sm hover:shadow active:scale-[0.99] flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 hidden sm:inline" />
            <span>{isEn ? 'Schedule Case Review' : 'Consulta Profesional'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
