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
import profilepic from '../images/profile.webp';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  QuoteSection,
  // PortfolioItem,
  SkillGroup,
  Social,
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
  Quotes: 'quotes',
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
        I'm a <strong className="text-stone-100">Software Engineer</strong>, recently graduated 
        from <strong className="text-stone-100">Concordia University</strong> with a degree 
        in <strong className="text-stone-100">Computer Science</strong>. I am located in Montreal, 
        but I am willing to relocate to Toronto for any opportunity!
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am looking for new software engineering opportunities starting January 2024! Please feel free to reach out.
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
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Vietnamese', Icon: FlagIcon},
    {label: 'Interests', text: 'Software development', Icon: SparklesIcon},
    {label: 'Study', text: 'Concordia University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'N/A', Icon: OfficeBuildingIcon},
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
        name: 'French',
        level: 5,
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
        name: 'Python',
        level: 9,
      },
      {
        name: 'Java',
        level: 9,
      },
      {
        name: 'C/C++',
        level: 5,
      },
    ],
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
    date: 'May - Dec 2023',
    location: 'Alstom',
    title: 'TCMS Verification & Test Engineer',
    content: (
      <ul className='list-disc pl-5 lg:pl-3'>
        <li>Developed a multi-threaded Python application to simulate a micro-controller and help the company save on new equipment</li>
        <li>Automated 100 test cases using Python, Bash script, batch file, and PLC to streamline the testing process</li>
        <li>Created an automatically generated HTML dashboard on Jenkins to facilitate reporting to managers</li>
        <li>Deployed the Jenkins dashboard on 7 projects and increased the efficiencies</li>
        <li>Debugged C++ code for train control system to ensure quality delivery to the customer</li>
        <li>Acted as the Scrum master and led the verification & test team for 3 weeks</li>
      </ul>
    ),
  },
  {
    date: 'Jan - Apr 2022',
    location: 'Bombardier Aerospace',
    title: 'BIS Operations Architect Junior',
    content: (
      <ul className='list-disc pl-5 lg:pl-3'>
        <li>Analyzed Bombardier's software lifecycles and built an automated report using Power BI</li>
        <li>Built a Machine Learning model to minimize manual data cleaning and increase efficiency in software lifecycle management</li>
        <li>Deployed database monitoring software (Datadog) to ODBC servers and detect abnormal behaviors in server usage</li>
      </ul>
    ),
  },
  {
    date: 'Sep - Dec 2021',
    location: 'Concordia University',
    title: 'Service Desk Operator',
    content: (
      <ul className='list-disc pl-5 lg:pl-3'>
        <li>Troubleshot computer software by researching on the spot</li>
        <li>Configured network ports for static IP machines using Windows Command Line Interface</li>
        <li>Monitored computer registration and network via SSH connection with PuTTy</li>
      </ul>
    ),
  },
  {
    date: 'Jun - Aug 2021',
    location: 'Bombardier Aerospace',
    title: 'Technical Specialist',
    content: (
      <ul className='list-disc pl-5 lg:pl-3'>
        <li>Provided software and hardware support for Bombardier employees</li>
        <li>Diagnosed and refurbished 100 laptops for Bombardier</li>
        <li>Actively organized the workspace and kept things in order</li>
      </ul>
    ),
  },
];


/**
 * Project section
 */
