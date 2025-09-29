import type { BlogPostType } from "./types";

const mockPosts: BlogPostType[] = [
  {
    id: "1",
    slug: "building-with-supabase-auth",
    title: "Building with Supabase Auth",
    date: "2025-09-26",
    snippet: "A step-by-step guide to secure auth with Supabase.",
    content: `# Introduction to Supabase Auth

Authentication is often one of the hardest things to get right when building an app. Supabase makes this easier with **email and password**, **social logins**, and **magic links** for passwordless auth.

---

## Why Supabase Auth?

Instead of building complex backends, Supabase gives you auth that integrates directly with Postgres. You get secure JWT-based sessions and built-in APIs.

---

## Key Features

- **Email & Password** — The classic way to sign up and sign in users.  
- **Social Logins** — Support for providers like Google, GitHub, and more.  
- **Magic Links** — Let users log in without a password by clicking a link in their email.  
- **Row Level Security** — Powerful database rules to restrict access based on the user.

---

## Conclusion

With Supabase, authentication is no longer a hassle. You can start small with email logins and grow into advanced setups like passwordless auth or multi-tenant applications—all with just a few lines of code.`
  },
  {
    id: "2",
    slug: "understanding-intersection-observer",
    title: "Understanding Intersection Observer",
    date: "2025-09-21",
    snippet: "How to animate elements when they enter the viewport.",
    content: `# Understanding Intersection Observer

Animations feel magical when elements fade, slide, or pop into view as you scroll. The **Intersection Observer API** makes this easy by telling you when an element enters or leaves the viewport.

---

## Why Use It?

Traditionally, scroll-based animations relied on listening to the \`scroll\` event and running expensive calculations. Intersection Observer is more **efficient** and **browser-optimized**.

---

## Example

\`\`\`javascript
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".animate").forEach(el => observer.observe(el));
\`\`\`

---

## Conclusion

With Intersection Observer, you can create smooth animations without performance bottlenecks. It’s the modern way to detect when elements are visible on screen.`
  },
  {
    id: "3",
    slug: "hostimg-project-journey",
    title: "HostImg Project Journey",
    date: "2025-09-18",
    snippet: "How I built my first image hosting platform.",
    content: `# The HostImg Project Journey

HostImg was my **first real project**, built to let users upload and manage images online. It started as a learning exercise and grew into a fully working image hosting service.

---

## The Idea

I wanted a simple platform where users could:

- Upload images easily  
- Get shareable links  
- Manage their files in a clean dashboard  

---

## The Tech Stack

- **Frontend**: React for building the dashboard UI.  
- **Backend**: Node.js with Express for handling uploads.  
- **Storage**: AWS S3 for storing images securely.  

---

## Lessons Learned

- Handling file uploads and storage permissions was trickier than expected.  
- Designing a simple UI taught me the value of user experience.  
- Deployment showed me how important scaling and costs are.  

---

## Conclusion

HostImg wasn’t just a project—it was a milestone. It pushed me to learn full-stack development and gave me confidence to build bigger projects.`
  },
  {
    id: "4",
    slug: "scrolljs-lightweight-scroll-library",
    title: "ScrollJs – A Lightweight Scroll Library",
    date: "2025-09-12",
    snippet: "Exploring the internals of my smooth scroll animation library.",
    content: `# ScrollJs – A Lightweight Scroll Library

Scroll-based animations can quickly get complicated. That’s why I built **ScrollJs**, a small JavaScript library to handle smooth scroll effects without bloat.

---

## Why Build ScrollJs?

Most libraries were either too **heavy** or too **opinionated**. I wanted something:

- Lightweight  
- Easy to use  
- Flexible enough to plug into any project  

---

## Core Features

- **Element Watching** — Detect when elements enter the viewport.  
- **Smooth Animations** — Add fade, slide, or custom animations.  
- **Zero Dependencies** — Written in plain JavaScript.  

---

## Example

\`\`\`javascript
scrollJs.watch(".fade-in", el => {
  el.classList.add("visible");
});
\`\`\`

---

## Conclusion

ScrollJs is proof that sometimes the best tools are the simplest ones. It remains a go-to solution for projects where performance and minimalism matter.`
  },
  {
    id: "5",
    slug: "mind-echo-companion-app",
    title: "MindEcho Companion App",
    date: "2025-09-05",
    snippet: "Designing a mental health support app with modern web tech.",
    content: `# MindEcho – A Mental Health Companion App

Mental health is deeply important, and I wanted to explore how technology can provide support. That led me to build **MindEcho**, a companion app for reflection and well-being.

---

## The Goal

I wanted MindEcho to be:

- A **safe space** for journaling thoughts  
- A way to **track mood patterns**  
- A tool to suggest positive exercises and reflections  

---

## The Tech Stack

- **Frontend**: Built with React Native for mobile access.  
- **Backend**: Supabase for auth and database storage.  
- **Design**: Calming UI with minimal distractions.  

---

## Challenges

- Balancing data privacy with useful insights.  
- Designing an app that feels supportive, not clinical.  
- Ensuring accessibility and inclusivity.  

---

## Conclusion

MindEcho was more than a coding project—it was an attempt to merge empathy with technology. While it’s still evolving, the goal remains the same: to help users take better care of their mental health.`
  }
];

export default mockPosts;
