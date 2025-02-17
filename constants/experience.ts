export interface Experience {
  position: string;
  company: string;
  description: string;
  period: string;
  technology: string[];
  link: string;
}

export const EXPERIENCE: Experience[] = [
  {
    position: 'Software Engineer',
    company: 'Arise by INFINITAS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis condimentum magna, nec pellentesque dui. Phasellus accumsan faucibus lectus eget consequat. Donec sed malesuada sapien. Morbi nisl lectus, venenatis quis sem ac, aliquam accumsan nisl. Fusce eget neque est. Morbi elementum lobortis neque, a dignissim diam commodo quis. Nullam et iaculis est. Donec a purus ipsum. Nulla pulvinar ligula sit amet feugiat pretium.',
    period: '2023 DEC - Present',
    technology: ['Go', 'Javascript', 'Typescript', 'Next.js', 'Echo', 'Gin'],
    link: 'https://www.arise.tech/',
  },
  {
    position: 'Web Developer',
    company: 'GeoTalent',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis condimentum magna, nec pellentesque dui. Phasellus accumsan faucibus lectus eget consequat. Donec sed malesuada sapien. Morbi nisl lectus, venenatis quis sem ac, aliquam accumsan nisl. Fusce eget neque est. Morbi elementum lobortis neque, a dignissim diam commodo quis. Nullam et iaculis est. Donec a purus ipsum. Nulla pulvinar ligula sit amet feugiat pretium.',
    period: '2023 MAY - 2023 DEC',
    technology: ['Javascript', 'Typescript', 'Angular', 'HTML & SCSS'],
    link: 'https://www.geotalent.co.th/',
  },
];
