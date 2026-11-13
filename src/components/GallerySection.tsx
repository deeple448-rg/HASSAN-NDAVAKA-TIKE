import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import {
  GALLERY_PHOTOS,
  GalleryCategory,
  GalleryPhoto,
} from '../data/hassanData';
import { ResilientImage } from './ResilientImage';

const CATEGORIES: { id: GalleryCategory; label: string }[] = [
  { id: 'toutes', label: 'Toutes' },
  { id: 'enseignement', label: 'Enseignement' },
  { id: 'voyages', label: 'Voyages & Ailleurs' },
  { id: 'campus', label: 'Campus & Études' },
  { id: 'tef', label: 'Mentorat TEF' },
  { id: 'portraits', label: 'Portraits' },
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('toutes');
  const [showAllInToutes, setShowAllInToutes] = useState(false);
  const [lightboxPhotoId, setLightboxPhotoId] = useState<string | null>(null);

  const categoryCounts = useMemo(() => {
    const counts: Record<GalleryCategory, number> = {
      toutes: GALLERY_PHOTOS.length,
      enseignement: 0,
      voyages: 0,
      campus: 0,
      tef: 0,
      portraits: 0,
    };
    for (const photo of GALLERY_PHOTOS) {
      counts[photo.category] += 1;
    }
    return counts;
  }, []);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'toutes') return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const displayedPhotos = useMemo(() => {
    if (activeCategory === 'toutes' && !showAllInToutes) {
      return filteredPhotos.slice(0, 12);
    }
    return filteredPhotos;
  }, [activeCategory, filteredPhotos, showAllInToutes]);

  const activeLightboxIndex = useMemo(() => {
    if (!lightboxPhotoId) return -1;
    return filteredPhotos.findIndex((p) => p.id === lightboxPhotoId);
  }, [filteredPhotos, lightboxPhotoId]);

  const activePhoto: GalleryPhoto | null =
    activeLightboxIndex >= 0 ? filteredPhotos[activeLightboxIndex] : null;

  useEffect(() => {
    if (!activePhoto) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxPhotoId(null);
      } else if (e.key === 'ArrowRight') {
        const nextIdx = (activeLightboxIndex + 1) % filteredPhotos.length;
        setLightboxPhotoId(filteredPhotos[nextIdx].id);
      } else if (e.key === 'ArrowLeft') {
        const prevIdx =
          (activeLightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
        setLightboxPhotoId(filteredPhotos[prevIdx].id);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePhoto, activeLightboxIndex, filteredPhotos]);

  const handleCategoryChange = (category: GalleryCategory) => {
    setActiveCategory(category);
    if (category !== 'toutes') {
      setShowAllInToutes(true);
    }
  };

  return (
    <section id="galerie" className="py-20 lg:py-24 bg-[#FAFAFA] border-b border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-medium text-[#1D4ED8] mb-3">
              04. Galerie Photographique
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#111315] max-w-xl">
              Instants choisis : classes, campus et escales
            </h2>
          </div>

          <p className="text-sm text-[#525866] max-w-md leading-relaxed">
            {GALLERY_PHOTOS.length} photographies authentiques retraçant mes salles de classe en Inde,
            mes études à Raipur, le tutorat TEF Canada et mes voyages.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-10 overflow-x-auto pb-1">
          <div
            role="tablist"
            aria-label="Filtrer la galerie par thème"
            className="inline-flex items-center gap-1 p-1 bg-[#EAECEF] rounded-lg"
          >
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 min-h-[38px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${
                    isSelected
                      ? 'bg-white text-[#111315] shadow-xs'
                      : 'text-[#525866] hover:text-[#111315]'
                  }`}
                >
                  {cat.label}{' '}
                  <span className="font-mono text-[11px] text-[#525866] tabular-nums ml-1">
                    ({categoryCounts[cat.id]})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento / Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] gap-4">
          {displayedPhotos.map((photo, idx) => {
            const isBentoLarge =
              photo.featured && (activeCategory !== 'toutes' || idx < 8);
            return (
              <button
                key={photo.id}
                type="button"
                onClick={() => setLightboxPhotoId(photo.id)}
                className={`group relative rounded-2xl overflow-hidden border border-[#E4E4E7] bg-[#F1F2F4] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2 ${
                  isBentoLarge ? 'sm:col-span-2 sm:row-span-2' : 'col-span-1 row-span-1'
                }`}
              >
                <ResilientImage
                  src={photo.src}
                  alt={photo.title}
                  title={photo.title}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-85 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4">
                  <div className="flex justify-end">
                    <span className="w-8 h-8 rounded-lg bg-black/45 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Expand className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="text-white">
                    <p className="text-[11px] font-mono text-white/80 tabular-nums">
                      {photo.location} · {photo.year}
                    </p>
                    <p className="text-sm font-semibold leading-snug mt-0.5 line-clamp-1">
                      {photo.title}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Expand all 33 photos control when viewing 'toutes' */}
        {activeCategory === 'toutes' && (
          <div className="mt-10 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setShowAllInToutes((prev) => !prev)}
              className="px-6 py-3 text-sm font-semibold text-[#111315] bg-white hover:bg-[#F1F2F4] border border-[#E4E4E7] rounded-lg transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
            >
              {showAllInToutes
                ? 'Réduire la galerie (afficher 12 aperçus)'
                : `Afficher toutes les photos (${GALLERY_PHOTOS.length})`}
            </button>
          </div>
        )}
      </div>

      {/* High-resolution Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xs flex flex-col justify-between p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onClick={() => setLightboxPhotoId(null)}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between text-white max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs font-mono text-white/80 tabular-nums">
              {String(activeLightboxIndex + 1).padStart(2, '0')} /{' '}
              {String(filteredPhotos.length).padStart(2, '0')}
              <span className="mx-2 text-white/40" aria-hidden="true">
                ·
              </span>
              <span>{activePhoto.location}</span>
            </div>

            <button
              type="button"
              onClick={() => setLightboxPhotoId(null)}
              aria-label="Fermer la visionneuse"
              className="w-11 h-11 inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Image + Arrows */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 max-w-6xl w-full mx-auto min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                const prevIdx =
                  (activeLightboxIndex - 1 + filteredPhotos.length) %
                  filteredPhotos.length;
                setLightboxPhotoId(filteredPhotos[prevIdx].id);
              }}
              aria-label="Photo précédente"
              className="absolute left-0 sm:left-2 z-10 w-11 h-11 rounded-lg bg-black/60 hover:bg-black/85 border border-white/15 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="max-h-[72vh] max-w-4xl w-full h-full flex items-center justify-center px-12 sm:px-16">
              <ResilientImage
                src={activePhoto.src}
                alt={activePhoto.title}
                title={activePhoto.title}
                loading="eager"
                className="max-h-[72vh] max-w-full w-auto h-auto object-contain rounded-xl"
              />
            </div>

            <button
              type="button"
              onClick={() => {
                const nextIdx = (activeLightboxIndex + 1) % filteredPhotos.length;
                setLightboxPhotoId(filteredPhotos[nextIdx].id);
              }}
              aria-label="Photo suivante"
              className="absolute right-0 sm:right-2 z-10 w-11 h-11 rounded-lg bg-black/60 hover:bg-black/85 border border-white/15 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div
            className="max-w-3xl w-full mx-auto text-center text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="lightbox-title" className="font-serif text-2xl font-semibold">
              {activePhoto.title}
            </h3>
            <p className="mt-1 text-sm text-white/80 leading-relaxed">
              {activePhoto.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
