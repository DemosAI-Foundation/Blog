---
layout: page
title: Write
icon: fas fa-pen-nib
order: 5
---

To contribute to **DemosAI-Foundation**, use the button below. This will open the GitHub editor in a new tab with a pre-filled template.

<div id="submission-box" style="margin: 2rem 0; padding: 40px; border: 2px dashed #666; border-radius: 12px; text-align: center;">
  <a id="gh-link" 
     href="#" 
     target="_blank" 
     rel="noopener noreferrer" 
     class="btn btn-primary btn-lg" 
     style="display: none; text-decoration: none; margin-bottom: 1rem;">
    <i class="fab fa-github"></i> Open Editor on GitHub
  </a>
  <p id="gh-loader">Loading your secure editor link...</p>
</div>

### Copy Template Example
If you prefer to draft locally, you can copy this example structure:

<div style="position: relative; margin-top: 1rem;">
<button onclick="copyTemplate()" class="btn btn-outline-secondary btn-sm" style="position: absolute; right: 10px; top: 10px; z-index: 10;">
  <i class="fas fa-copy"></i> Copy
</button>
<pre id="template-code" style="padding: 1.5rem; background: #f6f8fa; border-radius: 8px; border: 1px solid #ddd; text-align: left; overflow-x: auto;">
---
title: Insert title
date: 2026-02-28 14:30:00 +0800
categories: [Guestpost]
tags: [ai, guestpost]
pin: false
---

## Introduction
Lorem ipsum dolor sit amet
</pre>
</div>

<script>
  function copyTemplate() {
    const code = document.getElementById('template-code').innerText;
    navigator.clipboard.writeText(code).then(() => {
      alert('Template copied to clipboard!');
    });
  }

  function loadGithubLink() {
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const timeStr = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
    
    const org = "DemosAI-Foundation";
    const repo = "Blog";
    
    const template = `---
title: "Your Post Title"
date: ${dateStr} ${timeStr}:00 +0000
categories: [Guest]
tags: [contribution]
---

## My Post

Start typing here...

`;

    const encodedTemplate = encodeURIComponent(template);
    const githubUrl = `https://github.com/${org}/${repo}/new/main/_posts?filename=${dateStr}-guest-post.md&value=${encodedTemplate}&message=guest-post:%20new%20contribution`;

    const linkEl = document.getElementById('gh-link');
    const loaderEl = document.getElementById('gh-loader');

    if (linkEl && loaderEl) {
      linkEl.href = githubUrl;
      linkEl.style.display = 'inline-block';
      loaderEl.style.display = 'none';
    }
  }

  /* Initialization for standard and Pjax loads */
  loadGithubLink();
  document.addEventListener('pjax:success', loadGithubLink);
</script>