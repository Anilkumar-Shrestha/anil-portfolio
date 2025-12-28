# Anil Kumar Shrestha - QA Automation Portfolio

A modern, SEO-optimized portfolio website showcasing QA automation expertise, projects, and professional experience.

## 🚀 Features

- **Modern Design**: Clean, dark-themed UI with smooth animations
- **SEO Optimized**: Complete with sitemap.xml, robots.txt, and proper metadata
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Next.js 15 and Tailwind CSS v4
- **Individual Project Pages**: Detailed project showcases with proper URL taxonomy
- **Contact Form**: Integrated contact form for easy communication

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.x or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

## 🛠️ Installation & Setup

### 1. Clone or Initialize the Repository

If you already have the code locally, navigate to the project directory:

```bash
cd qa-portfolio
```

If you need to initialize Git:

```bash
git init
```

### 2. Install Dependencies

Run one of the following commands based on your package manager:

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

If you encounter dependency errors, try:

```bash
npm install --legacy-peer-deps
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 4. Build for Production

```bash
npm run build
```

### 5. Start Production Server

```bash
npm start
```

## 📁 Project Structure

```
qa-portfolio/
├── app/
│   ├── about/              # About page
│   ├── contact/            # Contact page with form
│   ├── experience/         # Professional experience timeline
│   ├── projects/           # Projects listing and individual project pages
│   │   └── [slug]/         # Dynamic project detail pages
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles with Tailwind v4
│   ├── sitemap.ts          # SEO sitemap generation
│   └── robots.ts           # Robots.txt configuration
├── components/
│   └── ui/                 # Reusable UI components (shadcn/ui)
├── public/                 # Static assets (images, etc.)
├── package.json
└── README.md
```

## 🔧 Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Animations**: Framer Motion & @tailwindcss/animate
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: npm

## 🌐 Deploying to Your Domain (anilkumarshrestha.com.np)

### Option 1: Deploy with Vercel (Recommended)

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **Deploy to Production**:
```bash
vercel --prod
```

5. **Configure Custom Domain**:
   - Go to your Vercel project dashboard
   - Navigate to Settings → Domains
   - Add `anilkumarshrestha.com.np`
   - Update your domain's DNS settings with the records provided by Vercel

### Option 2: Deploy with Other Hosting

You can also deploy to:
- **Netlify**: Connect your GitHub repo and deploy
- **Cloudflare Pages**: Similar to Vercel
- **Traditional Hosting**: Build the project and upload the `.next` folder

## 📤 Uploading to GitHub

### 1. Create a New Repository on GitHub

Go to [GitHub](https://github.com/new) and create a new repository (can be private or public).

### 2. Add Remote Origin

```bash
git remote add origin https://github.com/Anilkumar-Shrestha/qa-portfolio.git
```

Replace `qa-portfolio` with your repository name.

### 3. Stage All Files

```bash
git add .
```

### 4. Commit Your Changes

```bash
git commit -m "Initial commit: QA Automation Portfolio"
```

### 5. Push to GitHub

```bash
git branch -M main
git push -u origin main
```

### 6. For Future Updates

```bash
git add .
git commit -m "Your commit message"
git push
```

## 🔒 Environment Variables

If you add any API integrations (contact form backend, analytics, etc.), create a `.env.local` file:

```bash
# Example
NEXT_PUBLIC_SITE_URL=https://anilkumarshrestha.com.np
```

**Note**: Never commit `.env.local` to GitHub. It's already in `.gitignore`.

## 📝 Customization

### Update Personal Information

Edit the following files to update your information:
- `app/page.tsx` - Homepage hero and content
- `app/about/page.tsx` - About page details
- `app/experience/ExperienceClient.tsx` - Work experience
- `app/projects/page.tsx` - Projects listing
- `app/sitemap.ts` - Update the base URL to your domain

### Change Colors/Theme

Edit `app/globals.css` to modify the color scheme in the `:root` and `.dark` sections.

### Add New Projects

Add new project objects to the `projects` array in `app/projects/page.tsx` and create corresponding detail pages.

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is occupied:
```bash
npm run dev -- -p 3001
```

### Build Errors

Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

### Dependency Conflicts

Use legacy peer deps:
```bash
npm install --legacy-peer-deps
```

## 📧 Contact

- **Email**: anilkumarshrestha@example.com
- **LinkedIn**: [linkedin.com/in/anil-kumar-shrestha](https://www.linkedin.com/in/anil-kumar-shrestha/)
- **GitHub**: [github.com/Anilkumar-Shrestha](https://github.com/Anilkumar-Shrestha)

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Anil Kumar Shrestha
