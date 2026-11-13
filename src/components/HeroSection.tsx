import { ArrowDownRight, Images } from 'lucide-react';
import { PROFILE } from '../data/hassanData';
import { ResilientImage } from './ResilientImage';

const MARQUEE_ITEMS = [
  'Wolorde, Tokombéré',
  'Maroua',
  'Bafoussam',
  'Raipur',
  'Surat',
  'Ankleshwar',
  'Vijayawada',
  'TEF Canada en ligne',
];

export function HeroSection() {
  return (
    <section id="accueil" className="border-b border-[#E4E4E7] bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-12 lg:pt-16 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left column: Typographic hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs sm:text-sm font-medium text-[#525866] tracking-wide mb-5">
                {PROFILE.birthPlace}, {PROFILE.country}
                <span className="mx-2 text-[#A1A1AA]" aria-hidden="true">
                  ·
                </span>
                Professeur de Français &amp; Voyageur
              </p>

              <h1 className="font-serif text-[clamp(2.5rem,4.5vw,4.1rem)] font-semibold leading-[1.06] tracking-tight text-[#111315] max-w-2xl mb-6">
                Des collines de Tokombéré aux salles de classe du monde.
              </h1>

              <p className="text-base sm:text-lg text-[#3F444E] leading-relaxed max-w-[62ch] mb-8">
                Je m’appelle <strong className="font-semibold text-[#111315]">Hassan Ndavaka Tike</strong>.
                Camerounais né à Wolorde, fils de <span className="font-medium text-[#111315]">Tike</span> et de{' '}
                <span className="font-medium text-[#111315]">Ndoudja</span>, je partage ici mon parcours
                d’ingénieur et d’enseignant de français international, mes carnets de route en Inde et mes
                rencontres à travers les frontières.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#recits"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2"
              >
                Lire mes récits
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#galerie"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#111315] bg-white hover:bg-[#F1F2F4] border border-[#E4E4E7] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
              >
                <Images className="w-4 h-4 text-[#525866]" aria-hidden="true" />
                Explorer la galerie
              </a>
            </div>
          </div>

          {/* Right column: Matching-height editorial portrait */}
          <div className="lg:col-span-5 flex">
            <figure className="relative w-full min-h-[380px] lg:min-h-[480px] rounded-2xl overflow-hidden border border-[#E4E4E7] bg-[#F1F2F4]">
              <ResilientImage
                src={PROFILE.profileImage}
                alt="Photo de profil de Hassan Ndavaka Tike assis en chemise en jean dans son espace de travail"
                title="Hassan Ndavaka Tike"
                loading="eager"
                className="w-full h-full object-cover object-top"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-5 pt-14 text-white">
                <p className="text-xs font-mono tracking-wide text-white/85">
                  {PROFILE.fullName} · {PROFILE.country}
                </p>
                <p className="text-sm font-medium mt-0.5">
                  Professeur de français, mentor TEF Canada &amp; voyageur.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Full-width 4-column key figures strip below the split */}
        <div className="mt-12 pt-8 border-t border-[#E4E4E7] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROFILE.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="font-serif text-3xl sm:text-4xl font-semibold text-[#111315] tabular-nums">
                {metric.value}
              </p>
              <p className="mt-1.5 text-sm text-[#525866] leading-snug">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle editorial itinerary ribbon */}
      <div className="border-t border-[#E4E4E7] bg-white overflow-hidden py-3" aria-hidden="true">
        <div className="animate-marquee text-xs font-medium text-[#525866] tracking-wide">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((city, idx) => (
            <span key={`${city}-${idx}`} className="inline-flex items-center whitespace-nowrap">
              <span className="px-4">{city}</span>
              <span className="text-[#1D4ED8]">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
