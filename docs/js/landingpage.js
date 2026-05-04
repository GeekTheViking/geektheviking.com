function getLatestItem(items) {
  if (items.length === 0) return null;
  return items[items.length - 1];
}

function renderItem(containerId, item, label) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (item) {
    container.innerHTML = `
      <p class="fx-card-desc">${item.summary.replace(/\\n/g, ' ')}</p>
      <a href="${item.url}" class="fx-btn">READ THE REST</a>
    `;
  } else {
    container.innerHTML = `<p>No ${label} yet.</p>`;
  }
}

window.onload = function() {
  const artifacts = window.gtvArtifacts || [];
  const echoes = window.gtvEchoes || [];
  renderItem('artifact-content', getLatestItem(artifacts), 'artifacts');
  renderItem('echo-content', getLatestItem(echoes), 'echoes');
};
