export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    image?: string;
  }
  
  export interface Publication {
    id: string;
    title: string;
    authors: string[];
    venue: string;
    year: string;
    description: string;
    url: string;
    type: 'Journal' | 'Conference' | 'Preprint';
  }
  
  export interface Experience {
    id: string;
    title: string;
    company: string;
    period: string;
    description: string;
  }
  
  export interface Skill {
    name: string;
    category: 'Frontend' | 'Backend' | 'Data' | 'GIS';
  }
  
  export const personalInfo = {
    name: 'Vivian Lee',
    title: 'Fullstack Data Analyst',
    tagline: '',
    bio: 'I love solving problems by creating new ones for myself — the kind that involve spending six hours automating something just to save six seconds a day, because that’s fun <3 I’m hopelessly in love with GIScience, maps, and the art of over-engineering. In my spare time, I build apps and get far too excited about applied machine learning solutions.',
    email: 'vivianlee2468@gmail.com',
    github: 'https://github.com/vvvvvvvvvivvi',
    linkedin: 'https://www.linkedin.com/in/vivian-lee-wk/',
    youtube: 'https://www.youtube.com/@violetmyalias',
  };
  
  export const skills: Skill[] = [
    // Frontend
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'HTML', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
  
    // Backend
    { name: 'Node.js', category: 'Backend' },
    { name: 'Drizzle ORM', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Backend' },
    { name: 'Supabase', category: 'Backend' },
    { name: 'LLM API calls', category: 'Backend' },
  
    // Data
    { name: 'Python', category: 'Data' },
    { name: 'R', category: 'Data' },
    { name: 'SQL', category: 'Data' },
    { name: 'Excel', category: 'Data' },
  
    // GIS
    { name: 'ArcGIS Pro', category: 'GIS' },
    { name: 'ArcGIS Suite', category: 'GIS' },
    { name: 'QGIS', category: 'GIS' }
  ];
  
  
  export const projects: Project[] = [
    {
      id: '1',
      title: 'Modelling job accessibility impacts of new transport infrastructure',
      description: 'This dissertation models how the opening of new transport infrastructure, specifically the Elizabeth Line, reshapes spatial equity in job accessibility across London. Using transport network modelling and GIS-based analysis, it quantifies changes in travel times and identifies which areas gained or lost access to employment opportunities, highlighting the uneven benefits of major infrastructure investments.',
      technologies: ['R', 'ggplot2', 'r5r', 'Excel'],
      liveUrl: 'https://drive.google.com/file/d/1GP3jx45eCTo7DzUGsg2OCv4uTlX11CoO/view?usp=drive_link',
      githubUrl: 'https://github.com/vvvvvvvvvivvi/modelling-elizabethline',
    },
    {
      id: '2',
      title: 'Toxic Masculinity Discourse Analysis',
      description: 'This is a Nature Language Processing project conducted on Python (PyTorch). I contributed to fine-tuning models using PyTorch + Hugging Face, and developed a Python NLP pipeline using BERT for natural language inference and sentiment analysis on 500k Reddit posts (2017–2024).',
      technologies: ['Python', 'scikit-learn', 'PyTorch', 'seaborn', 'Excel', 'Hugging Face'],
      //liveUrl: 'https://drive.google.com/file/d/1lXSLfH3yQbE_jeT1jxh4OIOCPr61D9iz/view?usp=sharing',
      //githubUrl: 'https://github.com/vvvvvvvvvivvi/tiktokvirality',
    },    
    {
      id: '3',
      title: 'Modelling pop music success in the TikTok era',
      description: 'This project investigates how short-form video virality reshapes the music industry. Using machine learning models trained on audio features, playlist placements, and TikTok metrics, it compares pre- and post-TikTok timeframes to quantify which factors most strongly predict Billboard chart success. The analysis highlights the growing dominance of social media virality over traditional curation in driving modern pop popularity.',
      technologies: ['Python', 'scikit-learn', 'matplotlib', 'seaborn', 'Excel', 'Kaggle'],
      liveUrl: 'https://drive.google.com/file/d/1lXSLfH3yQbE_jeT1jxh4OIOCPr61D9iz/view?usp=sharing',
      githubUrl: 'https://github.com/vvvvvvvvvivvi/tiktokvirality',
    },
    {
      id: '4',
      title: 'Lucky Star Jar',
      description: 'Lucky Star Jar is an interactive web app that gamifies affection through digital “lucky stars.” Each star contains a hidden compliment that can be drawn, shaken, or unlocked over time. The project blends playful design with dynamic front-end interactions, allowing users to “collect” compliments in a ComplimentDex and view their progress. The app was originally created as a personal birthday gift, for a special recipient whose love language is words of affirmation.',
      technologies: ['React', 'Tailwind CSS', 'Three.js', 'Javascript', ],
      //liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/vvvvvvvvvivvi/lucky-star-jar',
    },
    {
        id: '5',
        title: 'Recipee',
        description: 'Recibee is a start-up idea. It is a web app/ IOS app that personalises cooking through intelligent recipe recommendations. Users log their available ingredients and kitchen tools, and the app suggests recipes or ingredient substitutions powered by an LLM processor and external recipe APIs. It dynamically adjusts portions, proposes replacements for missing ingredients, and learns user preferences over time.',
        technologies: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Drizzle ORM', 'OpenAI API', 'pnpm'],
        //liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/vvvvvvvvvivvi/recibeeSandbox',
      },
  ];
  
  export const publications: Publication[] = [
    {
      id: '1',
      title: 'Connecting London: The Impact of the Elizabeth Line on Accessibility and Spatial Equity',
      authors: ['Vivian Lee', 'Paul Longley', 'Justin van Dijk'],
      venue: '33rd GISRUK Conference 2025',
      year: '2025',
      description: 'In London, where the majority of employment opportunities are concentrated in the City of London and Canary Wharf, the public transport system plays a key role in connecting people to these jobs. With the opening of the Elizabeth Line in May 2022, parts of East and West London have seen improved travel times to these employment hubs. In this paper, we compare spatial accessibility to employment opportunities before and after this change and assess the spatial equity effects. Using the r5r package for R, we calculate a gravity-based opportunity metric based on public transport travel times. We subsequently evaluate the spatial equity of changes in job accessibility by profiling areas against socio- economic and socio-demographic characteristics, specifically socio-economic deprivation, share of households with access to a private vehicle, proportion of BAME residents, and unemployment rate structure.',
      url: 'https://zenodo.org/records/15121832',
      type: 'Conference',
    },
    {
      id: '2',
      title: 'Coming soon...',
      authors: ['Vivian Lee', 'Justin van Dijk'],
      venue: 'Coming soon...',
      year: '2026',
      description: 'Coming soon...',
      //url: 'https://doi.org/your-second-publication-link',
      type: 'Journal',
    }
  ];
  
  export const experiences: Experience[] = [
    {
      id: '1',
      title: 'Graduate GIS Analyst',
      company: 'Company Name',
      period: '2024 - Present',
      description: 'Developed Python scripts and FME workbenches to automate geospatial analyses and figure production for diverse projects across UK&I.',
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      company: 'What if i',
      period: '2025 - Present',
      description: 'Built and maintained web applications using modern technologies, collaborated with cross-functional teams.',
    },
    {
      id: '3',
      title: 'Teaching Assistant',
      company: 'UCL',
      period: '2023 - 2025',
      description: 'Employing proficiency in R and Python programming, provided teaching assistance to post-graduate digital skill classes.',
    },
  ];
  
  export const milestones = [
    { label: 'Projects Completed', value: '5+' },
    { label: 'Years Experience', value: '3+' },
    { label: 'Industries Sampled', value: '9' },
    { label: 'Publications', value: '2' },
  ];
  