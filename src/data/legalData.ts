import { PracticeArea, CasePrecedent, FAQItem } from '../types/legal';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'probate-succession',
    code: '01',
    eyebrow: 'ESTATE SUCCESSION & PROBATE',
    title: 'Cross-Border Succession & Probate Administration',
    spanishTitle: 'Sucesiones Internacionales Ab Intestato y Testamentarias',
    description:
      'Comprehensive representation of foreign heirs before Argentine civil courts. We handle both testate estates (valid wills) and intestate succession (ab intestato) under Argentine Civil and Commercial Code Art. 2277.',
    bullets: [
      'Declaratoria de Herederos (Judicial Heir Declaration Decree)',
      'Probating international & foreign-executed wills in Argentina',
      'Remote Power of Attorney (Poder Especial) with Hague Apostille',
      'No physical court appearances or travel required from the heir'
    ],
    statute: 'Civil & Commercial Code Arts. 2277-2443',
    typicalDuration: '4 - 8 Months',
    imageUrl: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'real-estate-farmland',
    code: '02',
    eyebrow: 'REAL ESTATE & AGRICULTURAL ESTATES',
    title: 'Farmland, Estancias & Urban Property Conveyance',
    spanishTitle: 'Transmisión y Venta de Campos, Estancias y Bienes Raíces',
    description:
      'Direct oversight and legal liquidation of residential apartments in Buenos Aires (Recoleta, Palermo, Belgrano), coastal properties, and extensive pampas agricultural parcels (estancias, soy/wheat farmland).',
    bullets: [
      'Agricultural leasehold audits & tenant succession contracts',
      'Cadastral certificates, municipal tax debt clearance & parcel surveys',
      'Appraisal defense against aggressive provincial fiscal valuations (ARBA / AGIP)',
      'Escrow facilitation and deed execution before Argentine Notary Public (Escribano)'
    ],
    statute: 'Law 17.801 (National Property Registry Law)',
    typicalDuration: '3 - 6 Months',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tracto-abreviado',
    code: '03',
    eyebrow: 'DIRECT COURT LIQUIDATION',
    title: 'Sale via Tracto Abreviado (Direct Conveyance to Buyer)',
    spanishTitle: 'Venta Directa Judicial por Tracto Abreviado (Ley 17.801 Art. 16)',
    description:
      'Avoid the costly dual-registration trap. Under Article 16 of Law 17.801, we authorize a direct sale to a third-party purchaser directly from the probate docket, saving non-resident heirs up to 40% in registration fees and months of delay.',
    bullets: [
      'Eliminates need for prior deed inscription into foreign heirs’ names',
      'Significantly reduces notary, stamp, and registration transfer taxes',
      'Allows closing and wire disbursements directly upon judicial authorization',
      'Ideal for international siblings liquidating inherited family apartments'
    ],
    statute: 'Law 17.801, Article 16 Subsection b',
    typicalDuration: '45 - 90 Days post-declaratoria',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'funds-repatriation',
    code: '04',
    eyebrow: 'FOREIGN EXCHANGE & CAPITAL REPATRIATION',
    title: 'Lawful Cross-Border Wire Transfers & Capital Repatriation',
    spanishTitle: 'Repatriación Legal de Fondos y Cumplimiento Cambiario BCRA',
    description:
      'Navigating Argentine Central Bank (BCRA) regulations and official capital transfer mechanisms (CCL - Contado con Liquidación / Foreign Exchange transfers) to safely disburse inheritance proceeds into U.S. or European bank accounts.',
    bullets: [
      'Direct dollar-denominated wire transfers to beneficiaries’ home bank accounts',
      'Full tax certification (AFIP / ARCA tax withholding & compliance receipts)',
      'Anti-Money Laundering (UIF) foreign source documentation package',
      'Zero informal grey-market exposure; 100% lawful bank-to-bank execution'
    ],
    statute: 'BCRA Foreign Exchange Regulations for Non-Residents',
    typicalDuration: '5 - 15 Banking Days',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'apostille-poa',
    code: '05',
    eyebrow: 'INTERNATIONAL LEGALIZATION',
    title: 'Cross-Border Powers of Attorney & Hague Apostilles',
    spanishTitle: 'Poderes Especiales en el Extranjero y Apostillas de La Haya',
    description:
      'We draft bespoke, bilingual Powers of Attorney specifically calibrated for Argentine judicial validity. Heirs sign before their local notary public in the U.S., Canada, or Europe, followed by state-level Hague Apostille.',
    bullets: [
      'Bilingual dual-column (English/Spanish) drafting by Argentine attorneys',
      'Pre-approved language for Civil Courts and Land Registries',
      'Step-by-step notary instructions tailored to your specific U.S. state',
      'Eliminates burdensome appointments at Argentine Consulates abroad'
    ],
    statute: '1961 Hague Apostille Convention & Civil Code Art. 363',
    typicalDuration: '1 - 2 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'asset-search',
    code: '06',
    eyebrow: 'ESTATE INVESTIGATION',
    title: 'Forensic Estate Asset Discovery & Cadastral Searches',
    spanishTitle: 'Búsqueda Forense de Bienes, Cuentas Bancarias y Sociedades',
    description:
      'When international heirs do not possess exact records of the deceased’s Argentine assets, our legal team conducts judicial and administrative inquiries across public registries and banking institutions.',
    bullets: [
      'National Registry of Real Estate Property (RPI) title searches',
      'Central Bank (BCRA) institutional banking balance inquiries',
      'National Registry of Motor Vehicles (DNRPA) ownership lookups',
      'Corporate equity & shares records (IGJ / Provincial Registries of Commerce)'
    ],
    statute: 'Judicial Information Requests (Oficios Judiciales)',
    typicalDuration: '3 - 6 Weeks',
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80'
  }
];

