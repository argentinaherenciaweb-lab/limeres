import React, { useState } from 'react';
import {
  X,
  Calendar,
  Clock,
  Video,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'es';
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const isEn = language === 'en';

  const [date, setDate] = useState<string>('Tomorrow');
  const [timeSlot, setTimeSlot] = useState<string>('14:00');
  const [timezone, setTimezone] = useState<string>('America/New_York');
  const [medium, setMedium] = useState<'video' | 'phone'>('video');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
    }, 500);
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white max-w-xl w-full rounded-[4px] border border-[#121417] p-6 sm:p-8 relative shadow-2xl max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-[#9CA3AF] hover:text-[#121417] p-1 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          /* Booking Confirmation State */
          <div className="text-center py-6 animate-fadeIn">
            <div className="w-12 h-12 bg-[#F0FDF4] border border-[#DCFCE7] text-[#15803D] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <span className="text-[10px] font-bold tracking-[0.14em] text-[#15803D] uppercase block mb-1">
              {isEn ? 'CONFIDENTIAL CONSULTATION RESERVED' : 'CONSULTA CONFIDENCIAL RESERVADA'}
            </span>

            <h3 className="font-editorial text-2xl sm:text-3xl text-[#121417] font-medium mb-3">
              {isEn ? 'Your Attorney Review is Confirmed' : 'Su Consulta ha sido Confirmada'}
            </h3>

            <p className="text-xs text-[#4B5563] max-w-md mx-auto leading-relaxed mb-6">
              {isEn
                ? `An encrypted calendar invitation and secure meeting link have been transmitted to ${email || 'your email'}. Our senior cross-border probate counsel looks forward to reviewing your estate file.`
                : `Hemos enviado una invitación cifrada y el enlace de conexión a ${email || 'su correo'}.`}
            </p>

            {/* Appointment Summary Card */}
            <div className="bg-[#F8F9FA] border border-[#E5E7EB] p-4 rounded-[4px] text-xs max-w-sm mx-auto mb-6 text-left space-y-2">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">{isEn ? 'Scheduled For:' : 'Fecha:'}</span>
                <span className="font-semibold text-[#121417]">{date} at {timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">{isEn ? 'Timezone:' : 'Zona Horaria:'}</span>
                <span className="font-medium text-[#121417]">{timezone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">{isEn ? 'Format:' : 'Modalidad:'}</span>
                <span className="font-medium text-[#121417] capitalize">
                  {medium === 'video' ? 'Secure Google Meet Video' : 'Direct Telephone Call'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">{isEn ? 'Legal Privilege:' : 'Privilegio Legal:'}</span>
                <span className="font-medium text-[#15803D]">Fully Protected</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#121417] hover:bg-[#1E2229] text-white text-xs font-bold uppercase tracking-wider rounded-[4px]"
            >
              {isEn ? 'Done' : 'Entendido'}
            </button>
          </div>
        ) : (
          /* Consultation Form */
          <div>
            <div className="flex items-center gap-2 mb-1.5 text-[10px] font-bold tracking-[0.14em] text-[#BFA15F] uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>{isEn ? 'ATTORNEY-CLIENT PRIVILEGE' : 'SECRETO PROFESIONAL'}</span>
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl text-[#121417] font-medium mb-1">
              {isEn ? 'Schedule a Cross-Border Case Review' : 'Agende su Consulta Profesional'}
            </h3>

            <p className="text-xs text-[#6B7280] mb-6">
              {isEn
                ? 'Speak directly with an Argentine attorney admitted to the Bar of Buenos Aires regarding your estate rights and liquidation strategy.'
                : 'Converse directamente con un abogado matriculado en Buenos Aires sobre los derechos de su sucesión.'}
            </p>

            <form onSubmit={handleBooking} className="space-y-4 text-xs">
              {/* Meeting Medium Selector */}
              <div>
                <label className="block text-[11px] font-bold tracking-wider text-[#374151] uppercase mb-1.5">
                  {isEn ? 'Meeting Format' : 'Modalidad de la Reunión'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setMedium('video')}
                    className={`p-2.5 rounded-[4px] border flex items-center justify-center gap-2 font-semibold transition-colors ${
                      medium === 'video'
                        ? 'bg-[#121417] border-[#121417] text-white'
                        : 'bg-white border-[#D1D5DB] text-[#4B5563] hover:border-[#9CA3AF]'
                    }`}
                  >
                    <Video className="w-4 h-4 text-[#BFA15F]" />
                    <span>{isEn ? 'Encrypted Video Call' : 'Videollamada Cifrada'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMedium('phone')}
                    className={`p-2.5 rounded-[4px] border flex items-center justify-center gap-2 font-semibold transition-colors ${
                      medium === 'phone'
                        ? 'bg-[#121417] border-[#121417] text-white'
                        : 'bg-white border-[#D1D5DB] text-[#4B5563] hover:border-[#9CA3AF]'
                    }`}
                  >
                    <Phone className="w-4 h-4 text-[#BFA15F]" />
                    <span>{isEn ? 'Direct Phone Call' : 'Llamada Telefónica'}</span>
                  </button>
                </div>
              </div>

              {/* Timezone & Slots */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold tracking-wider text-[#374151] uppercase mb-1">
                    {isEn ? 'Your Timezone' : 'Zona Horaria'}
                  </label>
                  <select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-[4px] text-xs text-[#121417] focus:outline-none focus:border-[#121417]"
                  >
                    <option value="America/New_York">US Eastern Time (ET)</option>
                    <option value="America/Chicago">US Central Time (CT)</option>
                    <option value="America/Los_Angeles">US Pacific Time (PT)</option>
                    <option value="Europe/London">London (GMT)</option>
                    <option value="Europe/Paris">Central Europe (CET)</option>
                    <option value="America/Argentina/Buenos_Aires">Buenos Aires (ART)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold tracking-wider text-[#374151] uppercase mb-1">
                    {isEn ? 'Preferred Day & Slot' : 'Horario de Preferencia'}
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-[4px] text-xs text-[#121417] focus:outline-none focus:border-[#121417]"
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:30 PM">03:30 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Contact Credentials */}
              <div className="space-y-3 pt-2 border-t border-[#F3F4F6]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-[#374151] uppercase mb-1">
                      {isEn ? 'Full Name' : 'Nombre Completo'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isEn ? 'e.g. John Hamilton' : 'ej. Juan Martínez'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-[4px] text-xs text-[#121417] focus:outline-none focus:border-[#121417]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-[#374151] uppercase mb-1">
                      {isEn ? 'Email Address' : 'Correo Electrónico'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@law.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-[4px] text-xs text-[#121417] focus:outline-none focus:border-[#121417]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold tracking-wider text-[#374151] uppercase mb-1">
                    {isEn ? 'Direct Phone / WhatsApp' : 'Teléfono / WhatsApp'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-[4px] text-xs text-[#121417] focus:outline-none focus:border-[#121417]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold tracking-wider text-[#374151] uppercase mb-1">
                    {isEn ? 'Brief Estate Summary (Optional)' : 'Resumen Breve del Acervo (Opcional)'}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={
                      isEn
                        ? 'e.g. Late father owned apartment in Palermo and farmland in Santa Fe. 2 heirs in California.'
                        : 'ej. Departamento en Palermo y campo en Santa Fe. 2 herederos en el exterior.'
                    }
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-3 bg-white border border-[#D1D5DB] rounded-[4px] text-xs text-[#121417] focus:outline-none focus:border-[#121417]"
                  ></textarea>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-[#121417] hover:bg-[#1E2229] text-white text-xs font-bold uppercase tracking-wider rounded-[4px] transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  {isSubmitting ? (
                    <span>{isEn ? 'Reserving slot...' : 'Confirmando horario...'}</span>
                  ) : (
                    <>
                      <span>{isEn ? 'Confirm Confidential Consultation' : 'Confirmar Reserva de Consulta'}</span>
                      <ArrowRight className="w-4 h-4 text-[#BFA15F]" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#9CA3AF] pt-1">
                <Lock className="w-3 h-3 text-[#BFA15F]" />
                <span>{isEn ? 'No obligation · Strict attorney-client confidentiality' : 'Sin obligación · Secreto profesional estricto'}</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
