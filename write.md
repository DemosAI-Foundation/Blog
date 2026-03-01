---
layout: page
title: Write a Guest Post
---

Welcome to the **DemosAI-Foundation** blog! You can contribute a post directly via GitHub. 

### How it works:
1. Click the button below.
2. Sign in to your GitHub account.
3. Edit the title and content in the editor (keep the dashed lines at the top!).
4. Click **"Commit changes"** at the bottom to submit your draft.

<div id="post-link-area" style="margin-top: 2rem;">
  <p>Generating your secure link...</p>
</div>

<script>
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0]; 
  const timeStr = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
  const fullDate = `${dateStr} ${timeStr}:00 +0000`;

  // Your Specific Info
  const org = "DemosAI-Foundation";
  const repo = "Blog";

  // The Chirpy Markdown Template
  const template = `---
title: "Your Post Title"
date: ${fullDate}
categories: [Guest]
tags: [contribution]
---

# My Awesome Post
Start writing your content here...`;

  const encodedTemplate = encodeURIComponent(template);
  const githubUrl = `https://github.com/${org}/${repo}/new/main/_posts?filename=${dateStr}-guest-post.md&value=${encodedTemplate}`;

  document.getElementById('post-link-area').innerHTML = `
    <a href="${githubUrl}" class="btn btn-outline-primary btn-lg" style="text-decoration: none;" target="_blank">
      <i class="fab fa-github"></i> Create Post on GitHub
    </a>
  `;
</script>