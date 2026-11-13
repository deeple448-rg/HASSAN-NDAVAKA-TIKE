import { PROFILE } from '../data/hassanData';

export function Footer() {
  return (
    <footer className="bg-[#FAFAFA] border-t border-[#E4E4E7] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-serif text-lg font-semibold text-[#111315]">
            {PROFILE.fullName}
          </p>
          <p className="text-xs text-[#525866] mt-1">
            Né à {PROFILE.birthPlace}, {PROFILE.country} · Fils de {PROFILE.father} et {PROFILE.mother}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#525866]">
          <a href="#origines" className="hover:text-[#111315] transition-colors">
            Origines
          </a>
          <a href="#recits" className="hover:text-[#111315] transition-colors">
            Récits
          </a>
          <a href="#parcours" className="hover:text-[#111315] transition-colors">
            Parcours
          </a>
          <a href="#galerie" className="hover:text-[#111315] transition-colors">
            Galerie
          </a>
          <a href="#contact" className="hover:text-[#1D4ED8] transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
