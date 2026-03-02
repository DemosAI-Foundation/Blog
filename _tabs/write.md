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
Please copy this example structure for the new post:

<div style="position: relative; margin-top: 1rem;">
<button onclick="copyTemplate()" class="btn btn-outline-secondary btn-sm" style="position: absolute; right: 10px; top: 10px; z-index: 10;">
  <i class="fas fa-copy"></i> Copy
</button>
<pre id="template-code" style="padding: 1.5rem; background: #f6f8fa; border-radius: 8px; border: 1px solid #ddd; text-align: left; overflow-x: auto;">
---
title: Welcome to the Future of AI
date: 2026-02-28 14:30:00 +0800
categories: [Guestpost]
tags: [ai, guestpost, open-source]
pin: false
image:
  path: https://picsum.photos/id/237/1200/630
  alt: A descriptive caption for the header image.
---

## Introduction
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

![Example Body Image](https://picsum.photos/id/1/800/400)
_Optional: A caption for your image using Chirpy's italics syntax._

## The Core Concept
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
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
    
    /* Pre-filling the GitHub link with image placeholders too */
    const template = `RENAME FILE ABOVE IN ACCORDANCE TO CHIRPY FORMAT: YYYY-MM-DD-TITLE; UNIQUE FILENAME IS MANDATORY`;

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