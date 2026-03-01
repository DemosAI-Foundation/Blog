---
layout: page
title: Write
icon: fas fa-pen-nib
order: 5
---

<div class="text-center" style="margin: 4rem 0; padding: 60px 20px; border: 2px dashed var(--main-border-color); border-radius: 20px; background: var(--main-bg); box-shadow: var(--card-shadow);">
  <div class="mb-4">
    <i class="fab fa-github fa-4x" style="color: var(--link-color);"></i>
  </div>
  <h2 class="fw-bold">Contribute to DemosAI-Foundation</h2>
  <p class="text-muted mb-4" style="max-width: 500px; margin: 0 auto;">
    Your post will be opened in a new tab using the GitHub Web Editor. 
    Once you "Commit Changes," our system will automatically process your post.
  </p>
  
  <a id="direct-gh-link" href="#" class="btn btn-primary btn-lg" target="_blank" rel="noopener" style="min-width: 250px; padding: 15px 30px; font-weight: bold; font-size: 1.2rem; border-radius: 10px;">
    Start Writing Now <i class="fas fa-external-link-alt ms-2" style="font-size: 0.9rem;"></i>
  </a>

  <div class="mt-4 small text-muted">
    <i class="fas fa-info-circle me-1"></i> Requires a GitHub account to save.
  </div>
</div>

<script>
  function generateSubmissionLink() {
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
    // Note: 'message' is included to trigger your auto-merge action!
    const githubUrl = `https://github.com/${org}/${repo}/new/main/_posts?filename=${dateStr}-guest-post.md&value=${encodedTemplate}&message=guest-post:%20new%20contribution`;

    const linkBtn = document.getElementById('direct-gh-link');
    if (linkBtn) {
      linkBtn.href = githubUrl;
    }
  }

  // Initial load
  generateSubmissionLink();
  
  // Re-run for Chirpy Pjax navigation
  document.addEventListener('pjax:success', generateSubmissionLink);
</script>