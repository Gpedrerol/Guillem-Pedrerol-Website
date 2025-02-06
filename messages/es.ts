export const es = {
  navigation: {
    services: 'Servicios',
    aiConsulting: 'Consultoría IA',
    training: 'Formación',
    about: 'Sobre Mí',
    blog: 'Blog',
    contact: 'Contacto',
    experience: 'Experiencia',
    projects: 'Proyectos',
    testimonials: 'Testimonios',
  },
  hero: {
    title: "Soluciones de IA para el Crecimiento Empresarial",
    titleHighlight: "Soluciones Prácticas de IA",
    subtitle: "Ayudamos a las empresas a aprovechar la inteligencia artificial para transformar su productividad a través de la implementación práctica y la formación.",
    cta: "Empezar",
    secondaryCta: "Ver Servicios",
    badges: {
      available: 'Disponible para Proyectos',
    }
  },
  services: {
    sectionTitle: "QUÉ HACEMOS",
    title: "Transforma tu Empresa",
    subtitle: "Consultoría estratégica y programas de formación integral para ayudar a tu organización a prosperar en la era de la IA.",
    consultation: {
      title: 'Consultoría IA',
      description: 'Implementación estratégica de IA adaptada a las necesidades de tu empresa',
      features: [
        'Desarrollo de chatbots personalizados',
        'Automatización de procesos',
        'Planificación estratégica de IA',
      ],
      benefits: {
        title: 'Beneficios Clave',
        items: [
          'Desarrollo de chatbots personalizados',
          'Automatización de procesos',
          'Planificación estratégica de IA'
        ]
      },
      approach: {
        title: 'Nuestro Enfoque',
        items: [
          'Evaluación estratégica de oportunidades de IA',
          'Plan de implementación personalizado',
          'Soluciones específicas por industria'
        ]
      },
      cta: {
        explore: 'Explorar Consultoría IA',
        schedule: 'Programar Consulta'
      }
    },
    training: {
      title: 'Formación Corporativa',
      description: 'Programas completos de formación y talleres de IA',
      features: {
        title: 'Características del Programa',
        items: [
          'Implementación de ChatGPT',
          'Programas de formación personalizados',
          'Talleres prácticos'
        ]
      },
      methods: {
        title: 'Métodos de Formación',
        items: [
          'Talleres interactivos y sesiones prácticas',
          'Desarrollo de habilidades específicas por rol',
          'Aprendizaje continuo y soporte'
        ]
      },
      cta: {
        explore: 'Explorar Programas de Formación',
        request: 'Solicitar Información'
      }
    }
  },
  clientStories: {
    sectionTitle: 'CASOS DE ÉXITO',
    title: 'Empresas Innovadoras que Confían en Nosotros',
    subtitle: 'He ayudado a estas empresas visionarias a transformar sus operaciones mediante la implementación y formación en IA',
    companies: {
      mcneel: {
        name: 'McNeel Europe',
        description: 'Implementación de soluciones de atención al cliente basadas en IA y formación integral del equipo.',
        services: ['Implementación IA', 'Formación Corporativa', 'Automatización de Procesos']
      },
      tennis: {
        name: 'Tennis Express México',
        description: 'Desarrollo de sistemas automatizados de generación de contenido y optimización de flujos de trabajo de atención al cliente.',
        services: ['Integración IA', 'Automatización de Flujos', 'Generación de Contenido']
      },
      ditesa: {
        name: 'Ditesa',
        description: 'Creación de soluciones personalizadas de IA para automatización de procesos empresariales y programas de formación del personal.',
        services: ['Automatización de Procesos', 'Formación en IA', 'Desarrollo Personalizado']
      }
    }
  },
  projects: {
    sectionTitle: 'PORTAFOLIO',
    title: 'Proyectos Destacados',
    subtitle: 'Descubre cómo hemos ayudado a empresas a transformar sus operaciones con soluciones de IA y programas de formación',
    items: [
      {
        title: 'AI Art Posters',
        description: 'Plataforma de comercio electrónico que vende piezas de arte generadas por IA usando Stable Diffusion y Midjourney.',
        tags: ['Shopify', 'Arte IA', 'E-commerce']
      },
      {
        title: 'TheTripAI',
        description: 'Plataforma de planificación de viajes impulsada por IA que utiliza tecnología GPT para itinerarios personalizados.',
        tags: ['GPT-4', 'Tecnología de Viajes', 'IA']
      },
      {
        title: 'McNeel Europe Training',
        description: 'Programa completo de formación en IA para empleados de McNeel Europe.',
        tags: ['Formación Corporativa', 'Implementación de IA', 'Educación']
      }
    ]
  },
  contact: {
    sectionTitle: 'CONTACTO',
    title: 'Trabajemos Juntos',
    subtitle: '¿Listo para transformar tu negocio con IA? Contáctanos para discutir cómo podemos ayudarte a alcanzar tus objetivos.',
    form: {
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Correo electrónico',
      emailPlaceholder: 'tu.correo@ejemplo.com',
      company: 'Empresa',
      companyPlaceholder: 'Tu empresa',
      service: 'Servicio',
      servicePlaceholder: 'Selecciona un servicio',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntame sobre tu proyecto o consulta',
      submit: 'Enviar mensaje'
    }
  }
} as const;
