---
layout: page
title: Write
icon: fas fa-pen-nib
order: 5
---

To contribute a post to the **DemosAI-Foundation** blog, click the button below. This will open the GitHub editor in a focused window.

<div class="text-center" style="margin: 4rem 0; padding: 50px; border: 2px dashed var(--main-border-color); border-radius: 15px; background: var(--main-bg);">
  <i class="fas fa-edit fa-3x mb-3" style="color: var(--link-color);"></i>
  <h3>Draft your post</h3>
  <p class="text-muted">A new window will open for you to sign in and write.</p>
  
  <button id="open-editor-btn" class="btn btn-primary btn-lg mt-3" style="min-width: 200px;">
    <i class="fab fa-github"></i> Open Writing Editor
  </button>
</div>

<script>
  function initGuestPost() {
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

## Introduction
Start writing your content here...`;

    const encodedTemplate = encodeURIComponent(template);
    const githubUrl = `https://github.com/${org}/${repo}/new/main/_posts?filename=${dateStr}-guest-post.md&value=${encodedTemplate}&message=guest-post:%20new%20contribution`;

    const btn = document.getElementById('open-editor-btn');
    if (btn) {
      btn.onclick = function() {
        // Window sizing and centering
        const w = 1100;
        const h = 850;
        const left = (window.screen.width / 2) - (w / 2);
        const top = (window.screen.height / 2) - (h / 2);
        
        window.open(
          githubUrl, 
          "GitHubEditor", 
          `width=${w},height=${h},top=${top},left=${left},resizable=yes,scrollbars=yes,status=no,location=no,toolbar=no,menubar=no`
        );
      };
    }
  }

  // Initial load
  initGuestPost();
  
  // Re-run for Chirpy Pjax navigation
  document.addEventListener('pjax:success', initGuestPost);
</script>