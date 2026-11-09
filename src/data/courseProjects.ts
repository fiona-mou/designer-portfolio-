import type { Language } from '../i18n/translations';
import type { PortfolioProject, ProjectSection } from './recruitment';

// Course records and original assets: see the local course-update provenance report.
const asset = (name: string) => `/course-experiments/${name}.webp`;
const assetSizes: Record<string, [number, number]> = {
  "captcha-overlay": [
    1440,
    1440
  ],
  "captcha-image-cards": [
    1440,
    1440
  ],
  "captcha-kit": [
    1920,
    1080
  ],
  "atelier-music-box": [
    1920,
    1109
  ],
  "atelier-room": [
    1920,
    1047
  ],
  "captcha-ar": [
    1920,
    1278
  ],
  "museum-start": [
    1792,
    923
  ],
  "atelier-diary": [
    1200,
    694
  ],
  "museum-renaissance": [
    933,
    1200
  ],
  "museum-impressionism": [
    486,
    600
  ],
  "museum-surrealism": [
    502,
    600
  ],
  "captcha-flap": [
    1440,
    1440
  ],
  "atelier-mirror": [
    1920,
    1048
  ],
  "museum-cubism": [
    510,
    600
  ]
};
const image = (name: string, caption: string) => ({ src: asset(name), caption, alt: caption, width: assetSizes[name][0], height: assetSizes[name][1] });
const geniallyUrl = 'https://view.genially.com/69b00252a9dd8c6ae6426021';

