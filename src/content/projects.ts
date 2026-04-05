export type ProjectDetailSection = {
  title: string;
  body: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

/** Path under `public/`, e.g. `/projects/demo.mp4` */
export type ProjectDemoVideo = {
  src: string;
  /** Optional poster frame (`/projects/...` image) */
  poster?: string;
  caption?: string;
};

export type ProjectDetail = {
  /** Detail page H1 if different from the card title */
  pageTitle?: string;
  oneLine: string;
  /** Optional; omitted when redundant with the sections below */
  role?: string;
  sections: ProjectDetailSection[];
  techStack: string[];
  outcomes: string[];
  resumeLine?: string;
  /** External links (e.g. GitHub) */
  links?: ProjectLink[];
  /** Screen recording or walkthrough (MP4 in `public/`) */
  demoVideo?: ProjectDemoVideo;
  /** Add files under `public/…` then list paths, e.g. `{ src: "/projects/fuelcheck/map.png", alt: "…" }` */
  gallery?: { src: string; alt: string }[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  /** Timeline shown on cards and detail, e.g. "Aug 2023 - Sep 2023" or "2024" */
  period?: string;
  /** Path under `public/`, e.g. `/projects/cover.png` */
  coverImage?: string;
  /** Rich case study layout on `/projects/[slug]` */
  detail?: ProjectDetail;
};

export type ProjectGroup = {
  /** Stable id for keys / anchors if needed later */
  id: string;
  /** Section subtitle on the home page */
  label: string;
  projects: Project[];
};

export const projectGroups: ProjectGroup[] = [
  {
    id: "personal",
    label: "Personal",
    projects: [
      {
        slug: "rosters-web-app",
        title: "Rosters: Full-Stack Roster & Scheduling Platform",
        category: "Web Development / Full-stack",
        period: "Mar 2025 - Ongoing",
        description:
          "Django REST + React workforce rostering: JWT, company-scoped shifts and assignments, clock-in/out, swap and availability APIs, audit log, posts feed, OpenAPI at /api/docs/.",
        detail: {
          pageTitle: "Rosters: Employee roster & scheduling (RosterProject)",
          oneLine:
            "Full-stack employee roster and scheduling platform with a Django REST API and React client: multi-company users, JWT auth, role-based access, shifts and assignments, clock-in/out, and supporting modules for internal communication and scheduling workflows.",
          role:
            "Primary backend ownership: evolved the core domain from SQL into Django models and migrations; JWT + refresh (rotation/blacklist-aware settings), registration paths for company, manager, and individual join; shift CRUD, assignments, clock-in/out with work-hour tracking; RBAC and company-scoped querysets for managers vs admins; permission hardening around shifts and assignments; drf-spectacular OpenAPI and conventional commits. Integrated key React flows (login, roster/shift views) against the JWT-protected API.",
          sections: [
            {
              title: "Project overview",
              body:
                "RosterProject is a workforce rostering system for companies to manage shifts, assignments, and time-on-shift, with company-scoped data and Admin, Manager, and Staff roles. The backend uses Django 4.2 and Django REST Framework with JWT (access + refresh) and PostgreSQL; APIs are documented with OpenAPI via drf-spectacular. A React 18 SPA (Tailwind, Axios, React Router) consumes the API for the user-facing experience.",
            },
            {
              title: "Contribution & delivery",
              body:
                "Merged work on the backend core included translating an initial SQL schema into Django models and migrations; email/password login and JWT with refresh; distinct registration flows for company, manager, and individual users; shift CRUD and user-to-shift assignments; clock-in and clock-out with work hours on assignments; profile and password updates with role-specific rules; debugging shift permissions and Assigned/company scoping. Documented endpoints with drf-spectacular and maintained conventional commits. One feature branch landed roughly ~1,881 lines across 49 files (11 commits)-adjust if your public history differs.",
            },
            {
              title: "Features in the codebase",
              body:
                "Identity & access: custom User (email as username) with roles, company membership, contract type, and optional OAuth fields; DRF JWTAuthentication. Scheduling & time: shifts tied to companies with Admin/Manager create/list rules and manager company isolation; assignments linking users and shifts; shift swap requests with expiry and respondability tied to shift start and assignment status; unavailability and availability endpoints for staff and admin-side management. Governance & surface: append-only audit log (generic relation) for actions such as shift creation with optional IP/metadata; posts/feed with categories (e.g. announcements, handovers), company-scoped posts, nested comments, likes, attachments, and keyword indexing; notifications and holidays apps extend workforce coverage. Developer experience: Swagger UI at /api/docs/ and schema at /api/schema/; CORS for the React dev origin.",
            },
            {
              title: "Technical highlights",
              body:
                "Multi-tenant-style access: managers see only their company’s shifts while admins see globally, as enforced in shift listing and permissions. Custom JWT claims aligned with a non-default user primary key (USER_ID_FIELD / USER_ID_CLAIM with user_id). Structured documentation using @extend_schema on views. Domain modeling for scheduling edges: assignment status including swap-related states, swap workflow, and an audit trail for sensitive operations.",
            },
            {
              title: "Roadmap & extensions",
              body:
                "Planned or in-progress directions from project notes include automated schedule generation, email verification, richer notifications, timesheets, an admin dashboard, and deeper real-time behavior-foundations such as posts, notification models, swaps, and availability already exist in the repository.",
            },
          ],
          techStack: [
            "Python",
            "Django 4.2",
            "Django REST Framework 3.14",
            "SimpleJWT",
            "PostgreSQL",
            "psycopg2",
            "drf-spectacular",
            "django-cors-headers",
            "React 18",
            "React Router 7",
            "Tailwind CSS 3",
            "Axios",
            "python-decouple",
            "Pillow",
          ],
          outcomes: [
            "Reduced ambiguity for frontend and QA with a documented REST API and consistent JWT access and refresh flows.",
            "Kept roster data isolated per company through role- and company-aware querysets and permissions.",
            "Established a clear domain model (users, companies, shifts, assignments) extensible to swaps, availability, and internal comms.",
          ],
          resumeLine:
            "RosterProject: Built the backend for a multi-company roster system (Django REST, PostgreSQL)-JWT with refresh, distinct registration flows, RBAC for admins/managers/staff, shifts and assignments with clock-in/out, company-scoped manager access, swap and availability APIs, audit log and posts module, and OpenAPI docs; integrated React client flows against the API.",
          gallery: [],
        },
      },
      {
        slug: "invoice-manager",
        title: "Invoice Manager: Intelligent Invoice & Inventory System",
        category: "Web Development / Backend",
        period: "Jul 2024 - Oct 2024",
        coverImage: "/projects/invoicemanager.png",
        description:
          "Spring Boot 3.3 + Java 17 REST service for supermarket-style invoice and inventory ops: JPA/MySQL, OpenAI vision/text extraction, sales analytics, OpenAPI, GitHub Actions deploy to EC2.",
        detail: {
          pageTitle: "Invoice Manager: Backend API",
          oneLine:
            "Backend for an invoice- and inventory-oriented operations app (supermarket / retail-style workflows): REST APIs for invoices, products, sales analytics, and AI-assisted capture, JPA persistence on MySQL, OpenAPI/Swagger docs, and CI/CD to AWS EC2.",
          role:
            "Backend-focused delivery: JPA domain design, OpenAI multimodal extraction and Spring AI chat, transactional invoice ingestion, stock/discount and analytics endpoints, schema alignment for AI output, and automated build/deploy pipelines.",
          links: [
            {
              label: "GitHub · Backend",
              href: "https://github.com/gyubee/InvoiceManager_Backend",
            },
          ],
          sections: [
            {
              title: "Overview",
              body:
                "The service exposes REST APIs for invoices, products, sales analytics, and AI-assisted data capture, persists data with Spring Data JPA, and documents endpoints with OpenAPI/Swagger. Built with Spring Boot 3.3 and Java 17, backed by MySQL, integrating OpenAI via Spring AI and direct REST for vision extraction. GitHub Actions builds on merge to develop and deploys to EC2 using rsync/SSH and systemctl.",
            },
            {
              title: "Domain model & persistence",
              body:
                "Designed and evolved JPA entities and relationships for Company, Product, Invoice, and InvoiceItem (and related tables) for normalized storage and transactional invoice ingestion.",
            },
            {
              title: "OpenAI integration",
              body:
                "Added chat via Spring AI (OpenAiChatModel) and invoice extraction from images: multipart upload with Base64 payloads to the OpenAI Chat Completions API, plus an endpoint that accepts an image URL and uses multimodal messages (GPT-4o family). Parsed JSON is cleaned, for example stripping markdown fences, for downstream use.",
            },
            {
              title: "Invoice pipeline",
              body:
                "Implemented transactional saveInvoiceData: resolve or create Company by name/email, create Invoice with parsed dates and totals, match or create Product (including HS code handling), and persist line items, with in-code documentation of explicit business rules.",
            },
            {
              title: "Stock, discounts & analytics",
              body:
                "REST-style product APIs: list/sort by stock, availability queries, stock updates; discount flows tied to expiry (per-item and global rules on a Discount model), Swagger-documented. Analysis module with JPQL and DTO projections: category × product × monthly sales, company spend by month (YYYY-MM), and per-product monthly sales for dashboards.",
            },
            {
              title: "Quality, API docs & deployment",
              body:
                "Aligned AI extraction schema with persistence keys end-to-end (for example hscode vs hs_code) so multimodal output and the database stay consistent. SpringDoc OpenAPI 3 for discoverability. Gradle builds and GitHub Actions for repeatable deploys to EC2.",
            },
          ],
          techStack: [
            "Java 17",
            "Spring Boot 3.3",
            "Spring Data JPA",
            "Hibernate",
            "MySQL",
            "Spring AI",
            "OpenAI API",
            "REST",
            "Multipart / file handling",
            "JPQL",
            "DTO projections",
            "SpringDoc OpenAPI 3",
            "Gradle",
            "GitHub Actions",
            "AWS EC2",
          ],
          outcomes: [
            "Transactional pipeline from OpenAI-structured JSON to Company, Invoice, Product, and line items on MySQL.",
            "REST surface for catalog, stock, expiry-driven discounts, and JPQL-backed sales analytics for reporting.",
            "Documented HTTP API and automated build-on-merge deploy to EC2 (rsync/SSH, systemctl).",
          ],
          resumeLine:
            "Built a Spring Boot invoice and inventory backend with MySQL/JPA, OpenAI-powered document extraction, sales and category analytics APIs, stock/discount management, OpenAPI docs, and CI/CD deploy to AWS EC2.",
          gallery: [],
        },
      },
      {
        slug: "andcrowd-platform",
        title: "&Crowd: Social + Crowdfunding Platform",
        category: "Web Development / Full-stack",
        period: "Aug 2023 - Sep 2023",
        description:
          "Small-group “And” plus crowdfunding “Crowd”: discover peers, run projects together, and raise funds-Spring Boot 3 + React, JWT/OAuth2, WebSocket chat, hybrid JPA/MyBatis.",
        coverImage: "/projects/andcrowd_funding.png",
        detail: {
          pageTitle: "&Crowd (AndCrowd): Groups, funding, and chat",
          oneLine:
            "A full-stack platform that pairs interest-based small-group activities (“And”) with crowdfunding (“Crowd”): discover peers, co-run projects, chat in real time, and launch campaigns with rewards, orders, and admin metrics-in one product, split across Spring Boot and React codebases.",
          role:
            "Backend & frontend across And / Crowd features. Primary contributor on And backend, with substantial Crowd, chat, and CLOVA chatbot work on both stacks.",
          links: [
            {
              label: "GitHub · Frontend",
              href: "https://github.com/kmaengggong/AndCrowd-Frontend",
            },
            {
              label: "GitHub · Backend",
              href: "https://github.com/kmaengggong/AndCrowd-Backend",
            },
          ],
          sections: [
            {
              title: "Overview",
              body:
                "Users create and join interest-based groups, manage roles and applications, collaborate in live chat, and run or link crowdfunding campaigns with rewards, orders, and admin-facing analytics. The system is documented and shipped as separate Spring Boot and React repositories with REST APIs, Swagger/OpenAPI, and GitHub flow with reviewed PRs.",
            },
            {
              title: "Product: And, Crowd, and engagement",
              body:
                "And (groups): CRUD, categories, search, infinite scroll, views/likes/follows, Q&A and boards with paging, role and application flows (titles, attachments, approval → membership), soft-delete-aware queries (e.g. findAllNotDeleted), and organizer tooling. Crowd (funding): campaigns with optional group linkage, categories, filters/sort/paging, reward CRUD with sales and admin totals, popular-content APIs, and follow on detail pages. Social & ops: chat rooms after approval, chat profiles, handling for invalid chat URLs, Naver CLOVA chatbot (help / 1:1-style setup), admin funding APIs, plus fixes for image/thumbnail uploads, deadline date types, and CORS where needed.",
            },
            {
              title: "Architecture & technical highlights",
              body:
                "Hybrid persistence: JPA for core entities plus MyBatis for dynamic per-group tables (e.g. and_qna_{id}, and_role_{id}, crowd_reward_{id}) with DTO/repository/service layers and parameterized table names in mappers. Consistent soft-delete patterns and APIs that exclude deleted rows by default. Real-time WebSocket/STOMP chat aligned with membership lifecycle (e.g. room creation after approval). Security: JWT after OAuth2 (Google/Naver) with role-aware UI and server checks.",
            },
            {
              title: "My contributions (themes)",
              body:
                "And domain: End-to-end backend emphasis-entities/CRUD, Querydsl infinite scroll, dynamic MyBatis modules (QnA, replies, roles, applicants), soft delete, DTO/mapper refactors, search/paging, organizer flows, approve → member, chat room creation on approval. Crowd domain: listing/detail polish, category/filter/sort/paging, funding-group linkage and popular APIs, reward analytics (per-reward sales and totals), admin funding APIs with matching management UIs, follow and raised-amount display on lists. Chat & support: real-time group chat on both stacks, chat UX and invalid-route handling, CLOVA wiring and help entry points. Cross-cutting: auth-aware screens, permission-gated actions, upload and deadline fixes, API hygiene (e.g. non-deleted reward lists), CORS-related adjustments from integration work.",
            },
            {
              title: "Team & evidence",
              body:
                "Consolidated delivery on GitHub: 40+ merged backend PRs and 30+ merged frontend PRs (Aug-Sep 2023). Representative themes for reviewers: dynamic And tables, funding admin APIs, chatbot integration, and infinite-scroll discovery-traceable in repo history.",
            },
          ],
          techStack: [
            "Java 17",
            "Spring Boot 3",
            "Spring Security",
            "JWT",
            "OAuth2 (Google / Naver)",
            "Spring Data JPA",
            "MyBatis",
            "Querydsl",
            "WebSocket / STOMP",
            "MySQL 8",
            "S3-compatible storage",
            "MinIO",
            "SMTP",
            "Jasypt",
            "React",
            "JavaScript",
            "Material UI",
            "REST",
            "OpenAPI / Swagger",
            "GitHub",
          ],
          outcomes: [
            "End-to-end And and Crowd flows with hybrid JPA/MyBatis and dynamic per-project tables.",
            "Soft-delete discipline, OAuth/JWT security, and WebSocket chat tied to approval/membership lifecycle.",
            "High-velocity reviewed delivery: 40+ backend and 30+ frontend merged PRs in Aug-Sep 2023.",
            "Dual public repos with OpenAPI-documented APIs and demo-friendly UX (funding, groups, chat, chatbot).",
          ],
          resumeLine:
            "&Crowd - Full-stack social + crowdfunding app (Spring Boot, React, MySQL, JWT/OAuth2, WebSocket chat, MyBatis over dynamic per-project tables). Shipped major And (group) and Crowd (funding) features end to end: discovery and search, Q&A/board, roles and applications with approval flows, admin metrics for rewards, CLOVA chatbot integration, and chat/membership lifecycle-across 40+ merged backend PRs and 30+ merged frontend PRs (Aug-Sep 2023).",
          demoVideo: {
            src: "/projects/andcrowd_demo.mp4",
            caption:
              "Screen recording",
          },
          gallery: [
            {
              src: "/projects/andcrowd_main.png",
              alt: "AndCrowd main landing view",
            },
            {
              src: "/projects/andcrowd_funding.png",
              alt: "Funding or campaign experience",
            },
            {
              src: "/projects/andcrowd_and.png",
              alt: "Community (And) detail page",
            },
            {
              src: "/projects/andcrowd_mypage.png",
              alt: "User profile / my page",
            },
            {
              src: "/projects/andcrowd_groupchat.png",
              alt: "Group chat channel",
            },
            {
              src: "/projects/andcrowd_chatbot.png",
              alt: "Naver CLOVA chatbot help entry",
            },
            {
              src: "/projects/andcrowd_admin.png",
              alt: "admin user",
            },
          ],
        },
      },
    ],
  },
  {
    id: "uni",
    label: "Uni",
    projects: [
      {
        slug: "ai-marketing-analytics",
        title: "Capstone: AI-Focused Marketing Analytics Engine",
        coverImage: "/projects/capstone_main.png",
        category: "Software Engineering / Data Science",
        period: "Aug 2025 - Nov 2025",
        description: "A modular Python-based analytical system designed to evaluate brand visibility, sentiment, and discoverability within AI-generated responses across platforms like ChatGPT, Gemini, and Perplexity.",
        detail: {
          pageTitle: "AI-Focused Marketing Analytics Engine: Bridging the SEO-AI Visibility Gap",
          oneLine: "An end-to-end analytics pipeline that collects AI-generated brand mentions, performs transformer-based sentiment analysis, and audits website structures for 'AI discoverability'.",
          role: "Collaborative developer focused on the modular integration of data ingestion via Bright Data, implementation of analytical pipelines (Visibility, Sentiment, Competitor Analysis), and the creation of interactive reporting dashboards.",
          sections: [
            {
              title: "Project Context",
              body: "Developed as a University of Sydney Capstone project, this tool addresses the 'visibility gap' created by the shift from traditional search engines to conversational AI. The project moved from a proposed web app to a high-performance CLI and desktop toolkit to prioritize reproducible, deterministic research for marketing stakeholders."
            },
            {
              title: "AI Visibility & Sentiment Analysis",
              body: "The core engine orchestrates parallel scraping of five major AI platforms (ChatGPT, Gemini, Perplexity, Bing Copilot, and Grok) using Bright Data. It identifies brand mention rates, average ranking positions in AI lists, and sentiment polarity using the RoBERTa-Large transformer model. This allows brands to see not just if they are mentioned, but how they are positioned against competitors in AI-mediated commerce."
            },
            {
              title: "Prompt Engineering & Pathway Toolkit",
              body: "A dedicated 'Visibility by Prompts' module explores brand presence through structured 'customer journey' pathways (Awareness → Consideration → Purchase) and feature-based testing. It features both an 'Auto-generated mode', which uses LLMs to derive prompts from a brand's URL, and a 'User-defined mode' for custom CSV-based experimentation."
            },
            {
              title: "Web Audit & Structural Discovery",
              body: "To help businesses optimize for AI crawlers, the system includes a Web Audit tool that compares raw HTML to Markdown representations, calculating token counts and embedding-based similarity scores. A Web Graph tool maps internal hyperlink structures to identify 'orphan pages' and evaluate a site's overall topology from an AI's perspective."
            },
            {
              title: "Technical Highlights",
              body: "Architecture: Modular Python framework using ThreadPoolExecutor for concurrent API orchestration. Security: Local execution with secure credential management via .env files and macOS Keychain. UI/UX: A CustomTkinter desktop interface provides real-time logs via background threading, ensuring the UI remains responsive during long-running scraping tasks."
            },
            {
              title: "Challenges & Learnings",
              body: "Navigated the inherent randomness of probabilistic LLM outputs by implementing deterministic safeguards, such as template-based prompts and standardized parsing rules. Managed third-party API dependencies (Bright Data) by building robust retry mechanisms and validation layers to handle inconsistent response times and data structures."
            }
          ],
          techStack: [
            "Python 3.12",
            "CustomTkinter",
            "Bright Data API",
            "Hugging Face (RoBERTa)",
            "PyTorch",
            "Sentence-Transformers",
            "Playwright / Crawl4AI",
            "Plotly",
            "Jinja2",
            "Pandas / NumPy",
            "Scikit-learn",
            "BeautifulSoup4"
          ],
          outcomes: [
            "Delivered a fully functional prototype capable of multi-model, multi-region AI scraping and automated GEO (Generative Engine Optimization) reporting.",
            "Established a framework for 'AI Discoverability' metrics, including mention frequency, ranking position, and sentiment proportions.",
            "Integrated a multi-stage prompt generation toolkit that automates the transition from generic to brand-specific query analysis.",
            "Received strong client praise for the ability to transform complex, unstructured LLM data into actionable, visual marketing narratives."
          ],
          resumeLine: "AI-Focused Marketing Analytics Engine: Developed a Python-based GEO toolkit for multi-platform AI scraping (ChatGPT, Gemini, etc.) and sentiment analysis; built Web Audit/Graph tools for AI discoverability and interactive Plotly-based HTML reporting (Aug-Nov 2025).",
          gallery: [
            {
              src: "/projects/capstone_main.png",
              alt: "Desktop sampler: customer brand analysis pipeline setup and run log",
            },
            {
              src: "/projects/capstone_frequency.png",
              alt: "Brand mention frequency and positioning analysis visualizations",
            },
            {
              src: "/projects/capstone_promptanalysis.png",
              alt: "Prompt-level analysis and pathway breakdown",
            },
            {
              src: "/projects/capstone_webaudit.png",
              alt: "LLM readability and content loss web audit report",
            },
          ],
        },
      },
      {
        slug: "old-phone-deals",
        coverImage: "/projects/oldphonedeals_main.png",
        title: "OldPhoneDeals: Full-Stack E-Commerce Web Application",
        category: "Web Development / Full-stack",
        period: "Mar 2025 - May 2025",
        description:
          "Team-built three-tier marketplace for second-hand phones: customer storefront with JWT auth and checkout, separate admin console, REST API on MongoDB (Express, Mongoose, Swagger).",
        detail: {
          pageTitle: "OldPhoneDeals: Full-stack e-commerce web application",
          oneLine:
            "Team-built three-tier marketplace for second-hand phones with a customer storefront, authentication and checkout, and a separate admin console backed by a REST API on MongoDB.",
          role:
            "Led implementation of the admin REST API and authentication/authorization layer; built the main customer-facing React views for discovery, search, product detail, and cart-oriented flows, integrating them with async API calls.",
          sections: [
            {
              title: "Project context",
              body:
                "Developed in a small group as a university project to deliver a fully functioning e-commerce application: server-side querying, asynchronous client-server communication, password hashing, email verification flows, and a clear separation between the public site and admin tools.",
            },
            {
              title: "Customer experience",
              body:
                "Home highlights low-stock and top-rated listings using server-driven aggregates. Search and discovery support title search plus brand and max-price filters, with pagination and sorting on listing views. Product detail includes reviews (paginated chunks, expandable text, visibility rules for authors and sellers), wishlist, cart quantity, and authenticated actions. Checkout covers cart review, quantity updates, totals, and order completion with server-side inventory updates. Auth includes sign-up with email verification, login, password reset via email, and JWT-backed session-style access on the client. Profile offers a multi-tab account area ofile edits, password change, seller listings, comment visibility) per the course specification.",
            },
            {
              title: "Admin experience",
              body:
                "Dedicated /admin experience with login separate from customers. Admin auth uses JWT with expiry, logout and token invalidation, bcrypt-stored credentials, and optional profile/password endpoints. User management lists users with last-login metadata, search, edit, disable/delete, and drill-down into listings and reviews. Listing management exposes the full catalog including disabled items, with search, edit, enable/disable, delete, and seller and review context. Review moderation provides a global review list (including hidden entries), search, and toggling visibility with admin override. Operations include sales and order logs with filters (status, dates, search), order notifications for admins, export of sales data (CSV or JSON), and audit logging of admin actions.",
            },
            {
              title: "Technical highlights",
              body:
                "Security: separated customer JWT vs admin JWT flows, bcrypt password storage, token blacklist on admin logout, and middleware that validates tokens and ties sensitive actions to authenticated admins. RESTful admin API: modular routes for users, listings, reviews, sales, orders, dashboard summaries, and audit logs, with pagination, sorting, filtering, and populated MongoDB documents for readable responses. Observability: admin audit-log model and endpoints for traceability; export flows record audit events where implemented. UI: customer and admin shells use Axios and non-blocking requests; product and search screens compose data from multiple endpoints (for example search plus filter intersection) where needed. Documentation: OpenAPI/Swagger for API discoverability and handoff to teammates or graders.",
            },
            {
              title: "Challenges & learnings",
              body:
                "Balanced course requirements (SPA-style behavior, admin-only hidden fields, moderation rules) with a clean split between storefront and admin. Practiced defensive API design-validation, auth middleware, and consistent error responses-so the application remains maintainable beyond seed JSON datasets.",
            },
          ],
          techStack: [
            "React",
            "React Router",
            "Axios",
            "Tailwind CSS",
            "Material UI",
            "Node.js",
            "Express",
            "Mongoose",
            "MongoDB",
            "JWT",
            "bcrypt",
            "Nodemailer",
            "Multer",
            "OpenAPI / Swagger",
          ],
          outcomes: [
            "Shipped a working three-tier app: MongoDB-backed Express API, React customer app, and separate AdminApp with protected routes and dashboard-style pages.",
            "Dual JWT and bcrypt flows for customers vs admins, with blacklist-aware admin logout and middleware-gated sensitive operations.",
            "Rich admin surface (users, listings, reviews, orders/sales, exports, audit logs) plus documented HTTP contracts via Swagger.",
            "Async, API-driven UIs from discovery through checkout and moderation, aligned with university e-commerce requirements.",
          ],
          resumeLine:
            "OldPhoneDeals: Led admin REST API and auth (Express, Mongoose, JWT, bcrypt, audit logging and sales export); built core customer React flows-home, search, product detail, cart/checkout-and email verification and reset flows, on a team MongoDB e-commerce project (Mar-May 2025).",
          gallery: [
            {
              src: "/projects/oldphonedeals_main.png",
              alt: "Home: Sold Out Soon and Best Sellers carousels",
            },
            {
              src: "/projects/oldphonedeals_search.png",
              alt: "Search results with max price slider and brand filter",
            },
            {
              src: "/projects/oldphonedeals_detail.png",
              alt: "Product detail: specs, add to cart, reviews",
            },
            {
              src: "/projects/oldphonedeals_login.png",
              alt: "Customer login",
            },
            {
              src: "/projects/oldphonedeals_register.png",
              alt: "Registration with email and password",
            },
          ],
        },
      },
      {
        slug: "fuelcheck-nsw",
        coverImage: "/projects/fuelcheck.png",
        title: "FuelCheck: Real-time Data Pipeline & MQTT Streaming",
        category: "Data Engineering",
        period: "Apr 2025 - May 2025",
        description:
          "End-to-end pipeline: OAuth-authenticated NSW FuelCheck API ingestion, pandas cleaning, timestamped CSV exports, and JSON over MQTT for a Streamlit + Folium live map.",
        detail: {
          pageTitle:
            "FuelCheck NSW: Real-time fuel price pipeline & MQTT streaming",
          oneLine:
            "End-to-end pipeline: OAuth-authenticated NSW FuelCheck API ingestion → pandas integration and cleaning → timestamped CSV → JSON over MQTT for a Streamlit + Folium live map.",
          role:
            "Data integration & cleaning · MQTT data publishing, as part of a university assignment team project.",
          sections: [
            {
              title: "Data integration & storage",
              body:
                "Merged live fuel price records with station metadata using a left join on string-normalized station codes so every price row stays in the dataset. Produced a single table with brand, address, fuel type, price, coordinates, last update time, and AdBlue availability. Exported UTF-8 CSV snapshots with timestamps in the filename for traceability.",
            },
            {
              title: "Data cleaning & quality",
              body:
                "Standardized column names (for example station name and latitude/longitude), stripped whitespace, uppercased key text fields, and enforced types (numeric price, datetime last updated). Dropped incomplete rows on critical fields, deduplicated by station and fuel type keeping the latest update, removed non-positive and implausible prices using percentile-based bounds informed by plots (avoiding overly aggressive IQR-only cuts), and checked coordinates against NSW bounds during exploration.",
            },
            {
              title: "MQTT publishing",
              body:
                "Published JSON messages to a shared topic on a public broker using paho-mqtt (Callback API v2), 0.1 s between publishes, and return-code checks with logging on failure without halting the batch. Payload included station identifiers, brand, name, address, fuel type, price, coordinates, AdBlue flag, and formatted timestamp, aligned with the subscriber and dashboard contract. Stabilized delivery by moving to a broker that worked reliably with the v2 client after project troubleshooting.",
            },
          ],
          techStack: [
            "Python",
            "pandas",
            "requests",
            "OAuth 2.0 (client credentials)",
            "NSW OneGov FuelCheck API",
            "JSON",
            "CSV",
            "MQTT (paho-mqtt)",
            "Streamlit",
            "Folium",
          ],
          outcomes: [
            "Single source of truth per cycle: cleaned, merged fuel data ready for storage and streaming.",
            "Reproducible artifacts: timestamped CSV exports.",
            "Decoupled architecture: MQTT lets the UI consume near-real-time updates without tight coupling to the API client.",
          ],
          resumeLine:
            "FuelCheck (NSW): Integrated and cleaned live API fuel and station data (joins, typing, dedup, geo and price QA, CSV exports); implemented MQTT JSON publishing with throttled delivery and the v2 client for a real-time map dashboard.",
          gallery: [],
        },
      },
    ],
  },
];

/** Flat list for lookups and static generation */
export const projects = projectGroups.flatMap((g) => g.projects);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
