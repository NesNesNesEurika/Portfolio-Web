const caseStudies = {
  lunaria: {
    index: "CASE 01 / PRODUCT",
    kicker: "Live browser prototype",
    title: "Lunaria Dream Journal",
    summary: "A calm journaling experience for capturing dreams, revisiting patterns, and receiving an optional AI-assisted reflection.",
    challenge: "Dreams disappear quickly after waking, but many journaling tools ask for too much structure too early. The experience needed to make fast capture feel effortless while still supporting deeper reflection later.",
    solution: "The interface prioritises a low-pressure entry point, readable journal cards, lightweight categorisation, and a separate reflection layer. The visual direction uses soft contrast and spacious layouts to support a quiet routine.",
    flow: ["Open dashboard", "Create a dream entry", "Add details and tags", "Save to journal", "Read the reflection"],
    status: "Functional live prototype. Scope includes product concept, user flow, UI direction, responsive interface, and front-end implementation.",
    media: [
      { type: "image", src: "Functional (but some are broken) Website/Lunaria/Lunaria (1) (Cover) (Mockups).png", alt: "Lunaria cover mockup" },
      { type: "image", src: "Functional (but some are broken) Website/Lunaria/Lunaria (2) (Mockups).png", alt: "Lunaria journal interface mockup" },
      { type: "image", src: "Functional (but some are broken) Website/Lunaria/Lunaria (3) (Mockups).png", alt: "Lunaria reflection interface mockup" }
    ],
    links: [{ label: "View Live Website ↗", href: "https://nesnesneseurika.github.io/Lunaria-Dream-App/", primary: true }]
  },
  fitfinder: {
    index: "CASE 02 / PRODUCT",
    kicker: "Functional core prototype",
    title: "FitFinder",
    summary: "A size-guidance concept for people buying clothing gifts without ruining the surprise or asking for exact measurements.",
    challenge: "Gift buyers often guess clothing sizes from incomplete information. Asking directly can spoil a surprise, while conversations about body measurements may also feel uncomfortable or intrusive.",
    solution: "FitFinder reframes sizing around flexible height and body ranges, then connects those inputs to brand-aware guidance. The language avoids judgement and presents recommendations as adjustable references rather than absolute answers.",
    flow: ["Choose recipient", "Enter broad body ranges", "Select clothing or brand", "Review suggested sizes", "Save the shortlist"],
    status: "The core prototype is functional. The next iteration needs a larger brand and garment data set, clearer confidence indicators, and more content around fit preferences.",
    media: [
      { type: "image", src: "Functional (but some are broken) Website/Fit Finder/fit Finder (1) (Cover) (Mockups).png", alt: "FitFinder cover mockup" },
      { type: "image", src: "Functional (but some are broken) Website/Fit Finder/Fit Finder (2) (Mockups).png", alt: "FitFinder sizing screens" },
      { type: "image", src: "Functional (but some are broken) Website/Fit Finder/Fit Finder (3) (Mockups).png", alt: "FitFinder result screens" }
    ],
    links: [{ label: "View Live Website ↗", href: "https://nesnesneseurika.github.io/fitfinder/", primary: true }]
  },
  colorpicker: {
    index: "CASE 03 / CREATIVE TOOL",
    kicker: "Live interface prototype",
    title: "Clown Color Picker",
    summary: "A colourful utility that makes direct colour selection and palette exploration feel more playful and less technical.",
    challenge: "Colour tools can become crowded with controls, codes, and export options. For casual users, that complexity can interrupt experimentation before they find a palette they like.",
    solution: "The concept gives the chosen colour and generated combinations a stronger visual role, then groups technical values into clear secondary controls. Playful art direction gives the utility a distinct personality.",
    flow: ["Pick a colour", "Adjust its values", "Generate combinations", "Compare the palette", "Copy or save values"],
    status: "The colour and palette interface is available as a live prototype. Login, sign-up, and several advanced tools are not yet functional and are presented as future scope.",
    media: [
      { type: "image", src: "Functional (but some are broken) Website/Color Picker/color Picker (1) (Cover) (Mockups).png", alt: "Clown Color Picker cover" },
      { type: "image", src: "Functional (but some are broken) Website/Color Picker/color Picker (2) (Mockups).png", alt: "Clown Color Picker palette screen" },
      { type: "image", src: "Functional (but some are broken) Website/Color Picker/color Picker (3) (Mockups).png", alt: "Clown Color Picker interface screen" }
    ],
    links: [{ label: "View Live Prototype ↗", href: "https://nesnesneseurika.github.io/Clown-Color-picker/", primary: true }]
  },
  guestaeat: {
    index: "CASE 04 / HACKATHON",
    kicker: "Experimental recommendation prototype",
    title: "Guestaeat Café",
    summary: "A food-decision helper that converts mood, weather, and budget context into a quick meal suggestion.",
    challenge: "When users are tired or overwhelmed by options, browsing long restaurant and menu lists creates even more decision fatigue. The challenge was to turn subjective context into a lightweight choice flow.",
    solution: "The interface asks for only a few familiar inputs before presenting one prominent recommendation. This creates a more decisive experience than a conventional catalogue, while leaving room to try again or adjust preferences.",
    flow: ["Select mood", "Add weather context", "Set a budget", "Generate a suggestion", "Try again or explore"],
    status: "Hackathon-stage browser prototype. The visual flow is in place, but randomisation and mood-to-budget recommendation rules still need refinement before the concept can be treated as reliable.",
    media: [
      { type: "image", src: "Functional (but some are broken) Website/Guestaeat Cafe/Guestaeat Cafe (1)  (Cover) (Mockups).png", alt: "Guestaeat Café cover mockup" },
      { type: "image", src: "Functional (but some are broken) Website/Guestaeat Cafe/Guestaeat Cafe (2) (Mockups).png", alt: "Guestaeat Café input flow" },
      { type: "image", src: "Functional (but some are broken) Website/Guestaeat Cafe/Guestaeat Cafe (3) (Mockups).png", alt: "Guestaeat Café recommendation screen" }
    ],
    links: [{ label: "View Live Prototype ↗", href: "https://nesnesneseurika.github.io/guestaeat-cafe/", primary: true }]
  },
  bloom: {
    index: "CASE 05 / EXPERIMENTAL LAB",
    kicker: "Work in progress",
    title: "Sunflower Bloom Tracker",
    summary: "A warm focus dashboard that connects a Pomodoro timer with the visual idea of gradual personal growth.",
    challenge: "Productivity dashboards often become dense collections of metrics. The concept needed to keep the core focus action visible while making progress feel encouraging rather than demanding.",
    solution: "The working timer is placed at the centre of the experience, supported by warm botanical cues and simple progress modules. Additional tracking areas are intentionally treated as a future system rather than claimed as completed features.",
    flow: ["Set a focus session", "Start the timer", "Complete or pause", "Review the session", "Return to the dashboard"],
    status: "The Pomodoro timer is functional. Habit and progress modules remain visual concepts for a later build.",
    media: [{ type: "image", src: "Functional (but some are broken) Website/Bloom Tracker/Bloom Tracker (1) (Mockups).png", alt: "Sunflower Bloom Tracker dashboard" }],
    links: [{ label: "View Live Prototype ↗", href: "https://nesnesneseurika.github.io/Sunflower-bloom-tracker/", primary: true }]
  },
  lucigo: {
    index: "UI STUDY 01 / MOBILE",
    kicker: "Eight-screen booking flow",
    title: "LuciGo Experience Booking",
    summary: "A mobile journey for discovering, booking, and accessing local experiences from one continuous flow.",
    challenge: "Booking flows frequently lose context as users move between listings, dates, checkout, and confirmation. The study needed to preserve confidence and momentum across every step.",
    solution: "The interface keeps experience imagery and key booking details visible while progressively revealing date, guest, payment, confirmation, and ticket information.",
    flow: ["Welcome", "Explore", "View experience", "Pick date and guests", "Checkout", "Confirmation", "Digital ticket", "Profile"],
    status: "UI/UX concept with eight primary screens. Scope covers information hierarchy, interaction flow, visual direction, and key states.",
    media: [
      { type: "image", src: "Phone Ui/(Phone UI) LuciGo Mobile UX Flow/LuciGo (1) (Cover).png", alt: "LuciGo cover" },
      { type: "image", src: "Phone Ui/(Phone UI) LuciGo Mobile UX Flow/LuciGo (2).png", alt: "LuciGo booking screens" },
      { type: "image", src: "Phone Ui/(Phone UI) LuciGo Mobile UX Flow/LuciGo (3).png", alt: "LuciGo ticket and profile screens" }
    ],
    links: []
  },
  habit: {
    index: "UI STUDY 02 / MOBILE",
    kicker: "Behaviour-focused product concept",
    title: "Streak Habit Tracker",
    summary: "A habit tracker that gives recovery and re-entry the same design attention as streak completion.",
    challenge: "Streak systems can motivate consistency, but they can also make one missed day feel like total failure. The flow needed a more forgiving response to interruption.",
    solution: "Alongside daily check-ins and insights, the concept introduces a dedicated recovery state that guides users back into the habit without hiding the missed day or using punitive language.",
    flow: ["Review today", "Open a habit", "Check in", "View insights", "Recover after a miss", "Continue the routine"],
    status: "Eight-screen mobile UI concept covering home, habit details, insights, discovery, creation, check-in, recovery, and profile.",
    media: [
      { type: "image", src: "Phone Ui/(Phone Ui) Streak Habit Tracker/Phone UIUx.png", alt: "Streak Habit Tracker full UI flow" },
      { type: "image", src: "Phone Ui/(Phone Ui) Streak Habit Tracker/6, Check-in (HERO).png", alt: "Streak Habit Tracker check-in state" },
      { type: "image", src: "Phone Ui/(Phone Ui) Streak Habit Tracker/7, Recovery (HERO).png", alt: "Streak Habit Tracker recovery state" }
    ],
    links: []
  },
  casaluz: {
    index: "UI STUDY 03 / MOBILE",
    kicker: "Camera-first hotel concept",
    title: "Casa Luz",
    summary: "A visual hotel discovery concept designed for travellers who decide through atmosphere and imagery first.",
    challenge: "Hotel apps often bury their strongest visual evidence beneath filters, dense cards, and text-heavy detail pages.",
    solution: "Casa Luz promotes image capture and visual browsing as primary actions, while reservation details remain available through a lightweight supporting layer.",
    flow: ["Open camera view", "Capture or explore", "Identify a room or place", "Review details", "Continue to booking"],
    status: "Focused mobile interface study exploring a camera-led navigation model and visual hierarchy.",
    media: [
      { type: "image", src: "Phone Ui/(Phone UI) Camera Focused Hotel App/Camera Focused Hotel App (Mockup) (Cover).png", alt: "Casa Luz app mockup" },
      { type: "image", src: "Phone Ui/(Phone UI) Camera Focused Hotel App/Casa Luz, Camera Focused Hotel App.png", alt: "Casa Luz mobile interface" }
    ],
    links: []
  },
  webui: {
    index: "UI COLLECTION / WEB",
    kicker: "Four visual directions",
    title: "Web UI Collection Vol. 01",
    summary: "A set of web interface studies covering accessibility, testimonials, enterprise communication, and expressive product marketing.",
    challenge: "Each brief required a different level of density and brand energy, from calm settings panels to high-impact promotional pages.",
    solution: "The collection uses the same foundation—clear hierarchy, purposeful spacing, and responsive grouping—then changes typography, colour, and visual rhythm to match each context.",
    flow: ["Define content priority", "Build the page grid", "Design primary section", "Add responsive states", "Create presentation mockup"],
    status: "Static UI collection. Includes Accessibility Settings, Northfield Testimonials, Enerlov Enterprise Landing Page, and ROKOTO Neon Block Landing Page.",
    media: [
      { type: "image", src: "Web UI/01 - Accessibility Settings/accessibility Setting (Mockups).png", alt: "Accessibility settings web UI mockup" },
      { type: "image", src: "Web UI/02 - Daily Challenge Testimonials & Customer Stories/Northfield (Mockups).png", alt: "Northfield testimonials page mockup" },
      { type: "image", src: "Web UI/03 - Enerlov Enterprise Landing Page/Enerlov (2) (Mockups).png", alt: "Enerlov enterprise landing page mockup" },
      { type: "image", src: "Web UI/04 - ROKOTO Neon Block Landing Page/Rokoto (2) (Mockups).png", alt: "ROKOTO landing page mockup" }
    ],
    links: []
  },
  stepper: {
    index: "UI COLLECTION / MISCELLANEOUS",
    kicker: "Seven focused interface exercises",
    title: "UI/UX Design Challenge Vol. 1",
    summary: "A mixed collection of compact interface studies exploring familiar patterns, interaction states, and different visual directions.",
    challenge: "Short design exercises can easily become disconnected visual experiments. The challenge was to give each interface a clear purpose while keeping hierarchy, state changes, and primary actions understandable at a glance.",
    solution: "Each exercise begins with one focused interaction problem, then develops the essential states before adding visual styling. The collection uses consistent spacing and readable structure while allowing every study to keep its own personality.",
    flow: ["Read the brief", "Define the key states", "Sketch the interaction", "Build the interface", "Review the hierarchy", "Present the final study"],
    status: "Self-initiated UI/UX collection covering payment progress, avatar groups, time selection, navigation and search, sign-in, accessibility controls, and presence indicators.",
    media: [
      { type: "image", src: "Component Design/Inside (thumbnail)/Payment Flow (Cover).png", alt: "Payment flow UI study" },
      { type: "image", src: "Component Design/Inside (thumbnail)/3.png", alt: "UI/UX challenge study thumbnail 2" },
      { type: "image", src: "Component Design/Inside (thumbnail)/4.png", alt: "UI/UX challenge study thumbnail 3" },
      { type: "image", src: "Component Design/Inside (thumbnail)/5.png", alt: "UI/UX challenge study thumbnail 4" },
      { type: "image", src: "Component Design/Inside (thumbnail)/5 (2).png", alt: "UI/UX challenge study thumbnail 5" },
      { type: "image", src: "Component Design/Inside (thumbnail)/accessibility Setting (Mockups).png", alt: "Accessibility settings UI study" }
    ],
    links: [{ label: "View Full Project on Behance ↗", href: "https://www.behance.net/gallery/253652935/UIUX-Design-Challenge-Vol-1", primary: true }]
  },
  nori: {
    index: "BRAND CASE 01",
    kicker: "Self-initiated identity system",
    title: "Nori Matcha",
    summary: "A warm and minimal matcha brand designed to remain recognisable from a small social post to packaging and merchandise.",
    challenge: "The brand needed to feel contemporary and friendly without relying on the cold, clinical minimalism common in wellness products.",
    solution: "A soft natural palette, restrained typography, and flexible logo system create a calm foundation. Rounded packaging and playful applications add warmth across physical and digital touchpoints.",
    flow: ["Define positioning", "Build logo variations", "Set colour and type", "Apply to packaging", "Extend to social and web"],
    status: "Brand concept covering identity, packaging, merchandise, business cards, social posts and stories, motion studies, and landing-page screens.",
    media: [
      { type: "image", src: "Fun Brand Project/Nori Brand/Instant Matcha Latte social media/1.png", alt: "Nori instant matcha latte social media design" },
      { type: "image", src: "Fun Brand Project/Nori Brand/Nori Package Design - 1.png", alt: "Nori package design" },
      { type: "image", src: "Fun Brand Project/Nori Brand/Mockup Nori merch/1.png", alt: "Nori merchandise mockup" }
    ],
    links: [{ label: "View Full Project on Behance ↗", href: "https://www.behance.net/gallery/253838175/NORI-Matcha-Branding-Packaging-Social-Media-Design", primary: true }]
  },
  paradiseto: {
    index: "BRAND CASE 02",
    kicker: "Brand, social, and motion concept",
    title: "Paradiseto Chocolato",
    summary: "A decorative chocolate brand that balances indulgent visual cues with a playful, approachable campaign voice.",
    challenge: "Chocolate branding can quickly become either overly traditional or visually generic. The project needed a more memorable world without losing product appetite.",
    solution: "Expressive lettering, warm chocolate tones, and illustrated forms create a distinctive identity. Social and motion assets then repeat the same shapes and rhythm to build recognition.",
    flow: ["Define visual world", "Create identity assets", "Build the brand kit", "Design feed system", "Animate campaign elements"],
    status: "Self-initiated brand direction including identity assets, feed designs, and motion graphics.",
    media: [
      { type: "image", src: "Fun Brand Project/Paradiseto Chocolato/main Logo (Cover).png", alt: "Paradiseto Chocolato logo cover" },
      { type: "image", src: "Fun Brand Project/Paradiseto Chocolato/Paradisto CHocolato (Brand Kit).png", alt: "Paradiseto Chocolato brand kit" },
      { type: "image", src: "Fun Brand Project/Paradiseto Chocolato/Paradiseto Chocolato (Feeds)/4.png", alt: "Paradiseto Chocolato social design" },
      { type: "video", src: "Fun Brand Project/Paradiseto Chocolato/Finish Motion Graphic.mp4", alt: "Paradiseto Chocolato motion graphic" }
    ],
    links: [{ label: "View Full Project on Behance ↗", href: "https://www.behance.net/gallery/253840595/Paradise-Chocolate-Graphic-Design-Brand-Identity", primary: true }]
  },
  paloma: {
    index: "CAMPAIGN CASE 03",
    kicker: "Three-month design collaboration",
    title: "Paloma Grazia",
    summary: "A compact body of fashion campaign work spanning feeds, stories, carousels, promotional graphics, and casual short-form video edits.",
    challenge: "Frequent product and campaign updates required adaptable social assets that could be produced quickly while still feeling related as one brand presence.",
    solution: "The work used product-led compositions, repeatable text hierarchy, and flexible promotional layouts. Feed, story, carousel, and video formats were adapted without forcing every post into one rigid template.",
    flow: ["Receive product or campaign brief", "Select visual direction", "Design feed and story assets", "Adapt into carousel or video", "Prepare final exports"],
    status: "A three-month collaboration presented here as campaign design work rather than long-term employment. Deliverables include social graphics and simple video editing.",
    media: [
      { type: "image", src: "Paloma Grasia (Prettygirl Brand)/Feeds Instagram/1.png", alt: "Paloma Grazia feed design" },
      { type: "image", src: "Paloma Grasia (Prettygirl Brand)/Feeds Instagram/Carousel/Flora/1.png", alt: "Paloma Grazia carousel design" },
      { type: "image", src: "Paloma Grasia (Prettygirl Brand)/Story Instagram/A.png", alt: "Paloma Grazia story design" },
      { type: "image", src: "Paloma Grasia (Prettygirl Brand)/Story Instagram/M.png", alt: "Paloma Grazia promotional story" },
      { type: "video", src: "Paloma Grasia (Prettygirl Brand)/Video editing (Simple cassual)/1 (Okay).mp4", alt: "Paloma Grazia short video edit" }
    ],
    links: []
  }
};

