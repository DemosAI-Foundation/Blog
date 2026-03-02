---
layout: page
title: Write
icon: fas fa-pen-nib
order: 5
---

To contribute to **DemosAI-Foundation**, use the button below to open the GitHub editor. Then, copy the template below and paste it into the new file.

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
Please copy this example structure for your new post:

<div style="position: relative; margin-top: 1rem;">
<button id="copy-btn" onclick="copyTemplate()" class="btn btn-outline-secondary btn-sm" style="position: absolute; right: 10px; top: 10px; z-index: 10; transition: all 0.3s ease;">
  <i id="copy-icon" class="fas fa-copy"></i> <span id="copy-text">Copy</span>
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
    const btn = document.getElementById('copy-btn');
    const icon = document.getElementById('copy-icon');
    const text = document.getElementById('copy-text');

    navigator.clipboard.writeText(code).then(function() {
      // Success State - Turn Green
      btn.style.backgroundColor = "#28a745";
      btn.style.color = "#fff";
      btn.style.borderColor = "#28a745";
      icon.className = 'fas fa-check';
      text.innerText = 'OK';

      // Revert after 2 seconds
      setTimeout(function() {
        btn.style.backgroundColor = "";
        btn.style.color = "";
        btn.style.borderColor = "";
        icon.className = 'fas fa-copy';
        text.innerText = 'Copy';
      }, 2000);
    });
  }

  function loadGithubLink() {
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const org = "DemosAI-Foundation";
    const repo = "Blog";
    
    // Minimal value to avoid URL length issues
    const val = encodeURIComponent("---\ntitle: \n---");
    const githubUrl = "https://github.com/" + org + "/" + repo + "/new/main/_posts?filename=" + dateStr + "-new-post.md&value=" + val;

    const linkEl = document.getElementById('gh-link');
    const loaderEl = document.getElementById('gh-loader');

    if (linkEl && loaderEl) {
      linkEl.href = githubUrl;
      linkEl.style.display = 'inline-block';
      loaderEl.style.display = 'none';
    }
  }

  // Load on initial visit
  loadGithubLink();
  // Load on Pjax navigation (Chirpy specific)
  document.addEventListener('pjax:success', loadGithubLink);
</script>