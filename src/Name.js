const greeting = {
    title: "Hi, I'm Eric Howard",
    logo_name: "Eric Howard",
    logo_img_show: false, // if true than show image(logo) in home page instant of text(logo)
    logo_img: "https://logo.letskhabar.com/name?name=name",
    full_name: "Eric Howard",
    email: "howarddesignstudio27@gmail.com",
    subTitle:
    "I'm a motivated, quick learning, and resourceful full-stack web developer with real-world experience working effectively in teams and engaging with clients. I'm excited to pursue a position as a junior software engineer or web developer and contribute technical value to a mission-focused company.",
    Programming: true,  // if true, Show 'Programming' section in home page, if false than not show
    developer: true,  // if true, Show 'Full Stack Development' section in home page, if false than not show
    designer: false,  // if true, Show 'designer' section in home page, if false than not show
    cloud_infra_architecture:false,  // if true, Show 'cloud_infra_architecture' section in home page, if false than not show
    data_Science: false,  // if true, Show 'data_Science' section in home page, if false than not show
    ml_ai: false,  // if true, Show 'ml_ai' section in home page, if false than not show
    Robotic: false,  // if true, Show 'Robotic' section in home page, if false than not show
    gamedev: false,  // if true, Show 'gamedev' section in home page, if false than not show
};

const BlogData = {
    // this show your dev.to blog in your Portfolio blog
    show_Blog: false,  // if true it Show your DEV.to article in Blog Section, if false than Blog Section convert to skill Section.
    devto_username: "vimal",
    Blog_Bio : [
        // this is visible in '/blog' section if show_Blog: true, else show in skill section
        "I'm currently improving my coding skills to become a better full-stack developer",
        "my main skill is MERN stack"
    ]
};


const socialMedia = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "github",
        img: "https://logo.letskhabar.com/img?tool=github",
        link: "https://github.com/EricHoward27"
    },
    {
        icon: "gitlab",
        img: "https://logo.letskhabar.com/img?tool=gitlab",
        link: "https://gitlab.com/EricHoward27"
    },
    {
        icon: "devto",
        img: "https://logo.letskhabar.com/img?tool=dev",
        link: "https://dev.to/erichoward27"
    },
    {
        icon: "linkedin",
        img: "https://logo.letskhabar.com/img?tool=linkedin",
        link: "https://www.linkedin.com/in/ehoward91/"
    },
    {
        icon: "mail",
        img: "https://logo.letskhabar.com/img?tool=mail",
        link: "mailto:howarddesignstudio27@gmail.com"
    }

];

const ProgrammingSkill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "javascript",
        img: "https://logo.letskhabar.com/img/?tool=javascript"
    },
    {
        icon: "python",
        img: "https://logo.letskhabar.com/img?tool=python"
    },

];

const DevSkill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "html",
        img: "https://logo.letskhabar.com/img?tool=html"
    },
    {
        icon: "css",
        img: "https://logo.letskhabar.com/img?tool=css3"
    },
    {
        icon: "js",
        img: "https://logo.letskhabar.com/img?tool=javascript"
    },
    {
        icon: "node",
        img: "https://logo.letskhabar.com/img?tool=node"
    },
    {
        icon: "sass",
        img: "https://logo.letskhabar.com/img?tool=sass"
    },
    {
        icon: "react",
        img: "https://logo.letskhabar.com/img?tool=react"
    },
    {
        icon: "vue",
        img: "https://logo.letskhabar.com/img?tool=vue-js"
    },
    {
        icon: "npm",
        img: "https://logo.letskhabar.com/img?tool=npm"
    },
    {
        icon: "yarn",
        img: "https://logo.letskhabar.com/img?tool=yarn"
    },
    {
        icon: "django",
        img: "https://logo.letskhabar.com/img/?tool=django"
    },
    {
        icon: "mongodb",
        img: "https://logo.letskhabar.com/img/?tool=mongodb"
    },
    {
        icon: "postgresql",
        img: "https://logo.letskhabar.com/img/?tool=postgresql"
    },
    {
        icon: "ubuntu",
        img: "https://logo.letskhabar.com/img/?tool=ubuntu"
    },
    {
        icon: "bootstrap",
        img: "https://logo.letskhabar.com/img/?tool=bootstrap"
    },
    {
        icon: "git",
        img: "https://logo.letskhabar.com/img/?tool=git"
    }

];

