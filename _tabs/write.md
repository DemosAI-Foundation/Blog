---
layout: page
title: Write
icon: fas fa-pen-nib
order: 5
---

To contribute a post to the **DemosAI-Foundation** blog, use the button below.

### Quick Guide:
1. **Login:** You'll need a GitHub account.
2. **Write:** Change the title and add your text below the header lines (`---`).
3. **Submit:** Click **"Commit changes"** and then **"Create Pull Request"**.

<div id="submission-box" style="margin: 2rem 0; padding: 20px; border: 1px solid #333; border-radius: 8px; text-align: center;">
  <p>Preparing your GitHub editor...</p>
</div>

<script>
  (function() {
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
    // Note the 'message' parameter—this helps your Auto-Merge Action identify the post!
    const githubUrl = `https://github.com/${org}/${repo}/new/main/_posts?filename=${dateStr}-guest-post.md&value=${encodedTemplate}&message=guest-post:%20new%20contribution`;

    document.getElementById('submission-box').innerHTML = `
      <a href="${githubUrl}" class="btn btn-primary" target="_blank" style="text-decoration: none; font-weight: bold;">
        <i class="fab fa-github"></i> Open Editor on GitHub
      </a>
    `;
  })();
</script>