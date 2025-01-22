interface Project {
  name: string;
  projectId: string;
  githubLink?: string | undefined;
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
        "A lightweight JavaScript library for adding animation on scroll effects (AOS) to elements with the flexibility of passing custom animations and callback functions.",
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
        "A mental health web app that helps manage users' mental well-being by providing mindfulness tools such as mood logging, soul-calming soundscapes, and an AI mental coach.",
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
        "A gratitude journaling web app that helps relieve stress by expressing one's gratitude, with features like calendar view to track added journals and streak counts to motivate users.",
      stacks: ["ReactJS", "CSS3", "JavaScript", "Firebase"],
      liveUrl: "https://thryve-alpha.vercel.app",
    },
    {
      name: "HostImg",
      projectId: "04",
      type: "Image Hosting",
      imgSource: "/illustrations/hostimg-preview.png",
      description:
        "An image hosting website where you can host images for free, share hosted images with others, and also get the HTML code to display them on web pages.",
      stacks: ["HTML5", "CSS3", "JavaScript", "jQuery", "Wapka"],
      liveUrl: "https://hostimg.wapka.co",
    },
  ];

  return projects;
};

export default useProjects;