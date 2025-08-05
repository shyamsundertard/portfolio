export const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: 'React', icon: '/logos/react.png', alt: 'React' },
      { name: "Next.js", icon: "/logos/next.png", alt: "Next.js" },
      { name: "TypeScript", icon: "/logos/ts.png", alt: "TypeScript" },
      { name: "Tailwind CSS", icon: "/logos/tailwindcss.png", alt: "Tailwind CSS" },
      { name: "Framer Motion", icon: "/logos/framer.png", alt: "Framer Motion" },
      { name: "Shadcn/ui", icon: "/logos/shadcn.png", alt: "Shadcn/ui" },
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: "/logos/node.png", alt: "Node.js" },
      { name: "Express.js", icon: "/logos/express.png", alt: "Express.js" },
      { name: "NestJS", icon: "/logos/nest.png", alt: "NestJS" },
      { name: "Prisma ORM", icon: "/logos/prisma.png", alt: "Prisma ORM" },
      { name: "MongoDB", icon: "/logos/mongodb.png", alt: "MongoDB" },
      { name: "PostgreSQL", icon: "/logos/pgsql.png", alt: "PostgreSQL" },
    ]
  },
  {
    category: "Tools & Others",
    technologies: [
      { name: "Git", icon: "/logos/git.png", alt: "Git" },
      { name: "Docker", icon: "/logos/docker.png", alt: "Docker" },
      { name: "AWS", icon: "/logos/aws.png", alt: "AWS" },
      { name: "Vercel", icon: "/logos/vercel.png", alt: "Vercel" },
      { name: "Figma", icon: "/logos/figma.png", alt: "Figma" },
      { name: "Jest", icon: "/logos/jest.png", alt: "Jest" },
    ]
  }
];

export const projects = [
  {
    "id": 1,
    "title": "Law Firm Management System",
    "description": "Built a secure full-stack app for law firms with RBAC to streamline case management workflows. Used Firebase for backend/auth and Zustand for lightweight global state management. Demonstrated strong product thinking by designing and implementing a tiered subscription model with Stripe API integration.",
    "technologies": ["Next.js", "TypeScript", "Firebase", "Zustand", "Tailwind CSS"],
    "image": "/project1.jpg",
    "github": "https://github.com/shyamsundertard/lawnxt_web",
    "live": "https://lawnxt-web.vercel.app/",
    "featured": true,
    "category": "Full-Stack"
  },
  {
    "id": 2,
    "title": "College Appointment System",
    "description": "Designed and implemented a super-efficient, large-scale REST API with advanced conflict detection logic, virtually eliminating double-bookings to solve a critical business problem. Secured all endpoints with JWT and bcrypt hashing, resulting in zero reported vulnerabilities. Deployed the solution to AWS EC2, ensuring reliable access and stable performance during peak traffic periods.",
    "technologies": ["Express.js", "Node.js", "TypeScript", "AWS"],
    "image": "/project2.jpg",
    "github": "https://github.com/shyamsundertard/appointment_system_assignment",
    "live": null,
    "featured": true,
    "category": "Backend"
  }
];

