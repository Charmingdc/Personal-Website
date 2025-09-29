import type { Project } from "../types";

const useProjects = () => {
  const projects: Project[] = [
    {
      name: "ScrollJs",
      githubLink: "https://github.com/Charmingdc/ScrollJs",
      type: "JavaScript Library",
      imgSources: [
        "/illustrations/scrolljs-preview.jpg",
        "/illustrations/scrolljs-preview-02.jpg",
        "/illustrations/scrolljs-preview-03.jpg"
      ],
      description:
        "A lightweight JavaScript library for scroll-triggered animations, supporting custom animations and callback functions.",
      detailedDescription:
        "ScrollJs is a purpose-built JavaScript library designed for developers who want powerful scroll-triggered animations without the bloat of larger frameworks. Built entirely with JavaScript, it gives you fine-grained control over animation triggers, supports custom animations, and allows developers to attach callback functions for maximum flexibility.",
      technologies: ["JavaScript", "Rollup"],
      date: "2024",
      liveUrl: "https://www.npmjs.com/package/@charmingdc/scrolljs"
    },
    {
      name: "MindEcho",
      githubLink: "https://github.com/Charmingdc/MindEcho",
      type: "Mental Health App",
      imgSources: [
        "/illustrations/mindecho-preview.jpg",
        "/illustrations/mindecho-preview-02.jpg",
        "/illustrations/mindecho-preview-03.jpg"
      ],
      description:
        "A mental health web app for well-being management, featuring mood logging, calming soundscapes, and an AI mental coach.",
      detailedDescription:
        "MindEcho is a mental health and wellness companion built with HTML5, CSS3, and JavaScript at its core, enhanced by Firebase for backend services and ApexCharts for data visualization. The app provides mood logging functionality, soothing soundscapes for relaxation, and an AI-powered coach to encourage positive mental health practices. With Firebase handling authentication and real-time data storage, users can securely track their emotional trends over time.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Apex Charts", "Firebase"],
      date: "2025",
      liveUrl: "https://mindecho-six.vercel.app"
    },
    {
      name: "BookQuest",
      githubLink: "https://github.com/Charmingdc/BookQuest",
      type: "Book Discovery App",
      imgSources: [
        "/illustrations/bookquest-preview.jpg",
        "/illustrations/bookquest-preview-02.jpg",
        "/illustrations/bookquest-preview-03.jpg"
      ],
      description:
        "BookQuest is a book discovery web app to discover new books, explore genres, and build your personalized favorites list—all in one place. Your next great read is just a click away.",
      detailedDescription:
        "BookQuest is a modern book discovery platform crafted with TypeScript, leveraging ReactJS as the frontend framework for a dynamic user experience. It uses Firebase for backend services like authentication and real-time database, and TanStack Query to optimize data fetching and caching. The platform allows users to explore curated genres, discover trending books, and save favorites in a personalized list. By combining a strong frontend foundation with Firebase’s scalability, BookQuest delivers a seamless browsing and tracking experience. Its responsive design ensures accessibility across devices, making it a reader’s ultimate digital companion.",
      technologies: [
        "ReactJS",
        "CSS3",
        "TypeScript",
        "Firebase",
        "Vite",
        "Tanstack Query",
        "React Router Dom",
        "Sonner"
      ],
      date: "2025",
      liveUrl: "https://bookquest-eosin.vercel.app"
    },
    {
      name: "Thryve",
      githubLink: "https://github.com/Charmingdc/Thryve",
      type: "Gratitude Journaling App",
      imgSources: [
        "/illustrations/thryve-preview.jpg",
        "/illustrations/thryve-preview-02.jpg",
        "/illustrations/thryve-preview-03.jpg"
      ],
      description:
        "A gratitude journaling web app with stress-relief features, including calendar view for tracking entries and streak counts for motivation.",
      detailedDescription:
        "Thryve is a gratitude journaling app built with ReactJS for a reactive UI and Firebase for backend services. The app encourages mindfulness by allowing users to log their gratitude entries daily. Its calendar integration provides a clear visualization of journaling consistency, while streak counts motivate users to maintain healthy habits. Firebase handles real-time data sync, authentication, and secure storage, ensuring user data remains private and reliable. By blending simplicity with modern frontend technologies, Thryve transforms gratitude journaling into a gamified, motivating, and interactive experience.",
      technologies: [
        "ReactJS",
        "CSS3",
        "JavaScript",
        "Firebase",
        "Vite",
        "React Router DOM",
        "Sonner"
      ],
      date: "2025",
      liveUrl: "https://thryve-alpha.vercel.app"
    },
    {
      name: "HostImg",
      type: "Image Hosting",
      imgSources: ["/illustrations/hostimg-preview.jpg"],
      description:
        "A free image hosting website that lets you upload, share images, and generate HTML codes for embedding them on web pages.",
      detailedDescription:
        "HostImg is a lightweight image hosting platform built with HTML5, CSS3, JavaScript, and jQuery, deployed on Wapka. The app empowers users to upload, host, and share images effortlessly. It automatically generates sharable links and HTML embed codes for websites, forums, and blogs, making it ideal for creators and developers. By utilizing jQuery for interactivity and Wapka as the hosting environment, HostImg delivers fast and accessible functionality even with limited infrastructure. Despite being minimal, it embodies the core features of professional image hosting services, showcasing practicality and ingenuity with resource constraints.",
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Wapka"],
      date: "2024",
      liveUrl: "https://hostimg.wapka.co"
    },
    {
      name: "SafeWords",
      githubLink: "https://github.com/Charmingdc/SafeWords",
      type: "Secure Text Encryption Tool",
      imgSources: [
        "/illustrations/safewords-preview.jpg",
        "/illustrations/safewords-preview-02.jpg",
        "/illustrations/safewords-preview-03.jpg"
      ],
      description:
        "SafeWords is a robust client-side web app for encrypting and decrypting sensitive text data, ensuring complete privacy and control.",
      detailedDescription:
        "SafeWords is a privacy-first web application engineered with React and TypeScript, designed to give users complete control over the encryption and decryption of sensitive text. Powered by the Web Cryptography API, it ensures that all operations happen entirely client-side—your data never leaves the browser. Texts are encrypted into compact Base64-encoded strings, making them highly portable for sharing across any platform, while decryption requires the exact password, maintaining confidentiality. The app also supports IndexedDB storage for saving encrypted items locally, ensuring offline access and total ownership of data.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Web Cryptography API",
        "IndexedDB",
        "React Router DOM",
        "Lucide React",
        "Sonner"
      ],
      date: "2025",
      liveUrl: "https://safewords.vercel.app"
    },
    {
      name: "SwiftScan",
      githubLink: "https://github.com/Charmingdc/SwiftScan",
      type: "Qrcode generator",
      imgSources: [
        "/illustrations/swiftscan-preview.jpg",
        "/illustrations/swiftscan-preview-02.jpg",
        "/illustrations/swiftscan-preview-03.jpg"
      ],
      description:
        "SwiftScan is a minimalistic, open-source QR code generator for emails, phone numbers, text, and URLs, designed for speed and accessibility.",
      detailedDescription:
        "SwiftScan is a minimalistic QR code generator built with TypeScript, structured with a focus on speed and accessibility. The app allows users to generate QR codes instantly for emails, phone numbers, URLs, and plain text, making it versatile for both personal and professional use cases. With React powering the frontend, SwiftScan ensures responsive design and clean UI interactions. TypeScript strengthens maintainability, while the open-source model encourages developer contributions. SwiftScan’s lightweight design makes it ideal for users who want a fast, distraction-free QR generation tool.",
      technologies: ["HTML5", "CSS3", "TypeScript"],
      date: "2025",
      liveUrl: "https://swiftscan-delta.vercel.app"
    }
  ];

  return projects;
};

export default useProjects;
