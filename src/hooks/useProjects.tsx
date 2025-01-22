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
  const projects: Project = [
    {
      name: "ScrollJs",
      projectId: "01",
      githubLink: "https://github.com/Charmingdc/ScrollJs",
      type: "Javascript library",
      imgSource: "/illustrations/scrolljs-preview.png",
      description:
        "A lightweight javascript library for adding animation on scroll effects (AOS) to elements with the flexibility of passing custom animations and callback functions.",
      stacks: ["JavaScript"],
      liveUrl: "https://scrolljs.vercel.app",
    },
    {
      name: "MindEcho",
      projectId: "02",
      githubLink: "https://github.com/Charmingdc/MindEcho",
      type: "mental health",
      imgSource: "/illustrations/mindecho-preview.png",
      description:
        "A mental health web app that helps manage users mental wellbeing by providing mindfullness tools such as mood logging, soul calming soundscapes and an AI mental coach.",
      stacks: ["html5", "css3", "javascript", "apex chart", "firebase"],
      liveUrl: "https://mindecho-six.vercel.app",
    },
    {
      name: "Thryve",
      projectId: "03",
      githubLink: "https://github.com/Charmingdc/Thryve",
      type: "Gratitude journalling",
      imgSource: "/illustrations/thryve.png",
      description:
        'A gratitude journalling web app that help to relieve stress by expressing one"s gratitude with features like calendar view to track added journals and streak counts to motivate users.',
      stacks: ["reactjs", "css3", "javascript", "firebase"],
      liveUrl: "https://thryve-alpha.vercel.app",
    },
    {
      name: "HostImg",
      projectId: "04",
      githubLink: "",
      type: "Image hosting",
      imgSource: "/illustrations/hostimg-preview.png",
      description:
        'A img hosting website where you can host images for free with features for sharing hosted images to others and also provides the html code to display them on webpages',
      stacks: ["html5", "css3", "javascript", "jquery", "wapka"],
      liveUrl: "https://hostimg.wapka.co",
    },
  ];

  return projects;
};

export default useProjects;