const DesignSkill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "figma",
        img: "https://logo.letskhabar.com/img?tool=figma"
    },
    {
        icon: "sketch",
        img: "https://logo.letskhabar.com/img?tool=sketch"
    },
    {
        icon: "adobe-after-effects",
        img: "https://logo.letskhabar.com/img?tool=adobe-after-effects"
    },
    {
        icon: "adobe-xd",
        img: "https://logo.letskhabar.com/img?tool=adobe-xd"
    },
    {
        icon: "adobe-illustrator",
        img: "https://logo.letskhabar.com/img?tool=adobe-illustrator"
    },
    {
        icon: "adobe-photoshop",
        img: "https://logo.letskhabar.com/img?tool=adobe-photoshop"
    },
    {
        icon: "adobe-premiere-pro",
        img: "https://logo.letskhabar.com/img?tool=adobe-premiere-pro"
    }

];
const cloud_infra_architecture_Skill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "gcp",
        img: "https://logo.letskhabar.com/img?tool=google_cloud"
    },
    {
        icon: "aws",
        img: "https://logo.letskhabar.com/img?tool=amazon-web-services"
    },
    {
        icon: "azure",
        img: "https://logo.letskhabar.com/img?tool=azure"
    },
    {
        icon: "kubernetes",
        img: "https://logo.letskhabar.com/img?tool=kubernetes"
    },
    {
        icon: "travis",
        img: "https://logo.letskhabar.com/img?tool=travis"
    },
    {
        icon: "linode",
        img: "https://logo.letskhabar.com/img?tool=linode"
    },
    {
        icon: "oracle",
        img: "https://logo.letskhabar.com/img?tool=oracle"
    }

];
const data_Science_Skill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "python",
        img: "https://logo.letskhabar.com/img?tool=python"
    },
    {
        icon: "kaggle",
        img: "https://logo.letskhabar.com/img?tool=kaggle"
    },
    {
        icon: "tensorflow",
        img: "https://logo.letskhabar.com/img?tool=tensorflow"
    },
    {
        icon: "jupyter",
        img: "https://logo.letskhabar.com/img?tool=jupyter"
    }

];
const Ml_ai_Skill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "python",
        img: "https://logo.letskhabar.com/img?tool=python"
    },
    {
        icon: "tensorflow",
        img: "https://logo.letskhabar.com/img?tool=tensorflow"
    }
];

const RoboticSkill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "tensorflow",
        img: "https://logo.letskhabar.com/img?tool=tensorflow"
    },
    {
        icon: "arduino",
        img: "https://logo.letskhabar.com/img?tool=arduino"
    },
    {
        icon: "python",
        img: "https://logo.letskhabar.com/img?tool=python"
    },

];

const Gamedev_Skill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "unity",
        img: "https://logo.letskhabar.com/img?tool=unity"
    },
    {
        icon: "c-programming",
        img: "https://logo.letskhabar.com/img?tool=c-programming"
    },
    {
        icon: "c-sharp",
        img: "https://logo.letskhabar.com/img?tool=c-sharp-logo"
    }

];


