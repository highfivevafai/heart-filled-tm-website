# 🎤 HeartFilled Toastmasters Website

A modern, professional website for HeartFilled Toastmasters club built with Next.js 16, featuring an advanced contact form with email notifications, bot protection, and automated lead management.

## 🌟 Features

### Core Features
- **📱 Responsive Design** - Mobile-first, works on all devices
- **⚡ Server-Side Rendering** - Fast page loads with Next.js 16
- **🎨 Modern UI** - Clean, professional design with Tailwind CSS
- **📍 Interactive Map** - Mapbox integration for club location

### Contact Form System
- **🤖 Bot Protection** - Dual-layer protection:
  - Honeypot field for simple bots
  - Cloudflare Turnstile for advanced bot detection
- **📧 Email Notifications** - Powered by Resend:
  - Confirmation email to users
  - Lead notification to admins
- **📊 Lead Management** - Automatic Google Sheets integration
- **✅ Validation** - Field length validation & input sanitization
- **🔒 Security** - Server-side processing only
- **📝 Metadata Tracking** - Captures IP, user agent, submission ID

### Pages
- **Home** - Hero section, testimonials, club highlights
- **About** - Club information and mission
- **Contact** - Advanced contact form with multi-step validation
- **Visit Our Club** - Meeting details and location map

## 🛠️ Tech Stack

### Framework & Core
- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**

### Libraries & Services
- **Resend** - Email delivery service
- **React Email** - Email templating
- **Cloudflare Turnstile** - Bot protection
- **Google Sheets API** - Lead storage via webhook
- **Mapbox GL JS** - Interactive maps
- **React Hot Toast** - Toast notifications

## 📋 Prerequisites

- Node.js 18+ and npm
- Resend account (free tier available)
- Cloudflare Turnstile keys
- Google Apps Script webhook URL
- Mapbox access token

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd heartfilled-tm-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the root directory:

```env
# Mapbox (for location map)
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token

# Google Sheets Integration
GOOGLE_SHEET_WEBHOOK=your_google_apps_script_webhook_url

# Cloudflare Turnstile (Bot Protection)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET=your_turnstile_secret_key

# Resend Email Service
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=your-admin-email@example.com
FROM_EMAIL=noreply@yourdomain.com  # or onboarding@resend.dev for testing
```

**See detailed setup guides:**
- 📧 Email setup: [RESEND_SETUP.md](./RESEND_SETUP.md)
- 🔐 For other services, see **Environment Variables** section below

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 5. Build for Production
```bash
npm run build
npm start
```

## 🔐 Environment Variables Setup

