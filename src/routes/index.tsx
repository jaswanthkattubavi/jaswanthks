import { createFileRoute } from "@tanstack/react-router";

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
    id: "P-01 · Case Note",
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
    id: "P-02 · Case Note",
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
    period: "2023–2025",
    org: "University of Liverpool",
    role: "MSc Data Science and Artificial Intelligence · Merit",
    body: "Machine learning, information retrieval, applied AI engineering, databases, and data modelling. Applied projects across forecasting, probability simulation, character recognition, and computer vision.",
    chips: ["MSc", "Applied AI", "Python", "Model Evaluation"],
  },
  {
    period: "2021–2023",
    org: "Growz Software Solutions",
    role: "Software Engineer",
    body: "Backend services, data pipelines, cloud infrastructure, and ML-adjacent workflows. Improved data accessibility and query performance by 30% through AWS ingestion and enrichment pipelines, improved incident detection by 50% with ETL monitoring dashboards, and reduced deployment cycle time by 40% using Git, Jenkins, Terraform, and CI/CD.",
    chips: ["AWS", "Python", "TypeScript", "Terraform", "CI/CD"],
  },
  {
    period: "2020–2021",
    org: "TechBorn IT Solutions",
    role: "Software Engineer Intern",
    body: "Backend services and REST APIs for predictive modelling, dashboards, and reporting tools. Assisted classification model development and testing with TensorFlow and Keras, and built Pandas/NumPy preprocessing pipelines.",
    chips: ["REST APIs", "TensorFlow", "Keras", "Pandas"],
  },
  {
    period: "2018–2021",
    org: "Sri Venkateswara University",
    role: "Bachelor of Science · Distinction",
    body: "Graduated with Distinction in computer science, mathematics, and physics.",
    chips: ["BSc", "Distinction", "Computer Science", "Mathematics"],
  },
];

const WORKFLOW = [
  ["01 Validate", 100],
  ["02 Package", 82],
  ["03 Automate", 64],
  ["04 Operate", 48],
] as const;

