import React, { useState } from 'react';
import {
  Shield,
  Clock,
  Scale,
  Award,
  CheckCircle2,
  Building2,
  FileText,
  DollarSign,
  ChevronRight,
  Printer,
  Sparkles,
  PhoneCall,
  Lock,
  ArrowRight
} from 'lucide-react';
import { AssetType, ArgentineProvince, HeirResidency, CaseIntakeSubmission } from '../types/legal';

interface HeroIntakeProps {
  language: 'en' | 'es';
  onOpenConsultation: () => void;
  onExploreCalculator: () => void;
}

export const HeroIntake: React.FC<HeroIntakeProps> = ({
  language,
  onOpenConsultation,
  onExploreCalculator
}) => {
  const isEn = language === 'en';

  // Form State
  const [assetTypes, setAssetTypes] = useState<AssetType[]>(['residential_property']);
  const [province, setProvince] = useState<ArgentineProvince>('caba');
  const [heirResidency, setHeirResidency] = useState<HeirResidency>('united_states');
  const [estimatedValue, setEstimatedValue] = useState<number>(250000);
  const [willExists, setWillExists] = useState<'yes_argentine' | 'yes_foreign' | 'no_intestate' | 'unknown'>('no_intestate');
  const [hasDeathCert, setHasDeathCert] = useState<boolean>(true);
  const [hasApostille, setHasApostille] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  // Submission result state
  const [submittedData, setSubmittedData] = useState<CaseIntakeSubmission | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const toggleAssetType = (type: AssetType) => {
    if (assetTypes.includes(type)) {
      if (assetTypes.length > 1) {
        setAssetTypes(assetTypes.filter(t => t !== type));
      }
    } else {
      setAssetTypes([...assetTypes, type]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newSubmission: CaseIntakeSubmission = {
        id: `ARG-EST-${Math.floor(100000 + Math.random() * 900000)}`,
        submittedAt: new Date().toISOString(),
        fullName: fullName || 'International Heir',
        email: email || 'confidential@client.com',
        phone: phone || '+1 (US Client)',
        preferredLanguage: language,
        heirResidency,
        province,
        assetTypes,
        estimatedValueUsd: estimatedValue,
        willExists,
        hasDeathCert,
        hasApostille,
        notes,
        urgency: 'immediate'
      };
      setSubmittedData(newSubmission);
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section className="bg-[#FBFBFA] border-b border-[#E5E7EB] pt-8 pb-16 lg:pt-14 lg:pb-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 12-Column Architectural Layout: 7 Cols Left (Credentials & Authority) + 5 Cols Right (Intake Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT 7 COLUMNS: Editorial Authority & Fiduciary Posture */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Discreet Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#BFA15F]"></span>
              <span className="text-[11px] font-bold tracking-[0.14em] text-[#121417] uppercase">
                {isEn ? 'CROSS-BORDER ESTATES · ARGENTINE SUCCESSION LAW' : 'SUCESIONES INTERNACIONALES · DERECHO ARGENTINO'}
              </span>
            </div>

            {/* Editorial Serif Hero Headline */}
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-[3.25rem] leading-[1.12] text-[#121417] font-normal tracking-tight mb-6">
              {isEn ? (
                <>
                  Argentine Inheritance & Probate Administration for Heirs Abroad{' '}
                  <span className="italic text-[#1E3A8A]">Without Traveling to Argentina.</span>
                </>
              ) : (
                <>
                  Administración de Sucesiones y Herencias en Argentina para Herederos en el Exterior{' '}
                  <span className="italic text-[#1E3A8A]">sin necesidad de viajar.</span>
                </>
              )}
            </h1>

            {/* Body Explanation */}
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-6 max-w-2xl font-normal">
              {isEn
                ? 'From obtaining judicial Declaratoria de Herederos to liquidating real estate via Tracto Abreviado and repatriating dollar proceeds directly to your U.S. or European bank account under Central Bank (BCRA) regulations. Full bilingual representation backed by 20+ years of cross-border probate experience.'
                : 'Desde la obtención de la Declaratoria de Herederos hasta la liquidación inmobiliaria por Tracto Abreviado y la repatriación de fondos en dólares a su cuenta bancaria del exterior conforme a la normativa del Banco Central (BCRA).'}
            </p>

            {/* Editorial Framed Architectural Banner (Parchment hairline border) */}
            <div className="relative mb-6 rounded-[4px] border border-[#E5E7EB] overflow-hidden bg-white shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 h-32 sm:h-36">
                <div className="relative sm:col-span-2 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80"
                    alt="Recoleta Architecture, Buenos Aires"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-2.5 left-3 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#BFA15F] font-bold block">
                      AVENIDA ALVEAR · RECOLETA
                    </span>
                    <span className="text-xs font-medium">Headquarters & Historic Property Administration</span>
                  </div>
                </div>
                <div className="p-3 bg-[#FBFBFA] flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-[#E5E7EB] text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#717680] block mb-0.5">
                      {isEn ? 'Court Jurisdiction' : 'Fuero Judicial'}
                    </span>
                    <span className="font-editorial text-xs font-semibold text-[#121417] leading-tight block">
                      Justicia Nacional en lo Civil
                    </span>
                  </div>
                  <div className="text-[10px] text-[#6B7280]">
                    <span>CABA & Argentine Federal Courts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Fiduciary Authority Pillars (Unboxed, clean typographic structure) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-[#E5E7EB] mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-[#EEF2FF] rounded-[4px] text-[#1E3A8A]">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#121417]">
                    {isEn ? 'Full Judicial Authority' : 'Plena Jurisdicción Judicial'}
                  </h4>
                  <p className="text-xs text-[#6B7280] mt-0.5 leading-normal">
                    {isEn
                      ? 'Admitted to the Bar of Buenos Aires (CPACF) and Argentine Federal Courts.'
                      : 'Matriculados en el Colegio Público de la Abogacía (CPACF) y Fuero Federal.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-[#FBF7EE] rounded-[4px] text-[#A88B46]">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#121417]">
                    {isEn ? 'Zero Travel Required' : 'Cero Desplazamientos'}
                  </h4>
                  <p className="text-xs text-[#6B7280] mt-0.5 leading-normal">
                    {isEn
                      ? 'Bilingual Powers of Attorney executed before your local U.S./foreign notary with Hague Apostille.'
                      : 'Poder Especial otorgado ante notario local en EE.UU. o Europa con Apostilla.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-[#EEF2FF] rounded-[4px] text-[#1E3A8A]">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#121417]">
                    {isEn ? 'Direct Tracto Abreviado Sale' : 'Venta por Tracto Abreviado'}
                  </h4>
                  <p className="text-xs text-[#6B7280] mt-0.5 leading-normal">
                    {isEn
                      ? 'Convey property directly from probate to the buyer, eliminating dual registration fees.'
                      : 'Transferencia directa al comprador ahorrando doble costo registral (Ley 17.801).'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-[#FBF7EE] rounded-[4px] text-[#A88B46]">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#121417]">
                    {isEn ? 'Lawful SWIFT Repatriation' : 'Repatriación Bancaria SWIFT'}
                  </h4>
                  <p className="text-xs text-[#6B7280] mt-0.5 leading-normal">
                    {isEn
                      ? 'Direct bank wire transfers in USD to international beneficiary bank accounts.'
                      : 'Transferencias bancarias oficiales en USD a cuentas internacionales.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Client Case Quote */}
            <div className="bg-white border border-[#E5E7EB] p-5 rounded-[4px] shadow-sm relative">
              <span className="font-editorial text-4xl text-[#BFA15F] leading-none absolute top-3 left-4 select-none opacity-40">
                “
              </span>
              <p className="font-editorial italic text-base sm:text-lg text-[#1F2937] pl-6 mb-3">
                {isEn
                  ? '“Limeres represented our family from Boston, probated my grandfather’s estate in Buenos Aires, sold his apartment in Recoleta via Tracto Abreviado, and wired the proceeds to our accounts without my brother or me having to take time off work or travel to Argentina.”'
                  : '“Limeres tramitó la sucesión de mi abuelo en Buenos Aires, vendió el departamento en Recoleta por Tracto Abreviado y nos transfirió los fondos a Boston sin que tuviéramos que viajar a Argentina.”'}
              </p>
              <div className="flex items-center justify-between pl-6 text-xs text-[#6B7280] border-t border-[#F3F4F6] pt-2">
                <span className="font-semibold text-[#111827]">
                  {isEn ? 'M. Vance & Family · Massachusetts, USA' : 'Familia Vance · Massachusetts, EE.UU.'}
                </span>
                <span className="text-[#9CA3AF]">
                  {isEn ? 'Estate: Recoleta Residential & Bank Holdings' : 'Bienes: Inmueble en Recoleta y Depósitos'}
                </span>
              </div>
            </div>

            {/* Quick Link to Calculator */}
            <div className="mt-6 flex items-center gap-4">
              <button
                onClick={onExploreCalculator}
                className="text-xs font-semibold tracking-wider uppercase text-[#1E3A8A] hover:text-[#172554] flex items-center gap-1.5 transition-colors"
              >
                <span>{isEn ? 'Try the Argentine Inheritance Cost & Fee Calculator' : 'Calcular Costos y Aranceles de la Sucesión'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* RIGHT 5 COLUMNS: High-Intent Intake Form (Fiduciary Card with Gold Top Stroke) */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#E5E7EB] rounded-[4px] shadow-sm relative overflow-hidden">
              {/* Elegant Gold Top Stroke (3px solid #BFA15F) */}
              <div className="h-[3px] bg-[#BFA15F] w-full absolute top-0 left-0"></div>

              {submittedData ? (
                /* Post-Submission Result Dossier */
                <div className="p-6 sm:p-8 animate-fadeIn">
                  <div className="flex items-center gap-2 text-[#15803D] mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {isEn ? 'Case File Initiated & Privilege Preserved' : 'Expediente Iniciado y Privilegio Preservado'}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl text-[#121417] mb-2 font-medium">
                    {isEn ? 'Preliminary Estate Review Confirmed' : 'Evaluación Preliminar Confirmada'}
                  </h3>

                  <p className="text-xs text-[#4B5563] leading-relaxed mb-6">
                    {isEn
                      ? 'Our transatlantic legal team is reviewing your estate particulars under the Argentine Civil and Commercial Code. An attorney will contact you within 24 business hours.'
                      : 'Nuestro equipo legal está revisando los antecedentes sucesorios. Un abogado se comunicará con usted dentro de las próximas 24 horas hábiles.'}
                  </p>

                  {/* Dossier Code Card */}
                  <div className="bg-[#F8F9FA] border border-[#E5E7EB] p-4 rounded-[4px] mb-6">
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="text-[#6B7280] uppercase tracking-wider font-semibold">
                        {isEn ? 'Dossier Reference' : 'Expediente Ref.'}
                      </span>
                      <span className="font-mono font-bold text-[#121417]">{submittedData.id}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="text-[#6B7280]">{isEn ? 'Primary Beneficiary' : 'Beneficiario'}</span>
                      <span className="text-[#121417] font-medium">{submittedData.fullName}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="text-[#6B7280]">{isEn ? 'Jurisdiction' : 'Jurisdicción'}</span>
                      <span className="text-[#121417] font-medium uppercase">{submittedData.province}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#6B7280]">{isEn ? 'Estimated Estate Asset' : 'Valuación Estimada'}</span>
                      <span className="text-[#121417] font-medium">
                        ${submittedData.estimatedValueUsd.toLocaleString()} USD
                      </span>
                    </div>
                  </div>

                  {/* Immediate Next Steps */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2.5 text-xs">
                      <div className="w-4 h-4 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-[10px] mt-0.5">
                        1
                      </div>
                      <p className="text-[#374151]">
                        {isEn
                          ? 'Preparation of custom bilingual Power of Attorney template for your local notary.'
                          : 'Confección del modelo de Poder Especial bilingüe para su escribano/notario local.'}
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs">
                      <div className="w-4 h-4 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-[10px] mt-0.5">
                        2
                      </div>
                      <p className="text-[#374151]">
                        {isEn
                          ? 'Ordering certified land registry certificates (Dominio e Inhibiciones).'
                          : 'Pedido de informes de dominio e inhibición ante el Registro de la Propiedad.'}
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs">
                      <div className="w-4 h-4 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-[10px] mt-0.5">
                        3
                      </div>
                      <p className="text-[#374151]">
                        {isEn
                          ? 'Opening court docket in Buenos Aires Civil Courts.'
                          : 'Inicio de la demanda sucesoria en los tribunales civiles correspondientes.'}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2.5">
                    <button
                      onClick={onOpenConsultation}
                      className="w-full bg-[#121417] hover:bg-[#1F2228] text-white text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-[4px] transition-colors flex items-center justify-center gap-2"
                    >
                      <PhoneCall className="w-4 h-4 text-[#BFA15F]" />
                      <span>{isEn ? 'Book Direct Attorney Video Call' : 'Agendar Videollamada con Abogado'}</span>
                    </button>

                    <button
                      onClick={() => setSubmittedData(null)}
                      className="w-full border border-[#D1D5DB] hover:bg-[#F3F4F6] text-[#374151] text-xs font-semibold py-2 px-4 rounded-[4px] transition-colors"
                    >
                      {isEn ? 'Modify Details / New Intake' : 'Editar Datos / Nueva Consulta'}
                    </button>
                  </div>
                </div>
              ) : (
                /* Primary Interactive Lead Generation Intake Form */
                <form onSubmit={handleSubmit} className="p-6 sm:p-8">
                  {/* Form Header */}
                  <div className="mb-6">
                    <div className="text-[10px] font-bold tracking-[0.14em] text-[#BFA15F] uppercase mb-1">
                      {isEn ? 'CONFIDENTIAL CASE INTAKE' : 'EVALUACIÓN CONFIDENCIAL'}
                    </div>
                    <h3 className="font-editorial text-2xl text-[#121417] font-medium leading-snug">
                      {isEn ? 'Direct Estate Case Assessment' : 'Evaluación Directa de Sucesión'}
                    </h3>
                    <p className="text-xs text-[#6B7280] mt-1">
                      {isEn
                        ? 'Receive a formal procedural roadmap and statutory fee estimate within 24 hours.'
                        : 'Reciba una propuesta formal y estimado arancelario dentro de las 24 horas.'}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Field 1: Asset Types (Multi-select) */}
                    <div>
                      <label className="block text-[11px] font-bold tracking-wider text-[#374151] uppercase mb-1.5">
                        {isEn ? '1. Estate Assets in Argentina' : '1. Bienes en Argentina'}
                      </label>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <button
                          type="button"
                          onClick={() => toggleAssetType('residential_property')}
                          className={`p-2.5 text-left rounded-[4px] border transition-colors flex items-center justify-between ${
                            assetTypes.includes('residential_property')
                              ? 'bg-[#EEF2FF] border-[#1E3A8A] text-[#1E3A8A] font-semibold'
                              : 'bg-white border-[#D1D5DB] text-[#4B5563] hover:border-[#9CA3AF]'
                          }`}
                        >
                          <span>{isEn ? 'Apartment / House' : 'Depto / Casa Urbana'}</span>
                          {assetTypes.includes('residential_property') && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A8A]" />
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => toggleAssetType('farmland_estancia')}
                          className={`p-2.5 text-left rounded-[4px] border transition-colors flex items-center justify-between ${
                            assetTypes.includes('farmland_estancia')
                              ? 'bg-[#EEF2FF] border-[#1E3A8A] text-[#1E3A8A] font-semibold'
                              : 'bg-white border-[#D1D5DB] text-[#4B5563] hover:border-[#9CA3AF]'
                          }`}
                        >
                          <span>{isEn ? 'Farmland / Campo' : 'Campo / Estancia'}</span>
                          {assetTypes.includes('farmland_estancia') && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A8A]" />
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => toggleAssetType('bank_accounts')}
                          className={`p-2.5 text-left rounded-[4px] border transition-colors flex items-center justify-between ${
                            assetTypes.includes('bank_accounts')
                              ? 'bg-[#EEF2FF] border-[#1E3A8A] text-[#1E3A8A] font-semibold'
                              : 'bg-white border-[#D1D5DB] text-[#4B5563] hover:border-[#9CA3AF]'
                          }`}
                        >
                          <span>{isEn ? 'Bank USD / Deposits' : 'Cuentas / Depósitos USD'}</span>
                          {assetTypes.includes('bank_accounts') && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A8A]" />
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => toggleAssetType('mixed_estate')}
                          className={`p-2.5 text-left rounded-[4px] border transition-colors flex items-center justify-between ${
                            assetTypes.includes('mixed_estate')
                              ? 'bg-[#EEF2FF] border-[#1E3A8A] text-[#1E3A8A] font-semibold'
                              : 'bg-white border-[#D1D5DB] text-[#4B5563] hover:border-[#9CA3AF]'
                          }`}
                        >
                          <span>{isEn ? 'Mixed / In Investigation' : 'Mixto / A Investigar'}</span>
                          {assetTypes.includes('mixed_estate') && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A8A]" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Field 2: Argentine Jurisdiction / Province */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold tracking-wider text-[#374151] uppercase mb-1">
                          {isEn ? '2. Province in Argentina' : '2. Provincia en Argentina'}
                        </label>
                        <select
                          value={province}
                          onChange={(e) => setProvince(e.target.value as ArgentineProvince)}
                          className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-[4px] text-xs text-[#121417] focus:outline-none focus:border-[#121417] focus:ring-2 focus:ring-[#EEF2FF]"
                        >
                          <option value="caba">{isEn ? 'City of Buenos Aires (CABA)' : 'Ciudad de Buenos Aires (CABA)'}</option>
                          <option value="buenos_aires_prov">{isEn ? 'Buenos Aires Province (PBA)' : 'Provincia de Buenos Aires (PBA)'}</option>
                          <option value="cordoba">Córdoba</option>
                          <option value="santa_fe">Santa Fe / Rosario</option>
                          <option value="mendoza">Mendoza</option>
                          <option value="patagonia">{isEn ? 'Patagonia / South' : 'Patagonia / Sur'}</option>
                          <option value="other">{isEn ? 'Other / Uncertain' : 'Otra Provincia'}</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold tracking-wider text-[#374151] uppercase mb-1">
                          {isEn ? '3. Heir Residence' : '3. Residencia del Heredero'}
                        </label>
                        <select
                          value={heirResidency}
                          onChange={(e) => setHeirResidency(e.target.value as HeirResidency)}
                          className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-[4px] text-xs text-[#121417] focus:outline-none focus:border-[#121417] focus:ring-2 focus:ring-[#EEF2FF]"
                        >
                          <option value="united_states">United States (USA)</option>
                          <option value="canada">Canada</option>
                          <option value="united_kingdom">United Kingdom (UK)</option>
                          <option value="european_union">European Union (EU)</option>
                          <option value="australia">Australia</option>
                          <option value="other">{isEn ? 'Other Country' : 'Otro País'}</option>
                        </select>
                      </div>
                    </div>

                    {/* Field 4: Approximate Estate Valuation & Will Status */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold tracking-wider text-[#374151] uppercase mb-1">
                          {isEn ? '4. Est. Estate Value (USD)' : '4. Valor Estimado (USD)'}
                        </label>
                        <select
                          value={estimatedValue}
                          onChange={(e) => setEstimatedValue(Number(e.target.value))}
                          className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-[4px] text-xs text-[#121417] focus:outline-none focus:border-[#121417] focus:ring-2 focus:ring-[#EEF2FF]"
                        >
                          <option value={75000}>$50,000 - $100,000 USD</option>
                          <option value={175000}>$100,000 - $250,000 USD</option>
                          <option value={350000}>$250,000 - $500,000 USD</option>
                          <option value={750000}>$500,000 - $1,000,000 USD</option>
                          <option value={1500000}>$1,000,000 - $3,000,000+ USD</option>
                          <option value={50000}>{isEn ? 'Value Unknown / Search Needed' : 'Valor a Determinar'}</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold tracking-wider text-[#374151] uppercase mb-1">
                          {isEn ? '5. Will / Testamento' : '5. Testamento'}
                        </label>
                        <select
                          value={willExists}
                          onChange={(e) => setWillExists(e.target.value as any)}
                          className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-[4px] text-xs text-[#121417] focus:outline-none focus:border-[#121417] focus:ring-2 focus:ring-[#EEF2FF]"
                        >
                          <option value="no_intestate">{isEn ? 'No Will (Ab Intestato)' : 'Sin Testamento (Ab Intestato)'}</option>
                          <option value="yes_argentine">{isEn ? 'Argentine Will' : 'Testamento en Argentina'}</option>
                          <option value="yes_foreign">{isEn ? 'Foreign / U.S. Will' : 'Testamento Extranjero / EE.UU.'}</option>
                          <option value="unknown">{isEn ? 'Unsure / Under Research' : 'No se sabe con certeza'}</option>
                        </select>
                      </div>
                    </div>

                    {/* Field 5: Contact Credentials */}
                    <div className="space-y-2.5 pt-2 border-t border-[#F3F4F6]">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div>
                          <label className="block text-[11px] font-bold tracking-wider text-[#374151] uppercase mb-1">
                            {isEn ? 'Full Name' : 'Nombre Completo'}
                          </label>
                          <input
                            type="text"
                            required
                            placeholder={isEn ? 'e.g. Eleanor Vance' : 'ej. Carlos Gómez'}
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-[4px] text-xs text-[#121417] focus:outline-none focus:border-[#121417] focus:ring-2 focus:ring-[#EEF2FF]"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold tracking-wider text-[#374151] uppercase mb-1">
                            {isEn ? 'Direct Email' : 'Correo Electrónico'}
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="client@domain.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-[4px] text-xs text-[#121417] focus:outline-none focus:border-[#121417] focus:ring-2 focus:ring-[#EEF2FF]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold tracking-wider text-[#374151] uppercase mb-1">
                          {isEn ? 'Phone / WhatsApp (for confidential reply)' : 'Teléfono / WhatsApp'}
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (617) 555-0192"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-[4px] text-xs text-[#121417] focus:outline-none focus:border-[#121417] focus:ring-2 focus:ring-[#EEF2FF]"
                        />
                      </div>
                    </div>

                    {/* Submit Primary Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-[#121417] hover:bg-[#1E2229] active:bg-[#0B0C0E] text-white text-xs font-bold uppercase tracking-[0.12em] rounded-[4px] transition-all flex items-center justify-center gap-2 shadow-sm"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                            <span>{isEn ? 'Analyzing Estate Statutes...' : 'Analizando Normativa...'}</span>
                          </div>
                        ) : (
                          <>
                            <span>{isEn ? 'Request Formal Case Assessment' : 'Solicitar Dictamen Preliminar'}</span>
                            <ChevronRight className="w-4 h-4 text-[#BFA15F]" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Intake Trust Badges directly beneath submit button */}
                    <div className="pt-3 border-t border-[#F3F4F6] flex flex-col gap-1.5 text-[11px] text-[#6B7280]">
                      <div className="flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-[#BFA15F] flex-shrink-0" />
                        <span className="font-medium text-[#374151]">
                          {isEn ? 'Attorney-Client Privilege Preserved' : 'Secreto Profesional Protegido'}
                        </span>
                        <span className="text-[#9CA3AF]">·</span>
                        <span>{isEn ? '24-Hour Attorney Response SLA' : 'Respuesta en 24hs'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-[#9CA3AF]">
                        <span>{isEn ? 'Direct Bilingual Team' : 'Atención Bilingüe'}</span>
                        <span>·</span>
                        <span>Av. Alvear, Recoleta, Buenos Aires</span>
                        <span>·</span>
                        <span>New York Coordination</span>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
