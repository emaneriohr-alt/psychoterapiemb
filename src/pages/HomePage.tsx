import { motion } from 'framer-motion';
import { ArrowRight, Brain, Sparkles, Heart, ShieldCheck, ClipboardCheck, Clock, UserCheck, Ban, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const rules = [
    {
      icon: <Clock className="w-6 h-6 text-teal-600" />,
      title: 'Objednávání',
      desc: 'K vyšetření je nutné se předem objednat telefonicky (SMS) nebo e-mailem. Termíny jsou závazné. Z kapacitních důvodů nejsme schopni zvedat telefonáty.'
    },
    {
      icon: <Ban className="w-6 h-6 text-teal-600" />,
      title: 'Omluva z termínu',
      desc: 'Prosíme o omluvu nejpozději 24 hodin předem. Po 2 neomluvených absencích jsme nuceni pacienta vyřadit z péče na základě soustavného porušování vnitřního řádu ambulance.'
    },
    {
      icon: <UserCheck className="w-6 h-6 text-teal-600" />,
      title: 'První návštěva',
      desc: 'Na první vyšetření si prosím přineste občanský průkaz a kartičku pojišťovny, soupis všech vašich léků a brýle na čtení (pokud je používáte).'
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-teal-600" />,
      title: 'Lékařské zprávy',
      desc: 'Pokud máte k dispozici zprávy od praktického lékaře nebo jiných specialistů, vezměte je prosím s sebou.'
    }
  ];

  const officeHours = [
    { day: 'Pondělí', time: '7:00 - 12:00' },
    { day: 'Úterý', time: '8:00 - 12:00, 12:30 - 15:30' },
    { day: 'Středa', time: '8:00 - 12:00, 13:30 - 15:30' },
    { day: 'Čtvrtek', time: '8:00 - 12:00, 13:30 - 15:30' },
    { day: 'Pátek', time: '7:00 - 11:00' },
  ];

  const galleryImages = [
    { url: 'https://api.sitejourney.ai/storage/v1/object/public/site-assets/2576ba2a-05d7-4974-b00b-d8c518be847a/2a479f0b-a8ba-4823-aa21-2b3952eb4161/photo-1781459476769-7c4f.jpg', alt: 'Denní místnost' },
    { url: 'https://api.sitejourney.ai/storage/v1/object/public/site-assets/2576ba2a-05d7-4974-b00b-d8c518be847a/2a479f0b-a8ba-4823-aa21-2b3952eb4161/photo-1781459476221-l94w.jpg', alt: 'Čekárna' },
    { url: 'https://api.sitejourney.ai/storage/v1/object/public/site-assets/2576ba2a-05d7-4974-b00b-d8c518be847a/2a479f0b-a8ba-4823-aa21-2b3952eb4161/photo-1781459475279-8fs6.jpg', alt: 'Ordinace' },
  ];

  const actualities = [
    {
      title: 'TEST',
      date: 'Září 2026',
      summary: 'Testovací aktualita: dozvíte se zde, že nové termíny byly právě otevřeny a rezervace lze provést telefonicky i e-mailem.',
    },
    {
      title: 'Rozšířená nabídka psychoterapie',
      date: 'Červen 2026',
      summary: 'Testovací text: přidali jsme nové typy sezení zaměřené na zvládání stresu, úzkosti a adaptaci na životní změny.',
    },
    {
      title: 'Nové pokyny pro návštěvy',
      date: 'Duben 2026',
      summary: 'Testovací zpráva: prosíme o dochvilnost a dodržování návštěvního režimu, abychom zajistili bezpečné prostředí pro všechny pacienty.',
    },
  ];

  return (
    <main id="homepage-main-v8n2m4p1">
      {/* Hero Section */}
      <section 
        id="hero-section-b8x1p3m4"
        className="relative min-h-[max(100svh,720px)] flex flex-col justify-center overflow-hidden"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80'), url('https://picsum.photos/seed/sea-sunset/2000/1200')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
          alt="Sea sunset background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          crossOrigin="anonymous"
          loading="lazy"
        />
        <div id="hero-overlay-k4b8n2v1" className="absolute inset-0 bg-slate-900/20 backdrop-blur-[1px] z-10" />
        <div id="hero-container-v7n2m1p4" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 id="hero-heading-b8n2m1p4" className="font-display text-white text-5xl md:text-7xl font-extralight uppercase tracking-tight leading-tight mb-6">
              Péče o vaše <span id="hero-accent-cyan-v7n2m1" className="inline-block pr-[0.15em] italic bg-gradient-to-r from-teal-200 to-emerald-200 bg-clip-text text-transparent">duševní zdraví</span>
            </h1>
            <p id="hero-description-v9n1m3k5" className="text-slate-100 text-lg md:text-xl mb-10 max-w-2xl">
              Privátní psychiatrická ambulance a psychoterapie MUDr. Martiny Hrnčířové. Nabízíme individuální a empatický přístup k řešení vašich obtíží.
            </p>
            <div id="hero-actions-x8n2m4p9" className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/kontakt"
                id="hero-cta-primary-b8n2m1p4"
                className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-teal-700 transition-all flex items-center justify-center gap-2"
              >
                Domluvit si termín <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/sluzby"
                id="hero-cta-secondary-v9n1m3k5"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all text-center"
              >
                Naše služby
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="capacity-notice-homepage" className="bg-red-50 border border-red-200 text-red-700 px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center rounded-3xl">
          <p className="text-base sm:text-lg font-medium">
            V současné době je kapacita ambulance průběžně plná a nové pacienty příjmáme jen velmi omezeně.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section id="values-section-z8n2m4p1" className="py-24 bg-white overflow-hidden">
        <div id="values-container-v7n2m1p4" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="values-header-b8n2m1p4" className="text-center mb-16">
            <h2 className="font-display text-slate-900 text-4xl md:text-5xl font-extralight mb-4">Proč si vybrat naši péči?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Věříme, že duševní pohoda je základem kvalitního života. K našim pacientům přistupujeme s úctou a profesionalitou.</p>
          </div>

          <div id="values-grid-x8n2m4p9" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              {
                icon: <Brain className="w-10 h-10 text-teal-600" />,
                title: 'Odbornost',
                desc: 'Špičkové lékařské vzdělání a letitá praxe v oboru psychiatrie a psychoterapie.'
              },
              {
                icon: <Heart className="w-10 h-10 text-teal-600" />,
                title: 'Empatie',
                desc: 'Vytváříme bezpečné prostředí, kde můžete otevřeně mluvit o svých pocitech a problémech.'
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-teal-600" />,
                title: 'Důvěrnost',
                desc: 'Naprostá diskrétnost a dodržování lékařského tajemství je pro nás naprostou prioritou.'
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                id="value-item-https-imagesunsplashcom-260"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="font-display text-2xl font-extralight text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Actualities Section */}
      <section id="actualities-section-a8b7c6d5" className="py-24 bg-slate-50">
        <div id="actualities-container-v7n2m1p4" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="actualities-header-b8n2m1p4" className="text-center mb-16">
            <h2 className="font-display text-slate-900 text-4xl md:text-5xl font-extralight mb-4">Aktuality</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Důležité novinky a současné změny, které se týkají naší péče, dostupnosti a návštěvního režimu.</p>
          </div>

          <div id="actualities-grid-x8n2m4p9" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actualities.map((item, idx) => (
              <motion.div
                key={idx}
                id="actuality-item-https-imagesunsplashcom-261"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="mb-4 text-sm uppercase tracking-[0.24em] text-teal-600 font-semibold">{item.date}</div>
                <h3 className="font-display text-2xl font-extralight text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.summary}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambulation Rules & Office Hours Section */}
      <section id="ambulation-rules-section-h8n2m1p4" className="py-24 bg-slate-50">
        <div id="rules-container-v7n2m1p4" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="rules-header-b8n2m1p4" className="text-center mb-16">
            <h2 className="font-display text-slate-900 text-4xl md:text-5xl font-extralight mb-4">Ambulantní řád a ordinační doba</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Základní pravidla pro hladký průběh vaší návštěvy a přehled našich ordinačních hodin.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Rules Grid */}
            <div id="rules-grid-x8n2m4p9" className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {rules.map((rule, idx) => (
                <motion.div
                  key={idx}
                  id="rule-item-https-imagesunsplashcom-259"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
                >
                  <div className="mb-4">{rule.icon}</div>
                  <h3 className="font-display text-xl font-medium text-slate-900 mb-3">{rule.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{rule.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Office Hours Card */}
            <motion.div
              id="office-hours-card-v8n2m1p4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-teal-900 text-white p-8 rounded-3xl shadow-xl flex flex-col"
            >
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="w-8 h-8 text-teal-400" />
                <h3 className="font-display text-2xl font-extralight text-white">Ordinační doba</h3>
              </div>
              <div className="space-y-4 flex-grow">
                {officeHours.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-teal-800/50 pb-3">
                    <span className="font-medium text-teal-100">{item.day}</span>
                    <span className="text-sm">{item.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-teal-800/40 rounded-xl border border-teal-700/50">
                <p className="text-xs text-teal-200 italic leading-relaxed">
                  * Termíny jsou stanoveny na základě předchozí osobní, telefonické či e-mailové domluvy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery-section-v9n2m4p1" className="py-24 bg-white">
        <div id="gallery-container-v7n2m1p4" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="gallery-header-b8n2m1p4" className="text-center mb-16">
            <h2 className="font-display text-slate-900 text-4xl md:text-5xl font-extralight mb-4">Galerie</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Nahlédněte do prostor naší ambulance, kde se snažíme vytvářet příjemné a klidné prostředí.</p>
          </div>

          <div id="gallery-grid-k4b8n2v1" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                id="gallery-item-https-imagesunsplashcom-262"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-2xl group"
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map-section-g7h8i9j0" className="py-24 bg-slate-50">
        <div id="map-container-k1l2m3n4" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="map-header-o5p6q7r8" className="text-center mb-16">
            <h2 className="font-display text-slate-900 text-4xl md:text-5xl font-extralight mb-4">Kde nás najdete</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Naše ambulance se nachází v klidné lokalitě v Krnsku, snadno dostupná autem i veřejnou dopravou.</p>
          </div>
          <motion.div 
            id="map-embed-wrapper-s9t0u1v2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
          >
            <iframe
              id="google-map-iframe-w3x4y5z6"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2547.653623653487!2d14.8228136770199!3d50.38500997158024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47095a6703df11bd%3A0x5143974115837b5!2sKrnsko%20168%2C%20294%2031%20Krnsko!5e0!3m2!1scs!2scz!4v1718886400000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa s polohou ordinace"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="cta-home-section-x8n2m1p4" 
        className="py-20 bg-teal-950 relative overflow-hidden"
      >
        <div id="cta-decorations-v7n2m1p4" className="absolute top-0 left-0 w-full h-full opacity-10">
          <Sparkles className="absolute top-10 right-20 text-white w-20 h-20" />
          <Brain className="absolute bottom-10 left-20 text-white w-32 h-32" />
        </div>
        <div id="cta-content-b8n2m1p4" className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-white text-4xl md:text-5xl font-extralight mb-6">Udělejte první krok k lepšímu zítřku</h2>
          <p className="text-teal-100 text-lg mb-10">
            Každá cesta začíná odvahou vyhledat pomoc. Jsme tu pro vás, abychom vás touto cestou provedli.
          </p>
          <Link 
            to="/kontakt"
            id="cta-button-v9n1m3k5"
            className="inline-block bg-teal-500 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-teal-400 transition-all"
          >
            Kontaktujte nás
          </Link>
        </div>
      </section>
    </main>
  );
}
