// ===================================
// Global State
// ===================================
let currentLanguage = 'en';

// ===================================
// i18n Translation System
// ===================================
function getNestedProperty(obj, path) {
    return path.split('.').reduce((current, prop) => current?.[prop], obj);
}

function translatePage(lang) {
    currentLanguage = lang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedProperty(translations[lang], key);

        if (translation !== undefined && translation !== null) {
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Store preference
    localStorage.setItem('preferredLanguage', lang);

    // Re-render dynamic content
    renderSkillset();
    renderTeamMembers();
    renderFeatures();
    renderContactInfo();
    renderFooterLinks();
    initAboutTextReveal();
}

// ===================================
// Dynamic Content Rendering
// ===================================
function renderSkillset() {
    const grid = document.getElementById('skillsetGrid');
    if (!grid) return;

    const categories = translations[currentLanguage].skillset.categories;
    const allTags = categories.flatMap(cat => cat.tags);

    // Split into 3 rows for marquee effect
    const rowSize = Math.ceil(allTags.length / 3);
    const rows = [
        allTags.slice(0, rowSize),
        allTags.slice(rowSize, rowSize * 2),
        allTags.slice(rowSize * 2)
    ];

    grid.innerHTML = rows.map((row, i) => {
        const duplicated = [...row, ...row];
        const direction = i % 2 === 0 ? 'marquee-left' : 'marquee-right';
        return `
            <div class="skillset-marquee">
                <div class="skillset-marquee-track ${direction}">
                    ${duplicated.map(tag => `<span class="skillset-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function renderTeamMembers() {
    const grid = document.getElementById('teamGrid');
    if (!grid) return;

    const members = translations[currentLanguage].team.members;
    grid.innerHTML = members.map(member => `
        <div class="team-card">
            <div class="team-card-photo">
                <img src="./assets/images/people/${member.photo}" alt="${member.name}" loading="lazy">
            </div>
            <div class="team-card-info">
                <h3 class="team-card-name">${member.name}</h3>
                <p class="team-card-position">${member.position}</p>
            </div>
        </div>
    `).join('');

    // Build scroll indicator dots for mobile carousel
    const dotsContainer = document.getElementById('teamDots');
    if (dotsContainer) {
        dotsContainer.innerHTML = members.map((_, i) =>
            `<span class="team-dot${i === 0 ? ' active' : ''}"></span>`
        ).join('');

        const cards = grid.querySelectorAll('.team-card');
        const dots = dotsContainer.querySelectorAll('.team-dot');

        // Set first card active
        if (cards.length) cards[0].classList.add('active');

        if (cards.length && dots.length) {
            // Track scroll to update dots and active card
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = Array.from(cards).indexOf(entry.target);
                        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
                        cards.forEach((card, i) => card.classList.toggle('active', i === index));
                    }
                });
            }, { root: grid, threshold: 0.6 });

            cards.forEach(card => observer.observe(card));

            // Clickable dots to scroll to card
            dots.forEach((dot, i) => {
                dot.addEventListener('click', () => {
                    cards[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                });
            });
        }
    }

    // Re-apply scroll animations and card glow to new elements
    initScrollAnimations();
    initCardGlow();
}

function renderFeatures() {
    const grid = document.getElementById('featuresGrid');
    if (!grid) {
        console.warn('featuresGrid element not found');
        return;
    }

    const features = translations[currentLanguage].howWeWork.features;
    const icons = ['icon-1.svg', 'icon-2.svg', 'icon-3.svg', 'icon-4.svg', 'icon-5.svg', 'icon-6.svg'];

    grid.innerHTML = features.map((feature, index) => `
        <div class="feature-item" data-anim-delay="${index * 120}">
            <div class="feature-icon">
                <img src="assets/images/${icons[index]}" alt="${feature.title}">
            </div>
            <div class="feature-step">${String(index + 1).padStart(2, '0')}</div>
            <div class="feature-content">
                <h3 class="feature-title">
                    <span class="desktop-only">${feature.title}</span>
                    <span class="mobile-only">${feature.mobileTitle || feature.title}</span>
                </h3>
                <p class="feature-description">
                    <span class="desktop-only">${feature.description}</span>
                    <span class="mobile-only">${feature.mobileDesc || feature.description}</span>
                </p>
            </div>
        </div>
    `).join('');

    initScrollAnimations();
}