export const project: TimelineItem[] = [
  {
    date: 'Dec. 2023 - Present',
    location: 'HobbyHop Start-up',
    title: 'Backend Software Developer',
    content: (
      <ul className='list-disc pl-5 lg:pl-3'>
        <li><span className='font-bold italic'>Technologies: </span>AWS, REST API, Bubble.io</li>
        <li>Created the HobbyHop website, a place where people can share their hobby gears with their local community</li>
        <li>Responsible for the backend logic, ensuring safe and secure transactions for clients</li>
        <li>Created AWS REST API gateway to transfer data between the website and AWS S3 database</li>
      </ul>
    ),
  },
  {
    date: 'Sep. - Dec. 2023',
    location: 'Web Enterprise App course',
    title: 'TapTapGo keyboard vendor website',
    content: (
      <ul className='list-disc pl-5 lg:pl-3'>
        <li><span className='font-bold italic'>Technologies: </span>Java, Java Servlet Page (JSP), MySQL, SQLite, Shell script, Maven, Tomcat Apache</li>
        <li>Developed a keyboard vendor website with client and product management functionalities for staff</li>
        <li>Integrated a MySQL database server to the application using JDBC connector</li>
        <li>Communicate effectively with teammate to adapt to sudden changes in the requirements (from MySQL to SQLite)</li>
        <li>Wrote a shell script to facilitate one-click deploy for the whole team</li>
      </ul>
    ),
  },
  {
    date: 'Jan. - Apr. 2023',
    location: 'Compiler Design course',
    title: 'Moon Compiler',
    content: (
      <ul className='list-disc pl-5 lg:pl-3'>
        <li><span className='font-bold italic'>Technologies: </span>Java, Assembly, OOP Design Pattern</li>
        <li>Developed a compiler that transforms human-readable code to assembly code</li>
        <li>Designed the compiler using Composite and Visitor patterns</li>
        <li>Implemented an assembly code generator that can handle multi-dimensional arrays and object-oriented operations with inspiration from the C programming language</li>
        <li>Put in all effort possible to complete the project in a tight deadline</li>
      </ul>
    ),
  },
  {
    date: 'Jan. - Apr. 2023',
    location: 'Computer Network course',
    title: 'Video Streaming App',
    content: (
      <ul className='list-disc pl-5 lg:pl-3'>
        <li><span className='font-bold italic'>Technologies: </span>JavaScript, Shell script, MySQL, PHP, Video Encoding</li>
        <li>Developed a web-based video streaming app using JavaScript and the LAMP staack (Linux, Apache, MySQL, PHP)</li>
        <li>Integrated DASH library to enable variable quality video streaming that adapts to the network connection quality</li>
        <li>Wrote a shell script on the server-side to automatically encode video using ffmpeg and segment them</li>
        <li>Wrote a shell script to automatically compile a DASH playlist for all uploaded videos</li>
      </ul>
    ),
  },
  {
    date: 'Sep. - Dec. 2022',
    location: 'Software Engineering course',
    title: 'Book Project website',
    content: (
      <ul className='list-disc pl-5 lg:pl-3'>
        <li><span className='font-bold italic'>Technologies: </span>C#, PHP, MySQL, UML, JavaScript</li>
        <li>In a team of 6, planned out requirements and created software models to add extensions to the Book Project website</li>
        <li>Designed the recommendation feature for the website with C#</li>
        <li>Created a MySQL database server and stored serialized object data in JSON format</li>
        <li>Created a PHP and JavaScript script to connect the web app to MySQL database server</li>
      </ul>
    ),
  },
  {
    date: 'Sep. - Dec. 2021',
    location: 'Advanced Programming course',
    title: 'Warzone game',
    content: (
      <ul className='list-disc pl-5 lg:pl-3'>
        <li><span className='font-bold italic'>Technologies: </span>C++, OOP Design Patterns</li>
        <li>In a team of 5, created the Warzone strategic game using C++</li>
        <li>Created game object classes using multiple inheritance schema in C++</li>
        <li>Used Model-View-Controller model to communicate between components of the game</li>
      </ul>
    ),
  },
];

/**
 * Quote section
 */
export const quote: QuoteSection = {
  imageSrc: testimonialImage,
  quotes: [
    {
      name: 'Simon Sinek',
      text: 'No matter when or where, always bring your \'A\' game, because you never know when it will open doors for you.',
      image: 'https://simonsinek.com/wp-content/uploads/2021/11/simons-bio-simon-crop.png',
    },
    {
      name: 'Dr. Ernest Wong',
      text: 'Practice doesn\'t make perfect. Perfect practice makes perfect execution.',
      image: 'https://media.licdn.com/dms/image/C5603AQHDredbz_kmSw/profile-displayphoto-shrink_800_800/0/1516882588692?e=2147483647&v=beta&t=B0pjnAxmnXJrdYtRJUzmktNXy8biygIrUfFH6joD930',
    },
    {
      name: 'Tony Robbins',
      text: 'There is no such thing as failure. There are only results.',
      image: 'https://pbs.twimg.com/profile_images/1257396956881498114/Fj13PSh-_400x400.jpg',
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
