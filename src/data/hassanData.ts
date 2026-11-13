export type GalleryCategory =
  | 'toutes'
  | 'enseignement'
  | 'voyages'
  | 'campus'
  | 'tef'
  | 'portraits';

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  caption: string;
  location: string;
  year: string;
  category: Exclude<GalleryCategory, 'toutes'>;
  featured?: boolean;
}

export interface StoryArticle {
  id: string;
  chapter: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  date: string;
  readTime: string;
  coverImage: string;
  coverAlt: string;
  excerpt: string;
  paragraphs: string[];
  quote: string;
}

export interface CareerEntry {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'experience' | 'education' | 'certification';
  highlights: string[];
}

export const PROFILE = {
  fullName: 'Hassan Ndavaka Tike',
  birthPlace: 'Wolorde, Tokombéré',
  country: 'Cameroun',
  father: 'Tike',
  mother: 'Ndoudja',
  email: 'hassanndavaka@gmail.com',
  phone: '+91 84618 96635',
  currentLocation: 'Vijayawada & Surat, Inde',
  website: 'http://tefavecbasa.com',
  profileImage: '/assets/aistudio/NOM_3168d65a.jpeg',
  languages: [
    { name: 'Français', level: 'Courant — Langue d’enseignement' },
    { name: 'Anglais', level: 'Intermédiaire — Usage professionnel' },
    { name: 'Espagnol', level: 'Intermédiaire' },
  ],
  hobbies: ['Lecture', 'Voyages', 'Photographie', 'Échecs'],
  metrics: [
    { value: '98 %', label: 'Réussite dès le 1er essai au TEF Canada' },
    { value: '50+', label: 'Apprenants accompagnés sur Parlez Mondial' },
    { value: '95 %', label: 'Satisfaction étudiante (IGCSE, Grades 2 à 10)' },
    { value: '2', label: 'Continents reliés : Afrique & Asie' },
  ],
};

