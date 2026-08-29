import { createFileRoute } from "@tanstack/react-router";

import { Reveal, useScrollProgress, useScrollSpy } from "@/components/reveal";
import fortuneFinderImg from "@/assets/project-fortune-finder.jpg";
import nyseImg from "@/assets/project-nyse-forecasting.jpg";
import emnistImg from "@/assets/project-emnist.jpg";
import fruitImg from "@/assets/project-fruit-classification.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jaswanth KS — Software Engineer, Backend & Applied AI" },
      {
        name: "description",
        content:
          "London-based software engineer and MSc Data Science and AI graduate building backend services, applied ML systems, and cloud-ready workflows.",
      },
      { property: "og:title", content: "Jaswanth KS — Software Engineer, Backend & Applied AI" },
      {
        property: "og:description",
        content:
          "Backend APIs, AWS data workflows, CI/CD delivery, and applied AI projects across forecasting, computer vision, and probability simulation.",
      },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  ["01", "Overview", "overview"],
  ["02", "Capabilities", "capabilities"],
  ["03", "Skills", "skills"],
  ["04", "Certifications", "certs"],
  ["05", "Projects", "projects"],
  ["06", "Case Notes", "cases"],
  ["07", "Timeline", "timeline"],
  ["08", "Contact", "contact"],
] as const;

const NAV_IDS = NAV.map(([, , id]) => id);

const MARQUEE = [
  "Python",
  "FastAPI",
  "AWS",
  "Terraform",
  "Docker",
  "LangChain",
  "TensorFlow",
  "PostgreSQL",
  "Kubernetes",
  "CI/CD",
  "RAG",
  "Microsoft Fabric",
  "TypeScript",
  "Pytest",
];

const CAPABILITIES = [
  {
    id: "C-01",
    tag: "Core",
    title: "Backend Engineering",
    body: "REST APIs, Flask/FastAPI services, SQLAlchemy workflows, secure data movement, and maintainable Python systems.",
    chips: ["Python", "FastAPI", "Flask", "SQLAlchemy"],
  },
  {
    id: "C-02",
    tag: "Delivery",
    title: "Cloud and Delivery",
    body: "AWS infrastructure, Docker, CI/CD, Terraform, Jenkins, Pytest, and deployment-minded engineering.",
    chips: ["AWS", "Docker", "Terraform", "Pytest"],
  },
  {
    id: "C-03",
    tag: "Intelligence",
    title: "AI and Data Systems",
    body: "Forecasting, deep learning, computer vision, GenAI concepts, RAG workflows, preprocessing, and model comparison.",
    chips: ["LSTM", "CNN", "RAG", "Pandas"],
  },
];

const SKILLS = [
  {
    group: "Programming Languages",
    tag: "Core",
    items: ["Python", "JavaScript", "TypeScript", "T-SQL", "SQL"],
  },
  {
    group: "AI / ML & Gen AI",
    tag: "Intelligence",
    items: [
      "Machine Learning",
      "NLP",
      "LLMs",
      "RAG",
      "Azure OpenAI",
      "LangGraph",
      "LangChain",
      "Knowledge Graphs",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Vector Embeddings",
      "Semantic Search",
    ],
  },
  {
    group: "Data Engineering",
    tag: "Pipelines",
    items: [
      "ETL Pipeline Development",
      "Data Modelling",
      "Query Optimisation",
      "Ingestion & Transformation",
      "Lakehouse Architecture",
    ],
  },
  {
    group: "Backend Development & APIs",
    tag: "Services",
    items: ["FastAPI", "Flask", "Django", "Microservices", "REST APIs"],
  },
  {
    group: "Cloud & DevOps",
    tag: "Cloud",
    items: [
      "AWS Lambda",
      "AWS Glue",
      "DynamoDB",
      "RDS",
      "S3",
      "EC2",
      "Microsoft Fabric",
      "Azure",
      "Docker",
      "Jenkins",
      "Kubernetes",
      "CI/CD",
      "Terraform",
      "GitHub Actions",
    ],
  },
  {
    group: "Databases",
    tag: "Storage",
    items: ["PostgreSQL", "MySQL", "SQL Server", "Azure SQL", "Vector Databases"],
  },
  {
    group: "Analytics",
    tag: "Insights",
    items: [
      "Semantic Models",
      "Data Visualisation",
      "Analytics Engineering",
      "DAX",
      "Data Reporting",
    ],
  },
  {
    group: "Testing",
    tag: "Reliability",
    items: ["Pytest", "TDD", "API Testing", "Performance Monitoring", "Git", "GitHub", "Postman"],
  },
];

