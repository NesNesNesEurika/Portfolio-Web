(() => {
  const PALOMA_BASE = "Paloma Grasia (Prettygirl Brand)";
  const PALOMA_BEHANCE = "https://www.behance.net/gallery/253659707/Pretty-Girl-Social-Media-Campaign-(Paloma-Grazia)";
  const ROKOTO_BEHANCE = "https://www.behance.net/gallery/253814007/ROKOTO-Hot-Sauce-Landing-Page";
  const ENTERPRISE_BEHANCE = "https://www.behance.net/gallery/253836267/Enterprise-Website-Design-Collection";
  const LUCIGO_BEHANCE = "https://www.behance.net/gallery/253652773/LuciGo-Saint-Lucia-Travel-App";
  const HABIT_BEHANCE = "https://www.behance.net/gallery/253836701/Habit-Tracker-App-(Daily-Challenge)";

  const PALOMA_MEDIA = [
    { type: "image", src: `${PALOMA_BASE}/Thumbnail/1080X1080/6.png`, alt: "Paloma Grazia square social media design 1" },
    { type: "image", src: `${PALOMA_BASE}/Thumbnail/1080X1080/B.png`, alt: "Paloma Grazia square social media design 2" },
    { type: "image", src: `${PALOMA_BASE}/Thumbnail/1080X1080/Konten Pg Feeds September  (16).png`, alt: "Paloma Grazia square social media design 3" },
    { type: "image", src: `${PALOMA_BASE}/Thumbnail/1080x1920/A.png`, alt: "Paloma Grazia Instagram story design 1" },
    { type: "image", src: `${PALOMA_BASE}/Thumbnail/1080x1920/D.png`, alt: "Paloma Grazia Instagram story design 2" },
    { type: "video", src: `${PALOMA_BASE}/Thumbnail/1080x1920/1 (Okay).mp4`, alt: "Paloma Grazia vertical short-form video" }
  ];

  const WEBSITE_CASE_STUDIES = {
    enterprise: {
      index: "UI COLLECTION / WEBSITE",
      kicker: "Three structured interface studies",
      title: "Enterprise Website Design Collection",
      summary: "A collection of web interface studies exploring accessibility controls, customer stories, and an enterprise landing page.",
      challenge: "The three briefs contain very different kinds of information. Accessibility settings need instantly recognisable states, testimonials need believable social proof, and an enterprise landing page needs to explain a complex service without becoming visually overwhelming.",
      solution: "Each study uses a clear content hierarchy and a layout suited to its purpose. Controls are grouped around readable states, customer stories use structured cards and supporting context, and the Enerlov page breaks technical information into focused sections with consistent navigation and calls to action.",
      flow: [
        "Review the design brief",
        "Define content priority",
        "Establish the page grid",
        "Design the key sections",
        "Check responsive hierarchy",
        "Prepare the final mockups"
      ],
      status: "Self-initiated web UI collection covering Accessibility Settings, Northfield Testimonials and Customer Stories, and the Enerlov Enterprise Landing Page. The scope focuses on information hierarchy, visual direction, responsive composition, and presentation mockups.",
      media: [
        { type: "image", src: "Web UI/03 - Enerlov Enterprise Landing Page/Enerlov (2) (Mockups).png", alt: "Enerlov enterprise landing page interface study" }
      ],
      link: ENTERPRISE_BEHANCE,
      linkLabel: "View Full Collection on Behance ↗"
    },
    rokoto: {
      index: "UI STUDY / WEBSITE",
      kicker: "Expressive product landing page",
      title: "ROKOTO! Hot Sauce Landing Page",
      summary: "A bold hot-sauce landing page that combines energetic art direction with a clear product journey.",
      challenge: "The visual identity needed to feel loud, playful, and memorable without making the product information difficult to follow. The page still had to guide users from the first brand impression toward flavour choices, product details, and purchase-focused actions.",
      solution: "The layout uses oversized typography, neon colour blocks, product imagery, and strong section changes to create energy. Information is introduced in a controlled sequence, allowing each flavour, product message, and call to action to remain readable despite the expressive visual style.",
      flow: [
        "Define the product attitude",
        "Build the hero message",
        "Introduce flavour variants",
        "Organise product details",
        "Add purchase-focused actions",
        "Create the final mockups"
      ],
      status: "Self-initiated landing-page concept for a fictional hot-sauce product. The scope includes visual direction, content hierarchy, product storytelling, e-commerce calls to action, desktop UI, and presentation mockups.",
      media: [
        { type: "image", src: "Web UI/04 - ROKOTO Neon Block Landing Page/Rokoto (1) (Mockups).png", alt: "ROKOTO hot sauce landing page cover mockup" },
        { type: "image", src: "Web UI/04 - ROKOTO Neon Block Landing Page/Rokoto (2) (Mockups).png", alt: "ROKOTO hot sauce landing page interface mockup" }
      ],
      link: ROKOTO_BEHANCE,
      linkLabel: "View Full Project on Behance ↗"
    }
  };

  const addStyles = () => {
    if (document.getElementById("portfolio-gallery-enhancements")) return;

    const style = document.createElement("style");
    style.id = "portfolio-gallery-enhancements";
    style.textContent = `
      .social-grid.social-grid-six {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-auto-flow: row;
      }

      .social-grid-six .social-tile,
      .social-grid-six .social-tile-tall,
      .social-grid-six .social-tile-wide {
        grid-column: auto;
        grid-row: auto;
      }

      .social-grid-six .social-tile img,
      .social-grid-six .social-tile-tall img,
      .social-grid-six .social-tile-wide img {
        width: 100%;
        height: auto;
        aspect-ratio: 1;
        object-fit: cover;
      }

      .social-gallery-actions { margin-top: 2rem; }
      .paloma-main-cover { min-height: 0; }

      .paloma-main-cover img {
        width: 100%;
        height: auto;
        min-height: 0;
        object-fit: contain;
      }

      .paloma-card-actions { margin-top: 1.5rem; }

      .dialog-media.dialog-media-paloma {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
        align-items: start;
      }

      .dialog-media-paloma img,
      .dialog-media-paloma video {
        width: 100%;
        height: auto;
        min-height: 0 !important;
        max-height: none;
        background: var(--muted);
      }

      .dialog-media-paloma > :nth-child(-n + 3) {
        aspect-ratio: 1;
        object-fit: cover;
      }

      .dialog-media-paloma > :nth-child(n + 4) {
        aspect-ratio: 9 / 16;
        object-fit: contain;
      }

      .dialog-media.dialog-media-website {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        align-items: start;
      }

      .dialog-media-website img {
        width: 100%;
        height: auto;
        min-height: 0 !important;
        max-height: none;
        object-fit: contain;
        background: var(--muted);
      }

      .project-tags .desktop-only-tag {
        background: var(--foreground);
        color: var(--background);
      }

      .collection-card:nth-child(4) {
        grid-column: 2;
        grid-row: 1;
      }

      .collection-card:nth-child(5) {
        grid-column: 2;
        grid-row: 2;
      }

      .collection-card:nth-child(6) {
        grid-column: 3;
        grid-row: 1;
      }

      .collection-card:nth-child(5)::before {
        content: none !important;
        display: none !important;
      }

      .collection-card:nth-child(6)::before {
        content: "Miscellaneous" !important;
        display: block !important;
        position: absolute;
        left: 0;
        top: -3.45rem;
        color: var(--background);
        font-size: clamp(1.4rem, 2.3vw, 2.4rem);
        line-height: 1;
        font-weight: 500;
        letter-spacing: -.035em;
        white-space: nowrap;
      }

      @media (min-width: 901px) {
        .work-section .section-heading { margin-bottom: 2rem; }
        .work-section .filter-bar { margin-bottom: 1.75rem; }
        .work-section .project-stack { gap: clamp(2rem, 3vw, 3rem); }

        .work-section .project-row {
          grid-template-columns: 2.25rem minmax(0, 1.18fr) minmax(18rem, .82fr);
          gap: clamp(1rem, 2vw, 2rem);
        }

        .work-section .project-row-reverse {
          grid-template-columns: 2.25rem minmax(18rem, .82fr) minmax(0, 1.18fr);
        }

        .work-section .project-image {
          min-height: 0;
          height: clamp(15rem, 22vw, 19rem);
        }

        .work-section .project-image img {
          height: 100%;
          min-height: 0;
          object-fit: cover;
        }

        .work-section .project-copy h3 {
          margin: .45rem 0 .65rem;
          font-size: clamp(1.8rem, 2.5vw, 3rem);
        }

        .work-section .project-copy > p {
          margin: 0;
          font-size: .88rem;
          line-height: 1.45;
        }

        .work-section .project-facts { margin: .85rem 0 1rem; }
        .work-section .project-facts li { padding: .45rem 0; }

        .work-section .button-small {
          min-height: 2.25rem;
          padding: .5rem .7rem;
          font-size: .58rem;
        }

        .work-section .lab-card {
          grid-template-columns: minmax(0, 1.18fr) minmax(18rem, .82fr);
          height: clamp(15rem, 22vw, 19rem);
          min-height: 0;
          margin-top: 3rem;
        }

        .work-section .lab-image {
          height: 100%;
          min-height: 0;
        }

        .work-section .lab-image img {
          width: 100%;
          height: 100%;
          min-height: 0;
          object-fit: cover;
        }

        .work-section .lab-copy {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 0;
          padding: clamp(1.1rem, 2vw, 2rem);
        }

        .work-section .lab-copy h3 {
          margin: .45rem 0 .65rem;
          font-size: clamp(1.8rem, 2.5vw, 3rem);
        }

        .work-section .lab-copy > p:not(.micro-label) {
          margin: 0 0 1rem;
          font-size: .88rem;
          line-height: 1.45;
        }
      }

      @media (max-width: 1000px) {
        .collection-card:nth-child(5) { margin-top: 0; }
        .collection-card:nth-child(6) { margin-top: 4.25rem; }
      }

      @media (max-width: 760px) {
        .social-grid.social-grid-six {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .dialog-media.dialog-media-paloma { gap: .55rem; }
        .dialog-media.dialog-media-website { grid-template-columns: 1fr; }
      }

      @media (max-width: 460px) {
        .social-grid.social-grid-six { grid-template-columns: 1fr; }
      }
    `;
    document.head.appendChild(style);
  };

  const applySelectedWorkUpdate = () => {
    const workSection = document.querySelector("#work");
    if (!workSection) return;

    workSection.querySelectorAll("img").forEach((image) => {
      const source = image.getAttribute("src");
      if (source?.startsWith("Functional (but some are broken) Website/")) {
        image.setAttribute("src", source.replace("Functional (but some are broken) Website/", "Website/"));
      }
    });

    const colorPickerTrigger = workSection.querySelector('[data-case-study="colorpicker"]');
    const colorPickerCard = colorPickerTrigger?.closest("[data-project-card]");
    if (!colorPickerCard) return;

    const description = colorPickerCard.querySelector(".project-copy > p");
    if (description) {
      description.textContent = "A playful colour workspace combining direct colour selection with palette generation. It is currently available on desktop web only; mobile support, authentication, and several advanced tools are still in progress.";
    }

    const tags = colorPickerCard.querySelector(".project-tags");
    if (tags && !tags.querySelector(".desktop-only-tag")) {
      const desktopTag = document.createElement("span");
      desktopTag.className = "desktop-only-tag";
      desktopTag.textContent = "Desktop only";
      tags.appendChild(desktopTag);
    }

    const status = colorPickerCard.querySelector(".project-facts li:last-child span");
    if (status) {
      status.textContent = "Core UI works; desktop web only; mobile and account tools in progress";
    }
  };

  const createMediaElement = (item) => {
    if (item.type === "video") {
      const video = document.createElement("video");
      video.src = item.src;
      video.controls = true;
      video.preload = "metadata";
      video.playsInline = true;
      video.setAttribute("aria-label", item.alt);
      return video;
    }

    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.alt;
    image.loading = "lazy";
    return image;
  };

  const closeDialog = () => {
    const dialog = document.querySelector("[data-case-dialog]");
    if (!dialog?.open) return;
    dialog.querySelectorAll("video").forEach((video) => video.pause());
    dialog.close();
    document.body.classList.remove("dialog-open");
  };

  const openWebsiteCaseStudy = (id) => {
    const project = WEBSITE_CASE_STUDIES[id];
    const dialog = document.querySelector("[data-case-dialog]");
    if (!project || !dialog) return;

    const setText = (selector, value) => {
      const element = dialog.querySelector(selector);
      if (element) element.textContent = value;
    };

    setText("[data-dialog-index]", project.index);
    setText("[data-dialog-kicker]", project.kicker);
    setText("[data-dialog-title]", project.title);
    setText("[data-dialog-summary]", project.summary);
    setText("[data-dialog-challenge]", project.challenge);
    setText("[data-dialog-solution]", project.solution);
    setText("[data-dialog-status]", project.status);

    const flow = dialog.querySelector("[data-dialog-flow]");
    flow?.replaceChildren(...project.flow.map((step) => {
      const item = document.createElement("li");
      item.textContent = step;
      return item;
    }));

    const media = dialog.querySelector("[data-dialog-media]");
    media?.classList.remove("dialog-media-six", "dialog-media-paloma");
    media?.classList.add("dialog-media-website");
    media?.replaceChildren(...project.media.map(createMediaElement));

    const actions = dialog.querySelector("[data-dialog-actions]");
    if (actions) {
      const behanceLink = document.createElement("a");
      behanceLink.className = "button button-small button-primary";
      behanceLink.href = project.link;
      behanceLink.target = "_blank";
      behanceLink.rel = "noreferrer";
      behanceLink.textContent = project.linkLabel;

      const closeButton = document.createElement("button");
      closeButton.type = "button";
      closeButton.className = "button button-small button-outline";
      closeButton.textContent = "Close Case Study";
      closeButton.addEventListener("click", closeDialog);

      actions.replaceChildren(behanceLink, closeButton);
    }

    document.body.classList.add("dialog-open");
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
  };

  const createCaseStudyButton = (id, label) => {
    const button = document.createElement("button");
    button.className = "text-link";
    button.type = "button";
    button.dataset.websiteCaseStudy = id;
    button.setAttribute("aria-label", label);
    button.addEventListener("click", () => openWebsiteCaseStudy(id));
    return button;
  };

  const ensureWebCollectionStyles = () => {
    if (document.getElementById("web-collection-separation")) return;

    const style = document.createElement("style");
    style.id = "web-collection-separation";
    style.textContent = `
      .collection-card:nth-child(4) {
        grid-column: 2;
        grid-row: 1;
      }

      .collection-card:nth-child(5) {
        grid-column: 2;
        grid-row: 2;
      }

      .collection-card:nth-child(6) {
        grid-column: 3;
        grid-row: 1;
      }

      .collection-card:nth-child(5)::before {
        content: none !important;
        display: none !important;
      }

      .collection-card:nth-child(6)::before {
        content: "Miscellaneous" !important;
        display: block !important;
        position: absolute;
        left: 0;
        top: -3.45rem;
        color: var(--background);
        font-size: clamp(1.4rem, 2.3vw, 2.4rem);
        line-height: 1;
        font-weight: 500;
        letter-spacing: -.035em;
        white-space: nowrap;
      }

      @media (max-width: 1000px) {
        .collection-card:nth-child(5) { margin-top: 0; }
        .collection-card:nth-child(6) { margin-top: 4.25rem; }
      }
    `;
    document.head.appendChild(style);
  };

  const applyWebCollectionUpdate = () => {
    const grid = document.querySelector(".collection-grid");
    const webTrigger = grid?.querySelector('[data-case-study="webui"]');
    const enterpriseCard = webTrigger?.closest(".collection-card");
    const miscellaneousCard = grid?.querySelector('[data-case-study="stepper"]')?.closest(".collection-card");

    if (!grid || !enterpriseCard || !miscellaneousCard) return;

    ensureWebCollectionStyles();

    const enterpriseMedia = enterpriseCard.querySelector(".collection-media");
    if (enterpriseMedia) {
      enterpriseMedia.classList.remove("split-media");
      const image = document.createElement("img");
      image.src = "Web UI/03 - Enerlov Enterprise Landing Page/enerlov (1) (Mockups).png";
      image.alt = "Enterprise website design collection mockup";
      image.loading = "lazy";
      enterpriseMedia.replaceChildren(image);
    }

    const enterpriseLabel = enterpriseCard.querySelector(".micro-label");
    const enterpriseTitle = enterpriseCard.querySelector("h3");
    const enterpriseDescription = enterpriseCard.querySelector(".collection-body > p:not(.micro-label)");

    if (enterpriseLabel) enterpriseLabel.textContent = "ENTERPRISE WEB UI / 3 STUDIES";
    if (enterpriseTitle) enterpriseTitle.textContent = "Enterprise Website Design Collection";
    if (enterpriseDescription) {
      enterpriseDescription.textContent = "Three structured interface studies exploring accessibility controls, customer stories, and enterprise communication.";
    }

    const enterpriseButton = createCaseStudyButton("enterprise", "Open Enterprise Website Design Collection case study");
    webTrigger.replaceWith(enterpriseButton);
    enterpriseCard.classList.add("collection-case-card");

    if (!grid.querySelector('[data-web-project="rokoto"]')) {
      const rokotoCard = document.createElement("article");
      rokotoCard.className = "collection-card reveal is-visible collection-case-card";
      rokotoCard.dataset.webProject = "rokoto";

      const rokotoMedia = document.createElement("div");
      rokotoMedia.className = "collection-media";

      const rokotoImage = document.createElement("img");
      rokotoImage.src = "Web UI/04 - ROKOTO Neon Block Landing Page/Rokoto (1) (Mockups).png";
      rokotoImage.alt = "ROKOTO hot sauce landing page mockup";
      rokotoImage.loading = "lazy";
      rokotoMedia.appendChild(rokotoImage);

      const rokotoBody = document.createElement("div");
      rokotoBody.className = "collection-body";

      const rokotoLabel = document.createElement("p");
      rokotoLabel.className = "micro-label";
      rokotoLabel.textContent = "E-COMMERCE LANDING PAGE / CONCEPT";

      const rokotoTitle = document.createElement("h3");
      rokotoTitle.textContent = "ROKOTO! Hot Sauce Landing Page";

      const rokotoDescription = document.createElement("p");
      rokotoDescription.textContent = "An expressive product page balancing neon energy, flavour storytelling, and a clear purchase journey.";

      const rokotoButton = createCaseStudyButton("rokoto", "Open ROKOTO Hot Sauce Landing Page case study");

      rokotoBody.append(rokotoLabel, rokotoTitle, rokotoDescription, rokotoButton);
      rokotoCard.append(rokotoMedia, rokotoBody);
      grid.insertBefore(rokotoCard, miscellaneousCard);
    }

    const dialog = document.querySelector("[data-case-dialog]");
    if (dialog && !dialog.dataset.websiteCleanupBound) {
      dialog.dataset.websiteCleanupBound = "true";
      dialog.addEventListener("close", () => {
        dialog.querySelector("[data-dialog-media]")?.classList.remove("dialog-media-website");
      });
    }
  };

  const applySocialGalleryUpdate = () => {
    const grid = document.querySelector(".social-section .social-grid");
    if (!grid) return;

    grid.classList.add("social-grid-six");
    grid.querySelectorAll(".social-tile").forEach((tile) => {
      tile.classList.remove("social-tile-tall", "social-tile-wide");
    });

    const sectionShell = grid.closest(".section-shell");
    if (sectionShell && !sectionShell.querySelector(".social-gallery-actions")) {
      const actions = document.createElement("div");
      actions.className = "project-actions social-gallery-actions reveal is-visible";

      const link = document.createElement("a");
      link.className = "button button-primary";
      link.href = "https://www.behance.net/gallery/253635345/Instagram-Design-Collection";
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = "View Full Collection on Behance ↗";

      actions.appendChild(link);
      sectionShell.appendChild(actions);
    }
  };

  const applyPalomaDialogUpdate = () => {
    const dialog = document.querySelector("[data-case-dialog]");
    const title = dialog?.querySelector("[data-dialog-title]");
    if (!dialog?.open || title?.textContent.trim() !== "Paloma Grazia") return;

    const media = dialog.querySelector("[data-dialog-media]");
    media?.classList.remove("dialog-media-six", "dialog-media-website");
    media?.classList.add("dialog-media-paloma");
    media?.replaceChildren(...PALOMA_MEDIA.map(createMediaElement));

    const actions = dialog.querySelector("[data-dialog-actions]");
    if (actions && !actions.querySelector(".paloma-behance-dialog-link")) {
      const link = document.createElement("a");
      link.className = "button button-small button-primary paloma-behance-dialog-link";
      link.href = PALOMA_BEHANCE;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = "View Full Campaign on Behance ↗";
      actions.insertBefore(link, actions.firstChild);
    }
  };

  const applyPalomaCardUpdate = () => {
    const trigger = document.querySelector('[data-case-study="paloma"]');
    const card = trigger?.closest(".brand-feature");
    if (!trigger || !card) return;

    const cover = card.querySelector(".brand-cover");
    if (cover) {
      cover.classList.remove("paloma-cover-grid");
      cover.classList.add("paloma-main-cover");

      const image = document.createElement("img");
      image.src = `${PALOMA_BASE}/Main Cover.png`;
      image.alt = "Paloma Grazia social media campaign cover";
      image.loading = "lazy";
      cover.replaceChildren(image);
    }

    if (!card.querySelector(".paloma-card-actions")) {
      const actionRow = document.createElement("div");
      actionRow.className = "project-actions paloma-card-actions";
      trigger.parentNode.insertBefore(actionRow, trigger);
      actionRow.appendChild(trigger);

      const behanceLink = document.createElement("a");
      behanceLink.className = "button button-small button-primary";
      behanceLink.href = PALOMA_BEHANCE;
      behanceLink.target = "_blank";
      behanceLink.rel = "noreferrer";
      behanceLink.textContent = "View on Behance ↗";
      actionRow.appendChild(behanceLink);
    }

    trigger.addEventListener("click", () => {
      window.requestAnimationFrame(applyPalomaDialogUpdate);
    });

    const dialog = document.querySelector("[data-case-dialog]");
    if (dialog && !dialog.dataset.palomaCleanupBound) {
      dialog.dataset.palomaCleanupBound = "true";
      dialog.addEventListener("close", () => {
        dialog.querySelector("[data-dialog-media]")?.classList.remove("dialog-media-paloma");
      });
    }
  };

  const applyLuciGoDialogUpdate = () => {
    const dialog = document.querySelector("[data-case-dialog]");
    const title = dialog?.querySelector("[data-dialog-title]");
    if (!dialog?.open || title?.textContent.trim() !== "LuciGo Experience Booking") return;

    const actions = dialog.querySelector("[data-dialog-actions]");
    if (actions && !actions.querySelector(".lucigo-behance-dialog-link")) {
      const link = document.createElement("a");
      link.className = "button button-small button-primary lucigo-behance-dialog-link";
      link.href = LUCIGO_BEHANCE;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = "View Full Project on Behance ↗";
      actions.insertBefore(link, actions.firstChild);
    }
  };

  const applyLuciGoCardUpdate = () => {
    const trigger = document.querySelector('[data-case-study="lucigo"]');
    if (!trigger || trigger.dataset.lucigoBehanceBound) return;

    trigger.dataset.lucigoBehanceBound = "true";
    trigger.addEventListener("click", () => {
      window.requestAnimationFrame(applyLuciGoDialogUpdate);
    });
  };

  const applyHabitDialogUpdate = () => {
    const dialog = document.querySelector("[data-case-dialog]");
    const title = dialog?.querySelector("[data-dialog-title]");
    if (!dialog?.open || title?.textContent.trim() !== "Streak Habit Tracker") return;

    const actions = dialog.querySelector("[data-dialog-actions]");
    if (actions && !actions.querySelector(".habit-behance-dialog-link")) {
      const link = document.createElement("a");
      link.className = "button button-small button-primary habit-behance-dialog-link";
      link.href = HABIT_BEHANCE;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = "View Full Project on Behance ↗";
      actions.insertBefore(link, actions.firstChild);
    }
  };

  const applyHabitCardUpdate = () => {
    const trigger = document.querySelector('[data-case-study="habit"]');
    if (!trigger || trigger.dataset.habitBehanceBound) return;

    trigger.dataset.habitBehanceBound = "true";
    trigger.addEventListener("click", () => {
      window.requestAnimationFrame(applyHabitDialogUpdate);
    });
  };

  const applyEnhancements = () => {
    addStyles();
    applySelectedWorkUpdate();
    applyWebCollectionUpdate();
    applySocialGalleryUpdate();
    applyPalomaCardUpdate();
    applyLuciGoCardUpdate();
    applyHabitCardUpdate();
  };

  addStyles();
  applySelectedWorkUpdate();

  const originalScript = document.createElement("script");
  originalScript.src = "script-original.js";
  originalScript.async = false;
  originalScript.onload = applyEnhancements;
  originalScript.onerror = applyEnhancements;
  document.head.appendChild(originalScript);
})();
