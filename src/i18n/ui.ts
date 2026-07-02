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
      'Fokussierte, zielorientierte und ausgeglichene Mitarbeitende sind das Fundament eines funktionierenden Unternehmens. EVOQUE begleitet Teams und Einzelpersonen dabei, Belastungen zu lösen, Klarheit zu gewinnen und nachhaltig leistungsfähig zu bleiben.',
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
    'company.offer.title': 'Wie EVOQUE mit Unternehmen arbeitet',
    'company.offer.lead': 'Passgenau für Ihre Situation – vom Einzelcoaching bis zum Team-Format.',
    'company.offer.1.title': 'Einzelcoaching für Mitarbeitende',
    'company.offer.1.text':
      'Vertrauliche Begleitung bei Themen wie Stress, Selbstorganisation oder sicherem Auftreten – um die Gesundheit und Leistung Ihrer Mitarbeitenden zu verbessern.',
    'company.offer.2.title': 'Führungskräfte-Coaching',
    'company.offer.2.text':
      'Bei starken Fluktuationen im Team, individuellen Herausforderungen oder den Ansprüchen an eine Führungskraft kann ein Coaching maßgebende Erfolge erzielen. Wir verbessern systematisch Ihre Führungskompetenzen, damit die Leistung Ihres Teams durch Sie optimal gefördert wird.',
    'company.offer.3.title': 'Team-Workshops',
    'company.offer.3.text':
      'Individuell abgestimmte Workshops für Teams zu Stresskompetenz, Fokus, Zusammenarbeit oder Gesundheitsmanagement. Im Mittelpunkt steht die Stärkung von Teamdynamik, Zusammenarbeit und Wohlbefinden.',
    'company.offer.4.title': 'Begleitung in Veränderungen',
    'company.offer.4.text':
      'Stabile Begleitung von Teams in Umbruch- oder Wachstumsphasen, damit Veränderung wirksam und nachhaltig gelingen kann.',

    'company.approach.eyebrow': 'Vorgehen',
    'company.approach.title': 'Klar, vertraulich, wirksam',
    'company.approach.1.title': 'Bedarf klären',
    'company.approach.1.text':
      'Wir analysieren Ausgangslage und Ziele gemeinsam unter Betrachtung Ihres Teams und Unternehmens.',
    'company.approach.2.title': 'Format gestalten',
    'company.approach.2.text':
      'Einzelcoaching, Workshop oder Begleitung: Wir schauen, was zu Ihrem Team und Ihren Bedürfnissen am besten passt.',
    'company.approach.3.title': 'Umsetzung & Begleitung',
    'company.approach.3.text':
      'Wir arbeiten an der Ursache und behandeln die Problemdynamiken Ihres Teams bis zur sichtbaren Wirkung und Entfaltung der Erfolge.',

    'company.cta.eyebrow': 'Zusammenarbeit',
    'company.cta.title': 'Sprechen wir über Ihr Team.',
    'company.cta.text':
      'In einem unverbindlichen Erstgespräch klären wir, wie eine Zusammenarbeit aussehen kann.',
    'company.cta.button': 'Erstgespräch anfragen',

    // Startseite
    'home.meta.title': 'Start',
    'home.meta.description':
      'EVOQUE – Yourself: Coaching für Menschen, die feststecken. Erreiche Dein Ziel trotz Hürden – mit einer Begleiterin als Anker.',
    'home.hero.cta': 'Kennenlerngespräch buchen',
    'home.hero.secondary': 'So läuft das Coaching',
    'home.approach.eyebrow': 'Der Ansatz',
    'home.approach.title': 'Veränderung beginnt mit dem Verstehen',
    'home.approach.text':
      'Woher kommt das Problem? Wir schauen gemeinsam auf den Ursprung und gestalten Schritt für Schritt einen neuen Weg.',
    'home.approach.more': 'Mehr über den Ansatz',
    'home.approach.s1.title': 'Vergangenheit verstehen',
    'home.approach.s1.text': 'Woher kommt das Verhalten? Wir finden den Ursprung.',
    'home.approach.s2.title': 'Verhaltensänderung im Hier & Jetzt',
    'home.approach.s2.text': 'Schritt für Schritt verändern wir die bisherigen Muster in positive Verhaltensweisen.',
    'home.approach.s3.title': 'Nachhaltige Zielerreichung',
    'home.approach.s3.text': 'Ich begleite Dich auf Deinem Weg, bis Du Dein Ziel erreicht hast und wir eine stabile Verhaltensänderung erzeugt haben.',
    'home.topics.eyebrow': 'Themen & Anliegen',
    'home.topics.title': 'Coaching durch EVOQUE',
    'home.topics.lead': 'Typische Anliegen und Raum für Dein ganz persönliches Anliegen.',
    'home.topics.c1.title': 'Prüfungsangst',
    'home.topics.c1.text': 'Wieder ruhig und fokussiert in Prüfungssituationen gehen.',
    'home.topics.c2.title': 'Prokrastination',
    'home.topics.c2.text': 'Wieder handlungsfähig werden, statt Aufgaben immer weiter aufzuschieben.',
    'home.topics.c3.title': 'Langjährige Themen',
    'home.topics.c3.text':
      'Themen wie Gewichtsreduktion, die Dich möglicherweise schon lange belasten, nachhaltig angehen.',
    'home.topics.c4.title': 'Beziehungen und Partnerschaften',
    'home.topics.c4.text': 'Komplexe Beziehungsdynamiken wieder mit Leichtigkeit füllen.',
    'home.topics.c5.title': 'Entscheidungen treffen',
    'home.topics.c5.text': 'Klarheit schaffen, Ziele konkretisieren und Motivation erzeugen.',
    'home.topics.more': 'Alle Themen ansehen',
    'home.testi.badge': 'Verifizierte Stimmen',
    'home.testi.badgeTitle': 'Alle Stimmen stammen von echten Begleiteten – Echtheit von EVOQUE geprüft.',
    'home.testi.eyebrow': 'Erfahrungen',
    'home.testi.title': 'Was Coachees zurückmelden',
    'home.testi.note':
      'Aus Datenschutzgründen sind die Bewertungen in anonymisierter Form dargestellt. Die Rückmeldungen sind verifiziert und mit ausdrücklicher Zustimmung der Klienten veröffentlicht worden.',
    'home.testi.t1.author': 'Kundin, 29',
    'home.testi.t1.topic': 'Thema: Selbstvertrauen',
    'home.testi.t1.period': 'Begleitung: 2025',
    'home.testi.t2.author': 'Kundin, 34',
    'home.testi.t2.topic': 'Thema: Abnehmen',
    'home.testi.t2.period': 'Begleitung: 2026',
    'home.testi.t3.author': 'Kunde, 41',
    'home.testi.t3.topic': 'Thema: Prokrastination',
    'home.testi.t3.period': 'Begleitung: 2025',
    'home.testi.placeholder': '[PLATZHALTER: authentische Stimme einer begleiteten Person.]',
    'home.cta.eyebrow': 'Bereit für Deinen ersten Schritt?',
    'home.cta.title': 'Lerne mich in einem kostenlosen Erstgespräch kennen.',
    'home.cta.text':
      '30 Minuten, unverbindlich. Wir schauen, ob es passt und wie ich Dich begleiten kann.',
    'home.cta.button': 'Kennenlerngespräch buchen',
    'home.cta.faqPrompt': 'Noch unschlüssig?',
    'home.cta.faqText': 'Schau in die häufig gestellten Fragen und finde Deine Antwort.',
    'home.cta.faqLink': 'Zu den häufigen Fragen',
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
      'Focused, goal-oriented and balanced employees are the foundation of a functioning company. EVOQUE supports teams and individuals in resolving strain, gaining clarity and staying capable in the long term.',
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
    'company.offer.title': 'How EVOQUE works with companies',
    'company.offer.lead': 'Tailored to your situation – from individual coaching to team formats.',
    'company.offer.1.title': 'Individual coaching for employees',
    'company.offer.1.text':
      'Confidential support for topics such as stress, self-organisation or a confident presence – to improve the health and performance of your employees.',
    'company.offer.2.title': 'Leadership coaching',
    'company.offer.2.text':
      'Whether high turnover in your team, individual challenges or the demands of a leadership role – coaching can achieve decisive results. We systematically strengthen your leadership skills, so your team performs at its best through you.',
    'company.offer.3.title': 'Team workshops',
    'company.offer.3.text':
      'Individually tailored workshops for teams on stress resilience, focus, collaboration or health management. The focus is on strengthening team dynamics, collaboration and well-being.',
    'company.offer.4.title': 'Support through change',
    'company.offer.4.text':
      'Stable support for teams in times of upheaval or growth, so that change succeeds effectively and sustainably.',

    'company.approach.eyebrow': 'Approach',
    'company.approach.title': 'Clear, confidential, effective',
    'company.approach.1.title': 'Clarify needs',
    'company.approach.1.text':
      'We analyse your starting point and goals together – taking your team and company into account.',
    'company.approach.2.title': 'Design the format',
    'company.approach.2.text':
      'Individual coaching, workshop or ongoing support: we look at what best fits your team and your needs.',
    'company.approach.3.title': 'Implementation & support',
    'company.approach.3.text':
      'We work at the root and address your team’s problem dynamics until impact becomes visible and success unfolds.',

    'company.cta.eyebrow': 'Collaboration',
    'company.cta.title': 'Let’s talk about your team.',
    'company.cta.text':
      'In a no-obligation first call we clarify what a collaboration could look like.',
    'company.cta.button': 'Request a first call',

    // Home
    'home.meta.title': 'Home',
    'home.meta.description':
      'EVOQUE – Yourself: coaching for people who feel stuck. Reach your goal despite obstacles – with a guide as your anchor.',
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
    'home.topics.title': 'Where EVOQUE supports you',
    'home.topics.lead': 'Typical concerns – and room for your very own topic.',
    'home.topics.c1.title': 'Exam anxiety',
    'home.topics.c1.text': 'Stay calm and clear in exam situations again.',
    'home.topics.c2.title': 'Procrastination',
    'home.topics.c2.text': 'Get into action instead of putting tasks off again and again.',
    'home.topics.c3.title': 'Long-standing issues',
    'home.topics.c3.text':
      'Tackle issues like weight loss that have been with you for years – sustainably.',
    'home.topics.c4.title': 'Relationships & partnerships',
    'home.topics.c4.text': 'Fill complex relationship dynamics with lightness again.',
    'home.topics.c5.title': 'Making decisions',
    'home.topics.c5.text': 'Create clarity, define goals and build motivation.',
    'home.topics.more': 'See all topics',
    'home.testi.badge': 'Verified voices',
    'home.testi.badgeTitle': 'All voices come from real clients – authenticity verified by EVOQUE.',
    'home.testi.eyebrow': 'Experiences',
    'home.testi.title': 'What coachees report back',
    'home.testi.note':
      'For data-protection reasons, the reviews are shown in anonymised form. The feedback is verified and published with the explicit consent of the clients.',
    'home.testi.t1.author': 'Client, 29',
    'home.testi.t1.topic': 'Topic: Self-confidence',
    'home.testi.t1.period': 'Guidance: 2025',
    'home.testi.t2.author': 'Client, 34',
    'home.testi.t2.topic': 'Topic: Weight loss',
    'home.testi.t2.period': 'Guidance: 2026',
    'home.testi.t3.author': 'Client, 41',
    'home.testi.t3.topic': 'Topic: Procrastination',
    'home.testi.t3.period': 'Guidance: 2025',
    'home.testi.placeholder': '[PLACEHOLDER: authentic voice of a guided person.]',
    'home.cta.eyebrow': 'Ready for your first step?',
    'home.cta.title': 'Get to know me in a free initial call.',
    'home.cta.text':
      '30 minutes, no obligation. We see whether it fits and how I can support you.',
    'home.cta.button': 'Book an intro call',
    'home.cta.faqPrompt': 'Still unsure?',
    'home.cta.faqText': 'Take a look at the frequently asked questions and find your answer.',
    'home.cta.faqLink': 'Go to the FAQ',
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