const CERTS = [
  {
    issuer: "Microsoft",
    title: "Fabric Data Engineer Associate",
    body: "Analytics solution implementation, data ingestion and transformation, pipeline monitoring and optimisation.",
    date: "2026 · 07",
  },
  {
    issuer: "Microsoft",
    title: "Fabric Analytics Engineer Associate",
    body: "End-to-end analytics on Fabric: data preparation, semantic modeling, Power BI reporting, maintenance.",
    date: "2026 · 08",
  },
  {
    issuer: "Microsoft",
    title: "SQL AI Developer Associate",
    body: "Vector embeddings, semantic search, RAG workflows, and Azure OpenAI integration in SQL Server and Fabric.",
    date: "2026 · 07",
  },
  {
    issuer: "HackerRank",
    title: "SQL (Advanced) Certificate",
    body: "Complex queries, joins, aggregations, subqueries, and advanced database operations.",
    date: "2026 · 06",
  },
  {
    issuer: "HackerRank",
    title: "REST API (Intermediate) Certificate",
    body: "API data retrieval, parameter handling, pagination, and integration workflows.",
    date: "2026 · 06",
  },
  {
    issuer: "HackerRank",
    title: "Problem Solving (Intermediate)",
    body: "Hash maps, stacks, queues, and optimal algorithmic solutions.",
    date: "2026 · 06",
  },
  {
    issuer: "HackerRank",
    title: "Python (Basic) Certificate",
    body: "Scalar types, control flow, strings, collections, modularity, and OOP.",
    date: "2026 · 05",
  },
  {
    issuer: "HackerRank",
    title: "Software Engineer Certificate",
    body: "Role certification covering problem solving, SQL, and REST APIs.",
    date: "2026 · 05",
  },
  {
    issuer: "GitHub",
    title: "Essentials in GitHub Professional",
    body: "Version control, collaboration, and repository workflows.",
    date: "Verified",
  },
  {
    issuer: "OpenEDG",
    title: "Programming with Python Professional",
    body: "Python programming fundamentals and applied problem solving.",
    date: "Verified",
  },
  {
    issuer: "Docker",
    title: "Docker Foundations Professional",
    body: "Container basics, image workflows, and deployment foundations.",
    date: "Verified",
  },
  {
    issuer: "LinkedIn",
    title: "Prompt Engineering for Generative AI",
    body: "Prompting patterns for GenAI workflows and LLM-assisted systems.",
    date: "Verified",
  },
];