function renderContactInfo() {
    const grid = document.getElementById('contactInfoGrid');
    if (!grid) {
        console.warn('contactInfoGrid element not found');
        return;
    }

    const info = translations[currentLanguage].contact.info;
    const icons = ['icon-location.svg', 'icon-envelope.svg', 'icon-lock.svg'];

    grid.innerHTML = info.map((item, index) => `
        <div class="contact-info-card">
            <div class="contact-info-icon">
                <img src="./assets/images/${icons[index]}" alt="${item.title}" loading="lazy" onerror="console.error('Failed to load:', this.src)">
            </div>
            <div class="contact-info-content">
                <h3 class="contact-info-title">${item.title}</h3>
                <div class="contact-info-description">${item.description}</div>
            </div>
        </div>
    `).join('');
}

function renderFooterLinks() {
    const usefulLinks = document.getElementById('usefulLinksList');
    const servicesList = document.getElementById('ourServicesList');

    const mapUsefulLink = (label) => {
        const value = label.toLowerCase();
        if (value.includes('home') || value.includes('inicio')) return '#hero';
        if (value.includes('about') || value.includes('nosotros')) return '#about';
        if (value.includes('skillset') || value.includes('habilidades')) return '#skillset';
        if (value.includes('terms') || value.includes('términos')) return './terms.html';
        if (value.includes('privacy') || value.includes('privacidad')) return './privacy.html';
        return '#contact';
    };

    const mapServiceLink = (label) => {
        const value = label.toLowerCase();
        if (value.includes('web development') || value.includes('desarrollo web')) return './web-development.html';
        return '#services';
    };

    if (usefulLinks) {
        const links = translations[currentLanguage].footer.usefulLinks.items;
        usefulLinks.innerHTML = links
            .map(link => `<li><a href="${mapUsefulLink(link)}">${link}</a></li>`)
            .join('');
    }

    if (servicesList) {
        const services = translations[currentLanguage].footer.ourServices.items;
        servicesList.innerHTML = services
            .map(link => `<li><a href="${mapServiceLink(link)}">${link}</a></li>`)
            .join('');
    }
}

// ===================================
// Smooth Scrolling
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href === '#' || href === '') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                const navMenu = document.getElementById('navMenu');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
}

// ===================================
// Mobile Menu
// ===================================
function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const menu = document.getElementById('navMenu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!toggle.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            }
        });
    }
}

// ===================================
// Contact Form
// ===================================
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        if (!validateEmail(formData.email)) {
            alert(currentLanguage === 'en'
                ? 'Please enter a valid email address.'
                : 'Por favor ingresa un correo electrónico válido.');
            return;
        }

        const subject = encodeURIComponent(formData.subject);
        const body = encodeURIComponent(
            `Name: ${formData.name}
Email: ${formData.email}

${formData.message}`
        );
        window.location.href = `mailto:info@garnetcs.com?subject=${subject}&body=${body}`;
        form.reset();
    });
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ===================================
// Language Detection
// ===================================
function detectLanguage() {
    const stored = localStorage.getItem('preferredLanguage');
    if (stored && (stored === 'en' || stored === 'es')) return stored;

    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('es') ? 'es' : 'en';
}

// ===================================
// Hero Parallax Mouse Effect
// ===================================
function initHeroParallax() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const overlay = hero.querySelector('.hero-gradient-overlay');
    const svgBg = hero.querySelector('.hero-svg-bg');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        if (overlay) {
            overlay.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        }
        if (svgBg) {
            svgBg.style.transform = `translate(${x * -10}px, ${y * -10}px)`;
        }
    });

    hero.addEventListener('mouseleave', () => {
        if (overlay) overlay.style.transform = 'translate(0, 0)';
        if (svgBg) svgBg.style.transform = 'translate(0, 0)';
    });
}

// ===================================
// Mouse-Follow Glow on Cards
// ===================================
function initCardGlow() {
    // Skip on touch devices
    if ('ontouchstart' in window) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const glowCards = document.querySelectorAll(
        '.feature-item, .skillset-tag, .contact-info-card'
    );

    glowCards.forEach(card => {
        // Avoid adding duplicate listeners
        if (card._glowInit) return;
        card._glowInit = true;

        let rafId = null;

        card.addEventListener('mousemove', (e) => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', x + 'px');
                card.style.setProperty('--mouse-y', y + 'px');
                rafId = null;
            });
        });

        card.addEventListener('mouseleave', () => {
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
        });
    });
}

// ===================================
// Background Grid Scroll Sync
// ===================================
function initBgGridScroll() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                document.documentElement.style.setProperty('--scroll-y', window.scrollY);
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ===================================
// Scroll-triggered Fade-in Animations
// ===================================
let _scrollObserver = null;

