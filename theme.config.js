/* ============================================================
   theme.config.js — Rahaf Adnan Al-Zeer
   ScholarlyBrightMinds academic site configuration
   Last updated: April 2026
   ============================================================ */

const THEME = {

  /* ── IDENTITY ─────────────────────────────────────────────
     Controls: name, role line, photo, status chip, tagline   */
  identity: {
    name:    "Rahaf Adnan Al-Zeer",
    role:    "Pharmacist · Graduate Teaching Assistant · MSc Candidate",
    photo:   "images/profile.png",
    status:  "MSc Defence · July 2026",
    tagline: "Molecular pharmacology, drug repurposing & nanomedicine · Gulf Medical University",
  },

  /* ── PALETTE ───────────────────────────────────────────────
     Controls: all site colours in day and night mode.
     Tip: keep contrast ratio ≥ 4.5 : 1 for accessibility.   */
  palette: {
    day: {
      /* Page backgrounds */
      bg:           "#FFF5F7",      /* very soft blush — main page background     */
      surface:      "#FFEEF3",      /* cards, panels                               */
      surfaceAlt:   "#FFE0EC",      /* alternate row / hover state                 */

      /* Borders & rules */
      border:       "#F7C5D5",

      /* Text */
      text:         "#2D1520",      /* near-black with warm tint                   */
      textMuted:    "#7A4055",      /* secondary text, captions                    */

      /* Accent — the main brand colour */
      accent:       "#C2185B",      /* deep rose — links, buttons, badges          */
      accentLight:  "#F06292",      /* hover states, highlights                    */
      accentBg:     "#FCE4EC",      /* very pale pink — tag / chip backgrounds     */

      /* Nav & header */
      nav:          "#FCE4EC",
      navText:      "#880E4F",
    },
    night: {
      bg:           "#1B0A12",
      surface:      "#2A1020",
      surfaceAlt:   "#361526",

      border:       "#5C2038",

      text:         "#FFE4F0",
      textMuted:    "#CF94B0",

      accent:       "#F48FB1",
      accentLight:  "#F8BBD9",
      accentBg:     "#4A1030",

      nav:          "#2A1020",
      navText:      "#F48FB1",
    },
  },

  /* ── IDS ──────────────────────────────────────────────────
     Used to auto-build Scholar / Scopus / ORCID links.       */
  ids: {
    scholar: "uy-28F0AAAAJ",
    scopus:  "",                    /* add when you have the Scopus author ID      */
    orcid:   "0009-0004-1752-3171",
    email:   "rahaf@gmu.ac.ae",
  },

  /* ── SOCIAL ───────────────────────────────────────────────
     Icons shown in the header and footer.
     Remove any entry you don't want by deleting it.          */
  social: [
    { icon: "envelope",      label: "Email",          href: "mailto:rahaf@gmu.ac.ae" },
    { icon: "linkedin",      label: "LinkedIn",       href: "https://www.linkedin.com/in/rahaf-al-zeer-7093391ba" },
    { icon: "google-scholar",label: "Google Scholar", href: "https://scholar.google.com/citations?user=uy-28F0AAAAJ&hl=en" },
    { icon: "orcid",         label: "ORCID",          href: "https://orcid.org/0009-0004-1752-3171" },
  ],

  /* ── BIO ──────────────────────────────────────────────────
     The text block on the home page (plain text or light HTML). */
  bio: `I am a pharmacist and MSc candidate in Drug Discovery & Development at Gulf Medical University (CGPA 3.9 / 4.0), where I also serve as a Graduate Teaching Assistant. My thesis investigates the repurposing of Aprocitentan — an endothelin receptor antagonist — as a potential anticancer agent in pancreatic and breast cancer models.

My research sits at the interface of molecular pharmacology, targeted drug delivery, and cancer biology. I am technically proficient across the full research cycle: from cell culture, Western blotting and qPCR to nano-vesicle formulation, MTT/SRB cytotoxicity assays and LC-MS. I have co-authored six publications, two as first author, spanning nanomedicine, qualitative pharmacist research and Alzheimer's therapy reviews.

Outside the lab I lead the student mentorship programme at Gulf Medical University's Student Happiness Centre, pairing junior students with academic and professional mentors to support their development.

I am actively seeking PhD opportunities at the intersection of molecular pharmacology, advanced drug delivery systems, and translational cancer research.`,

  /* ── CHIPS ────────────────────────────────────────────────
     The small badge-style bubbles displayed under your name.
     Update manually whenever you want to refresh the counts. */
  chips: [
    { label: "6 Publications" },
    { label: "2 First-Authored" },
    { label: "MSc Candidate · GMU" },
    { label: "Ajman, UAE" },
    { label: "Open to PhD Positions" },
  ],

  /* ── LEDES ────────────────────────────────────────────────
     One-line descriptions at the top of each section page.   */
  ledes: {
    about:        "Pharmacist, educator, and researcher specialising in cancer pharmacology and nanomedicine.",
    projects:     "Active and completed research projects across drug repurposing, nanomedicine, and clinical pharmacy.",
    publications: "Six peer-reviewed works spanning molecular pharmacology, nanomedicine, and clinical research.",
    blog:         "Occasional reflections on science, research life, and pharmacy education.",
  },

  /* ── ABOUT ────────────────────────────────────────────────
     Paragraphs, timeline, pillar cards, and awards.          */
  about: {

    paragraphs: [
      `I completed my Bachelor of Pharmacy at Dubai Medical University (CGPA 3.71 / 4.0) before joining Gulf Medical University for my MSc in Drug Discovery & Development. My doctoral thesis focuses on repurposing Aprocitentan — a licensed endothelin receptor antagonist — as a candidate anticancer agent, evaluated in pancreatic and breast cancer cell models using in vitro pharmacological and molecular biology methods.`,

      `As a Graduate Teaching Assistant I deliver pharmacology lectures and structured practical sessions to undergraduate and diploma-level pharmacy students, with expert-level instruction in sterile compounding, cell culture, ELISA, Western blotting, qPCR and MTT assays. I also design assessments and provide individual student mentoring.`,

      `My wider research experience spans a part-time Research Assistant role at the University of Sharjah (nanomedicine and drug delivery) and a research training visit to Al-Zaytoonah University of Jordan (supervised by Dr. Mohammad Alwahsh), where I developed core molecular biology competencies that I continue to apply in my thesis work.`,
    ],

    timeline: [
      {
        year:  "2020 – 2024",
        title: "Bachelor of Pharmacy (B.Pharm)",
        place: "Dubai Medical University, Dubai, UAE",
        note:  "CGPA: 3.71 / 4.0 — Excellent",
      },
      {
        year:  "May 2024 – Jan 2025",
        title: "Research Assistant (Part-Time)",
        place: "University of Sharjah, UAE",
        note:  "Nanomedicine, drug delivery, and pharmacological screening projects",
      },
      {
        year:  "Aug 2024 – Present",
        title: "Graduate Teaching Assistant (Full-Time)",
        place: "Department of Pharmaceutical Sciences, Gulf Medical University",
        note:  "Pharmacology lectures, sterile compounding, and biomedical assays",
      },
      {
        year:  "Aug 2024 – Present",
        title: "Programme Leader, Mentorship Programme",
        place: "Student Happiness Centre, Gulf Medical University",
        note:  "University-wide student mentorship initiative",
      },
      {
        year:  "2024 – July 2026 (expected)",
        title: "MSc — Drug Discovery & Development",
        place: "Gulf Medical University, Ajman, UAE",
        note:  "CGPA: 3.9 / 4.0 — Excellent | Defence: July 2026",
      },
    ],

    pillars: [
      {
        icon:  "flask",
        title: "Molecular Pharmacology",
        desc:  "Receptor biology, endothelin signalling, drug–target interaction studies, in vitro cancer modelling.",
      },
      {
        icon:  "capsules",
        title: "Nanomedicine & Drug Delivery",
        desc:  "Nano-vesicle formulation, pro-bilosomes, zeta-sizer characterisation, bioavailability enhancement.",
      },
      {
        icon:  "sync-alt",
        title: "Drug Repurposing",
        desc:  "Repositioning licensed agents as anticancer candidates, with a focus on endothelin receptor antagonists.",
      },
      {
        icon:  "chalkboard-teacher",
        title: "Pharmacy Education",
        desc:  "Undergraduate and diploma teaching, assessment design, and student mentorship at Gulf Medical University.",
      },
    ],

    awards: [
      {
        icon:  "trophy",
        title: "1st Place — Oral Presentation (Public Health & Biomedical Sciences)",
        venue: "4th Al Ain University Postgraduate Symposium, Abu Dhabi · Feb 2026",
      },
      {
        icon:  "medal",
        title: "2nd Place — Best Poster Presentation",
        venue: "9th International Conference of Pharmacy and Medicine (ICPM 2024), Dubai · Feb 2024",
      },
    ],
  },

  /* ── PROJECTS ─────────────────────────────────────────────
     Your current and recently completed research projects.
     statusKind: "active" | "published" | "submitted" | "prep" */
  projects: [
    {
      n:          "01",
      title:      "Repurposing Aprocitentan as a Potential Anticancer Agent",
      desc:       "MSc thesis investigating Aprocitentan — an endothelin receptor antagonist — for anticancer activity in pancreatic and breast cancer models. Targets ET-A and ET-B receptors; assays include MTT, SRB, Western blotting, and qPCR.",
      tech:       ["Cell Culture", "MTT/SRB Assays", "Western Blotting", "qPCR", "Endothelin Receptor Biology"],
      status:     "In Progress · Defence July 2026",
      statusKind: "active",
      needs:      "Open to collaboration",
    },
    {
      n:          "02",
      title:      "Oral Delivery of Quercetin via Pro-Bilosomes",
      desc:       "Nano-vesicle formulation to enhance the oral bioavailability of quercetin. Contributions include research design, formulation, characterisation (zeta-sizer), data analysis, and manuscript write-up.",
      tech:       ["Nano-vesicle Formulation", "Zeta-Sizer", "Bioavailability", "Quercetin"],
      status:     "Submitted for Publication",
      statusKind: "submitted",
      needs:      "",
    },
    {
      n:          "03",
      title:      "Awareness and Views towards Aesthetic Treatment in the UAE",
      desc:       "First-authored cross-sectional study examining public awareness of aesthetic treatments in the UAE. Responsibilities: proposal, questionnaire design, data collection, statistical analysis, and full write-up.",
      tech:       ["Questionnaire Design", "SPSS", "Descriptive Statistics", "UAE Public Health"],
      status:     "Submitted for Publication",
      statusKind: "submitted",
      needs:      "",
    },
    {
      n:          "04",
      title:      "Pharmacist Barriers to Promoting Medication Disposal in the UAE",
      desc:       "Multi-centre study on pharmacist views and barriers to promoting the safe disposal of unwanted medications. Published in BMC Public Health (DOI: 10.1186/s12889-025-21332-3).",
      tech:       ["Survey Research", "Data Analysis", "Public Health Policy"],
      status:     "Published · BMC Public Health · 2025",
      statusKind: "published",
      needs:      "",
    },
    {
      n:          "05",
      title:      "Physicians' Perception towards Sacubitril/Valsartan: A Qualitative Study",
      desc:       "First-authored qualitative study using thematic analysis of semi-structured physician interviews on attitudes towards sacubitril/valsartan prescribing in heart failure. Manuscript in preparation.",
      tech:       ["Qualitative Research", "Thematic Analysis", "Cardiology", "Interview Design"],
      status:     "Manuscript in Preparation",
      statusKind: "prep",
      needs:      "",
    },
  ],

  /* ── BLOG ─────────────────────────────────────────────────
     List any blog posts here. Remove this block or leave
     it empty if you do not have a blog yet.                  */
  blog: [],

  /* ── FOOTER ───────────────────────────────────────────────  */
  footer: {
    year:   2026,
    credit: "Part of the ScholarlyBrightMinds academic network",
  },

};

/* Do not remove this line — the site loader requires it. */
export default THEME;