const PROJECTS = [
  {
    id: "P-01",
    kind: "Case Note",
    title: "Fortune Finder: Lottery P/L Simulator",
    image: fortuneFinderImg,
    alt: "Abstract profit and loss trend lines from the Fortune Finder lottery simulator",
    body: "Educational lottery simulation inspired by the UK National Lottery, expanded into five formats for risk-free probability and profit/loss exploration.",
    notes: [
      ["Formats", "Fortune Finder, Quick Five, Lucky Seven, Power Four, Mega Mix."],
      ["Global", "100+ countries with local currencies and ticket prices."],
      ["Ethics", "Virtual currency only, with disclaimers and age verification."],
    ],
    chips: ["Python", "Flask", "SQLAlchemy", "SQLite", "Plotly", "Bootstrap"],
  },
  {
    id: "P-02",
    kind: "Case Note",
    title: "NYSE Stock Forecasting Tool",
    image: nyseImg,
    alt: "Abstract stock price line with a dashed forecast continuation",
    body: "Built and compared ARIMA, SARIMA, and LSTM models for stock-price forecasting, then deployed the best workflow through a Flask web application.",
    notes: [
      ["Models", "Statistical and deep learning approaches scored with MAE, MSE, RMSE."],
      ["UI", "Stock selection, prediction horizon input, and Plotly visualisations."],
    ],
    chips: ["ARIMA", "SARIMA", "LSTM", "TensorFlow/Keras", "Flask", "Plotly"],
  },
  {
    id: "P-03",
    kind: "Deep Learning",
    title: "EMNIST Character Recognition",
    image: emnistImg,
    alt: "Handwritten letterform grid beside a confusion matrix heatmap",
    body: "Deep learning project for handwritten character recognition using neural network training, preprocessing, validation, and evaluation workflows.",
    notes: [
      ["Dataset", "EMNIST Balanced split with 47 handwritten character classes."],
      ["Models", "MLP and CNN compared via validation curves and confusion matrices."],
    ],
    chips: ["TensorFlow", "Keras", "CNN", "Python"],
  },
  {
    id: "P-04",
    kind: "Computer Vision",
    title: "Fruit Classification System",
    image: fruitImg,
    alt: "Grid of fruit images with detection boxes from the classification pipeline",
    body: "CNN-based image classification system using transfer learning with VGG16 and ResNet50 architectures.",
    notes: [
      ["Accuracy", "93% classification accuracy after augmentation and fine-tuning."],
      ["Models", "Compared accuracy, inference speed, and compute trade-offs."],
    ],
    chips: ["Python", "TensorFlow/Keras", "VGG16", "ResNet50", "OpenCV"],
  },
];

const TIMELINE = [
  {
    period: "2023 — 2025",
    org: "University of Liverpool",
    role: "MSc Data Science and Artificial Intelligence · Merit",
    body: "Machine learning, information retrieval, applied AI engineering, databases, and data modelling. Applied projects across forecasting, probability simulation, character recognition, and computer vision.",
    chips: ["MSc", "Applied AI", "Python", "Model Evaluation"],
  },
  {
    period: "2021 — 2023",
    org: "Growz Software Solutions",
    role: "Software Engineer",
    body: "Backend services, data pipelines, cloud infrastructure, and ML-adjacent workflows. Improved data accessibility and query performance by 30% through AWS ingestion and enrichment pipelines, improved incident detection by 50% with ETL monitoring dashboards, and reduced deployment cycle time by 40% using Git, Jenkins, Terraform, and CI/CD.",
    chips: ["AWS", "Python", "TypeScript", "Terraform", "CI/CD"],
  },
  {
    period: "2020 — 2021",
    org: "TechBorn IT Solutions",
    role: "Software Engineer Intern",
    body: "Backend services and REST APIs for predictive modelling, dashboards, and reporting tools. Assisted classification model development and testing with TensorFlow and Keras, and built Pandas/NumPy preprocessing pipelines.",
    chips: ["REST APIs", "TensorFlow", "Keras", "Pandas"],
  },
  {
    period: "2018 — 2021",
    org: "Sri Venkateswara University",
    role: "Bachelor of Science · Distinction",
    body: "Graduated with Distinction in computer science, mathematics, and physics.",
    chips: ["BSc", "Distinction", "Computer Science", "Mathematics"],
  },
];

const WORKFLOW = [
  ["Validate", "Clean data, check assumptions, compare models, measure outcomes.", 100],
  ["Package", "Wrap intelligence inside APIs, services, and repeatable pipelines.", 84],
  ["Automate", "Cut repeat work with Python, SQLAlchemy, tests, and delivery workflows.", 68],
  ["Operate", "Deploy, monitor, document, and improve the system after launch.", 52],
] as const;

