// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "Kamilos01";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo = `I’m a Quality Lead & Automation Architect who believes that "it can’t be done" is just a challenge waiting for a solution. With over 6 years in the field, I’ve navigated everything from web and mobile apps to desktop software and gaming engines.

What I actually do:

I bridge the gap between manual and automation. One of my favorite parts of the job is mentoring manual testers, helping them level up their skills and transition into confident Automation Engineers.

I scale quality. Whether it's building frameworks from scratch or stress-testing systems for 100k+ daily users, I make sure the infrastructure holds up when it matters most.

I embrace the AI shift. I’m currently deep-diving into AI testing with tools like Promptfoo and LangSmith, finding ways to bake LLM evaluation and AI-driven efficiencies into the daily QA workflow.

I own the whole lifecycle. From the first requirement to the final Slack notification sent by a CI/CD pipeline, I ensure the process is automated, transparent, and—most importantly—reliable.

I’m not tied to a single tool or language. If a project needs a specific solution, I learn it, implement it, and move forward. Everything is possible with the right mindset and a bit of curiosity.`;
/* About Me Sections (Accordion)
 **************************************************************
  Expandable sections for the about me area.
*/
export const aboutMeSections = [
  {
    id: 1,
    title: "Bulletproof Infrastructure at Scale",
    content:
      "I build automation that doesn't just pass tests—it survives. From scratch-built frameworks to stress-testing apps with 100k+ daily users, I ensure the system stays up when the traffic hits hard.",
  },
  {
    id: 2,
    title: "The AI-Powered QA Workflow",
    content:
      "Currently deep-diving into LLM evaluation with Promptfoo and LangSmith. I don't just use AI; I bake it into the CI/CD pipeline to make testing smarter and faster.",
  },
  {
    id: 3,
    title: "Mentorship & Leveling Up Teams",
    content:
      "I love turning manual testers into automation powerhouses. I lead by example, showing that moving from 'clicker' to 'coder' is just a matter of the right mindset.",
  },
  {
    id: 4,
    title: "End-to-End Ownership",
    content:
      "From drafting requirements to automated Slack alerts on successful deployments. I own the whole pipeline, ensuring total transparency between dev and QA.",
  },
  {
    id: 5,
    title: "Language Agnostic, Solution Driven",
    content:
      "Need a framework in a language I haven't used yet? Give me a weekend. I care about solving the problem, not sticking to a favorite tool. Everything is possible.",
  },
];

export const aboutMeIntro = `I’m a Quality Lead & Automation Architect who turns "impossible" into "deployed". 

With over 6 years of experience, I’ve spent my career breaking and rebuilding complex ecosystems—from high-stakes gaming engines to massive web and mobile platforms. I don’t just find bugs; I architect the confidence teams need to ship faster.

