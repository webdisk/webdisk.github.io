mermaid.mermaidAPI.initialize({ startOnLoad:false });

document.addEventListener('DOMContentLoaded', () => {
  const codes = document.querySelectorAll('pre>code.language-mermaid');
  for (const code of codes) {
    const graphDefinition = code.textContent;
    const pre = code.parentElement;
    const insertSvg = svgCode => {
        const div = document.createElement('div');
        div.innerHTML = svgCode;
        pre.parentElement.replaceChild(div, pre);
    }
    mermaid.mermaidAPI.render(`id1`, graphDefinition, insertSvg);
  }});