const CONTACTS = [
  ["Email", "Send me a message", "mailto:hello@example.com"],
  ["LinkedIn", "Connect with me", "#"],
  ["GitHub", "See the code", "#"],
  ["HackerRank", "Verified certificates", "#"],
  ["Resume", "View my CV", "#"],
] as const;

function SectionHead({
  index,
  label,
  title,
  note,
}: {
  index: string;
  label: string;
  title: string;
  note?: string;
}) {
  return (
    <Reveal className="max-w-3xl">
      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        <span className="text-primary">{index}</span>
        <span>{label}</span>
        <span className="h-px w-16 bg-line" />
      </div>
      <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.05] tracking-tight">
        {title}
      </h2>
      {note ? (
        <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-muted-foreground">{note}</p>
      ) : null}
    </Reveal>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line-soft bg-panel px-2.5 py-1 font-mono text-[10px] text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary">
      {children}
    </span>
  );
}

function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="animate-float absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,var(--cyan),transparent_65%)] opacity-[0.18] blur-3xl" />
      <div className="animate-float-slow absolute -right-32 top-1/4 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,var(--violet),transparent_65%)] opacity-20 blur-3xl" />
      <div className="animate-float absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,var(--amber),transparent_65%)] opacity-[0.10] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_35%,var(--background)_92%)]" />
    </div>
  );
}

