import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    nexity,
    unreal,
    nicysoft,
    sopra,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "A propos",
    },
    {
      id: "work",
      title: "Projets",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Developpeur Web",
      icon: web,
    },
    {
      title: "Developpeur Application",
      icon: mobile,
    },
    {
      title: "Developpeur Backend",
      icon: backend,
    },
    {
      title: "Data Scientist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
   
    {
      title: "Big Data",
      company_name: "NicySoft",
      icon: nicysoft,
      iconBg: "#E6DEDD",
      date: "Juin 2021 - Août 2021",
      points: [
        "Mise en place d'un système d'analyse d'habitudes des visiteurs pour leurs proposer des contenus les plus adaptés sur une plateforme de micro annonces.        ",
        "Implementation du design responsive et garantir la compatibilité entre navigateurs",
        "Participer aux revus de code et fournir des commentaires constructifs aux autres développeurs."
        
      ],
    },
    
    {
      title: "Developpeur Full stack ",
      company_name: "Nexity",
      icon: nexity,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - Oct 2022",
      points: [
        "Développeur Fullstack utilisant React, Next, Tailwindcss, Node et MongoDB J ai effectué la refonte de plateforme Kitlenid permettant aux jeunes de -30 ans d acheter leurs premiers appartements.",
        "Implementation du design responsive et garantir la compatibilité entre navigateurs",
        "Participer aux revus de code et fournir des commentaires constructifs aux autres développeurs."

      ],
    },
    {
        title: "Developpeur Java",
        company_name: "Sopra Steria",
        icon: sopra,
        iconBg: "#383E56",
        date: "Nov 2022 - Present",
        points: [
          "Développement et maintenance du logiciel SCAPIN à l’aide de Java et d’autres technologies connexes.",
          "Implementation du design responsive et garantir la compatibilité entre navigateurs",
          "Participer aux revus de code et fournir des commentaires constructifs aux autres développeurs."
          
        ],
    },
    {
        title: "React.js Developer",
        company_name: "Personnel",
        icon: unreal,
        iconBg: "#383E56",
        date: "March 2021 - Present",
        points: [
          "Création d'un jeu FPS avec Blueprint en utilisant Unreal Engine"
        ],
      },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Kit le nid",
      description:
        "Startup de chez Nexity accompagnant les jeunes diplômé dans leurs premiers achats d'appartements.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/kacoulib/kit-le-nid",
    },
    {
      name: "Archivage Numerique",
      description:
        "Plateforme web permettant au client d'archiver et de consulter des documents et fichiers.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/AbOky2/sne",
    },
    
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };