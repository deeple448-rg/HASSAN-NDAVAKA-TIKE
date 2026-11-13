import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { STORIES, StoryArticle } from '../data/hassanData';
import { ResilientImage } from './ResilientImage';

export function StoriesSection() {
  const [activeStory, setActiveStory] = useState<StoryArticle | null>(null);

  useEffect(() => {
    if (!activeStory) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveStory(null);
      } else if (e.key === 'ArrowRight') {
        const idx = STORIES.findIndex((s) => s.id === activeStory.id);
        setActiveStory(STORIES[(idx + 1) % STORIES.length]);
      } else if (e.key === 'ArrowLeft') {
        const idx = STORIES.findIndex((s) => s.id === activeStory.id);
        setActiveStory(STORIES[(idx - 1 + STORIES.length) % STORIES.length]);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeStory]);

  const currentIndex = activeStory
    ? STORIES.findIndex((s) => s.id === activeStory.id)
    : -1;

  return (
    <section id="recits" className="py-20 lg:py-24 bg-[#FAFAFA] border-b border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-medium text-[#1D4ED8] mb-3">
              02. Chroniques &amp; Carnets de Voyage
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#111315] max-w-xl">
              Récits de route entre le Cameroun et l’Inde
            </h2>
          </div>
          <p className="text-sm text-[#525866] max-w-md leading-relaxed">
            Sélectionnez un chapitre pour lire le récit complet de mes origines, mes études d’ingénierie et
            mon quotidien d’enseignant à l’international.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STORIES.map((story) => (
            <article
              key={story.id}
              className="group bg-white border border-[#E4E4E7] rounded-2xl overflow-hidden flex flex-col transition-colors duration-150 hover:border-[#C4C7CE]"
            >
              <button
                type="button"
                onClick={() => setActiveStory(story)}
                className="text-left flex flex-col flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-inset"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#F1F2F4] border-b border-[#E4E4E7]">
                  <ResilientImage
                    src={story.coverImage}
                    alt={story.coverAlt}
                    title={story.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#525866] mb-3">
                      <span className="font-medium text-[#111315]">{story.chapter}</span>
                      <span aria-hidden="true">·</span>
                      <span>{story.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{story.readTime}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-semibold text-[#111315] leading-snug mb-3 group-hover:text-[#1D4ED8] transition-colors">
                      {story.title}
                    </h3>

                    <p className="text-sm text-[#525866] leading-relaxed mb-6">
                      {story.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E4E4E7] flex items-center justify-between text-xs font-medium">
                    <span className="text-[#525866]">{story.location}</span>
                    <span className="inline-flex items-center gap-1 text-[#1D4ED8] whitespace-nowrap">
                      Lire le récit
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Distraction-free Editorial Article Reader Modal */}
      {activeStory && (
        <div
          className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="story-modal-title"
          onClick={() => setActiveStory(null)}
        >
          <div
            className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl border border-[#E4E4E7] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-[#E4E4E7] flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#525866] truncate">
                <span className="font-medium text-[#111315]">{activeStory.chapter}</span>
                <span aria-hidden="true">·</span>
                <span className="truncate">{activeStory.location}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveStory(null)}
                aria-label="Fermer l’article"
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-[#525866] hover:text-[#111315] hover:bg-[#F1F2F4] transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 sm:px-10 py-8">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#525866] mb-3">
                <span>{activeStory.category}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{activeStory.date}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{activeStory.readTime}</span>
              </div>

              <h3
                id="story-modal-title"
                className="font-serif text-3xl sm:text-4xl font-semibold text-[#111315] leading-tight mb-3"
              >
                {activeStory.title}
              </h3>

              <p className="text-base text-[#525866] leading-relaxed mb-6">
                {activeStory.subtitle}
              </p>

              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#E4E4E7] bg-[#F1F2F4] mb-8">
                <ResilientImage
                  src={activeStory.coverImage}
                  alt={activeStory.coverAlt}
                  title={activeStory.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-5 text-base text-[#272B30] leading-[1.75] max-w-[65ch]">
                {activeStory.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <blockquote className="mt-8 p-6 rounded-xl bg-[#FAFAFA] border border-[#E4E4E7] font-serif italic text-xl text-[#111315] leading-relaxed">
                « {activeStory.quote} »
              </blockquote>
            </div>

            <div className="px-6 py-4 border-t border-[#E4E4E7] bg-[#FAFAFA] flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() =>
                  setActiveStory(STORIES[(currentIndex - 1 + STORIES.length) % STORIES.length])
                }
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-[#111315] hover:text-[#1D4ED8] rounded-lg hover:bg-white transition-colors min-h-[40px]"
              >
                <ArrowLeft className="w-4 h-4" />
                Chapitre précédent
              </button>

              <span className="text-xs font-mono text-[#525866] tabular-nums">
                0{currentIndex + 1} / 0{STORIES.length}
              </span>

              <button
                type="button"
                onClick={() =>
                  setActiveStory(STORIES[(currentIndex + 1) % STORIES.length])
                }
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-[#111315] hover:text-[#1D4ED8] rounded-lg hover:bg-white transition-colors min-h-[40px]"
              >
                Chapitre suivant
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