const root = document.documentElement;
const body = document.body;
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeLabel = themeToggle?.querySelector(".theme-toggle-label");
const storedTheme = localStorage.getItem("portfolio-theme");
const systemPrefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;

function applyTheme(theme) {
  const isDark = theme === "dark";
  root.classList.toggle("dark", isDark);
  if (themeLabel) themeLabel.textContent = isDark ? "DARK" : "LIGHT";
  themeToggle?.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isDark ? "#141210" : "#f7f4ed");
}

applyTheme(storedTheme || (systemPrefersDark ? "dark" : "light"));

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem("portfolio-theme", nextTheme);
  applyTheme(nextTheme);
});

const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");

function closeMenu() {
  nav?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  body.classList.remove("menu-open");
}

menuToggle?.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  nav?.classList.toggle("is-open", !open);
  body.classList.toggle("menu-open", !open);
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("resize", () => {
  if (window.innerWidth > 1080) closeMenu();
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-project-card]");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    projectCards.forEach((card) => {
      const visible = filter === "all" || card.dataset.status === filter;
      card.classList.toggle("is-hidden", !visible);
    });
  });
});

function updateMiscellaneousCard() {
  const trigger = document.querySelector('[data-case-study="stepper"]');
  const card = trigger?.closest(".collection-card");
  if (!card) return;

  const cover = card.querySelector(".collection-media img");
  if (cover) {
    cover.src = "Component Design/Component - The Cover (1).png";
    cover.alt = "UI/UX Design Challenge Vol. 1 cover";
  }

  const label = card.querySelector(".micro-label");
  const title = card.querySelector("h3");
  const description = card.querySelector(".collection-body > p:not(.micro-label)");

  if (label) label.textContent = "UI/UX STUDIES / 7 EXERCISES";
  if (title) title.textContent = "UI/UX Design Challenge Vol. 1";
  if (description) description.textContent = "A mixed collection of focused interface exercises covering flows, states, accessibility, navigation, and reusable patterns.";
  trigger.setAttribute("aria-label", "Open UI/UX Design Challenge Vol. 1 case study");

  const style = document.createElement("style");
  style.textContent = `
    .collection-card:nth-child(5)::before { content: "Miscellaneous" !important; }
    .dialog-media.dialog-media-six {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
      align-items: start;
    }
    .dialog-media.dialog-media-six img {
      width: 100%;
      height: auto;
      max-height: none;
      object-fit: contain;
      background: var(--background);
    }
    @media (max-width: 720px) {
      .dialog-media.dialog-media-six { grid-template-columns: 1fr; }
    }
  `;
  document.head.appendChild(style);
}