export const experience = [
    {
      "id": 1,
      "company": "eWarn System",
      "position": "IoT Development Intern",
      "duration": "May 2025 - July 2025",
      "description": "Contributed to a real-time IoT platform by developing both the embedded firmware and the backend services. Responsibilities included programming firmware for ESP32 microcontrollers in C++, integrating a variety of sensors for data acquisition, engineering RESTful APIs in Node.js for data streaming, implementing the MQTT protocol for low-latency hardware-software communication, and designing a scalable PostgreSQL database with Prisma ORM.",
      "technologies": ["Node.js", "Express", "TypeScript", "PostgreSQL", "Prisma", "MQTT", "Embedded C++", "ESP32", "Sensors (DHT11, MPU6050)"],
      "achievements": [
        "Developed and deployed robust embedded firmware for a network of IoT sensors, enabling real-time data acquisition and device control.",
        "Engineered a suite of secure and reliable RESTful APIs to manage high-volume, real-time sensor data and control commands from the hardware.",
        "Architected a real-time, bidirectional communication layer using MQTT, drastically improving responsiveness between the physical devices and the backend.",
        "Designed a robust and scalable PostgreSQL database schema from the ground up using Prisma ORM, ensuring long-term data integrity for sensor readings.",
        "Successfully created a cohesive hardware-software platform through the end-to-end integration of embedded systems with the backend infrastructure."
      ],
      "logo": "/logos/ewarn.png",
      "location": "Remote"
  },
  {
    "id": 2,
    "company": "DigiR Innovative Services",
    "position": "Web Development Intern",
    "duration": "May 2025 - July 2025",
    "description": "Led the end-to-end development of client web applications using Next.js/React and TypeScript. Focused on building a library of reusable React components to accelerate development and collaborated with designers to implement pixel-perfect, responsive layouts with Tailwind CSS.",
    "technologies": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Appwrite", "Firebase"],
    "achievements": [
      "Accelerated development cycles and improved code maintainability by creating a standardized library of reusable UI components in React.",
      "Successfully managed the end-to-end development of multiple client-specific web applications, from initial concept to final deployment.",
      "Drove significant improvements in user experience by enhancing page load speeds and ensuring full mobile responsiveness across all projects.",
      "Collaborated closely with the design team to implement pixel-perfect, on-brand user interfaces using Tailwind CSS.",
      "Leveraged the capabilities of Next.js and TypeScript to build fast, secure, and SEO-friendly web applications for a diverse set of clients."
    ],
    "logo": "/logos/digir.webp",
    "location": "Remote"
  }
];

export const freelanceProjects = [
  // {
  //   id: 1,
  //   client: "Client Name",
  //   projectName: "Project Name",
  //   duration: "Duration",
  //   description: "Project description",
  //   technologies: ["Tech1", "Tech2"],
  //   achievements: ["Achievement 1", "Achievement 2"],
  //   projectType: "Project Type",
  //   link: "https://project-link.com",
  //   linkType: "live" // or "documentation"
  // }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    institution: "National Institute of Technology, Rourkela",
    duration: "2022 - 2026",
    description: "Studying Electronics and Communication Engineering with a focus on software development.",
    gpa: 7.75
  },
  {
    id: 2,
    degree: "Intermediate",
    institution: "Adarsh High School, Bikaner",
    duration: "2021-2022",
    description: "Completed high school with a focus on science and mathematics.",
    percentage: 89.20
  },
  {
    id: 3,
    degree: "Matriculation",
    institution: "Adarsh High School, Bikaner",
    duration: "20219-2020",
    description: "Completed secondary education with a strong foundation in science and mathematics.",
    percentage: 81.33
  }
];

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-123456"
  },
  {
    id: 2,
    name: "MongoDB Database Administrator",
    issuer: "MongoDB University",
    date: "2022",
    credentialId: "MDB-789012"
  },
  {
    id: 3,
    name: "Next.js Certification",
    issuer: "Vercel",
    date: "2023",
    credentialId: "NEXT-345678"
  }
];

export const contactInfo = {
  email: "tardshyamsunder@gmail.com",
  location: "Rajasthan, India",
  linkedin: "https://www.linkedin.com/in/shyamsundertard/",
  github: "https://github.com/shyamsundertard",
  twitter: "https://twitter.com/shyamsundertard",
  website: ""
};

export const personalInfo = {
  name: "Tard, Shyamsunder",
  title: "Full-Stack Developer",
  summary: "Passionate full-stack developer building scalable web applications. Specialized in React, Next.js, Node.js, and modern web technologies. Committed to writing clean, maintainable code and delivering exceptional user experiences.",
  about: "I'm a dedicated full-stack developer who loves turning complex problems into simple, beautiful solutions. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
  interests: ["Web Development", "Open Source", "UI/UX Design"]
};