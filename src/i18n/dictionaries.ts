export type SupportedLocale = 'en' | 'es';

interface Dictionaries {
  [locale: string]: Record<string, string>;
}

export const dictionaries: Dictionaries = {
  en: {
    'nav.about': 'About',
    'nav.works': 'Works',
    'nav.contact': 'Contact',
    'action.toggle-language': 'ES',
    'action.toggle-language-full': 'Español',

    'home.hero.title': 'SOFTWARE ENGINEER BLENDING INNOVATION, PRECISION, CREATIVITY, AND KICKBOXING DISCIPLINE',

    'about.hero.title': "I'M A DEDICATED SOFTWARE ENGINEER CRAFTING INNOVATIVE SOLUTIONS — WHILE MASTERING DISCIPLINE, POWER, AND STRATEGY AS A COMPETITIVE KICKBOXING FIGHTER.",
    'about.section.label': '(About)',
    'about.paragraph.1': "I'm Janiel Franz, a Peruvian software engineer with expertise in creating robust, scalable solutions using Domain-Driven Design (DDD) and modern development practices",
    'about.paragraph.2': "I'm currently doing an internship at Luz del Sur, , while also working with my team at VirtuoLabs to create impactful solutions for businesses",

    'contact.hero.title': 'Open to new opportunities — ready to build something exceptional for you.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.location': 'Based In Lima, Perú — Working Worldwide',
    'contact.socials.label': '(Socials)',

    'works.main.details': 'Web App',
    'works.main.tech': 'Tech',
  },
  es: {
    'nav.about': 'Acerca',
    'nav.works': 'Proyectos',
    'nav.contact': 'Contacto',
    'action.toggle-language': 'EN',
    'action.toggle-language-full': 'English',

    'home.hero.title': 'INGENIERO DE SOFTWARE QUE COMBINA INNOVACIÓN, PRECISIÓN, CREATIVIDAD Y DISCIPLINA DEL KICKBOXING',

    'about.hero.title': 'SOY UN INGENIERO DE SOFTWARE DEDICADO A CREAR SOLUCIONES INNOVADORAS — MIENTRAS DESARROLLO DISCIPLINA, FUERZA Y ESTRATEGIA COMO LUCHADOR COMPETITIVO DE KICKBOXING.',
    'about.section.label': '(Acerca)',
    'about.paragraph.1': 'Soy Janiel Franz, un ingeniero de software peruano especializado en crear soluciones robustas y escalables usando Domain-Driven Design (DDD) y prácticas modernas de desarrollo',
    'about.paragraph.2': 'Actualmente realizo una pasantía en Luz del Sur, mientras trabajo con mi equipo en VirtuoLabs para crear soluciones de alto impacto para negocios',

    'contact.hero.title': 'Abierto a nuevas oportunidades — listo para construir algo excepcional para ti.',
    'contact.phone': 'Teléfono',
    'contact.email': 'Correo',
    'contact.location': 'Con base en Lima, Perú — Trabajando Globalmente',
    'contact.socials.label': '(Redes Sociales)',

    'works.main.details': 'Aplicación Web',
    'works.main.tech': 'Tecnologías',
  }
};

