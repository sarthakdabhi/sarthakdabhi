export type Role = {
  title: string;
  start: string;
  end: string;
  location?: string;
  bullets: string[];
};

export type Experience = {
  company: string;
  period: string;
  url?: string;
  roles: Role[];
};

export const experience: Experience[] = [
  {
    company: "Tebra",
    period: "May 2021 — Present",
    url: "https://www.tebra.com",
    roles: [
      {
        title: "Staff Software Engineer",
        start: "Jul 2025",
        end: "Present",
        location: "Los Angeles, CA",
        bullets: [
          "Setting technical direction for the Practice Content & Widgets platform.",
          "Driving architecture reviews, mentorship, and cross‑team initiatives.",
        ],
      },
      {
        title: "Senior Software Engineer",
        start: "May 2021",
        end: "Jul 2025",
        location: "Santa Monica, CA",
        bullets: [
          "Architected and shipped two major systems: a Practice Content Management System and a Widgets platform for customer websites.",
          "Designed content version history, preview environments, and S3/cache‑backed read paths for scalability.",
          "Built a tree‑structured form engine that powers many content types from a single component (Google Forms‑style).",
          "Mentored engineers on design technique, coding standards, and review craft.",
        ],
      },
    ],
  },
  {
    company: "RxPrep",
    period: "Jun 2018 — May 2021",
    url: "https://www.rxprep.com",
    roles: [
      {
        title: "Software Development Lead & Architect",
        start: "Sep 2019",
        end: "May 2021",
        location: "El Segundo, CA",
        bullets: [
          "Defined the engineering org's tech, workflow, and coding standards from scratch.",
          "Owned all of AWS, GitHub, and engineering accounts; brought DevOps in‑house and cut ~$100k/yr in third‑party spend.",
          "Built and led a cohesive software team end‑to‑end across product delivery.",
          "Established release, review, and quality processes for scalable shipping.",
        ],
      },
      {
        title: "Senior Software Engineer",
        start: "Apr 2019",
        end: "Sep 2019",
        location: "El Segundo, CA",
        bullets: [
          "Led the migration from a monolith to microservices on AWS.",
          "Authored Terraform modules for test/staging/prod environments.",
          "Built web apps in Laravel + React; designed stateless APIs for web and mobile.",
        ],
      },
      {
        title: "Software Engineer Intern",
        start: "Jun 2018",
        end: "Mar 2019",
        location: "El Segundo, CA",
        bullets: [
          "Built and supported AWS infrastructure with automation/orchestration.",
          "Shipped features in Laravel + React, focused on API performance.",
        ],
      },
    ],
  },
  {
    company: "California State University, San Bernardino",
    period: "Nov 2017 — Jun 2018",
    roles: [
      {
        title: "Teaching Assistant — Data Structures, Algorithms & C++ OOP",
        start: "Nov 2017",
        end: "Jun 2018",
        location: "San Bernardino, CA",
        bullets: [
          "TA for Dr. Kerstin Voigt and Dr. David Turner.",
          "Ran labs and graded for 100+ undergraduate CS students.",
          "Wrote career‑oriented lab assignments and held weekly office hours.",
        ],
      },
    ],
  },
  {
    company: "Sooryen Technologies",
    period: "Oct 2016 — Jun 2017",
    roles: [
      {
        title: "Senior Software Engineer",
        start: "Oct 2016",
        end: "Jun 2017",
        location: "Ahmedabad, India",
        bullets: [
          "Delivered fintech solutions: SaveDay, Cetera, Kapitall, FolioDynamix.",
          "Built web for 1‑800 Flowers, SmileMakers, Bloomreach.",
          "Led a 5‑engineer team; ran daily scrum with US clients.",
          "Introduced Angular, React, and ExtJS to the practice.",
        ],
      },
    ],
  },
  {
    company: "Apps Wwhere (IIM‑A CIIE)",
    period: "Apr 2015 — Jul 2016",
    roles: [
      {
        title: "Product Manager",
        start: "Apr 2015",
        end: "Jul 2016",
        location: "Ahmedabad, India",
        bullets: [
          "Co‑built a location‑based address‑solutions startup incubated at IIM‑Ahmedabad's CIIE.",
          "Led a 10‑person product team (Android, web, design, marketing).",
          "Implemented Elasticsearch for search/analytics and CRON‑driven daily reporting.",
          "Company was acquired by RedMart (Singapore).",
        ],
      },
    ],
  },
  {
    company: "Educational Initiatives",
    period: "Jun 2014 — Apr 2015",
    roles: [
      {
        title: "Game Developer",
        start: "Jun 2014",
        end: "Apr 2015",
        location: "Ahmedabad, India",
        bullets: [
          "Built two large data‑heavy projects for national student assessments.",
          "Shipped hundreds of adaptive learning games in JS + HTML5 Canvas.",
          "Generated detailed assessment reports with R.",
        ],
      },
    ],
  },
  {
    company: "Self Employed",
    period: "May 2013 — Jun 2014",
    roles: [
      {
        title: "Full Stack Developer",
        start: "May 2013",
        end: "Jun 2014",
        location: "Ahmedabad, India",
        bullets: [
          "Freelanced for clients across India, Singapore, and the US.",
          "Built CRM/HRM/Payroll/Invoicing systems for Singapore clients.",
          "Coordinated a distributed network of 15 developers.",
          "Taught programming online to international students.",
        ],
      },
    ],
  },
];

export const education = [
  {
    school: "California State University, San Bernardino",
    degree: "M.S., Computer Science",
    years: "2017 — 2019",
  },
  {
    school: "Dharmsinh Desai University",
    degree: "B.Tech., Computer Science",
    years: "2009 — 2013",
  },
];
