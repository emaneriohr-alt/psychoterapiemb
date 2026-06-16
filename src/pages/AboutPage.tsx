import { motion } from 'framer-motion';

export default function AboutPage() {
  const memberships = [
    'Člen České psychoterapeutické společnosti',
    'Člen České daseinsanalytické společnosti',
    'České lékařské společnosti Jana Evangelisty Purkyně, sekce psychoterapie a ambulantní psychiatrie',
    'České lékařské komory',
  ];

  const experience = [
    'Psychiatrická léčebna Kosmonosy: psychiatr na Příjmovém oddělení pro muže; vedoucí lékař oddělení Gerontopsychiatrie',
    'Psychiatrická léčebna Kosmonosy: ambulantní lékař v psychiatrické ambulanci; individuální psychoterapie',
    'Linka důvěry SOS a Centrum psychoterapie v Mladé Boleslavi - ambulantní psychiatr a odborný garant',
    'ambulantní psychiatr v psychiatrické ordinaci v Mělníce a ambulantní vězeňský psychiatr',
  ];

  const education = [
    'absolventka 1. lékařské fakulty University Karlovy v Praze v oboru všeobecné lékařství',
    'atestace 1. a 2. stupně v oboru psychiatrie',
    'absolventka 5letého sebezkušenostního výcviku v daseinsanalytické psychoterapii pod vedením Doc. PhDr. Jiřího Růžičky, Ph.D.',
    'zkouška funkční specializace v oboru Systemická individuální a skupinová psychoterapie',
    'kurz párové terapie (Knop, Zemanová)',
    'supervize - kontinuálně během praxe doposud',
  ];

  const activities = [
    'Univerzita Palackého v Olomouci, Filozofická fakulta - přednášení předmětu Psychopatologie',
    'Střední zdravotnická škola v Mladé Boleslavi - vyučování předmětu Psychiatrie',
    'přednášková činnost v rámci schůzí ČLS JEP v oboru psychiatrie v Praze',
    'přednášení v rámci protidrogové prevence a prevence sociálně-patologických jevů na základních školách',
    'přednášení pro Centra pěstounských rodin a Jistoty domova - péče o seniory',
    'přednášení mezioborových témat pro praktické lékaře, pediatry, dobrovolníky',
    'výuka na PVŠPS Praha',
    'poskytuji supervizní práci pro jednotlivce',
    'poskytuji tréninkovou supervizi pro daseinsanalytické psychoterapeuty ve zdravotnictví',
  ];

  const cleanText = (text: string) => text.replace(/[,.]$/, '').trim();

  return (
    <main id="about-page-main-b8n2m1p4" className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            id="about-image-container-a1b2c3d4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <img 
              id="about-image-e5f6g7h8"
              src="https://api.sitejourney.ai/storage/v1/object/public/site-assets/2576ba2a-05d7-4974-b00b-d8c518be847a/2a479f0b-a8ba-4823-aa21-2b3952eb4161/photo-1781279160108-eg6z.jpg" 
              alt="MUDr. Martina Hrnčířová v ordinaci" 
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
          </motion.div>
          
          <motion.div
            id="about-content-container-i9j0k1l2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span id="about-eyebrow-m3n4o5p6" className="text-teal-600 font-medium tracking-widest uppercase text-sm mb-4 block">O lékařce</span>
            <h1 id="about-heading-q7r8s9t0" className="font-display text-slate-900 text-4xl md:text-5xl font-bold mb-6">MUDr. Martina Hrnčířová</h1>
            <p id="about-intro-1-u1v2w3x4" className="text-slate-600 text-lg mb-6 leading-relaxed">
              Specializuji se na psychiatrickou péči a psychoterapii s důrazem na individuální potřeby každého klienta. Má dlouholetá praxe v klinické psychiatrii mi umožňuje poskytovat komplexní péči zahrnující diagnostiku i následnou léčbu.
            </p>
            <p id="about-intro-2-y5z6a7b8" className="text-slate-600 text-lg mb-8 leading-relaxed">
              Mým cílem je vytvořit prostor, kde se budete cítit bezpečně, vyslyšeni a pochopeni. Věřím v kombinaci moderních medicínských postupů a lidského přístupu.
            </p>

            <div id="book-section-k8f9g0h1" className="my-12 bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h2 id="book-heading-j2k3l4m5" className="font-display text-2xl font-bold text-slate-900 mb-4">Napsala jsem...</h2>
              <p id="book-text-n6o7p8q9" className="text-slate-600 leading-relaxed">
                Pokud vás zajímá praktická stránka péče o duši, rádi přemýšlíte a čtete, doporučuji vám moji knihu Klidná mysl v dobách zlých, která vyšla 3.6.2022 a kterou věnuji všem hloubavým lidem, ať už zápolí s duševními problémy nebo ne. V knize popisuji témata, která spolu probíráme při terapiích a kontrolách u mě v ambulanci a mnohem více - je o laskavosti k sobě a ke světu.
              </p>
              <img
                src="https://api.sitejourney.ai/storage/v1/object/public/site-assets/2576ba2a-05d7-4974-b00b-d8c518be847a/2a479f0b-a8ba-4823-aa21-2b3952eb4161/photo-1781283758693-f7f7.jpg"
                alt="Kniha Klidná mysl v dobách zlých"
                className="mt-6 rounded-lg shadow-md w-full"
              />
            </div>

            <div id="about-details-section-c9d0e1f2" className="space-y-12 mt-12">
              <div id="memberships-section-g3h4i5j6">
                <h2 id="memberships-heading-k7l8m9n0" className="font-display text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Členství v odborných společnostech</h2>
                <ul id="memberships-list-o1p2q3r4" className="space-y-3 list-disc list-inside text-slate-600">
                  {memberships.map((item, idx) => <li id="membership-item-https-imagesunsplashcom-262" key={idx}>{cleanText(item)}</li>)}
                </ul>
              </div>

              <div id="experience-section-w9x0y1z2">
                <h2 id="experience-heading-a3b4c5d6" className="font-display text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Profesní praxe</h2>
                <ul id="experience-list-e7f8g9h0" className="space-y-3 list-disc list-inside text-slate-600">
                  {experience.map((item, idx) => <li id="experience-item-https-imagesunsplashcom-262" key={idx}>{cleanText(item)}</li>)}
                </ul>
              </div>

              <div id="education-section-m5n6o7p8">
                <h2 id="education-heading-q9r0s1t2" className="font-display text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Vzdělání</h2>
                <ul id="education-list-u3v4w5x6" className="space-y-3 list-disc list-inside text-slate-600">
                  {education.map((item, idx) => <li id="education-item-https-imagesunsplashcom-261" key={idx}>{cleanText(item)}</li>)}
                </ul>
              </div>

              <div id="activities-section-c1d2e3f4">
                <h2 id="activities-heading-g5h6i7j8" className="font-display text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Odborná činnost</h2>
                <ul id="activities-list-k9l0m1n2" className="space-y-3 list-disc list-inside text-slate-600">
                  {activities.map((item, idx) => <li id="activity-item-https-imagesunsplashcom-260" key={idx}>{item}</li>)}
                </ul>
              </div>

              <div id="registration-section-s7t8u9v0" className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 id="registration-heading-w1x2y3z4" className="font-display text-xl font-extralight text-slate-900 mb-3">Registrovaný poskytovatel zdravotnických služeb</h3>
                <p id="registration-text-a5b6c7d8" className="text-slate-600 text-sm">
                  Registrace Krajským úřadem Středočeského kraje v Praze proběhla 4. 9. 2012, č.j.: 130892/2012/KUSK.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
