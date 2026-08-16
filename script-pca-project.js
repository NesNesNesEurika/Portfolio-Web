(() => {
  const PCA_LIVE = "https://nesnesneseurika.github.io/PCA-PlayableCampaignAgent/";
  const PCA_SOURCE = "https://github.com/NesNesNesEurika/PCA-PlayableCampaignAgent";
  const PCA_ASSET_BASE = "https://nesnesneseurika.github.io/PCA-PlayableCampaignAgent/assets/SecondaryImageforWebsite";
  const COVER_PARTS = [
    "Website/PCA/cover/part-01.txt",
    "Website/PCA/cover/part-02.txt",
    "Website/PCA/cover/part-03.txt",
    "Website/PCA/cover/part-04.txt",
    "Website/PCA/cover/part-05.txt",
    "Website/PCA/cover/part-06.txt"
  ];
  const COVER_FALLBACK = `${PCA_ASSET_BASE}/Playable%20Demo%20Preview.png`;
  const TRANSPARENT_PIXEL = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

  let coverPromise;

  const getCoverDataUrl = () => {
    if (!coverPromise) {
      coverPromise = Promise.all(COVER_PARTS.map(async (path) => {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Unable to load PCA cover part: ${path}`);
        return response.text();
      })).then((parts) => `data:image/jpeg;base64,${parts.join("")}`);
    }
    return coverPromise;
  };

  const hydratePcaCover = (root = document) => {
    root.querySelectorAll("[data-pca-cover]").forEach((image) => {
      getCoverDataUrl()
        .then((src) => { image.src = src; })
        .catch(() => { image.src = COVER_FALLBACK; });
    });
  };

  const closePcaDialog = () => {
    const dialog = document.querySelector("[data-case-dialog]");
    if (!dialog?.open) return;
    dialog.close();
    document.body.classList.remove("dialog-open");
  };

  const openPcaCaseStudy = () => {
    const dialog = document.querySelector("[data-case-dialog]");
    if (!dialog) return;

    const setText = (selector, value) => {
      const element = dialog.querySelector(selector);
      if (element) element.textContent = value;
    };

    setText("[data-dialog-index]", "PRODUCT CASE STUDY / AI CAMPAIGN TOOL");
    setText("[data-dialog-kicker]", "From marketing brief to playable concept");
    setText("[data-dialog-title]", "Playable Campaign Agent");
    setText(
      "[data-dialog-summary]",
      "An AI-assisted campaign builder that turns a marketing brief into a recommended mini-game concept, editable campaign assets, and a playable browser demo."
    );
    setText(
      "[data-dialog-challenge]",
      "Interactive brand activations can be slow to prototype because one campaign brief has to be translated into a game format, visual direction, assets, rewards, and a playable experience before the idea can be evaluated."
    );
    setText(
      "[data-dialog-solution]",
      "I designed a guided end-to-end flow that keeps the campaign brief at the centre. Users define the audience, goal, platform, duration, and brand personality; the product then frames a campaign plan, recommends a playable format, supports sample asset creation, and lets the user test the idea as a browser demo before reviewing the result."
    );
    setText(
      "[data-dialog-status]",
      "Functional browser prototype exploring an end-to-end campaign creation workflow. The current version demonstrates brief intake, recommendation, sample creation, gameplay preview, and result/export concepts; it is a prototype rather than a production ad-serving platform."
    );

    const flowSteps = [
      "Write the campaign brief",
      "Generate a campaign plan",
      "Review the recommended game concept",
      "Create or customise sample assets",
      "Play the browser demo",
      "Review the result and export direction"
    ];
    const flow = dialog.querySelector("[data-dialog-flow]");
    flow?.replaceChildren(...flowSteps.map((step) => {
      const item = document.createElement("li");
      item.textContent = step;
      return item;
    }));

    const mediaItems = [
      { src: TRANSPARENT_PIXEL, alt: "Playable Campaign Agent displayed on a laptop in a campaign planning workspace", cover: true },
      { src: `${PCA_ASSET_BASE}/AI%20Recommendation%20Screen.png`, alt: "Playable Campaign Agent recommendation screen" },
      { src: `${PCA_ASSET_BASE}/Gameplay%20Demo.png`, alt: "Playable Campaign Agent gameplay demo" },
      { src: `${PCA_ASSET_BASE}/Export%20Interface.png`, alt: "Playable Campaign Agent result and export interface" }
    ];
    const media = dialog.querySelector("[data-dialog-media]");
    if (media) {
      media.classList.remove("dialog-media-six", "dialog-media-paloma");
      media.classList.add("dialog-media-website");
      media.replaceChildren(...mediaItems.map((item) => {
        const image = document.createElement("img");
        image.src = item.src;
        image.alt = item.alt;
        image.loading = "lazy";
        if (item.cover) image.dataset.pcaCover = "";
        return image;
      }));
      hydratePcaCover(media);
    }

    const actions = dialog.querySelector("[data-dialog-actions]");
    if (actions) {
      const liveLink = document.createElement("a");
      liveLink.className = "button button-small button-primary";
      liveLink.href = PCA_LIVE;
      liveLink.target = "_blank";
      liveLink.rel = "noreferrer";
      liveLink.textContent = "Launch Prototype ↗";

      const sourceLink = document.createElement("a");
      sourceLink.className = "button button-small button-outline";
      sourceLink.href = PCA_SOURCE;
      sourceLink.target = "_blank";
      sourceLink.rel = "noreferrer";
      sourceLink.textContent = "View GitHub Source ↗";

      const closeButton = document.createElement("button");
      closeButton.type = "button";
      closeButton.className = "button button-small button-outline";
      closeButton.textContent = "Close Case Study";
      closeButton.addEventListener("click", closePcaDialog);

      actions.replaceChildren(liveLink, sourceLink, closeButton);
    }

    document.body.classList.add("dialog-open");
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
  };

  const insertPcaProject = () => {
    const workSection = document.querySelector("#work");
    const stack = workSection?.querySelector(".project-stack");
    if (!stack || stack.querySelector("[data-pca-project]")) return;

    const lunaria = stack.querySelector(".project-row");
    if (!lunaria) return;

    const card = document.createElement("article");
    card.className = "project-row project-row-reverse reveal is-visible";
    card.dataset.projectCard = "";
    card.dataset.status = "live";
    card.dataset.pcaProject = "";
    card.innerHTML = `
      <div class="project-number">01</div>
      <a class="project-image pca-project-image" href="${PCA_LIVE}" target="_blank" rel="noreferrer" aria-label="Open Playable Campaign Agent live prototype">
        <img src="${TRANSPARENT_PIXEL}" alt="Playable Campaign Agent displayed on a laptop in a campaign planning workspace" loading="lazy" data-pca-cover />
      </a>
      <div class="project-copy">
        <div class="project-tags"><span>AI campaign tool</span><span>Live prototype</span></div>
        <h3>Playable Campaign Agent</h3>
        <p>An AI-assisted campaign builder that turns a marketing brief into a recommended mini-game concept, editable assets, and a playable browser demo for interactive brand activations.</p>
        <ul class="project-facts" aria-label="Project details">
          <li><strong>Focus</strong><span>Campaign briefs, playable activations</span></li>
          <li><strong>Role</strong><span>Product concept, UI/UX, front-end prototype</span></li>
        </ul>
        <div class="project-actions">
          <a class="button button-small button-primary" href="${PCA_LIVE}" target="_blank" rel="noreferrer">View Live Website ↗</a>
          <button class="button button-small button-outline" type="button" data-pca-case-study>View Case Study</button>
        </div>
      </div>`;

    lunaria.insertAdjacentElement("beforebegin", card);
    card.querySelector("[data-pca-case-study]")?.addEventListener("click", openPcaCaseStudy);
    hydratePcaCover(card);

    const rows = [...stack.querySelectorAll(".project-row")];
    rows.forEach((row, index) => {
      const number = row.querySelector(".project-number");
      if (number) number.textContent = String(index + 1).padStart(2, "0");
      row.classList.toggle("project-row-reverse", index % 2 === 1);
    });

    const labLabel = workSection.querySelector(".lab-card .micro-label");
    if (labLabel) labLabel.textContent = "EXPERIMENTAL LAB / 06";
  };

  const addPcaStyles = () => {
    if (document.getElementById("pca-selected-work-styles")) return;
    const style = document.createElement("style");
    style.id = "pca-selected-work-styles";
    style.textContent = `
      .pca-project-image img { object-position: center 55%; }
      [data-case-dialog] .dialog-media-website img[data-pca-cover] { object-position: center; }
    `;
    document.head.appendChild(style);
  };

  addPcaStyles();
  insertPcaProject();

  const baseScript = document.createElement("script");
  baseScript.src = "script-portfolio-base.js";
  baseScript.async = false;
  document.head.appendChild(baseScript);
})();
