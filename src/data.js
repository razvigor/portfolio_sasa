import Martina from './assets/martinadjokic.webp';
import InformatickiKursevi from './assets/informaticki-kursevi.webp';
import Assa from './assets/assa-network.webp';
import Tranexpo from './assets/tranexpo.webp';
import TurboSavic from './assets/turbosavic.webp';
import Lesnina from './assets/lesninabanjaluka.webp';
import infoars from './assets/company/infoars-logo.webp';
import itexpert from './assets/company/it-expert.webp';
import logo from './assets/ST_Logo.svg';
import level_one from './assets/tech/level_one.png';
import level_two from './assets/tech/level_two.png';
import level_three from './assets/tech/level_three.png';

export const projects = [
  {
    id: 1,
    name: 'Martina Đokić',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    duration: 'duration-4500',
    image: Martina,
  },
  {
    id: 2,
    name: 'Geek Solutions',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    duration: 'duration-4000',
    image: InformatickiKursevi,
  },
  {
    id: 3,
    name: 'Assa',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'javaScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'wordpress',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    duration: 'duration-4000',
    image: Assa,
  },
  {
    id: 4,
    name: 'Tranexpo',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    duration: 'duration-2500',
    image: Tranexpo,
  },
  {
    id: 5,
    name: 'Turbo Savić',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    duration: 'duration-3000',
    image: TurboSavic,
  },
  {
    id: 6,
    name: 'Lesnina',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'wordpress',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    duration: 'duration-4000',
    image: Lesnina,
  },
];
export const navLinks = [
  {
    id: 'about',
  },
  {
    id: 'experience',
  },
  {
    id: 'work',
  },
  {
    id: 'contact',
  },
];

export const experiences = [
  {
    title: 'Web Developer',
    company_name: 'Infoars',
    icon: infoars,
    iconBg: '#E6DEDD',
    date: '2016 – 2019',
    point: 'infoars',
  },
  {
    title: 'React Developer',
    company_name: 'IT Expert',
    icon: itexpert,
    iconBg: '#383E56',
    date: ' 2019 – 2022',
    point: 'itexpert',
  },
  {
    title: 'React Developer',
    company_name: 'Freelancer',
    icon: logo,
    iconBg: '#383E56',
    date: '2022 - Present',
    point: 'freelancer',
  },
];

export const courses = [
  {
    title: 'HTML, CSS, SASS, Tailwind',
    level: '01',
    icon: level_one,
    iconBg: '#383E56',
    date: '32h',
    point: 'level_one',
  },
  {
    title: 'JavaScript',
    level: '02',
    icon: level_two,
    iconBg: '#383E56',
    date: '34h',
    point: 'level_two',
  },
  {
    title: 'React.js',
    level: '03',
    icon: level_three,
    iconBg: '#383E56',
    date: '30h',
    point: 'level_three',
  },
];
