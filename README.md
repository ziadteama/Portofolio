# Ziad Teama - Portfolio

A high-performance portfolio website that showcases my journey as an electrical engineering student, full-stack developer, and triathlete. Built with cutting-edge web technologies and designed with a sporty, dynamic aesthetic that reflects my athletic discipline and technical expertise.

## 🚀 Tech Stack

This portfolio is built with:

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework (alpha)
- **Framer Motion** - Smooth animations and interactions
- **Lucide React** - Beautiful icon library

## ⚡ Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Triathlete Theme** - Unique sporty aesthetic with neon highlights (blue/green/orange)
- **Smooth Animations** - Framer Motion powered interactions
- **Performance Focused** - Fast loading and optimized assets
- **Dark Mode** - Sleek dark theme throughout
- **Project Showcase** - Interactive race checkpoint style timeline
- **Skills Display** - Energy bar style skill meters
- **Contact Form** - Get in touch easily

## 🎨 Design Philosophy

This portfolio breaks away from typical developer portfolios by incorporating my triathlete identity:
- **Sport-inspired color palette**: Neon blue (#00d4ff), green (#00ff88), and orange (#ff6b35)
- **Energy bar progress meters** for skills
- **Race checkpoint timeline** for projects
- **Athletic typography** with Orbitron and Rajdhani fonts
- **Motion-first design** reflecting constant forward momentum

## 🏃 Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/ziadteama/Portofolio.git
cd Portofolio
npm install
```

Add your profile image:
- Place your photo as `profile.jpg` in the `/public` folder

Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio in the browser.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts and navigation
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Hero.tsx            # Hero section with profile photo
│   ├── About.tsx           # About section with identity cards
│   ├── Skills.tsx          # Skills with energy bar meters
│   ├── Projects.tsx        # Project timeline
│   ├── Contact.tsx         # Contact form
│   └── nav.tsx             # Navigation bar
├── public/
│   └── profile.jpg         # Your profile photo (add this!)
└── tailwind.config.ts      # Tailwind configuration with custom theme
```

## 🎯 Customization

Update your information in these files:

1. **Hero Section** (`components/Hero.tsx`)
   - Update LinkedIn URL
   - Update email address
   - Modify tagline and description

2. **About Section** (`components/About.tsx`)
   - Update your bio
   - Adjust triathlon stats

3. **Skills Section** (`components/Skills.tsx`)
   - Add/modify your skills and proficiency levels

4. **Projects Section** (`components/Projects.tsx`)
   - Add your actual projects
   - Update project details and links

5. **Contact Section** (`components/Contact.tsx`)
   - Update contact information
   - Configure form endpoint

## 🌈 Color Palette

```css
--sport-blue: #00d4ff    /* Primary accent - swimming */
--sport-green: #00ff88   /* Secondary accent - cycling */
--sport-orange: #ff6b35  /* Tertiary accent - running */
```

## 📝 License

This project is open source and available under the MIT License.
