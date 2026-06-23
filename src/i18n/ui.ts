// Zentrale i18n-Infrastruktur: Sprachen, Wörterbücher und Helfer.
// Schrittweiser Rollout – Schlüssel werden nach Bedarf ergänzt.

export const languages = {
  de: 'Deutsch',
  en: 'English',
} as const;

export const defaultLang: Lang = 'de';

export type Lang = keyof typeof languages;

// Wörterbücher. Fehlt ein Schlüssel in der Zielsprache, greift Deutsch.
export const ui = {
  de: {
    // Globale Elemente
    'skip.toContent': 'Zum Inhalt springen',
    'nav.start': 'Start',
    'nav.coaching': 'Coaching',
    'nav.about': 'Über mich',
    'nav.prices': 'Preise',
    'nav.companies': 'Für Unternehmen',
    'nav.cta': 'Kontakt & Buchen',
    'lang.label': 'Sprache wählen',

    'footer.tagline': 'Coach & Strategieberaterin für nachhaltige Zielerreichung.',
    'footer.pages': 'Seiten',
    'footer.legal': 'Rechtliches',
    'footer.about': 'Über mich',
    'footer.coaching': 'Coaching',
    'footer.contact': 'Kontakt & Buchung',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.contactShort': 'Kontakt',
    'footer.note': 'Coaching, keine Psychotherapie/Heilbehandlung.',
    'footer.copy': 'EVOQUE yourself · Coaching & Strategie',
    'footer.credit': 'In Kooperation mit VeMo IT & Design',

    // Seite "Für Unternehmen"
    'company.meta.title': 'Für Unternehmen',
    'company.meta.description':
      'Coaching und Begleitung für Teams und Mitarbeitende – für mehr Klarheit, Fokus und Leistungsfähigkeit im Arbeitsalltag.',
    'company.hero.eyebrow': 'Für Unternehmen',
    'company.hero.title': 'Psychologisch fundierte Begleitung für Ihre Mitarbeitenden.',
    'company.hero.text':
      'Gefestigte, fokussierte Mitarbeitende sind das Fundament jedes Unternehmens. Evoque begleitet Teams und Einzelpersonen dabei, Belastungen zu lösen, Klarheit zu gewinnen und nachhaltig leistungsfähig zu bleiben.',
    'company.hero.cta': 'Gespräch vereinbaren',
    'company.hero.ctaSecondary': 'Leistungen ansehen',

    'company.pillars.1.title': 'Weniger Belastung',
    'company.pillars.1.text':
      'Frühzeitige Begleitung bei Stress und Überforderung – bevor daraus Ausfälle werden.',
    'company.pillars.2.title': 'Mehr Fokus',
    'company.pillars.2.text':
      'Klarheit und Selbstorganisation, die sich unmittelbar in der täglichen Arbeit zeigen.',
    'company.pillars.3.title': 'Stärkere Bindung',
    'company.pillars.3.text':
      'Echte Förderung als Benefit, der Wertschätzung zeigt und Mitarbeitende langfristig hält.',

    'company.offer.eyebrow': 'Leistungen',
    'company.offer.title': 'Wie Evoque mit Unternehmen arbeitet',
    'company.offer.lead': 'Passgenau auf Ihre Situation – vom Einzelcoaching bis zum Team-Format.',
    'company.offer.1.title': 'Einzelcoaching für Mitarbeitende',
    'company.offer.1.text':
      'Vertrauliche Begleitung bei Themen wie Stress, Selbstorganisation oder Auftrittssicherheit – als Benefit für Ihre Mitarbeitenden.',
    'company.offer.2.title': 'Team-Workshops',
    'company.offer.2.text':
      'Praxisnahe Formate zu Stresskompetenz, Fokus und Zusammenarbeit – abgestimmt auf Ihr Team.',
    'company.offer.3.title': 'Begleitung in Veränderung',
    'company.offer.3.text':
      'Stabile Begleitung von Teams in Umbruch- und Wachstumsphasen, damit Veränderung gelingt.',

    'company.approach.eyebrow': 'Vorgehen',
    'company.approach.title': 'Klar, vertraulich, wirksam',
    'company.approach.1.title': 'Bedarf klären',
    'company.approach.1.text':
      'Wir analysieren Ausgangslage und Ziele gemeinsam – unverbindlich und vertraulich.',
    'company.approach.2.title': 'Format gestalten',
    'company.approach.2.text':
      'Einzelcoaching, Workshop oder Begleitung – passgenau auf Ihr Unternehmen zugeschnitten.',
    'company.approach.3.title': 'Umsetzen & begleiten',
    'company.approach.3.text':
      'Wir arbeiten an der Ursache und bleiben an der Seite Ihres Teams – bis Wirkung sichtbar ist.',

    'company.cta.eyebrow': 'Zusammenarbeit',
    'company.cta.title': 'Sprechen wir über Ihr Team.',
    'company.cta.text':
      'In einem unverbindlichen Erstgespräch klären wir, wie eine Zusammenarbeit aussehen kann.',
    'company.cta.button': 'Erstgespräch anfragen',

    // Startseite
    'home.meta.title': 'Start',
    'home.meta.description':
      'Evoque – Yourself: Coaching für Menschen, die feststecken. Erreiche dein Ziel trotz Hürden – mit einer Begleiterin als Anker.',
    'home.hero.cta': 'Kennenlerngespräch buchen',
    'home.hero.secondary': 'So läuft das Coaching',
    'home.approach.eyebrow': 'Der Ansatz',
    'home.approach.title': 'Veränderung beginnt mit Verstehen',
    'home.approach.text':
      'Woher kommt das Problem? Wir schauen gemeinsam auf den Ursprung und gestalten Schritt für Schritt einen neuen Weg.',
    'home.approach.more': 'Mehr über den Ansatz',
    'home.approach.s1.title': 'Vergangenheit verstehen',
    'home.approach.s1.text': 'Auf was basiert das Problem? Wir finden den Ursprung.',
    'home.approach.s2.title': 'Im Hier und Jetzt verändern',
    'home.approach.s2.text': 'Aus dem Verstehen wird konkrete Veränderung.',
    'home.approach.s3.title': 'Anker & Begleiterin',
    'home.approach.s3.text': 'Ich bleibe an deiner Seite, bis du dein Ziel erreichst.',
    'home.topics.eyebrow': 'Themen & Anliegen',
    'home.topics.title': 'Wobei Evoque dich begleitet',
    'home.topics.lead': 'Typische Anliegen – und Raum für dein ganz persönliches Thema.',
    'home.topics.c1.title': 'Prüfungsangst',
    'home.topics.c1.text': 'Wieder ruhig und klar in Prüfungssituationen gehen.',
    'home.topics.c2.title': 'Prokrastination',
    'home.topics.c2.text': 'Ins Tun kommen, statt Aufgaben immer weiter aufzuschieben.',
    'home.topics.c3.title': 'Langjährige Themen',
    'home.topics.c3.text':
      'Themen wie Abnehmen, die dich schon lange begleiten, nachhaltig angehen.',
    'home.topics.more': 'Alle Themen & Pakete ansehen',
    'home.testi.badge': 'Verifizierte Stimmen',
    'home.testi.badgeTitle': 'Alle Stimmen stammen von echten Begleiteten – Echtheit von Evoque geprüft.',
    'home.testi.eyebrow': 'Erfahrungen',
    'home.testi.title': 'Was Begleitete erleben',
    'home.testi.note':
      'Echte Stimmen von Begleiteten. Aus Respekt vor ihrer Privatsphäre zeigen wir Namen anonymisiert – die Echtheit ist von Evoque geprüft.',
    'home.testi.t1.context': 'Thema: Selbstvertrauen',
    'home.testi.t2.context': 'Thema: Abnehmen',
    'home.testi.t3.context': 'Begleitung 2025',
    'home.testi.placeholder': '[PLATZHALTER: authentische Stimme einer begleiteten Person.]',
    'home.cta.eyebrow': 'Bereit für den ersten Schritt?',
    'home.cta.title': 'Lerne mich in einem kostenlosen Gespräch kennen.',
    'home.cta.text':
      '30 Minuten, unverbindlich. Wir schauen, ob es passt und wie ich dich begleiten kann.',
    'home.cta.button': 'Kennenlerngespräch buchen',
  },
  en: {
    'skip.toContent': 'Skip to content',
    'nav.start': 'Home',
    'nav.coaching': 'Coaching',
    'nav.about': 'About',
    'nav.prices': 'Pricing',
    'nav.companies': 'For Companies',
    'nav.cta': 'Contact & Booking',
    'lang.label': 'Choose language',

    'footer.tagline': 'Coach & strategy consultant for lasting goal achievement.',
    'footer.pages': 'Pages',
    'footer.legal': 'Legal',
    'footer.about': 'About',
    'footer.coaching': 'Coaching',
    'footer.contact': 'Contact & Booking',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy',
    'footer.contactShort': 'Contact',
    'footer.note': 'Coaching, not psychotherapy or medical treatment.',
    'footer.copy': 'EVOQUE yourself · Coaching & Strategy',
    'footer.credit': 'In cooperation with VeMo IT & Design',

    'company.meta.title': 'For Companies',
    'company.meta.description':
      'Coaching and guidance for teams and employees – for more clarity, focus and performance at work.',
    'company.hero.eyebrow': 'For Companies',
    'company.hero.title': 'Psychologically grounded support for your employees.',
    'company.hero.text':
      'Grounded, focused employees are the foundation of every company. Evoque supports teams and individuals in resolving strain, gaining clarity and staying capable in the long term.',
    'company.hero.cta': 'Arrange a call',
    'company.hero.ctaSecondary': 'See services',

    'company.pillars.1.title': 'Less strain',
    'company.pillars.1.text':
      'Early support with stress and overload – before it turns into absence.',
    'company.pillars.2.title': 'More focus',
    'company.pillars.2.text':
      'Clarity and self-organisation that show directly in day-to-day work.',
    'company.pillars.3.title': 'Stronger retention',
    'company.pillars.3.text':
      'Genuine development as a benefit that shows appreciation and keeps people long term.',

    'company.offer.eyebrow': 'Services',
    'company.offer.title': 'How Evoque works with companies',
    'company.offer.lead': 'Tailored to your situation – from individual coaching to team formats.',
    'company.offer.1.title': 'Individual coaching for employees',
    'company.offer.1.text':
      'Confidential support for topics such as stress, self-organisation or confidence – as a benefit for your employees.',
    'company.offer.2.title': 'Team workshops',
    'company.offer.2.text':
      'Hands-on formats on stress resilience, focus and collaboration – tailored to your team.',
    'company.offer.3.title': 'Support through change',
    'company.offer.3.text':
      'Stable support for teams in times of change and growth, so transformation succeeds.',

    'company.approach.eyebrow': 'Approach',
    'company.approach.title': 'Clear, confidential, effective',
    'company.approach.1.title': 'Clarify needs',
    'company.approach.1.text':
      'We analyse your situation and goals together – without obligation and in confidence.',
    'company.approach.2.title': 'Design the format',
    'company.approach.2.text':
      'Individual coaching, workshop or ongoing support – tailored precisely to your company.',
    'company.approach.3.title': 'Implement & support',
    'company.approach.3.text':
      'We work at the root and stay by your team’s side – until impact becomes visible.',

    'company.cta.eyebrow': 'Collaboration',
    'company.cta.title': 'Let’s talk about your team.',
    'company.cta.text':
      'In a no-obligation first call we clarify what a collaboration could look like.',
    'company.cta.button': 'Request a first call',

    // Home
    'home.meta.title': 'Home',
    'home.meta.description':
      'Evoque – Yourself: coaching for people who feel stuck. Reach your goal despite obstacles – with a guide as your anchor.',
    'home.hero.cta': 'Book an intro call',
    'home.hero.secondary': 'How coaching works',
    'home.approach.eyebrow': 'The approach',
    'home.approach.title': 'Change begins with understanding',
    'home.approach.text':
      'Where does the problem come from? Together we look at its origin and shape a new path, step by step.',
    'home.approach.more': 'More about the approach',
    'home.approach.s1.title': 'Understand the past',
    'home.approach.s1.text': 'What is the problem based on? We find its origin.',
    'home.approach.s2.title': 'Change in the here and now',
    'home.approach.s2.text': 'Understanding turns into concrete change.',
    'home.approach.s3.title': 'Anchor & guide',
    'home.approach.s3.text': 'I stay by your side until you reach your goal.',
    'home.topics.eyebrow': 'Topics & concerns',
    'home.topics.title': 'Where Evoque supports you',
    'home.topics.lead': 'Typical concerns – and room for your very own topic.',
    'home.topics.c1.title': 'Exam anxiety',
    'home.topics.c1.text': 'Stay calm and clear in exam situations again.',
    'home.topics.c2.title': 'Procrastination',
    'home.topics.c2.text': 'Get into action instead of putting tasks off again and again.',
    'home.topics.c3.title': 'Long-standing issues',
    'home.topics.c3.text':
      'Tackle issues like weight loss that have been with you for years – sustainably.',
    'home.topics.more': 'See all topics & packages',
    'home.testi.badge': 'Verified voices',
    'home.testi.badgeTitle': 'All voices come from real clients – authenticity verified by Evoque.',
    'home.testi.eyebrow': 'Experiences',
    'home.testi.title': 'What clients experience',
    'home.testi.note':
      'Real voices from clients. Out of respect for their privacy we show names anonymised – authenticity is verified by Evoque.',
    'home.testi.t1.context': 'Topic: Self-confidence',
    'home.testi.t2.context': 'Topic: Weight loss',
    'home.testi.t3.context': 'Guidance 2025',
    'home.testi.placeholder': '[PLACEHOLDER: authentic voice of a guided person.]',
    'home.cta.eyebrow': 'Ready for the first step?',
    'home.cta.title': 'Get to know me in a free call.',
    'home.cta.text':
      '30 minutes, no obligation. We see whether it fits and how I can support you.',
    'home.cta.button': 'Book an intro call',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  return seg === 'en' ? 'en' : 'de';
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['de']): string {
    const dict = ui[lang] as Record<string, string>;
    const fallback = ui[defaultLang] as Record<string, string>;
    return dict[key] ?? fallback[key] ?? (key as string);
  };
}

// Gibt denselben Seitenpfad in der Zielsprache zurück (/... <-> /en/...).
export function localizePath(pathname: string, target: Lang): string {
  const base = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  if (target === 'en') return base === '/' ? '/en/' : '/en' + base;
  return base;
}
