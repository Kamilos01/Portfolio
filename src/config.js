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
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.";

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
export const filteredProjects = ["example-1", "example-2", "example-3"];

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
