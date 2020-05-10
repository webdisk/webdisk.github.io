import * as moge from 'https://unpkg.com/mermaid@8.5.0/dist/mermaid.min.js';

console.log(moge)
moge.initialize({ startOnLoad: false });

document.addEventListener('DOMContentLoaded', () => {
  const codes = document.querySelectorAll('pre>code.language-mermaid');
  for (const [i, code] of codes.entries()) {
    const id = `mermaid-${i}`;
    const graphDefinition = code.textContent;
    const pre = code.parentElement;
    const insertSvg = svgCode => {
        const div = document.createElement('div');
        div.innerHTML = svgCode;
        pre.parentElement.replaceChild(div, pre);
    }
    moge.render(id, graphDefinition, insertSvg);
  }
});