const projects = [
    {
        id: "1",
        name: "Ecommerce CRUD app",
        Description: "Ecommerce app will allow users to login and add, remove, edit items to the shopping cart using the python django stack.",
        Code_Link: "https://github.com/EricHoward27/ecommerce-client",
        Live_link: "https://erichoward27.github.io/ecommerce-client/",
        tool_used: "python,postresql,react",
        img: "."
    },
    {
        id: "2",
        name: "Ecommerce Web app(MERN Stack)",
        Description: "work in progress",
        Code_Link: "https://github.com/EricHoward27/survey-client",
        Live_link: "https://erichoward27.github.io/survey-client/",
        tool_used: "mongodb,express,react",
        img: "."
    },
    {
        id: "3",
        name: "SurveyUs",
        Description: "SurveyUs is the flagship application produced by the creatives at Mattastic-Voyage Industries. One part survey, one part the adventure of taking a survey, SurveyUs aims to streamline the surveying process by asking users tough questions and limiting their responses.",
        Code_Link: "https://github.com/EricHoward27/survey-client",
        Live_link: "https://erichoward27.github.io/survey-client/",
        tool_used: "express,mongodb,react",
        img: "."
    }
];
const certificate = [
    {
        id: "1",
        name: "Purdue University Global",
        Description: "Associate of Applied Science with Purdue University Global",
        Link: "this is code link",
        img: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/13108535"
    },
    {
        id: "2",
        name: "General Assembly",
        Description: "12-Week Software Engineer Immersive Program with General Assembly",
        Link: "this is code link",
        img: "https://master-portfolio.js.org/src/assets/img/mplogo.png"
    }
];

const ProgrammingBio = [
    "I know javascript and python",
    'I can build RESTful APIs and integrate data from third party APIs',
    "I can cover front-and-back-end programming fundamentals"
];

const DevBio = [
    "Building responsive website front end using React-Redux",
    'Developing mobile applications using Flutter',
    'Creating application backend in Node & Express'
];

const DesignBio = [
    'Designing attractive user interface for mobile and web applications',
    'Customizing logo designs',
    'Editing video'
]


const AboutBio =[
    ' I’m currently learning Full Stack Development.',
    ' I’m currently working with Node.js, Express.js, React, Mongodb, Javascript, Flutter, etc',
    ' Fun fact: \'Equal is Not Always Equal in Javascript\'',
    ' I am From Chicago',
    ' I am available on almost every social media. You can message me'
];
const EducationBio =[
    ' I’m currently learning Full Stack Development.',
    ' I’m currently working with Node.js, Express.js, React, Mongodb, Javascript, Flutter, etc',
    ' I’m a student pursuing Software Development in Information Technology  from  Purdue University Global',
    ' I’m a fellow software engineer in training pursuing my certification from General Assembly coding bootcamp',
    ' Fun fact: \'Equal is Not Always Equal in Javascript\'',
];
const ProjectsBio =[
    ' I’m currently learning Full Stack Development.',
    ' I’m currently working with Node.js, Express.js, React, Mongodb, Javascript, Flutter, etc'
];
const ContactBio =[
    'I’m currently learning Full Stack Development.',
    ' I am From Chicago',
    ' I am available on almost every social media. You can message me'

];

const cloud_infra_architecture_Bio = [
    "You can Remove this section in name.js",
    "Experience working on multiple cloud platforms",
    'Hosting and maintaining websites on virtual machine instances along with integration of databases',
];

const data_Science_Bio = [
    "You can Remove this section in name.js",
    "Developing highly scalable production ready models for various deeplearning and statistical use cases",
    "you can change below skill icons"
];

const Ml_ai_Bio = [
    "You can Remove this section in name.js",
    "Complex quantitative modelling",
    "you can change below skill icons"
];

const RoboticBio = [
    "You can Remove this section in name.js",
    "Complex Robotic modelling",
    'you can edit this text from name.js',
    "you can change below skill icons from name.js"
];

const Gamedev_Bio = [
    "You can Remove this section in name.js",
    'you can edit this text from name.js',
    "you can change below skill icons from name.js"
];

export {
    greeting,
    socialMedia,
    DevSkill,
    DesignSkill,
    projects,
    certificate,
    AboutBio,
    EducationBio,
    ProjectsBio,
    ContactBio,
    DevBio,
    DesignBio,
    BlogData,
    ProgrammingSkill,
    RoboticSkill,
    cloud_infra_architecture_Skill,
    data_Science_Skill,
    Ml_ai_Skill,
    Gamedev_Skill,
    cloud_infra_architecture_Bio,
    data_Science_Bio,
    Ml_ai_Bio,
    Gamedev_Bio,
    ProgrammingBio,
    RoboticBio
};