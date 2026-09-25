# 🧪 রসায়ন কারিগর (Rosayon Karigor)

> **"বোঝো। প্রয়োগ করো। পারদর্শী হও।"**  
> *More than Memorization. A Deeper Understanding.*

An advanced, interactive web application built with precision for my classmate **Farzaad Sawrar**'s (Chemical Engineering, BUET) premier chemistry tuition and mentorship platform — **রসায়ন কারিগর (Rosayon Karigor)**.

This platform empowers students in **HSC 27**, **HSC 28**, and **University Admission (BUET / Engineering, Medical & Varsity 'A' Unit)** across Bangladesh to overcome chemistry phobia through deep, visual, first-principles understanding rather than mechanical rote memorization.

---

## 👨‍🏫 About the Educator & Platform

**Farzaad Sawrar** is a graduate of **BUET (Department of Chemical Engineering)** and the founder of **রসায়ন কারিগর**. Having mentored hundreds of high-achieving board examinees and top-tier admission test rankers, he developed the signature **Karigor Method™** to break complex reaction mechanisms, atomic orbitals, and chemical equilibrium down into intuitive, visual logic.

- 🌐 **Facebook Page**: [facebook.com/roshayonkarigor](https://www.facebook.com/roshayonkarigor)
- 💬 **Messenger**: [m.me/roshayonkarigor](https://m.me/roshayonkarigor)
- 📧 **Official Email**: [farzaadp68@gmail.com](mailto:farzaadp68@gmail.com)
- 🏢 **Offline Classroom**: Green Road, Farmgate, Dhaka (শীতাতপ নিয়ন্ত্রিত আধুনিক কেয়ার ক্লাসরুম)

---

## ✨ Key Features

### 1. ⚛️ Interactive 3D Canvas Molecular Physics Engine
- Custom lightweight 3D canvas engine with mouse and touch inertial physics.
- Real-time rotation and orbital rendering for **Benzene ($C_6H_6$)**, **Water ($H_2O$)**, **Methane ($CH_4$)**, and **Ethanol ($C_2H_5OH$)**.
- Dynamic scientific badges detailing molecular geometry, bond angles, and hybridization states.

### 2. 🧪 Interactive Chemistry Lab Apparatus Simulation
- Custom SVG distillation apparatus pipeline: Bunsen burner, round-bottom boiling flask, condenser, and collection flask.
- Realistic chemical boiling bubble physics, vapor condensation, and color transformation midway inside the cooling jacket.

### 3. 🧠 The Karigor Method™ (কারিগর মেথড)
- 5-step intuitive learning framework:  
  `01 Understand (উপলব্ধি)` ➔ `02 Visualize (দৃষ্টিগোচর)` ➔ `03 Connect (সংযোগ)` ➔ `04 Practice (অনুশীলন)` ➔ `05 Master (পারদর্শিতা)`
- Side-by-side comparison of traditional blind memorization vs. the Karigor conceptual approach.

### 4. 🎥 Interactive Classroom Experience & Demo
- Digital classroom interface demonstrating modern lecture workflows with digital whiteboards and 3D molecular walkthroughs.
- Lecture chapter navigation covering sigma/pi bonds, orbital overlap, and reaction pathways.

### 5. 📚 Free Chemistry Resource Library (উন্মুক্ত লাইব্রেরি)
- Searchable and categorized PDF concept books, Organic reaction roadmaps, past 20-year Board & Admission question banks, and weekly problem sets.
- Built-in preview modal and instant download triggers.

### 6. 🏆 Meet the Educator (শিক্ষক পরিচিতি)
- Farzaad Sawrar's academic journey at BUET, pedagogical philosophy, and digital signature.
- Interactive timeline covering teaching career, university achievements, and core syllabus specializations.

### 7. ❓ Comprehensive FAQ (প্রশ্নোত্তর) with Instant Live Search
- 11 high-frequency questions covering target batches, online/offline classroom setups, class recordings, 24/7 doubt clearing, weekly exams, and fees.
- Real-time search with popular topic quick-chips (`HSC 27`, `HSC 28`, `এডমিশন`, `জৈব রসায়ন`, `অফলাইন ক্লাসরুম`, `কোর্স ফি`).
- Category filters with live counter badges.

### 8. 📝 Streamlined Admission & Direct Messaging
- Instant redirection to official Facebook Messenger (`m.me/roshayonkarigor`) for real-time enrollment guidance and batch scheduling.

---

## 🛠️ Tech Stack & Architecture

- **Core Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/) (HashRouter for zero-config static hosting)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: 
  - Bengali: **Hind Siliguri** (Google Fonts)
  - English: **Plus Jakarta Sans** & **Fraunces Serif** (Google Fonts)
- **Code Quality**: [Oxlint](https://oxc.rs/) (Extremely fast Rust-based linter)

---

## 📁 Project Structure

```text
rosayon_karigor/
├── public/                 # Static assets (logo, Farzaad's photo, favicon)
├── src/
│   ├── assets/             # SVG graphics and imagery
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.tsx      # Navigation bar with desktop & mobile drawer
│   │   ├── Hero.tsx        # Hero section with interactive 3D molecule
│   │   ├── MoleculeCanvas.tsx # 3D rotational molecule engine
│   │   ├── KarigorMethod.tsx  # Pedagogical methodology breakdown
│   │   ├── MeetTeacher.tsx # Educator story, credentials & timeline
│   │   ├── ClassExperience.tsx# Interactive lab apparatus & video demo
│   │   ├── ResourceLibrary.tsx# PDF downloads & concept notes
│   │   ├── FAQSection.tsx  # Homepage featured FAQs
│   │   ├── Footer.tsx      # Bilingual brand footer & navigation links
│   │   └── ...
│   ├── data/               # Structured data files
│   │   ├── faqData.ts      # 11 comprehensive Q&As
│   │   ├── resourcesData.ts# Chemistry sheets & guides
│   │   ├── timelineData.ts # Educational experience & modules
│   │   └── ...
│   ├── pages/              # Dedicated route pages
│   │   ├── HomePage.tsx    # Complete landing experience
│   │   ├── MethodPage.tsx  # The Karigor Method deep dive
│   │   ├── DemoPage.tsx    # Demo classes & video lectures
│   │   ├── TeacherPage.tsx # Educator profile & credentials
│   │   ├── FAQPage.tsx     # Full FAQ page with live search & categories
│   │   └── EnrollPage.tsx  # Direct admission redirect
│   ├── types/              # TypeScript definitions & interfaces
│   ├── App.tsx             # Root layout & route configuration
│   └── main.tsx            # Vite entry point
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Local Development Setup

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) installed on your system.

### 1. Clone the Repository
```bash
git clone https://github.com/reza-05/rosayon_karigor.git
cd rosayon_karigor
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application live with Hot Module Replacement (HMR).

### 4. Run Linter
```bash
npm run lint
```

### 5. Build for Production
```bash
npm run build
```
This compiles TypeScript and generates a highly optimized static bundle inside the `dist/` directory in under 1 second.

### 6. Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 How to Deploy Online

This project is configured as a Single Page Application (SPA) using `HashRouter`, making it compatible with **any static host** without complex server rewrites.

### Option A: Deploy on Vercel (Recommended - Fastest & 100% Free)
1. Go to [vercel.com](https://vercel.com/) and log in with your GitHub account.
2. Click **"Add New"** ➔ **"Project"**.
3. Select your repository: `reza-05/rosayon_karigor`.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your site will be live on a `*.vercel.app` URL with free SSL within 1 minute!

### Option B: Deploy on Netlify
1. Log in to [netlify.com](https://www.netlify.com/) with GitHub.
2. Click **"Add new site"** ➔ **"Import an existing project"**.
3. Choose `reza-05/rosayon_karigor`.
4. Set build command to `npm run build` and publish directory to `dist`.
5. Click **"Deploy site"**.

### Option C: Deploy on Cloudflare Pages
1. Log in to Cloudflare Dashboard ➔ **Workers & Pages**.
2. Click **"Create application"** ➔ **"Pages"** ➔ **"Connect to Git"**.
3. Select `reza-05/rosayon_karigor`.
4. Preset: `Vite`, Build output: `dist`.
5. Click **"Save and Deploy"**.

---

## 👨‍💻 Author & Credits

- **Platform Concept & Chemistry Content**: [Farzaad Sawrar](https://www.facebook.com/roshayonkarigor) (BUET Chemical Engineering)
- **Web Application Development & Design**: [Md. Shifat Reza](https://github.com/reza-05)
- **Repository**: [reza-05/rosayon_karigor](https://github.com/reza-05/rosayon_karigor)

---

## 📄 License
© 2025–2026 **রসায়ন কারিগর (Rosayon Karigor)**. All rights reserved.
