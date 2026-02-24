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
      subtitle: "Your success is our mission.",
      description: "Founded in 2024, Garnet CS was built on a shared vision: to empower small and medium-sized businesses with exceptional support in web application development and seamless IT operations. We specialize in taking projects from concept to completion — designing, building, managing, and maintaining robust solutions tailored to our clients' needs. Our team brings diverse expertise spanning multiple industries and IT consultancy, with a goal-oriented approach that ensures every solution we deliver not only meets but exceeds expectations. We understand that not all businesses start with the resources or team needed to succeed. That's where we come in. Whether you're looking for technical advice, team-building support, or a partner to manage your IT and development needs, Garnet CS is here to guide you. If you don't have the right team in place, we'll help you build it or find the perfect talent to bring your vision to life — all while delivering the expertise and reliability your business deserves. At Garnet CS, your success is our mission. Let's build your future together."
    },
    
    // Services Section
    services: {
      title: "WHERE WE COME FROM",
      subtitle: "Our Expertise in Application Development and Cloud Infrastructure.",
      cases: [
        {
          category: "Fintech Innovations",
          title: "Payment Acceptance",
          description: "We contributed to the design, development, and maintenance of AWS Cloud infrastructure for a groundbreaking Phone Payment Acceptance solution. This included implementing advanced end-to-end encryption to secure credit card transactions and hosting a secure Proof of Concept (PoC) application. The success of this solution led to its acquisition and global implementation, showcasing our ability to deliver secure and scalable cloud solutions. (Mobeewave).",
          cta: "Read More"
        },
        {
          category: "Global Microcomponent Visualization",
          title: "",
          description: "We built advanced visualization solutions for TechInsights, enabling their clients to explore and understand technology components with efficiency and clarity.",
          cta: "Learn More"
        },
        {
          category: "IT Operations & Security Leadership",
          title: "",
          description: "Managed and secured cloud environments spanning over 100 Windows and Linux servers. Delivered PCI-DSS compliance, SLA maintenance, incident management, and seamless cloud migrations. Ensured disruption-free integrations, backups, and IT mergers at the enterprise level. Led process improvements, built compliance frameworks (NIST, SOC2, ICFR), and strengthened DLP across platforms — all with hands-on expertise in AWS, Terraform, Okta, and Kubernetes. (Multiple Companies).",
          cta: ""
        },
        {
          category: "Innovation in the Financial Sector",
          title: "",
          description: "We contributed to key projects for Morgan Stanley and other financial institutions, enhancing platforms and tools to maximize operational efficiency and ensure top-tier security in their services.",
          cta: ""
        }
      ]
    },
    
    // Skillset Section
    skillset: {
      title: "Our Skillset",
      subtitle: "Technologies and expertise we bring to every project.",
      skills: [
        {
          title: "AWS & Cloud Infrastructure",
          description: "Design, deployment, and management of scalable cloud environments using AWS, Azure, and hybrid architectures."
        },
        {
          title: "DevOps & CI/CD",
          description: "Automated pipelines, infrastructure as code with Terraform, and containerized deployments with Docker and Kubernetes."
        },
        {
          title: "Web Application Development",
          description: "Full-stack development of modern, responsive web applications using cutting-edge frameworks and best practices."
        },
        {
          title: "Cloud Security & Compliance",
          description: "PCI-DSS, SOC2, NIST compliance frameworks, DLP strategies, and end-to-end encryption implementation."
        },
        {
          title: "IT Operations & Support",
          description: "24/7 infrastructure monitoring, incident management, SLA maintenance, and seamless cloud migrations."
        },
        {
          title: "Networking & Systems",
          description: "Enterprise networking, server management across 100+ environments, and integration of Windows and Linux systems."
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
          position: "Team Member",
          photo: "Freddy.webp"
        },
        {
          name: "Jose",
          position: "Team Member",
          photo: "JoseDavid.webp"
        },
        {
          name: "Andres",
          position: "Team Member",
          photo: "Andres.webp"
        },
        {
          name: "Sebas",
          position: "Team Member",
          photo: "Sebastian.webp"
        },
        {
          name: "Juan Estrada",
          position: "Team Member",
          photo: "Juan.webp"
        },
        {
          name: "Danae",
          position: "Team Member",
          photo: "Danae.webp"
        },
        {
          name: "Kaely",
          position: "Team Member",
          photo: "Kaely.webp"
        }
      ]
    },
    
    // How We Work Section
    howWeWork: {
      title: "Here's How We Work",
      subtitle: "Discover how we make collaboration simple, effective, and tailored to your needs.",
      features: [
        {
          title: "Always Available",
          description: "Our fully online operations mean we are just a click away, no matter where you are."
        },
        {
          title: "Flexible Hours",
          description: "We customize our work hours to suit your schedule while ensuring a healthy work-life balance for our team."
        },
        {
          title: "Tailored Pricing",
          description: "From hourly engagements to full project delivery, we design flexible arrangements that align with your goals and maximize impact."
        },
        {
          title: "Modern Collaboration",
          description: "Yes, we are on video calls all day, making remote collaboration feel personal and effective."
        },
        {
          title: "Pro Tips for the Digital Age",
          description: "Struggling to adapt to the new way of working? We've got tips to make your transition smooth."
        },
        {
          title: "Multilingual Communication",
          description: "Our team communicates fluently in English, Spanish, and French — making collaboration natural across borders."
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
          title: "Address",
          description: "We are a registered LLC in the USA, proudly embracing the life of digital nomads. Working fully remotely, we bring our expertise to clients worldwide—and who knows, we might even pop by your corner of the globe someday!"
        },
        {
          title: "Email Us",
          description: "We love a good, old-fashioned email!<div class='email-methods'><a href='mailto:info@garnetcs.com' class='email-method'><span class='email-method-label'>Email</span><span class='email-highlight'>info@garnetcs.com</span></a><a href='mailto:infogarnetcs@pm.me' class='email-method'><span class='email-method-label'>Encrypted (ProtonMail)</span><span class='email-highlight'>infogarnetcs@pm.me</span></a><div class='email-method'><span class='email-method-label'>Old-School PGP</span><code class='pgp-key'>t6CDBBAA9124913E</code><button class='pgp-copy-btn' onclick=\"navigator.clipboard.writeText('t6CDBBAA9124913E').then(()=>{this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',1500)})\" title='Copy to clipboard'>Copy</button></div></div>"
        },
        {
          title: "Privacy",
          description: "For privacy and efficiency, we provide dedicated phone numbers, live chat access, and other direct communication details after we have agreed to work together."
        },
        {
          title: "Flexible Hours",
          description: "We adapt our work hours to match your schedule and time zone, so you'll always find us ready when you need us."
        }
      ]
    },

    // Footer
    footer: {
      usefulLinks: {
        title: "Useful Links",
        items: ["Home", "About us", "Services", "Terms of service", "Privacy policy"]
      },
      ourServices: {
        title: "Our Services",
        items: ["Web Design", "Web Development", "Product Management", "Marketing", "Graphic Design"]
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
      subtitle: "Tu éxito es nuestra misión.",
      description: "Fundada en 2024, Garnet CS se construyó sobre una visión compartida: empoderar a pequeñas y medianas empresas con soporte excepcional en desarrollo de aplicaciones web y operaciones de TI sin fricciones. Nos especializamos en llevar proyectos del concepto a la entrega — diseñar, construir, gestionar y mantener soluciones robustas adaptadas a las necesidades de nuestros clientes. Nuestro equipo aporta amplia experiencia en múltiples industrias y consultoría de TI, con un enfoque orientado a objetivos que asegura que cada solución no solo cumpla sino que supere las expectativas. Sabemos que no todas las empresas comienzan con los recursos o el equipo necesario para triunfar. Ahí es donde entramos nosotros. Ya sea que busques asesoría técnica, apoyo para construir equipos o un socio para gestionar tus necesidades de TI y desarrollo, Garnet CS está aquí para guiarte. Si no tienes el equipo adecuado, te ayudaremos a formarlo o a encontrar el talento ideal para dar vida a tu visión — siempre con la experiencia y confiabilidad que tu negocio merece. En Garnet CS, tu éxito es nuestra misión. Construyamos tu futuro juntos."
    },
    
    // Sección Servicios
    services: {
      title: "DE DÓNDE VENIMOS",
      subtitle: "Nuestra Experiencia en Desarrollo de Aplicaciones e Infraestructura en la Nube.",
      cases: [
        {
          category: "Innovaciones Fintech",
          title: "Aceptación de Pagos",
          description: "Contribuimos al diseño, desarrollo y mantenimiento de la infraestructura en la nube de AWS para una solución innovadora de Aceptación de Pagos Telefónicos. Esto incluyó la implementación de cifrado avanzado de extremo a extremo para asegurar transacciones con tarjetas de crédito y el alojamiento de una aplicación de Prueba de Concepto (PoC) segura. El éxito de esta solución llevó a su adquisición e implementación global, demostrando nuestra capacidad para ofrecer soluciones en la nube seguras y escalables. (Mobeewave).",
          cta: "Leer Más"
        },
        {
          category: "Visualización de Microcomponentes Global",
          title: "",
          description: "Creamos soluciones de visualización avanzada para TechInsights, permitiendo a sus clientes explorar y comprender componentes tecnológicos de manera eficiente y clara.",
          cta: "Ver más"
        },
        {
          category: "Liderazgo en Operaciones de TI y Seguridad",
          title: "",
          description: "Gestionamos y aseguramos entornos en la nube para más de 100 servidores Windows y Linux. Entregamos cumplimiento PCI-DSS, mantenimiento de SLA, gestión de incidentes y migraciones a la nube sin fricciones. Aseguramos integraciones, respaldos y fusiones de TI sin interrupciones para operaciones de nivel empresarial. Optimizamos procesos de onboarding, reforzamos la documentación y lideramos iniciativas de integración para mejorar operaciones y colaboración. Impulsamos mejoras de procesos, desarrollamos marcos de cumplimiento (NIST, SOC2, ICFR) y fortalecimos DLP en todas las plataformas. Aportamos experiencia práctica con AWS, Terraform, Okta y Kubernetes. (Múltiples empresas).",
          cta: ""
        },
        {
          category: "Innovación en el Sector Financiero",
          title: "",
          description: "Contribuimos a proyectos clave para Morgan Stanley y otras instituciones financieras, mejorando plataformas y herramientas para maximizar la eficiencia operativa y garantizar seguridad de primer nivel en sus servicios.",
          cta: ""
        }
      ]
    },
    
    // Sección Habilidades
    skillset: {
      title: "Nuestras Habilidades",
      subtitle: "Tecnologías y experiencia que aportamos a cada proyecto.",
      skills: [
        {
          title: "AWS e Infraestructura Cloud",
          description: "Diseño, despliegue y gestión de entornos cloud escalables usando AWS, Azure y arquitecturas híbridas."
        },
        {
          title: "DevOps y CI/CD",
          description: "Pipelines automatizados, infraestructura como código con Terraform y despliegues containerizados con Docker y Kubernetes."
        },
        {
          title: "Desarrollo de Aplicaciones Web",
          description: "Desarrollo full-stack de aplicaciones web modernas y responsivas usando frameworks de vanguardia y mejores prácticas."
        },
        {
          title: "Seguridad Cloud y Cumplimiento",
          description: "Marcos de cumplimiento PCI-DSS, SOC2, NIST, estrategias DLP e implementación de cifrado de extremo a extremo."
        },
        {
          title: "Operaciones de TI y Soporte",
          description: "Monitoreo de infraestructura 24/7, gestión de incidentes, mantenimiento de SLA y migraciones cloud sin fricciones."
        },
        {
          title: "Redes y Sistemas",
          description: "Redes empresariales, gestión de servidores en más de 100 entornos e integración de sistemas Windows y Linux."
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
          position: "Miembro del equipo",
          photo: "Freddy.webp"
        },
        {
          name: "Jose",
          position: "Miembro del equipo",
          photo: "JoseDavid.webp"
        },
        {
          name: "Andres",
          position: "Miembro del equipo",
          photo: "Andres.webp"
        },
        {
          name: "Sebas",
          position: "Miembro del equipo",
          photo: "Sebastian.webp"
        },
        {
          name: "Juan Estrada",
          position: "Miembro del equipo",
          photo: "Juan.webp"
        },
        {
          name: "Danae",
          position: "Miembro del equipo",
          photo: "Danae.webp"
        },
        {
          name: "Kaely",
          position: "Miembro del equipo",
          photo: "Kaely.webp"
        }
      ]
    },
    
    // Sección Cómo Trabajamos
    howWeWork: {
      title: "Así Trabajamos",
      subtitle: "Descubre cómo hacemos que la colaboración sea simple, efectiva y adaptada a tus necesidades.",
      features: [
        {
          title: "Siempre Disponibles",
          description: "Nuestras operaciones completamente en línea significan que estamos a solo un clic de distancia, sin importar dónde estés."
        },
        {
          title: "Horarios Flexibles",
          description: "Personalizamos nuestros horarios de trabajo para adaptarnos a tu horario mientras garantizamos un equilibrio saludable entre trabajo y vida personal para nuestro equipo."
        },
        {
          title: "Precios Personalizados",
          description: "Desde compromisos por hora hasta entregas completas de proyectos, diseñamos acuerdos flexibles que se alinean con tus objetivos y maximizan el impacto."
        },
        {
          title: "Colaboración Moderna",
          description: "Sí, estamos en videollamadas todo el día, haciendo que la colaboración remota se sienta personal y efectiva."
        },
        {
          title: "Consejos Profesionales para la Era Digital",
          description: "¿Te cuesta adaptarte a la nueva forma de trabajar? Tenemos consejos para hacer tu transición más suave."
        },
        {
          title: "Comunicación Multilingüe",
          description: "Nuestro equipo se comunica con fluidez en inglés, español y francés, facilitando la colaboración sin barreras lingüísticas."
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
          title: "Dirección",
          description: "Somos una LLC registrada en EE. UU., orgullosamente abrazando la vida de nómadas digitales. Trabajando completamente remotos, llevamos nuestra experiencia a clientes en todo el mundo, y quién sabe, ¡quizás pasemos por tu rincón del mundo algún día!"
        },
        {
          title: "Envíanos un Correo",
          description: "¡Nos encanta un buen correo electrónico a la antigua!<div class='email-methods'><a href='mailto:info@garnetcs.com' class='email-method'><span class='email-method-label'>Correo</span><span class='email-highlight'>info@garnetcs.com</span></a><a href='mailto:infogarnetcs@pm.me' class='email-method'><span class='email-method-label'>Encriptado (ProtonMail)</span><span class='email-highlight'>infogarnetcs@pm.me</span></a><div class='email-method'><span class='email-method-label'>PGP Old-School</span><code class='pgp-key'>t6CDBBAA9124913E</code><button class='pgp-copy-btn' onclick=\"navigator.clipboard.writeText('t6CDBBAA9124913E').then(()=>{this.textContent='¡Copiado!';setTimeout(()=>this.textContent='Copiar',1500)})\" title='Copiar al portapapeles'>Copiar</button></div></div>"
        },
        {
          title: "Privacidad",
          description: "Por privacidad y eficiencia, proporcionamos números de teléfono dedicados, acceso a chat en vivo y otros detalles de comunicación directa después de que hayamos acordado trabajar juntos."
        },
        {
          title: "Horarios Flexibles",
          description: "Adaptamos nuestros horarios a tu zona horaria y agenda, para que siempre nos encuentres disponibles cuando nos necesites."
        }
      ]
    },

    // Pie de Página
    footer: {
      usefulLinks: {
        title: "Enlaces Útiles",
        items: ["Inicio", "Nosotros", "Servicios", "Términos de servicio", "Política de privacidad"]
      },
      ourServices: {
        title: "Nuestros Servicios",
        items: ["Diseño Web", "Desarrollo Web", "Gestión de Productos", "Marketing", "Diseño Gráfico"]
      },
      contactUs: {
        title: "Contáctanos",
        emailAddress: "info@garnetcs.com"
      },
      copyright: "© 2024 Garnet CS. Todos los Derechos Reservados."
    }
  }
};
