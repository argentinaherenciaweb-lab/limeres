import React from 'react';
import { Phone, Mail, MapPin, Scale, Shield, Globe, MessageSquare } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'es';
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigate,
  onOpenConsultation
}) => {
  const isEn = language === 'en';

  return (
    <footer className="bg-[#0B0C0E] border-t border-[#272A30] text-white pt-16 pb-24 lg:pb-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1F2228]">
          
          {/* Col 1 & 2: Firm Identity & Fiduciary Posture */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-editorial text-2xl font-bold tracking-tight text-white">
                  LIMERES
                </span>
                <span className="text-[10px] tracking-[0.25em] font-sans font-semibold text-[#BFA15F] uppercase">
                  CROSS-BORDER LEGAL
                </span>
              </div>
              <span className="text-[10px] text-[#9CA3AF] tracking-[0.14em] uppercase font-sans mt-0.5">
                Argentine Inheritance, Succession & Probate Counsel
              </span>
            </div>

            <p className="text-xs text-[#9CA3AF] leading-relaxed max-w-sm">
              {isEn
                ? 'Dedicated exclusively to cross-border succession, estate administration, Tracto Abreviado real estate liquidation, and lawful capital repatriation for heirs residing in the United States, Canada, and Europe.'
                : 'Firma especializada en sucesiones transfronterizas, administración de herencias, venta por Tracto Abreviado y repatriación de fondos para herederos en el exterior.'}
            </p>

            <div className="flex items-center gap-3 text-xs text-[#9CA3AF] pt-2">
              <span className="flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-[#BFA15F]" />
                <span>CPACF Matrícula T° 94 F° 321</span>
              </span>
              <span>·</span>
              <span>Justicia Nacional Civil</span>
            </div>
          </div>

          {/* Col 3: Practice Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {isEn ? 'Practice Areas' : 'Áreas de Práctica'}
            </h4>
            <ul className="space-y-2 text-xs text-[#9CA3AF]">
              <li>
                <button
                  onClick={() => onNavigate('practices')}
                  className="hover:text-white transition-colors"
                >
                  {isEn ? 'Probate & Intestate Succession' : 'Sucesiones Ab Intestato'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('practices')}
                  className="hover:text-white transition-colors"
                >
                  {isEn ? 'Farmland & Agrarian Estancias' : 'Campos y Estancias'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('practices')}
                  className="hover:text-white transition-colors"
                >
                  {isEn ? 'Tracto Abreviado Sales' : 'Venta por Tracto Abreviado'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('practices')}
                  className="hover:text-white transition-colors"
                >
                  {isEn ? 'Currency Repatriation (BCRA)' : 'Repatriación de Fondos'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('practices')}
                  className="hover:text-white transition-colors"
                >
                  {isEn ? 'Powers of Attorney & Apostilles' : 'Poderes y Apostillas'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Tools & Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {isEn ? 'Client Tools' : 'Herramientas'}
            </h4>
            <ul className="space-y-2 text-xs text-[#9CA3AF]">
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="hover:text-white transition-colors"
                >
                  {isEn ? 'Probate Cost & Fee Calculator' : 'Calculador de Costos'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('roadmap')}
                  className="hover:text-white transition-colors"
                >
                  {isEn ? '6-Phase Remote Protocol' : 'Protocolo Remoto 6 Etapas'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('precedents')}
                  className="hover:text-white transition-colors"
                >
                  {isEn ? 'Verified Precedent Cases' : 'Casos Testigo Verificados'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('checklist')}
                  className="hover:text-white transition-colors"
                >
                  {isEn ? 'Document Readiness Checklist' : 'Checklist de Documentos'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors"
                >
                  {isEn ? 'Statutory FAQ' : 'Preguntas Frecuentes'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Jurisdictions & Transatlantic Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {isEn ? 'Transatlantic Offices' : 'Sedes y Contacto'}
            </h4>
            
            <div className="text-xs text-[#9CA3AF] space-y-2.5">
              <div>
                <span className="font-semibold text-white block">Buenos Aires Headquarters</span>
                <span>Av. Alvear 1780, Recoleta</span>
                <span className="block">C1014AAR, Buenos Aires, Argentina</span>
                <span className="text-[#6B7280]">Tel: +54 (11) 5278-2200</span>
              </div>

              <div className="pt-2 border-t border-[#1F2228]">
                <span className="font-semibold text-white block">U.S. Transatlantic Liaison</span>
                <span>New York & Florida Coordination</span>
                <span className="block text-[#BFA15F]">Toll-Free: +1 (800) 555-8390</span>
              </div>

              <div className="pt-2 border-t border-[#1F2228]">
                <a
                  href="mailto:argentinaherencia.web@gmail.com"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#BFA15F]" />
                  <span>argentinaherencia.web@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory & Ethical Legal Disclaimers */}
        <div className="pt-8 pb-4 text-[11px] text-[#6B7280] leading-relaxed space-y-3">
          <p>
            {isEn
              ? 'LEGAL NOTICE & ATTORNEY-CLIENT PRIVILEGE: The information provided on this website is for general informational and educational purposes regarding Argentine estate and succession law and does not constitute formal legal advice. Transmitting an online intake form or scheduling a consultation does not create an attorney-client relationship until an engagement letter has been formally countersigned by Limeres Attorneys. Argentine probate proceedings are subject to the Civil and Commercial Code of the Nation and statutory court fee regulations.'
              : 'AVISO LEGAL Y SECRETO PROFESIONAL: La información contenida en este sitio tiene fines exclusivamente informativos sobre el régimen sucesorio argentino. La remisión de formularios de contacto no perfecciona relación profesional hasta la suscripción del respectivo convenio de honorarios.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs pt-4 border-t border-[#1F2228]">
            <div>
              © {new Date().getFullYear()} LIMERES Cross-Border Legal. All Rights Reserved. Admitted in Buenos Aires & Argentine Federal Jurisdiction.
            </div>

            <div className="flex items-center gap-6 text-[#9CA3AF]">
              <span>Attorney-Client Privilege Preserved</span>
              <span>·</span>
              <span>Law 27.423 Compliance</span>
              <span>·</span>
              <span>Hague Convention 1961</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
