import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Saumya",
  lastName: "Kumari",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Front-End Web Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/India",
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sharmasaumya173",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/saumya-sharma-743620307",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "sharmaasomyaa@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Saumya Kumari</>,
  subline: (
    <>
      Hi, I'm Saumya Kumari, currently pursuing MCA from <InlineCode>Galgotia's University</InlineCode>.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Saumya is a Front-End Web Developer with a passion for transforming complex challenges
        into simple, elegant design solutions. Her work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Fresher",
        timeframe: "Present",
        role: "Front-End Web Developer",
        achievements: [
          <>
            Currently seeking opportunities to apply my skills and knowledge in front-end web development.
          </>,
          <>
            Actively working on personal projects to enhance my portfolio and practical experience.
          </>,
          <>
            Participating in online coding challenges and hackathons to improve problem-solving skills.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Galgotia's University",
        description: <>Pursuing Master of Computer Applications (MCA).</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Front-End Development",
        description: <>Proficient in HTML, CSS, JavaScript, and modern front-end frameworks & Java Fundamentals, Java Frameworks and Libraries, Data Structure And Algorithms, Database Concepts & Soft Skills.</>,
        images: [],
      },
      {
        title: "Responsive Design",
        description: <>Creating responsive and mobile-fit web applications.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    // ... (other gallery images remain the same)
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };