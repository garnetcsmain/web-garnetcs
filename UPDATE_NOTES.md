# Garnet CS Website - Update Notes

**Last Updated:** January 27, 2026  
**Status:** 🎉 LIVE on Custom Domain ✅

---

## 🎯 Project Summary

Successfully created and deployed the Garnet CS bilingual landing page to AWS S3 + CloudFront.

- **🌐 LIVE URL:** https://garnetcs.com
- **🌐 LIVE URL (www):** https://www.garnetcs.com
- **CloudFront URL:** https://d1xbzinnq45525.cloudfront.net
- **Tech Stack:** HTML5, CSS3, Vanilla JavaScript
- **Languages:** English/Spanish

---

## 📋 Recent Changes (January 27, 2026)

### ✅ Content Aligned to Current Messaging
- **About Us:** Replaced with the latest long-form company narrative.
- **Services:** Updated to 4 cases:
  1. Fintech Innovations (Mobeewave)
  2. Visualización de Microcomponentes Global (TechInsights)
  3. IT Operations & Security Leadership (Multiple Companies)
  4. Innovation in the Financial Sector (Morgan Stanley + others)
- **Fallback HTML:** Updated `index.html` fallback text to match translations.

### ✅ CTAs and Footer Links Improved
- **Schedule A Call:** Now uses `mailto:info@garnetcs.com` in both nav and hero.
- **Footer useful links:** Now point to real anchors:
  - Home/Inicio → `#hero`
  - About/Nosotros → `#about`
  - Services/Servicios → `#services`
  - Others → `#contact`
- **Team roles:** Hidden for now (names only).

### ✅ SEO & Sharing Metadata Upgraded
- **Meta description:** Updated to reflect current services.
- **Open Graph:** Added `og:site_name`, `og:locale`, `og:locale:alternate`.
- **Social preview image:** Uses absolute URL `https://garnetcs.com/assets/images/logo.png`.
- **Twitter cards:** Added `twitter:*` metadata.

### ✅ Safer Deployment Excludes
- **Deploy script:** `deploy.sh` now excludes local artifacts:
  - `*/.DS_Store`
  - `aws-config.txt`
  - `cf-config-*.json`
- **Action recommended once:** remove any previously uploaded local artifacts from the S3 bucket.

---

## 📋 Earlier Changes (January 25-26, 2026)

### ✅ Contact Section - "Drop Us a Line"
- **Added:** Complete "Drop Us a Line" section with 4 info cards
- **Cards Include:**
  1. Address - Digital nomad information
  2. Email Us - Contact email with encryption options
  3. Privacy - Communication details
  4. Always Available - Work hours flexibility
- **Design:** Matches Figma specifications exactly
- **Icons:** SVG format with proper MIME types

### ✅ Icon System Fixed
- **Problem:** Icons were SVG files with `.png` extensions
- **Solution:** Renamed all icon files from `.png` to `.svg`
- **Updated Files:**
  - `icon-1.svg` through `icon-6.svg` (How We Work section)
  - `icon-location.svg`, `icon-envelope.svg`, `icon-lock.svg`, `icon-clock.svg` (Contact section)
- **JavaScript:** Updated `main.js` to reference `.svg` files
- **Deploy Script:** Added SVG content-type handling

### ✅ Hero Section Background
- **Added:** `hero-background.png` as hero section background
- **Styling:** Light gray overlay (30% opacity) for text readability
- **CSS:** Background cover, center positioned, no-repeat

### ✅ Favicon
- **Current:** Using `logo.png` 
- **Note:** User wants just the "G" letter - pending custom favicon creation
- **Format:** PNG with multiple sizes (16x16, 32x32)

### ✅ Contact Form
- **Status:** Temporarily hidden (commented out)
- **Reason:** No backend implementation yet
- **Location:** `index.html` lines 231-254 (commented)
- **Future:** Will be re-enabled when backend/Lambda is configured

### ✅ Translations
- **Languages:** Complete English and Spanish translations
- **Structure:** `translations.js` with nested object structure
- **Dynamic Content:** All sections render dynamically based on language selection
- **Sections Translated:**
  - Navigation
  - Hero
  - About
  - Services (3 case studies)
  - Portfolio (6 projects)
  - Team (7+ members)
  - How We Work (6 features)
  - Contact (form + info cards)
  - Footer

---

## 🚀 AWS Infrastructure

### S3 Bucket
- **Name:** `garnetcs.com`
- **Region:** `us-east-1`
- **Configuration:** Static website hosting enabled
- **Permissions:** Public read access via bucket policy

### CloudFront Distribution
- **ID:** `E2VL43N95HPDEF`
- **Domain:** `d1xbzinnq45525.cloudfront.net`
- **Status:** Deployed and operational
- **SSL:** Default CloudFront certificate (custom domain pending)
- **Cache:** Configured with proper headers for HTML, CSS, JS, images

### SSL Certificate
- **ARN:** `arn:aws:acm:us-east-1:590447489888:certificate/98e26643-ddb7-40f6-bfe8-a9b7754b951c`
- **Status:** ✅ ISSUED & ACTIVE
- **Domains:** garnetcs.com, www.garnetcs.com
- **Validation:** ✅ DNS CNAME records validated

---

## 📁 Project Structure

```
web-garnetcs/
├── index.html                    # Main landing page
├── assets/
│   ├── css/
│   │   └── styles.css           # All styling (responsive)
│   ├── js/
│   │   ├── main.js              # Core functionality + dynamic rendering
│   │   └── translations.js      # Bilingual content (EN/ES)
│   └── images/
│       ├── hero-background.png  # Hero section background
│       ├── logo.png             # Main logo + favicon
│       ├── icon-1.svg → icon-6.svg     # How We Work icons
│       ├── icon-location.svg    # Contact card icons
│       ├── icon-envelope.svg
│       ├── icon-lock.svg
│       └── icon-clock.svg
├── deploy.sh                    # Automated deployment script
├── update-cloudfront.sh         # CloudFront custom domain updater
├── test-icons.html             # Debug page for icon testing
├── README.md                    # Project documentation
├── QUICKSTART.md               # Deployment guide
├── aws-config.txt              # AWS resource IDs
└── UPDATE_NOTES.md             # This file
```

