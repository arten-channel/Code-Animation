const s = "js/highlight.min.js";

fetch(s)
  .then(r => r.text())
  .then(t => elcode.textContent = t)
  .then(_ => hljs.highlightBlock(elcode))