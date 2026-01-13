# Garnet CS - Bilingual Landing Page

A modern, responsive, bilingual (English/Spanish) landing page for Garnet CS, built with vanilla HTML, CSS, and JavaScript.

## 🎯 Project Overview

This single-page website showcases Garnet CS's IT solutions, services, team, and contact information. The design is based on Figma specifications with a focus on clean code, performance, and accessibility.

### Features

- ✅ **Bilingual Support**: Seamless language switching between English and Spanish
- ✅ **Responsive Design**: Optimized for mobile, tablet, and desktop
- ✅ **No Framework Dependencies**: Pure HTML5, CSS3, and vanilla JavaScript
- ✅ **Performance Optimized**: Lazy loading images, smooth animations
- ✅ **Accessible**: Semantic HTML, ARIA labels, keyboard navigation
- ✅ **SEO Ready**: Meta tags, Open Graph tags, semantic structure

## 📁 Project Structure

```
web-garnetcs/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   ├── main.js         # Main JavaScript file
│   │   └── translations.js # Bilingual content
│   └── images/             # All images and icons
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd web-garnetcs
   ```

2. **Open with a local server**
   
   Using Python:
   ```bash
   python3 -m http.server 8000
   ```
   
   Using Node.js (http-server):
   ```bash
   npx http-server -p 8000
   ```
   
   Using PHP:
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Direct File Opening

You can also open `index.html` directly in your browser, though some features may not work optimally without a web server.

## 🎨 Design Specifications

### Color Palette
- **Primary Red**: `#8B0000`
- **Secondary Red**: `#B22222`
- **Gray**: `#86868C`
- **Dark**: `#353535`
- **Light**: `#FAFAFA`
- **White**: `#FFFFFF`

### Typography
- **Montserrat**: Headings and emphasis
- **Open Sans**: Body text alternative
- **Source Sans Pro**: Primary body text

### Fonts Loading
Fonts are loaded from Google Fonts via CDN for optimal performance.

## 🌐 Sections

1. **Navigation**: Sticky header with language switcher
2. **Hero**: Main call-to-action section
3. **Logos**: Client/partner logos placeholder
4. **About Us**: Company introduction
5. **Services**: Three case studies with alternating layouts
6. **Portfolio**: Scrollable carousel of projects
7. **Team**: Team member cards
8. **How We Work**: Six feature cards
9. **Contact**: Form and contact information cards
10. **Footer**: Links and company information

## 🔧 Customization

### Updating Content

Edit `/assets/js/translations.js` to update bilingual content:

```javascript
const translations = {
  en: {
    nav: { ... },
    hero: { ... },
    // ... other sections
  },
  es: {
    // Spanish translations
  }
};
```

### Changing Colors

Update CSS variables in `/assets/css/styles.css`:

```css
:root {
    --color-primary: #8B0000;
    --color-secondary: #B22222;
    /* ... other colors */
}
```

### Adding Images

Place images in `/assets/images/` and reference them:

```html
<img src="./assets/images/your-image.png" alt="Description" loading="lazy">
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🔄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Contact Form

The contact form currently logs submissions to the console. To implement backend functionality:

1. Create a backend endpoint (e.g., `/api/contact`)
2. Update the `initContactForm()` function in `main.js`
3. Add proper error handling and success messages

Example integration:

```javascript
const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

## 🚀 Deployment

### Static Hosting Options

- **AWS S3 + CloudFront**
- **Netlify**
- **Vercel**
- **GitHub Pages**
- **Firebase Hosting**

### Deployment Steps (Example: Netlify)

1. Push code to GitHub
2. Connect repository to Netlify
3. Configure build settings (if any)
4. Deploy!

### Custom Domain Setup

1. Purchase domain from registrar (e.g., Porkbun, Namecheap)
2. Configure DNS records:
   - A record pointing to hosting IP
   - CNAME for www subdomain
3. Enable SSL certificate

## 🔒 Security Considerations

- No sensitive data in frontend code
- Form validation on both client and server
- HTTPS enabled in production
- Regular dependency updates (if using build tools)

## 📊 Performance Tips

- All images use lazy loading
- Google Fonts loaded asynchronously
- Minimal CSS and JavaScript
- No external dependencies beyond fonts

## 🐛 Troubleshooting

### Images not loading
- Check file paths are correct
- Ensure images are in `/assets/images/`
- Verify web server is serving static files

### Language switcher not working
- Check browser console for errors
- Ensure `translations.js` is loaded before `main.js`
- Clear localStorage: `localStorage.clear()`

### Carousel not scrolling
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify element IDs match JavaScript selectors

## 📄 License

© 2024 Garnet CS. All Rights Reserved.

## 👥 Team

Built with ❤️ by the Garnet CS Team
- Freddy Sulbaran - CEO & CloudOps
- Jose David Hernandez - Co-Founder & Full Stack Developer

## 📞 Support

For questions or issues:
- Email: info@garnetcs.com
- Website: [garnetcs.com](https://garnetcs.com)

---

**Last Updated**: January 2026
