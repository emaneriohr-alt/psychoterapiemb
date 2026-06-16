import { Link } from 'react-router-dom';
import { HeartPulse, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer-main-v8n2m1p4" className="bg-slate-900 text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2">
            <div data-role="logo" className="flex items-center gap-2 mb-6">
              <HeartPulse className="w-8 h-8 text-teal-400" />
              <span className="font-display font-extralight text-2xl tracking-tight text-white">
                MUDr. Martina Hrnčířová
              </span>
            </div>
            <p className="text-slate-400 max-w-md mb-8">
              Poskytujeme profesionální psychiatrickou a psychoterapeutickou pomoc v Krnsku. Naším cílem je vracení duševní rovnováhy do životů našich klientů.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-extralight mb-6 text-white">Rychlé odkazy</h4>
            <ul className="space-y-4">
              {['Domů', 'O mně', 'Služby', 'Pravidla', 'Kontakt'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Domů' ? '/' : `/${item.toLowerCase().replace(' ', '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-display text-lg font-extralight mb-6 text-white">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                <span>725 988 422</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                <span className="break-all">terapeut@psychoterapiemb.cz</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0" />
                <span>Krnsko 168, 294 31</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} MUDr. Martina Hrnčířová. Všechna práva vyhrazena.
          </p>
       
        </div>
      </div>
    </footer>
  );
}
