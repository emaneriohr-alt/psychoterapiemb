import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SiteJourneyForm from '../components/SiteJourneyForm';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-teal-600" />,
      label: 'Telefon',
      value: '725 988 422',
      href: 'tel:725988422'
    },
    {
      icon: <Mail className="w-6 h-6 text-teal-600" />,
      label: 'Email',
      value: 'terapeut@psychoterapiemb.cz',
      href: 'mailto:terapeut@psychoterapiemb.cz'
    },
    {
      icon: <MapPin className="w-6 h-6 text-teal-600" />,
      label: 'Adresa',
      value: 'Krnsko 168, 294 31',
      href: 'https://maps.google.com/?q=Krnsko+168,+294+31'
    }
  ];

  const officeHours = [
    { day: 'Pondělí', time: '7:00 - 12:00' },
    { day: 'Úterý', time: '8:00 - 12:00, 12:30 - 15:30' },
    { day: 'Středa', time: '8:00 - 12:00, 13:30 - 15:30' },
    { day: 'Čtvrtek', time: '8:00 - 12:00, 13:30 - 15:30' },
    { day: 'Pátek', time: '7:00 - 11:00' },
    { day: 'Sobota', time: 'Zavřeno' },
    { day: 'Neděle', time: 'Zavřeno' },
  ];

  return (
    <main id="contact-page-main-x8n2m1p4" className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 id="contact-heading-g7h8i9j0" className="font-display text-slate-900 text-4xl md:text-5xl font-extralight mb-4">Kontaktujte nás</h1>
          <p id="contact-subheading-k1l2m3n4" className="text-slate-600 text-lg">Rádi vám zodpovíme vaše dotazy nebo si domluvíme termín návštěvy. Prosíme pište SMS zprávy, nebo e-mail. Z časových důvodů nejsme schopni zvedat telefony.</p>
        </div>

        <div id="capacity-notice-contactpage" className="bg-red-50 border border-red-200 text-red-700 rounded-3xl px-6 py-5 mb-12">
          <p className="text-base sm:text-lg font-medium text-center">
            V současné době je kapacita ambulance průběžně plná a nové pacienty příjmáme jen velmi omezeně.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <motion.div
            id="contact-details-container-o5p6q7r8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div id="contact-info-list-s9t0u1v2" className="space-y-8 mb-12">
              {contactInfo.map((item, idx) => (
                <a 
                  key={idx}
                  id={`contact-item-${item.label.toLowerCase().replace(/ /g, '-')}-w3x4y5z6`}
                  href={item.href}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors"
                >
                  <div id="contact-icon-wrapper-https-279" className="mt-1">{item.icon}</div>
                  <div>
                    <span id="contact-label-https-imagesunsplashcom-272" className="block text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">{item.label}</span>
                    <span id="contact-value-https-imagesunsplashcom-272" className="text-xl font-display font-extralight text-slate-900">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div id="office-hours-card-m9n0o1p2" className="p-8 bg-teal-50 rounded-2xl border border-teal-100">
              <div id="office-hours-header-q3r4s5t6" className="flex items-center gap-3 mb-6">
                <Clock className="text-teal-600 w-6 h-6" />
                <h3 id="office-hours-heading-u7v8w9x0" className="font-display text-xl font-extralight text-slate-900">Ordinační hodiny</h3>
              </div>
              <ul id="office-hours-list-y1z2a3b4" className="space-y-3">
                {officeHours.map((hour, idx) => (
                  <li key={idx} id={`office-hour-item-${hour.day.toLowerCase()}-c5d6e7f8`} className="flex justify-between text-slate-700">
                    <span>{hour.day}</span>
                    <span>{hour.time}</span>
                  </li>
                ))}
              </ul>
              <p id="office-hours-note-g9h0i1j2" className="mt-6 text-sm text-slate-500 italic">* Termíny jsou stanoveny na základě předchozí osobní, telefonické či e-mailové domluvy.</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            id="contact-form-container-k2l3m4n5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100"
          >
            <h3 id="contact-form-heading-o6p7q8r9" className="font-display text-2xl font-extralight text-slate-900 mb-8 text-center">Napište nám zprávu</h3>
            <form
              action="https://formspree.io/f/mzdqywwk"
              method="POST"
              className="space-y-6"
            >
              <div id="form-fields-wrapper-s0t1u2v3" className="space-y-6">
                <div id="name-email-group-w4x5y6z7" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div id="name-input-group-a8b9c0d1" className="space-y-2">
                    <label id="name-label-e2f3g4h5" className="text-sm font-medium text-slate-700 ml-1">Jméno</label>
                    <input 
                      name="name" 
                      type="text" 
                      required 
                      placeholder="Jan Novák"
                      className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                      id="name-input-i6j7k8l9"
                    />
                  </div>
                  <div id="email-input-group-m0n1o2p3" className="space-y-2">
                    <label id="email-label-q4r5s6t7" className="text-sm font-medium text-slate-700 ml-1">Email</label>
                    <input 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="jan@email.cz"
                      className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                      id="email-input-u8v9w0x1"
                    />
                  </div>
                </div>
                <div id="phone-input-group-y2z3a4b5" className="space-y-2">
                  <label id="phone-label-c6d7e8f9" className="text-sm font-medium text-slate-700 ml-1">Telefon</label>
                  <input 
                    name="phone" 
                    type="tel" 
                    placeholder="+420 725 988 422"
                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                    id="phone-input-g0h1i2j3"
                  />
                </div>
                <div id="message-input-group-k4l5m6n7" className="space-y-2">
                  <label id="message-label-o8p9q0r1" className="text-sm font-medium text-slate-700 ml-1">Zpráva</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={4}
                    placeholder="Dobrý den, chtěl/a bych se objednat na konzultaci..."
                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all resize-none"
                    id="message-textarea-s2t3u4v5"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-teal-600 text-white py-4 rounded-xl text-lg font-medium hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 active:scale-[0.98]"
                  id="submit-button-w6x7y8z9"
                >
                  Odeslat zprávu
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
