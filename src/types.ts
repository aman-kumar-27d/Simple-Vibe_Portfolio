import { FC, SVGProps } from 'react';

export interface Skill {
  name: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Theme {
  name: string;
  colors: {
    background: string;
    text: string;
    primary: string;
    primaryLight: string;
    card: string;
    border: string;
  };
}