updateMiscellaneousCard();

const dialog = document.querySelector("[data-case-dialog]");
const dialogClose = document.querySelector("[data-dialog-close]");
const fields = {
  index: document.querySelector("[data-dialog-index]"),
  kicker: document.querySelector("[data-dialog-kicker]"),
  title: document.querySelector("[data-dialog-title]"),
  summary: document.querySelector("[data-dialog-summary]"),
  challenge: document.querySelector("[data-dialog-challenge]"),
  solution: document.querySelector("[data-dialog-solution]"),
  flow: document.querySelector("[data-dialog-flow]"),
  status: document.querySelector("[data-dialog-status]"),
  media: document.querySelector("[data-dialog-media]"),
  actions: document.querySelector("[data-dialog-actions]")
};

function setText(element, value) {
  if (element) element.textContent = value || "";
}

function buildMedia(item) {
  if (item.type === "video") {
    const video = document.createElement("video");
    video.src = item.src;
    video.controls = true;
    video.preload = "metadata";
    video.setAttribute("aria-label", item.alt || "Project video");
    return video;
  }

  const image = document.createElement("img");
  image.src = item.src;
  image.alt = item.alt || "Project image";
  image.loading = "lazy";
  return image;
}

function openCaseStudy(id) {
  const project = caseStudies[id];
  if (!project || !dialog) return;

  setText(fields.index, project.index);
  setText(fields.kicker, project.kicker);
  setText(fields.title, project.title);
  setText(fields.summary, project.summary);
  setText(fields.challenge, project.challenge);
  setText(fields.solution, project.solution);
  setText(fields.status, project.status);

  fields.flow?.replaceChildren(...project.flow.map((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    return item;
  }));

  fields.media?.classList.toggle("dialog-media-six", id === "stepper");
  fields.media?.replaceChildren(...project.media.map(buildMedia));

  const actions = project.links.map((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
    anchor.className = `button button-small ${link.primary ? "button-primary" : "button-outline"}`;
    anchor.textContent = link.label;
    return anchor;
  });

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "button button-small button-outline";
  closeButton.textContent = "Close Case Study";
  closeButton.addEventListener("click", closeCaseStudy);
  actions.push(closeButton);
  fields.actions?.replaceChildren(...actions);

  body.classList.add("dialog-open");
  dialog.showModal();
  dialog.scrollTop = 0;
}

function closeCaseStudy() {
  if (!dialog?.open) return;
  dialog.querySelectorAll("video").forEach((video) => video.pause());
  dialog.close();
  body.classList.remove("dialog-open");
}

document.querySelectorAll("[data-case-study]").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.caseStudy;
    if ((id === "nori" || id === "paradiseto") && caseStudies[id].links[0]?.href) {
      window.open(caseStudies[id].links[0].href, "_blank", "noopener,noreferrer");
      return;
    }
    openCaseStudy(id);
  });
});

dialogClose?.addEventListener("click", closeCaseStudy);
dialog?.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) closeCaseStudy();
});
dialog?.addEventListener("close", () => body.classList.remove("dialog-open"));

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());