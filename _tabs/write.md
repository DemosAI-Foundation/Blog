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

  <button onclick="handleGithubClick(event)" class="btn btn-primary btn-lg" style="cursor: pointer;">
    <i class="fab fa-github"></i> Open Editor on GitHub
  </button>
</div>

### Copy Template Example
<div style="position: relative; margin-top: 1rem;">
  <button onclick="copyToClipboard()" class="btn btn-outline-secondary btn-sm" style="position: absolute; right: 10px; top: 10px; z-index: 10;">
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
  // Define functions on the window object so they are globally accessible
  window.slugify = function(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  window.handleGithubClick = function(event) {
    // Prevent the page from adding "#" to the URL
    if (event) event.preventDefault();

    const titleInput = document.getElementById('post-title').value.trim();
    
    if (!titleInput) {
      alert("Please enter a title first!");
      return false;
    }

    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const timeStr = now.getHours().toString().padStart(2, '0') + ":" + 
                    now.getMinutes().toString().padStart(2, '0') + ":00 +0800";
    
    const slug = window.slugify(titleInput) || "new-post";
    const filename = dateStr + "-" + slug + ".md";
    
    const org = "DemosAI-Foundation";
    const repo = "Blog";
    
    const template = "---\n" +
      "title: " + titleInput + "\n" +
      "date: " + dateStr + " " + timeStr + "\n" +
      "categories: [Guestpost]\n" +
      "tags: [ai, guestpost, open-source]\n" +
      "pin: false\n" +
      "image:\n" +
      "  path: https://picsum.photos/id/237/1200/630\n" +
      "  alt: Header image description\n" +
      "---\n\n" +
      "## Introduction\n" +
      "Write your content here.";

    const encodedTemplate = encodeURIComponent(template);
    const githubUrl = "https://github.com/" + org + "/" + repo + "/new/main/_posts?filename=" + filename + "&value=" + encodedTemplate + "&message=guest-post: " + encodeURIComponent(titleInput);

    // Open in new tab
    window.open(githubUrl, '_blank');
  };

  window.copyToClipboard = function() {
    const code = document.getElementById('template-code').innerText;
    navigator.clipboard.writeText(code).then(() => {
      alert('Template copied!');
    });
  };
</script>
{% endraw %}