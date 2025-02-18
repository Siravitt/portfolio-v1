export interface Experience {
  position: string;
  company: string;
  description: string;
  period: string;
  technology: string[];
  url: string;
}

export const EXPERIENCE: Experience[] = [
  {
    position: 'Software Engineer',
    company: 'Arise by INFINITAS',
    description:
      'Build and maintain the company website, internal platforms, and virtual banking systems. Collaborate with cross-functional teams, including developers, designers, and product managers, to deliver high-quality, user-friendly solutions.',
    period: '2023 DEC - Present',
    technology: [
      'Go',
      'Javascript',
      'Typescript',
      'Next.js',
      'Echo',
      'Gin',
      'Fiber',
    ],
    url: 'https://www.arise.tech/',
  },
  {
    position: 'Web Developer',
    company: 'GeoTalent',
    description:
      'Built a government agency project leveraging ArcGIS to create detailed district mapping solutions. This involved designing and implementing geospatial tools to support data visualization and analysis, ensuring accuracy and usability. Collaborated with stakeholders to align the mapping system with project requirements, delivering a robust solution to support decision-making and planning initiatives.',
    period: '2023 MAY - 2023 DEC',
    technology: [
      'Javascript',
      'Typescript',
      'Angular',
      'ArcGIS',
      'HTML & SCSS',
    ],
    url: 'https://www.geotalent.co.th/',
  },
];
