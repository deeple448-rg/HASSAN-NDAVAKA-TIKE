import { PROFILE } from '../data/hassanData';
import { ResilientImage } from './ResilientImage';

export function RootsSection() {
  return (
    <section id="origines" className="py-20 lg:py-24 bg-white border-b border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Portrait side */}
          <div className="lg:col-span-5 flex">
            <figure className="w-full min-h-[400px] rounded-2xl overflow-hidden border border-[#E4E4E7] bg-[#F1F2F4]">
              <ResilientImage
                src="/assets/aistudio/GER_61c53155.jpeg"
                alt="Hassan Ndavaka Tike debout dans une allée bordée de palmiers"
                title="Hassan Ndavaka Tike — Origines et cheminement"
                className="w-full h-full object-cover object-top"
              />
            </figure>
          </div>

          {/* Editorial narrative side */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium text-[#1D4ED8] mb-3">
                01. Racines &amp; Récits de Vie
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold leading-[1.12] tracking-tight text-[#111315] mb-6">
                Né à Wolorde, Tokombéré : l’empreinte de Tike et Ndoudja
              </h2>

              <div className="space-y-4 text-base text-[#3F444E] leading-relaxed max-w-[65ch]">
                <p>
                  Avant les aéroports, les universités indiennes et les classes internationales, il y a
                  <strong className="font-semibold text-[#111315]"> Wolorde</strong>, dans l’arrondissement de{' '}
                  <strong className="font-semibold text-[#111315]">Tokombéré</strong>, au cœur de l’Extrême-Nord
                  du Cameroun. C’est là que j’ai vu le jour et que s’est forgée ma manière d’aborder le monde :
                  avec patience, curiosité et respect de l’autre.
                </p>
                <p>
                  Tout ce que j’entreprends reflète les valeurs transmises par mes parents : mon père,{' '}
                  <strong className="font-semibold text-[#111315]">{PROFILE.father}</strong>, et ma mère,{' '}
                  <strong className="font-semibold text-[#111315]">{PROFILE.mother}</strong>. Leur droiture, leur
                  courage quotidien et leur confiance dans la valeur du savoir m’ont accompagné depuis l’École
                  Publique de Maroua et le Lycée de Maroua jusqu’au journalisme à Bafoussam, puis vers l’Inde.
                </p>
                <p>
                  Voyager loin de sa terre natale ne signifie jamais s’en détacher : chaque leçon de français
                  donnée à Surat ou Vijayawada prolonge cette hospitalité camerounaise reçue dès l’enfance.
                </p>
              </div>
            </div>

            {/* Clean unboxed heritage index */}
            <dl className="mt-10 pt-8 border-t border-[#E4E4E7] grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <dt className="text-xs text-[#525866]">Lieu de naissance</dt>
                <dd className="mt-1 text-sm font-semibold text-[#111315]">Wolorde, Tokombéré</dd>
              </div>
              <div>
                <dt className="text-xs text-[#525866]">Nationalité</dt>
                <dd className="mt-1 text-sm font-semibold text-[#111315]">Camerounaise</dd>
              </div>
              <div>
                <dt className="text-xs text-[#525866]">Père</dt>
                <dd className="mt-1 text-sm font-semibold text-[#111315]">{PROFILE.father}</dd>
              </div>
              <div>
                <dt className="text-xs text-[#525866]">Mère</dt>
                <dd className="mt-1 text-sm font-semibold text-[#111315]">{PROFILE.mother}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
