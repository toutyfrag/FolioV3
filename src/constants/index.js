import photos from "../assets";

//Links in the navbar
export const navigationLinks = [
  { name: "About", href: "/#about", linkValue: "About", type: "link" },
  { name: "Work", href: "/#project", linkValue: "Work", type: "link" },
  { name: "Contact", href: "/#contact", linkValue: "Contact", type: "link" },
  { name: "Resume", href: "/resume", linkValue: "Resume", type: "link" },
];

//Loogo/Link in the navbar
export const homeLink = {
  Home: {
    href: "https://stevensbougault.co.uk/",
    linkValue: "Stevens Bougault",
    type: "logo",
  },
};

//  Logic for the buttons in hero section. Dictionary for the button's link (If you add a value it will create a button)
export const buttonsHeroLink = [
  { github: "https://github.com/toutyfrag" },
  { linkedin: "https://www.linkedin.com/in/stevens-bougault/" },
];

//  Logic for the projects adding anything will create project and it's route if isActive is set to true
export const projectData = {
  nike: {
    path: "Nike",
    title: "Nike",
    description:
      "I've developed a Nike-themed website using Tailwind CSS, following a tutorial to boost my proficiency with Tailwind. This project comes after my portfolio work, enhancing my skills for faster development and aligning with industry standards.",
    techs: ["React", "Tailwind"],
    year: "2023",
    image: photos.nike,
    codeUrl: "https://github.com/toutyfrag/Folio1",
    projectUrl: "https://toutyfrag.github.io/Portfolio/",
    isActive: true, // Set this to true if you want to include it
  },
  folio2: {
    path: "Folio2",
    title: "Folio°2",
    description:
      "Welcome to my portfolio! This project represents my first step into web development, as I delved into React and discovered the efficiency of Tailwind CSS. Through this journey, I've sharpened my problem-solving skills, embraced the developer mindset, and built a strong foundation in React and Tailwind CSS and started to learn about animation using react spring.",
    techs: ["React", "Tailwind", "React-Spring"],
    year: "2023",
    image: photos.folio2,
    codeUrl: "https://github.com/toutyfrag/Folio1",
    projectUrl: "https://toutyfrag.github.io/Portfolio/",
    isActive: true, // Set this to true if you want to include it
  },
  simon: {
    path: "Simon",
    title: "Simon",
    description:
      "My first jQuery project, the Simon game, is a memory challenge inspired by the classic Simon game. In this game, players need to replicate a sequence of actions. If you succeed, the sequences get longer and more challenging as you progress.",
    techs: ["Jquery", "Html", "CSS", "Bootstrap"],
    year: "2021",
    image: photos.simon,
    codeUrl: "https://github.com/toutyfrag/SimonGame",
    projectUrl: "https://toutyfrag.github.io/SimonGame/",
    isActive: true, // Set this to true if you want to include it
  },
  clock: {
    path: "Clock",
    title: "Clock",
    description:
      "Clock is my first JavaScript project, inspired by the Qlocktwo watch. It's designed to let users view the time in a unique way and customise it. You can change the time, background, and even use a stopwatch.",
    techs: ["Javascript", "Html", "CSS", "Bootstrap"],
    year: "2021",
    image: photos.clock,
    codeUrl: "https://github.com/toutyfrag/clock",
    projectUrl: "https://toutyfrag.github.io/clock/index.html",
    isActive: true, // Set this to true if you want to include it
  },
  folio1: {
    path: "Folio1",
    title: "Folio°1",
    description:
      "A personal portfolio project developed with HTML, CSS, and Bootstrap.",
    about:
      "Folio°1 marks the inception of my journey into web development. Equipped with proficiency in HTML, CSS, and Bootstrap, I embarked on the exciting endeavor of crafting my inaugural portfolio, applying the knowledge I had diligently acquired.",
    techs: ["Javascript", "Html", "CSS", "Bootstrap"],
    year: "2021",
    image: photos.folio1,
    codeUrl: "https://github.com/toutyfrag/Folio1",
    projectUrl: "https://toutyfrag.github.io/Portfolio/",
    isActive: true, // Set this to true if you want to include it
  },
};
