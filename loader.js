(async function () {

  // Load CSS
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "https://cdn.jsdelivr.net/gh/asadkhan36695-ops/bookmarklet-app@main/style.css";
  document.head.appendChild(css);

  // Load HTML
  const html = await fetch("https://cdn.jsdelivr.net/gh/asadkhan36695-ops/bookmarklet-app@main/ui.html")
    .then(r => r.text());

  const container = document.createElement("div");
  container.innerHTML = html;
  document.body.appendChild(container);

  // Load Logic
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/gh/YOUR_USERNAME/bookmarklet-app@main/logic.js";
  document.body.appendChild(script);

})();
