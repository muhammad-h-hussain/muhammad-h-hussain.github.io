/*
  SITE CONTENT
  ============
  This is the only file you need to edit to change the words on the site.

  Rules of thumb:
  - Keep each piece of text inside its quotation marks.
  - Anything in [square brackets] is a placeholder. It shows up highlighted
    on the site until you replace it, so nothing slips through.
  - British English, UK dates (dd/mm/yyyy), and no em dashes or double hyphens.
  - Save the file, refresh the page, and your change is live locally.
*/

window.SITE_CONTENT = {
  meta: {
    title: "Muhammad Hussain | Regulatory change and project delivery",
    description:
      "Change Advisor at the MHRA with a background in medicines licensing, process improvement and automation. Seeking PMO and project management roles in Dubai and the Gulf.",
    lastUpdated: "21/10/2026"
  },

  person: {
    name: "Muhammad Hussain",
    email: "[EMAIL ADDRESS]",
    linkedin: "[LINKEDIN URL]",
    location: "[LOCATION, e.g. London, UK]",
    availability: "[AVAILABILITY, e.g. notice period and relocation timeline]",
    // Optional: link to a PDF of your CV (e.g. "cv.pdf" saved in this folder). Leave empty to hide the button.
    cvUrl: ""
  },

  hero: {
    eyebrow: "Regulatory · Process improvement · Project delivery",
    statement:
      "I help regulated organisations deliver change that works: from post-Brexit medicines licensing to automation, reporting and better processes.",
    sub: "Change Advisor at the MHRA, the UK's medicines regulator. Open to PMO and project management roles in Dubai and the wider Gulf, ideally in healthcare, pharma or regulatory.",
    glance: [
      { label: "Now", value: "Change Advisor (HEO), MHRA" },
      { label: "Focus", value: "Regulatory, process, delivery" },
      { label: "Certified", value: "Lean Six Sigma Green Belt" },
      { label: "Next", value: "PMP candidate, exam Dec 2026" },
      { label: "Open to", value: "Dubai and the wider Gulf" }
    ]
  },

  about: {
    heading: "About",
    paragraphs: [
      "I work in the Continuous Improvement team at the MHRA, the UK's Medicines and Healthcare products Regulatory Agency. My job is to help colleagues improve how work gets done: tightening processes, automating routine tasks, writing clear procedures and reporting on what is really happening.",
      "I joined the MHRA in 2021 as a classifier granting medicines licences, at a time when the UK was rebuilding its regulatory processes after leaving the EU. That experience taught me how much careful coordination sits behind regulatory change, and how much good process design matters when deadlines are fixed in law.",
      "Before the MHRA I worked in the NHS and the Ministry of Justice. I also founded and ran my own contracting company, providing gateline and security services to Govia (Southern/Thameslink), which gave me an early lesson in owning delivery end to end.",
      "I am now looking to bring that mix of regulatory knowledge, process discipline and delivery experience to PMO and project management roles in Dubai and the wider Gulf, where healthcare and life sciences are a growing priority. [OPTIONAL: one personal line on why the Gulf, e.g. family, long term plans or timing.]"
    ]
  },

  whatIDo: {
    heading: "What I do",
    intro: "Three angles, one aim: change that lands properly and stays landed.",
    items: [
      {
        title: "Regulatory",
        lead: "Medicines licensing and post-Brexit regulatory transition.",
        points: [
          "Granted medicines licences as a classifier at the UK regulator",
          "Worked on licence conversions and changes needed after the UK left the EU",
          "Comfortable with fixed legal deadlines, audit trails and accuracy at volume"
        ]
      },
      {
        title: "Process and technology",
        lead: "Process improvement, automation, data and SOPs.",
        points: [
          "Lean Six Sigma Green Belt, applied to real reporting and error reduction",
          "RPA analysis and reporting with Blue Prism",
          "Data analysis, reporting templates and SOP development"
        ]
      },
      {
        title: "Project delivery",
        lead: "Coordinating change across teams and stakeholders.",
        points: [
          "Coordinating migrations and rollouts across multiple teams",
          "Keeping stakeholders informed, aligned and moving",
          "PMP candidate, exam scheduled for December 2026"
        ]
      }
    ]
  },

  projects: {
    heading: "Projects",
    intro: "A selection of work, described at a public, professional level. Use the filters to focus on one area.",
    // Categories used for the filter buttons. Each project's "category" must match one of these.
    categories: ["Regulatory", "Process and technology", "Project delivery"],
    items: [
      {
        title: "Brexit transition team",
        category: "Regulatory",
        problem:
          "When the UK left the EU, a large number of medicines licences needed changes so they would remain valid under the new UK framework, against deadlines set in legislation.",
        did:
          "Worked within the Brexit transition team to process licence changes, checking each one carefully and coordinating with colleagues across teams to keep work moving.",
        result:
          "[NUMBER] licence changes processed. [OUTCOME, e.g. completed within the transition deadline]."
      },
      {
        title: "CAP grandfathering",
        category: "Regulatory",
        problem:
          "Centrally authorised products (CAPs), previously licensed through the EU centralised procedure, needed converting into UK licences so they could continue to be supplied in the UK.",
        did:
          "Processed conversions of centrally authorised products into UK licences, checking product information against requirements and recording outcomes accurately.",
        result:
          "[NUMBER] products converted into UK licences. [OUTCOME, e.g. continuity of supply maintained]."
      },
      {
        title: "PDN licence conversions",
        category: "Regulatory",
        problem:
          "After Brexit, licences held under PDN arrangements needed converting into the correct UK licence format.",
        did:
          "Processed PDN licence conversions, verifying the details of each licence and making sure records were accurate and complete.",
        result:
          "[NUMBER] PDN licences converted. [OUTCOME]."
      },
      {
        title: "QPPV address conversions",
        category: "Regulatory",
        problem:
          "Following Brexit legislation, licences needed their QPPV (Qualified Person Responsible for Pharmacovigilance) details moving to UK addresses.",
        did:
          "Updated licence records to UK addresses in line with the new legislation, working through the caseload methodically and flagging exceptions.",
        result:
          "[NUMBER] licences updated. [OUTCOME, e.g. compliant ahead of the legislative deadline]."
      },
      {
        title: "Blue Prism robot performance analysis",
        category: "Process and technology",
        problem:
          "Automated processes running on Blue Prism needed clear performance reporting, so the team could see what the robots were delivering and where they needed attention.",
        did:
          "Analysed robot performance data and built reporting that summarised throughput, exceptions and trends, then shared findings and recommendations with stakeholders.",
        result:
          "[X hours] of manual effort saved per [PERIOD]. [X%] of exceptions traced to [CAUSE]. [OUTCOME]."
      },
      {
        title: "Classifier retimings mastersheet and findings report",
        category: "Process and technology",
        problem:
          "The mastersheet used to record classifier task timings had become hard to maintain, which made the data harder to trust for planning.",
        did:
          "Rebuilt the mastersheet with a clearer structure, analysed the retiming data and wrote a findings report with recommendations.",
        result:
          "[OUTCOME, e.g. timings now used for resource planning]. [X%] [IMPROVEMENT, e.g. reduction in time spent maintaining the sheet]."
      },
      {
        title: "Monthly error reporting template",
        category: "Process and technology",
        problem:
          "Delivery managers did not have a consistent monthly view of errors, which made recurring issues hard to spot and act on.",
        did:
          "Designed a standard monthly error reporting template using Lean Six Sigma thinking: clear error categories, consistent measurement and a focus on root causes.",
        result:
          "Used by [NUMBER] delivery managers. [X% reduction] in [ERROR TYPE] over [PERIOD]."
      },
      {
        title: "SOP and policy work",
        category: "Process and technology",
        problem:
          "Training checklists and SOP reviews relied too heavily on individual practice, so procedures risked becoming inconsistent or out of date.",
        did:
          "Wrote a best practice procedure for training checklists, and designed an SOP review reminder and escalation process so documents are reviewed on time.",
        result:
          "[NUMBER] SOPs covered by the review process. [OUTCOME, e.g. X% reviewed by their due date]."
      },
      {
        title: "SharePoint classic to modern migration",
        category: "Project delivery",
        problem:
          "Team sites on classic SharePoint needed migrating to modern SharePoint without disrupting day to day work.",
        did:
          "Coordinated the migration across site owners and teams: tracking progress, communicating timelines and resolving issues as they came up.",
        result:
          "[NUMBER] sites migrated across [NUMBER] teams. [OUTCOME, e.g. completed by the target date]."
      }
    ]
  },

  experience: {
    heading: "Experience",
    items: [
      {
        role: "Change Advisor (HEO)",
        org: "MHRA, Continuous Improvement team, Data Assurance and Quality",
        dates: "Feb 2023 to present",
        summary:
          "Process improvement, automation reporting, SOP development and change coordination across teams."
      },
      {
        role: "DAQ Classifier",
        org: "MHRA",
        dates: "Apr 2021 to Feb 2023",
        summary: "Granted medicines licences, including post-Brexit licence conversions and changes."
      },
      {
        role: "Earlier career",
        org: "NHS and Ministry of Justice",
        dates: "",
        summary: "Public sector roles before joining the MHRA."
      },
      {
        role: "Founder and owner",
        org: "Contracting company (one person)",
        dates: "2016 to 2017",
        summary: "Provided gateline and security services to Govia (Southern/Thameslink)."
      },
      {
        role: "BSc (Hons) Biomedical Science",
        org: "Brunel University London",
        dates: "2013 to 2017",
        summary: ""
      }
    ]
  },

  skills: {
    heading: "Skills and tools",
    groups: [
      {
        title: "Regulatory",
        items: ["Medicines licensing", "Post-Brexit regulatory transition", "Licence conversions and changes", "QPPV record updates"]
      },
      {
        title: "Process improvement",
        items: ["Lean Six Sigma (Green Belt)", "Root cause analysis", "SOP and policy development", "Error and quality reporting"]
      },
      {
        title: "Technology and data",
        items: ["Blue Prism (RPA)", "Data analysis and reporting", "SharePoint (classic to modern)", "[OTHER TOOLS, e.g. Excel, Power BI, Visio]"]
      },
      {
        title: "Delivery",
        items: ["Stakeholder coordination", "Cross-team change", "Migration planning and tracking", "Project management (PMP candidate)"]
      }
    ]
  },

  certifications: {
    heading: "Certifications",
    items: [
      {
        name: "Lean Six Sigma Green Belt",
        issuer: "AIGPE",
        detail: "Passed 07/10/2026",
        status: "Certified"
      },
      {
        name: "Project Management Professional (PMP)",
        issuer: "PMI",
        detail: "PMP candidate, exam Dec 2026",
        status: "In progress"
      },
      {
        name: "BSc (Hons) Biomedical Science",
        issuer: "Brunel University London",
        detail: "2013 to 2017",
        status: "Degree"
      }
    ]
  },

  contact: {
    heading: "Get in touch",
    intro:
      "I am open to PMO, project and change roles in Dubai and the wider Gulf, particularly in healthcare, pharma and regulatory organisations. The quickest way to reach me is by email or LinkedIn."
  }
};
