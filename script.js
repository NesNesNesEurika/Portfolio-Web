(() => {
  const PALOMA_BASE = "Paloma Grasia (Prettygirl Brand)";
  const PALOMA_BEHANCE = "https://www.behance.net/gallery/253659707/Pretty-Girl-Social-Media-Campaign-(Paloma-Grazia)";
  const ROKOTO_BEHANCE = "https://www.behance.net/gallery/253814007/ROKOTO-Hot-Sauce-Landing-Page";
  const ENTERPRISE_BEHANCE = "https://www.behance.net/gallery/253836267/Enterprise-Website-Design-Collection";
  const PALOMA_MEDIA = [
    { type: "image", src: `${PALOMA_BASE}/Thumbnail/1080X1080/6.png`, alt: "Paloma Grazia square social media design 1" },
    { type: "image", src: `${PALOMA_BASE}/Thumbnail/1080X1080/B.png`, alt: "Paloma Grazia square social media design 2" },
    { type: "image", src: `${PALOMA_BASE}/Thumbnail/1080X1080/Konten Pg Feeds September  (16).png`, alt: "Paloma Grazia square social media design 3" },
    { type: "image", src: `${PALOMA_BASE}/Thumbnail/1080x1920/A.png`, alt: "Paloma Grazia Instagram story design 1" },
    { type: "image", src: `${PALOMA_BASE}/Thumbnail/1080x1920/D.png`, alt: "Paloma Grazia Instagram story design 2" },
    { type: "video", src: `${PALOMA_BASE}/Thumbnail/1080x1920/1 (Okay).mp4`, alt: "Paloma Grazia vertical short-form video" }
  ];

  const addEnhancementStyles = () => {
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

      .social-gallery-actions {
        margin-top: 2rem;
      }

      .paloma-main-cover {
        min-height: 0;
      }

      .paloma-main-cover img {
        width: 100%;
        height: auto;
        min-height: 0;
        object-fit: contain;
      }

      .paloma-card-actions {
        margin-top: 1.5rem;
      }

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

      .project-tags .desktop-only-tag {
        background: var(--foreground);
        color: var(--background);
      }

      @media (min-width: 901px) {
        .work-section .section-heading {
          margin-bottom: 2rem;
        }

        .work-section .filter-bar {
          margin-bottom: 1.75rem;
        }

        .work-section .project-stack {
          gap: clamp(2rem, 3vw, 3rem);
        }

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

        .work-section .project-facts {
          margin: .85rem 0 1rem;
        }

        .work-section .project-facts li {
          padding: .45rem 0;
        }

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

      @media (max-width: 760px) {
        .social-grid.social-grid-six {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .dialog-media.dialog-media-paloma {
          gap: .55rem;
        }
      }

      @media (max-width: 460px) {
        .social-grid.social-grid-six {
          grid-template-columns: 1fr;
        }
      }
    `;
    document.head.appendChild(style);
  };

  const addWebCollectionStyles = () => {
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
      }

      .collection-card:nth-child(6)::before {
        content: "Miscellaneous" !important;
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
        .collection-card:nth-child(5) {
          margin-top: 0;
        }

        .collection-card:nth-child(6) {
          margin-top: 4.25rem;
        }
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

  const createCollectionLink = (href, label) => {
    const link = document.createElement("a");
    link.className = "text-link";
    link.href = href;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.setAttribute("aria-label", label);
    return link;
  };

  const applyWebCollectionUpdate = () => {
    const grid = document.querySelector(".collection-grid");
    const webTrigger = grid?.querySelector('[data-case-study="webui"]');
    const enterpriseCard = webTrigger?.closest(".collection-card");
    const miscellaneousCard = grid?.querySelector('[data-case-study="stepper"]')?.closest(".collection-card");

    if (!grid || !enterpriseCard || !miscellaneousCard) return;

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

    if (enterpriseLabel) enterpriseLabel.textContent = "ENTERPRISE WEB UI / COLLECTION";
    if (enterpriseTitle) enterpriseTitle.textContent = "Enterprise Website Design Collection";
    if (enterpriseDescription) {
      enterpriseDescription.textContent = "A collection of structured landing-page studies focused on clarity, trust, accessibility, and communicating complex services without overwhelming the user.";
    }

    const enterpriseLink = createCollectionLink(ENTERPRISE_BEHANCE, "Open Enterprise Website Design Collection on Behance");
    webTrigger.replaceWith(enterpriseLink);
    enterpriseCard.classList.add("collection-link-card");

    if (!grid.querySelector('[data-web-project="rokoto"]')) {
      const rokotoCard = document.createElement("article");
      rokotoCard.className = "collection-card reveal is-visible collection-link-card";
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
      rokotoDescription.textContent = "A bold product landing page that uses oversized typography, high-contrast sections, and energetic visuals to turn a simple hot-sauce concept into a memorable digital experience.";

      const rokotoLink = createCollectionLink(ROKOTO_BEHANCE, "Open ROKOTO Hot Sauce Landing Page on Behance");

      rokotoBody.append(rokotoLabel, rokotoTitle, rokotoDescription, rokotoLink);
      rokotoCard.append(rokotoMedia, rokotoBody);
      grid.insertBefore(rokotoCard, miscellaneousCard);
    }

    addWebCollectionStyles();
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

  const createPalomaMediaElement = (item) => {
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

  const applyPalomaDialogUpdate = () => {
    const dialog = document.querySelector("[data-case-dialog]");
    const title = dialog?.querySelector("[data-dialog-title]");
    if (!dialog?.open || title?.textContent.trim() !== "Paloma Grazia") return;

    const media = dialog.querySelector("[data-dialog-media]");
    media?.classList.remove("dialog-media-six");
    media?.classList.add("dialog-media-paloma");
    media?.replaceChildren(...PALOMA_MEDIA.map(createPalomaMediaElement));

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

  const applyEnhancements = () => {
    addEnhancementStyles();
    applySelectedWorkUpdate();
    applyWebCollectionUpdate();
    applySocialGalleryUpdate();
    applyPalomaCardUpdate();
  };

  // script.js is deferred, so the DOM is ready here. Apply critical visual fixes
  // immediately so moved images do not remain broken while script-original.js loads.
  addEnhancementStyles();
  applySelectedWorkUpdate();

  const originalScript = document.createElement("script");
  originalScript.src = "script-original.js";
  originalScript.async = false;
  originalScript.onload = applyEnhancements;
  originalScript.onerror = applyEnhancements;
  document.head.appendChild(originalScript);
})();