function initScrollAnimations() {
    if (_scrollObserver) _scrollObserver.disconnect();

    const animatedElements = document.querySelectorAll(
        '.service-case, .skillset-card, .team-card, .feature-item, .contact-info-card, .about-content, .drop-us-line, .section-title, .section-subtitle, .about-highlight-item'
    );

    // Add staggered delays to about highlights (applied after stagger loop below)
    const highlightDelayOverrides = new Set();
    document.querySelectorAll('.about-highlight-item').forEach((item, i) => {
        highlightDelayOverrides.add(item);
        item.dataset.animDelay = (i + 1) * 200;
    });

    if (!('IntersectionObserver' in window)) {
        animatedElements.forEach(el => el.classList.add('scroll-visible'));
        return;
    }

    _scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.animDelay || 0;
                setTimeout(() => {
                    entry.target.classList.add('scroll-visible');
                }, delay);
                _scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    animatedElements.forEach((el) => {
        // Apply directional animation to service cases
        if (el.classList.contains('service-case')) {
            const cases = Array.from(el.parentElement.children).filter(c => c.classList.contains('service-case'));
            const idx = cases.indexOf(el);
            if (idx % 2 === 0) {
                el.classList.add('scroll-animate-left');
            } else {
                el.classList.add('scroll-animate-right');
            }
        } else {
            el.classList.add('scroll-animate');
        }

        // Stagger siblings in grids
        const parent = el.parentElement;
        if (parent) {
            const siblings = Array.from(parent.children).filter(c =>
                c.classList.contains('scroll-animate') ||
                c.classList.contains('scroll-animate-left') ||
                c.classList.contains('scroll-animate-right')
            );
            const idx = siblings.indexOf(el);
            el.dataset.animDelay = idx * 120;
        }

        _scrollObserver.observe(el);
    });
}

// ===================================
// About Section: Scroll-Driven Word Reveal
// ===================================
let _aboutScrollHandler = null;

function initAboutTextReveal() {
    const description = document.querySelector('.about-description');
    if (!description) return;

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Get the raw text (either from textContent if already set, or from translations)
    const text = description.textContent.trim();
    if (!text) return;

    // Split text into word spans
    const words = text.split(/\s+/);
    description.innerHTML = words.map(word =>
        `<span class="word-reveal">${word}</span>`
    ).join(' ');

    const wordSpans = description.querySelectorAll('.word-reveal');
    if (wordSpans.length === 0) return;

    // Mark "focus on growth" / "enfoques en crecer" for emphasis
    const ctaStart = words.findIndex(w => w === 'focus' || w === 'enfoques');
    if (ctaStart !== -1) {
        wordSpans.forEach((span, i) => {
            if (i >= ctaStart) span.classList.add('word-reveal-cta');
        });
    }

    // Remove previous scroll handler if exists (language switch)
    if (_aboutScrollHandler) {
        window.removeEventListener('scroll', _aboutScrollHandler);
    }

    // Scroll handler: calculate progress through about section
    _aboutScrollHandler = () => {
        const section = document.getElementById('about');
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Progress: 0 when section top enters viewport bottom,
        //           1 when section bottom reaches viewport top
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const start = viewportHeight * 0.6;   // section must be 40% into viewport before reveal starts
        const end = -sectionHeight * 0.15;   // finish a bit earlier
        const progress = Math.max(0, Math.min(1, (start - sectionTop) / (start - end)));

        // Map progress to word highlighting
        const totalWords = wordSpans.length;
        const revealedCount = Math.floor(progress * totalWords);

        wordSpans.forEach((span, i) => {
            span.classList.toggle('visible', i < revealedCount);
        });
    };

    window.addEventListener('scroll', _aboutScrollHandler, { passive: true });
    // Trigger once on init for current scroll position
    _aboutScrollHandler();
}

// ===================================
// Initialize All
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const initialLang = detectLanguage();
    translatePage(initialLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLanguage) translatePage(lang);
        });
    });

    initSmoothScroll();
    initMobileMenu();
    initContactForm();
    initHeroParallax();
    initScrollAnimations();
    initAboutTextReveal();
    initCardGlow();
    initBgGridScroll();
});

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScroll = window.pageYOffset;
    navbar.style.boxShadow = currentScroll > 100
        ? '0px 4px 12px rgba(0, 0, 0, 0.4)'
        : 'none';
});

console.log('%c Garnet CS Website Loaded', 'color: #8B0000; font-size: 16px; font-weight: bold;');
