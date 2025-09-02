import ExperienceCard from '../components/timeline/ExperienceCard';
import ExperienceTimeArea from '../components/timeline/ExperienceTimeArea';

export const EXPERIENCE = [
  {
    label: (
      <ExperienceTimeArea position="Freelance Software Engineer" time="February 2024-Present" />
    ),
    children: (
      <ExperienceCard
        company="Self Employed"
        location="Ankara"
        description={`
            - Develop cross-platform applications from scratch to production, and maintain them post-release.
            - Build full-stack mobile, web, and desktop applications using React Native, Java, and React.
            - Design and implement scalable backend systems with Spring Boot, PostgreSQL, and Docker.
            - Manage global state and offline persistence with Zustand and SQLite in mobile/web environments.
            - Publish and maintain applications on Google Play, handling all stages from development to deployment.
          `}
      />
    ),
    color: '#f97316'
  },
  {
    label: <ExperienceTimeArea position="Software Engineer" time="May 2019–February 2024" />,
    children: (
      <ExperienceCard
        company="ASELSAN"
        location="Ankara"
        description={`
       - Collaborated within an agile team of developers, designers, and system engineers to develop military radar systems.
       - Delivered 10+ Java-based software projects with clean, modular, and well-documented code.
       - Identified customer requirements and delivered tailored software solutions.
       - Authored technical documentation, including design definitions and requirement specifications.
       - Took end-to-end responsibility for the development and maintenance of projects.
       - Managed subcontractor processes for 3 critical projects by analyzing requirements and overseeing implementation.
        `}
      />
    ),
    color: '#f97316'
  },
  {
    label: <ExperienceTimeArea position="Candidate Engineer" time="November 2018–April 2019" />,
    children: (
      <ExperienceCard
        company="Turkish Aerospace"
        location="Ankara"
        description="Automated test processes for internal web applications using Selenium, Java, and Hibernate."
      />
    ),
    color: '#f97316'
  },
  {
    label: <ExperienceTimeArea position="Intern" time="July 2018–August 2018" />,
    children: (
      <ExperienceCard
        company="ASELSAN"
        location="Ankara"
        description="Participated in a military radar project and contributed to a multi-Telnet project using Java."
      />
    ),
    color: '#f97316'
  },
  {
    label: <ExperienceTimeArea position="Candidate Engineer" time="March 2018–June 2018" />,
    children: (
      <ExperienceCard
        company="Turkish Aerospace"
        location="Ankara"
        description="Worked in a QA & testing team within the IT department, supporting software quality processes."
      />
    ),
    color: '#f97316'
  }
];
