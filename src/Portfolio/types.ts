type Project = {
  name: string;
  githubLink?: string;
  type: string;
  imgSources: string[];
  description: string;
  technologies: string[];
  date: string | Date;
  liveUrl: string;
};

export type { Project };
