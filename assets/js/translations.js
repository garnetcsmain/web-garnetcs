const translations = {
  en: {
    // Navigation
    nav: {
      about: "About",
      services: "Services",
      skillset: "Skillset",
      team: "Team",
      contact: "Contact",
      scheduleCall: "Schedule A Call"
    },
    
    // Hero Section
    hero: {
      title: "Meet Us",
      subtitle: "Securing your cloud. Scaling your operations. Building what's next.",
      tagline: "At Garnet CS, your success is our mission. Let's build your future together.",
      cta: "Schedule A Call"
    },
    
    // Logos Section
    logos: {
      title: "Logos"
    },
    
    // About Section
    about: {
      title: "About Us",
      subtitle: "Your IT partner, from code to cloud.",
      description: "We help businesses streamline IT operations through fullstack development, DevOps, and AI-powered automation. From building modern web applications to automating repetitive workflows, we take you from concept to production — so you can focus on growth.",
      highlights: [
        { title: "Fullstack Development", desc: "Modern web apps built to scale." },
        { title: "DevOps & Cloud", desc: "CI/CD pipelines, infrastructure as code, seamless deployments." },
        { title: "AI Automation", desc: "Eliminate manual work with intelligent workflows and integrations." }
      ]
    },
    
    // Services Section
    services: {
      title: "Proven Track Record",
      subtitle: "Real projects. Real impact.",
      cases: [
        {
          category: "Fintech",
          title: "Phone Payment Acceptance",
          description: "Built secure AWS infrastructure for a mobile payment solution with end-to-end encryption. Acquired by Apple for global rollout.",
          cta: "Read More"
        },
        {
          category: "Visualization",
          title: "Microcomponent Explorer",
          description: "Developed advanced visualization tools for TechInsights, helping clients explore and analyze technology components at scale.",
          cta: "Learn More"
        },
        {
          category: "Security",
          title: "IT Ops & Compliance",
          description: "Managed 100+ servers across cloud environments. Delivered PCI-DSS, SOC2, and NIST compliance with zero-downtime migrations.",
          cta: ""
        },
        {
          category: "Finance",
          title: "Financial Platforms",
          description: "Enhanced platforms for Morgan Stanley and other institutions, improving operational efficiency and security at enterprise scale.",
          cta: ""
        }
      ]
    },
    
    // Skillset Section
    skillset: {
      title: "Our Toolbox",
      subtitle: "The technologies we use daily.",
      categories: [
        {
          label: "Cloud & Infra",
          tags: ["AWS", "GCP", "Azure", "Terraform", "CloudFormation"]
        },
        {
          label: "DevOps",
          tags: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Linux"]
        },
        {
          label: "Development",
          tags: ["React", "Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL"]
        },
        {
          label: "Security",
          tags: ["PCI-DSS", "SOC2", "NIST", "DLP", "E2E Encryption"]
        },
        {
          label: "AI & Automation",
          tags: ["n8n", "OpenAI", "Anthropic", "LangChain", "Make", "Custom Agents"]
        }
      ]
    },
    
    // Team Section
    team: {
      title: "Team",
      subtitle: "The people behind the mission — diverse expertise, one shared goal.",
      members: [
        {
          name: "Freddy",
          position: "CEO",
          photo: "Freddy.webp"
        },
        {
          name: "Jose",
          position: "Solutions Architect & Lead Engineer",
          photo: "JoseDavid.webp"
        },
        {
          name: "Jaidiver Sepulveda",
          position: "DevOps Engineer",
          photo: "Jaidiver.webp"
        },
        {
          name: "Andres",
          position: "Developer",
          photo: "Andres.webp"
        },
        {
          name: "Sebastian",
          position: "Developer",
          photo: "Sebastian.webp"
        },
        {
          name: "Juan Estrada",
          position: "Project Manager",
          photo: "Juan.webp"
        },
        {
          name: "Danae",
          position: "Publicist & Design",
          photo: "Danae.webp"
        },
        {
          name: "Kaely",
          position: "Design",
          photo: "Kaely.webp"
        }
      ]
    },

    // How We Work Section
    howWeWork: {
      title: "Here's How We Work",
      mobileTitle: "How We Work",
      subtitle: "Discover how we make collaboration simple, effective, and tailored to your needs.",
      features: [
        {
          title: "Always Available",
          mobileTitle: "Always Online",
          description: "Our fully online operations mean we are just a click away, no matter where you are.",
          mobileDesc: "One click away, anywhere in the world."
        },
        {
          title: "Flexible Hours",
          mobileTitle: "Your Time Zone",
          description: "We customize our work hours to suit your schedule while ensuring a healthy work-life balance for our team.",
          mobileDesc: "We adapt our hours to match yours."
        },
        {
          title: "Tailored Pricing",
          mobileTitle: "Flexible Pricing",
          description: "From hourly engagements to full project delivery, we design flexible arrangements that align with your goals and maximize impact.",
          mobileDesc: "Hourly, project-based, or retainer — your call."
        },
        {
          title: "Modern Collaboration",
          mobileTitle: "Face to Face",
          description: "Yes, we are on video calls all day, making remote collaboration feel personal and effective.",
          mobileDesc: "Video-first culture. Remote, but personal."
        },
        {
          title: "Multilingual Communication",
          mobileTitle: "EN / ES / FR",
          description: "Our team communicates fluently in English, Spanish, and French — making collaboration natural across borders.",
          mobileDesc: "We speak your language. Literally."
        }
      ]
    },
    
    // Contact Section
    contact: {
      title: "Contact",
      intro: "At Garnet CS, we believe in making connections as seamless and enjoyable as the solutions we deliver. Whether you have a question, an idea, or a project in mind, we'd love to hear from you.",
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Message",
        submit: "Send Message"
      },
      dropUsLine: {
        title: "Drop Us a Line",
        subtitle: "We love a good, old-fashioned email! Share as much detail as you can about your needs, and someone from our team will ",
        subtitleHighlight: "get back to you within 48 hours"
      },
      info: [
        {
          title: "Based in the USA",
          description: "We are a registered LLC in the USA, proudly embracing the life of digital nomads. Working fully remotely, we bring our expertise to clients worldwide—and who knows, we might even pop by your corner of the globe someday!"
        },
        {
          title: "Email Us",
          description: "<div class='email-methods'><a href='mailto:info@garnetcs.com' class='email-method'><span class='email-method-label'>Email</span><span class='email-highlight'>info@garnetcs.com</span></a><a href='mailto:infogarnetcs@pm.me' class='email-method'><span class='email-method-label'>Encrypted (ProtonMail)</span><span class='email-highlight'>infogarnetcs@pm.me</span></a><div class='email-method'><span class='email-method-label'>Old-School PGP</span><div class='pgp-row'><code class='pgp-key'>t6CDBBAA9124913E</code><button class='pgp-copy-btn' onclick=\"navigator.clipboard.writeText('t6CDBBAA9124913E').then(()=>{this.classList.add('copied');setTimeout(()=>this.classList.remove('copied'),1500)})\" title='Copy to clipboard'><svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='9' y='9' width='13' height='13' rx='2' ry='2'/><path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'/></svg></button></div></div></div>"
        },
        {
          title: "Private Channels",
          description: "Once we kick off a project, you get dedicated phone numbers, live chat access, and direct communication channels — no gatekeepers."
        }
      ]
    },

    // Footer
    footer: {
      usefulLinks: {
        title: "Useful Links",
        items: ["Home", "About us", "Skillset", "Terms of service", "Privacy policy"]
      },
      ourServices: {
        title: "Our Services",
        items: ["Web Development"]
      },
      contactUs: {
        title: "Contact Us",
        emailAddress: "info@garnetcs.com"
      },
      copyright: "© 2024 Garnet CS. All Rights Reserved."
    }
  },

  es: {
    // Navegación
    nav: {
      about: "Nosotros",
      services: "Servicios",
      skillset: "Habilidades",
      team: "Equipo",
      contact: "Contacto",
      scheduleCall: "Agendar una Llamada"
    },
    
    // Sección Hero
    hero: {
      title: "Conócenos",
      subtitle: "Asegurando tu nube. Escalando tus operaciones. Construyendo lo que sigue.",
      tagline: "En Garnet CS, tu éxito es nuestra misión. Construyamos tu futuro juntos.",
      cta: "Agendar una Llamada"
    },
    
    // Sección Logos
    logos: {
      title: "Logos"
    },
    
    // Sección Acerca de
    about: {
      title: "Acerca de Nosotros",
      subtitle: "Tu socio en TI, del código a la nube.",
      description: "Ayudamos a empresas a optimizar sus operaciones de TI con desarrollo fullstack, DevOps y automatización con IA. Desde aplicaciones web modernas hasta flujos de trabajo automatizados, te llevamos del concepto a producción — para que te enfoques en crecer.",
      highlights: [
        { title: "Desarrollo Fullstack", desc: "Apps web modernas y escalables." },
        { title: "DevOps & Cloud", desc: "Pipelines CI/CD, infraestructura como código, despliegues sin fricción." },
        { title: "Automatización con IA", desc: "Elimina trabajo manual con flujos inteligentes e integraciones." }
      ]
    },
    
    // Sección Servicios
    services: {
      title: "Trayectoria Comprobada",
      subtitle: "Proyectos reales. Impacto real.",
      cases: [
        {
          category: "Fintech",
          title: "Pagos Móviles",
          description: "Construimos infraestructura segura en AWS para pagos móviles con cifrado de extremo a extremo. Adquirida por Apple para despliegue global.",
          cta: "Leer Más"
        },
        {
          category: "Visualización",
          title: "Explorador de Microcomponentes",
          description: "Desarrollamos herramientas de visualización avanzada para TechInsights, permitiendo analizar componentes tecnológicos a escala.",
          cta: "Ver más"
        },
        {
          category: "Seguridad",
          title: "Ops de TI & Cumplimiento",
          description: "Gestionamos 100+ servidores en la nube. Cumplimiento PCI-DSS, SOC2 y NIST con migraciones sin tiempo de inactividad.",
          cta: ""
        },
        {
          category: "Finanzas",
          title: "Plataformas Financieras",
          description: "Mejoramos plataformas para Morgan Stanley y otras instituciones, optimizando eficiencia operativa y seguridad empresarial.",
          cta: ""
        }
      ]
    },
    
    // Sección Habilidades
    skillset: {
      title: "Nuestras Herramientas",
      subtitle: "Las tecnologías que usamos a diario.",
      categories: [
        {
          label: "Cloud & Infra",
          tags: ["AWS", "GCP", "Azure", "Terraform", "CloudFormation"]
        },
        {
          label: "DevOps",
          tags: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Linux"]
        },
        {
          label: "Desarrollo",
          tags: ["React", "Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL"]
        },
        {
          label: "Seguridad",
          tags: ["PCI-DSS", "SOC2", "NIST", "DLP", "E2E Encryption"]
        },
        {
          label: "IA & Automatización",
          tags: ["n8n", "OpenAI", "Anthropic", "LangChain", "Make", "Custom Agents"]
        }
      ]
    },
    
    // Sección Equipo
    team: {
      title: "Equipo",
      subtitle: "Las personas detrás de la misión — experiencia diversa, un mismo objetivo.",
      members: [
        {
          name: "Freddy",
          position: "CEO",
          photo: "Freddy.webp"
        },
        {
          name: "Jose",
          position: "Arquitecto de Soluciones e Ingeniero Líder",
          photo: "JoseDavid.webp"
        },
        {
          name: "Jaidiver Sepulveda",
          position: "Ingeniero DevOps",
          photo: "Jaidiver.webp"
        },
        {
          name: "Andres",
          position: "Desarrollador",
          photo: "Andres.webp"
        },
        {
          name: "Sebastian",
          position: "Desarrollador",
          photo: "Sebastian.webp"
        },
        {
          name: "Juan Estrada",
          position: "Gerente de Proyectos",
          photo: "Juan.webp"
        },
        {
          name: "Danae",
          position: "Publicista y Diseño",
          photo: "Danae.webp"
        },
        {
          name: "Kaely",
          position: "Diseño",
          photo: "Kaely.webp"
        }
      ]
    },

    // Sección Cómo Trabajamos
    howWeWork: {
      title: "Así Trabajamos",
      mobileTitle: "Cómo Trabajamos",
      subtitle: "Descubre cómo hacemos que la colaboración sea simple, efectiva y adaptada a tus necesidades.",
      features: [
        {
          title: "Siempre Disponibles",
          mobileTitle: "Siempre Online",
          description: "Nuestras operaciones completamente en línea significan que estamos a solo un clic de distancia, sin importar dónde estés.",
          mobileDesc: "A un clic de distancia, desde cualquier lugar."
        },
        {
          title: "Horarios Flexibles",
          mobileTitle: "Tu Zona Horaria",
          description: "Personalizamos nuestros horarios de trabajo para adaptarnos a tu horario mientras garantizamos un equilibrio saludable entre trabajo y vida personal para nuestro equipo.",
          mobileDesc: "Nos adaptamos a tu horario."
        },
        {
          title: "Precios Personalizados",
          mobileTitle: "Precios Flexibles",
          description: "Desde compromisos por hora hasta entregas completas de proyectos, diseñamos acuerdos flexibles que se alinean con tus objetivos y maximizan el impacto.",
          mobileDesc: "Por hora, por proyecto o retainer — tú decides."
        },
        {
          title: "Colaboración Moderna",
          mobileTitle: "Cara a Cara",
          description: "Sí, estamos en videollamadas todo el día, haciendo que la colaboración remota se sienta personal y efectiva.",
          mobileDesc: "Cultura video-first. Remoto, pero personal."
        },
        {
          title: "Comunicación Multilingüe",
          mobileTitle: "EN / ES / FR",
          description: "Nuestro equipo se comunica con fluidez en inglés, español y francés, facilitando la colaboración sin barreras lingüísticas.",
          mobileDesc: "Hablamos tu idioma. Literalmente."
        }
      ]
    },
    
    // Sección Contacto
    contact: {
      title: "Contacto",
      intro: "En Garnet CS, creemos en hacer conexiones tan fluidas y agradables como las soluciones que entregamos. Ya sea que tengas una pregunta, una idea o un proyecto en mente, nos encantaría saber de ti.",
      form: {
        name: "Tu Nombre",
        email: "Tu Correo",
        subject: "Asunto",
        message: "Mensaje",
        submit: "Enviar Mensaje"
      },
      dropUsLine: {
        title: "Escríbenos",
        subtitle: "¡Nos encanta un buen correo electrónico a la antigua! Comparte tantos detalles como puedas sobre tus necesidades, y alguien de nuestro equipo ",
        subtitleHighlight: "te responderá dentro de 48 horas"
      },
      info: [
        {
          title: "Con Base en EE. UU.",
          description: "Somos una LLC registrada en EE. UU., orgullosamente abrazando la vida de nómadas digitales. Trabajando completamente remotos, llevamos nuestra experiencia a clientes en todo el mundo, y quién sabe, ¡quizás pasemos por tu rincón del mundo algún día!"
        },
        {
          title: "Envíanos un Correo",
          description: "<div class='email-methods'><a href='mailto:info@garnetcs.com' class='email-method'><span class='email-method-label'>Correo</span><span class='email-highlight'>info@garnetcs.com</span></a><a href='mailto:infogarnetcs@pm.me' class='email-method'><span class='email-method-label'>Encriptado (ProtonMail)</span><span class='email-highlight'>infogarnetcs@pm.me</span></a><div class='email-method'><span class='email-method-label'>PGP Old-School</span><div class='pgp-row'><code class='pgp-key'>t6CDBBAA9124913E</code><button class='pgp-copy-btn' onclick=\"navigator.clipboard.writeText('t6CDBBAA9124913E').then(()=>{this.classList.add('copied');setTimeout(()=>this.classList.remove('copied'),1500)})\" title='Copiar al portapapeles'><svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='9' y='9' width='13' height='13' rx='2' ry='2'/><path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'/></svg></button></div></div></div>"
        },
        {
          title: "Canales Directos",
          description: "Una vez que arrancamos un proyecto, recibes números de teléfono dedicados, acceso a chat en vivo y canales de comunicación directa — sin intermediarios."
        }
      ]
    },

    // Pie de Página
    footer: {
      usefulLinks: {
        title: "Enlaces Útiles",
        items: ["Inicio", "Nosotros", "Habilidades", "Términos de servicio", "Política de privacidad"]
      },
      ourServices: {
        title: "Nuestros Servicios",
        items: ["Desarrollo Web"]
      },
      contactUs: {
        title: "Contáctanos",
        emailAddress: "info@garnetcs.com"
      },
      copyright: "© 2024 Garnet CS. Todos los Derechos Reservados."
    }
  }
};