export const STORIES: StoryArticle[] = [
  {
    id: 'wolorde-tokombere',
    chapter: 'Chapitre 01',
    title: 'De Wolorde à Tokombéré : les valeurs de Tike et Ndoudja',
    subtitle: 'Aux sources d’une vocation forgée entre les monts Mandara et les salles de classe de Maroua.',
    category: 'Racines & Famille',
    location: 'Wolorde, Tokombéré · Cameroun',
    date: 'Récit fondateur',
    readTime: '4 min de lecture',
    coverImage: '/assets/aistudio/GER_61c53155.jpeg',
    coverAlt: 'Hassan Ndavaka Tike debout dans une allée bordée de palmiers',
    excerpt:
      'Tout commence à Wolorde, dans l’arrondissement de Tokombéré. Sous le regard bienveillant de mon père Tike et de ma mère Ndoudja, j’ai appris que la curiosité et l’effort ouvrent les routes les plus lointaines.',
    paragraphs: [
      'Je suis né à Wolorde, à Tokombéré, dans l’Extrême-Nord du Cameroun. Dans cette terre de relief et de lumière, la vie enseigne très tôt le sens de la communauté, de la persévérance et du respect des aînés. Chaque pas que j’ai accompli à l’international porte l’empreinte silencieuse de ce village.',
      'Mon père, Tike, et ma mère, Ndoudja, m’ont transmis bien plus qu’un nom : ils m’ont offert le goût de la rigueur, l’humilité face à l’inconnu et la conviction que l’éducation est un passeport moral avant d’être un diplôme. Leur soutien constant reste le socle de toutes mes traversées.',
      'De l’École Publique de Maroua au Lycée de Maroua, puis jusqu’à ma formation en journalisme au CEFROMA de Bafoussam, j’ai grandi entre plusieurs visages du Cameroun. C’est là que l’amour des mots, du français et du dialogue entre cultures a pris racine en moi.',
    ],
    quote:
      'Porter le nom de Tike et la bénédiction de Ndoudja, c’est savoir d’où l’on vient pour mieux accueillir le monde.',
  },
  {
    id: 'raipur-informatique',
    chapter: 'Chapitre 02',
    title: 'Cap sur Raipur : l’ingénierie informatique comme nouveau départ',
    category: 'Études & Découverte',
    subtitle: 'Quitter le Cameroun pour un Bachelor en Computer Science Engineering au cœur de l’Inde.',
    location: 'Raipur, Chhattisgarh · Inde',
    date: '2021 — 2024',
    readTime: '5 min de lecture',
    coverImage: '/assets/aistudio/TY_7c423beb.jpeg',
    coverAlt: 'Hassan Ndavaka Tike avec un camarade universitaire à Raipur',
    excerpt:
      'Entre algorithmes, bibliothèques animées et rencontres étudiantes à la Shri Rawatpura Sarkar University, Raipur a été mon premier laboratoire d’adaptation interculturelle.',
    paragraphs: [
      'Arriver en Inde pour poursuivre un Bachelor in Computer Science Engineering (BTech) à la Shri Rawatpura Sarkar University de Raipur représentait un saut immense : nouvelle langue du quotidien, nouveaux rythmes climatiques, nouvelle approche académique.',
      'Sur les bancs de l’université, entouré de camarades venus de toute l’Inde, j’ai découvert une fraternité spontanée. Les séances de révision en salle d’étude et les échanges après les cours ont rapidement transformé la distance géographique en une deuxième maison.',
      'Cette double culture — littéraire par le journalisme et l’enseignement du français, analytique par l’informatique et la Data Science — façonne aujourd’hui ma manière d’enseigner : structurée, interactive et résolument tournée vers les outils numériques.',
    ],
    quote:
      'L’informatique m’a appris à structurer la pensée ; le voyage m’a appris à l’ouvrir à l’autre.',
  },
  {
    id: 'enseigner-inde-igcse',
    chapter: 'Chapitre 03',
    title: 'Enseigner le français de Surat à Vijayawada',
    subtitle: 'Faire vibrer la langue de Molière dans les écoles internationales IGCSE et Cambridge.',
    category: 'Parcours Pédagogique',
    location: 'Surat, Ankleshwar & Vijayawada · Inde',
    date: '2023 — Présent',
    readTime: '5 min de lecture',
    coverImage: '/assets/aistudio/NJO_cc03d39b.jpeg',
    coverAlt: 'Hassan Ndavaka Tike enseignant les expressions interrogatives françaises devant un tableau interactif',
    excerpt:
      'Du programme IGCSE à P.P. Savani et Podar World School jusqu’à Shamrock International School à Vijayawada, chaque classe est une rencontre vivante entre le français et l’Inde.',
    paragraphs: [
      'À Surat puis à Vijayawada, j’ai eu le privilège d’accompagner des élèves du primaire au secondaire (Grades 2 à 10) au sein d’établissements internationaux suivant le cursus Cambridge IGCSE — notamment P.P. Savani Cambridge International School, Podar World School et aujourd’hui Shamrock International School.',
      'Enseigner « Qui ? », « Pourquoi ? » ou « Quand ? » devant un tableau numérique interactif à de jeunes apprenants indiens est une joie quotidienne. En mêlant supports multimédias, mises en situation concrètes et célébrations scolaires, la moyenne de classe a progressé de 20 % avec 95 % de satisfaction.',
      'Mais l’école internationale, c’est aussi la chaleur des salles des professeurs, la bienveillance des collègues et les moments de fête partagés. Ces visages et ces sourires rappellent que la pédagogie est avant tout une histoire de confiance.',
    ],
    quote:
      'Une langue ne s’enseigne pas seulement par la grammaire ; elle se transmet par l’enthousiasme et la présence.',
  },
  {
    id: 'carnet-de-route-tef',
    chapter: 'Chapitre 04',
    title: 'Carnet de route : vols intérieurs, horizons et mentorat TEF Canada',
    subtitle: 'Relier les fuseaux horaires par le mentorat linguistique tout en explorant l’Inde.',
    category: 'Voyages & Mentorat',
    location: 'Aéroports d’Inde · En ligne (TEF Canada)',
    date: '2023 — 2026',
    readTime: '4 min de lecture',
    coverImage: '/assets/aistudio/EE_7ef70015.jpeg',
    coverAlt: 'Hassan Ndavaka Tike devant un avion sur le tarmac avec sa casquette verte et son casque audio',
    excerpt:
      'Entre les passerelles d’embarquement, les terrasses panoramiques et les appels vidéo de préparation au TEF Canada avec des candidats du monde entier, mon quotidien ne connaît pas de frontières.',
    paragraphs: [
      'Voyager en Inde — d’un campus du Chhattisgarh aux côtes et métropoles du Gujarat et de l’Andhra Pradesh — aiguise le regard du photographe amateur que je suis. Chaque trajet en avion ou promenade en ville devient l’occasion de saisir une lumière, une architecture ou une atmosphère nocturne.',
      'Parallèlement à mes cours en présentiel, j’ai développé une activité de mentorat en ligne sur Parlez Mondial et TEF AVEC BASA (tefavecbasa.com). Qu’il s’agisse d’accompagner plus de 50 apprenants vers l’aisance orale ou de préparer des candidats exigeants au TEF Canada, chaque session vidéo est un pont entre continents.',
      'Voir des apprenants comme Olesya franchir les épreuves d’immigration et de citoyenneté avec un taux de réussite de 98 % dès la première tentative donne tout son sens à ce métier de passeur de langues.',
    ],
    quote:
      'De Tokombéré aux salles de classe virtuelles, chaque rencontre confirme que les frontières s’effacent devant le savoir partagé.',
  },
];