How I make an impact:`;
/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  // tools
  {
    id: 1,
    skill: <Icon icon="simple-icons:playwright" className="display-4" />,
    name: "Playwright",
  },
  {
    id: 2,
    skill: <Icon icon="simple-icons:cypress" className="display-4" />,
    name: "Cypress",
  },
  {
    id: 3,
    skill: <Icon icon="simple-icons:appium" className="display-4" />,
    name: "Appium",
  },
  {
    id: 4,
    skill: <Icon icon="simple-icons:cucumber" className="display-4" />,
    name: "Cucumber/Gherkin",
  },
  {
    id: 5,
    skill: <Icon icon="simple-icons:githubactions" className="display-4" />,
    name: "GitHub Actions",
  },
  {
    id: 6,
    skill: <Icon icon="simple-icons:jenkins" className="display-4" />,
    name: "Jenkins",
  },
  {
    id: 7,
    skill: <Icon icon="simple-icons:k6" className="display-4" />,
    name: "k6",
  },
  {
    id: 8,
    skill: <Icon icon="simple-icons:apachejmeter" className="display-4" />,
    name: "jMeter",
  },
  {
    id: 9,
    skill: <Icon icon="simple-icons:postman" className="display-4" />,
    name: "Postman",
  },
  {
    id: 10,
    skill: <Icon icon="fa6-solid:server" className="display-4" />,
    name: "Browserstack",
  },
  {
    id: 11,
    skill: <Icon icon="simple-icons:git" className="display-4" />,
    name: "Git",
  },
  // languages
  {
    id: 12,
    skill: <Icon icon="simple-icons:javascript" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 13,
    skill: <Icon icon="simple-icons:typescript" className="display-4" />,
    name: "TypeScript",
  },
  {
    id: 14,
    skill: <Icon icon="simple-icons:python" className="display-4" />,
    name: "Python",
  },
  // remaining
  {
    id: 15,
    skill: <Icon icon="simple-icons:postgresql" className="display-4" />,
    name: "PostgreSQL",
  },
  {
    id: 16,
    skill: <Icon icon="simple-icons:mysql" className="display-4" />,
    name: "MySQL",
  },
  {
    id: 17,
    skill: <Icon icon="simple-icons:docker" className="display-4" />,
    name: "Docker",
  },
  {
    id: 18,
    skill: <Icon icon="simple-icons:amazonaws" className="display-4" />,
    name: "AWS",
  },
  {
    id: 19,
    skill: <Icon icon="simple-icons:sentry" className="display-4" />,
    name: "Sentry",
  },
  {
    id: 20,
    skill: <Icon icon="simple-icons:jira" className="display-4" />,
    name: "Jira",
  },
  {
    id: 21,
    skill: <Icon icon="simple-icons:firebase" className="display-4" />,
    name: "Firebase",
  },
  {
    id: 22,
    skill: <Icon icon="fa6-solid:mobile-screen-button" className="display-4" />,
    name: "Maestro",
  },
  {
    id: 23,
    skill: <Icon icon="fa6-solid:robot" className="display-4" />,
    name: "promptfoo",
  },
  {
    id: 24,
    skill: <Icon icon="simple-icons:testrail" className="display-4" />,
    name: "TestRail/xRay",
  },
  {
    id: 25,
    skill: <Icon icon="fa6-solid:server" className="display-4" />,
    name: "Rest API",
  },
  {
    id: 26,
    skill: <Icon icon="simple-icons:xcode" className="display-4" />,
    name: "xCode",
  },
  {
    id: 27,
    skill: <Icon icon="simple-icons:android" className="display-4" />,
    name: "Android Studio",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
// Projects to highlight on the home page (main section)
// if left empty, first three items from portfolioProjects will be used
export const filteredProjects = ["Trick or Treat", "AttendanceK12", "Wink"];

// Static list of portfolio projects (replaces GitHub repo fetching)
// include at least id, name, description, html_url, optional homepage/image
export const portfolioProjects = [
  {
    id: 1,
    name: "Trick or Treat",
    description: "Event platform built for Halloween campaigns.",
    html_url: "https://www.softkraft.co/event-platform-for-halloween/",
    homepage: "",
    image: null,
  },
  {
    id: 2,
    name: "Attendance",
    description: "School attendance solution (SaaS product).",
    html_url:
      "https://www.softkraft.co/saas-product-development-and-maintenance/",
    homepage: "",
    image: null,
  },
  {
    id: 3,
    name: "Wink Reports",
    description: "Business reporting SaaS redesign.",
    html_url: "https://www.softkraft.co/business-reporting-saas-redesign/",
    homepage: "",
    image: null,
  },
  {
    id: 4,
    name: "Wittario",
    description: "Online social gaming platform.",
    html_url: "https://www.wittario.com",
    homepage: "",
    image: null,
  },
  {
    id: 5,
    name: "3D Configurator",
    description: "Prefabricated building 3D configurator.",
    html_url:
      "https://4experience.co/portfolio-item/prefabricated-building-3d-configurator/",
    homepage: "",
    image: null,
  },
  {
    id: 6,
    name: "Mission one",
    description: "VR soft skills training platform.",
    html_url:
      "https://4experience.co/portfolio-item/missionone-vr-soft-skills-training/",
    homepage: "",
    image: null,
  },
  {
    id: 7,
    name: "Ar4Vision",
    description: "AR remote support application.",
    html_url:
      "https://4experience.co/portfolio-item/ar-remote-support-application/",
    homepage: "",
    image: null,
  },
  {
    id: 8,
    name: "Gym management software",
    description: "Comprehensive solution for gym operations.",
    html_url: "https://www.softkraft.co/gym-management-software/",
    homepage: "",
    image: null,
  },
  {
    id: 9,
    name: "AI Assistant for time logging",
    description: "Intelligent helper for tracking work time.",
    html_url: "https://www.softkraft.co/ai-assistant-for-time-logging/",
    homepage: "",
    image: null,
  },
  {
    id: 10,
    name: "Switch Board",
    description: "Contract lifecycle management solution.",
    html_url:
      "https://www.softkraft.co/contract-lifecycle-management-solution/",
    homepage: "",
    image: null,
  },
];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/

// Certificates
// list of earned qualifications with external links
export const certificates = [
  {
    title: "ISTQB® Certified Tester Foundation Level (CTFL v4.0)",
    issuer: "ISTQB.org",
    link: "https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/",
  },
  {
    title: "Professional Test Automation with Playwright",
    issuer: "Jaktestowac.pl",
    link: "https://jaktestowac.pl/playwright/",
  },
  {
    title: "Postman: The Complete Guide - REST API Testing",
    issuer: "Udemy",
    link: "https://www.udemy.com/course/postman-the-complete-guide/",
  },
  {
    title: "AI in Business Development (Umiejętności Jutra)",
    issuer: "Google & SGH",
    link: "https://rsvp.withgoogle.com/events/umiejetnoscijutra/",
  },
  {
    title: "Performance Testing with JMeter",
    issuer: "DlaTesterow.pl",
    link: "https://szkolenia.dlatesterow.pl/szkolenia/kurs-testy-wydajnosciowe-z-jmeterem/",
  },
  {
    title: "AI Testers vol 1.0",
    issuer: "Jaktestowac.pl",
    link: "#",
  },
];

// Footer icons theme (light or dark)
export const footerTheme = "dark";
