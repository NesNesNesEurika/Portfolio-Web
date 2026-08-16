(() => {
  const nativeFetch = window.fetch.bind(window);
  const splitCoverPath = "Website/PCA/cover/part-01.txt";

  window.fetch = async (input, init) => {
    const url = typeof input === "string" ? input : input?.url;
    if (url === splitCoverPath || url?.endsWith(`/${splitCoverPath}`)) {
      const [first, second] = await Promise.all([
        nativeFetch("Website/PCA/cover/part-01a.txt", init),
        nativeFetch("Website/PCA/cover/part-01b.txt", init)
      ]);
      if (!first.ok || !second.ok) return nativeFetch(input, init);
      return new Response(`${await first.text()}${await second.text()}`, {
        status: 200,
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }
    return nativeFetch(input, init);
  };

  const projectScript = document.createElement("script");
  projectScript.src = "script-pca-project.js";
  projectScript.async = false;
  document.head.appendChild(projectScript);
})();
