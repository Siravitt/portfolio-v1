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
      'https://static.vecteezy.com/system/resources/previews/022/059/000/non_2x/no-image-available-icon-vector.jpg',
    imageAlt: 'jula-livestock',
    url: '',
    technology: ['Typescript', 'Next.js'],
  },
  {
    title: 'Instagram Clone',
    description:
      'A simplified version of Instagram that allows users to upload photos, follow other users, like posts, and leave comments. This project focuses on core social media functionalities with a clean and responsive user interface. Built with modern technologies, it emphasizes usability, efficient performance, and essential features for an engaging user experience.',
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/022/059/000/non_2x/no-image-available-icon-vector.jpg',
    imageAlt: 'instagram-clone',
    url: '',
    technology: ['Javascript', 'React', 'Node.js', 'Express'],
  },
  {
    title: 'Shopee Clone',
    description:
      'A marketplace platform that allows users to buy and sell products, with integrated chat functionality for seamless communication between buyers and sellers.',
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/022/059/000/non_2x/no-image-available-icon-vector.jpg',
    imageAlt: 'shopee-clone',
    url: '',
    technology: ['Javascript', 'React', 'Node.js', 'Express', 'Socket.io'],
  },
];
