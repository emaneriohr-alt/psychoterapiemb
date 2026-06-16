import { motion } from 'framer-motion';
import { Brain, MessageSquare, HeartHandshake, UserCircle } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Brain className="w-10 h-10 text-teal-600" />,
      title: 'Psychiatrická ambulance',
      desc: 'Komplexní diagnostika a farmakologická léčba duševních poruch, jako jsou deprese, úzkosti či bipolární porucha.'
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-teal-600" />,
      title: 'Psychoterapie',
      desc: 'Individuální sezení zaměřená na porozumění vlastním emocím, vzorcům chování a řešení osobních konfliktů.'
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-teal-600" />,
      title: 'Podpůrná terapie',
      desc: 'Dlouhodobé doprovázení v chronických fázích onemocnění či při zvládání náročných životních etap.'
    },
    {
      icon: <UserCircle className="w-10 h-10 text-teal-600" />,
      title: 'Konzultace pro rodiny',
      desc: 'Pomoc blízkým osobám, které pečují o pacienta s duševním onemocněním, a edukace v této oblasti.'
    }
  ];

  return (
    <main id="services-page-main-n2m4p8v1" className="pt-32 pb-24 bg-slate-50 overflow-hidden">
      <div id="services-container-a7k2m9x1" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="services-header-p3r8t5w2" className="text-center mb-20">
          <span id="services-eyebrow-q6w2e8r4" className="text-teal-600 font-medium tracking-widest uppercase text-sm mb-4 block">Naše odbornost</span>
          <h1 id="services-heading-m1n2b3v4" className="font-display text-slate-900 text-4xl md:text-5xl font-extralight mb-6">Poskytované služby</h1>
          <p id="services-description-z5x6c7v8" className="text-slate-600 max-w-2xl mx-auto text-lg">
            Nabízíme široké spektrum služeb v oblasti péče o duševní zdraví. Naším cílem je poskytnout komplexní pomoc šitou na míru vašim potřebám.
          </p>
        </div>

        <div id="services-grid-l9k8j7h6" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              id="service-card-https-imagesunsplashcom-274"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div id="service-icon-wrapper-https-282" className="bg-slate-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-50 transition-colors">
                {service.icon}
              </div>
              <h3 id="service-title-https-imagesunsplashcom-275" className="font-display text-2xl font-extralight text-slate-900 mb-4">{service.title}</h3>
              <p id="service-desc-https-imagesunsplashcom-274" className="text-slate-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
