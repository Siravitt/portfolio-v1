export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  url: string;
  technology: string[] | undefined;
}

export const PROJECTS = [
  {
    title: 'julalivestock.com',
    description:
      'An informational website showcasing the pet pharmacy’s business details and products, including pet medications, supplements, and wellness items. Designed for easy navigation and a user-friendly experience.',
    imageUrl:
      'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=3548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'jula-livestock',
    url: '',
    technology: ['Typescript', 'Next.js'],
  },
  {
    title: 'Instagram Clone',
    description:
      'A simplified version of Instagram that allows users to upload photos, follow other users, like posts, and leave comments. This project focuses on core social media functionalities with a clean and responsive user interface. Built with modern technologies, it emphasizes usability, efficient performance, and essential features for an engaging user experience.',
    imageUrl:
      'https://about.fb.com/wp-content/uploads/2019/10/IG-Glyph-Icon-hero.png',
    imageAlt: 'instagram-clone',
    url: '',
    technology: ['Javascript', 'React', 'Node.js', 'Express'],
  },
  {
    title: 'Shopee Clone',
    description:
      'A marketplace platform that allows users to buy and sell products, with integrated chat functionality for seamless communication between buyers and sellers.',
    imageUrl:
      'https://cdn-1.webcatalog.io/catalog/shopee-thailand/shopee-thailand-social-preview.png?v=1714775819678',
    imageAlt: 'shopee-clone',
    url: '',
    technology: ['Javascript', 'React', 'Node.js', 'Express', 'Socket.io'],
  },
];
