# 🟣 Violet Astro Blog

A modern, elegant personal portfolio and blog website for Kevin Arriaga, built with **Astro 5** and styled with **TailwindCSS**. The site features a beautiful violet/purple color scheme and showcases professional experience, projects, and personal insights.

## ✨ Features

- **🎨 Violet Theme**: Beautiful purple color scheme throughout
- **📱 Responsive Design**: Optimized for desktop and mobile devices  
- **⚡ Fast Performance**: Built with Astro for optimal loading speeds
- **🧩 Component Architecture**: Modular, reusable Astro components
- **💼 Professional Sections**:
  - Personal stats and information
  - Social media links (GitHub, LinkedIn)
  - About me section
  - Latest projects showcase
  - Work experience timeline
  - Online status indicator

## 🚀 Tech Stack

- **Framework**: [Astro 5.10.0](https://astro.build/)
- **Styling**: [TailwindCSS 3.4.0](https://tailwindcss.com/)
- **Icons**: Custom SVG icon components
- **TypeScript**: Full TypeScript support
- **Build Tools**: PostCSS, Autoprefixer

## 🏗️ Project Structure

```text
violet-astro-blog/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   ├── background.svg
│   │   └── icons/           # Custom SVG icons
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Welcome.astro
│   │   ├── profile/         # Profile section components
│   │   │   ├── ProfileAboutMe.astro
│   │   │   ├── ProfileEducation.astro
│   │   │   ├── ProfileLatestProjects.astro
│   │   │   ├── ProfileSocials.astro
│   │   │   ├── ProfileStatsCard.astro
│   │   │   ├── ProfileStatus.astro
│   │   │   └── ProfileWorkExperience.astro
│   │   └── ui/
│   │       └── GenericCard.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       └── formatDate.ts
├── astro.config.mjs
├── tailwind.config.js
└── package.json
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd violet-astro-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📜 Available Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally before deploying |
| `npm run astro` | Run Astro CLI commands |

## 🎯 Planned Features

- **📝 Blog Section**: Personal blog posts and technical articles
- **🔍 Search Functionality**: Find content across the site
- **📊 Projects Gallery**: Detailed project showcases
- **🌙 Dark Mode**: Theme switching capabilities
- **📧 Contact Form**: Direct communication channel

## 🎨 Design Philosophy

The site embraces a **violet/purple aesthetic** that reflects creativity and professionalism. The design focuses on:

- **Clean Typography**: Easy-to-read fonts and proper hierarchy
- **Spacious Layout**: Comfortable white space and clear sections
- **Interactive Elements**: Subtle hover effects and smooth transitions
- **Accessibility**: Proper ARIA labels and semantic HTML

## 👨‍💻 About Kevin Arriaga

Full-stack web developer with 2+ years of experience, specializing in modern web technologies. Originally from Venezuela, now building the future in the USA. Passionate about creating elegant solutions and sharing knowledge through code.

**Connect with Kevin:**
- 🐙 [GitHub](https://github.com/Warchafter)
- 💼 [LinkedIn](https://www.linkedin.com/in/kevin-arriaga-solis/)

## 🚀 Deployment

This site can be deployed to any static hosting platform:

- **Vercel**: `npm run build` + Vercel CLI
- **Netlify**: Connect GitHub repository
- **GitHub Pages**: Use GitHub Actions workflow
- **Cloudflare Pages**: Connect repository

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with 💜 using Astro and TailwindCSS**