function Portfolio() {
  const active = useScrollSpy(NAV_IDS);
  const progress = useScrollProgress();

  return (
    <div className="relative min-h-screen bg-background font-body text-foreground">
      <Aurora />

      <div
        aria-hidden
        className="fixed left-0 top-0 z-[60] h-[2px] bg-[image:var(--gradient-aurora)] transition-[width] duration-150"
        style={{ width: `${progress * 100}%` }}
      />

      <header className="sticky top-0 z-50 border-b border-line-soft bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center gap-6 px-5 py-3.5 lg:px-10">
          <a href="#overview" className="group flex shrink-0 items-center gap-2.5">
            <span className="animate-pulse-dot inline-block h-2 w-2 rounded-full bg-primary" />
            <span className="font-display text-[17px] font-semibold tracking-tight">
              Jaswanth<span className="text-primary">.</span>KS
            </span>
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {NAV.map(([n, label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`rounded-full px-3 py-1.5 font-mono text-[11px] tracking-wide transition-all duration-300 ${
                  active === id
                    ? "bg-panel text-foreground ring-1 ring-primary/40"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="text-primary/70">{n}</span> {label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-0">
            <a
              href="#contact"
              className="rounded-full bg-[image:var(--gradient-aurora)] bg-[length:200%_auto] px-4 py-2 font-mono text-[11px] font-medium text-primary-foreground transition-[background-position] duration-700 hover:bg-right"
            >
              Get in touch
            </a>
          </div>
        </div>
        <nav className="flex gap-1 overflow-x-auto border-t border-line-soft px-5 py-2 md:hidden">
          {NAV.map(([n, label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`whitespace-nowrap rounded-full px-2.5 py-1 font-mono text-[10px] ${
                active === id ? "bg-panel text-primary" : "text-muted-foreground"
              }`}
            >
              {n} {label}
            </a>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-[1400px] px-5 lg:px-10">
        {/* 01 Overview */}
        <section id="overview" className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-primary" />
                Open to software &amp; AI engineering roles
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 font-display text-[clamp(2.9rem,7.5vw,6rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
                Jaswanth KS
              </h1>
              <p className="mt-3 font-display text-[clamp(1.5rem,3.4vw,2.6rem)] font-semibold leading-tight tracking-tight">
                <span className="text-aurora">Backend systems</span>
                <span className="text-muted-foreground"> × </span>
                <span className="text-aurora">applied AI</span>
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-[58ch] text-[15.5px] leading-relaxed text-muted-foreground">
                MSc Data Science and Artificial Intelligence graduate in London, building backend
                services, applied ML systems, and cloud-ready workflows. My strongest work sits
                between data science and software engineering — validating models, turning them into
                services, automating manual steps, and shipping systems that can be tested and
                improved.
              </p>
              <p className="mt-4 max-w-[58ch] text-[15.5px] leading-relaxed text-muted-foreground">
                Experience across backend APIs, AWS data workflows, CI/CD delivery, and monitoring;
                MSc work added depth through forecasting, character recognition, computer vision,
                probability simulation, and model evaluation.
              </p>
            </Reveal>

            <Reveal delay={240} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group rounded-full bg-[image:var(--gradient-aurora)] bg-[length:200%_auto] px-6 py-3 font-mono text-[12px] font-medium text-primary-foreground transition-[background-position,transform] duration-700 hover:-translate-y-0.5 hover:bg-right"
              >
                View projects →
              </a>
              <a
                href="#contact"
                className="rounded-full border border-line px-6 py-3 font-mono text-[12px] transition-colors hover:border-primary/60 hover:text-primary"
              >
                Email me
              </a>
              <span className="font-mono text-[11px] text-muted-foreground">
                London, United Kingdom
              </span>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:col-span-5">
            <div className="glass glow-ring rounded-2xl p-6">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span>System workflow</span>
                <span className="text-primary">Live</span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  ["04", "Featured projects"],
                  ["MSc", "Data Science & AI"],
                  ["+30%", "Query / access"],
                  ["−40%", "Deploy cycle"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-line-soft bg-panel p-4 transition-colors hover:border-primary/40"
                  >
                    <div className="font-display text-2xl font-semibold tracking-tight text-aurora">
                      {value}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                {WORKFLOW.map(([label, desc, width], i) => (
                  <div key={label}>
                    <div className="flex items-baseline justify-between font-mono text-[11px]">
                      <span>
                        <span className="text-primary">
                          {String(i + 1).padStart(2, "0")}
                        </span>{" "}
                        {label}
                      </span>
                      <span className="text-muted-foreground">{width}%</span>
                    </div>
                    <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-line-soft">
                      <span
                        className="animate-bar block h-full rounded-full bg-[image:var(--gradient-aurora)]"
                        style={{ width: `${width}%`, animationDelay: `${i * 140}ms` }}
                      />
                    </div>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Marquee */}
        <div className="relative -mx-5 overflow-hidden border-y border-line-soft py-4 lg:-mx-10">
          <div className="animate-marquee flex w-max gap-8 font-mono text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
            {[...MARQUEE, ...MARQUEE].map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-8">
                {item}
                <span className="h-1 w-1 rounded-full bg-primary/60" />
              </span>
            ))}
          </div>
        </div>

        {/* 02 Capabilities */}
        <section id="capabilities" className="py-20">
          <SectionHead
            index="02"
            label="Capabilities"
            title="What I can take ownership of."
            note="From core software systems to AI-powered features — built to be tested, deployed, and improved."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {CAPABILITIES.map((c, i) => (
              <Reveal
                key={c.id}
                delay={i * 90}
                as="article"
                className="group relative overflow-hidden rounded-2xl border border-line-soft bg-card/60 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40"
              >
                <div className="absolute inset-x-0 -top-px h-px scale-x-0 bg-[image:var(--gradient-aurora)] transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
                  <span className="text-primary">{c.id}</span>
                  <span className="text-muted-foreground">{c.tag}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{c.body}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {c.chips.map((chip) => (
                    <Chip key={chip}>{chip}</Chip>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 03 Skills */}
        <section id="skills" className="py-20">
          <SectionHead
            index="03"
            label="Skills"
            title="Stack, grouped by the work it supports."
          />
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 xl:grid-cols-4">
            {SKILLS.map((s, i) => (
              <Reveal key={s.group} delay={(i % 4) * 70}>
                <div className="flex items-center justify-between border-b border-line-soft pb-2">
                  <span className="font-display text-[15px] font-semibold tracking-tight">
                    {s.group}
                  </span>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-primary/80">
                    {s.tag}
                  </span>
                </div>
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 04 Certifications */}
        <section id="certs" className="py-20">
          <SectionHead
            index="04"
            label="Certifications"
            title="Verified proof of tooling and practice."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CERTS.map((c, i) => (
              <Reveal
                key={c.title}
                delay={(i % 4) * 70}
                className="group rounded-xl border border-line-soft bg-card/50 p-5 transition-all duration-400 hover:-translate-y-1 hover:border-accent/50"
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em]">
                  <span className="text-accent">{c.issuer}</span>
                  <span className="text-muted-foreground">{c.date}</span>
                </div>
                <div className="mt-3.5 font-display text-[15px] font-semibold leading-snug tracking-tight">
                  {c.title}
                </div>
                <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 05 Projects */}
        <section id="projects" className="py-20">
          <SectionHead
            index="05"
            label="Projects"
            title="Selected work samples."
            note="Four applied AI and software projects that live beyond a notebook."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <Reveal
                key={p.id}
                as="article"
                delay={(i % 2) * 100}
                className="group relative overflow-hidden rounded-2xl border border-line-soft bg-card/50 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.alt}
                    width={1024}
                    height={512}
                    loading="lazy"
                    className="aspect-[2/1] w-full object-cover transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em]">
                    <span className="rounded-full bg-background/70 px-2.5 py-1 text-primary backdrop-blur">
                      {p.id}
                    </span>
                    <span className="rounded-full bg-background/70 px-2.5 py-1 text-muted-foreground backdrop-blur">
                      {p.kind}
                    </span>
                  </div>
                </div>

                <div className="p-7 pt-2">
                  <h3 className="font-display text-[22px] font-semibold leading-tight tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                  <dl className="mt-5 space-y-2.5 border-t border-line-soft pt-4">
                    {p.notes.map(([k, v]) => (
                      <div key={k} className="grid grid-cols-[80px_1fr] gap-3">
                        <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                          {k}
                        </dt>
                        <dd className="text-[12.5px] leading-relaxed text-muted-foreground">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.chips.map((chip) => (
                      <Chip key={chip}>{chip}</Chip>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 06 Case Notes */}
        <section id="cases" className="py-20">
          <SectionHead index="06" label="Case Notes" title="How the work holds together." />
          <div className="mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
            <Reveal className="glass rounded-2xl p-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                MSc Project
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                Fortune Finder lottery simulation platform
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                Lottery users struggle to understand probability, long-term cost, and
                country-specific game differences without risking real money. Built a Flask
                application with authentication, five game formats, 100+ country/currency options,
                ticket-price modelling, and Plotly charts for draw-by-draw results and profit/loss
                trends.
              </p>
              <pre className="mt-6 overflow-x-auto rounded-xl border border-line-soft bg-[var(--ink)] p-4 font-mono text-[11px] leading-relaxed text-primary/90">{`{
  "project": "Fortune Finder",
  "purpose": "educational lottery simulation",
  "games": ["6-number","5-number","7-number","power","mega"],
  "regions": "100+ countries",
  "visuals": "Plotly profit/loss trends",
  "safety": "virtual currency + age verification"
}`}</pre>
            </Reveal>

            <Reveal delay={110} className="glass rounded-2xl p-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                MSc Project
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                NYSE stock forecasting web application
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                Kaggle NYSE data, feature engineering, ARIMA/SARIMA models, LSTM architectures,
                saved per-ticker models and scalers, Flask routes, SQLite auth, and Plotly charts for
                historical-vs-predicted analysis.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["Model comparison", "ARIMA / SARIMA / LSTM"],
                  ["Evaluation", "MAE + MSE + RMSE"],
                  ["Interface", "ticker + horizon + charts"],
                  ["Delivery", "Flask + Plotly + SQLite"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-line-soft bg-panel p-4">
                    <dt className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted-foreground">
                      {k}
                    </dt>
                    <dd className="mt-1.5 font-mono text-[11px] text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
              <ol className="mt-5 space-y-2">
                {[
                  ["01 Data", "Kaggle NYSE source, cleaned ticker windows."],
                  ["02 Train", "Statistical baselines plus LSTM sequence learning."],
                  ["03 Serve", "Flask routes connect auth, forms, and saved models."],
                  ["04 Review", "Plotly charts compare actual and predicted prices."],
                ].map(([k, v]) => (
                  <li key={k} className="grid grid-cols-[76px_1fr] gap-3">
                    <span className="font-mono text-[10px] text-primary">{k}</span>
                    <span className="text-[12.5px] leading-relaxed text-muted-foreground">{v}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={80} className="glass rounded-2xl p-7 lg:col-span-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Experience
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                AWS data platform and enrichment pipelines
              </h3>
              <p className="mt-3 max-w-[80ch] text-[13.5px] leading-relaxed text-muted-foreground">
                Structured business and financial datasets needed cleaner ingestion, enrichment,
                query access, and monitoring inside AWS-based data platforms. Built ingestion and
                enrichment pipelines, REST integrations, monitoring dashboards, CI/CD workflows, and
                Terraform-backed AWS provisioning.
              </p>
              <pre className="mt-6 overflow-x-auto rounded-xl border border-line-soft bg-[var(--ink)] p-4 font-mono text-[11px] leading-relaxed text-primary/90">{`{
  "system": "data_ingestion_platform",
  "cloud": "AWS + Terraform",
  "services": "Python + TypeScript APIs",
  "query_access": "+30%",
  "incident_detection": "+50%",
  "deployment_cycle": "-40%"
}`}</pre>
            </Reveal>
          </div>
        </section>

        {/* 07 Timeline */}
        <section id="timeline" className="py-20">
          <SectionHead index="07" label="Timeline" title="Experience and education." />
          <div className="mt-10 border-l border-line-soft pl-6 sm:pl-10">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.org} delay={i * 80} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-background bg-[image:var(--gradient-aurora)] sm:-left-[47px]" />
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                  {t.period}
                </div>
                <div className="mt-2 font-display text-[22px] font-semibold tracking-tight">
                  {t.org}
                </div>
                <div className="mt-1 font-mono text-[11.5px] text-muted-foreground">{t.role}</div>
                <p className="mt-3 max-w-[80ch] text-[13.5px] leading-relaxed text-muted-foreground">
                  {t.body}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {t.chips.map((chip) => (
                    <Chip key={chip}>{chip}</Chip>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 08 Contact */}
        <section id="contact" className="py-20">
          <div className="glass glow-ring relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  <span className="text-primary">08</span>
                  <span>Contact</span>
                </div>
                <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.05] tracking-tight">
                  I build useful systems,
                  <br />
                  <span className="text-aurora">not just impressive demos.</span>
                </h2>
                <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-muted-foreground">
                  An ML/AI engineer and software engineer who turns models, APIs, and cloud
                  workflows into practical products — clean engineering, useful automation, and
                  systems that are easier to trust, operate, and improve.
                </p>
              </Reveal>

              <Reveal delay={120} className="space-y-3 lg:col-span-5">
                {CONTACTS.map(([label, desc, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center justify-between rounded-xl border border-line-soft bg-panel px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
                  >
                    <span>
                      <span className="block font-display text-[15px] font-semibold tracking-tight">
                        {label}
                      </span>
                      <span className="font-mono text-[10.5px] text-muted-foreground">{desc}</span>
                    </span>
                    <span className="font-mono text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary">
                      →
                    </span>
                  </a>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-start justify-between gap-3 border-t border-line-soft py-8 sm:flex-row sm:items-center">
          <span className="font-mono text-[11px] text-muted-foreground">© 2026 Jaswanth KS</span>
          <span className="font-mono text-[11px] text-muted-foreground">
            Built in London · Backend &amp; Applied AI
          </span>
        </footer>
      </main>
    </div>
  );
}