---

## 🎨 Design Specifications

### Colors
- **Primary Red:** `#8B0000`
- **Secondary Red:** `#B22222`
- **Gray:** `#86868C`
- **Dark:** `#353535`
- **Light:** `#FAFAFA`
- **White:** `#FFFFFF`

### Typography
- **Montserrat:** Headings and emphasis
- **Open Sans:** Body text alternative
- **Source Sans Pro:** Primary body text

### Responsive Breakpoints
- **Mobile:** < 480px
- **Tablet:** 481px - 768px
- **Desktop:** > 768px

---

## 🔧 Technical Details

### Dynamic Rendering
All dynamic content is rendered via JavaScript on page load:
- `renderPortfolioItems()` - Portfolio carousel
- `renderTeamMembers()` - Team grid
- `renderFeatures()` - How We Work section
- `renderContactInfo()` - Drop Us a Line cards
- `renderFooterLinks()` - Footer navigation

### Language Switching
- Stored in `localStorage` as `preferredLanguage`
- Auto-detects browser language on first visit
- Switches between EN/ES with instant re-rendering

### Image Optimization
- **SVG:** Icons (scalable, small file size)
- **PNG:** Photos, logos, backgrounds
- **Loading:** Lazy loading enabled for all images
- **Cache:** 1 year for images, 5 minutes for HTML

---

## 🌐 DNS Configuration ✅ COMPLETED

### DNS Records Added (OpenSRS)

**SSL Certificate Validation:**
```
Type: CNAME
Host: _7b49be5f4ec6fc5662db298038d0158b
Value: _fd4b78cb7a57a1eac8264ae59f58e256.jkddzztszm.acm-validations.aws.

Type: CNAME
Host: _c867cb4ae3cae93ce9ab8c0e810ce2b3.www
Value: _2c22f4710820b9307cf6f6813e05b9ca.jkddzztszm.acm-validations.aws.
```

**Website (After SSL Validated):**
```
Type: CNAME
Host: @ (or blank)
Value: d1xbzinnq45525.cloudfront.net

Type: CNAME
Host: www
Value: d1xbzinnq45525.cloudfront.net
```

---

## 📝 Pending Tasks

### High Priority
- [ ] Create custom "G" favicon (32x32 or 64x64 PNG)

### Medium Priority
- [ ] Implement contact form backend (AWS Lambda + SES) or booking link
- [ ] Add Google Analytics tracking (if desired)
- [ ] Optimize `assets/images/hero-background.png` file size (currently ~1.6MB)
- [ ] Add more team member photos

### Low Priority
- [ ] Add portfolio project images
- [ ] Add client/partner logos to Logos section
- [ ] Consider WebP format for images
- [ ] Add sitemap.xml and robots.txt

---

## 🚢 Deployment Commands

### Deploy to S3 + CloudFront
```bash
cd /Users/fsulbaran/Dev/web-garnetcs
./deploy.sh
```

### Update CloudFront (After SSL Validation)
```bash
./update-cloudfront.sh
```

### Test Locally
```bash
python3 -m http.server 8000
# Visit: http://localhost:8000
```

### Check SSL Certificate Status
```bash
aws acm describe-certificate \
  --certificate-arn arn:aws:acm:us-east-1:590447489888:certificate/98e26643-ddb7-40f6-bfe8-a9b7754b951c \
  --region us-east-1 \
  --query 'Certificate.Status' \
  --output text
```

---

## 🐛 Known Issues

### Resolved ✅
- ~~Icons not showing~~ → Fixed by renaming .png to .svg
- ~~Contact form visible but non-functional~~ → Hidden until backend ready
- ~~Hero background too dark~~ → Reduced overlay to 30%
- ~~Favicon too small/complex~~ → Using logo.png temporarily

### Active Issues
- **AWS Credentials:** May need periodic refresh (`aws sso login` or `aws configure`)
- **Favicon:** Current logo.png needs replacement with simple "G" icon

---

## 💡 Tips & Best Practices

### Making Changes
1. Edit files locally
2. Test with `python3 -m http.server 8000`
3. Verify changes at http://localhost:8000
4. Deploy with `./deploy.sh`
5. Wait 2-3 minutes for CloudFront cache invalidation

### Adding New Images
1. Save to `/assets/images/`
2. Use lowercase, hyphenated names
3. Optimize file size before uploading
4. Update deploy.sh if new file type (e.g., WebP)

### Updating Content
- **Static text:** Edit `index.html`
- **Dynamic/translatable text:** Edit `translations.js`
- **Styling:** Edit `assets/css/styles.css`
- **Functionality:** Edit `assets/js/main.js`

---

## 📞 Support & Resources

- **AWS Console:** https://console.aws.amazon.com
- **CloudFront Distribution:** https://console.aws.amazon.com/cloudfront/v3/home#/distributions/E2VL43N95HPDEF
- **S3 Bucket:** https://s3.console.aws.amazon.com/s3/buckets/garnetcs.com
- **Domain Management:** https://manage.opensrs.net/i

---

## 📊 Cost Estimate

**Monthly AWS Costs** (for <1000 visits/day):
- S3: ~$0.10
- CloudFront: FREE (within 1TB/month free tier)
- ACM SSL: FREE
- **Total:** ~$0.10/month

---

**End of Update Notes**
