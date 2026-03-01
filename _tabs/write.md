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
     style="display: none; text-decoration: none;">
    <i class="fab fa-github"></i> Open Editor on GitHub
  </a>
  <p id="gh-loader">Loading your secure editor link...</p>
</div>

<script>
  function loadGithubLink() {
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const timeStr = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
    
    const org = "DemosAI-Foundation";
    const repo = "Blog";
    
    /* Template formatted for Chirpy:
       - Double newlines (\n\n) ensure proper Markdown block separation.
       - Timezone offset (+0000) included as per Chirpy defaults.
    */
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