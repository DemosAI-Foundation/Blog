---
layout: page
title: Write
icon: fas fa-pen-nib
order: 5
---

Click the button below to open the editor in a popup on this page.

<div class="text-center" style="margin-top: 3rem;">
  <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#ghModal">
    <i class="fab fa-github"></i> Write a Guest Post
  </button>
</div>

<div class="modal fade" id="ghModal" tabindex="-1" aria-labelledby="ghModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl modal-dialog-centered" style="max-width: 90%; height: 90%;">
    <div class="modal-content" style="height: 100%;">
      <div class="modal-header">
        <h5 class="modal-title" id="ghModalLabel">GitHub Editor</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="padding: 0;">
        <iframe id="gh-iframe" src="" style="width: 100%; height: 100%; border: none;"></iframe>
      </div>
    </div>
  </div>
</div>

<script>
  function setupModal() {
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
Start typing here...`;

    const encodedTemplate = encodeURIComponent(template);
    const githubUrl = `https://github.com/${org}/${repo}/new/main/_posts?filename=${dateStr}-guest-post.md&value=${encodedTemplate}&message=guest-post:%20new%20contribution`;

    const iframe = document.getElementById('gh-iframe');
    if (iframe) {
      iframe.src = githubUrl;
    }
  }

  // Initialize
  setupModal();
  
  // Handle Chirpy's Pjax navigation
  document.addEventListener('pjax:success', setupModal);
</script>