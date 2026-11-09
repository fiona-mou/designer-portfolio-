import type { Language } from '../i18n/translations';
import { buildCourseProjects, enrichCaptcha } from './courseProjects';
export interface CaseImage { src: string; caption: string; alt: string; width?: number; height?: number; }
export interface ProjectSection { title: string; points: string[]; images?: CaseImage[]; links?: { label: string; url: string }[]; }
export interface ProjectMeta { type: string; role: string; team: string; tools: string[]; deliverables: string; summary: string; liveUrl?: string; }
export interface PortfolioProject { id: number; slug?: string; title: string; category: string; year: string; image: string; imageFit?: 'contain'; collection?: 'course'; liveLabel?: string; gallery?: string[]; overview?: { name?: string; type?: string; scenario?: string; context?: string; team?: string; academic?: string; intro?: string; goal?: string }; sections?: ProjectSection[]; caseSections?: ProjectSection[]; link?: string; meta: ProjectMeta; }
export const recruitmentCopy = {
  "en": {
    "pageTitle": "Fangyu Mou — Multidisciplinary Designer",
    "featured": "Featured Work",
    "allProjects": "All Projects",
    "skills": "Skills & Capabilities",
    "recognition": "Awards & Recognition",
    "certifications": "Certifications & Learning",
    "education": "Education",
    "contact": "Contact",
    "viewCase": "View Case Study",
    "live": "Visit Live Website",
    "cv": "Download CV · English",
    "email": "Email me",
    "overview": "Project Overview",
    "type": "Project type",
    "role": "My role",
    "team": "Team / Individual",
    "year": "Year",
    "tools": "Tools & technologies",
    "deliverables": "Deliverables",
    "back": "Back to all work",
    "certificate": "View certificate",
    "moreAwards": "Full recognition list",
    "certificateNote": "Selected design awards, supported by the original certificates. Multiple awards may recognise the same project.",
    "reviewed": "Certificate reviewed",
    "learningNote": "Professional learning credentials, listed separately from design awards. Course completion does not imply a regulated professional qualification.",
    "professional": "Non-credit professional certificate",
    "badge": "Practitioner learning badge",
    "course": "Non-credit course completion",
    "specialization": "Non-credit specialization · 4 courses",
    "verify": "Issuer verification link",
    "fullTime": "Open to design and digital development roles",
    "copied": "Copied",
    "copyFailed": "Copy manually: Tianxbbsyqs",
    "skip": "Skip to content",
    "close": "Close image",
    "previous": "Previous image",
    "next": "Next image",
    "notFound": "Project not found",
    "skillsItems": [
      {
        "title": "Visual Communication & Branding",
        "description": "Identity, typography, packaging and editorial systems.",
        "projects": [
          "ITATECH COFFEE",
          "SOCKOMO"
        ]
      },
      {
        "title": "Digital & UI/UX Design",
        "description": "Research framing, user flows, interface design and prototyping.",
        "projects": [
          "MetaFit VR",
          "ITATECH COFFEE"
        ]
      },
      {
        "title": "Web Design & Interactive Development",
        "description": "Content architecture, responsive front ends and WordPress + Pods development.",
        "projects": [
          "After Humans Disappeared",
          "SOCKOMO"
        ]
      },
      {
        "title": "Experimental / Spatial Interaction",
        "description": "Physical–digital prototypes, Arduino and TouchDesigner experiments.",
        "projects": [
          "Karesansui",
          "AR Fashion Trash"
        ]
      }
    ],
    "educationText": "Accademia Albertina di Belle Arti di Torino · Nuove Tecnologie dell’Arte. Master’s coursework completed; thesis and final project in progress. Expected graduation: March 2027."
  },
  "zh": {
    "pageTitle": "牟芳昱 — 跨领域设计师",
    "featured": "精选作品",
    "allProjects": "全部作品",
    "skills": "技能与能力",
    "recognition": "设计奖项与认可",
    "certifications": "专业学习与证书",
    "education": "教育背景",
    "contact": "联系我",
    "viewCase": "查看案例",
    "live": "访问正式网站",
    "cv": "下载简历 · 中文",
    "email": "发送邮件",
    "overview": "项目概述",
    "type": "项目性质",
    "role": "个人职责",
    "team": "团队 / 独立",
    "year": "年份",
    "tools": "工具与技术",
    "deliverables": "交付内容",
    "back": "返回全部作品",
    "certificate": "查看证书",
    "moreAwards": "完整获奖记录",
    "certificateNote": "精选设计奖项均有原始证书依据，同一作品可能获得多个奖项。",
    "reviewed": "证书已核对",
    "learningNote": "专业学习证书与设计奖项分开列示，课程完成证明不等同于行业执业资格。",
    "professional": "非学分职业学习证书",
    "badge": "实践者学习徽章",
    "course": "非学分课程完成证明",
    "specialization": "非学分专项学习 · 4 门课程",
    "verify": "签发方核验入口",
    "fullTime": "开放设计与数字开发相关机会",
    "copied": "已复制",
    "copyFailed": "请手动复制：Tianxbbsyqs",
    "skip": "跳转至主要内容",
    "close": "关闭图片",
    "previous": "上一张图片",
    "next": "下一张图片",
    "notFound": "未找到项目",
    "skillsItems": [
      {
        "title": "视觉传达与品牌",
        "description": "品牌视觉、字体、包装与版式系统。",
        "projects": [
          "ITATECH COFFEE",
          "SOCKOMO"
        ]
      },
      {
        "title": "数字体验与 UI/UX",
        "description": "研究梳理、用户流程、界面设计与原型。",
        "projects": [
          "MetaFit VR",
          "ITATECH COFFEE"
        ]
      },
      {
        "title": "网页设计与交互开发",
        "description": "内容架构、响应式前端与 WordPress + Pods 开发。",
        "projects": [
          "After Humans Disappeared",
          "SOCKOMO"
        ]
      },
      {
        "title": "实验与空间交互",
        "description": "实体与数字原型、Arduino 与 TouchDesigner 实验。",
        "projects": [
          "Karesansui",
          "AR Fashion Trash"
        ]
      }
    ],
    "educationText": "意大利都灵美术学院 Accademia Albertina di Belle Arti di Torino · 艺术新技术专业。硕士课程已完成，毕业论文与项目进行中，预计 2027 年 3 月毕业。"
  },
  "it": {
    "pageTitle": "Fangyu Mou — Designer multidisciplinare",
    "featured": "Progetti in evidenza",
    "allProjects": "Tutti i progetti",
    "skills": "Competenze e capacità",
    "recognition": "Premi e riconoscimenti",
    "certifications": "Certificazioni e formazione",
    "education": "Formazione accademica",
    "contact": "Contatti",
    "viewCase": "Leggi il caso studio",
    "live": "Visita il sito online",
    "cv": "Scarica CV · Italiano",
    "email": "Scrivimi",
    "overview": "Panoramica del progetto",
    "type": "Tipo di progetto",
    "role": "Il mio ruolo",
    "team": "Team / Individuale",
    "year": "Anno",
    "tools": "Strumenti e tecnologie",
    "deliverables": "Elaborati",
    "back": "Torna ai progetti",
    "certificate": "Vedi il certificato",
    "moreAwards": "Tutti i riconoscimenti",
    "certificateNote": "Premi selezionati documentati dai certificati originali. Più premi possono riferirsi allo stesso progetto.",
    "reviewed": "Certificato esaminato",
    "learningNote": "Credenziali formative distinte dai premi di design. Il completamento di un corso non equivale a un’abilitazione professionale.",
    "professional": "Certificato professionale non accademico",
    "badge": "Badge formativo Practitioner",
    "course": "Attestato di completamento di un corso non accademico",
    "specialization": "Specializzazione non accademica · 4 corsi",
    "verify": "Link di verifica dell’ente",
    "fullTime": "Disponibile per ruoli nel design e nello sviluppo digitale",
    "copied": "Copiato",
    "copyFailed": "Copia manualmente: Tianxbbsyqs",
    "skip": "Vai al contenuto",
    "close": "Chiudi immagine",
    "previous": "Immagine precedente",
    "next": "Immagine successiva",
    "notFound": "Progetto non trovato",
    "skillsItems": [
      {
        "title": "Comunicazione visiva e branding",
        "description": "Identità, tipografia, packaging e sistemi editoriali.",
        "projects": [
          "ITATECH COFFEE",
          "SOCKOMO"
        ]
      },
      {
        "title": "Design digitale e UI/UX",
        "description": "Impostazione della ricerca, flussi utente, interfacce e prototipazione.",
        "projects": [
          "MetaFit VR",
          "ITATECH COFFEE"
        ]
      },
      {
        "title": "Web design e sviluppo interattivo",
        "description": "Architettura dei contenuti, front end responsive e sviluppo WordPress + Pods.",
        "projects": [
          "After Humans Disappeared",
          "SOCKOMO"
        ]
      },
      {
        "title": "Interazione sperimentale e spaziale",
        "description": "Prototipi fisico-digitali ed esperimenti con Arduino e TouchDesigner.",
        "projects": [
          "Karesansui",
          "AR Fashion Trash"
        ]
      }
    ],
    "educationText": "Accademia Albertina di Belle Arti di Torino · Nuove Tecnologie dell’Arte. Corsi del biennio completati; tesi e progetto finale in corso. Diploma previsto: marzo 2027."
  }
};
export type RecruitmentCopy = typeof recruitmentCopy.en;
const projectMeta = {
  "en": {
    "1": {
      "type": "Academic collaborative project",
      "role": "Visual system & independent web development",
      "team": "4 people · Fangyu Mou, Jinrong Wu, Jiaxuan Ren, Jiayi Zheng",
      "tools": [
        "Figma",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "deliverables": "Packaging prototype, visual identity, interactive growth-ruler website",
      "summary": "Reusable children’s sock packaging paired with a playful web measuring experience.",
      "liveUrl": "https://fiona-mou.github.io/SOCKOMO/"
    },
    "2": {
      "type": "Academic project",
      "role": "Concept, visual design & UI/UX",
      "team": "Individual project · Fangyu Mou",
      "tools": [
        "UI/UX",
        "Visual prototyping",
        "VR experience design"
      ],
      "deliverables": "Interface flows, visual prototype, proposed VR fitness ecosystem",
      "summary": "A VR fitness design concept connecting interface, exercise and a proposed device experience."
    },
    "3": {
      "type": "Academic project",
      "role": "Interaction design & prototype development",
      "team": "Individual project · Fangyu Mou",
      "tools": [
        "Arduino",
        "TouchDesigner",
        "UI/UX"
      ],
      "deliverables": "Physical–digital interaction prototype, user flows, interface study",
      "summary": "A meditation interaction study translating sand-table gestures into digital feedback."
    },
    "4": {
      "type": "Academic project",
      "role": "Concept, visual design & interaction development",
      "team": "Individual project · Fangyu Mou",
      "tools": [
        "Arduino",
        "TouchDesigner",
        "Projection mapping"
      ],
      "deliverables": "Interactive installation prototype, generative visuals, project documentation",
      "summary": "An interactive installation exploring fashion waste through physical input and generative imagery."
    },
    "5": {
      "type": "Academic project",
      "role": "Concept, visual communication & UI/UX",
      "team": "Individual project · Fangyu Mou",
      "tools": [
        "UI/UX",
        "Visual identity",
        "Service design"
      ],
      "deliverables": "Coffee service concept, interface flows, visual presentation",
      "summary": "A coffee service design study connecting personal preferences, a device concept and digital interfaces."
    },
    "6": {
      "type": "Independent web experiment",
      "role": "Visualisation & web development",
      "team": "Individual project · Fangyu Mou",
      "tools": [
        "p5.js",
        "JavaScript",
        "HTML",
        "CSS"
      ],
      "deliverables": "Interactive browser experiment",
      "summary": "A web experiment making the invisible exchange of cookie data tangible.",
      "liveUrl": "https://fiona-mou.github.io/cookie/"
    },
    "7": {
      "type": "Independent web experiment",
      "role": "Web design & creative development",
      "team": "Individual project · Fangyu Mou",
      "tools": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "deliverables": "Interactive online GIF collection",
      "summary": "A browser-based museum exploring the display and rhythm of animated images.",
      "liveUrl": "https://fiona-mou.github.io/GIF-MUSEUM/"
    },
    "8": {
      "type": "Independent critical-design project",
      "role": "Concept, visual design & front-end development",
      "team": "Individual project · Fangyu Mou",
      "tools": [
        "Figma",
        "HTML",
        "CSS",
        "TypeScript"
      ],
      "deliverables": "Interactive website, critical-design visuals, educational-kit concept",
      "summary": "A critical web experience examining CAPTCHA, human labour and digital surveillance.",
      "liveUrl": "https://captcha-dusky.vercel.app/"
    },
    "9": {
      "type": "Academic collaborative project",
      "role": "Technical Lead / Web Designer / WordPress Developer",
      "team": "4 people · Fangyu Mou, Jiaxuan Ren, Jiayi Zheng, Menglu Wang",
      "tools": [
        "WordPress",
        "Pods",
        "PHP",
        "WP_Query",
        "HTML",
        "CSS",
        "JavaScript",
        "Leaflet",
        "GSAP",
        "A-Frame",
        "GLB"
      ],
      "deliverables": "Live responsive website, reusable data structure, interactive archive, map, timeline and 3D dossiers",
      "summary": "A post-human digital archive connecting ruined sites, everyday artifacts and time.",
      "liveUrl": "https://after-humans-disappeared.great-site.net/"
    }
  },
  "zh": {
    "1": {
      "type": "团队合作学术项目",
      "role": "视觉系统与独立网页开发",
      "team": "四人团队 · 牟芳昱、Jinrong Wu、Jiaxuan Ren、Jiayi Zheng",
      "tools": [
        "Figma",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "deliverables": "包装原型、视觉识别、交互成长尺网页",
      "summary": "将儿童袜包装转化为可重复使用的测量工具，并延伸至趣味网页。",
      "liveUrl": "https://fiona-mou.github.io/SOCKOMO/"
    },
    "2": {
      "type": "学术项目",
      "role": "概念、视觉与 UI/UX 设计",
      "team": "独立作品 · 牟芳昱",
      "tools": [
        "UI/UX",
        "Visual prototyping",
        "VR experience design"
      ],
      "deliverables": "界面流程、视觉原型、VR 健身体验概念",
      "summary": "连接界面、运动场景与设备体验的 VR 健身设计概念。"
    },
    "3": {
      "type": "学术项目",
      "role": "交互设计与原型开发",
      "team": "独立作品 · 牟芳昱",
      "tools": [
        "Arduino",
        "TouchDesigner",
        "UI/UX"
      ],
      "deliverables": "实体与数字交互原型、用户流程、界面研究",
      "summary": "将沙盘动作转化为数字反馈的冥想交互研究。"
    },
    "4": {
      "type": "学术项目",
      "role": "概念、视觉设计与交互开发",
      "team": "独立作品 · 牟芳昱",
      "tools": [
        "Arduino",
        "TouchDesigner",
        "Projection mapping"
      ],
      "deliverables": "交互装置原型、生成视觉、项目记录",
      "summary": "以实体输入与生成影像探讨时尚废弃物的交互装置。"
    },
    "5": {
      "type": "学术项目",
      "role": "概念、视觉传达与 UI/UX",
      "team": "独立作品 · 牟芳昱",
      "tools": [
        "UI/UX",
        "Visual identity",
        "Service design"
      ],
      "deliverables": "咖啡服务概念、界面流程、视觉展示",
      "summary": "连接个人偏好、设备概念与数字界面的咖啡服务设计研究。"
    },
    "6": {
      "type": "独立网页实验",
      "role": "数据视觉与网页开发",
      "team": "独立作品 · 牟芳昱",
      "tools": [
        "p5.js",
        "JavaScript",
        "HTML",
        "CSS"
      ],
      "deliverables": "浏览器交互实验",
      "summary": "将 Cookie 数据交换转化为可感知体验的网页实验。",
      "liveUrl": "https://fiona-mou.github.io/cookie/"
    },
    "7": {
      "type": "独立网页实验",
      "role": "网页设计与创意开发",
      "team": "独立作品 · 牟芳昱",
      "tools": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "deliverables": "交互式在线 GIF 集合",
      "summary": "探索动态图像展示与节奏的浏览器博物馆。",
      "liveUrl": "https://fiona-mou.github.io/GIF-MUSEUM/"
    },
    "8": {
      "type": "独立批判性设计项目",
      "role": "概念、视觉设计与前端开发",
      "team": "独立作品 · 牟芳昱",
      "tools": [
        "Figma",
        "HTML",
        "CSS",
        "TypeScript"
      ],
      "deliverables": "交互网站、批判性设计视觉、教育套件概念",
      "summary": "围绕验证码、人类劳动与数字监控展开的批判性网页体验。",
      "liveUrl": "https://captcha-dusky.vercel.app/"
    },
    "9": {
      "type": "团队合作学术项目",
      "role": "技术负责人 / 网页设计 / WordPress 开发",
      "team": "四人团队 · 牟芳昱、Jiaxuan Ren、Jiayi Zheng、Menglu Wang",
      "tools": [
        "WordPress",
        "Pods",
        "PHP",
        "WP_Query",
        "HTML",
        "CSS",
        "JavaScript",
        "Leaflet",
        "GSAP",
        "A-Frame",
        "GLB"
      ],
      "deliverables": "公开响应式网站、可复用数据结构、交互档案、地图、时间线与 3D 文物档案",
      "summary": "连接废墟遗址、日常文物与时间的人类消失后数字档案。",
      "liveUrl": "https://after-humans-disappeared.great-site.net/"
    }
  },
  "it": {
    "1": {
      "type": "Progetto accademico collaborativo",
      "role": "Sistema visivo e sviluppo web indipendente",
      "team": "4 persone · Fangyu Mou, Jinrong Wu, Jiaxuan Ren, Jiayi Zheng",
      "tools": [
        "Figma",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "deliverables": "Prototipo di packaging, identità visiva, sito interattivo per la misurazione",
      "summary": "Packaging per calze da bambino riutilizzabile come strumento di misura, con un’esperienza web ludica.",
      "liveUrl": "https://fiona-mou.github.io/SOCKOMO/"
    },
    "2": {
      "type": "Progetto accademico",
      "role": "Concept, design visivo e UI/UX",
      "team": "Progetto individuale · Fangyu Mou",
      "tools": [
        "UI/UX",
        "Visual prototyping",
        "VR experience design"
      ],
      "deliverables": "Flussi di interfaccia, prototipo visivo, concept di un ecosistema fitness VR",
      "summary": "Un concept di fitness VR che connette interfaccia, attività fisica ed esperienza del dispositivo."
    },
    "3": {
      "type": "Progetto accademico",
      "role": "Interaction design e sviluppo del prototipo",
      "team": "Progetto individuale · Fangyu Mou",
      "tools": [
        "Arduino",
        "TouchDesigner",
        "UI/UX"
      ],
      "deliverables": "Prototipo di interazione fisico-digitale, flussi utente, studio di interfaccia",
      "summary": "Uno studio di interazione per la meditazione che traduce i gesti su un giardino di sabbia in feedback digitale."
    },
    "4": {
      "type": "Progetto accademico",
      "role": "Concept, design visivo e sviluppo interattivo",
      "team": "Progetto individuale · Fangyu Mou",
      "tools": [
        "Arduino",
        "TouchDesigner",
        "Projection mapping"
      ],
      "deliverables": "Prototipo di installazione interattiva, visual generativi, documentazione",
      "summary": "Un’installazione interattiva sul tema dei rifiuti della moda, tra input fisici e immagini generative."
    },
    "5": {
      "type": "Progetto accademico",
      "role": "Concept, comunicazione visiva e UI/UX",
      "team": "Progetto individuale · Fangyu Mou",
      "tools": [
        "UI/UX",
        "Visual identity",
        "Service design"
      ],
      "deliverables": "Concept di servizio per il caffè, flussi di interfaccia, presentazione visiva",
      "summary": "Uno studio di servizio che collega preferenze personali, un concept di dispositivo e interfacce digitali."
    },
    "6": {
      "type": "Esperimento web indipendente",
      "role": "Visualizzazione e sviluppo web",
      "team": "Progetto individuale · Fangyu Mou",
      "tools": [
        "p5.js",
        "JavaScript",
        "HTML",
        "CSS"
      ],
      "deliverables": "Esperimento interattivo nel browser",
      "summary": "Un esperimento web che rende percepibile lo scambio invisibile dei dati dei cookie.",
      "liveUrl": "https://fiona-mou.github.io/cookie/"
    },
    "7": {
      "type": "Esperimento web indipendente",
      "role": "Web design e sviluppo creativo",
      "team": "Progetto individuale · Fangyu Mou",
      "tools": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "deliverables": "Collezione interattiva di GIF online",
      "summary": "Un museo nel browser che esplora l’esposizione e il ritmo delle immagini animate.",
      "liveUrl": "https://fiona-mou.github.io/GIF-MUSEUM/"
    },
    "8": {
      "type": "Progetto indipendente di design critico",
      "role": "Concept, design visivo e sviluppo front end",
      "team": "Progetto individuale · Fangyu Mou",
      "tools": [
        "Figma",
        "HTML",
        "CSS",
        "TypeScript"
      ],
      "deliverables": "Sito interattivo, visual di design critico, concept di kit educativo",
      "summary": "Un’esperienza web critica su CAPTCHA, lavoro umano e sorveglianza digitale.",
      "liveUrl": "https://captcha-dusky.vercel.app/"
    },
    "9": {
      "type": "Progetto accademico collaborativo",
      "role": "Responsabile tecnico / Web Designer / Sviluppatrice WordPress",
      "team": "4 persone · Fangyu Mou, Jiaxuan Ren, Jiayi Zheng, Menglu Wang",
      "tools": [
        "WordPress",
        "Pods",
        "PHP",
        "WP_Query",
        "HTML",
        "CSS",
        "JavaScript",
        "Leaflet",
        "GSAP",
        "A-Frame",
        "GLB"
      ],
      "deliverables": "Sito responsive online, struttura dati riutilizzabile, archivio, mappa, timeline e dossier 3D",
      "summary": "Un archivio digitale post-umano che collega rovine, reperti quotidiani e tempo.",
      "liveUrl": "https://after-humans-disappeared.great-site.net/"
    }
  }
};
const legacyCopy = {
  "en": {
    "1": {
      "context": "Designed for a visual communication course and a ProCarton competition brief, SOCKOMO turns sock packaging into a reusable foot-measuring tool. The packaging and identity were a four-person team outcome.",
      "approach": "The team developed research, ideation, packaging iterations and final prototypes. I created the visual system and independently built the HTML/CSS/JavaScript web interaction, linking the physical measuring task to a giraffe growth-stage experience."
    },
    "2": {
      "context": "MetaFit explores how a VR fitness experience could feel more accessible and engaging. The work develops a design proposal across interfaces, workout scenarios and a connected-device concept.",
      "approach": "I developed the concept, visual language, user flows and interface prototype. The gallery documents the proposed experience; AI coaching and hardware integration belong to the design concept and are not presented as a commercially deployed system."
    },
    "3": {
      "context": "Karesansui studies calm, embodied interaction for meditation. A sand-table gesture becomes a starting point for a physical–digital experience.",
      "approach": "I developed the interaction and prototype, combining Arduino input with TouchDesigner feedback. The design process connects physical gestures, visual response and an interface intended to support a quiet experience."
    },
    "4": {
      "context": "Fashion Garbage explores the environmental consequences of fashion consumption through an interactive installation and generative imagery.",
      "approach": "I developed the concept, visual system and interaction prototype. Arduino input and TouchDesigner particle imagery connect an everyday gesture to the accumulation of waste in a virtual environment."
    },
    "5": {
      "context": "ITATECH COFFEE investigates a coffee-service experience organised around personal preferences and the relationship between physical products and digital interfaces.",
      "approach": "I independently developed the concept, visual communication and UI/UX study. The proposal connects product interaction, service touchpoints and interface flows in one visual language."
    },
    "6": {
      "context": "Cookie makes data privacy a subject for a browser-based visual experiment. The live work invites exploration rather than presenting an analytics product.",
      "approach": "I designed and developed the visual interaction in the browser. The published experiment is available through GitHub Pages."
    },
    "7": {
      "context": "GIF MUSEUM treats short animated images as material for an online collection. Interface, rhythm and navigation shape how that collection is encountered.",
      "approach": "I designed and developed the online experience. The live site preserves the animated material as part of its navigation and presentation."
    },
    "8": {
      "context": "CAPTCHA WAR examines the tension between proving humanity online and supplying work to digital systems. The project combines critical visual communication and an interactive web experience.",
      "approach": "I independently developed the concept, visual language and front-end interaction. The supporting educational-kit material extends the project beyond the screen as a design proposal."
    }
  },
  "zh": {
    "1": {
      "context": "SOCKOMO 来自视觉传达课程与 ProCarton 竞赛命题，将袜子包装转化为可重复使用的足长测量工具。包装与视觉识别属于四人团队成果。",
      "approach": "团队完成调研、构思、包装迭代与最终原型。我负责视觉系统并独立开发 HTML/CSS/JavaScript 网页交互，将实体测量与长颈鹿成长阶段体验连接起来。"
    },
    "2": {
      "context": "MetaFit 探讨如何让 VR 健身体验更易接近、更有参与感，设计提案覆盖界面、运动场景与互联设备概念。",
      "approach": "我独立完成概念、视觉语言、用户流程与界面原型。图集记录体验提案；AI 教练与硬件整合属于设计概念，未作为商业落地系统展示。"
    },
    "3": {
      "context": "枯山水围绕冥想中的平静与身体感知展开，将沙盘动作作为实体与数字体验的起点。",
      "approach": "我独立设计交互并开发原型，将 Arduino 输入与 TouchDesigner 反馈结合，连接实体动作、视觉回应与支持平静体验的界面。"
    },
    "4": {
      "context": "Fashion Garbage 通过交互装置与生成影像，探索时尚消费带来的环境问题。",
      "approach": "我独立完成概念、视觉系统与交互原型，使用 Arduino 输入和 TouchDesigner 粒子影像，将日常动作与虚拟环境中的废弃物积累联系起来。"
    },
    "5": {
      "context": "ITATECH COFFEE 围绕个人偏好展开咖啡服务设计，研究实体产品与数字界面的联系。",
      "approach": "我独立完成概念、视觉传达与 UI/UX 研究，以统一视觉语言连接产品交互、服务触点与界面流程。"
    },
    "6": {
      "context": "Cookie 将数据隐私转化为浏览器中的视觉实验，通过可探索的交互表达主题。",
      "approach": "我设计并开发浏览器中的视觉交互，实验通过 GitHub Pages 公开。"
    },
    "7": {
      "context": "GIF MUSEUM 将短动态图像作为在线收藏内容，通过界面、节奏与导航组织观看方式。",
      "approach": "我设计并开发在线体验，将动态图像融入导航与展示方式。"
    },
    "8": {
      "context": "CAPTCHA WAR 探讨在线证明“人类身份”与向数字系统贡献劳动之间的张力，结合批判性视觉传达与交互网页。",
      "approach": "我独立完成概念、视觉语言与前端交互，教育套件资料以设计提案形式将主题延伸到屏幕之外。"
    }
  },
  "it": {
    "1": {
      "context": "Nato da un corso di comunicazione visiva e dal brief ProCarton, SOCKOMO trasforma il packaging delle calze in uno strumento di misura riutilizzabile. Packaging e identità sono il risultato del team di quattro persone.",
      "approach": "Il team ha sviluppato ricerca, ideazione, iterazioni del packaging e prototipi finali. Ho creato il sistema visivo e sviluppato in autonomia l’interazione web in HTML/CSS/JavaScript, collegando la misurazione alla crescita della giraffa."
    },
    "2": {
      "context": "MetaFit esplora come rendere il fitness VR più accessibile e coinvolgente, attraverso interfacce, scenari di allenamento e il concept di un dispositivo connesso.",
      "approach": "Ho sviluppato concept, linguaggio visivo, flussi utente e prototipo di interfaccia. La galleria documenta la proposta: coaching AI e integrazione hardware restano elementi del concept."
    },
    "3": {
      "context": "Karesansui studia un’interazione calma e corporea per la meditazione, partendo dai gesti su un giardino di sabbia.",
      "approach": "Ho progettato l’interazione e sviluppato il prototipo, combinando input Arduino e feedback TouchDesigner. Il processo collega gesto fisico, risposta visiva e interfaccia per un’esperienza calma."
    },
    "4": {
      "context": "Fashion Garbage esplora le conseguenze ambientali del consumo nella moda attraverso un’installazione interattiva e immagini generative.",
      "approach": "Ho sviluppato concept, sistema visivo e prototipo interattivo. Input Arduino e particelle TouchDesigner collegano un gesto quotidiano all’accumulo di rifiuti in un ambiente virtuale."
    },
    "5": {
      "context": "ITATECH COFFEE studia un servizio per il caffè basato sulle preferenze personali e sulla relazione tra prodotto fisico e interfaccia digitale.",
      "approach": "Ho sviluppato in autonomia concept, comunicazione visiva e studio UI/UX, collegando interazione del prodotto, touchpoint del servizio e flussi di interfaccia con un linguaggio coerente."
    },
    "6": {
      "context": "Cookie traduce la privacy dei dati in un esperimento visivo nel browser, pensato per essere esplorato.",
      "approach": "Ho progettato e sviluppato l’interazione visiva nel browser. L’esperimento è pubblicato su GitHub Pages."
    },
    "7": {
      "context": "GIF MUSEUM considera le brevi animazioni come materiale per una collezione online, organizzata attraverso interfaccia, ritmo e navigazione.",
      "approach": "Ho progettato e sviluppato l’esperienza online, integrando le animazioni nella navigazione e nella presentazione."
    },
    "8": {
      "context": "CAPTCHA WAR indaga la tensione tra dimostrare di essere umani online e fornire lavoro ai sistemi digitali, unendo comunicazione visiva critica ed esperienza web.",
      "approach": "Ho sviluppato in autonomia concept, linguaggio visivo e interazione front end. Il materiale del kit educativo estende il progetto oltre lo schermo come proposta di design."
    }
  }
};
const archiveSections = {
  "en": [
    {
      "title": "Context & Objective",
      "points": [
        "Set in the year 5000, the archive imagines post-humans returning to Earth to reconstruct human memory through ruined sites and artifacts. Our objective was to make those relationships explorable while keeping content editable in WordPress."
      ]
    },
    {
      "title": "My Role & Team",
      "points": [
        "I led visual integration, technical architecture, WordPress/Pods development and front-end interaction, and coordinated delivery. Jiaxuan Ren worked on information architecture, wireframes and presentation; Jiayi Zheng on research and front-end support; Menglu Wang on content research, writing and presentation. Concept development and collected content were shared team work."
      ]
    },
    {
      "title": "Information Architecture",
      "points": [
        "Home, Map, Archive, Timeline and About offer distinct entry points into one shared content system. A site connects to its artifacts; classification and year provide additional ways to read the same collection. The diagram below comes from the team’s course dossier."
      ],
      "images": [
        {
          "src": "/recruitment/ahd-ia.webp",
          "caption": "Information architecture · team course dossier, page 7",
          "alt": "Information architecture · team course dossier, page 7"
        }
      ]
    },
    {
      "title": "UX / Navigation",
      "points": [
        "Visitors can explore spatially through Map, search and filter through Archive, or browse chronologically through Timeline. Persistent navigation and artifact dossiers connect these routes without duplicating the underlying records."
      ],
      "images": [
        {
          "src": "/recruitment/ahd-map.webp",
          "caption": "Published Map · site selection and floating information card",
          "alt": "Published Map · site selection and floating information card"
        }
      ]
    },
    {
      "title": "Visual Design System",
      "points": [
        "An editorial grid, restrained monochrome palette, accession codes and technical typography frame the collection as an archaeological record. Reusable cards, borders and metadata keep map, archive and detail views coherent."
      ],
      "images": [
        {
          "src": "/recruitment/ahd-design-system.webp",
          "caption": "Colour system · team course dossier, page 16",
          "alt": "Colour system · team course dossier, page 16"
        }
      ]
    },
    {
      "title": "WordPress + Pods Data Structure",
      "points": [
        "Pods manages Site and Artifact custom post types and their relationship, with a Classification taxonomy. PHP and WP_Query retrieve related artifacts, filter categories and order years. The same records feed the map, archive, timeline and artifact details."
      ],
      "images": [
        {
          "src": "/recruitment/ahd-data.webp",
          "caption": "Pods entities and relationships · team course dossier, page 23",
          "alt": "Pods entities and relationships · team course dossier, page 23"
        }
      ]
    },
    {
      "title": "Interactive Features",
      "points": [
        "Leaflet powers the site map and its information cards. JavaScript connects search and filters; GSAP drives reveals and chronology; A-Frame displays GLB artifacts. These interactions support exploration while leaving the core content in the CMS."
      ],
      "images": [
        {
          "src": "/recruitment/ahd-archive.webp",
          "caption": "Published Archive · searchable artifact collection",
          "alt": "Published Archive · searchable artifact collection"
        },
        {
          "src": "/recruitment/ahd-timeline.webp",
          "caption": "Published Timeline · chronological exploration",
          "alt": "Published Timeline · chronological exploration"
        }
      ]
    },
    {
      "title": "Responsive Design",
      "points": [
        "The desktop composition becomes a single-column mobile experience, with adapted filter controls, navigation and information cards. The 390px capture below records the published interface; responsive checks are distinct from physical-device testing."
      ],
      "images": [
        {
          "src": "/recruitment/ahd-mobile.webp",
          "caption": "Published Map in a 390px responsive viewport",
          "alt": "Published Map in a 390px responsive viewport"
        }
      ]
    },
    {
      "title": "Final Outcome",
      "points": [
        "The published academic archive contains four sites and 33 artifact records, including interactive 3D dossiers. WordPress/PHP and MySQL run on InfinityFree; GLB assets are served from Cloudflare Pages. The live website is linked above."
      ],
      "images": [
        {
          "src": "/recruitment/ahd-artifact.webp",
          "caption": "DR-03 artifact dossier · live 3D interaction",
          "alt": "DR-03 artifact dossier · live 3D interaction"
        }
      ]
    },
    {
      "title": "Reflection",
      "points": [
        "The most useful lesson was to separate content, query logic and presentation, then test how they reconnect. Deployment also made asset budgets, material compatibility and map-card collisions concrete design constraints. A legacy material difference on VK-03 remains documented rather than silently changing the artwork."
      ]
    }
  ],
  "zh": [
    {
      "title": "背景与目标",
      "points": [
        "项目设定于公元 5000 年，想象后人类返回地球，通过废墟遗址与文物重建人类记忆。目标是让这些关系可被探索，同时保留 WordPress 后台的内容编辑能力。"
      ]
    },
    {
      "title": "个人职责与团队",
      "points": [
        "我主导视觉整合、技术架构、WordPress/Pods 开发与前端交互，并协调交付。Jiaxuan Ren负责信息架构、线框与汇报；Jiayi Zheng参与调研及前端支持；Menglu Wang负责内容研究、撰写与汇报。概念发展与资料收集属于团队共同成果。"
      ]
    },
    {
      "title": "信息架构",
      "points": [
        "首页、地图、档案、时间线与关于页面，是同一内容系统的不同入口。遗址关联文物，分类与年份提供额外的阅读方式。下图来自团队课程汇报。"
      ],
      "images": [
        {
          "src": "/recruitment/ahd-ia.webp",
          "caption": "信息架构 · 团队课程汇报第 7 页",
          "alt": "信息架构 · 团队课程汇报第 7 页"
        }
      ]
    },
    {
      "title": "用户体验与导航",
      "points": [
        "访客可通过地图进行空间探索，在档案中搜索与筛选，或沿时间线按年代浏览。持续可见的导航与文物档案连接这些路径，底层记录无需重复维护。"
      ],
      "images": [
        {
          "src": "/recruitment/ahd-map.webp",
          "caption": "已发布地图 · 遗址选择与浮动信息卡",
          "alt": "已发布地图 · 遗址选择与浮动信息卡"
        }
      ]
    },
    {
      "title": "视觉设计系统",
      "points": [
        "编辑式网格、克制的黑白灰色彩、文物编号与技术感字体，建立考古档案的视觉语境。可复用卡片、边框与元数据让地图、档案和详情页保持一致。"
      ],
      "images": [
        {
          "src": "/recruitment/ahd-design-system.webp",
          "caption": "色彩系统 · 团队课程汇报第 16 页",
          "alt": "色彩系统 · 团队课程汇报第 16 页"
        }
      ]
    },
    {
      "title": "WordPress + Pods 数据结构",
      "points": [
        "Pods 管理 Site 与 Artifact 两类自定义内容及其关联，Classification 分类法组织文物。PHP 与 WP_Query 获取关联文物、筛选分类并按年份排序，同一数据用于地图、档案、时间线和详情页。"
      ],
      "images": [
        {
          "src": "/recruitment/ahd-data.webp",
          "caption": "Pods 内容实体与关联 · 团队课程汇报第 23 页",
          "alt": "Pods 内容实体与关联 · 团队课程汇报第 23 页"
        }
      ]
    },
    {
      "title": "交互功能",
      "points": [
        "Leaflet 驱动遗址地图与信息卡，JavaScript 连接搜索和筛选，GSAP 实现揭示与时间线动效，A-Frame 展示 GLB 文物。交互支持探索，核心内容仍由 CMS 管理。"
      ],
      "images": [
        {
          "src": "/recruitment/ahd-archive.webp",
          "caption": "已发布档案 · 可搜索的文物集合",
          "alt": "已发布档案 · 可搜索的文物集合"
        },
        {
          "src": "/recruitment/ahd-timeline.webp",
          "caption": "已发布时间线 · 年代探索",
          "alt": "已发布时间线 · 年代探索"
        }
      ]
    },
    {
      "title": "响应式设计",
      "points": [
        "桌面构图在移动端转为单列，筛选控件、导航与信息卡作相应适配。下方 390px 截图记录已发布界面；响应式检查与手机真机测试分别记录。"
      ],
      "images": [
        {
          "src": "/recruitment/ahd-mobile.webp",
          "caption": "390px 响应式视口中的已发布地图",
          "alt": "390px 响应式视口中的已发布地图"
        }
      ]
    },
    {
      "title": "最终成果",
      "points": [
        "已发布的学术档案包含四处遗址与 33 条文物记录，提供可交互的 3D 文物档案。WordPress/PHP 与 MySQL 位于 InfinityFree，GLB 静态资源由 Cloudflare Pages 提供。正式网站入口位于上方。"
      ],
      "images": [
        {
          "src": "/recruitment/ahd-artifact.webp",
          "caption": "DR-03 文物档案 · 线上 3D 交互",
          "alt": "DR-03 文物档案 · 线上 3D 交互"
        }
      ]
    },
    {
      "title": "反思",
      "points": [
        "最重要的收获是分离内容、查询逻辑与展示，并测试它们如何重新连接。部署也使资源体积、材质兼容和地图卡片碰撞成为具体设计约束。VK-03 的旧材质差异已记录，没有擅自改变原作品。"
      ]
    }
  ],
  "it": [
    {
      "title": "Contesto e obiettivo",
      "points": [
        "Ambientato nell’anno 5000, l’archivio immagina il ritorno dei postumani sulla Terra per ricostruire la memoria umana attraverso rovine e reperti. L’obiettivo era rendere esplorabili queste relazioni mantenendo i contenuti modificabili in WordPress."
      ]
    },
    {
      "title": "Il mio ruolo e il team",
      "points": [
        "Ho guidato integrazione visiva, architettura tecnica, sviluppo WordPress/Pods e interazioni front end, coordinando la consegna. Jiaxuan Ren ha curato architettura informativa, wireframe e presentazione; Jiayi Zheng ricerca e supporto front end; Menglu Wang ricerca, testi e presentazione. Concept e raccolta dei contenuti sono stati condivisi."
      ]
    },
    {
      "title": "Architettura dell’informazione",
      "points": [
        "Home, Mappa, Archivio, Timeline e About offrono accessi diversi allo stesso sistema di contenuti. Ogni sito è collegato ai suoi reperti; classificazione e anno permettono altre letture della collezione. Il diagramma proviene dal dossier del team."
      ],
      "images": [
        {
          "src": "/recruitment/ahd-ia.webp",
          "caption": "Architettura informativa · dossier del team, pagina 7",
          "alt": "Architettura informativa · dossier del team, pagina 7"
        }
      ]
    },
    {
      "title": "UX e navigazione",
      "points": [
        "Si può esplorare lo spazio nella Mappa, cercare e filtrare nell’Archivio, oppure seguire gli anni nella Timeline. Navigazione persistente e dossier collegano i percorsi senza duplicare i dati."
      ],
      "images": [
        {
          "src": "/recruitment/ahd-map.webp",
          "caption": "Mappa pubblicata · selezione del sito e scheda informativa",
          "alt": "Mappa pubblicata · selezione del sito e scheda informativa"
        }
      ]
    },
    {
      "title": "Sistema visivo",
      "points": [
        "Griglia editoriale, palette monocromatica, codici di inventario e tipografia tecnica definiscono l’archivio archeologico. Card, bordi e metadati riutilizzabili mantengono coerenza tra mappa, archivio e dettagli."
      ],
      "images": [
        {
          "src": "/recruitment/ahd-design-system.webp",
          "caption": "Sistema cromatico · dossier del team, pagina 16",
          "alt": "Sistema cromatico · dossier del team, pagina 16"
        }
      ]
    },
    {
      "title": "Struttura dati WordPress + Pods",
      "points": [
        "Pods gestisce i custom post type Site e Artifact e la loro relazione, con la tassonomia Classification. PHP e WP_Query recuperano reperti correlati, filtrano categorie e ordinano gli anni. Gli stessi record alimentano tutte le viste."
      ],
      "images": [
        {
          "src": "/recruitment/ahd-data.webp",
          "caption": "Entità e relazioni Pods · dossier del team, pagina 23",
          "alt": "Entità e relazioni Pods · dossier del team, pagina 23"
        }
      ]
    },
    {
      "title": "Funzionalità interattive",
      "points": [
        "Leaflet gestisce mappa e schede dei siti; JavaScript collega ricerca e filtri; GSAP anima rivelazioni e cronologia; A-Frame visualizza i reperti GLB. Le interazioni supportano l’esplorazione lasciando i contenuti nel CMS."
      ],
      "images": [
        {
          "src": "/recruitment/ahd-archive.webp",
          "caption": "Archivio pubblicato · collezione ricercabile",
          "alt": "Archivio pubblicato · collezione ricercabile"
        },
        {
          "src": "/recruitment/ahd-timeline.webp",
          "caption": "Timeline pubblicata · esplorazione cronologica",
          "alt": "Timeline pubblicata · esplorazione cronologica"
        }
      ]
    },
    {
      "title": "Design responsive",
      "points": [
        "La composizione desktop diventa un’esperienza mobile a colonna singola, con filtri, navigazione e schede adattati. La cattura a 390px documenta l’interfaccia pubblicata; i controlli responsive sono distinti dai test su dispositivi fisici."
      ],
      "images": [
        {
          "src": "/recruitment/ahd-mobile.webp",
          "caption": "Mappa pubblicata in un viewport responsive di 390px",
          "alt": "Mappa pubblicata in un viewport responsive di 390px"
        }
      ]
    },
    {
      "title": "Risultato finale",
      "points": [
        "L’archivio accademico pubblicato contiene quattro siti e 33 reperti, con dossier 3D interattivi. WordPress/PHP e MySQL sono su InfinityFree; i GLB vengono serviti da Cloudflare Pages. Il sito è collegato in alto."
      ],
      "images": [
        {
          "src": "/recruitment/ahd-artifact.webp",
          "caption": "Dossier DR-03 · interazione 3D online",
          "alt": "Dossier DR-03 · interazione 3D online"
        }
      ]
    },
    {
      "title": "Riflessione",
      "points": [
        "La lezione principale è stata separare contenuti, query e presentazione e verificare come si ricompongono. La pubblicazione ha reso concreti i vincoli di peso, compatibilità dei materiali e collisione delle schede. La differenza del materiale legacy di VK-03 è documentata senza alterare l’opera."
      ]
    }
  ]
};
export const featuredIds = [9, 5, 1, 2];
export function buildProjects(language: Language, original: unknown[]): PortfolioProject[] {
  const ui = recruitmentCopy[language];
  const contextTitle = { en: 'Context & intention', zh: '背景与意图', it: 'Contesto e intenzione' }[language];
  const processTitle = { en: 'Design approach & contribution', zh: '设计过程与个人贡献', it: 'Processo e contributo personale' }[language];
  const old = (original as Omit<PortfolioProject, 'meta'>[]).map(project => {
    const key = String(project.id) as keyof typeof projectMeta.en;
    const meta = projectMeta[language][key];
    const content = legacyCopy[language][key as keyof typeof legacyCopy.en];
    const result = { ...project, year: [2, 3].includes(project.id) ? '2022–2023' : project.year, meta, overview: { name: project.title, type: meta.type, intro: meta.summary }, sections: [{ title: contextTitle, points: [content.context] }, { title: processTitle, points: [content.approach] }] };
    return project.id === 8 ? enrichCaptcha(result, language) : result;
  });
  const meta = projectMeta[language]['9'];
  const sections = archiveSections[language];
  return [{ id: 9, slug: 'after-humans-disappeared', title: 'After Humans Disappeared', category: { en: 'Web Design / Interactive Digital Archive / WordPress Development', zh: '网页设计 / 交互数字档案 / WordPress 开发', it: 'Web design / Archivio digitale interattivo / Sviluppo WordPress' }[language], year: '2026', image: '/recruitment/ahd-home.webp', meta, overview: { name: 'After Humans Disappeared', type: meta.type, intro: meta.summary }, caseSections: sections, gallery: sections.flatMap(section => 'images' in section ? section.images.map(image => image.src) : []) }, ...old, ...buildCourseProjects(language)];
}
