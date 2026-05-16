# 🌿 House of Appetite — Website

**Theme:** Warm wood + tropical botanicals + antigravity floating elements  
**Stack:** Pure HTML5 · CSS3 · Vanilla JS (no dependencies, no build step)

---

## 📁 File Structure

```
house-of-appetite/
├── index.html          ← Home/landing page
├── menu.html           ← Full interactive menu
├── css/
│   └── style.css       ← All styles (themed variables, animations)
├── js/
│   └── main.js         ← Nav scroll, tab switching, reveal animations
└── README.md           ← This file
```

---

## ✨ Features Implemented

### Design
- **Color palette**: Wood brown (#3d2b1f, #6b4226) + botanical greens (#1a3d2b, #2d6a4f)
- **Typography**: Cormorant Garamond (elegant serif headings) + DM Sans (clean body)
- **Floating nav pill** — sticky top, glassmorphism blur on scroll
- **Antigravity animations** — category cards gently float up/down in waves
- **Floating Chef's Special badge** — right side, bounces smoothly, links to menu
- **Leaf animations** — decorative botanical emojis float in hero background
- **Ticker strip** — Chef's Specials scroll continuously across screen
- **Scroll reveal** — cards and dish items fade in on scroll (Intersection Observer)

### Pages
**Home (index.html)**
- Hero with animated leaf botanicals, rating badge
- About section with arched botanical window visual
- 6-category grid with floating card animation
- Chef's Specials ticker
- 5 featured dishes list
- Ambience showcase section
- Contact/directions section
- Sticky floating badge → menu

**Menu (menu.html)**
- Sticky tab navigation with 9 categories
- All menu items from the restaurant organized by category
- Veg/Non-Veg badges (green vs red)
- Chef's Special callouts
- Responsive 2-column grid layouts

---

## 🚀 How to Run

Simply open `index.html` in any browser — no server needed.

For local development with live reload:
```bash
npx serve .
# or
python3 -m http.server 8080
```

---

## 🔧 Next Steps for Full-Stack

If you want a full backend later, here's the recommended stack:

### Option A: Simple (Recommended)
- **Frontend**: This HTML/CSS/JS (as-is)
- **Backend**: Node.js + Express
- **Database**: MongoDB (menu, orders, reservations)
- **Hosting**: Vercel (frontend) + Railway (backend)

### Option B: Modern Stack
- Convert to **Next.js** (React) — reuse all design tokens
- **Tailwind CSS** for utility classes
- **Prisma + PostgreSQL** for data
- **Stripe** for online orders

### Features to Add
1. Online ordering system
2. Table reservation form
3. Admin panel (add/edit menu items)
4. WhatsApp order button
5. Google Maps embed (replace placeholder)
6. Instagram feed integration
7. Customer reviews section
8. Loyalty/stamp card system

---

## 🎨 CSS Variables (customize here)

```css
--wood-dark: #3d2b1f;     /* Darkest wood */
--wood-mid: #6b4226;      /* Medium wood */
--wood-light: #c49a6c;    /* Light wood grain */
--green-deep: #1a3d2b;    /* Forest green */
--green-mid: #2d6a4f;     /* Accent green */
--green-sage: #52796f;    /* Sage green */
--green-light: #95c9a8;   /* Light botanical */
--cream: #faf7f2;         /* Background */
--gold: #c9a84c;          /* Rating stars */
```

---

*Built for House of Appetite · Matunga, Mumbai · 4.8★*
