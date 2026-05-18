export type Language = "en" | "zh" | "it";

export const translations = {
  en: {
    nav: {
      work: "Work",
      about: "About",
    },
    hero: {
      title: "CREATIVE",
      title2: "DEVELOPER",
      subtitle:
        "UI/UX Designer & Creative Developer with a focus on visual systems and digital experiences.",
    },
    work: {
      title: "Selected Works",
      viewProject: "View Project",
    },
    projects: [
      {
        id: 1,
        title: "SOCKOMO",
        category: "Sustainable Packaging Design",
        year: "2024-2025",
        image: "/调色后.mov",
        overview: {
          name: "SOCKOMO",
          type: "Creative Cartonboard Packaging & Interaction",
          scenario: "ProCarton Packaging Design Competition",
          team: "Gruppo 3 (Fangyu Mou, Jinrong Wu, Jiaxuan Ren, Jiayi Zheng)",
          academic:
            "Accademia Albertina di Torino, Visual Communication Design Methodology Course",
          intro:
            "An eco-friendly interactive packaging design that transforms children's sock packaging into a reusable foot-measuring ruler, combined with a fun interactive web experience, transforming a 'single-use consumable' into a 'practical household tool'.",
        },
        sections: [
          {
            title: "02. The Problem",
            points: [
              "Environmental Crisis: Traditional children's packaging usually uses mixed paper and plastic materials, resulting in extremely low recycling rates for packaging waste globally.",
              "Space Waste & Low Utilization: 90% of parents cite packaging taking up space as the primary reason for discarding it. Traditional packaging lacks secondary usage value.",
              "User Pain Points: Children's feet grow rapidly. When parents buy shoes and socks, they often buy the wrong size due to the inconvenience of measuring foot length.",
            ],
          },
          {
            title: "03. The Solution",
            points: [
              "Structural Innovation: By unfolding the originally discarded cardboard box packaging, it directly transforms into a children's foot measuring ruler covering sizes 9-26 cm.",
              "Eco-friendly & Sustainable: Made of 100% recyclable 300g cardboard, reducing carbon emissions and completely eliminating plastic pollution.",
              "Functionality & Interaction Combined: The packaging is not just a measuring tool but also a medium for interaction between parents and children, enhancing the brand's emotional value.",
            ],
          },
          {
            title: "04. Visual Identity",
            points: [
              "Creative Concept: Combining 'cute animals' with 'famous world paintings' to stimulate children's curiosity about art.",
              "Main Visual: The final choice was 'Giraffe × Girl with a Pearl Earring'. The giraffe's long neck perfectly matches the function of 'measuring length'.",
              "Typography & Colors: The logo and titles use the playful and highly recognizable PillowLava font. The color scheme uses vibrant gradients of blue, yellow, and orange, fitting children's visual preferences.",
            ],
          },
          {
            title: "05. Digital & Interaction Design",
            points: [
              "Multi-media Integration: We cleverly integrated a QR code design inside the packaging.",
              "Frontend Development: Developed a single-page interactive website independently using HTML, JavaScript, and CSS, hosted and deployed on GitHub. (https://fiona-mou.github.io/SOCKOMO/)",
              "Fun Educational Logic: After parents and children measure the foot length, they scan the QR code on the packaging to input the data. The webpage matches the foot length to the corresponding 'giraffe growth stage' (e.g., calf, subadult, adult) and pops up interesting fun facts.",
            ],
          },
        ],
        gallery: [
          "/sokomo-1.jpg",
          "/sokomo-2.jpg",
          "/sokomo-3.png",
          "/sokomo-4.png",
        ],
      },
      {
        id: 2,
        title: "MetaFit VR",
        category: "VR UI/UX Design",
        year: "2023",
        image: "/cover mockup.png",
        overview: {
          name: "METAFIT",
          type: "UI/UX Design, Metaverse Experience Design, Hardware & Software Integration",
          scenario: "Urban Commuters & Fitness Enthusiasts",
          team: "Fangyu Mou",
          academic: "Independent Project",
          intro:
            "METAFIT is a cross-spatial online fitness ecosystem combining Virtual Reality (VR), Artificial Intelligence (AI), and lightweight smart hardware, designed to help urban populations relieve physical and mental stress at a lower cost.",
        },
        sections: [
          {
            title: "02. The Problem",
            points: [
              "Urban Lifestyle Diseases: Urban commuters often sit for long periods, facing health crises, while going to the gym is costly and hard to maintain.",
              "Lack of Engagement: Traditional home fitness lacks interactivity and feedback, easily becoming boring and monotonous.",
              "Hardware-Software Disconnect: Fitness equipment on the market is often disconnected from digital content, failing to form a cohesive and immersive ecosystem.",
            ],
          },
          {
            title: "03. The Solution",
            points: [
              "Metaverse Immersion: Activating cross-spatial VR fitness scenes to make workouts feel like a game in nature or futuristic spaces.",
              "Hardware & Software Ecology: Developing lightweight smart hardware that connects seamlessly with UI/UX systems across multiple devices (Web, Mobile, Large Screen).",
              "AI Dynamic Feedback: Combining artificial intelligence algorithms to act as a virtual coach, tracking movements and providing scientific feedback.",
            ],
          },
        ],
        gallery: [
          "https://youtu.be/NtWalF4VJr0",
          "/METAFIT1.jpg",
          "/METAFIT2.jpg",
          "/METAFIT3.jpg",
          "/METAFIT4.jpg",
          "/METAFIT5.jpg",
          "/METAFIT6.jpg",
          "/METAFIT7.jpg",
          "/METAFIT8.jpg",
          "/METAFIT9.jpg",
          "/METAFIT10.jpg",
          "/METAFIT11.jpg",
        ],
      },
      {
        id: 3,
        title: "Karesansui IoT",
        category: "IoT & UX/UI",
        year: "2023",
        image: "/if cover 横.png",
        gallery: [
          "https://youtu.be/ZVlr6iJTZRg",
          "/if cover 横.png",
          "/karensansui1.jpg",
          "/karensansui2.jpg",
          "/karensansui3.jpg",
          "/karensansui4.jpg",
          "/karensansui5.jpg",
          "/karensansui6.jpg",
          "/karensansui7.jpg",
          "/karensansui8.jpg",
          "/karensansui9.jpg",
          "/karensansui10.jpg",
          "/karensansui11.jpg",
          "/karensansui12.jpg"
        ],
        overview: {
          name: "KARESANSUI",
          type: "Product Design, IoT Design, Interactive Installation Design, Service Design",
          scenario:
            "Target Audience: Meditation Beginners, Users struggling with mental visualization",
          team: "Timeline: Nov 2022 - Feb 2023",
          intro:
            "An interactive hardware-software product designed for meditators. By combining the minimalist and ethereal essence of traditional 'Karesansui' (Zen garden) with a digital app, it helps beginners break down barriers to meditation and achieve a more immersive experience.",
        },
        sections: [
          {
            title: "02. Problem & Background",
            points: [
              "Lack of Immersion in Experience: Most meditation products on the market are single software apps lacking coordination with physical devices, leading to weak interaction between the system and the user.",
              "High Barrier for Beginners: Without authoritative visual guidance, many beginners find it difficult to imagine meditation scenes with their eyes closed, easily leading to frustration.",
              "Market Trends: Research shows that cost-effective, multi-accessory device ecosystems are future market trends; additionally, meditation effects with visual and physical interactions are twice as effective as pure audio.",
            ],
          },
          {
            title: "03. Design Challenge & Goals",
            points: [
              "Design Challenge: How to interpret meditation from a new perspective and use cross-media interactive means to bring a more engaging and immersive experience to the audience?",
              "Short-term Task: Utilize the combination of physical products and mobile applications to guide users quickly into a deep state of meditation.",
              "Medium-term Goal: Help users form good daily meditation habits scientifically and efficiently.",
              "Long-term Vision: Democratize and secularize meditation, reshaping an immersive and interactive meditation world globally.",
            ],
          },
          {
            title: "04. The Solution: Physical-Digital Interaction",
            points: [
              "Landscape Trees: Users can lightly touch the landscape trees on the installation to control the playback and rhythm of meditation music in the app, enhancing sensory immersion.",
              "Mountain Stones & Rake: During the meditation Q&A section (e.g., the app asks 'Do you prefer a bright or dark environment?'), users no longer need to stare at their phone screens. Instead, they directly use a small physical rake on the sand table to move stones left or right. The installation captures this action and translates it into option feedback within the app. This design turns 'choosing' into a 'Zen action,' greatly maintaining the continuity of meditation.",
            ],
          },
          {
            title: "05. Technology & Prototyping",
            points: [
              "Hardware Sensors: Used Arduino combined with MPU6050 (3-axis gyroscope) to capture users' sliding and moving data on the sand table.",
              "Data Communication & Visual Processing: Transmitted hardware data to the system via Bluetooth modules and used TouchDesigner to translate interaction data into visual or control signals in real-time.",
              "Product Modeling: Conducted 3D modeling and material testing for the physical Karesansui installation, ensuring an aesthetic structure suitable for modern homes and a reasonable center of gravity (to prevent sand spills).",
            ],
          },
          {
            title: "06. User Testing & UI Iteration",
            points: [
              "Emotion Slider Interaction: Optimized the originally cumbersome emotion selection into a simple 'Slider,' making it more intuitive.",
              "Adaptive Q&A Mechanism: Interactive meditation guiding questions are adaptively generated based on the user's set meditation duration and evenly distributed over specific intervals to avoid interrupting deep thought.",
              "Brand-new UI Visuals: The app interface is based on a dark mode, matched with aurora-toned diffuse gradients and high-definition natural landscapes (e.g., forests, deserts), creating a quiet, ethereal digital meditation atmosphere.",
            ],
          },
        ],
      },
      {
        id: 4,
        title: "AR Fashion Trash",
        category: "AR Interactive Installation",
        year: "2021",
        image: "/viewfashiontrash.jpg",
        gallery: [
          "/fashion1.jpg",
          "/fashion2.jpg",
          "/fashion3.jpg",
          "/fashion4.jpg",
          "/fashion5.jpg",
          "/fashion6.jpg",
          "/fashion7.jpg",
          "/fashion8.jpg",
          "/fashion9.jpg",
          "/fashion10.jpg"
        ],
        overview: {
          name: "Fashion Trash",
          type: "Interactive Installation / Generative Art",
          scenario:
            "Core Technologies: Arduino, TouchDesigner, Particle System, Projection Mapping",
          team: "",
          intro:
            "An interactive visual experiment exploring the fast fashion industry and marine microplastic pollution. By combining a physical installation with digital generative art, it asks the audience: 'Are you trashing our future?'",
        },
        sections: [
          {
            title: "02. Problem & Concept",
            points: [
              "Environmental Crisis & Hidden Truths: Up to 8 million tons of plastic flow into the ocean every year, hiding a little-known secret of the fashion industry—microplastics released from synthetic clothing during washing are devastating marine ecosystems.",
              "Concept Transformation: The project transcribes this grand and hidden environmental issue into an intuitive and oppressive offline interactive experience. It visualizes the invisible 'microplastic pollution' into a 'visual disaster' on the screen directly triggered by user behavior.",
            ],
          },
          {
            title: "03. Hardware & Technology",
            points: [
              "Minimalist Physical Interaction: Abandoning complex consoles, the installation retains only a huge, eye-catching 'Big Red Button'. This deliberately simplified physical input metaphors consumers' reckless purchasing decisions in the fast fashion carnival.",
              "Hardware-Software Communication: Written hardware logic via Arduino to capture the digital signal of the button (HIGH/LOW) and send the data to the upper computer in real-time through Serial communication.",
              "TouchDesigner Real-time Rendering: After receiving serial signals, TD uses logic nodes (Logic, Count, Math) to control the particle system, driving the generation and accumulation of trash in the virtual ocean in real-time.",
            ],
          },
          {
            title: "04. Visuals & Generative Art",
            points: [
              "3D Characters & Virtual Environments: At the center of the visual is a virtual 3D character model dressed in trendy clothes, immersed in a wireframe-particle ocean generated by code.",
              "Information Layer & Glitch Art: The UI adopts a HUD design language with lo-fi/hacker aesthetics. As interactions progress, the screen pops up red warning boxes like 'PLASTIC ALERT!' and 'TRASH ACCUMULATION'.",
              "Visual Oppression: As the audience continues to press the button, the originally clean virtual ocean is instantly swallowed by dense digital trash particles. The striking visual contrast intensely impacts the experiencer psychologically.",
            ],
          },
          {
            title: "05. Exhibition & User Testing",
            points: [
              "Immersive Space Design: The physical button is placed on a custom independent booth, paired with a dark field environment and large-scale wall projection mapping, creating an immersive experience space that's highly enveloping.",
              "User Behavior Observation: During actual exhibition testing, audiences experienced a strong pause and reflection at the moment they pushed the button and witnessed the explosive growth of 'fashion trash' on the screen, successfully achieving the expected alert and educational significance of the project.",
            ],
          },
        ],
      },
      {
        id: 5,
        title: "ITATECH COFFEE",
        category: "Product & UI/UX Design",
        year: "2023",
        image: "/0-cover 1.jpg",
        gallery: [
          "/0-cover 1.jpg",
          "/1.jpg",
          "/2.jpg",
          "/3.jpg",
          "/4.jpg",
          "/5.jpg",
          "/6.jpg",
          "/7.jpg",
          "/8.jpg",
          "/9.jpg",
          "/10.jpg",
          "/11.jpg",
          "/12.jpg",
        ],
        overview: {
          name: "ITATECH EMOTION COFFEE",
          type: "Product Design, UI/UX Design, Service Design, Hardware & Software Integration (IoT)",
          scenario:
            "Target Audience: Young coffee lovers with a strong curiosity and desire to explore (innovators and early adopters)",
          team: "",
          intro:
            "A smart coffee ecosystem connecting traditional Italian coffee culture with future technology. Through voice interaction and emotion-sensing tech, it provides users with a personalized, healthy, and humanized online/offline coffee experience.",
        },
        sections: [
          {
            title: "02. Background & Challenge",
            points: [
              "Cultural Background: Coffee is deeply rooted in Italy's cultural DNA. Italians have extremely rich preferences and strict habits regarding coffee types (e.g., Espresso, Macchiato), drinking times, and scenarios.",
              "Market Insights: In Italy, daily coffee consumption is huge. People often choose the coffee-making process and location based on regional culture and different lifestyle needs.",
              "Design Challenge: How to better interpret and understand Italian coffee culture at this touchpoint connecting the modern and the future?",
            ],
          },
          {
            title: "03. User Research & Insights",
            points: [
              "Through desktop research across different age groups (from Baby Boomers to Gen Z) and field interviews with local users, I derived the following key insights:",
              "Balance of Human-Machine Collaboration: When introducing AI and mechanical engineering into coffee making, it is essential to balance technical efficiency with 'Human Service and Care'. Technology cannot completely replace human-to-human communication.",
              "Health and Personalization Needs: Users of different age groups have specific preferences regarding the health impacts of coffee (e.g., sugar-free, decaf) and require targeted health management.",
            ],
          },
          {
            title: "04. The Solution: O2O Smart Ecosystem",
            points: [
              "Based on the research, I built a system that integrates 'Home Production' and the 'Offline Store':",
              "Emotion-Sensing Hardware Innovation: A 'Voice Box' is attached to a brand-customized coffee machine. Through Parametric Coffee technology, the device can perceive the user's emotions and intelligently brew the most suitable coffee.",
              "Cloud Data & Offline Linkage: The brand's smart interactive coffee machine connects with offline stores. When users visit an offline store, the staff can access the central control system to understand the user's daily home coffee intake, thereby providing more humane customized care and health recommendations.",
            ],
          },
          {
            title: "05. Key Features & UI Design",
            points: [
              "The mobile APP is deeply tied to the smart hardware. Through agile development and multiple iterations, four core highlights were established:",
              "Personalized Mood Coffee: By having an AI voice conversation, the system analyzes the user's current state and customizes a unique emotional coffee recipe.",
              "Voice Social Sharing: Breaking the boundaries of time and space, users can post coffee diaries with voice comments in the community, building a sound-based social network for coffee.",
              "Healthy Coffee Linkage: With a built-in health tracking function, it records heart rate, blood pressure, and caffeine intake in real-time, creating an exclusive health profile for the user.",
              "Online Promotion & Offline Events: Combining offline coffee social events with promotion within the APP community, it creates a closed loop of online ordering and offline communication.",
            ],
          },
        ],
      },
      {
        id: 6,
        title: "Cookie Data Privacy Web",
        category: "Creative Coding & Web Design",
        year: "2025",
        image: "/cookie.png",
        link: "https://fiona-mou.github.io/cookie/",
      },
      {
        id: 7,
        title: "GIF MUSEUM",
        category: "Creative Coding & Web Design",
        year: "2026",
        image: "/gif-museum.png",
        link: "https://fiona-mou.github.io/GIF-MUSEUM/",
      },
      {
        id: 8,
        title: "CAPTCHA WAR",
        category: "Critical Design / Net Art / Educational Kit",
        year: "2024",
        image: "/captchawar.jpg",
        gallery: [
          "/captchawar1.png",
          "https://youtu.be/V0hSxo0KnWI",
          "https://youtu.be/O8aj9MfnuiY"
        ],
        overview: {
          name: "CAPTCHA WAR",
          type: "Critical Design / Net Art Interactive Web / Cross-media Educational Kit",
          context: "2024 - 2026 (Cross-disciplinary Long-term Research Project)",
          goal: "A cross-media interactive project focusing on 'Surveillance Capitalism' and algorithmic hegemony. Evolving from a purely digital Net Art web game to a physical-virtual educational kit, it reveals how humans become free labor for training AI while 'proving they are human'. (https://captcha-dusky.vercel.app/)",
        },
        sections: [
          {
            title: "02. Core Concept: Reverse Gaze under Surveillance Capitalism",
            points: [
              "The Hidden Truth of Digital Labor: In the digital age, clicking 'I am not a robot' and identifying images is essentially a mechanical, behaviorist process. Humans unknowingly become the grassroots labor force providing image tagging for computer vision.",
              "Design Intervention: This project aims to break this unconscious obedience. By deliberately creating conflicts between human logic and machine intelligence, it transforms the everyday CAPTCHA interface into a tense game, prompting critical awakening to the algorithmic society."
            ],
          },
          {
            title: "03. Phase 1: Digital Backlash —— Net Art Interactive Web",
            points: [
              "Project Foundation (Net Art Course): Exploring the power inversion between humans and machines on digital interfaces.",
              "Adversarial Interactive Game: Independently coded an interactive Web art piece simulating AI intrusion. Users must upload personal photos to log in, which are then swept into the 'Veillance Matrix'.",
              "Time-limited Game Mechanism: Users must complete 10 rounds of CAPTCHA tests faster than the AI within a limited time ('It's a struggle between you and it'). Failure results in the webpage simulating a visual terminal takeover by AI.",
              "Tech & Visuals: Extensive use of lo-fi hacker aesthetics and system warning pop-ups to create a sense of oppression and surveillance in cyberspace."
            ],
          },
          {
            title: "04. Phase 2: Cross-media Counterattack —— Physical & AR Educational Kit",
            points: [
              "Project Advancement (EdTech Course): Extending digital critique to the physical world, exploring the limitations of machine vision.",
              "Physical Component Metaphor: To tangibly represent abstract algorithmic logic, a physical interactive kit was designed. It includes a 'flip blade (alette ribaltabili)' mechanism representing human emotional intervention, and 'sampling masks (maschere di campionamento)' simulating computer vision blind spots.",
              "AR & Glitch Art Integration: When audiences attempt to respond to rigid machine rules with human emotional logic on the physical kit, it triggers an Augmented Reality (AR) visual feedback on the web. This 'non-compliant' operation ultimately crashes the system, presenting intense glitch art effects on the screen.",
              "From Deconstruction to Reconstruction: Not just a game, but an educational tool—by 'deconstructing' machine logic, users 'reconstruct' their understanding of everyday technology."
            ],
          },
          {
            title: "05. Development & Deployment",
            points: [
              "Independent Full-Stack Development: From initial Figma prototypes to building complex frontend interactive logic using HTML, CSS, and TypeScript, completed all coding independently.",
              "Continuous Integration: All code resources use GitHub for version control and are successfully deployed via Vercel for global online access.",
              "Live Experience: https://captcha-dusky.vercel.app/"
            ],
          },
        ],
      },
    ],
    playground: {
      title: "Playground & Archive",
      items: [
        { id: 1, title: "Sound Design & Ableton Live", year: "2022", image: "/ableton.png", category: "Sound Design", audio: "/ableton.mp3" },
        { id: 2, title: "Media Integration & Adobe After Effects", year: "2024", image: "https://youtu.be/xDjo5abS-Xw", category: "Video Creation" },
        { id: 3, title: "Generative Art", year: "2024", image: "https://youtu.be/B1XyMRYpgbM", category: "Touchdesigner" },
        { id: 4, title: "3D & Blender", year: "2021", image: "/3d.png", category: "Rendering" },
        { id: 5, title: "Data Visualization Design", year: "2026", image: "/data.png", category: "Visual Design" }
      ]
    },
    about: {
      title: "About",
      description1:
        "I am Fangyu Mou, a UI/UX Designer and Creative Developer based in Turin, Italy. I blend visual design with creative coding to build immersive digital experiences.",
      description2:
        "With a background in New Technologies of Art at the Accademia Albertina di Torino, my approach focuses on data visualization, frontend technologies, and interactive design.",
      contact: "Get in touch",
    },
    footer: {
      rights: "© 2026 FANGYU MOU.",
    },
  },
  zh: {
    nav: {
      work: "作品",
      about: "关于",
    },
    hero: {
      title: "UI / UX",
      title2: "DESIGNER",
      subtitle: "UI/UX 设计师与创意开发者，专注于视觉体系与交互动效。",
    },
    work: {
      title: "精选作品",
      viewProject: "查看项目",
    },
    projects: [
      {
        id: 1,
        title: "SOCKOMO 儿童袜",
        category: "包装设计与互动网页",
        year: "2024-2025",
        image: "/调色后.mov",
        overview: {
          name: "SOCKOMO",
          type: "创意纸板包装设计与交互网页 (Creative Cartonboard Packaging & Interaction)",
          scenario: "ProCarton 包装设计大赛",
          team: "Gruppo 3 (Fangyu Mou, Jinrong Wu, Jiaxuan Ren, Jiayi Zheng)",
          academic:
            "都灵美术学院 (Accademia Albertina di Torino) 视觉传达设计方法论课程",
          intro:
            "一款将儿童袜子包装转化为可重复使用的脚长测量尺的环保交互包装设计，结合了趣味网页互动，实现了从“一次性耗材”到“家庭实用工具”的转变。",
        },
        sections: [
          {
            title: "02. 痛点发现 (The Problem)",
            points: [
              "环境危机：传统儿童包装通常使用纸与塑料的混合材料，导致全球包装废弃物回收率极低。",
              "空间浪费与低利用率：90%的家长表示包装占据空间是丢弃的主要原因，传统包装缺乏二次使用的价值。",
              "用户生活痛点：儿童双脚生长迅速，家长在为孩子购买鞋袜时，经常因为测量脚长不便而买到不合尺寸的产品。",
            ],
          },
          {
            title: "03. 核心解决方案 (The Solution)",
            points: [
              "结构创新：将原本废弃的纸盒包装展开，即可直接转化为一把量程覆盖 9-26 厘米的儿童量脚尺。",
              "环保可持续：采用 100% 可回收的 300g 纸板制作，减少碳排放，彻底消除塑料污染。",
              "功能性与互动性结合：包装不仅是测量工具，更是家长与孩子互动的媒介，提升了品牌的情感价值。",
            ],
          },
          {
            title: "04. 视觉与品牌身份 (Visual Identity)",
            points: [
              "创意概念：将“可爱动物”与“世界名画”相结合，激发儿童对艺术的好奇心。",
              "主视觉案例：最终选定“长颈鹿 × 戴珍珠耳环的少女”作为主推视觉，长颈鹿的长颈特征与“测量长度”的功能完美契合。",
              "排版与色彩：标志与标题使用了童趣且高识别度的 PillowLava 字体，色彩上采用了鲜艳的渐变蓝、黄、橙配色，符合儿童的视觉偏好。",
            ],
          },
          {
            title: "05. 数字交互延伸 (Digital & Interaction Design)",
            points: [
              "多媒介融合：我们在包装内部巧妙地整合了二维码设计。",
              "前端代码实现：使用 HTML, JavaScript, 和 CSS 独立开发了一个单页交互网站，并托管部署在 GitHub 上。(https://fiona-mou.github.io/SOCKOMO/)",
              "趣味科普逻辑：家长与孩子量完脚长后，扫描包装上的二维码输入数据，网页会根据脚长匹配对应的“长颈鹿生长阶段”（如幼崽、亚成体、成年等）并弹出有趣的科普冷知识。",
            ],
          },
        ],
        gallery: [
          "/sokomo-1.jpg",
          "/sokomo-2.jpg",
          "/sokomo-3.png",
          "/sokomo-4.png",
        ],
      },
      {
        id: 2,
        title: "MetaFit 健身系统",
        category: "VR/XR 交互设计",
        year: "2023",
        image: "/cover mockup.png",
        overview: {
          name: "METAFIT",
          type: "UI/UX 设计、元宇宙体验设计 (Metaverse Experience Design)、软硬件结合体验",
          scenario: "跨空间线上健身生态",
          team: "Fangyu Mou",
          academic: "独立项目",
          intro:
            "METAFIT 是一款结合了虚拟现实（VR）、人工智能（AI）与轻量化智能硬件的跨空间线上健身生态系统，旨在帮助城市人群以更低的成本缓解身心压力。",
        },
        sections: [
          {
            title: "02. 项目痛点 (The Problem)",
            points: [
              "现代都市病：城市上班族久坐少动，面临健康危机，但去健身房成本高且难以坚持。",
              "体验单一：传统的居家健身缺乏互动性和反馈，容易产生枯燥感。",
              "软硬件脱节：市面上的健身设备与数字内容脱节，难以形成统一且具有沉浸感的生态。",
            ],
          },
          {
            title: "03. 核心解决方案 (The Solution)",
            points: [
              "元宇宙沉浸体验：构建跨空间的 VR 健身场景，使用户仿佛置身于自然或未来空间，极大提升运动乐趣。",
              "软硬件生态系统：研发轻量化智能硬件并与多端（Web、移动端、大屏）UI/UX 系统无缝连接。",
              "AI 动力反馈：结合人工智能算法，实时分析用户动作并提供科学的反馈与指导。",
            ],
          },
        ],
        gallery: [
          "https://youtu.be/NtWalF4VJr0",
          "/METAFIT1.jpg",
          "/METAFIT2.jpg",
          "/METAFIT3.jpg",
          "/METAFIT4.jpg",
          "/METAFIT5.jpg",
          "/METAFIT6.jpg",
          "/METAFIT7.jpg",
          "/METAFIT8.jpg",
          "/METAFIT9.jpg",
          "/METAFIT10.jpg",
          "/METAFIT11.jpg",
        ],
      },
      {
        id: 3,
        title: "枯山水冥想系统",
        category: "IoT 装置与平台",
        year: "2023",
        image: "/if cover 横.png",
        gallery: [
          "https://youtu.be/ZVlr6iJTZRg",
          "/if cover 横.png",
          "/karensansui1.jpg",
          "/karensansui2.jpg",
          "/karensansui3.jpg",
          "/karensansui4.jpg",
          "/karensansui5.jpg",
          "/karensansui6.jpg",
          "/karensansui7.jpg",
          "/karensansui8.jpg",
          "/karensansui9.jpg",
          "/karensansui10.jpg",
          "/karensansui11.jpg",
          "/karensansui12.jpg"
        ],
        overview: {
          name: "KARESANSUI (枯山水)",
          type: "产品设计、物联网设计 (IoT Design)、交互装置设计、服务设计",
          scenario: "目标用户：冥想初学者、难以在脑海中构建冥想场景的人群",
          team: "项目周期：2022年11月 - 2023年2月",
          intro:
            "一款专为冥想者开发的软硬件交互产品。通过将传统的“枯山水”极简空灵意境与数字 App 相结合，帮助新手打破冥想的入门壁垒，获得更具沉浸感的冥想体验。",
        },
        sections: [
          {
            title: "02. 背景与痛点发现 (Problem & Background)",
            points: [
              "体验缺乏沉浸感：市面上的冥想产品多为单一的软件应用（App），缺乏与实体设备的协同，导致系统与用户之间的互动性较弱。",
              "新手入门困难：缺乏权威的具象化引导，许多初学者难以在闭眼时想象出冥想场景，容易产生挫败感。",
              "市场趋势：调研显示，高性价比、多配件协同的设备生态是未来的市场趋势；且辅以图像和实体互动的冥想效果是纯音频的两倍。",
            ],
          },
          {
            title: "03. 设计挑战与目标 (Design Challenge & Goals)",
            points: [
              "设计挑战：如何从全新的视角诠释冥想，利用跨媒介的交互手段，为受众带来更具参与感和沉浸感的体验？",
              "短期任务：利用实体产品与移动应用程序的结合，引导用户快速进入并沉浸在冥想状态中。",
              "中期目标：帮助用户以科学、高效的方式养成良好的日常冥想习惯。",
              "长期愿景：让冥想变得更普及、更世俗化，在全球范围内重塑一个身临其境、充满互动乐趣的冥想世界。",
            ],
          },
          {
            title:
              "04. 核心解决方案：枯山水实体交互 (The Solution: Physical-Digital Interaction)",
            points: [
              "触摸树木（Landscape Trees）：用户轻触装置上的景观树，即可控制 App 端冥想音乐的播放与节奏，增强感官沉浸感。",
              "沙石耙梳（Mountain Stones & Rake）：在冥想的问答环节（如 App 提问“你喜欢在明亮还是黑暗的环境中？”），用户不再需要紧盯手机屏幕，而是直接使用实体小耙子在沙盘上向左或向右拨动石头，装置会捕捉动作并转化为 App 内的选项反馈。这种将“选择”转化为“禅修动作”的设计，极大地维持了冥想的连贯性。",
            ],
          },
          {
            title: "05. 技术实现与原型开发 (Technology & Prototyping)",
            points: [
              "硬件传感器：使用 Arduino 结合 MPU6050（三轴陀螺仪）捕捉用户在沙盘上的拨动与移动数据。",
              "数据通信与视觉处理：通过蓝牙模块将硬件数据传输至系统，并运用 TouchDesigner 将交互数据实时转化为视觉或控制信号。",
              "产品建模：为实体枯山水装置进行了 3D 建模与材料测试，确保其拥有符合现代家居审美的外观结构与合理的重心（防止沙石溢出）。",
            ],
          },
          {
            title: "06. 用户测试与界面迭代 (User Testing & UI Iteration)",
            points: [
              "情绪滑块交互：将原本繁琐的情绪选择优化为简单的“滑动条（Slider）”，更加直观。",
              "自适应问答机制：交互式的冥想引导问题会根据用户设定的冥想时长自适应生成，并均匀分布在特定时间间隔内，避免打断用户的沉思状态。",
              "全新 UI 视觉：App 界面以深色模式为基调，搭配极光色调的弥散渐变与高清自然景观（如森林、沙漠），营造出静谧、空灵的数字冥想氛围。",
            ],
          },
        ],
      },
      {
        id: 4,
        title: "AR 时尚垃圾",
        category: "AR 互动装置",
        year: "2021",
        image: "/viewfashiontrash.jpg",
        gallery: [
          "/fashion1.jpg",
          "/fashion2.jpg",
          "/fashion3.jpg",
          "/fashion4.jpg",
          "/fashion5.jpg",
          "/fashion6.jpg",
          "/fashion7.jpg",
          "/fashion8.jpg",
          "/fashion9.jpg",
          "/fashion10.jpg"
        ],
        overview: {
          name: "Fashion Trash",
          type: "交互艺术装置 (Interactive Installation) / 生成艺术 (Generative Art)",
          scenario:
            "核心技术：Arduino 硬件开发、TouchDesigner、粒子系统、投影映射",
          team: "",
          intro:
            "一场探讨快时尚工业与海洋微塑料污染的交互式视觉实验。通过实体装置与数字生成艺术的结合，质问受众：“Are you trashing our future?”",
        },
        sections: [
          {
            title: "02. 背景与核心概念 (Problem & Concept)",
            points: [
              "环境危机与隐秘真相：每年有高达 800 万吨的塑料流入海洋，而这其中隐藏着时尚界鲜为人知的秘密——合成服装在洗涤过程中释放的微塑料正在重创海洋生态。",
              "概念转化：项目将这一宏大且隐蔽的环保议题，转化为一个直观、具有压迫感的线下交互体验。让不可见的“微塑料污染”，变为屏幕上可见的、由用户行为直接触发的“视觉灾难”。",
            ],
          },
          {
            title: "03. 硬件交互与技术逻辑 (Hardware & Technology)",
            points: [
              "极简物理交互：舍弃了复杂的操控台，装置仅保留了一个巨大的醒目“红色按钮（Big Red Button）”。这种刻意简化的物理输入，隐喻了消费者在快时尚狂欢中轻率的购买决策。",
              "软硬件通信：使用 Arduino 编写硬件底层逻辑，采集按钮的数字信号（HIGH/LOW），并通过 Serial 串口通信将数据实时发送给上位机。",
              "TouchDesigner 实时渲染：TD 接收到串口信号后，通过逻辑节点（Logic、Count、Math）控制粒子系统（Particle System），实时驱动虚拟海洋中垃圾的生成与堆积。",
            ],
          },
          {
            title: "04. 视觉美学与生成艺术 (Visuals & Generative Art)",
            points: [
              "3D 角色与虚拟环境：画面中心构建了一个身穿时尚服饰的虚拟 3D 人物模型，置身于由代码生成的线框粒子海洋中。",
              '信息层与故障美学 (Glitch Art)：UI 界面采用了带有低保真/黑客美学的 HUD 设计语言。随着互动的推进，屏幕会弹出 "PLASTIC ALERT!"、"TRASH ACCUMULATION" 等红色警告框。',
              "视觉压迫感：随着受众不断按下按钮，原本干净的虚拟海洋会被密集的数字垃圾粒子瞬间吞没，强烈的视觉反差带给体验者极大的心理冲击。",
            ],
          },
          {
            title: "05. 展览落地与用户反馈 (Exhibition & User Testing)",
            points: [
              "沉浸式空间设计：实体按钮被安置在一个定制的独立展台上，配合暗场环境与大尺度的墙面投影（Projection Mapping），营造出极具包裹感的沉浸式体验空间。",
              "用户行为观察：在实际布展的测试中，受众在按下按钮并目睹屏幕上“时尚垃圾”爆发式增长的瞬间，产生了强烈的停顿与反思，完美实现了项目预期的警示教育意义。",
            ],
          },
        ],
      },
      {
        id: 5,
        title: "ITATECH 情绪咖啡机",
        category: "产品与交互设计",
        year: "2023",
        image: "/0-cover 1.jpg",
        gallery: [
          "/0-cover 1.jpg",
          "/1.jpg",
          "/2.jpg",
          "/3.jpg",
          "/4.jpg",
          "/5.jpg",
          "/6.jpg",
          "/7.jpg",
          "/8.jpg",
          "/9.jpg",
          "/10.jpg",
          "/11.jpg",
          "/12.jpg",
        ],
        overview: {
          name: "ITATECH EMOTION COFFEE",
          type: "产品设计、UI/UX 设计、服务设计、软硬件结合 (IoT)",
          scenario:
            "目标用户：具有强烈好奇心和探索欲的年轻咖啡爱好者（创新者与早期采用者）",
          team: "",
          intro:
            "一个连接传统意大利咖啡文化与未来科技的智能咖啡生态系统，通过语音交互与情绪感知技术，为用户提供个性化、健康且充满人情味的线上线下咖啡体验。",
        },
        sections: [
          {
            title: "02. 背景与设计挑战 (Background & Challenge)",
            points: [
              "文化背景：咖啡已深植于意大利的文化 DNA 中，意大利人对咖啡的种类（如 Espresso, Macchiato 等）、饮用时间以及场景有着极其丰富的偏好与严格的习惯 。",
              "市场洞察：在意大利，日常的咖啡摄入量巨大，人们往往会根据地区文化和不同的生活方式需求来选择咖啡的制作过程和场所 。",
              "设计挑战：如何在这连接现代与未来的触点上，更好地诠释和理解意大利的咖啡文化？",
            ],
          },
          {
            title: "03. 用户研究与核心洞察 (User Research & Insights)",
            points: [
              "通过对不同年龄段（从婴儿潮一代到 Z 世代）的桌面调研以及与本地用户的实地访谈，我得出了以下关键洞察：",
              "人机协作的平衡：在咖啡制作中引入人工智能和机械工程时，必须平衡好技术效率与“人文关怀（Human Service and Care）”之间的关系，技术不能完全取代人与人之间的交流 。",
              "健康与个性化诉求：不同年龄段的用户对咖啡的健康影响（如无糖、低因）有特定偏好，需要提供针对性的健康管理 。",
            ],
          },
          {
            title: "04. 核心解决方案：O2O 智能生态 (The Solution)",
            points: [
              "基于调研，我构建了一个融合“家庭制作 (Home Production)”与“线下实体店 (Offline Store)”的系统：",
              "情绪感知硬件创新：在品牌定制的咖啡机上附加一个“语音盒子 (Voice Box)”，通过参数化咖啡（Parametric Coffee）技术，设备能够感知用户的情绪，并智能地制作出最合适的咖啡 。",
              "云端数据与线下联动：品牌的智能交互咖啡机可以与线下商店建立连接 。当用户去到线下门店时，店员可以通过总控系统了解用户日常在家的咖啡摄入量，从而提供更具人情味的定制关怀与健康推荐 。",
            ],
          },
          {
            title: "05. 关键功能与 APP 界面设计 (Key Features & UI)",
            points: [
              "移动端 APP 与智能硬件深度绑定，通过敏捷开发与多轮迭代，最终确立了四大核心亮点：",
              "个性化情绪咖啡 (Personalized Mood Coffee)：通过与 AI 语音对话，系统分析用户当前状态，定制独属的情感咖啡配方 。",
              "语音社交分享 (Voice Social)：打破时间和空间的限制，用户可以在社区中发布带有语音评论的咖啡日记，建立基于声音的咖啡社交网络 。",
              "健康数据互联 (Healthy Coffee Linkage)：内置健康追踪功能，实时记录心率、血压及咖啡因摄入量，形成用户的专属健康档案 。",
              "线上线下推广 (Online Promotion)：结合线下咖啡社交活动，在 APP 社区内进行推广，打造线上点单与线下交流的闭环 。",
            ],
          },
        ],
      },
      {
        id: 6,
        title: "Cookie 数据可视网站",
        category: "创意编程与网页设计",
        year: "2025",
        image: "/cookie.png",
        link: "https://fiona-mou.github.io/cookie/",
      },
      {
        id: 7,
        title: "GIF 迷因博物馆",
        category: "创意编程与网页设计",
        year: "2026",
        image: "/gif-museum.png",
        link: "https://fiona-mou.github.io/GIF-MUSEUM/",
      },
      {
        id: 8,
        title: "CAPTCHA WAR",
        category: "批判设计 / Net Art 交互网页 / 跨媒介教育工具包",
        year: "2024",
        image: "/captchawar.jpg",
        gallery: [
          "/captchawar1.png",
          "https://youtu.be/V0hSxo0KnWI",
          "https://youtu.be/O8aj9MfnuiY"
        ],
        overview: {
          name: "CAPTCHA WAR",
          type: "批判设计 (Critical Design) / Net Art 交互网页 / 跨媒介教育工具包",
          context: "2024 - 2026 (跨学科长期研究项目)",
          goal: "一个聚焦于“监控资本主义”与算法霸权的跨媒介互动项目。项目从纯数字的 Net Art 网页游戏，延伸至连接物理与虚拟的实体教育工具包，揭示了人类如何在“证明自己是人类”的过程中，沦为训练 AI 的免费劳动力。(https://captcha-dusky.vercel.app/)",
        },
        sections: [
          {
            title: "02. 核心概念：监控资本主义下的反向凝视",
            points: [
              "数字劳工的隐秘真相：在数字时代，我们每天点击“我不是机器人”并识别图像的行为，本质上是一个机械的、行为主义的过程。人类在不知不觉中成为了为计算机视觉提供图像标记的底层劳动力。",
              "设计的介入：本项目旨在打破这种无意识的服从。通过刻意制造人脑逻辑与机器规则的冲突，将日常的验证码界面转化为一个充满紧张感的博弈场，激发受众对算法社会的批判性觉醒。"
            ],
          },
          {
            title: "03. Phase 1：数字入侵 —— Net Art 交互网页 (Digital Backlash)",
            points: [
              "项目初阶（Net Art 课程）：探讨人与机器在数字界面上的权力反转。",
              "对抗性交互游戏：我使用代码独立开发了一个模拟 AI 入侵的交互式 Web 艺术作品。用户在登录时被要求上传个人图片，随后这些图片会被卷入“监控矩阵（Veillance Matrix）”中。",
              "限时博弈机制：用户必须在有限时间内，以比 AI 更快的速度完成 10 轮验证码测试（\"It's a struggle between you and it\"）。如果失败，网页将模拟终端命令行（Terminal）被 AI 全面接管的视觉效果。",
              "技术与视觉：大量运用了低保真黑客美学与系统警告弹窗，营造出赛博空间中的压迫感与监视感。"
            ],
          },
          {
            title: "04. Phase 2：跨媒介反击 —— 实体交互教育工具包 (Physical & AR Extension)",
            points: [
              "项目进阶（教育科技课程）：将数字批判延伸至物理世界，探讨机器视觉的局限性。",
              "物理组件隐喻：为了将抽象的算法逻辑具象化，我设计了一套实体互动工具包。其中包含代表人类情感干预的“翻转叶片 (alette ribaltabili)”机制，以及模拟计算机视觉盲区的“采样遮罩 (maschere di campionamento)”。",
              "AR 与故障艺术 (Glitch Art) 联动：当受众试图在物理工具包上用人类的感性逻辑去回应机器的刻板规则时，会触发网页端的增强现实（AR）视觉反馈。这种“不合规”的操作最终会导致系统崩溃（Crash），屏幕上呈现出强烈的故障艺术效果。",
              "从解构到重构：这不仅是一场游戏，更是一个教育工具，通过“解构”机器逻辑，让用户“重构”对日常技术的认知。"
            ],
          },
          {
            title: "05. 开发与部署",
            points: [
              "独立全栈开发：从最初的 Figma 原型构思，到利用 HTML, CSS, TypeScript 构建复杂的前端交互逻辑，我独立完成了全部代码编写。",
              "持续集成：所有代码资源均通过 GitHub 进行版本控制，并成功在 Vercel 平台上实现自动化部署，确保了作品的全球在线访问体验。",
              "在线体验地址 (Live Link) : https://captcha-dusky.vercel.app/"
            ],
          },
        ],
      },
    ],
    playground: {
      title: "草稿箱 Playground",
      items: [
        { id: 1, title: "Sound Design & Ableton Live", year: "2022", image: "/ableton.png", category: "Sound Design", audio: "/ableton.mp3" },
        { id: 2, title: "媒体整合编辑及 Adobe After Effect", year: "2024", image: "https://youtu.be/xDjo5abS-Xw", category: "视频创作" },
        { id: 3, title: "Generative Art", year: "2024", image: "https://youtu.be/B1XyMRYpgbM", category: "Touchdesigner" },
        { id: 4, title: "3D & Blender", year: "2021", image: "/3d.png", category: "Rendering" },
        { id: 5, title: "数据可视化设计", year: "2026", image: "/data.png", category: "视觉设计" }
      ]
    },
    about: {
      title: "关于我",
      description1:
        "我是牟芳昱，一名现居意大利都灵的 UI/UX 设计师和创意开发者（Creative Developer）。我将视觉设计与创意编程相融合，打造沉浸式的数字体验。",
      description2:
        "我就读于都灵美术学院艺术新技术（NTA）专业，擅长将调研数据可视化与现代前端交互技术结合，已斩获十余项国际设计大奖。",
      contact: "联系我",
    },
    footer: {
      rights: "© 2026 牟芳昱 保留所有权利。",
    },
  },
  it: {
    nav: {
      work: "Lavori",
      about: "Chi sono",
    },
    hero: {
      title: "CREATIVE",
      title2: "DEVELOPER",
      subtitle:
        "UI/UX Designer e Creative Developer con focus su sistemi visivi ed esperienze digitali.",
    },
    work: {
      title: "Lavori Selezionati",
      viewProject: "Vedi Progetto",
    },
    projects: [
      {
        id: 1,
        title: "SOCKOMO",
        category: "Design di Imballaggi Sostenibili",
        year: "2024-2025",
        image: "/调色后.mov",
        overview: {
          name: "SOCKOMO",
          type: "Creative Cartonboard Packaging & Interaction",
          scenario: "Concorso di Design ProCarton",
          team: "Gruppo 3 (Fangyu Mou, Jinrong Wu, Jiaxuan Ren, Jiayi Zheng)",
          academic:
            "Accademia Albertina di Torino, Corso di Metodologia della Progettazione della Comunicazione Visiva",
          intro:
            "Un design di packaging interattivo ed ecologico che trasforma la confezione dei calzini per bambini in un righello riutilizzabile per misurare i piedi, unito a una divertente interazione web, realizzando la transizione da 'prodotto usa e getta' a 'pratico strumento per la famiglia'.",
        },
        sections: [
          {
            title: "02. Il Problema (The Problem)",
            points: [
              "Crisi Ambientale: I packaging tradizionali per bambini usano solitamente un mix di carta e plastica, causando tassi di riciclo globalmente bassissimi.",
              "Spreco di Spazio e Basso Utilizzo: Il 90% dei genitori afferma che il principale motivo per scartare il packaging è l'ingombro; i pacchetti tradizionali non hanno valore di riutilizzo.",
              "Punti Dolenti nell'Uso Quotidiano: I piedi dei bambini crescono rapidamente. Quando si acquistano scarpe o calzini, capita spesso di prendere una misura sbagliata per la difficoltà di misurare i piedi.",
            ],
          },
          {
            title: "03. La Soluzione (The Solution)",
            points: [
              "Innovazione Strutturale: Aprendo il pacchetto di cartone originale, si trasforma direttamente in un righello da 9 a 26 cm per misurare i piedi dei bambini.",
              "Sostenibilità: Realizzato al 100% in cartone riciclabile da 300g, riduce le emissioni di carbonio ed elimina completamente l'inquinamento da plastica.",
              "Integrazione Funzionale e Interattiva: Il packaging non è solo uno strumento di misurazione, ma anche un mezzo di interazione tra genitori e figli, aumentando il valore affettivo del brand.",
            ],
          },
          {
            title: "04. Identità Visiva (Visual Identity)",
            points: [
              "Concetto Creativo: Unire 'animali carini' a 'dipinti famosi' per stimolare la curiosità dei bambini verso l'arte.",
              "Visual Principale: È stato selezionato 'Giraffa × La ragazza col turbante'. Il collo lungo della giraffa si adatta perfettamente alla funzione di 'misurare la lunghezza'.",
              "Tipografia e Colori: Il logo e i titoli usano il font PillowLava, giocoso e molto riconoscibile, con vivaci gradienti di blu, giallo e arancione per assecondare le preferenze visive dei bambini.",
            ],
          },
          {
            title:
              "05. Design Digitale e Interattivo (Digital & Interaction Design)",
            points: [
              "Integrazione Multimediale: Abbiamo abilmente integrato un codice QR all'interno del packaging.",
              "Sviluppo Frontend: È stato sviluppato un sito web interattivo single-page in HTML, JavaScript e CSS, ospitato in modo indipendente su GitHub. (https://fiona-mou.github.io/SOCKOMO/)",
              "Logica Educativa Divertente: Dopo la misurazione, i genitori e i bambini scansionano il codice QR per inserire i dati. La pagina indicherà la corrispondente 'fase di crescita della giraffa' (es. cucciolo, giovane, adulto) aggiungendo curiosità interessanti.",
            ],
          },
        ],
        gallery: [
          "/sokomo-1.jpg",
          "/sokomo-2.jpg",
          "/sokomo-3.png",
          "/sokomo-4.png",
        ],
      },
      {
        id: 2,
        title: "MetaFit VR",
        category: "Design UI/UX per VR",
        year: "2023",
        image: "/cover mockup.png",
        overview: {
          name: "METAFIT",
          type: "UI/UX Design, Metaverse Experience Design, Integrazione hardware e software",
          scenario: "Pendolari urbani e appassionati di fitness",
          team: "Fangyu Mou",
          academic: "Progetto Indipendente",
          intro:
            "METAFIT è un ecosistema di fitness online inter-spaziale che combina Realtà Virtuale (VR), Intelligenza Artificiale (AI) e hardware intelligente leggero, progettato per aiutare le popolazioni urbane ad alleviare lo stress fisico e mentale a un costo inferiore.",
        },
        sections: [
          {
            title: "02. Il Problema",
            points: [
              "Malattie dello stile di vita urbano: I pendolari urbani spesso siedono per lunghi periodi, affrontando crisi sanitarie, mentre andare in palestra è costoso e difficile da mantenere.",
              "Mancanza di coinvolgimento: Il fitness domestico tradizionale manca di interattività e feedback, diventando facilmente noioso e monotono.",
              "Disconnessione hardware-software: Le attrezzature per il fitness sul mercato sono spesso separate dai contenuti digitali, non riuscendo a formare un ecosistema coeso e immersivo.",
            ],
          },
          {
            title: "03. La Soluzione",
            points: [
              "Immersione nel Metaverso: Attivazione di scene di fitness VR inter-spaziali per far sembrare gli allenamenti un gioco nella natura o in spazi futuristici.",
              "Ecologia hardware e software: Sviluppo di hardware intelligente leggero che si connette perfettamente con i sistemi UI/UX su più dispositivi (Web, Mobile, Grande Schermo).",
              "Feedback dinamico AI: Combinare algoritmi di intelligenza artificiale per agire come un allenatore virtuale, tracciando i movimenti e fornendo feedback scientifico.",
            ],
          },
        ],
        gallery: [
          "https://youtu.be/NtWalF4VJr0",
          "/METAFIT1.jpg",
          "/METAFIT2.jpg",
          "/METAFIT3.jpg",
          "/METAFIT4.jpg",
          "/METAFIT5.jpg",
          "/METAFIT6.jpg",
          "/METAFIT7.jpg",
          "/METAFIT8.jpg",
          "/METAFIT9.jpg",
          "/METAFIT10.jpg",
          "/METAFIT11.jpg",
        ],
      },
      {
        id: 3,
        title: "Karesansui IoT",
        category: "IoT e UX/UI",
        year: "2023",
        image: "/if cover 横.png",
        gallery: [
          "https://youtu.be/ZVlr6iJTZRg",
          "/if cover 横.png",
          "/karensansui1.jpg",
          "/karensansui2.jpg",
          "/karensansui3.jpg",
          "/karensansui4.jpg",
          "/karensansui5.jpg",
          "/karensansui6.jpg",
          "/karensansui7.jpg",
          "/karensansui8.jpg",
          "/karensansui9.jpg",
          "/karensansui10.jpg",
          "/karensansui11.jpg",
          "/karensansui12.jpg"
        ],
        overview: {
          name: "KARESANSUI",
          type: "Design di Prodotto, Design IoT, Design di Installazioni Interattive, Design dei Servizi",
          scenario:
            "Target di Riferimento: Principianti della Meditazione, Utenti con difficoltà a visualizzare mentalmente",
          team: "Periodo: Nov 2022 - Feb 2023",
          intro:
            "Un prodotto interattivo hardware-software progettato per i meditatori. Combinando l'essenza minimalista ed eterea dei tradizionali 'Karesansui' (giardini zen) con un'app digitale, aiuta i principianti a superare le barriere della meditazione e a ottenere un'esperienza più coinvolgente.",
        },
        sections: [
          {
            title: "02. Problema e Sfondo (Problem & Background)",
            points: [
              "Mancanza di Immersione: La maggior parte dei prodotti per la meditazione sul mercato sono semplici app, prive di coordinamento con dispositivi fisici, il che porta a una debole interazione tra sistema e utente.",
              "Difficoltà per i Principianti: A causa della mancanza di una guida visiva autorevole, molti principianti hanno difficoltà a immaginare gli scenari a occhi chiusi, provando facilmente frustrazione.",
              "Tendenze di Mercato: Le ricerche mostrano che ecosistemi di dispositivi economici e multi-accessori rappresentano la tendenza futura; inoltre, gli effetti della meditazione supportati da immagini e interazioni fisiche sono doppi rispetto al solo audio.",
            ],
          },
          {
            title: "03. Sfida e Obiettivi di Design (Design Challenge & Goals)",
            points: [
              "Sfida di Design: Come interpretare la meditazione da una nuova prospettiva e utilizzare mezzi interattivi multimediali per offrire al pubblico un'esperienza più coinvolgente?",
              "Breve Termine: Utilizzare la combinazione di prodotti fisici e applicazioni mobili per guidare rapidamente l'utente verso uno stato di profonda meditazione.",
              "Medio Termine: Aiutare gli utenti a sviluppare buone abitudini quotidiane in modo scientifico ed efficiente.",
              "Lungo Termine: Rendere la meditazione più popolare e secolarizzata, rimodellando un mondo meditativo immersivo e interattivo a livello globale.",
            ],
          },
          {
            title: "04. La Soluzione (Physical-Digital Interaction)",
            points: [
              "Alberi Paesaggistici (Landscape Trees): Toccando leggermente gli alberi fisici, gli utenti possono controllare la riproduzione e il ritmo della musica nell'app, potenziando l'immersione.",
              "Pietre e Rastrello (Mountain Stones & Rake): Durante la fase di domande (es. 'Preferisci luce o oscurità?'), l'utente non deve guardare lo schermo. Utilizza invece il rastrello per spostare le pietre; il dispositivo traduce l'azione in feedback nell'app, trasformando la 'scelta' in 'Azione Zen' e mantenendo la fluidità della meditazione.",
            ],
          },
          {
            title: "05. Tecnologia e Prototipazione (Technology & Prototyping)",
            points: [
              "Sensori Hardware: Utilizzo di Arduino combinato con MPU6050 (giroscopio a 3 assi) per catturare il movimento sulla sabbia.",
              "Comunicazione Dati ed Elaborazione Visiva: Trasmissione dei dati via Bluetooth con elaborazione in tempo reale tramite TouchDesigner in segnali visivi.",
              "Modellazione Prodotto: Modellazione 3D e test dei materiali completati per un'estetica adattabile alle case moderne e con baricentro stabile.",
            ],
          },
          {
            title: "06. Test Utente e Iterazione (User Testing & UI Iteration)",
            points: [
              "Slider per l'Umore: Ottimizzazione della selezione delle emozioni, resa più semplice e intuitiva tramite 'Slider'.",
              "Domande Adattive: Generazione intelligente di domande guida basate sulla durata della sessione, garantendo nessuna interruzione improvvisa.",
              "Nuova Visuale UI: L'app utilizza una base scura (dark mode) con gradienti diffusi color aurora e paesaggi naturali in HD, evocando pura pace digitale.",
            ],
          },
        ],
      },
      {
        id: 4,
        title: "AR Fashion Trash",
        category: "Installazione Interattiva AR",
        year: "2021",
        image: "/viewfashiontrash.jpg",
        gallery: [
          "/fashion1.jpg",
          "/fashion2.jpg",
          "/fashion3.jpg",
          "/fashion4.jpg",
          "/fashion5.jpg",
          "/fashion6.jpg",
          "/fashion7.jpg",
          "/fashion8.jpg",
          "/fashion9.jpg",
          "/fashion10.jpg"
        ],
        overview: {
          name: "Fashion Trash",
          type: "Installazione Interattiva (Interactive Installation) / Arte Generativa (Generative Art)",
          scenario:
            "Tecnologie Chiave: Sviluppo Hardware Arduino, TouchDesigner, Sistemi Particellari, Projection Mapping",
          team: "",
          intro:
            "Un esperimento visivo interattivo che esplora l'industria del fast fashion e l'inquinamento da microplastiche marine. Combinando un'installazione fisica con arte generativa digitale, chiede al pubblico: 'Are you trashing our future?'",
        },
        sections: [
          {
            title: "02. Problema e Concetto (Problem & Concept)",
            points: [
              "Crisi Ambientale e Verità Nascoste: Fino a 8 milioni di tonnellate di plastica finiscono nell'oceano ogni anno, nascondendo un segreto poco noto dell'industria della moda: le microplastiche rilasciate dai capi sintetici durante il lavaggio stanno devastando gli ecosistemi marini.",
              "Trasformazione del Concetto: Il progetto trasforma questa vasta e nascosta problematica ambientale in un'esperienza interattiva offline, intuitiva e opprimente. L'invisibile inquinamento da microplastiche diventa un 'disastro visivo' sullo schermo, innescato direttamente dal comportamento dell'utente.",
            ],
          },
          {
            title: "03. Hardware e Logica Tecnologica (Hardware & Technology)",
            points: [
              "Interazione Fisica Minimalista: Abbandonando le consolle complesse, l'installazione mantiene solo un enorme e vistoso 'Pulsante Rosso (Big Red Button)'. Questo input fisico deliberatamente semplificato fa da metafora per le decisioni di acquisto avventate dei consumatori nel carnevale del fast fashion.",
              "Comunicazione Hardware-Software: È stata scritta la logica hardware di base tramite Arduino per catturare il segnale digitale del pulsante (ALTO/BASSO) e inviare i dati al computer superiore in tempo reale tramite comunicazione seriale.",
              "Rendering in Tempo Reale con TouchDesigner: Dopo aver ricevuto i segnali seriali, TD utilizza nodi logici (Logic, Count, Math) per controllare il sistema particellare, guidando la generazione e l'accumulo di spazzatura nell'oceano virtuale in tempo reale.",
            ],
          },
          {
            title:
              "04. Estetica Visiva e Arte Generativa (Visuals & Generative Art)",
            points: [
              "Personaggi 3D e Ambienti Virtuali: Al centro del visuale c'è un modello 3D virtuale di un personaggio vestito con abiti alla moda, immerso in un oceano di particelle wireframe generato dal codice.",
              "Livello Informativo e Glitch Art: L'interfaccia utente adotta un linguaggio di design HUD con un'estetica lo-fi/hacker. Man mano che l'interazione progredisce, appaiono sullo schermo allerte rosse popup come 'PLASTIC ALERT!' e 'TRASH ACCUMULATION'.",
              "Oppressione Visiva: Mentre il pubblico continua a premere il pulsante, l'oceano virtuale, inizialmente pulito, viene rapidamente inghiottito da fitte particelle di spazzatura elettronica. Questo drammatico contrasto visivo crea un potente impatto psicologico.",
            ],
          },
          {
            title: "05. Esibizione e Test Utente (Exhibition & User Testing)",
            points: [
              "Design dello Spazio Immersivo: Il pulsante fisico è posizionato su uno stand indipendente su misura, accompagnato da un ambiente oscurato e da una mappatura di proiezione su larga scala sulla parete (Projection Mapping), che crea un'esperienza spaziale immersiva e molto avvolgente.",
              "Osservazione del Comportamento degli Utenti: Durante i test pratici all'esibizione, il pubblico ha provato una forte pausa di riflessione nel momento in cui, premendo il pulsante, assisteva a un improvviso e allarmante ammasso di 'spazzatura del fast fashion' sullo schermo, realizzando con successo l'impatto di avvertimento e la funzione divulgativa desiderata del progetto.",
            ],
          },
        ],
      },
      {
        id: 5,
        title: "ITATECH COFFEE",
        category: "Product & UI/UX Design",
        year: "2023",
        image: "/0-cover 1.jpg",
        gallery: [
          "/0-cover 1.jpg",
          "/1.jpg",
          "/2.jpg",
          "/3.jpg",
          "/4.jpg",
          "/5.jpg",
          "/6.jpg",
          "/7.jpg",
          "/8.jpg",
          "/9.jpg",
          "/10.jpg",
          "/11.jpg",
          "/12.jpg",
        ],
        overview: {
          name: "ITATECH EMOTION COFFEE",
          type: "Product Design, UI/UX Design, Service Design, Hardware-Software Integration (IoT)",
          scenario:
            "Target Audience: Giovani amanti del caffè con forte curiosità e desiderio di esplorare (innovatori e early adopters)",
          team: "",
          intro:
            "Un ecosistema di caffè intelligente che collega la cultura tradizionale del caffè italiano con la tecnologia del futuro. Attraverso l'interazione vocale e la tecnologia di percezione delle emozioni, offre un'esperienza del caffè online e offline personalizzata, sana e ricca di tocco umano.",
        },
        sections: [
          {
            title: "02. Background e Sfida (Background & Challenge)",
            points: [
              "Background Culturale: Il caffè è profondamente radicato nel DNA culturale dell'Italia. Gli italiani hanno preferenze ricchissime e abitudini rigorose per quanto riguarda i tipi di caffè (es. Espresso, Macchiato), orari e scenari di consumo.",
              "Insight di Mercato: In Italia c'è un consumo quotidiano di caffè enorme. Le persone scelgono i processi di preparazione e i luoghi in base alla cultura regionale e a stile di vita diversi.",
              "Sfida di Design: Come interpretare e comprendere meglio la cultura italiana del caffè in questo punto di incontro tra contemporaneità e futuro?",
            ],
          },
          {
            title: "03. Ricerca Utente e Insight (User Research & Insights)",
            points: [
              "Attraverso ricerche su diverse fasce d'età (dai Baby Boomer alla Gen Z) e interviste sul campo con utenti locali, ho ricavato i seguenti insight chiave:",
              "Equilibrio della Collaborazione Uomo-Macchina: Nel momento in cui si introduce l'Intelligenza Artificiale e l'ingegneria meccanica nella produzione del caffè, è essenziale bilanciare l'efficienza tecnica con la cura e il servizio umano (Human Service and Care). La tecnologia non può sostituire del tutto la comunicazione umana.",
              "Salute e Personalizzazione: Diversi gruppi di età hanno preferenze specifiche sull'impatto sulla salute (es. senza zucchero, decaffeinato) e richiedono una gestione mirata della salute.",
            ],
          },
          {
            title:
              "04. La Soluzione: Ecosistema O2O Intelligente (The Solution)",
            points: [
              "In base alle ricerche, ho costruito un sistema che integra 'Produzione Domestica (Home Production)' e 'Negozio Fisico (Offline Store)':",
              "Innovazione Hardware per la Percezione Emotiva: Un 'Voice Box' viene aggiunto a una macchina da caffè personalizzata. Con la tecnologia 'Parametric Coffee', il dispositivo percepisce le emozioni dell'utente e prepara il caffè più adatto.",
              "Dati in Cloud e Collegamento Offline: Le macchine interattive per caffè si collegano ai negozi fisici. Quando l'utente visita uno store, lo staff controlla dal sistema le abitudini e le quantità di caffè consumato a casa, fornendo cura personalizzata e raccomandazioni umane.",
            ],
          },
          {
            title:
              "05. Funzionalità Chiave e Design dell'UI (Key Features & UI)",
            points: [
              "L'app mobile è profondamente collegata all'hardware. Attraverso lo sviluppo agile e varie iterazioni, si sono individuati 4 punti focali:",
              "Caffè Emozionale Personalizzato (Personalized Mood Coffee): Attraverso il dialogo vocale con un'IA, il sistema analizza lo stato dell'utente e prepara una ricetta unica.",
              "Condivisione Social Vocale (Voice Social): Superando i limiti di tempo e spazio, gli utenti postano il loro 'diario del caffè' con commenti vocali su un social basato sulla voce.",
              "Collegamento Salute (Healthy Coffee Linkage): Il tracking di salute integrato memorizza battito, pressione e consumo di caffeina creando un archivio personale.",
              "Promozione Online/Offline (Online Promotion): Eventi ed esperienze offline convergono nella community online per un circolo virtuoso tra ordini online e incontri offline.",
            ],
          },
        ],
      },
      {
        id: 6,
        title: "Cookie Data Privacy Web",
        category: "Creative Coding & Web Design",
        year: "2025",
        image: "/cookie.png",
        link: "https://fiona-mou.github.io/cookie/",
      },
      {
        id: 7,
        title: "GIF MUSEUM",
        category: "Creative Coding & Web Design",
        year: "2026",
        image: "/gif-museum.png",
        link: "https://fiona-mou.github.io/GIF-MUSEUM/",
      },
      {
        id: 8,
        title: "CAPTCHA WAR",
        category: "Critical Design / Net Art / Educational Kit",
        year: "2024",
        image: "/captchawar.jpg",
        gallery: [
          "/captchawar1.png",
          "https://youtu.be/V0hSxo0KnWI",
          "https://youtu.be/O8aj9MfnuiY"
        ],
        overview: {
          name: "CAPTCHA WAR",
          type: "Critical Design / Net Art Interactive Web / Cross-media Educational Kit",
          context: "2024 - 2026 (Progetto di ricerca a lungo termine interdisciplinare)",
          goal: "Un progetto interattivo cross-mediale focalizzato sul 'Capitalismo di sorveglianza' e sull'egemonia algoritmica. Evolutosi da un gioco web di Net Art puramente digitale a un kit educativo fisico-virtuale, rivela come gli esseri umani diventino forza lavoro gratuita per l'addestramento delle IA mentre 'dimostrano di essere umani'. (https://captcha-dusky.vercel.app/)",
        },
        sections: [
          {
            title: "02. Concetto principale",
            points: [
              "La verità nascosta del lavoro digitale: Nell'era digitale, il comportamento di cliccare su 'Non sono un robot' e identificare le immagini è essenzialmente un processo meccanico e comportamentale. Gli esseri umani diventano inconsapevolmente forza lavoro invisibile che fornisce l'etichettatura delle immagini per la computer vision.",
              "L'intervento del design: Questo progetto mira a rompere questa obbedienza inconscia. Creando deliberatamente conflitti tra la logica umana e l'intelligenza delle macchine, trasforma l'interfaccia quotidiana dei CAPTCHA in un gioco teso, suscitando un risveglio critico verso la società algoritmica."
            ],
          },
          {
            title: "03. Fase 1: Digital Backlash —— Net Art Interactive Web",
            points: [
              "Fondamento del progetto (Corso di Net Art): Esplorazione dell'inversione di potere tra esseri umani e macchine sulle interfacce digitali.",
              "Gioco Interattivo Avversario: Coded in modo indipendente un'opera d'arte Web interattiva che simula l'intrusione dell'IA. Agli utenti viene richiesto di caricare foto personali per accedere, che vengono poi trascinate nella 'Veillance Matrix'.",
              "Meccanismo di gioco a tempo limitato: Gli utenti devono completare 10 round di test CAPTCHA più velocemente dell'IA entro un tempo limitato ('È una lotta tra te e lei'). Il fallimento fa sì che la pagina web simuli l'acquisizione visiva del terminale da parte dell'IA.",
              "Tecnologia e grafica: Ampio uso dell'estetica hacker lo-fi e dei pop-up di avviso del sistema per creare un senso di oppressione e sorveglianza nel cyberspazio."
            ],
          },
          {
            title: "04. Fase 2: Contrattacco cross-mediale —— Physical & AR Educational Kit",
            points: [
              "Avanzamento del progetto (Corso di EdTech): Estensione della critica digitale al mondo fisico, esplorazione delle limitazioni della visione artificiale.",
              "Metafora della componente fisica: Per rappresentare tangibilmente la logica algoritmica astratta, è stato progettato un kit interattivo fisico. Include un meccanismo a 'alette ribaltabili' (flip blade) che rappresenta l'intervento emotivo umano e 'maschere di campionamento' (sampling masks) che simulano i punti ciechi della computer vision.",
              "Integrazione AR ed effetti Glitch Art: Quando il pubblico tenta di rispondere alle rigide regole della macchina con la logica emotiva umana sul kit fisico, si attiva un feedback visivo in Realtà Aumentata (AR) sul web. Questa operazione 'non conforme' alla fine fa crollare il sistema, presentando intensi effetti di Glitch Art sullo schermo.",
              "Dalla Decostruzione alla Ricostruzione: Non è solo un gioco, ma uno strumento educativo: 'decostruendo' la logica della macchina, gli utenti 'ricostruiscono' la loro comprensione della tecnologia quotidiana."
            ],
          },
          {
            title: "05. Sviluppo e distribuzione",
            points: [
              "Sviluppo Full-Stack indipendente: Dai prototipi iniziali su Figma alla costruzione di complesse logiche interattive frontend utilizzando HTML, CSS e TypeScript, ho completato l'intero codice in modo indipendente.",
              "Integrazione continua: Tutte le risorse del codice utilizzano GitHub per il controllo delle versioni e sono state distribuite con successo tramite Vercel per l'accesso online globale.",
              "Link al sito: https://captcha-dusky.vercel.app/"
            ],
          },
        ],
      },
    ],
    playground: {
      title: "Archivio (Playground)",
      items: [
        { id: 1, title: "Sound Design & Ableton Live", year: "2022", image: "/ableton.png", category: "Sound Design", audio: "/ableton.mp3" },
        { id: 2, title: "Integrazione Multimediale e Adobe After Effects", year: "2024", image: "https://youtu.be/xDjo5abS-Xw", category: "Creazione Video" },
        { id: 3, title: "Generative Art", year: "2024", image: "https://youtu.be/B1XyMRYpgbM", category: "Touchdesigner" },
        { id: 4, title: "3D & Blender", year: "2021", image: "/3d.png", category: "Rendering" },
        { id: 5, title: "Design di Visualizzazione Dati", year: "2026", image: "/data.png", category: "Visual Design" }
      ]
    },
    about: {
      title: "Chi sono",
      description1:
        "Sono Fangyu Mou, UI/UX Designer e Creative Developer residente a Torino, Italia. Unisco il design visivo al creative coding per costruire esperienze digitali immersive.",
      description2:
        "Con un background in Nuove Tecnologie dell'Arte presso l'Accademia Albertina di Torino, il mio approccio si concentra sulla visualizzazione dei dati, tecnologie frontend e design interattivo.",
      contact: "Contattami",
    },
    footer: {
      rights: "© 2026 FANGYU MOU.",
    },
  },
};
