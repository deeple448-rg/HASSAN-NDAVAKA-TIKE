import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, Globe, Mail, MapPin, Phone, Send } from 'lucide-react';
import { PROFILE } from '../data/hassanData';

interface SentMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  sentAt: string;
}

const STORAGE_KEY = 'hassan_ndavaka_messages_v1';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Collaboration pédagogique');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submittedRecord, setSubmittedRecord] = useState<SentMessage | null>(null);
  const [history, setHistory] = useState<SentMessage[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as SentMessage[];
        if (Array.isArray(parsed)) setHistory(parsed);
      }
    } catch {
      // Ignore storage read errors in restricted frames
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMsg = message.trim();

    if (trimmedName.length < 2) {
      setError('Veuillez saisir votre nom complet.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Veuillez saisir une adresse e-mail valide.');
      return;
    }
    if (trimmedMsg.length < 10) {
      setError('Votre message doit contenir au moins 10 caractères.');
      return;
    }

    const entry: SentMessage = {
      id: `${Date.now()}`,
      name: trimmedName,
      email: trimmedEmail,
      subject,
      message: trimmedMsg,
      sentAt: new Date().toLocaleString('fr-FR', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
    };

    const nextHistory = [entry, ...history].slice(0, 5);
    setHistory(nextHistory);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextHistory));
    } catch {
      // Ignore storage quota errors
    }

    setSubmittedRecord(entry);
    setName('');
    setEmail('');
    setMessage('');
  };

  const buildMailtoHref = (record: SentMessage) => {
    const mailSubject = encodeURIComponent(`[Blog] ${record.subject} — ${record.name}`);
    const mailBody = encodeURIComponent(
      `Bonjour Hassan,\n\n${record.message}\n\nCordialement,\n${record.name} (${record.email})`
    );
    return `mailto:${PROFILE.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Direct Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium text-[#1D4ED8] mb-3">
                05. Échanger &amp; Collaborer
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#111315] mb-5">
                Restons en contact à travers le monde
              </h2>
              <p className="text-base text-[#3F444E] leading-relaxed mb-8">
                Que ce soit pour un projet éducatif international, une préparation au TEF Canada,
                une collaboration éditoriale ou simplement pour échanger autour de nos parcours et
                voyages, je vous réponds avec plaisir.
              </p>

              <dl className="space-y-5 border-t border-[#E4E4E7] pt-6">
                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-[#1D4ED8] mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <dt className="text-xs text-[#525866]">Adresse e-mail</dt>
                    <dd className="text-sm font-semibold text-[#111315]">
                      <a
                        href={`mailto:${PROFILE.email}`}
                        className="hover:text-[#1D4ED8] transition-colors"
                      >
                        {PROFILE.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#1D4ED8] mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <dt className="text-xs text-[#525866]">Téléphone / WhatsApp</dt>
                    <dd className="text-sm font-semibold text-[#111315] font-mono tabular-nums">
                      <a
                        href="tel:+918461896635"
                        className="hover:text-[#1D4ED8] transition-colors"
                      >
                        {PROFILE.phone}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-[#1D4ED8] mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <dt className="text-xs text-[#525866]">Résidence &amp; Origines</dt>
                    <dd className="text-sm font-semibold text-[#111315]">
                      {PROFILE.currentLocation}
                    </dd>
                    <dd className="text-xs text-[#525866] mt-0.5">
                      Originaire de {PROFILE.birthPlace}, {PROFILE.country}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Globe className="w-4 h-4 text-[#1D4ED8] mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <dt className="text-xs text-[#525866]">Plateforme TEF Canada</dt>
                    <dd className="text-sm font-semibold text-[#111315]">
                      <a
                        href={PROFILE.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#1D4ED8] transition-colors"
                      >
                        tefavecbasa.com
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAFAFA] border border-[#E4E4E7]">
              {submittedRecord && (
                <div
                  role="status"
                  className="mb-6 p-5 rounded-xl bg-white border border-[#E4E4E7]"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#111315]">
                        Message enregistré — Merci {submittedRecord.name}
                      </p>
                      <p className="text-xs text-[#525866] mt-1 leading-relaxed">
                        Votre message concernant « {submittedRecord.subject} » a bien été préparé le{' '}
                        {submittedRecord.sentAt}. Vous pouvez également l’expédier directement via
                        votre messagerie.
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <a
                          href={buildMailtoHref(submittedRecord)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                          Envoyer via mon client e-mail
                        </a>
                        <button
                          type="button"
                          onClick={() => setSubmittedRecord(null)}
                          className="text-xs font-medium text-[#525866] hover:text-[#111315] px-2 py-2"
                        >
                          Rédiger un autre message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-[#111315] mb-2"
                    >
                      Nom complet
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Votre nom et prénom"
                      className="w-full px-4 py-3 text-sm bg-white border border-[#E4E4E7] rounded-lg text-[#111315] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[#111315] mb-2"
                    >
                      Adresse e-mail
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vous@exemple.com"
                      className="w-full px-4 py-3 text-sm bg-white border border-[#E4E4E7] rounded-lg text-[#111315] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold text-[#111315] mb-2"
                  >
                    Objet de l’échange
                  </label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-white border border-[#E4E4E7] rounded-lg text-[#111315] focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 transition-colors"
                  >
                    <option value="Collaboration pédagogique">
                      Collaboration pédagogique (IGCSE / Français)
                    </option>
                    <option value="Préparation TEF Canada">
                      Préparation TEF Canada &amp; Tutorat en ligne
                    </option>
                    <option value="Récits de voyage & Médias">
                      Récits de voyage, journalisme &amp; médias
                    </option>
                    <option value="Prise de contact générale">
                      Prise de contact générale
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-[#111315] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Partagez votre projet, vos questions ou votre message..."
                    className="w-full px-4 py-3 text-sm bg-white border border-[#E4E4E7] rounded-lg text-[#111315] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 transition-colors resize-y"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-xs font-medium text-[#B91C1C]">
                    {error}
                  </p>
                )}

                <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                  <p className="text-xs text-[#525866]">
                    Réponse habituelle sous 24 à 48 heures.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors duration-150 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2"
                  >
                    Envoyer le message
                    <Send className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </form>

              {history.length > 0 && (
                <div className="mt-8 pt-6 border-t border-[#E4E4E7]">
                  <p className="text-xs font-semibold text-[#111315] mb-3">
                    Vos derniers messages envoyés depuis cet appareil
                  </p>
                  <ul className="space-y-2.5">
                    {history.map((item) => (
                      <li
                        key={item.id}
                        className="p-3.5 rounded-lg bg-white border border-[#E4E4E7] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-[#111315] truncate">
                            {item.subject}
                          </p>
                          <p className="text-xs text-[#525866] truncate mt-0.5">
                            {item.message}
                          </p>
                        </div>
                        <span className="text-[11px] font-mono text-[#525866] whitespace-nowrap shrink-0 tabular-nums">
                          {item.sentAt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
