---
layout: page
title: Write
icon: fas fa-pen-nib
order: 5
---

To contribute to **DemosAI-Foundation**, use the button below. This will open the GitHub editor in a new tab.

<div id="submission-box" style="margin: 2rem 0; padding: 40px; border: 2px dashed #666; border-radius: 12px; text-align: center;">
  <a id="gh-link" 
     href="javascript:void(0);" 
     target="_blank" 
     rel="noopener noreferrer" 
     class="btn btn-primary btn-lg" 
     style="display: none; text-decoration: none;">
    <i class="fab fa-github"></i> Open Editor on GitHub
  </a>
  <p id="gh-loader">Connecting to GitHub...</p>
</div>

<script>
  (function() {
    function buildLink() {
      const linkEl = document.getElementById('gh-link');
      const loaderEl = document.getElementById('gh-loader');
      
      if (!linkEl) return;

      const now = new Date();
      const dateStr = now.toISOString().split('T')[0];
      const timeStr = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
      
      const template = [
        '---',
        'title: "Your Post Title"',
        `date: ${dateStr} ${timeStr}:00 +0000`,
        'categories: [Guest]',
        'tags: [contribution]',
        '---',
        '',
        '## My Post',
        '',
        'Start typing here...'
      ].join('\n');

      const encodedValue = encodeURIComponent(template);
      const url = `https://github.com/DemosAI-Foundation/Blog/new/main/_posts?filename=${dateStr}-guest-post.md&value=${encodedValue}&message=guest-post:%20new%20contribution`;

      linkEl.href = url;
      linkEl.style.display = 'inline-block';
      if (loaderEl) loaderEl.style.display = 'none';
    }

    // Trigger 1: Standard load
    buildLink();

    // Trigger 2: Chirpy / Pjax dynamic navigation
    document.addEventListener('pjax:complete', buildLink);
    document.addEventListener('pjax:success', buildLink);
    
    // Trigger 3: Final fallback for aggressive caching
    window.addEventListener('load', buildLink);
  })();
</script>