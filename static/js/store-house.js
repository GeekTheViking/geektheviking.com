function getRandomItem(items, excludeUrl) {
  if (items.length === 0) return null;
  if (items.length === 1) return items;
  const filtered = items.filter(i => i.url !== excludeUrl);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

function renderItem(containerId, item, label, allItems) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (item) {
    container.innerHTML = `
      <article class="sh-card">
        <h3 class="sh-card-title">
          <a href="${item.url}">${item.title}</a>
        </h3>
        <p class="sh-card-summary">${item.summary.replace(/\\n/g, ' ')}</p>
        <button class="sh-btn" onclick="refreshItem('${containerId}', '${label}')">KLIK TO GET A NEW</button>
      </article>
    `;
    container.dataset.currentUrl = item.url;
  } else {
    container.innerHTML = `<p>No ${label} yet.</p>`;
  }
}

function refreshItem(containerId, label) {
  const items = label === 'artifacts' ? (window.gtvArtifacts || []) : (window.gtvEchoes || []);
  const container = document.getElementById(containerId);
  const currentUrl = container ? container.dataset.currentUrl : null;
  renderItem(containerId, getRandomItem(items, currentUrl), label, items);
}

window.onload = function() {
  const artifacts = window.gtvArtifacts || [];
  const echoes = window.gtvEchoes || [];
  renderItem('artifact-content', getRandomItem(artifacts), 'artifacts', artifacts);
  renderItem('echo-content', getRandomItem(echoes), 'echoes', echoes);
};