function SectionHead({ index, label, note }: { index: string; label: string; note?: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
      <span className="text-accent">{index}</span>
      <span>{label}</span>
      <span className="h-px flex-1 bg-line-soft" />
      {note ? <span className="hidden sm:inline normal-case tracking-normal">{note}</span> : null}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 bg-panel text-foreground/80 border border-line-soft">{children}</span>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body antialiased selection:bg-accent/15">
      <header className="sticky top-0 z-50 border-b border-line-soft bg-background/90 backdrop-blur-sm">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="flex items-center gap-6 py-3.5">
            <div className="flex items-baseline gap-2.5 shrink-0">
              <span className="font-display font-semibold text-[19px] tracking-tight">
                Jaswanth KS
              </span>
              <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Candidate Workspace
              </span>
            </div>
            <nav className="flex-1 flex items-center gap-5 overflow-x-auto">
              {NAV.map(([n, label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="whitespace-nowrap font-mono text-[11px] tracking-wide text-muted hover:text-foreground transition-colors"
                >
                  <span>{n}</span>
                  <span className="ml-1.5">{label}</span>
                </a>
              ))}
            </nav>
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <a
                href="#contact"
                className="font-mono text-[11px] px-3 py-1.5 border border-line hover:border-foreground/40 transition-colors"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="font-mono text-[11px] px-3 py-1.5 bg-ink text-accent-foreground hover:bg-accent transition-colors"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* 01 Overview */}
        <section id="overview" className="pt-14 pb-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              <span className="text-accent">01</span>
              <span>Overview</span>
              <span className="h-px flex-1 bg-line-soft" />
              <span className="text-foreground">System · Live</span>
            </div>
            <h1 className="mt-6 font-display font-semibold text-[clamp(2.6rem,6vw,5rem)] leading-[1.02] tracking-tight text-balance animate-rise">
              Jaswanth KS
            </h1>
            <p className="mt-4 font-display italic text-[clamp(1.3rem,2.5vw,1.9rem)] leading-snug text-foreground/85 max-w-[40ch] text-pretty">
              Software Engineer — backend systems &amp; applied AI.
            </p>
            <p className="mt-6 text-[15px] leading-relaxed text-muted max-w-[58ch] text-pretty">
              MSc Data Science and Artificial Intelligence graduate building backend services,
              applied ML systems, and cloud-ready workflows. My strongest work sits between data
              science and software engineering — validating models, turning them into services,
              automating manual steps, and shipping systems that can be tested and improved.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted max-w-[58ch] text-pretty">
              Software engineering experience across backend APIs, AWS data workflows, CI/CD
              delivery, and monitoring; MSc work added applied AI depth through forecasting,
              character recognition, computer vision, probability simulation, and model evaluation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="font-mono text-[12px] px-4 py-2.5 bg-ink text-accent-foreground ring-1 ring-ink hover:bg-accent transition-colors"
              >
                Open Resume
              </a>
              <a
                href="#contact"
                className="font-mono text-[12px] px-4 py-2.5 border border-line hover:border-foreground/40 transition-colors"
              >
                Email Me
              </a>
              <span className="ml-2 font-mono text-[11px] text-muted">London, United Kingdom</span>
            </div>
          </div>

          <div className="lg:col-span-4 lg:border-l lg:border-line-soft lg:pl-8">
            <div className="grid grid-cols-2 gap-px bg-line-soft ring-1 ring-line-soft">
              {[
                ["04", "Featured projects", false],
                ["MSc", "Data Science & AI", false],
                ["+30%", "Query / access", true],
                ["−40%", "Deploy cycle", true],
              ].map(([value, label, isAccent]) => (
                <div key={label as string} className="bg-background p-5 animate-rise">
                  <div
                    className={`font-display font-semibold text-3xl tracking-tight ${
                      isAccent ? "text-accent" : ""
                    }`}
                  >
                    {value as string}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    {label as string}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2.5">
              {WORKFLOW.map(([label, width]) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-muted w-16 shrink-0">{label}</span>
                  <div className="h-1.5 flex-1 bg-line-soft overflow-hidden">
                    <span
                      className="block h-full bg-accent/70 animate-bar"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 font-mono text-[10px] leading-relaxed text-muted">
              Validate → package → automate → operate. Turning ML work into usable, testable
              software that works beyond a notebook.
            </p>
          </div>
        </section>

        {/* 02 Capabilities */}
        <section id="capabilities" className="py-12 border-t border-line-soft">
          <SectionHead index="02" label="Capabilities" note="What I can take ownership of" />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {CAPABILITIES.map((c) => (
              <div
                key={c.id}
                className="p-6 bg-background border border-line-soft ring-1 ring-black/5 hover:border-foreground/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-accent">{c.id}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    {c.tag}
                  </span>
                </div>
                <h3 className="mt-5 font-display font-semibold text-xl tracking-tight">{c.title}</h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-muted text-pretty">{c.body}</p>
                <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {c.chips.map((chip) => (
                    <Chip key={chip}>{chip}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 03 Skills */}
        <section id="skills" className="py-12 border-t border-line-soft">
          <SectionHead index="03" label="Skills" note="Stack grouped by the work it supports" />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-7">
            {SKILLS.map((s) => (
              <div key={s.group}>
                <div className="flex items-center justify-between border-b border-line-soft pb-2">
                  <span className="font-mono text-[11px] text-foreground">{s.group}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    {s.tag}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {s.items.map((i) => (
                    <Chip key={i}>{i}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04 Certifications */}
        <section id="certs" className="py-12 border-t border-line-soft">
          <SectionHead
            index="04"
            label="Certifications"
            note="Additional proof of tooling and practice"
          />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line-soft ring-1 ring-line-soft">
            {CERTS.map((c) => (
              <div key={c.title} className="bg-background p-5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  {c.issuer}
                </div>
                <div className="mt-3 font-display font-semibold text-[15px] leading-snug tracking-tight">
                  {c.title}
                </div>
                <div className="mt-2 font-mono text-[10px] leading-relaxed text-muted">{c.body}</div>
                <div className="mt-4 font-mono text-[10px] text-muted">{c.date}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 05 Projects */}
        <section id="projects" className="py-12 border-t border-line-soft">
          <SectionHead index="05" label="Projects" note="Selected work samples" />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {PROJECTS.map((p) => (
              <article
                key={p.id}
                className="border border-line-soft ring-1 ring-black/5 bg-background hover:border-foreground/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="p-5 border-b border-line-soft">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    {p.id}
                  </div>
                  <h3 className="mt-2 font-display font-semibold text-xl tracking-tight leading-tight">
                    {p.title}
                  </h3>
                </div>
                <img
                  src={p.image}
                  alt={p.alt}
                  width={1024}
                  height={512}
                  loading="lazy"
                  className="m-5 w-[calc(100%-2.5rem)] aspect-[2/1] object-cover bg-panel outline-1 -outline-offset-1 outline-black/5"
                />
                <div className="px-5 pb-5">
                  <p className="text-[13px] leading-relaxed text-muted text-pretty">{p.body}</p>
                  <dl className="mt-4 space-y-2">
                    {p.notes.map(([k, v]) => (
                      <div key={k} className="grid grid-cols-[70px_1fr] gap-3">
                        <dt className="font-mono text-[10px] uppercase tracking-widest text-foreground">
                          {k}
                        </dt>
                        <dd className="text-[12px] leading-relaxed text-muted">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {p.chips.map((chip) => (
                      <Chip key={chip}>{chip}</Chip>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 06 Case Notes */}
        <section id="cases" className="py-12 border-t border-line-soft">
          <SectionHead index="06" label="Case Notes" note="How the work holds together" />
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
            <div className="border border-line-soft ring-1 ring-black/5 bg-background p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                MSc Project
              </div>
              <h3 className="mt-2 font-display font-semibold text-2xl tracking-tight">
                Fortune Finder lottery simulation platform
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted text-pretty">
                Lottery users struggle to understand probability, long-term cost, and
                country-specific game differences without risking real money. Built a Flask
                application with authentication, five game formats, 100+ country/currency options,
                ticket-price modelling, and Plotly charts for draw-by-draw results and profit/loss
                trends.
              </p>
              <pre className="mt-5 bg-ink text-accent-foreground/90 p-4 overflow-x-auto font-mono text-[11px] leading-relaxed">{`{
  "project": "Fortune Finder",
  "purpose": "educational lottery simulation",
  "games": ["6-number","5-number","7-number","power","mega"],
  "regions": "100+ countries",
  "visuals": "Plotly profit/loss trends",
  "safety": "virtual currency + age verification"
}`}</pre>
            </div>

            <div className="border border-line-soft ring-1 ring-black/5 bg-background p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                MSc Project
              </div>
              <h3 className="mt-2 font-display font-semibold text-2xl tracking-tight">
                NYSE stock forecasting web application
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted text-pretty">
                Kaggle NYSE data, feature engineering, ARIMA/SARIMA models, LSTM architectures,
                saved per-ticker models and scalers, Flask routes, SQLite auth, and Plotly charts for
                historical-vs-predicted analysis.
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-px bg-line-soft ring-1 ring-line-soft">
                {[
                  ["Model comparison", "ARIMA / SARIMA / LSTM"],
                  ["Evaluation", "MAE + MSE + RMSE"],
                  ["Interface", "ticker + horizon + charts"],
                  ["Delivery", "Flask + Plotly + SQLite"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-background p-4">
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      {k}
                    </dt>
                    <dd className="mt-1.5 font-mono text-[11px] text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
              <ol className="mt-4 space-y-2">
                {[
                  ["01 Data", "Kaggle NYSE source, cleaned ticker windows."],
                  ["02 Train", "Statistical baselines plus LSTM sequence learning."],
                  ["03 Serve", "Flask routes connect auth, forms, and saved models."],
                  ["04 Review", "Plotly charts compare actual and predicted prices."],
                ].map(([k, v]) => (
                  <li key={k} className="grid grid-cols-[70px_1fr] gap-3">
                    <span className="font-mono text-[10px] text-accent">{k}</span>
                    <span className="text-[12px] leading-relaxed text-muted">{v}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border border-line-soft ring-1 ring-black/5 bg-background p-6 lg:col-span-2">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Experience
              </div>
              <h3 className="mt-2 font-display font-semibold text-2xl tracking-tight">
                AWS data platform and enrichment pipelines
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted max-w-[80ch] text-pretty">
                Structured business and financial datasets needed cleaner ingestion, enrichment,
                query access, and monitoring inside AWS-based data platforms. Built ingestion and
                enrichment pipelines, REST integrations, monitoring dashboards, CI/CD workflows, and
                Terraform-backed AWS provisioning.
              </p>
              <pre className="mt-5 bg-ink text-accent-foreground/90 p-4 overflow-x-auto font-mono text-[11px] leading-relaxed">{`{
  "system": "data_ingestion_platform",
  "cloud": "AWS + Terraform",
  "services": "Python + TypeScript APIs",
  "query_access": "+30%",
  "incident_detection": "+50%",
  "deployment_cycle": "-40%"
}`}</pre>
            </div>
          </div>
        </section>

        {/* 07 Timeline */}
        <section id="timeline" className="py-12 border-t border-line-soft">
          <SectionHead index="07" label="Timeline" note="Experience and education" />
          <div className="mt-6">
            {TIMELINE.map((t, i) => (
              <div
                key={t.org}
                className={`grid grid-cols-[110px_1fr] gap-6 py-6 ${
                  i < TIMELINE.length - 1 ? "border-b border-line-soft" : ""
                }`}
              >
                <div className="font-mono text-[12px] text-muted">{t.period}</div>
                <div>
                  <div className="font-display font-semibold text-xl tracking-tight">{t.org}</div>
                  <div className="font-mono text-[11px] text-accent mt-0.5">{t.role}</div>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted max-w-[80ch] text-pretty">
                    {t.body}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {t.chips.map((chip) => (
                      <Chip key={chip}>{chip}</Chip>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 08 Contact */}
        <section id="contact" className="py-14 border-t border-line-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                <span className="text-accent">08</span>
                <span>Contact</span>
              </div>
              <h2 className="mt-5 font-display font-semibold text-[clamp(2rem,4.5vw,3.5rem)] tracking-tight leading-[1.05] text-balance">
                I build useful systems,
                <br />
                not just impressive demos.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted max-w-[52ch] text-pretty">
                An ML/AI engineer and software engineer who turns models, APIs, and cloud workflows
                into practical products — clean engineering, useful automation, and systems that are
                easier to trust, operate, and improve.
              </p>
            </div>
            <div className="lg:col-span-4 lg:border-l lg:border-line-soft lg:pl-8 space-y-3">
              {[
                ["Email Me", "mailto:hello@example.com"],
                ["LinkedIn", "#"],
                ["GitHub", "#"],
                ["HackerRank", "#"],
                ["Resume", "#"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center justify-between border border-line-soft px-4 py-3 font-mono text-[12px] hover:border-foreground/40 transition-colors"
                >
                  <span>{label}</span>
                  <span className="text-muted">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-line-soft">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-6">
            <span className="font-mono text-[11px] text-muted">
              © 2026 Jaswanth KS · Candidate Workspace
            </span>
            <span className="font-mono text-[11px] text-muted">01 Overview → 08 Contact</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
