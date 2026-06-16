import { motion } from 'framer-motion';
import { Clock, Ban, UserCheck, ClipboardCheck, Phone, ShieldQuestion } from 'lucide-react';

export default function RulesPage() {
  const rules = [
    {
      icon: <Clock className="w-8 h-8 text-teal-600" />,
      title: 'Objednávání a termíny',
      desc: 'K vyšetření je nutné se vždy předem objednat, a to buď telefonicky nebo e-mailem. Sjednané termíny jsou závazné. Dostavte se prosím včas, abychom mohli plně využít čas vyhrazený pro vás.'
    },
    {
      icon: <Ban className="w-8 h-8 text-teal-600" />,
      title: 'Zrušení a omluva z termínu',
      desc: 'Pokud se nemůžete dostavit na sjednaný termín, prosíme o jeho zrušení s dostatečným předstihem, nejpozději však 24 hodin předem. Po dvou neomluvených absencích jsme nuceni ukončit péči.'
    },
    {
      icon: <UserCheck className="w-8 h-8 text-teal-600" />,
      title: 'První návštěva',
      desc: 'Na vaši první návštěvu si prosím připravte občanský průkaz a kartičku vaší zdravotní pojišťovny. Čas první konzultace je obvykle delší, počítejte s přibližně 60 minutami.'
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-teal-600" />,
      title: 'Lékařské zprávy a dokumentace',
      desc: 'Pokud máte k dispozici relevantní lékařské zprávy od jiných specialistů nebo z předchozích hospitalizací, vezměte je prosím s sebou. Pomůže nám to získat komplexní obraz o vašem zdravotním stavu.'
    },
    {
      icon: <Phone className="w-8 h-8 text-teal-600" />,
      title: 'Komunikace mimo sezení',
      desc: 'Pro objednání nebo administrativní dotazy využijte prosím telefon nebo e-mail v ordinačních hodinách. V případě akutní krize se obraťte na krizové centrum nebo linku důvěry.'
    },
    {
      icon: <ShieldQuestion className="w-8 h-8 text-teal-600" />,
      title: 'Diskrétnost a mlčenlivost',
      desc: 'Veškeré informace sdělené během sezení jsou přísně důvěrné a vázané lékařským tajemstvím. Vaše soukromí je pro nás absolutní prioritou.'
    }
  ];

  return (
    <main id="rules-page-main-a1b2c3d4" className="pt-32 pb-24 bg-white overflow-hidden">
      <div id="rules-page-container-e5f6g7h8" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="rules-page-header-i9j0k1l2" className="text-center mb-20">
          <span id="rules-page-eyebrow-m3n4o5p6" className="text-teal-600 font-medium tracking-widest uppercase text-sm mb-4 block">Důležité informace</span>
          <h1 id="rules-page-heading-q7r8s9t0" className="font-display text-slate-900 text-4xl md:text-5xl font-extralight mb-6">Pravidla vnitřního řádu ambulance</h1>
          <p id="rules-page-subheading-u1v2w3x4" className="text-slate-600 max-w-3xl mx-auto text-lg">
            Pro zajištění plynulého chodu ordinace a poskytování kvalitní péče vás prosíme o dodržování následujících pravidel. Děkujeme za pochopení a spolupráci.
          </p>
        </div>

        <div id="rules-grid-v5w6x7y8" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rules.map((rule, idx) => (
            <motion.div
              key={idx}
              id="rule-item-https-imagesunsplashcom-264"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
            >
              <div id="rule-icon-container-https-274" className="mb-6">{rule.icon}</div>
              <h3 id="rule-title-https-imagesunsplashcom-265" className="font-display text-xl font-extralight text-slate-900 mb-3">{rule.title}</h3>
              <p id="rule-desc-https-imagesunsplashcom-264" className="text-slate-600 leading-relaxed">{rule.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          id="specialist-info-section-k9j8h7g6" 
          className="mt-24 pt-16 border-t border-slate-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 id="specialist-info-heading-f5e4d3c2" className="font-display text-slate-900 text-3xl md:text-4xl font-extralight mb-10 text-center">
            Situace, se kterými je potřeba se obrátit na jiného specialistu:
          </h2>
          <div id="specialist-info-content-b1a9z8y7" className="max-w-4xl mx-auto bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100">
            <ol id="specialist-info-list-x6w5v4u3" className="list-decimal list-outside space-y-6 pl-5 text-slate-600 leading-relaxed">
              <li id="specialist-item-1-t2s1r9q8">
                pacienti mladší 18-ti let
              </li>
              <li id="specialist-item-2-p7o6n5m4">
                závislost na drogách (např. pervitin, heroin, kanabis) a lécích - například Lexaurin, Neurol, Frontin, Rivotril, Diazepam - léky benzodiazepínového typu (pokud je berete pravidelně déle než půl roku, je potřebné, aby jste absolvovali detoxikaci na psychiatrickém oddělení, než započne ambulantní léčba již bez návykových látek).
                <p id="specialist-item-2-note-l3k2j1i9" className="mt-4 text-sm text-slate-500 italic bg-slate-100 p-4 rounded-lg border border-slate-200">
                  Upozorňuji, že při závislosti na alkoholu a jiných psychotropích látkách jsem ze zákona u řidičů povinna vydat posudek o zdravotní nezpůsobilosti k řízení motorových vozidel na dobu rok od počátku abstinence u alkoholu a při drogové závislosti se jedná o dva roky prokazatelné abstinence.
                </p>
              </li>
              <li id="specialist-item-3-h9g8f7e6">
                sexuální deviace (nutno obrátit se na sexuologickou ambulanci, zde v Mladé Boleslavi je to ambulance MUDr. Zlaty Mistolerové)
              </li>
              <li id="specialist-item-4-d5c4b3a2">
                protože se zaobírám přednostně léčbou, kapacita mi nedovoluje vyšetřovat jednorázově pacienty, s cílem vyjádřit se k držení řidičského či zbrojního průkazu.
              </li>
            </ol>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
