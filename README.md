# Shyamsunder Tard - Full-Stack Developer Portfolio

A modern, responsive portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS. Features beautiful animations, interactive components, and a professional design showcasing full-stack development skills.

## ✨ Features

### 🎨 Visual & Interactive
- **Logo Galaxy** - Interactive 3D logo animation using Three.js
- **Floating Navigation** - Smooth scrolling navigation with icons
- **Theme Toggle** - Dark/Light mode with smooth transitions
- **Responsive Design** - Mobile-first approach with adaptive layouts
- **Splash Screen** - Animated logo splash on initial load

### 📱 Portfolio Sections
- **Hero Section** - Dynamic introduction with animated text and 3D logo
- **About Section** - Personal information, and education
- **Skills Section** - Interactive skill showcase with technology icons
- **Projects Section** - Filterable project showcase (Personal & Freelance)
- **Experience Section** - Professional work history with achievements
- **Contact Section** - Functional contact form with email integration
- **Footer** - Social links and additional information

### 🛠️ Technical Features
- **TypeScript** - Full type safety throughout the application
- **Framer Motion** - Smooth animations and page transitions
- **Shadcn/ui** - Modern UI components with Radix UI
- **Email Integration** - Contact form with Resend API
- **Performance Optimized** - Image optimization and code splitting

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Lucide React** - Additional icon set

### UI Components & Styling
- **Shadcn/ui** - Modern component library
- **Tailwind Merge** - Utility class merging
- **Tailwind CSS Animate** - Animation utilities

### 3D & Graphics
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber

### Backend & Services
- **Resend** - Email service for contact form
- **Next.js API Routes** - Server-side functionality

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Update your information in `Data/index.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  summary: "Your summary...",
  about: "Your about text...",
  interests: ["Interest 1", "Interest 2"]
};

export const contactInfo = {
  email: "your.email@example.com",
  location: "Your Location",
  linkedin: "https://linkedin.com/in/yourusername",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourusername"
};
```

### Projects
Add your projects to the `projects` array:

```typescript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    technologies: ["React", "Node.js", "TypeScript"],
    image: "/project-image.jpg",
    github: "https://github.com/username/project",
    live: "https://live-demo.com",
    featured: true,
    category: "Full-Stack"
  }
];
```

### Experience
Update your work experience:

```typescript
export const experience = [
  {
    id: 1,
    company: "Company Name",
    position: "Job Title",
    duration: "2023 - Present",
    description: "Job description...",
    technologies: ["Tech 1", "Tech 2"],
    achievements: ["Achievement 1", "Achievement 2"],
    logo: "/company-logo.png",
    location: "Location"
  }
];
```

### Skills
Update your skills and technologies:

```typescript
export const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", icon: "/logos/react.png", alt: "React" },
      // Add more technologies
    ]
  }
];
```

## 🎨 Styling & Theming

### Colors & Theme
The portfolio uses a comprehensive theming system:
- **Dark/Light Mode** - Automatic theme switching
- **Custom CSS Variables** - Consistent color palette
- **Tailwind Config** - Extended color scheme

### Animations
- **Framer Motion** - Page transitions and component animations
- **CSS Animations** - Background effects and micro-interactions
- **Three.js Animations** - 3D logo and interactive elements

## 📱 Responsive Design

The portfolio is fully responsive across all devices:
- **Desktop** (1200px+) - Full layout with all features
- **Tablet** (768px - 1199px) - Optimized layout
- **Mobile** (320px - 767px) - Mobile-first design

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production
```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📞 Contact

- **Email**: tardshyamsunder@gmail.com
- **LinkedIn**: [Shyamsunder Tard](https://www.linkedin.com/in/shyamsundertard/)
- **GitHub**: [shyamsundertard](https://github.com/shyamsundertard)
- **Twitter**: [@shyamsundertard](https://twitter.com/shyamsundertard)

## 🙏 Acknowledgments

- **Shadcn/ui** - For the excellent component library
- **Framer Motion** - For smooth animations
- **Three.js** - For 3D graphics capabilities
- **Tailwind CSS** - For the utility-first CSS framework

---

Made with ❤️ using Next.js, TypeScript, and Tailwind CSS
