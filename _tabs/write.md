---
layout: page
title: Write
icon: fas fa-pen-nib
order: 5
---

To contribute to **DemosAI-Foundation**, use the button below. This will open the GitHub editor with our official post template.

<div id="submission-box" style="margin: 2rem 0; padding: 40px; border: 2px dashed #666; border-radius: 12px; text-align: center;">
  <a id="gh-link" href="#" class="btn btn-primary btn-lg" style="display: none; text-decoration: none;">
    <i class="fab fa-github"></i> Open Editor on GitHub
  </a>
  <p id="gh-loader">Loading your secure editor link...</p>
</div>

<script>
  function loadGithubLink() {
    // Wrap in a small timeout to ensure Chirpy has rendered the HTML
    setTimeout(() => {
      const linkEl = document.getElementById('gh-link');
      const loaderEl = document.getElementById('gh-loader');

      if (!linkEl || !loaderEl) {
        console.log("Elements not found yet, retrying...");
        return; 
      }

      const now = new Date();
      const dateStr = now.toISOString().split('T')[0];
      const timeStr = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
      
      const org = "DemosAI-Foundation";
      const repo = "Blog";
      
      const templateLines = [
        "---",
        'title: "Welcome to DemosAI!"',
        `date: ${dateStr} ${timeStr}:00 +0000`,
        "categories: [Artificial general intelligence]",
        "tags: [agi, ai, news, open-source]",
        "pin: false",
        "---",
        "",
        "## Introduction",
        "The DemosAI Foundation journey is one of learning, teaching, and creation.",
        "",
        "## The Journey",
        "Join us in keeping intelligence in the hands of the people.",
        "",
        "```python",
        "# file: helloworld.py",
        "def hello_world():",
        "    print(\"Goodbye!\")",
        "```"
      ];

      const template = templateLines.join("\n");
      const encodedTemplate = encodeURIComponent(template);
      
      const githubUrl = `https://github.com/${org}/${repo}/new/main/_posts?filename=${dateStr}-guest-post.md&value=${encodedTemplate}&message=guest-post:%20new%20contribution`;

      linkEl.href = githubUrl;
      linkEl.style.display = 'inline-block';
      loaderEl.style.display = 'none';
      console.log("GitHub link loaded successfully.");
    }, 200); // 200ms delay is usually enough for Pjax/Chirpy
  }

  // Initialize on direct load
  if (document.readyState === "complete" || document.readyState === "interactive") {
    loadGithubLink();
  } else {
    document.addEventListener("DOMContentLoaded", loadGithubLink);
  }

  // Handle Chirpy's internal navigation (Pjax)
  document.addEventListener('pjax:success', loadGithubLink);
</script>