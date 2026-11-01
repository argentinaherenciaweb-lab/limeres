import React, { useState, useMemo } from 'react';
import {
  Calculator,
  ArrowRight,
  TrendingDown,
  Clock,
  ShieldAlert,
  Building,
  CheckCircle2,
  DollarSign,
  Info
} from 'lucide-react';
import { ArgentineProvince, AssetType } from '../types/legal';

interface ProbateCalculatorProps {
  language: 'en' | 'es';
  onOpenConsultation: () => void;
}

export const ProbateCalculator: React.FC<ProbateCalculatorProps> = ({
  language,
  onOpenConsultation
}) => {
  const isEn = language === 'en';

  // Calculator inputs
  const [estateValue, setEstateValue] = useState<number>(350000);
  const [province, setProvince] = useState<ArgentineProvince>('caba');
  const [assetType, setAssetType] = useState<AssetType>('residential_property');
  const [liquidationStrategy, setLiquidationStrategy] = useState<'tracto_abreviado' | 'retain_title'>('tracto_abreviado');
  const [numberOfHeirs, setNumberOfHeirs] = useState<number>(2);

  // Calculations based on Argentine statutory laws (Ley 27.423, Ley 17.801, Provincial Tax Codes)
  const calculation = useMemo(() => {
    // 1. Tasa de Justicia (Court Filing Fee)
    let tasaRate = 0.015; // CABA 1.5%
    let tasaName = '1.5% (CABA National Civil Courts)';
    if (province === 'buenos_aires_prov') {
      tasaRate = 0.0242; // PBA: 2.2% + 10% sobretasa
      tasaName = '2.2% + 10% Sobretasa (Provincia de Buenos Aires)';
    } else if (province === 'cordoba') {
      tasaRate = 0.02;
      tasaName = '2.0% (Córdoba Civil Courts)';
    } else if (province === 'santa_fe') {
      tasaRate = 0.018;
      tasaName = '1.8% (Santa Fe Civil Courts)';
    }

    const courtFee = Math.round(estateValue * tasaRate);

    // 2. Attorney Statutory Fees (Law 27.423 sets 8% - 15% sliding scale)
    let attorneyFeePercent = 0.10; // Baseline 10%
    if (estateValue > 1000000) attorneyFeePercent = 0.085;
    else if (estateValue < 150000) attorneyFeePercent = 0.12;

    const estimatedLegalFee = Math.round(estateValue * attorneyFeePercent);

    // 3. Tracto Abreviado Savings (Dual Registration avoided)
    // Avoids second deed drafting fee (~1.5%), municipal stamp tax (~1.0%), and registry fees (~0.5%) = ~3.0%
    const tractoSavings = liquidationStrategy === 'tracto_abreviado' && assetType !== 'bank_accounts'
      ? Math.round(estateValue * 0.028)
      : 0;

    // 4. Timeline
    let monthsToDeclaratoria = province === 'caba' ? '3 to 5' : '4 to 7';
    let monthsToClosing = liquidationStrategy === 'tracto_abreviado' ? '5 to 7' : '8 to 11';

    // 5. Net Estimated Distribution
    const miscellaneousFilings = 1800; // Edicts, translations, certificates
    const totalDeductions = courtFee + estimatedLegalFee + miscellaneousFilings;
    const netProceeds = Math.max(0, estateValue - totalDeductions);
    const perHeirAmount = Math.round(netProceeds / Math.max(1, numberOfHeirs));

    return {
      courtFee,
      tasaName,
      estimatedLegalFee,
      attorneyFeePercent: Math.round(attorneyFeePercent * 100),
      tractoSavings,
      monthsToDeclaratoria,
      monthsToClosing,
      miscellaneousFilings,
      totalDeductions,
      netProceeds,
      perHeirAmount
    };
  }, [estateValue, province, assetType, liquidationStrategy, numberOfHeirs]);

  return (
    <section id="calculator" className="bg-[#FFFFFF] border-b border-[#E5E7EB] py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#BFA15F]"></span>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#121417] uppercase">
              {isEn ? 'STATUTORY AUDIT TOOL' : 'AUDITORÍA ARANCELARIA JUDICIAL'}
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl text-[#121417] font-normal leading-tight">
            {isEn
              ? 'Argentine Probate & Inheritance Cost Calculator'
              : 'Calculador de Costos, Tasas y Aranceles de la Sucesión'}
          </h2>

          <p className="text-sm sm:text-base text-[#6B7280] mt-3 leading-relaxed">
            {isEn
              ? 'Estimate court filing fees (Tasa de Justicia), regulated attorney tariffs (Law 27.423), and the strategic savings of liquidating real estate via Tracto Abreviado without double registration.'
              : 'Estime la Tasa de Justicia, los honorarios regulados por la Ley 27.423 y el ahorro registral mediante la venta directa por Tracto Abreviado.'}
          </p>
        </div>

        {/* 2-Column Calculator Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 6 COLS: Parameters & Adjustments */}
          <div className="lg:col-span-6 bg-[#FBFBFA] border border-[#E5E7EB] p-6 sm:p-8 rounded-[4px]">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E7EB]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#121417]">
                {isEn ? 'Estate Parameters' : 'Parámetros del Acervo'}
              </span>
              <span className="text-[11px] text-[#6B7280]">
                {isEn ? 'Calibrated for 2026 Courts' : 'Actualizado a 2026'}
              </span>
            </div>

            {/* Slider / Value Input */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#374151]">
                  {isEn ? 'Estimated Total Estate Value (USD)' : 'Valor Total Estimado (USD)'}
                </label>
                <span className="font-editorial text-2xl font-bold text-[#121417]">
                  ${estateValue.toLocaleString()} USD
                </span>
              </div>

              <input
                type="range"
                min="50000"
                max="2500000"
                step="25000"
                value={estateValue}
                onChange={(e) => setEstateValue(Number(e.target.value))}
                className="w-full h-2 bg-[#E5E7EB] rounded-[2px] appearance-none cursor-pointer accent-[#121417]"
              />

              <div className="flex justify-between text-[11px] text-[#9CA3AF] mt-1.5 font-medium">
                <span>$50,000 USD</span>
                <span>$500,000 USD</span>
                <span>$1,500,000 USD</span>
                <span>$2,500,000+ USD</span>
              </div>
            </div>

            {/* Province Selection */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#374151] mb-2">
                {isEn ? 'Court Jurisdiction / Province' : 'Jurisdicción Judicial / Provincia'}
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setProvince('caba')}
                  className={`p-3 text-left rounded-[4px] border transition-colors ${
                    province === 'caba'
                      ? 'bg-white border-[#121417] text-[#121417] font-semibold shadow-xs'
                      : 'bg-[#F3F4F6] border-transparent text-[#6B7280] hover:text-[#121417]'
                  }`}
                >
                  <div className="font-medium">City of Buenos Aires</div>
                  <div className="text-[10px] text-[#6B7280]">1.5% Tasa de Justicia</div>
                </button>

                <button
                  type="button"
                  onClick={() => setProvince('buenos_aires_prov')}
                  className={`p-3 text-left rounded-[4px] border transition-colors ${
                    province === 'buenos_aires_prov'
                      ? 'bg-white border-[#121417] text-[#121417] font-semibold shadow-xs'
                      : 'bg-[#F3F4F6] border-transparent text-[#6B7280] hover:text-[#121417]'
                  }`}
                >
                  <div className="font-medium">Buenos Aires Prov. (PBA)</div>
                  <div className="text-[10px] text-[#6B7280]">2.2% + Sobretasa</div>
                </button>

                <button
                  type="button"
                  onClick={() => setProvince('cordoba')}
                  className={`p-3 text-left rounded-[4px] border transition-colors ${
                    province === 'cordoba'
                      ? 'bg-white border-[#121417] text-[#121417] font-semibold shadow-xs'
                      : 'bg-[#F3F4F6] border-transparent text-[#6B7280] hover:text-[#121417]'
                  }`}
                >
                  <div className="font-medium">Córdoba</div>
                  <div className="text-[10px] text-[#6B7280]">2.0% Tasa Judicial</div>
                </button>

                <button
                  type="button"
                  onClick={() => setProvince('santa_fe')}
                  className={`p-3 text-left rounded-[4px] border transition-colors ${
                    province === 'santa_fe'
                      ? 'bg-white border-[#121417] text-[#121417] font-semibold shadow-xs'
                      : 'bg-[#F3F4F6] border-transparent text-[#6B7280] hover:text-[#121417]'
                  }`}
                >
                  <div className="font-medium">Santa Fe / Rosario</div>
                  <div className="text-[10px] text-[#6B7280]">1.8% Tasa Judicial</div>
                </button>
              </div>
            </div>

            {/* Asset Strategy & Beneficiaries */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#374151] mb-2">
                  {isEn ? 'Disposition Strategy' : 'Destino de los Inmuebles'}
                </label>
                <select
                  value={liquidationStrategy}
                  onChange={(e) => setLiquidationStrategy(e.target.value as any)}
                  className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-[4px] text-xs text-[#121417] focus:outline-none focus:border-[#121417]"
                >
                  <option value="tracto_abreviado">
                    {isEn ? 'Direct Sale (Tracto Abreviado)' : 'Venta Directa (Tracto Abreviado)'}
                  </option>
                  <option value="retain_title">
                    {isEn ? 'Deed Inscription to Heirs' : 'Inscripción a nombre Herederos'}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#374151] mb-2">
                  {isEn ? 'Number of Co-Heirs' : 'Número de Co-Herederos'}
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setNumberOfHeirs(n)}
                      className={`flex-1 h-11 rounded-[4px] border text-xs font-semibold transition-colors ${
                        numberOfHeirs === n
                          ? 'bg-[#121417] border-[#121417] text-white'
                          : 'bg-white border-[#D1D5DB] text-[#4B5563] hover:border-[#9CA3AF]'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tracto Abreviado Callout */}
            {liquidationStrategy === 'tracto_abreviado' && (
              <div className="bg-[#EEF2FF] border border-[#C7D2FE] p-4 rounded-[4px] flex items-start gap-3">
                <TrendingDown className="w-5 h-5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                <div className="text-xs text-[#1E3A8A]">
                  <span className="font-bold">
                    {isEn ? 'Tracto Abreviado Cost Advantage:' : 'Ventaja de Tracto Abreviado:'}
                  </span>{' '}
                  {isEn
                    ? `By authorizing a direct conveyance to a purchaser under Law 17.801 Art. 16, you save approximately $${calculation.tractoSavings.toLocaleString()} USD in duplicate notary deed fees and municipal stamp duties.`
                    : `Al transferir directamente al comprador bajo la Ley 17.801 Art. 16, se ahorra aproximadamente $${calculation.tractoSavings.toLocaleString()} USD en doble escrituración y sellados.`}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT 6 COLS: Transparent Statutory Breakdown & Net Repatriation Card */}
          <div className="lg:col-span-6 bg-white border border-[#121417] rounded-[4px] p-6 sm:p-8 shadow-xs">
            <div className="flex justify-between items-start pb-4 border-b border-[#E5E7EB]">
              <div>
                <span className="text-[10px] font-bold tracking-[0.14em] text-[#BFA15F] uppercase">
                  {isEn ? 'ESTIMATED PROBATE DOCKET AUDIT' : 'LIQUIDACIÓN ESTIMADA DEL EXPEDIENTE'}
                </span>
                <h3 className="font-editorial text-2xl text-[#121417] mt-1 font-medium">
                  {isEn ? 'Statutory Fee & Disbursement Schedule' : 'Detalle de Tasas y Liquidación Neta'}
                </h3>
              </div>
              <span className="text-xs px-2.5 py-1 bg-[#F3F4F6] text-[#374151] rounded-[2px] font-mono">
                {isEn ? 'USD Currency' : 'Dólares USD'}
              </span>
            </div>

            {/* Financial Line Items */}
            <div className="py-5 space-y-3.5 border-b border-[#E5E7EB] text-xs">
              <div className="flex justify-between items-center">
                <span className="text-[#4B5563]">
                  {isEn ? 'Court Filing Fee (Tasa de Justicia)' : 'Tasa de Justicia Judicial'}
                  <span className="block text-[10px] text-[#9CA3AF]">{calculation.tasaName}</span>
                </span>
                <span className="font-mono font-medium text-[#121417]">
                  ${calculation.courtFee.toLocaleString()} USD
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[#4B5563]">
                  {isEn ? `Statutory Legal Fee (Law 27.423 ~${calculation.attorneyFeePercent}%)` : `Honorarios Profesionales (Ley 27.423 ~${calculation.attorneyFeePercent}%)`}
                  <span className="block text-[10px] text-[#9CA3AF]">
                    {isEn ? 'Milestone-based, settled upon court decrees / closing' : 'Por etapas procesales / al cierre'}
                  </span>
                </span>
                <span className="font-mono font-medium text-[#121417]">
                  ${calculation.estimatedLegalFee.toLocaleString()} USD
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[#4B5563]">
                  {isEn ? 'Edicts, Sworn Translations & Certificates' : 'Edictos Boletín Oficial y Certificados'}
                  <span className="block text-[10px] text-[#9CA3AF]">
                    {isEn ? 'Public gazette, cadastral reports, sworn translations' : 'Publicación de edictos y certificaciones'}
                  </span>
                </span>
                <span className="font-mono font-medium text-[#121417]">
                  ~${calculation.miscellaneousFilings.toLocaleString()} USD
                </span>
              </div>

              {calculation.tractoSavings > 0 && (
                <div className="flex justify-between items-center text-[#15803D] bg-[#F0FDF4] p-2.5 rounded-[4px] border border-[#DCFCE7]">
                  <span className="font-medium">
                    {isEn ? '✓ Tracto Abreviado Notary & Stamp Savings' : '✓ Ahorro por Venta en Tracto Abreviado'}
                  </span>
                  <span className="font-mono font-bold">
                    -${calculation.tractoSavings.toLocaleString()} USD
                  </span>
                </div>
              )}
            </div>

            {/* Total Estimated Net Distribution */}
            <div className="py-5 bg-[#F9FAFB] -mx-6 sm:-mx-8 px-6 sm:px-8 border-b border-[#E5E7EB]">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#121417]">
                  {isEn ? 'Net Repatriable Estate Capital' : 'Capital Líquido a Repatriar'}
                </span>
                <span className="font-editorial text-3xl font-bold text-[#121417]">
                  ${calculation.netProceeds.toLocaleString()} USD
                </span>
              </div>

              {numberOfHeirs > 1 && (
                <div className="flex justify-between items-center text-xs text-[#6B7280]">
                  <span>{isEn ? `Divided equally between ${numberOfHeirs} heirs:` : `Distribución entre ${numberOfHeirs} herederos:`}</span>
                  <span className="font-mono font-bold text-[#1E3A8A]">
                    ${calculation.perHeirAmount.toLocaleString()} USD {isEn ? '/ heir' : '/ heredero'}
                  </span>
                </div>
              )}
            </div>

            {/* Timeline Breakdown */}
            <div className="py-4 grid grid-cols-2 gap-4 text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#BFA15F] flex-shrink-0" />
                <div>
                  <span className="text-[#9CA3AF] block text-[10px] uppercase font-semibold">
                    {isEn ? 'Declaratoria de Herederos' : 'Declaratoria de Herederos'}
                  </span>
                  <span className="text-[#121417] font-semibold">
                    {calculation.monthsToDeclaratoria} {isEn ? 'Months' : 'Meses'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#1E3A8A] flex-shrink-0" />
                <div>
                  <span className="text-[#9CA3AF] block text-[10px] uppercase font-semibold">
                    {isEn ? 'Final Sale / Distribution' : 'Venta Final / Repatriación'}
                  </span>
                  <span className="text-[#121417] font-semibold">
                    {calculation.monthsToClosing} {isEn ? 'Months' : 'Meses'}
                  </span>
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="w-full h-12 bg-[#121417] hover:bg-[#1F2228] text-white text-xs font-bold uppercase tracking-wider rounded-[4px] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{isEn ? 'Request Formal Written Fee Agreement' : 'Solicitar Propuesta Formal de Honorarios'}</span>
                <ArrowRight className="w-4 h-4 text-[#BFA15F]" />
              </button>
              <p className="text-[10px] text-[#9CA3AF] text-center mt-2">
                {isEn
                  ? 'All figures governed by Argentine Statutory Tariff Law 27.423. Fixed fee proposals provided in writing before representation.'
                  : 'Valores orientativos según Ley 27.423. Se formaliza convenio de honorarios por escrito previo al inicio.'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