### Mapbox Token
1. Sign up at [mapbox.com](https://mapbox.com)
2. Create a new access token
3. Add to `NEXT_PUBLIC_MAPBOX_TOKEN`

### Google Sheets Webhook
1. Create a Google Sheet for storing leads
2. Go to **Extensions > Apps Script**
3. Create a webhook script that accepts POST requests
4. Deploy as web app and copy URL
5. Add to `GOOGLE_SHEET_WEBHOOK`

**Example Google Apps Script:**
```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.submissionId,
    data.submittedAt,
    data.firstName,
    data.lastName,
    data.email,
    data.phone,
    data.referralSource,
    data.about,
    data.ip,
    data.userAgent
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Cloudflare Turnstile
1. Sign up at [cloudflare.com](https://cloudflare.com)
2. Go to **Turnstile** section
3. Create a new site
4. Copy **Site Key** → `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
5. Copy **Secret Key** → `TURNSTILE_SECRET`

### Resend Email
**See complete guide: [RESEND_SETUP.md](./RESEND_SETUP.md)**

Quick setup:
1. Sign up at [resend.com](https://resend.com)
2. Create API key → `RESEND_API_KEY`
3. Set admin email → `ADMIN_EMAIL`
4. Use `onboarding@resend.dev` for testing or set up custom domain

## 📁 Project Structure

```
heartfilled-tm-website/
├── app/
│   ├── (root)/              # Main website routes
│   │   ├── page.tsx         # Home page
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact page
│   │   └── visit-our-club/  # Visit page
│   ├── (dashboard)/         # Future admin dashboard
│   ├── actions/             # Server actions
│   │   └── submitContact.ts # Contact form handler
│   ├── globals.css          # Global styles
│   └── layout.tsx           # Root layout
├── components/              # React components
│   ├── ContactForm.tsx      # Contact form with validation
│   ├── SubmitButton.tsx     # Custom submit button
│   ├── Hero.tsx             # Hero section
│   ├── Footer.tsx           # Site footer
│   ├── NavBar.tsx           # Navigation bar
│   ├── LocationMap.tsx      # Mapbox integration
│   └── ...
├── emails/                  # Email templates
│   ├── UserConfirmation.tsx # User confirmation email
│   └── AdminNotification.tsx # Admin lead notification
├── public/                  # Static assets
│   ├── icons/               # Logos and icons
│   └── *.png, *.jpg        # Images
├── .env.local              # Environment variables (not in git)
├── RESEND_SETUP.md         # Email setup guide
└── README.md               # This file
```

## 🎯 Key Components

### ContactForm (`components/ContactForm.tsx`)
Advanced contact form with:
- Client-side validation
- Honeypot trap
- Turnstile challenge
- Toast notifications
- Auto-reset on success

### SubmitContact (`app/actions/submitContact.ts`)
Server action that:
1. Validates honeypot
2. Verifies Turnstile token
3. Validates field lengths
4. Sends to Google Sheets
5. Sends confirmation email to user
6. Sends notification email to admin
7. Returns success/error

### Email Templates (`emails/`)
Professional email templates:
- **UserConfirmation** - Personalized thank you message
- **AdminNotification** - Comprehensive lead details

## 🔄 Contact Form Flow

```
User fills form
    ↓
Client-side validation
    ↓
Honeypot check
    ↓
Turnstile verification
    ↓
Submit to server action
    ↓
Server-side validation
    ↓
Turnstile token verification (Cloudflare API)
    ↓
Generate submission ID
    ↓
Capture metadata (IP, user agent)
    ↓
Send to Google Sheets ✅
    ↓
Send confirmation email to user ✅
    ↓
Send notification email to admin ✅
    ↓
Return success → Show toast → Reset form
```

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- **Custom color scheme** matching Toastmasters brand
- **Responsive breakpoints** for all screen sizes
- **Dark mode ready** (can be enabled)

## 🔒 Security Features

- ✅ **Server-side processing** - All sensitive operations on server
- ✅ **Environment variables** - Secrets not committed to git
- ✅ **Honeypot trap** - Catches simple bots
- ✅ **Turnstile verification** - Advanced bot protection
- ✅ **Field validation** - Length and type checking
- ✅ **XSS prevention** - Input sanitization
- ✅ **Rate limiting** - Via Cloudflare Turnstile

## 📧 Email System

### User Confirmation Email
- Personalized greeting
- Professional design
- Mobile-responsive
- Clear messaging

### Admin Notification Email
- All lead information
- Color-coded sections
- Contact details highlighted
- Submission metadata
- Links to Google Sheets

**Rate Limits (Resend Free Tier):**
- 100 emails/day
- 3,000 emails/month
- 2 emails per form submission = 50 leads/day

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in project settings
4. Deploy!

### Environment Variables for Production
Make sure to add all environment variables from `.env.local` to your production environment:
- Vercel: Project Settings → Environment Variables
- Add each variable individually
- Redeploy after adding variables

### Custom Domain Setup (Resend)
For production emails:
1. Add your domain in Resend dashboard
2. Add DNS records (SPF, DKIM, DMARC)
3. Verify domain
4. Update `FROM_EMAIL` environment variable

## 🧪 Testing

### Test Contact Form Locally
1. Start dev server: `npm run dev`
2. Navigate to `/contact`
3. Fill form with your email
4. Complete Turnstile challenge
5. Submit form
6. Check your inbox for confirmation
7. Check admin inbox for notification
8. Verify entry in Google Sheets

### Test Checklist
- [ ] Form validation works
- [ ] Turnstile challenge appears
- [ ] Honeypot catches bots
- [ ] Success toast appears
- [ ] Form resets after submission
- [ ] User receives confirmation email
- [ ] Admin receives notification email
- [ ] Data appears in Google Sheets

## 🐛 Troubleshooting

### Emails Not Sending
- Check `RESEND_API_KEY` is correct
- Restart dev server after changing env vars
- Check Resend dashboard for errors
- Verify rate limits not exceeded

### Turnstile Not Working
- Check `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is correct
- Verify `TURNSTILE_SECRET` is correct
- Check domain is allowed in Turnstile settings

### Google Sheets Not Updating
- Test webhook URL with Postman/curl
- Check Apps Script deployment is accessible to "Anyone"
- Verify webhook URL in environment variables

### Map Not Loading
- Check `NEXT_PUBLIC_MAPBOX_TOKEN` is set
- Verify token has correct permissions
- Check browser console for errors

## 📚 Additional Documentation

- [Resend Setup Guide](./RESEND_SETUP.md) - Complete email setup instructions
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Resend Docs](https://resend.com/docs)
- [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/)

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## 🤝 Contributing

This is a private project for HeartFilled Toastmasters. For changes or suggestions, please contact the project maintainer.

## 📄 License

Private project - All rights reserved.

## 🆘 Support

For issues or questions:
1. Check [RESEND_SETUP.md](./RESEND_SETUP.md) for email issues
2. Review this README for setup questions
3. Contact project maintainer

---

**Built with ❤️ for HeartFilled Toastmasters**
