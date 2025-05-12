export type Site = {
  NAME: string;
  EMAIL: string;
  NUM_WORKS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export type Skill = {
  NAME: string;
  LEVEL: string;
  CATEGORY: string;
};

export type Education = {
  SCHOOL: string;
  DEGREE: string;
  FIELD: string;
  START_DATE: string;
  END_DATE: string;
  DESCRIPTION?: string;
};

export type Certification = {
  NAME: string;
  ISSUER: string;
  DATE: string;
  LINK?: string;
  STATUS?: string;
};