export const courseCopy = {
  en: {
    title: 'Course Experiments',
    intro: 'Small postgraduate experiments in learning, play and narrative interaction.',
    view: 'View experiment',
    live: 'Play on Genially',
    experience: 'Work & Communication Experience',
    skills: [
      { title: 'Visual / UI', tools: ['Figma', 'Photoshop', 'Illustrator', 'InDesign'], description: 'Interfaces, identity, typography and editorial design.' },
      { title: 'Creative Interaction', tools: ['TouchDesigner', 'Arduino', 'Processing', 'p5.js'], description: 'Creative coding, generative visuals and physical–digital prototypes.' },
      { title: 'Web / Development', tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Symfony', 'WordPress', 'Pods'], description: 'Responsive interfaces, content systems and interactive web development.' },
      { title: 'AI-Assisted Workflow', tools: ['ChatGPT', 'Gemini', 'Codex'], description: 'Research organisation, prototyping, coding support, debugging and QA, with human review.' },
    ],
    jobs: [
      { organisation: 'ASSCAT · Chinese students’ association, Turin Academy of Fine Arts', role: 'Head of Publicity', period: '2021.07–2025.03', points: ['Edited and published WeChat Official Account content; managed WeChat and Xiaohongshu communications.', 'Created event posters and promotional visual materials; coordinated event publicity and team delivery.'] },
      { organisation: 'Dalian Bee Technology Co., Ltd.', role: 'New Media Operations & Video Editing', period: '2021.10–2022.03', points: ['Edited videos and produced motion graphics and communication assets for new media.', 'Prepared content for publication and delivered visual materials to the brief and schedule.'] },
    ],
  },
  zh: {
    title: '课程实验', intro: '研究生阶段围绕学习、游戏与叙事交互展开的小型实践。', view: '查看实验', live: '在 Genially 体验', experience: '工作与传播实践经历',
    skills: [
      { title: '视觉 / UI', tools: ['Figma', 'Photoshop', 'Illustrator', 'InDesign'], description: '界面、品牌视觉、字体与版式设计。' },
      { title: '创意交互', tools: ['TouchDesigner', 'Arduino', 'Processing', 'p5.js'], description: '创意编程、生成视觉与实体—数字交互原型。' },
      { title: '网页 / 开发', tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Symfony', 'WordPress', 'Pods'], description: '响应式界面、内容系统与交互网页开发。' },
      { title: 'AI 辅助工作流程', tools: ['ChatGPT', 'Gemini', 'Codex'], description: '辅助研究整理、原型、代码开发、调试与 QA，并进行人工检查。' },
    ],
    jobs: [
      { organisation: 'ASSCAT 都美学联', role: '宣传部部长', period: '2021.07–2025.03', points: ['负责微信公众号内容编辑与发布，以及微信、小红书新媒体运营。', '制作活动海报与视觉宣传物料，统筹活动宣传与团队协作交付。'] },
      { organisation: '大连蜜蜂科技有限公司', role: '新媒体运营与视频剪辑', period: '2021.10–2022.03', points: ['负责视频剪辑、动态图形与新媒体传播内容制作。', '按需求和排期整理发布内容，交付视觉宣传素材。'] },
    ],
  },
  it: {
    title: 'Esperimenti di corso', intro: 'Piccoli progetti del biennio tra apprendimento, gioco e interazione narrativa.', view: 'Esplora il progetto', live: 'Gioca su Genially', experience: 'Esperienza lavorativa e comunicazione',
    skills: [
      { title: 'Design visivo / UI', tools: ['Figma', 'Photoshop', 'Illustrator', 'InDesign'], description: 'Interfacce, identità, tipografia e impaginazione.' },
      { title: 'Interazione creativa', tools: ['TouchDesigner', 'Arduino', 'Processing', 'p5.js'], description: 'Creative coding, visual generativi e prototipi fisico-digitali.' },
      { title: 'Web / Sviluppo', tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Symfony', 'WordPress', 'Pods'], description: 'Interfacce responsive, sistemi di contenuti e sviluppo web interattivo.' },
      { title: 'Flusso di lavoro assistito da AI', tools: ['ChatGPT', 'Gemini', 'Codex'], description: 'Supporto a ricerca, prototipazione, codice, debugging e QA, con verifica umana.' },
    ],
    jobs: [
      { organisation: 'ASSCAT · Associazione degli studenti cinesi dell’Accademia di Torino', role: 'Responsabile della comunicazione', period: '2021.07–2025.03', points: ['Redazione e pubblicazione di contenuti per l’account ufficiale WeChat; gestione della comunicazione su WeChat e Xiaohongshu.', 'Realizzazione di manifesti e materiali promozionali; coordinamento della comunicazione degli eventi e delle consegne del team.'] },
      { organisation: 'Dalian Bee Technology Co., Ltd.', role: 'Gestione nuovi media e montaggio video', period: '2021.10–2022.03', points: ['Montaggio video, motion graphics e produzione di contenuti per i nuovi media.', 'Preparazione dei contenuti per la pubblicazione e consegna di materiali visivi secondo brief e scadenze.'] },
    ],
  },
};

const atelier = {
  en: {
    category: 'Genially / Gamification / Escape Room', type: 'Postgraduate course project · Applicazioni digitali (B)', role: 'Collaborative course project', team: 'Two-person collaboration · Fangyu Mou & Jiaxuan Ren', deliverables: 'Published Genially escape-room prototype, scene assets and puzzle-flow design', summary: 'A psychological-horror escape room where a painter’s abandoned studio becomes a network of clues.',
    sections: [
      { title: 'Explore, observe, connect', points: ['The course report structures eight interdependent puzzle nodes around canvases, a palette, music box, mirror, diary, chest and final door. The published Genially prototype presents explorable scenes, hidden information and code-entry interactions.', 'Clues are combined rather than solved in isolation: fragments from the canvas and music box connect to the mirror’s reading rule and the final exit. The aim is to practise observation and lateral thinking.'], images: [image('atelier-diary', 'Original diary scene asset'), image('atelier-mirror', 'Original mirror clue asset')] },
      { title: 'Branching narrative & shared authorship', points: ['The report maps an increasing difficulty curve and escape, death, imprisonment and loop endings. The published experience includes corresponding narrative pages; a complete play-through of every branch has not been validated.', 'Created with Jiaxuan Ren as a two-person postgraduate collaboration. Individual responsibilities are not separated in the course record.'], images: [image('atelier-music-box', 'Original music-box clue asset')] },
    ],
  },
  zh: {
    category: 'Genially / 游戏化 / 逃脱解谜', type: '研究生课程项目 · Applicazioni digitali (B)', role: '双人合作课程实践', team: '双人合作 · 牟芳昱、Jiaxuan Ren', deliverables: '已发布的 Genially 逃脱游戏原型、场景素材与谜题流程设计', summary: '以画家废弃工作室为舞台，将环境线索连接成解谜网络的心理恐怖逃脱游戏。',
    sections: [
      { title: '探索、观察与线索组合', points: ['课程报告围绕画布正反面、调色板、八音盒、镜子、日记、铁箱与最终出口，组织八个关联谜题节点。已发布的 Genially 原型包含可探索场景、隐藏信息与密码输入交互。', '线索并非孤立求解：画布与八音盒中的数字，需要结合镜子的阅读规则推导出口密码，目标是练习观察、横向思考与信息关联。'], images: [image('atelier-diary', '原始日记场景素材'), image('atelier-mirror', '原始镜面线索素材')] },
      { title: '分支叙事与双人合作', points: ['报告规划了递进的难度曲线，以及逃脱、死亡、囚禁和循环结局；线上作品有对应叙事页面，但尚未验证全部分支的完整通关路径。', '与 Jiaxuan Ren 合作完成的研究生课程实践；课程记录未细分个人职责，因此不单独归属各项设计与制作。'], images: [image('atelier-music-box', '原始八音盒线索素材')] },
    ],
  },
  it: {
    category: 'Genially / Gamification / Escape room', type: 'Progetto del biennio · Applicazioni digitali (B)', role: 'Progetto di corso in collaborazione', team: 'Collaborazione a due · Fangyu Mou e Jiaxuan Ren', deliverables: 'Prototipo di escape room pubblicato su Genially, scene e flusso degli enigmi', summary: 'Un’escape room horror psicologica in cui lo studio abbandonato di un pittore diventa una rete di indizi.',
    sections: [
      { title: 'Esplorare, osservare, collegare', points: ['La relazione struttura otto nodi interdipendenti attorno alle tele, alla tavolozza, al carillon, allo specchio, al diario, al baule e alla porta finale. Il prototipo Genially pubblicato presenta scene esplorabili, informazioni nascoste e interazioni con codici.', 'Gli indizi vanno combinati: i frammenti della tela e del carillon si collegano alla regola dello specchio e all’uscita finale. L’obiettivo è esercitare osservazione e pensiero laterale.'], images: [image('atelier-diary', 'Asset originale della scena del diario'), image('atelier-mirror', 'Asset originale dell’indizio sullo specchio')] },
      { title: 'Narrazione ramificata e lavoro condiviso', points: ['La relazione descrive difficoltà crescente e finali di fuga, morte, prigionia e ciclo. L’esperienza pubblicata contiene le relative pagine narrative; non è stato validato un percorso completo per ogni ramo.', 'Realizzato con Jiaxuan Ren in una collaborazione a due nel biennio. La documentazione del corso non distingue le singole responsabilità.'], images: [image('atelier-music-box', 'Asset originale dell’indizio nel carillon')] },
    ],
  },
};

const museum = {
  en: {
    category: 'Construct 3 / Educational Game', type: 'Individual postgraduate course project · Applicazioni digitali (B)', role: 'Game design & Construct 3 development', team: 'Individual project · Fangyu Mou', deliverables: 'Construct 3 prototype, museum layout, event sheet and game assets', summary: 'A top-down museum game that turns recognition of art movements into exploration and decisions.',
    sections: [
      { title: 'Four rooms, increasing pressure', points: ['Cubism introduces exploration; Impressionism adds physical obstacles; Renaissance introduces a 30-second limit; Surrealism reduces painting visibility and allows 20 seconds. The source organises the rooms within one gameplay map, with a separate UI layer.', 'The learning objective is to recognise Cubism, Impressionism, Renaissance and Surrealism by observing visual characteristics and distinguishing matching artworks from distractors. This is a course prototype, not a measured learning-outcomes study.'] },
      { title: 'Rules & prototype delivery', points: ['The event sheet implements +2 for a correct artwork and −2 for an incorrect one. Cumulative thresholds of 6, 14 and 22 open doors; crossing a passage trigger starts the next mission. The final target is 30 points.', 'Score, countdowns, success/failure feedback and restart controls are present in the project. A remaining-score check triggers failure when a target becomes unreachable. The prototype is presented here through its original assets and preview; a tested public HTML5 build is not yet available.'] },
    ],
  },
  zh: {
    category: 'Construct 3 / 教育游戏', type: '研究生课程个人项目 · Applicazioni digitali (B)', role: '游戏设计与 Construct 3 开发', team: '个人项目 · 牟芳昱', deliverables: 'Construct 3 原型、博物馆布局、事件表与游戏素材', summary: '将艺术流派识别转化为探索与选择的俯视角博物馆教育游戏。',
    sections: [
      { title: '四个展厅，逐步增加难度', points: ['立体主义关引入自由探索；印象派关加入实体障碍；文艺复兴关引入 30 秒时限；超现实主义关降低画作可见度并限时 20 秒。源工程将展厅组织在同一游戏地图中，并使用独立 UI 图层。', '学习目标是观察构图、色彩等视觉特征，识别立体主义、印象派、文艺复兴与超现实主义，区分对应画作与干扰项。这是课程原型，尚未进行学习成效研究。'] },
      { title: '游戏规则与原型交付', points: ['事件表实现了正确画作加 2 分、错误画作扣 2 分。累计达到 6、14、22 分后开启对应的门，穿过通道触发器才开始下一任务；最终目标为 30 分。', '工程包含计分、倒计时、成功／失败反馈与重开控件；当剩余正确画作已不足以达标时，会触发失败反馈。这里展示原始素材和运行预览，尚无经过验证的公开 HTML5 游戏版本。'] },
    ],
  },
  it: {
    category: 'Construct 3 / Gioco educativo', type: 'Progetto individuale del biennio · Applicazioni digitali (B)', role: 'Game design e sviluppo in Construct 3', team: 'Progetto individuale · Fangyu Mou', deliverables: 'Prototipo Construct 3, mappa del museo, foglio eventi e asset di gioco', summary: 'Un gioco museale con visuale dall’alto che trasforma il riconoscimento dei movimenti artistici in esplorazione e scelta.',
    sections: [
      { title: 'Quattro sale, difficoltà crescente', points: ['Il Cubismo introduce l’esplorazione; l’Impressionismo aggiunge ostacoli fisici; il Rinascimento introduce un limite di 30 secondi; il Surrealismo riduce la visibilità dei dipinti e concede 20 secondi. Il sorgente organizza le sale in una mappa di gameplay con un livello UI separato.', 'L’obiettivo didattico è riconoscere Cubismo, Impressionismo, Rinascimento e Surrealismo attraverso le caratteristiche visive, distinguendo le opere pertinenti dai distrattori. È un prototipo di corso, non uno studio con risultati di apprendimento misurati.'] },
      { title: 'Regole e consegna del prototipo', points: ['Il foglio eventi assegna +2 per un’opera corretta e −2 per una errata. Le soglie cumulative di 6, 14 e 22 punti aprono le porte; il passaggio su un trigger avvia la missione seguente. L’obiettivo finale è 30 punti.', 'Il progetto include punteggio, conto alla rovescia, feedback di vittoria/sconfitta e riavvio. Un controllo delle opere rimaste attiva la sconfitta quando l’obiettivo diventa irraggiungibile. Qui sono presentati asset originali e anteprima; non è ancora disponibile una versione HTML5 pubblica collaudata.'] },
    ],
  },
};

const captcha = {
  en: {
    category: 'Educational Technology / Critical Design / Physical–AR–Web', type: 'Postgraduate course project · Tecnologia dell’educazione', role: 'Kit design, visual communication & web development', team: 'Individual project · Fangyu Mou', deliverables: 'Six question cards, four image cards, folding/occlusion prototype, four AR animations, guide and published web companion', summary: 'A paper, AR and web teaching kit using CAPTCHA to question classification, surveillance and human judgement.',
    sections: [
      { title: 'Paper as an interface', points: ['Six A-series question cards and four B-series image cards form the physical kit. Flaps reveal instructions; cut-out masks overlay the image grids, turning sampling and classification into deliberate physical actions.', 'Original photographs document the assembled kit, folded prototypes and overlay interaction. These are project artefacts, not evidence of a formal study with learners.'], images: [image('captcha-flap', 'Physical prototype · opening a question-card flap'), image('captcha-overlay', 'Physical prototype · sampling mask over an image card')] },
      { title: 'AR feedback & the web companion', points: ['Four animated image responses were prepared for EyeJack, with a photographed scanning demonstration. The motion reveals unstable boxes and classification ambiguity; it is authored visual feedback, not a live AI classification service.', 'QR and card codes link the paper kit to the web companion. Its code-entry interface returns verification or a simulated system crash. The existing published site remains the live demonstration.'], images: [image('captcha-ar', 'Original photograph · phone-based AR demonstration'), image('captcha-image-cards', 'Original photograph · four image-card fronts')], links: [{ label: 'Project demonstration video', url: 'https://youtu.be/Ins9pQ8Wqgw' }, { label: 'AR example · traffic lights / lamp', url: 'https://www.youtube.com/shorts/AwhmyRF4zys' }] },
      { title: 'Critical learning intention', points: ['Designed for an educational discussion of privacy, surveillance and the tension between algorithmic labels and human interpretation. Folding, masking and conflicting feedback aim to make that tension tangible.', 'The course report provides the theoretical framing and proposed learning journey. No measured improvement, participant count or successful classroom outcome is claimed.'] },
    ],
  },
  zh: {
    category: '教育技术 / 批判性设计 / 实体—AR—网页', type: '研究生课程项目 · Tecnologia dell’educazione', role: '套件设计、视觉传达与网页开发', team: '个人项目 · 牟芳昱', deliverables: '六张问题卡、四张图像卡、翻折与遮挡原型、四段 AR 动画、使用指南与已发布网页', summary: '以 CAPTCHA 为切入点，通过纸卡、AR 与网页讨论图像分类、监控和人类判断的教育套件。',
    sections: [
      { title: '以纸张作为界面', points: ['实体套件由六张 A 系列问题卡和四张 B 系列图像卡组成。翻折结构揭示指令，镂空遮罩叠放在图像网格上，将采样与分类转化为有意识的实体操作。', '原始照片记录了组装套件、折叠原型与遮挡交互。这些是制作成果记录，并非正式学习者研究的证据。'], images: [image('captcha-flap', '实体原型 · 打开问题卡翻折结构'), image('captcha-overlay', '实体原型 · 遮罩叠放于图像卡')] },
      { title: 'AR 反馈与网页联动', points: ['为 EyeJack 制作了四段图像反馈动画，并有手机扫描演示照片。动态框选与不稳定分类展示算法判断的模糊性；它们是预制视觉反馈，不是实时 AI 分类服务。', 'QR 与卡片编号连接纸质套件和网页。编号输入界面会进入验证结果或模拟系统崩溃状态，保留现有已发布网站作为在线演示。'], images: [image('captcha-ar', '原始拍摄 · 手机 AR 扫描演示'), image('captcha-image-cards', '原始拍摄 · 四张图像卡正面')], links: [{ label: '项目演示视频', url: 'https://youtu.be/Ins9pQ8Wqgw' }, { label: 'AR 示例 · 红绿灯与台灯', url: 'https://www.youtube.com/shorts/AwhmyRF4zys' }] },
      { title: '批判性学习目标', points: ['围绕隐私、监控、算法标签与人类理解之间的冲突展开教育讨论，通过翻折、遮挡与矛盾反馈，让抽象问题成为可感知的体验。', '课程报告提供理论框架与预设学习路径；不宣称已经验证的学习提升、参与人数或课堂教学成果。'] },
    ],
  },
  it: {
    category: 'Tecnologia educativa / Critical design / Carta–AR–Web', type: 'Progetto del biennio · Tecnologia dell’educazione', role: 'Design del kit, comunicazione visiva e sviluppo web', team: 'Progetto individuale · Fangyu Mou', deliverables: 'Sei carte domanda, quattro carte immagine, prototipo con alette e maschere, quattro animazioni AR, guida e sito pubblicato', summary: 'Un kit didattico tra carta, AR e web che usa i CAPTCHA per interrogare classificazione, sorveglianza e giudizio umano.',
    sections: [
      { title: 'La carta come interfaccia', points: ['Sei carte domanda della serie A e quattro carte immagine della serie B compongono il kit. Le alette rivelano le istruzioni; le maschere ritagliate si sovrappongono alle griglie, trasformando campionamento e classificazione in azioni fisiche deliberate.', 'Le fotografie originali documentano il kit assemblato, i prototipi piegati e l’interazione per occlusione. Sono elaborati di progetto, non prove di uno studio formale con studenti.'], images: [image('captcha-flap', 'Prototipo fisico · apertura dell’aletta di una carta domanda'), image('captcha-overlay', 'Prototipo fisico · maschera sovrapposta a una carta immagine')] },
      { title: 'Feedback AR e collegamento web', points: ['Sono state preparate quattro risposte animate per EyeJack, con una dimostrazione fotografata della scansione. Riquadri instabili e ambiguità visive rappresentano la classificazione: sono animazioni progettate, non un servizio AI in tempo reale.', 'QR e codici delle carte collegano il kit al sito. L’interfaccia di inserimento del codice restituisce una verifica oppure un crash simulato del sistema. Il sito già pubblicato rimane la dimostrazione online.'], images: [image('captcha-ar', 'Fotografia originale · dimostrazione AR su smartphone'), image('captcha-image-cards', 'Fotografia originale · fronte delle quattro carte immagine')], links: [{ label: 'Video dimostrativo del progetto', url: 'https://youtu.be/Ins9pQ8Wqgw' }, { label: 'Esempio AR · semaforo / lampada', url: 'https://www.youtube.com/shorts/AwhmyRF4zys' }] },
      { title: 'Intenzione didattica critica', points: ['Il kit propone una discussione educativa su privacy, sorveglianza e conflitto tra etichette algoritmiche e interpretazione umana. Piegare, oscurare e ricevere feedback contraddittori rende tangibile questa tensione.', 'La relazione definisce il quadro teorico e il percorso didattico previsto. Non si dichiarano miglioramenti misurati, numeri di partecipanti o risultati di sperimentazione in aula.'] },
    ],
  },
};

function courseProject(id: number, slug: string, title: string, cover: string, content: typeof atelier.en | typeof museum.en): PortfolioProject {
  const { category, sections, ...meta } = content;
  const caseSections: ProjectSection[] = sections;
  return { id, slug, title, category, year: '2026', image: asset(cover), imageFit: 'contain', collection: 'course', meta: { ...meta, tools: id === 10 ? ['Genially'] : ['Construct 3'] }, overview: { name: title, type: meta.type, intro: meta.summary }, caseSections, gallery: [asset(cover), ...caseSections.flatMap(section => section.images?.map(item => item.src) ?? [])] };
}

export function buildCourseProjects(language: Language): PortfolioProject[] {
  const a = courseProject(10, 'latelier-maledetto', "L'Atelier Maledetto", 'atelier-room', atelier[language]);
  a.meta.liveUrl = geniallyUrl;
  a.liveLabel = courseCopy[language].live;
  const m = courseProject(11, 'museum-hunt', 'Museum Hunt', 'museum-start', museum[language]);
  const artCaptions = {
    en: ['Cubism · native painting asset', 'Impressionism · native painting asset', 'Renaissance · native painting asset', 'Surrealism · native painting asset'],
    zh: ['立体主义 · 工程内画作素材', '印象派 · 工程内画作素材', '文艺复兴 · 工程内画作素材', '超现实主义 · 工程内画作素材'],
    it: ['Cubismo · asset originale del dipinto', 'Impressionismo · asset originale del dipinto', 'Rinascimento · asset originale del dipinto', 'Surrealismo · asset originale del dipinto'],
  }[language];
  m.caseSections = m.caseSections!.map((section, index) => ({ ...section, images: index === 0 ? ['museum-cubism', 'museum-impressionism', 'museum-renaissance', 'museum-surrealism'].map((name, i) => image(name, artCaptions[i])) : [image('museum-start', { en: 'Construct 3 live preview · start screen', zh: 'Construct 3 真实运行预览 · 开始界面', it: 'Anteprima reale in Construct 3 · schermata iniziale' }[language])] }));
  m.gallery = m.caseSections.flatMap(section => section.images?.map(item => item.src) ?? []);
  return [a, m];
}

export function enrichCaptcha(project: PortfolioProject, language: Language): PortfolioProject {
  const { category, sections, ...content } = captcha[language];
  const caseSections: ProjectSection[] = [...sections];
  const earlier = {
    en: { title: 'Related web studies', caption: 'Earlier CAPTCHA WAR web study', video: 'Earlier web demonstration' },
    zh: { title: '相关网页实验', caption: 'CAPTCHA WAR 早期网页研究', video: '早期网页演示' },
    it: { title: 'Studi web collegati', caption: 'Studio web precedente di CAPTCHA WAR', video: 'Dimostrazione web precedente' },
  }[language];
  caseSections.push({ title: earlier.title, points: [], images: [{ src: '/captchawar1.png', caption: earlier.caption, alt: earlier.caption, width: 425, height: 262 }], links: (project.gallery ?? []).filter(src => src.startsWith('https:')).map((url, i) => ({ label: `${earlier.video} ${i + 1}`, url })) });
  return { ...project, year: '2025–2026', category, image: asset('captcha-kit'), imageFit: 'contain', meta: { ...project.meta, ...content, tools: ['Figma', 'EyeJack', 'HTML', 'CSS', 'TypeScript'] }, overview: { name: project.title, type: content.type, intro: content.summary }, sections: undefined, caseSections, gallery: [asset('captcha-kit'), '/captchawar.jpg', ...caseSections.flatMap(section => section.images?.map(item => item.src) ?? []), ...(project.gallery ?? []).filter(src => src.startsWith('https:'))] };
}
