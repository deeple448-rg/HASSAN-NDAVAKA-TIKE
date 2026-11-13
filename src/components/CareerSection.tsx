import { useState } from 'react';
import { CAREER_TIMELINE, PROFILE } from '../data/hassanData';

type CareerFilter = 'all' | 'experience' | 'education';

export function CareerSection() {
  const [filter, setFilter] = useState<CareerFilter>('all');

  const filteredEntries = CAREER_TIMELINE.filter((entry) => {
    if (filter === 'all') return true;
    if (filter === 'experience') return entry.type === 'experience';
    return entry.type === 'education' || entry.type === 'certification';
  });

  return (
    <section id="parcours" className="py-20 lg:py-24 bg-white border-b border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-medium text-[#1D4ED8] mb-3">
              03. Parcours Professionnel &amp; Académique
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#111315] max-w-xl">
              De l’ingénierie informatique à la transmission du français
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Clean interactive segmented filter buttons */}
            <div
              role="group"
              aria-label="Filtrer le parcours"
              className="inline-flex items-center gap-1 p-1 bg-[#F1F2F4] rounded-lg"
            >
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-3 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 min-h-[36px] ${
                  filter === 'all'
                    ? 'bg-white text-[#111315] shadow-xs'
                    : 'text-[#525866] hover:text-[#111315]'
                }`}
              >
                Tout voir
              </button>
              <button
                type="button"
                onClick={() => setFilter('experience')}
                className={`px-3 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 min-h-[36px] ${
                  filter === 'experience'
                    ? 'bg-white text-[#111315] shadow-xs'
                    : 'text-[#525866] hover:text-[#111315]'
                }`}
              >
                Expériences
              </button>
              <button
                type="button"
                onClick={() => setFilter('education')}
                className={`px-3 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 min-h-[36px] ${
                  filter === 'education'
                    ? 'bg-white text-[#111315] shadow-xs'
                    : 'text-[#525866] hover:text-[#111315]'
                }`}
              >
                Diplômes &amp; Certificats
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Timeline entries */}
          <div className="lg:col-span-8 divide-y divide-[#E4E4E7] border-t border-b border-[#E4E4E7]">
            {filteredEntries.map((entry) => (
              <div
                key={entry.id}
                className="py-7 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8"
              >
                <div className="sm:col-span-4">
                  <p className="text-xs font-mono text-[#525866] tabular-nums">
                    {entry.period}
                  </p>
                  <p className="mt-1 text-xs text-[#525866]">
                    {entry.location}
                  </p>
                </div>

                <div className="sm:col-span-8">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className="text-base sm:text-lg font-semibold text-[#111315]">
                      {entry.role}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-[#1D4ED8] mb-3">
                    {entry.organization}
                  </p>
                  <ul className="space-y-1.5 text-sm text-[#3F444E] leading-relaxed">
                    {entry.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#A1A1AA] select-none" aria-hidden="true">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right sidebar: Languages, Certifications & Passions */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-[#E4E4E7]">
              <h3 className="font-serif text-2xl font-semibold text-[#111315] mb-4">
                Langues pratiquées
              </h3>
              <ul className="divide-y divide-[#E4E4E7]">
                {PROFILE.languages.map((lang) => (
                  <li key={lang.name} className="py-3 first:pt-0 last:pb-0">
                    <p className="text-sm font-semibold text-[#111315]">{lang.name}</p>
                    <p className="text-xs text-[#525866] mt-0.5">{lang.level}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-[#E4E4E7]">
              <h3 className="font-serif text-2xl font-semibold text-[#111315] mb-3">
                Centres d’intérêt
              </h3>
              <p className="text-sm text-[#525866] leading-relaxed mb-4">
                En dehors des cours et du tutorat en ligne, j’explore le monde par l’image et la réflexion.
              </p>
              <p className="text-sm font-medium text-[#111315]">
                {PROFILE.hobbies.join(' · ')}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-[#E4E4E7]">
              <h3 className="font-serif text-2xl font-semibold text-[#111315] mb-2">
                Préparation TEF Canada
              </h3>
              <p className="text-sm text-[#525866] leading-relaxed mb-4">
                Accompagnement personnalisé pour les candidats à l’immigration francophone au Canada sur{' '}
                <span className="font-medium text-[#111315]">TEF AVEC BASA</span>.
              </p>
              <a
                href={PROFILE.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#1D4ED8] hover:underline"
              >
                Visiter tefavecbasa.com →
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
