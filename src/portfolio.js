/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sachin kumar Mohanty",
  title: "Hi all, I'm Sachin Kumar Mohanty",
  subTitle: emoji(
    "A creative and innovative full stack developer with a passion for building cutting-edge web applications using the latest frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1rK7zWb-_SqDEZdHd9kBktFvCoJIe2F43/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sachin7695",
  linkedin: "https://www.linkedin.com/in/sachin269/",
  gmail: "sachinmohanty269@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "MACHINE LEARNING ENTHUSIAST DRIVEN BY INNOVATION AND PERSISTENTLY EXPLORING THE FRONTIERS OF TECHNOLOGY",
  skills: [
    emoji(
      "⚡ Design and implement sophisticated machine learning models to deliver intelligent and intuitive user experiences."
    ),
    emoji("⚡ Create scalable Machine Learning applications using Tensorflow and Hugging Face."),
    // emoji(
    //   "⚡ Create and manage databases using MongoDB and SQL."
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "NIT, Rourkela",
      logo: require("./assets/images/NIT_Rourkela_Colour_Logo.svg.png"),
      subHeader: "B.Tech in Computer Science and Engineering",
      duration: "November 2020 - June 2024",
      desc: "Expected CGPA: 8.45",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "ReactJS", //Insert stack or technology you have experience in
      progressPercentage: "99%" //Insert relative proficiency in percentage
    },
    {
      Stack: "NextJS", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "NodeJS",
      progressPercentage: "98%"
    },
    {
      Stack: "Django",
      progressPercentage: "94%"
    },
    {
      Stack: "MongoDB",
      progressPercentage: "96%"
    },
    {
      Stack: "Web3.js",
      progressPercentage: "86%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Barclays",
      companylogo: require("./assets/images/barclays_logo_icon_168534.png"),
      date: "May, 2023 - July, 2023",
      desc: "Reduced average calculation time for process reusability to 9 seconds by using a React Dashboard to query API endpoints, pull data from the database, and present it in an intelligible UI with multiple graphs for visualization",
      descBullets: [
        "Contribution: Created a Django Backend including a custom package to calculate reusability and push the data to Database along with endpoints to fetch data from Database along with creating test suites using pytest along with writing SQL queries for processing data.",
        "Tech Stack: ReactJS, Django, pytest, SQL"
      ]
    },
    {
      role: "Spring Prep Fellow",
      company: "MLH",
      companylogo: require("./assets/images/mlh-logo-color.png"),
      date: "March 2022 - April 2022",
      desc: "Worked in a multicultured pod while developing a pod portfolio based on Ruby, Jekyll, HTML, and CSS",
      descBullets: [
        "Contributions: Developed a highly responsive and performant weather app using React along with multiple stand-ups, and show-and-tell",
        "Tech Stack: HTML, React, Jekyll"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Maven",
      projectDesc: "A cutting-edge Gen-AI powered fashion outfit genrator utilizing user's past purchase history and browsing preferences to understand their style and suggest personalised fashion",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/a-sambhab/GRID_5.0_Maven"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "NFTDocket",
      projectDesc: "Developed a Blockchain-based Warranty issuing platform that can be used by sellers to dispatch their warranties corresponding to their products to buyers via self expiring NFT.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/a-sambhab/NFTDocket"
        }
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "BlockNews",
      projectDesc: "BlockNews is a decentralised web application that allows users to prove a piece of news is fake or original and thus helps in reducing the spread of misinformation.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/a-sambhab/BlockNews"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ETHIndia 2022",
      subtitle:
        "Won the Push Protocol and Valist Pool prize in ETHIndia 2022",
      footerLink: [
        
      ]
    },
    {
      title: "Polygon BuidlIt 2022",
      subtitle:
        "Won the IPFS/Filecoin’s Pool Prize in Polygon BuidlIt 2022",
      footerLink: [
        
      ]
    },
    {
      title: "Spider'21",
      subtitle:
        "Second Runner’s Up Spider’21 ISTE BITS Frontend Webathon",
      footerLink: [
        
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 70088 57288",
  email_address: "saisambhab.chaini@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  achievementSection, bigProjects, blogSection, contactInfo, educationInfo, greeting, illustration, isHireable, openSource, podcastSection, skillsSection, socialMediaLinks,
  splashScreen, talkSection, techStack, twitterDetails, workExperiences
};