export const CASE_PRECEDENTS: CasePrecedent[] = [
  {
    id: 'case-recoleta-apartment',
    caseCode: 'LIM-2025-084',
    title: 'Succession & Sale of Recoleta Luxury Residence for Boston Heirs',
    location: 'Recoleta, City of Buenos Aires (CABA)',
    clientLocation: 'Boston, Massachusetts & London, UK',
    assetSummary: 'French-style 240 m² apartment on Avenida Alvear, art collection, USD bank deposits',
    totalValueUsd: '$485,000 USD',
    durationMonths: 6,
    travelRequired: false,
    keyChallenge:
      'The two surviving siblings had not visited Argentina in 18 years; the deceased died without an Argentine will, and original title deeds were missing in a locked safety deposit box.',
    legalSolution:
      'Drafted bilingual Powers of Attorney apostilled in Massachusetts and the UK. Initiated judicial probate in Buenos Aires Civil Court No. 14, obtained court-ordered safety deposit box opening with judicial officer, reconstructed lost title deeds, and implemented Tracto Abreviado sale.',
    outcome:
      'Heir decree issued in 4 months. Property sold directly to a cash buyer at full market value. Net proceeds wired in USD directly to client accounts at Bank of America and Barclays without either heir stepping foot in Argentina.',
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'case-pampas-farmland',
    caseCode: 'LIM-2024-119',
    title: '1,450-Hectare Agrarian Estancia Succession & Lease Partition',
    location: 'Pergamino & Rojas, Buenos Aires Province',
    clientLocation: 'San Francisco, California & Zurich, Switzerland',
    assetSummary: 'Prime agricultural cropland (pampa húmeda), farming machinery, grain silo contracts',
    totalValueUsd: '$3,850,000 USD',
    durationMonths: 9,
    travelRequired: false,
    keyChallenge:
      'Three heirs disagreed on whether to liquidate immediately or maintain long-term crop leases with agricultural tenants; complex provincial inheritance tax (ARBA ITGB) liabilities.',
    legalSolution:
      'Structured a non-judicial family partition agreement with statutory filing; negotiated 50% cash buyout of one heir while creating an offshore asset holding structure for the continuing heirs with certified lease yields.',
    outcome:
      'Successfully negotiated down provincial tax penalties through agrarian exemptions. Funds distributed seamlessly and agricultural lease income now paid quarterly to foreign beneficiaries.',
    imageUrl: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'case-unregistered-bank-funds',
    caseCode: 'LIM-2025-032',
    title: 'Recovery & Repatriation of Dormant Foreign Currency Bank Balances',
    location: 'Banco Galicia & BBVA, Buenos Aires',
    clientLocation: 'Toronto, Ontario, Canada',
    assetSummary: 'Undisclosed USD Certificates of Deposit (Plazos Fijos) & Central Bank records',
    totalValueUsd: '$192,000 USD',
    durationMonths: 5,
    travelRequired: false,
    keyChallenge:
      'Canadian heir possessed only a handwritten letter from 1999 referencing Argentine bank accounts. Banks refused to disclose balances citing banking secrecy (Secreto Bancario).',
    legalSolution:
      'Opened probate proceedings in National Civil Court. Issued judicial subpoenas (Oficios) to the Central Bank of Argentina (BCRA) to sweep all financial entities nationwide. Located two dormant dollar accounts.',
    outcome:
      'Court ordered transfer of funds into the judicial escrow account. Executed compliant cross-border electronic cable transfer to the heir’s Royal Bank of Canada account in Toronto.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'travel-requirement',
    category: 'remote_representation',
    question: 'Do I have to travel to Argentina at any point during the probate process?',
    questionEs: '¿Debo viajar a Argentina en algún momento durante el proceso sucesorio?',
    answer:
      'No. 100% of the probate administration can be completed without you ever setting foot in Argentina. We draft a specialized, bilingual Power of Attorney (Poder Judicial y de Administración) that you sign before a local Notary Public in your home state or city, followed by a standard Hague Apostille. This grants us full legal authority to represent you before Argentine judges, tax authorities, and land registries.',
    answerEs:
      'No. El 100% del proceso puede completarse sin que viaje a Argentina. Redactamos un Poder Especial bilingüe que usted firma ante un Notario Público en su ciudad con Apostilla de La Haya.',
    legalBasis: 'Civil and Commercial Code Art. 363 & 1961 Hague Apostille Convention'
  },
  {
    id: 'tracto-abreviado-explained',
    category: 'probate_process',
    question: 'How does "Tracto Abreviado" allow simultaneous probate and direct sale of real estate?',
    questionEs: '¿Cómo funciona la venta por "Tracto Abreviado" de un inmueble?',
    answer:
      'In standard proceedings, real estate must first be inscribed into the foreign heirs’ names at the Property Registry, incurring double registration fees, municipal taxes, and months of waiting. Under Article 16 of Argentine Law 17.801 (Tracto Abreviado), once the Declaratoria de Herederos is issued, the judge authorizes the estate to convey the deed directly to a buyer in one single notary deed (escritura). This saves thousands of dollars and months of delay.',
    answerEs:
      'Con el Tracto Abreviado (Ley 17.801 Art. 16), el juez autoriza la venta directa del inmueble al comprador sin inscribirlo previamente a nombre de los herederos en el Registro de la Propiedad.',
    legalBasis: 'National Property Registry Law 17.801, Art. 16(b)'
  },
  {
    id: 'funds-repatriation-wire',
    category: 'funds_repatriation',
    question: 'How are dollar proceeds legally wired out of Argentina to my U.S. or European bank?',
    questionEs: '¿Cómo se transfieren legalmente los dólares heredados a mi cuenta bancaria en el exterior?',
    answer:
      'All real estate sales or bank estate distributions in Argentina are executed in USD or converted via official Central Bank (BCRA) mechanisms. Under BCRA cross-border regulations for non-resident beneficiaries, inheritance funds are exempt from commercial capital controls when backed by a certified court decree (Declaratoria de Herederos), judicial certificate, and AFIP tax clearance. Proceeds are sent directly via international SWIFT wire transfer to your account.',
    answerEs:
      'Los fondos de herencia cuentan con canales oficiales directos del BCRA respaldados por la Declaratoria de Herederos y la orden judicial de libramiento, transfiriéndose vía SWIFT.',
    legalBasis: 'BCRA Foreign Exchange Regulations for Foreign Beneficiaries'
  },
  {
    id: 'no-will-intestate',
    category: 'probate_process',
    question: 'What happens if my relative died without leaving a will in Argentina?',
    questionEs: '¿Qué sucede si mi familiar falleció sin haber dejado un testamento en Argentina?',
    answer:
      'Over 90% of Argentine successions are "ab intestato" (intestate). Argentine succession law follows strict statutory forced heirship (porción legítima), granting protected rights to direct descendants (children, grandchildren), surviving spouses, and ascendants (parents). Even without a will, legitimate heirs have absolute statutory rights to the entire estate. We initiate the succession by presenting birth, marriage, and death certificates to prove relationship.',
    answerEs:
      'Más del 90% de las sucesiones en Argentina son intestadas (ab intestato). La ley protege a los herederos forzosos (hijos, cónyuge, padres) mediante la porción legítima.',
    legalBasis: 'Civil and Commercial Code Arts. 2424-2450'
  },
  {
    id: 'attorney-fees-structure',
    category: 'taxes_fees',
    question: 'How are your legal fees structured? Are there unexpected upfront costs?',
    questionEs: '¿Cómo se estructuran los honorarios legales? ¿Existen costos imprevistos?',
    answer:
      'Argentine attorney fees in probate matters are regulated by statutory fee schedules (Law 27.423 in federal/CABA courts or provincial tariff laws), typically ranging between 8% and 15% of the estate’s real market value depending on complexity. At Limeres, we provide a fixed, written fee agreement beforehand. For solvent real estate estates, a significant portion of our fees can be settled at the closing table when the property is sold, aligning our incentives with your successful liquidation.',
    answerEs:
      'Los honorarios están regulados por la Ley de Aranceles 27.423. Ofrecemos un acuerdo por escrito con hitos claros y la posibilidad de liquidar parte al cierre de la venta.',
    legalBasis: 'National Legal Fee Schedule Law 27.423'
  },
  {
    id: 'foreign-death-certificate',
    category: 'remote_representation',
    question: 'My relative passed away outside of Argentina (e.g. in Florida or New York). Is that valid?',
    questionEs: 'Mi familiar falleció fuera de Argentina (ej. Florida o Nueva York). ¿Es válido?',
    answer:
      'Yes. If the deceased owned real estate or bank accounts in Argentina, Argentine courts retain exclusive jurisdiction over those local assets (Civil Code Art. 2643). You simply obtain a certified copy of the foreign death certificate and have it apostilled by the Secretary of State where it was issued. In Buenos Aires, our sworn translators (Traductores Públicos) translate it to Spanish for immediate court submission.',
    answerEs:
      'Sí. Los tribunales argentinos tienen jurisdicción exclusiva sobre los bienes situados en el país. El certificado de defunción extranjero con Apostilla es plenamente válido.',
    legalBasis: 'Civil and Commercial Code Art. 2643 & Hague Apostille'
  }
];

export const PROBATE_PHASES = [
  {
    step: '01',
    title: 'Preliminary File & Conflict Review',
    subtitle: 'Consultation & Retainer',
    duration: 'Week 1',
    description:
      'We review genealogical documentation, death records, and known asset indicators. Conflict check is conducted across potential heirs and a fixed-fee proposal is formalized.',
    keyDeliverable: 'Case Blueprint & Power of Attorney Draft'
  },
  {
    step: '02',
    title: 'Bilingual Power of Attorney Execution',
    subtitle: 'Signed Locally in Your Home State',
    duration: 'Weeks 2 - 3',
    description:
      'You sign our custom dual-column Spanish/English Power of Attorney before your local notary public in the U.S., Canada, or Europe. It is apostilled at the Secretary of State and sent to our Buenos Aires office.',
    keyDeliverable: 'Duly Apostilled Judicial Power of Attorney (Poder Especial)'
  },
  {
    step: '03',
    title: 'Filing Succession in Argentine Civil Court',
    subtitle: 'Court Docket & Official Edicts',
    duration: 'Month 2',
    description:
      'We file the opening complaint before the designated Civil Court. The judge orders publication of statutory notices (Edictos Judiciales) in the Official Gazette (Boletín Oficial) for 30 days to summon potential creditors or co-heirs.',
    keyDeliverable: 'Judicial Case Docket Number & Edict Certification'
  },
  {
    step: '04',
    title: 'Declaratoria de Herederos Decree',
    subtitle: 'Judicial Recognition of Rightful Heirs',
    duration: 'Months 3 - 5',
    description:
      'The judge evaluates all kinship records, apostilles, and public edicts, formally issuing the Declaratoria de Herederos. You and your co-heirs are now judicially decreed as the exclusive legal owners of the estate.',
    keyDeliverable: 'Certified Copy of Declaratoria de Herederos Decree'
  },
  {
    step: '05',
    title: 'Tracto Abreviado Authorization or Title Inscription',
    subtitle: 'Property Closing & Conveyance',
    duration: 'Months 5 - 7',
    description:
      'If liquidating real estate, we prepare the Tracto Abreviado authorization for the appointed Notary Public (Escribano). The property is transferred to the buyer without prior personal deed inscription.',
    keyDeliverable: 'Judicial Authorization for Direct Sale (Tracto Abreviado)'
  },
  {
    step: '06',
    title: 'Fund Repatriation & Banking Wire',
    subtitle: 'U.S. / European SWIFT Disbursement',
    duration: 'Months 6 - 8',
    description:
      'Sale proceeds or bank balances are cleared through AFIP tax compliance and wired directly in USD/EUR to your international bank account via official Central Bank cross-border channels.',
    keyDeliverable: 'Certified SWIFT Wire Confirmation & Full Accounting Statement'
  }
];