export const CAREER_TIMELINE: CareerEntry[] = [
  {
    id: 'shamrock',
    period: '2025 — Présent',
    role: 'Professeur de Français (IGCSE)',
    organization: 'Shamrock International School',
    location: 'Vijayawada, Inde',
    type: 'experience',
    highlights: [
      'Enseignement du français au cursus international IGCSE.',
      'Conception des plans annuels et quotidiens intégrant ressources multimédias et ateliers interactifs.',
    ],
  },
  {
    id: 'tef-basa',
    period: 'Janv. 2023 — Mai 2026',
    role: 'Tuteur Spécialisé TEF Canada',
    organization: 'TEF AVEC BASA (tefavecbasa.com)',
    location: 'En ligne · International',
    type: 'experience',
    highlights: [
      'Préparation ciblée des candidats aux épreuves officielles d’immigration et de citoyenneté TEF Canada.',
      'Création de plans d’étude sur mesure permettant 98 % de réussite dès la première tentative.',
    ],
  },
  {
    id: 'pp-savani',
    period: '2023 — 2025',
    role: 'Professeur de Français (IGCSE, Grades 2 à 10)',
    organization: 'P.P. Savani Cambridge International School & Podar World School',
    location: 'Surat & Ankleshwar, Inde',
    type: 'experience',
    highlights: [
      'Élaboration complète du curriculum français pour les niveaux primaire et secondaire.',
      '95 % de satisfaction étudiante et progression de +20 % sur les résultats moyens aux évaluations.',
    ],
  },
  {
    id: 'parlez-mondial',
    period: 'Janv. 2023 — Oct. 2025',
    role: 'Tuteur de Français',
    organization: 'Parlez Mondial',
    location: 'En ligne',
    type: 'experience',
    highlights: [
      'Animation de séances individuelles et en petits groupes adaptées aux objectifs de chaque apprenant.',
      'Plus de 50 étudiants accompagnés vers la maîtrise conversationnelle et les examens officiels.',
    ],
  },
  {
    id: 'btech-raipur',
    period: '2021 — 2024',
    role: 'Bachelor in Computer Science Engineering (BTech)',
    organization: 'Shri Rawatpura Sarkar University',
    location: 'Raipur, Inde',
    type: 'education',
    highlights: [
      'Formation d’ingénieur en informatique, génie logiciel et systèmes numériques.',
    ],
  },
  {
    id: 'maroua-roots',
    period: 'Parcours scolaire',
    role: 'Études secondaires & primaires',
    organization: 'Secondary School of Maroua & École Publique de Maroua',
    location: 'Maroua, Cameroun',
    type: 'education',
    highlights: [
      'Fondations académiques dans l’Extrême-Nord du Cameroun après une enfance à Wolorde, Tokombéré.',
    ],
  },
  {
    id: 'cert-datascience',
    period: 'Avril 2026',
    role: 'Certification Data Scientist',
    organization: 'Simplilearn (Commonwealth Cameroon)',
    location: 'Cameroun · En ligne',
    type: 'certification',
    highlights: [
      'Analyse de données, modélisation statistique et applications numériques.',
    ],
  },
  {
    id: 'cert-journalisme',
    period: 'Avril 2026',
    role: 'Certification en Journalisme',
    organization: 'CEFROMA Bafoussam',
    location: 'Bafoussam, Cameroun',
    type: 'certification',
    highlights: [
      'Rédaction éditoriale, reportage et communication francophone.',
    ],
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g-01',
    src: '/assets/aistudio/MO_06e227bd.jpeg',
    title: 'Horizon urbain depuis les hauteurs',
    caption: 'Portrait en chemise à carreaux sur une terrasse panoramique surplombant la ville.',
    location: 'Inde',
    year: '2025',
    category: 'voyages',
    featured: true,
  },
  {
    id: 'g-02',
    src: '/assets/aistudio/EE_7ef70015.jpeg',
    title: 'Embarquement vers de nouveaux horizons',
    caption: 'Sur le tarmac devant l’appareil avant un vol intérieur en Inde, casque audio et casquette verte.',
    location: 'Aéroport, Inde',
    year: '2025',
    category: 'voyages',
    featured: true,
  },
  {
    id: 'g-03',
    src: '/assets/aistudio/NJO_cc03d39b.jpeg',
    title: 'Atelier interactif : les mots interrogatifs',
    caption: 'Passage de relais au tableau numérique pendant une séance sur « Qui, Pourquoi, Quand ».',
    location: 'P.P. Savani International School, Surat',
    year: '2024',
    category: 'enseignement',
    featured: true,
  },
  {
    id: 'g-04',
    src: '/assets/aistudio/GER_61c53155.jpeg',
    title: 'Allée des palmiers',
    caption: 'Promenade ensoleillée au milieu des palmiers lors d’une escapade de fin de semaine.',
    location: 'Parc botanique, Inde',
    year: '2025',
    category: 'voyages',
  },
  {
    id: 'g-05',
    src: '/assets/aistudio/GRE_51f70c2e.jpeg',
    title: 'Arrivée matinale sur le campus scolaire',
    caption: 'Ordinateur sous le bras et sac au dos devant l’architecture moderne de l’établissement.',
    location: 'Surat, Inde',
    year: '2024',
    category: 'enseignement',
  },
  {
    id: 'g-06',
    src: '/assets/aistudio/IH_12cc3712.jpeg',
    title: 'Leçon de grammaire française au tableau',
    caption: 'Explication des expressions interrogatives en français avec traduction anglaise en direct.',
    location: 'P.P. Savani International School',
    year: '2024',
    category: 'enseignement',
  },
  {
    id: 'g-07',
    src: '/assets/aistudio/IK_1f694467.jpeg',
    title: 'Complicité scolaire à Ankleshwar',
    caption: 'Instant souriant avec une jeune élève devant le panneau de Podar World School.',
    location: 'Podar World School, Ankleshwar',
    year: '2025',
    category: 'enseignement',
  },
  {
    id: 'g-08',
    src: '/assets/aistudio/RE_a332f4aa.jpeg',
    title: 'Suivi individuel en classe',
    caption: 'Vérification des exercices écrits et accompagnement personnalisé auprès d’un élève.',
    location: 'Salle de classe, Inde',
    year: '2024',
    category: 'enseignement',
  },
  {
    id: 'g-09',
    src: '/assets/aistudio/KK_9cfb2675.jpeg',
    title: 'Remise de distinction entre collègues',
    caption: 'Moment de gratitude et de reconnaissance professionnelle avec une collègue de l’école.',
    location: 'Inde',
    year: '2024',
    category: 'enseignement',
  },
  {
    id: 'g-10',
    src: '/assets/aistudio/OL_c69c0243.jpeg',
    title: 'Équipe pédagogique réunie',
    caption: 'Pause conviviale en salle des professeurs avec quatre collègues enseignantes.',
    location: 'Inde',
    year: '2025',
    category: 'enseignement',
  },
  {
    id: 'g-11',
    src: '/assets/aistudio/MOOO_f85e7b29.jpeg',
    title: 'Partage en salle des professeurs',
    caption: 'Sourires partagés entre collègues durant la préparation des cours de la semaine.',
    location: 'Inde',
    year: '2025',
    category: 'enseignement',
  },
  {
    id: 'g-12',
    src: '/assets/aistudio/KJ_947566fe.jpeg',
    title: 'Fête de fin d’année à l’école',
    caption: 'Célébration festive en classe avec lunettes de Noël et enthousiasme des élèves.',
    location: 'Podar World School',
    year: '2024',
    category: 'enseignement',
  },
  {
    id: 'g-13',
    src: '/assets/aistudio/KM_8f2d7bc5.jpeg',
    title: 'Sourires de décembre en classe',
    caption: 'Souvenir joyeux des activités culturelles de fin de trimestre avec les jeunes élèves.',
    location: 'Podar World School',
    year: '2024',
    category: 'enseignement',
  },
  {
    id: 'g-14',
    src: '/assets/aistudio/N_1e692c61.jpeg',
    title: 'Éclat de rire pédagogique',
    caption: 'Un moment de bonne humeur partagé lors des festivités scolaires.',
    location: 'Podar World School',
    year: '2024',
    category: 'enseignement',
  },
  {
    id: 'g-15',
    src: '/assets/aistudio/NNN_08fac095.jpeg',
    title: 'Avec la déléguée de classe',
    caption: 'Photo souvenir avec une élève arborant fièrement son ruban de Monitor.',
    location: 'Podar World School',
    year: '2024',
    category: 'enseignement',
  },
  {
    id: 'g-16',
    src: '/assets/aistudio/B_d61105d6.jpeg',
    title: 'Promo d’ingénierie informatique à Raipur',
    caption: 'Aux côtés de camarades de promotion en BTech Computer Science Engineering.',
    location: 'Raipur, Chhattisgarh',
    year: '2023',
    category: 'campus',
    featured: true,
  },
  {
    id: 'g-17',
    src: '/assets/aistudio/TY_7c423beb.jpeg',
    title: 'Séance de travail en bibliothèque',
    caption: 'Révisions d’informatique avec un ami de promotion dans la grande salle d’étude.',
    location: 'Raipur, Chhattisgarh',
    year: '2023',
    category: 'campus',
  },
  {
    id: 'g-18',
    src: '/assets/aistudio/CLASSSS_3c063830.jpeg',
    title: 'Session de mentorat TEF Canada',
    caption: 'Cours individuel en visioconférence avec Olesya pour la préparation du TEF Canada.',
    location: 'En ligne · TEF AVEC BASA',
    year: '2025',
    category: 'tef',
  },
  {
    id: 'g-19',
    src: '/assets/aistudio/CLASS_2ed64270.jpeg',
    title: 'Entraînement oral en direct',
    caption: 'Simulation d’entretien et correction phonétique à distance via TEF AVEC BASA.',
    location: 'En ligne · TEF AVEC BASA',
    year: '2025',
    category: 'tef',
  },
  {
    id: 'g-20',
    src: '/assets/aistudio/CLAS_07bca381.jpeg',
    title: 'En studio d’enseignement à distance',
    caption: 'Casque audio vissé sur les oreilles entre deux séances de tutorat francophone.',
    location: 'Inde · En ligne',
    year: '2025',
    category: 'tef',
  },
  {
    id: 'g-21',
    src: '/assets/aistudio/P_b77592ce.jpeg',
    title: 'Flânerie dans une galerie commerciale',
    caption: 'En veste en jean et casquette sombre lors d’une sortie urbaine en Inde.',
    location: 'Inde',
    year: '2025',
    category: 'voyages',
  },
  {
    id: 'g-22',
    src: '/assets/aistudio/OOOO_f0c40c5d.jpeg',
    title: 'Soirée détente en terrasse',
    caption: 'Halte nocturne à la table T7 après une semaine intense entre cours et projets.',
    location: 'Inde',
    year: '2025',
    category: 'voyages',
  },
  {
    id: 'g-23',
    src: '/assets/aistudio/O_59634c84.jpeg',
    title: 'Portrait nomade en musique',
    caption: 'Casque sur les oreilles et sourire franc lors d’une escale en déplacement.',
    location: 'En transit, Inde',
    year: '2025',
    category: 'voyages',
  },
  {
    id: 'g-24',
    src: '/assets/aistudio/HJGF_33914be8.jpeg',
    title: 'Regard tourné vers les objectifs du jour',
    caption: 'Devant le tableau blanc affichant les « Learning Objectives » de la séance.',
    location: 'Salle de classe, Inde',
    year: '2025',
    category: 'portraits',
  },
  {
    id: 'g-25',
    src: '/assets/aistudio/Y_5e7acaf2.jpeg',
    title: 'Salle informatique & poste de travail',
    caption: 'En tenue soignée dans l’espace numérique dédié aux ressources pédagogiques.',
    location: 'Campus scolaire, Inde',
    year: '2025',
    category: 'portraits',
  },
  {
    id: 'g-26',
    src: '/assets/aistudio/NOM_3168d65a.jpeg',
    title: 'Pause réflexion au bureau',
    caption: 'Style décontracté en denim et bottines daim dans l’espace de travail.',
    location: 'Inde',
    year: '2025',
    category: 'portraits',
  },
  {
    id: 'g-27',
    src: '/assets/aistudio/MOM_673962d0.jpeg',
    title: 'Debout dans la salle des enseignants',
    caption: 'Fin de journée studieuse devant les piles de cahiers corrigés.',
    location: 'Inde',
    year: '2025',
    category: 'portraits',
  },
  {
    id: 'g-28',
    src: '/assets/aistudio/MON_f065af87.jpeg',
    title: 'Sérénité entre deux cours',
    caption: 'Portrait assis en chemise denim entre préparation de séquences et corrections.',
    location: 'Inde',
    year: '2025',
    category: 'portraits',
  },
  {
    id: 'g-29',
    src: '/assets/aistudio/PP_73a78cdd.jpeg',
    title: 'Allure classique en intérieur',
    caption: 'Portrait en pied dans une résidence calme avant une journée de conférences.',
    location: 'Inde',
    year: '2025',
    category: 'portraits',
  },
  {
    id: 'g-30',
    src: '/assets/aistudio/LM_2bfae501.jpeg',
    title: 'Concentration avant l’atelier',
    caption: 'Portrait rapproché en chemise bordeaux dans l’espace d’activités créatives.',
    location: 'Inde',
    year: '2025',
    category: 'portraits',
  },
  {
    id: 'g-31',
    src: '/assets/aistudio/X_99190a08.jpeg',
    title: 'À l’espace multimédia',
    caption: 'Préparation des supports numériques de français au laboratoire informatique.',
    location: 'Inde',
    year: '2025',
    category: 'portraits',
  },
  {
    id: 'g-32',
    src: '/assets/aistudio/LL_c53ebf74.jpeg',
    title: 'Instantané en casquette verte',
    caption: 'Pause rapide dans le bureau multimédia entre deux modules pédagogiques.',
    location: 'Inde',
    year: '2025',
    category: 'portraits',
  },
  {
    id: 'g-33',
    src: '/assets/aistudio/UH_a5bde2af.jpeg',
    title: 'Prêt pour le terrain',
    caption: 'Sac à dos sur les épaules et casquette bleue avant de partir sur la route.',
    location: 'Inde',
    year: '2024',
    category: 'voyages',
  },
];
