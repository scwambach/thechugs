# 🍺 THE CHUGS - Official Website

> _"We're headed to the land of sky blue waters. You comin' with us?"_

## 🎸 What's This All About?

The Chugs make punk music about Hamm's beer. We only make music about our passions, and we are exclusively passionate about Hamm's beer. We fully embody the golden brew, and we're headed to the land of sky blue waters.

**This is the website for THAT punk band!** 🤘

---

## 🛠️ Tech Stack (The Gear Behind the Beer)

This bad boy is built with some seriously refreshing technology:

- **⚡ Next.js 16** - The framework that's as smooth as a cold one
- **🎨 Sanity CMS** - Content management that doesn't cramp our style
- **💅 SCSS** - Styling that's punk as hell
- **🛒 Snipcart Integration** - Merch sales for your favorite brew crew
- **📦 Printful API** - T-shirts fresh off the press
- **🖼️ Image Gallery** - Check out those sweet, sweet band photos
- **📧 Contact Forms** - Hit us up (we might be too drunk to respond)
- **🔍 SEO Optimized** - Google can find us even when we're lost

---

## 🚀 Getting Started (Crack Open the Dev Environment)

### Prerequisites

You'll need:
- **Node.js** (Latest LTS version recommended)
- **npm** (No yarn allowed - check package.json, we're serious)
- A deep, unwavering love for Hamm's beer 🍺

### Installation

```bash
# Clone this beauty
git clone https://github.com/scottwambach/thechugs.git

# Navigate to the promised land
cd thechugs

# Install the dependencies
npm install
```

### Development Commands

```bash
# 🎸 Run the dev server (just the frontend)
npm run dev

# 🎛️ Run the full stack (frontend + Sanity Studio)
npm run fullstack

# 🏗️ Build for production
npm run build

# 🚀 Start production server
npm start

# 🧪 Run tests
npm run test

# 🧹 Format code
npm run check-format

# 🔍 Lint your code
npm run check-lint

# 🤖 Cypress testing (open)
npm run cypress:open

# 🤖 Cypress testing (run)
npm run cypress:run
```

---

## 📁 Project Structure (Where the Magic Happens)

```
thechugs/
├── src/
│   ├── app/              # Next.js 13+ app directory
│   │   ├── (site)/       # Main website pages
│   │   ├── api/          # API routes (email, products, etc.)
│   │   └── studio/       # Sanity Studio
│   ├── components/       # Reusable components
│   │   ├── blocks/       # Page blocks (Gallery, Events, etc.)
│   │   ├── global/       # Header, Footer, Nav
│   │   └── modules/      # Smaller reusable pieces
│   ├── styles/           # SCSS files (punk rock styles)
│   ├── utils/            # Helper functions
│   └── queries/          # Sanity GROQ queries
├── sanity/               # Sanity schema definitions
│   ├── doctypes/         # Content types
│   └── pageBlocks/       # Block schemas
├── public/               # Static assets
└── cypress/              # E2E tests
```

---

## 🎯 Key Features

### 🖼️ Gallery with Modal
Click a thumbnail, get a beautiful modal. Navigate with arrows.

### 🛍️ Merch Store
Powered by Printful and Snipcart - buy our gear, fund our beer.

### 📅 Events
Never miss a show. We promise to show up (probably).

### 📰 Articles & News
Read about our adventures in the land of sky blue waters.

### 🎵 Music & Videos
Listen to our tunes, watch our chaos.

### 📧 Contact Form
Reach out. We'll get back to you between gulps.

---

## 🌍 Environment Variables

Create a `.env.local` file with:

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token

# Snipcart
NEXT_PUBLIC_SNIPCART_API_KEY=your_snipcart_key

# Printful
PRINTFUL_API_KEY=your_printful_key

# Google (if using sheets/analytics)
GOOGLE_CREDENTIALS=your_credentials

# Email
EMAIL_HOST=your_email_host
EMAIL_USER=your_email
EMAIL_PASS=your_password
```

---

## 🎨 Styling Philosophy

We keep it simple:
- **SCSS Modules** for organization
- **Mobile-first** responsive design
- **Accessible** (even when we're not)
- **Fast** loading times (unlike our decision-making)

---

## 🧪 Testing

```bash
# Jest unit tests
npm run test

# Cypress E2E tests
npm run cypress:open  # Interactive mode
npm run cypress:run   # Headless mode
```

---

## 🚢 Deployment

This site is built for Vercel deployment (or any platform that supports Next.js):

```bash
npm run build
npm start
```

---

## 🤝 Contributing

Got ideas? Found a bug? Want to add more Hamm's references?

1. Fork it
2. Create your feature branch (`git checkout -b feature/MoreBeer`)
3. Commit your changes (`git commit -m 'Add more beer'`)
4. Push to the branch (`git push origin feature/MoreBeer`)
5. Open a Pull Request

---

## 📜 License

This project is free! Do what you want with it, just don't forget to credit The Chugs.

---

## 🍻 Credits

Built with ❤️ and 🍺 by The Chugs crew.

Special shoutout to Hamm's beer - the real MVP.

---

## 🎵 Fun Facts

- Every commit message is written while thinking about Hamm's
- The color scheme is inspired by Hamm's cans
- 73% of bugs are fixed with beer in hand
- This README took 3 Hamm's to write

---

**Remember: The land of sky blue waters is calling. Answer the call. Drink Hamm's. Listen to The Chugs. 🍺🎸**

---

_Made with punk rock attitude and questionable life choices._
