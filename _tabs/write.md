---
layout: page
title: Write
icon: fas fa-pen-nib
order: 5
---

To contribute to **DemosAI-Foundation**, enter your post title and click the button.

<div id="submission-box" style="margin: 2rem 0; padding: 40px; border: 2px dashed #666; border-radius: 12px; text-align: center;">
  <div style="margin-bottom: 1.5rem;">
    <label for="post-title" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Post Title:</label>
    <input type="text" id="post-title" placeholder="e.g. My Awesome AI Theory" 
           style="width: 100%; max-width: 400px; padding: 10px; border-radius: 6px; border: 1px solid #ccc; color: #333;">
  </div>

  <button id="submit-to-github" class="btn btn-primary btn-lg" style="cursor: pointer;">
    <i class="fab fa-github"></i> Open Editor on GitHub
  </button>
</div>

### Copy Template Example
<div style="position: relative; margin-top: 1rem;">
  <button id="copy-template-btn" class="btn btn-outline-secondary btn-sm" style="position: absolute; right: 10px; top: 10px; z-index: 10;">
    <i class="fas fa-copy"></i> Copy
  </button>
  <pre id="template-code" style="padding: 1.5rem; background: #f6f8fa; border-radius: 8px; border: 1px solid #ddd; text-align: left; overflow-x: auto; color: #333;">
---
title: Welcome to the Future of AI
date: 2026-03-02 14:30:00 +0800
categories: [Guestpost]
tags: [ai, guestpost, open-source]
---
## Introduction
Your content here...
</pre>
</div>

{% raw %}
<script>
(function() {
  // 1. Slugify helper
  const slugify = (text) => {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  // 2. The Main Logic
  const executeSubmission = () => {
    const titleInput = document.getElementById('post-title').value.trim();
    
    if (!titleInput) {
      alert("Please enter a title first!");
      return;
    }

    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const timeStr = now.getHours().toString().padStart(2, '0') + ":" + 
                    now.getMinutes().toString().padStart(2, '0') + ":00 +0800";
    
    const slug = slugify(titleInput) || "new-post";
    const filename = `${dateStr}-${slug}.md`;
    
    const template = `---
title: ${titleInput}
date: ${dateStr} ${timeStr}
categories: [Guestpost]
tags: [ai, guestpost, open-source]
pin: false
image:
  path: https://picsum.photos/id/237/1200/630
  alt: Header image
---

## Introduction
Write your content here.`;

    const encodedTemplate = encodeURIComponent(template);
    const githubUrl = `https://github.com/DemosAI-Foundation/Blog/new/main/_posts?filename=${filename}&value=${encodedTemplate}&message=guest-post: ${encodeURIComponent(titleInput)}`;

    window.open(githubUrl, '_blank');
  };

  // 3. Event Listener (Delegation Pattern)
  // This listens for clicks on the entire document but only acts if the ID matches.
  // This survives Chirpy's Pjax page transitions.
  document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'submit-to-github' || event.target.closest('#submit-to-github')) {
      event.preventDefault();
      executeSubmission();
    }
    
    if (event.target && event.target.id === 'copy-template-btn' || event.target.closest('#copy-template-btn')) {
      const code = document.getElementById('template-code').innerText;
      navigator.clipboard.writeText(code).then(() => alert('Template copied!'));
    }
  });

  console.log("DemosAI Writer Script Loaded Successfully");
})();
</script>
{% endraw %}