import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/hanoi-background-2.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profile.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Tuan\'s Website',
  description: "Personal website by Tuan To",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Tuan To.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Software Engineer/Data Analyst</strong>, currently studying
        at <strong className="text-stone-100">Concordia University</strong> as an undergraduate 
        in <strong className="text-stone-100">Computer Science</strong>. I am located in Montreal, 
        but I am willing to relocate to Toronto for any opportunity!
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am looking for an amazing summer internship! Please feel free to reach out.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a receptive and solution-oriented person that loves challenges. I think that challenges are
  what keeps us going in life, and without them, life would be boring and repetitive. I also like to research deeply about
  the things that I am interested in (such as my hobby in technology and custom mechanical keyboards).`,
  aboutItems: [
    {label: 'Location', text: 'Montreal, QC', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Vietnamese', Icon: FlagIcon},
    {label: 'Interests', text: 'Software development, data analysis', Icon: SparklesIcon},
    {label: 'Study', text: 'Concordia University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Full-time student', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Vietnamese',
        level: 10,
      },
      {
        name: 'French',
        level: 3,
      },
    ],
  },
  {
    name: 'Data Engineer',
    skills: [
      {
        name: 'MySQL Database',
        level: 8,
      },
      {
        name: 'Postgres SQL',
        level: 7,
      },
      {
        name: 'Python',
        level: 9,
      },
    ],
  },
  {
    name: 'Machine Learning',
    skills: [
      {
        name: 'Pandas Library',
        level: 8,
      },
      {
        name: 'SciPy Library',
        level: 6,
      },
      {
        name: 'Numpy Library',
        level: 6,
      },
    ],
  },
  {
    name: 'Software Development',
    skills: [
      {
        name: 'C/C++',
        level: 7,
      },
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'Javascript',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2019 - December 2023',
    location: 'Concordia University',
    title: 'Computer Science Undergraduate',
    content: <p>Even though I am enthusiastic about data engineering and data analytics, I got to learn
      a lot of beautiful things regarding computer architecture and backend development. Software development 
      is like solving puzzles for me, and I love getting involved in programming projects!
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan - Apr 2022',
    location: 'Bombardier Aerospace',
    title: 'BIS Operations Architect',
    content: (
      <ul className='list-disc pl-5 lg:pl-3'>
        <li>Analyzed Bombardier's software lifecycles and built a report for infrastructure management</li>
        <li>Built a Machine Learning model to clean data, with up to 84% accuracy</li>
        <li>Deployed database monitoring software for production database</li>
        <li>Learned about server designs and database architecture at a high level</li>
        <li>Took part in IT Infrastructure team meetings and learned more about project management</li>
        <li>Established linkage between different teams to solve problem at hand</li>
      </ul>
    ),
  },
  {
    date: 'Sep - Dec 2021',
    location: 'Concordia University',
    title: 'Service Desk Operator',
    content: (
      <ul className='list-disc pl-5 lg:pl-3'>
        <li>Processed tickets and troubleshot computer software</li>
        <li>Configured network ports for static IP machines</li>
        <li>Worked with Windows Remote Desktop and Line Printer Remote (LPR)</li>
        <li>Gained experience in technical support and computer networking</li>
        <li>Learned how to communicate effectively between teams and honed solution-oriented mindset</li>
        <li>Put into practice the KanBan Agile model</li>
      </ul>
    ),
  },
  {
    date: 'Jun - Aug 2021',
    location: 'Bombardier Aerospace',
    title: 'Technical Specialist',
    content: (
      <ul className='list-disc pl-5 lg:pl-3'>
        <li>Updated Bombardier's logistic database</li>
        <li>Provided software and hardware support for Bombardier employees</li>
        <li>Diagnosed and refurbished 100 laptops for Bombardier</li>
        <li>Actively organized the workspace and kept things in order</li>
        <li>Gained experience in customer support and customer service</li>
      </ul>
    ),
  },
];


/**
 * Project section
 */
export const project: TimelineItem[] = [
  {
    date: 'Jan - Apr 2022',
    location: 'Bombardier Aerospace',
    title: 'Book Project website',
    content: (
      <ul className='list-disc pl-5 lg:pl-3'>
        <li>Analyzed Bombardier's software lifecycles and built a report for infrastructure management</li>
        <li>Built a Machine Learning model to clean data, with up to 84% accuracy</li>
        <li>Deployed database monitoring software for production database</li>
        <li>Learned about server designs and database architecture at a high level</li>
        <li>Took part in IT Infrastructure team meetings and learned more about project management</li>
        <li>Established linkage between different teams to solve problem at hand</li>
      </ul>
    ),
  },
  {
    date: 'Sep - Dec 2021',
    location: 'Concordia University',
    title: 'Service Desk Operator',
    content: (
      <ul className='list-disc pl-5 lg:pl-3'>
        <li>Processed tickets and troubleshot computer software</li>
        <li>Configured network ports for static IP machines</li>
        <li>Worked with Windows Remote Desktop and Line Printer Remote (LPR)</li>
        <li>Gained experience in technical support and computer networking</li>
        <li>Learned how to communicate effectively between teams and honed solution-oriented mindset</li>
        <li>Put into practice the KanBan Agile model</li>
      </ul>
    ),
  },
  {
    date: 'Jun - Aug 2021',
    location: 'Bombardier Aerospace',
    title: 'Technical Specialist',
    content: (
      <ul className='list-disc pl-5 lg:pl-3'>
        <li>Updated Bombardier's logistic database</li>
        <li>Provided software and hardware support for Bombardier employees</li>
        <li>Diagnosed and refurbished 100 laptops for Bombardier</li>
        <li>Actively organized the workspace and kept things in order</li>
        <li>Gained experience in customer support and customer service</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to send me an email anytime!',
  items: [
    {
      type: ContactType.Email,
      text: 'tominhtuan18@gmail.com',
      href: 'mailto:tominhtuan18@gmail.com?subject=Mail coming from my website',
    },
    {
      type: ContactType.Location,
      text: 'Montreal QC, Canada',
      href: 'https://goo.gl/maps/eZRBfs62U88QNZxp7',
    },
    {
      type: ContactType.Instagram,
      text: '@tuanto154',
      href: 'https://www.instagram.com/tuanto154/',
    },
    {
      type: ContactType.Github,
      text: 'Whitewolf04',
      href: 'https://github.com/Whitewolf04',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Whitewolf04'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/9379235/tuan-to'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/tuan-to/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tuanto154/'},
];
