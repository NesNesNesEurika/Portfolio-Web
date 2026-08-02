(() => {
  const applySocialGalleryUpdate = () => {
    const grid = document.querySelector('.social-section .social-grid');
    if (!grid) return;

    grid.classList.add('social-grid-six');
    grid.querySelectorAll('.social-tile').forEach((tile) => {
      tile.classList.remove('social-tile-tall', 'social-tile-wide');
    });

    if (!document.getElementById('social-gallery-layout-fix')) {
      const style = document.createElement('style');
      style.id = 'social-gallery-layout-fix';
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

        @media (max-width: 760px) {
          .social-grid.social-grid-six {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 460px) {
          .social-grid.social-grid-six {
            grid-template-columns: 1fr;
          }
        }
      `;
      document.head.appendChild(style);
    }

    const sectionShell = grid.closest('.section-shell');
    if (sectionShell && !sectionShell.querySelector('.social-gallery-actions')) {
      const actions = document.createElement('div');
      actions.className = 'project-actions social-gallery-actions reveal is-visible';

      const link = document.createElement('a');
      link.className = 'button button-primary';
      link.href = 'https://www.behance.net/gallery/253635345/Instagram-Design-Collection';
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.textContent = 'View Full Collection on Behance ↗';

      actions.appendChild(link);
      sectionShell.appendChild(actions);
    }
  };

  const originalScript = document.createElement('script');
  originalScript.src = 'script-original.js';
  originalScript.async = false;
  originalScript.onload = applySocialGalleryUpdate;
  originalScript.onerror = applySocialGalleryUpdate;
  document.head.appendChild(originalScript);
})();
