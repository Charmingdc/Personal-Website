interface Project {
  name: string;
  projectId: string;
  githubLink?: string;
  type: string;
  imgSource: string;
  description: string;
  stacks: string[];
  liveUrl: string;
}

const useProjects = () => {
  const projects: Project[] = [
    {
      name: "ScrollJs",
      projectId: "01",
      githubLink: "https://github.com/Charmingdc/ScrollJs",
      type: "JavaScript Library",
      imgSource: "/illustrations/scrolljs-preview.png",
      description:
        "A lightweight JavaScript library for scroll-triggered animations, supporting custom animations and callback functions.",
      stacks: ["JavaScript"],
      liveUrl: "https://scrolljs.vercel.app",
    },
    {
      name: "MindEcho",
      projectId: "02",
      githubLink: "https://github.com/Charmingdc/MindEcho",
      type: "Mental Health App",
      imgSource: "/illustrations/mindecho-preview.png",
      description:
        "A mental health web app for well-being management, featuring mood logging, calming soundscapes, and an AI mental coach.",
      stacks: ["HTML5", "CSS3", "JavaScript", "Apex Charts", "Firebase"],
      liveUrl: "https://mindecho-six.vercel.app",
    },
    {
      name: "Thryve",
      projectId: "03",
      githubLink: "https://github.com/Charmingdc/Thryve",
      type: "Gratitude Journaling App",
      imgSource: "/illustrations/thryve.png",
      description:
        "A gratitude journaling web app with stress-relief features, including a calendar view for tracking entries and streak counts for motivation.",
      stacks: ["ReactJS", "CSS3", "JavaScript", "Firebase"],
      liveUrl: "https://thryve-alpha.vercel.app",
    },
    {
      name: "HostImg",
      projectId: "04",
      type: "Image Hosting",
      imgSource: "/illustrations/hostimg-preview.png",
      description:
        "A free image hosting website that lets you upload, share images, and generate HTML codes for embedding them on web pages.",
      stacks: ["HTML5", "CSS3", "JavaScript", "jQuery", "Wapka"],
      liveUrl: "https://hostimg.wapka.co",
    },
    {
     name: "Axionis",
     projectId: "05",
     githubLink: "https://github.com/Charmingdc/Axionis",
     type: "Chatbot",
     imgSource: "/illustrations/hostimg-preview.png",
     description: "Axionis is an AI chatbot designed for seamless conversations, providing intelligent responses and assistance in real-time.",
     stacks: ["css3", "React", "typescript"],
     liveUrl: "https://axionis.vercel.app"
    },
    {
     name: "SwiftScan",
     projectId: "06",
     githubLink: "https://github.com/Charmingdc/SwiftScan",
     type: "Qrcode generator",
     imgSource: "/illustrations/hostimg-preview.png",
     description: "SwiftScan is a minimalistic, open-source QR code generator for emails, phone numbers, text, and URLs, designed for speed and accessibility.",
     stacks: ["Html5", "css3", "typescript"],
     liveUrl: "https://swiftscan-delta.vercel.app"
    }
  ];

  return projects;
};

export default useProjects;