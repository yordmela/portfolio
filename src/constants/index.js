const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const aboutHighlights = [
  {
    label: "Education",
    value: "BSc Software Engineering",
    detail: "Addis Ababa University (AAIT) · 2022–2026",
  },
  {
    label: "Focus",
    value: "Design × Product × Tech",
    detail: "From ideas to interfaces to working products",
  },
  {
    label: "Currently",
    value: "Junior Software Developer",
    detail: "Majestic · Full-time",
  },
];

const howIWork = [
  {
    imgPath: "/images/seo.png",
    title: "Understand the problem",
    desc: "I start by clarifying goals, constraints, and what success looks like before jumping into solutions.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Think about the user",
    desc: "I map how people move through a product so flows feel intentional, not just feature-complete.",
  },
  {
    imgPath: "/images/time.png",
    title: "Design, build, iterate",
    desc: "I move between product thinking, interface design, and implementation — refining as I learn.",
  },
];

const techStackIcons = [
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript / Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const skillCategories = [
  {
    title: "Design",
    skills: [
      "UI/UX",
      "Product Design",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Figma",
    ],
  },
  {
    title: "Engineering",
    skills: [
      "JavaScript",
      "Java",
      "Node.js",
      "NestJS",
      "REST APIs",
      "Socket.io",
      "Git",
      "Linux",
    ],
  },
  {
    title: "Mobile",
    skills: [
      "Flutter",
      "Dart",
      "BLoC",
      "Firebase",
      "Agora SDK",
      "Google Play Console",
    ],
  },
  {
    title: "AI",
    skills: [
      "RAG pipelines",
      "TF-IDF",
      "Sentence Transformers",
      "CNN / TensorFlow",
      "OpenCV",
      "SAM (Meta)",
      "Streamlit",
      "Flask",
      "LLM APIs",
    ],
  },
];

const expCards = [
  {
    company: "Majestic",
    title: "Junior Software Developer",
    date: "Present · Full-time",
    mark: "M",
    logo: "/images/logos/Majestic.png",
    summary:
      "Building software in a production mobile environment. Details kept high-level.",
    responsibilities: [
      "Contribute to mobile application development in a production environment.",
      "Work on application workflows, API integration, and authentication / login flows.",
      "Debug issues, collaborate with other engineers, and use Git for version control.",
      "Support offline / synchronization behavior and device-related functionality where needed.",
    ],
  },
  {
    company: "Freelance",
    title: "Flutter Developer",
    date: "Jan 2026 – May 2026",
    mark: "F",
    summary:
      "Built real-time order updates for a food delivery app on iOS and Android.",
    responsibilities: [
      "Showed live order status, ETA, and delivery progress outside the app.",
      "Handled background notifications over sockets and push, with accept/reject actions, an overlay, and alert tones.",
      "Refactored socket handling so the connection used fewer resources and stayed more reliable.",
    ],
  },
  {
    company: "Ethio Future Tutor",
    title: "Flutter & Firebase Developer",
    date: "Jul 2025 – Mar 2026",
    mark: "E",
    logo: "/images/logos/ethiofuture.jpg",
    summary:
      "Engineering on the Android app: Flutter, Firebase, live sessions, payments, and the store release.",
    responsibilities: [
      "Built the app in Flutter and BLoC with a modular, feature-based structure.",
      "Implemented OTP and Google sign-in, tutor discovery, booking, a wallet, and live sessions.",
      "Integrated Agora for video calls and chat, plus Firebase Auth, Firestore, Cloud Functions, and FCM.",
      "Added Telebirr, CBE Birr, and M-Pesa, including an ETB wallet and top-ups.",
      "Took the release through Google Play Console: reviews, store setup, and publishing.",
    ],
  },
];

const education = {
  school: "Addis Ababa University (AAIT)",
  program: "BSc Software Engineering",
  summary: "Addis Ababa University · 2022–2026",
  detail: "Five-year Software Engineering degree.",
  date: "June 2022 – June 2026",
  mark: "AA",
  logo: "/images/logos/aau.png",
  note: "Coursework included DSA, OS, DBMS, Machine Learning, and Mobile App Development. Later university years had a strong AI focus.",
};

const programs = [
  {
    name: "Africa to Silicon Valley (A2SV)",
    org: "Backed by Google",
    date: "Nov 2023 – July 2025",
    mark: "A2",
    logo: "/images/logos/a2sv.png",
    points: [
      "Solved 450+ DSA problems on LeetCode and Codeforces, with 160+ hours of practice.",
      "Collaborated with 30+ engineers on weekly problem-solving and built a Flutter app with auth, CRUD, and state management.",
    ],
  },
];

const privateCover = "/images/project-private.svg";

/**
 * Central project data.
 *
 * shareScreenshots: false means the public page shows a shared cover and the
 * written case study only — no screenshot gallery.
 */
const projects = [
  {
    id: "ashamlolie",
    title: "Ashamlolie",
    shortDescription:
      "UI/UX for a delivery app, including the admin panel for roles such as branch manager and HQ admin.",
    category: "featured",
    tags: ["Product Design", "UI/UX", "Product Thinking"],
    coverImage: "/images/ashamlole/asham_lole_thumbnail.png",
    coverBg: "#eef2f5",
    shareScreenshots: true,
    role: "UI/UX contract for the delivery app and its admin panel",
    overview:
      "Ashamlolie is a delivery app. The UI/UX contract covered how customers move through the product, and the admin panel used by different roles — including branch manager, HQ admin, and others.",
    problem:
      "The delivery app needed clearer layouts and user flows, and the admin side needed interfaces for more than one role.",
    contribution:
      "I designed the delivery experience and the admin panel UI in Figma: layouts, the color system, user flows, and interface recommendations for roles including branch manager and HQ admin.",
    process: [
      "Client discussions around requirements and product direction",
      "Mapping user flows for the delivery experience",
      "Defining what each role needs in the admin panel, including branch manager and HQ admin",
      "Layout and interface decisions in Figma",
      "Color system and visual design",
      "Product and interface recommendations",
    ],
    productThinking:
      "This project shows how I move from requirements into user flows and concrete UI — for customers using the delivery app, and for the different roles in the admin panel.",
    gallery: [
      "/images/ashamlole/Home.png",
      "/images/ashamlole/image1.png",
      "/images/ashamlole/image2.png",
      "/images/ashamlole/image3.png",
      "/images/ashamlole/Groceries%20Details.png",
    ],
    tools: ["Figma", "User Flows", "Product Design", "UI/UX"],
    outcome: "",
    links: {
      figma: "",
      github: "",
      live: "",
    },
  },
  {
    id: "ethio-future-tutor",
    title: "Ethio Future Tutor",
    shortDescription:
      "An Android tutoring app for finding a tutor, booking a session, and learning live. Product design and engineering, live on Google Play.",
    category: "featured",
    tags: ["Product Design", "Flutter", "Firebase", "Mobile"],
    coverImage: "/images/ethiofuture/ethiofuture_thumbnail.png",
    coverBg: "#f4f7f4",
    shareScreenshots: true,
    role: "Flutter & Firebase Developer · UI/UX and product implementation",
    overview:
      "Ethio Future Tutor is a production Android tutoring app I architected and shipped with Flutter and BLoC. It is live on Google Play. I also worked on the product interface — not only the implementation.",
    problem:
      "Turn a tutoring product into a usable Android experience that could handle auth, discovery, booking, payments, and live sessions.",
    contribution:
      "Alongside the interface, I implemented the Android app in Flutter and BLoC: OTP and Google sign-in, tutor discovery, booking, a wallet, and live sessions. Agora handled video and chat. Firebase covered auth, data, functions, and notifications. Payments used Telebirr, CBE Birr, and M-Pesa.",
    process: [
      "Product and interface thinking with the build",
      "Flutter and BLoC, in a modular feature structure",
      "Sign-in, tutor discovery, booking, wallet, and live sessions",
      "Agora video and chat; Firebase Auth, Firestore, Cloud Functions, and FCM",
      "Telebirr, CBE Birr, and M-Pesa, then Google Play publishing",
    ],
    productThinking:
      "This project connects design, product, and engineering: shaping how tutoring should work, then shipping it as a real Android app.",
    gallery: [
      "/images/ethiofuture/image1.png",
      "/images/ethiofuture/image2.png",
      "/images/ethiofuture/image3.png",
      "/images/ethiofuture/image4.png",
      "/images/ethiofuture/image5.png",
    ],
    tools: [
      "Flutter",
      "Dart",
      "BLoC",
      "Firebase",
      "Agora SDK",
      "Figma",
      "Google Play Console",
    ],
    outcome: "",
    links: {
      live: "https://ethiofuture-tutor-app.web.app/",
      play: "https://play.google.com/store/apps/details?id=com.ethiofuturetutor.app",
    },
  },
  {
    id: "a2sv-hub",
    title: "A2SV Hub",
    shortDescription:
      "The A2SV product — one of my first major interface projects, including Flutter authentication and UI.",
    category: "featured",
    tags: ["UI/UX", "Product Design", "Flutter"],
    coverImage: "/images/a2sv_hub/a2sv_hub_thumbnail.png",
    coverBg: "#e8eef8",
    shareScreenshots: true,
    role: "UI/UX, product design, and Flutter implementation",
    overview:
      "A2SV Hub is the A2SV portal. It was one of my first significant design projects, and I also worked on the Flutter app — authentication and UI.",
    contribution:
      "I worked on the product interface and design process, then on authentication and UI in Flutter.",
    process: [
      "Understanding the product context",
      "Interface design",
      "Flutter UI",
      "Authentication",
    ],
    productThinking:
      "This project is where design and implementation meet: shaping the portal experience and building part of it in Flutter.",
    gallery: [
      "/images/a2sv_hub/image1.png",
      "/images/a2sv_hub/image2.png",
      "/images/a2sv_hub/image3.png",
      "/images/a2sv_hub/image4.png",
      "/images/a2sv_hub/image5.png",
    ],
    tools: ["Figma", "Flutter", "UI/UX"],
    outcome: "",
    links: {
      figma: "",
      github: "",
      live: "",
    },
  },
  {
    id: "iddir",
    title: "IDDIR",
    shortDescription:
      "A Flutter and Firebase CRUD application delivered end to end — UI, auth, and data management.",
    category: "mobile",
    tags: ["Flutter", "Firebase", "Mobile"],
    coverImage: privateCover,
    coverBg: "#141418",
    shareScreenshots: false,
    role: "UI, authentication, data management, and end-to-end delivery",
    overview:
      "IDDIR is a Flutter and Firebase app for creating, reading, updating, and deleting records.",
    contribution:
      "I took it through the UI, authentication, Firebase data management, and delivery of the finished app.",
    process: [
      "UI implementation",
      "Authentication",
      "Data management with Firebase",
      "End-to-end delivery",
    ],
    gallery: [],
    tools: ["Flutter", "Firebase"],
    outcome: "",
    links: {
      figma: "",
      github: "",
      live: "",
    },
  },
  {
    id: "afro-vintage",
    title: "Afro Vintage",
    shortDescription:
      "A B2B2C multi-role Flutter e-commerce application — a more substantial mobile product build.",
    category: "mobile",
    tags: ["Flutter", "E-commerce", "Mobile"],
    coverImage: "/images/afrovintage/afrovintage_thumbnail.png",
    coverBg: "#e7f2f0",
    shareScreenshots: true,
    role: "Mobile / software engineering on a multi-role e-commerce app",
    overview:
      "Afro Vintage is a Flutter e-commerce app for more than one kind of user, set up as a B2B2C product.",
    contribution:
      "I worked on the mobile app and on supporting that multi-role structure.",
    process: [
      "Building the Flutter e-commerce app",
      "Supporting more than one user role",
    ],
    gallery: [
      "/images/afrovintage/image1.png",
      "/images/afrovintage/image2.png",
      "/images/afrovintage/image3.png",
      "/images/afrovintage/image4.png",
      "/images/afrovintage/image5.png",
    ],
    tools: ["Flutter"],
    outcome: "",
    links: {
      figma: "",
      github: "",
      live: "",
    },
  },
  {
    id: "ai-magic-photo-editor",
    title: "AI Magic Photo Editor",
    shortDescription:
      "A Photoshop-style editor combining Meta’s Segment Anything Model with a classical computer-vision pipeline.",
    category: "ai",
    tags: ["AI", "Computer Vision", "Python"],
    coverImage: privateCover,
    coverBg: "#141418",
    shareScreenshots: false,
    role: "Built the editor and vision pipeline",
    overview:
      "AI Magic Photo Editor is a Photoshop-style image editor that combines Meta’s Segment Anything Model (SAM) with a 22-tool classical computer-vision pipeline.",
    contribution:
      "I built masking, inpainting, background removal, document scanning, and face blur, and separated classical CV operations from transformer-based segmentation with point and box prompts.",
    process: [
      "Representative classical CV operations, including GrabCut, homography, CLAHE, and seamless cloning",
      "SAM segmentation with point and box prompts",
      "Image quality metrics — entropy, sharpness, and edge detection — with JSON export",
    ],
    gallery: [],
    tools: ["Python", "OpenCV", "SAM", "Streamlit"],
    outcome: "",
    links: { figma: "", github: "", live: "" },
  },
  {
    id: "ngo-proposal-assistant",
    title: "NGO Proposal Assistant",
    shortDescription:
      "A retrieval-augmented generation system for assisting with NGO proposals.",
    category: "ai",
    tags: ["AI", "RAG", "Python"],
    coverImage: privateCover,
    coverBg: "#141418",
    shareScreenshots: false,
    role: "RAG system",
    overview:
      "NGO Proposal Assistant is a retrieval-augmented generation system for helping with NGO proposals.",
    contribution:
      "I built the retrieval-augmented generation system behind the assistant.",
    process: [],
    gallery: [],
    tools: ["Python", "RAG"],
    outcome: "",
    links: { figma: "", github: "", live: "" },
  },
  {
    id: "fruit-recognition-cnn",
    title: "Fruit Recognition CNN",
    shortDescription:
      "A CNN trained from scratch on Ethiopian fruit images, deployed as a Flask app with live camera classification.",
    category: "ai",
    tags: ["AI", "CNN", "TensorFlow"],
    coverImage: privateCover,
    coverBg: "#141418",
    shareScreenshots: false,
    role: "Model training and deployment",
    overview:
      "Fruit Recognition CNN is an image classifier trained from scratch — no transfer learning — on 4,000 Ethiopian fruit images across 10 classes. It reached 80% test accuracy.",
    contribution:
      "I trained the network with MixUp, cosine learning-rate decay, L2 regularization, and dropout, then deployed it as a Flask web app with live camera-based classification.",
    process: [
      "CNN from scratch on 4,000 images across 10 classes",
      "MixUp, cosine learning-rate decay, L2 regularization, and dropout",
      "Flask deployment with live camera classification",
    ],
    gallery: [],
    tools: ["Python", "TensorFlow", "Keras", "Flask"],
    outcome: "80% test accuracy on 10 Ethiopian fruit classes.",
    links: { figma: "", github: "", live: "" },
  },
];

const featuredProjects = projects.filter((p) => p.category === "featured");
const technicalProjects = projects.filter((p) => p.category !== "featured");

const getProjectById = (id) => {
  const key = id === "a2sv-portal" ? "a2sv-hub" : id;
  return projects.find((p) => p.id === key);
};

/**
 * Social / profile links — only add real URLs.
 * Leave url empty (or keep commented) to hide that icon in the footer.
 */
const socialImgs = [
  {
    name: "github",
    imgPath: "/images/logos/git.svg",
    url: "https://github.com/yordmela",
  },
  // LinkedIn and LeetCode are on the CV, but the profile URLs are not listed.
  // { name: "linkedin", imgPath: "/images/linkedin.png", url: "" },
];

const contactInfo = {
  name: "Yordanos Melaku",
  email: "yordanos.mela@gmail.com",
  phone: "+251967933329",
  location: "Ethiopia",
};

export {
  words,
  aboutHighlights,
  howIWork,
  expCards,
  education,
  programs,
  projects,
  featuredProjects,
  technicalProjects,
  getProjectById,
  socialImgs,
  techStackIcons,
  skillCategories,
  navLinks,
  contactInfo,
};