export const REQUIRED_DOCUMENTS = [
  {
    id: 'doc-death-cert',
    name: 'Death Certificate of the Deceased',
    nameEs: 'Partida de Defunción del Causante',
    critical: true,
    description: 'Argentine civil registry certificate or foreign certificate with Hague Apostille.',
    notes: 'If issued in the US, apostilled by the Secretary of State where issued.'
  },
  {
    id: 'doc-birth-cert',
    name: 'Heir Birth Certificate (Proof of Kinship)',
    nameEs: 'Partida de Nacimiento del Heredero',
    critical: true,
    description: 'Demonstrating relationship to deceased (parent-child or family lineage).',
    notes: 'Foreign birth certificates require Hague Apostille and official translation.'
  },
  {
    id: 'doc-marriage-cert',
    name: 'Marriage Certificate (if applicable)',
    nameEs: 'Partida de Matrimonio',
    critical: false,
    description: 'Required if surviving spouse is an heir or for proof of marital status.',
    notes: 'Essential for matrimonial property partition (bienes gananciales).'
  },
  {
    id: 'doc-deeds',
    name: 'Property Title Deeds or Cadastral Data',
    nameEs: 'Escritura de Inmuebles o Datos Catastrales',
    critical: true,
    description: 'Original deed (Primer Testimonio) or nominal property address in Argentina.',
    notes: 'If lost, our team can obtain a certified second copy (Segundo Testimonio) via court.'
  },
  {
    id: 'doc-passport',
    name: 'Valid Passport / Government ID of Heir',
    nameEs: 'Pasaporte Vigente o DNI del Heredero',
    critical: true,
    description: 'Clear color scan of valid passport photo page.',
    notes: 'Used to obtain foreign tax identification number (CDI) in Argentina.'
  },
  {
    id: 'doc-bank-info',
    name: 'Bank Statements or Account Details',
    nameEs: 'Extractos Bancarios o Referencias de Cuentas',
    critical: false,
    description: 'Any historical statements from Argentine banks (Galicia, Santander, BBVA, etc.).',
    notes: 'If unknown, we execute judicial sweeps via the Central Bank (BCRA).'
  }
];
