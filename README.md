# Garnet CS - Bilingual Landing Page

A modern, responsive, bilingual (English/Spanish) landing page for Garnet CS, built with vanilla HTML, CSS, and JavaScript.

## 🎯 Project Overview

This single-page website showcases Garnet CS's IT solutions, services, team, and contact information. The design was based on Figma specifications with a focus on clean code, performance, and accessibility.

### Live URLs

- https://garnetcs.com
- https://www.garnetcs.com
- CloudFront: https://d1xbzinnq45525.cloudfront.net

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
├── deploy.sh               # S3 + CloudFront deployment script
├── update-cloudfront.sh    # Custom domain + SSL updater
├── test-icons.html         # Local icon debug page
├── QUICKSTART.md           # Full AWS setup and deployment flow
├── UPDATE_NOTES.md         # Change log and deployment notes
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

Current CTAs (nav + hero) go directly to `mailto:info@garnetcs.com`. When the form is enabled, it opens a `mailto:` draft from `assets/js/main.js`. To implement backend functionality:

## 🚀 Deployment

### Deploy to Production (AWS S3 + CloudFront)

The website is configured to deploy to AWS S3 with CloudFront CDN.

Full automated CI/CD with Github Actions.
Manual Deployment:
```bash 
./deploy.sh
```

This will:
1. Sync all files to S3 bucket
2. Set appropriate cache headers and content types
3. Invalidate CloudFront cache
4. Wait for invalidation to complete
5. Show deployment status

### Update CloudFront Custom Domain/SSL

If the domain or certificate changes, update and run:

```bash
./update-cloudfront.sh
```

This script pulls the current distribution config, applies aliases and ACM certificate settings, and updates CloudFront. It requires `aws` and `jq`.

### AWS Resources

See `aws-config.txt` for AWS resource configuration.

- **Domain**: garnetcs.com
- **Hosting**: AWS S3 + CloudFront
- **Region**: us-east-1

### Custom Domain Setup

1. Purchase domain from registrar (e.g., Porkbun, Namecheap)
2. Configure DNS records:
   - CNAME pointing to CloudFront distribution
   - CNAME for www subdomain
3. SSL certificate via AWS ACM

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

## 📄 License

© 2024 Garnet CS. All Rights Reserved.

## 👥 Team

Built with ❤️ by the Garnet CS Team
- Freddy Sulbaran
- Jose David Hernandez

## 📞 Support

For questions or issues:
- Email: info@garnetcs.com
- Website: [garnetcs.com](https://garnetcs.com)

---

**Last Updated**: January 2026
