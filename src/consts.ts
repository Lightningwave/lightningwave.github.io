import type { Site, Metadata, Socials, Skill, Education, Certification } from "@types";

export const SITE: Site = {
  NAME: "lightningwave",
  EMAIL: "vannguyen@gmail.com",
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Personal portfolio showcasing my software development projects and professional experience.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories.",
};

export const SKILLS: Metadata = {
  TITLE: "Skills",
  DESCRIPTION: "Technical skills and technologies I work with.",
};

export const EDUCATION: Metadata = {
  TITLE: "Education",
  DESCRIPTION: "My academic background and qualifications.",
};

export const CERTIFICATIONS: Metadata = {
  TITLE: "Certifications",
  DESCRIPTION: "Professional certifications and achievements.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/Lightningwave"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/vanngyn/"
  }
];

export const SKILLS_LIST: Skill[] = [
  {
    NAME: "JavaScript",
    LEVEL: "Advanced",
    CATEGORY: "Programming Languages"
  },
  {
    NAME: "TypeScript",
    LEVEL: "Intermediate",
    CATEGORY: "Programming Languages"
  },
  {
    NAME: "React",
    LEVEL: "Advanced",
    CATEGORY: "Frontend"
  },
  {
    NAME: "Node.js",
    LEVEL: "Intermediate",
    CATEGORY: "Backend"
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    SCHOOL: "Your University",
    DEGREE: "Bachelor's Degree",
    FIELD: "Computer Science",
    START_DATE: "2018",
    END_DATE: "2022",
    DESCRIPTION: "Relevant coursework in Data Structures, Algorithms, and Software Engineering"
  }
];

export const CERTIFICATIONS_LIST: Certification[] = [
  {
    NAME: "Certified Ethical Hacker (CEH)",
    ISSUER: "EC-Council",
    DATE: "August 2024 (Expected)",
    LINK: "https://www.eccouncil.org/certified-ethical-hacker-ceh/",
    STATUS: "In Progress"
  }
];
