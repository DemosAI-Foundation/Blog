---
layout: page
title: Write
icon: fas fa-pen-nib
order: 5
---

To contribute to **DemosAI-Foundation**, use the button below. This will open the GitHub editor with our official post template in a new tab.

<div id="submission-box" style="margin: 2rem 0; padding: 40px; border: 2px dashed #666; border-radius: 12px; text-align: center;">
  <a id="gh-link" href="#" class="btn btn-primary btn-lg" style="display: none; text-decoration: none;">
    <i class="fab fa-github"></i> Open Editor on GitHub
  </a>
  <p id="gh-loader">Loading your secure editor link...</p>
</div>

<script>
  function loadGithubLink() {
    setTimeout(() => {
      const linkEl = document.getElementById('gh-link');
      const loaderEl = document.getElementById('gh-loader');

      if (!linkEl || !loaderEl) return;

      const now = new Date();
      const dateStr = now.toISOString().split('T')[0];
      const timeStr = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
      
      const org = "DemosAI-Foundation";
      const repo = "Blog";
      
      const templateLines = [
        "---",
        'title: "Welcome!"',
        `date: ${dateStr} ${timeStr}:00 +0800`,
        "categories: [Artificial general intelligence]",
        "tags: [agi, ai, news, open-source]",
        "pin: true",
        "---",
        "",
        "## Introduction",
        "The DemosAI Foundation has been a long time brewing. The ever changing land scape of machine learning and global political atmosphere has built the roots what this journey will be founded on. The journey is of learning, teaching and creation of artificial intelligence systems and technology. DemosAI hopes to be a place of individuals who share same objectives, keeping intelligence in the hands of the people and helping them to utilize AI for a greater good of the human race.",
        "",
        "## The Journey",
        "With my personal skills built over the years creating and managing AI systems and computer systems in general, most of them not publicly available, I will try to do my best to steer the journey on it's destination. This endeavour was never to be taken alone, so hopefully some can join, even for a brief moment, on this journey. I invite you to go over to our forums to create discussion topics, or email me directly for a featured post on the blog.",
        "",
        "## What comes next",
        "",
        "I will write up blog posts of LLM technology and research that has been applied successfully in practice or theory.",
        "",
        "I will also start work on open sourcing artificial general intelligence design documents and mathematics.",
        "",
        "For now let the computer greet you goodbye!",
        "```python",
        "# file: helloworld.py",
        "def hello_world():",
        "    print(\"Goodbye!\")",
        "```"
      ];

      const template = templateLines.join("\n");
      const encodedTemplate = encodeURIComponent(template);
      
      const githubUrl = `https://github.com/${org}/${repo}/new/main/_posts?filename=${dateStr}-guest-post.md&value=${encodedTemplate}&message=guest-post:%20new%20contribution`;

      // Set link properties
      linkEl.href = githubUrl;
      linkEl.target = "_blank";         // Opens in new tab
      linkEl.rel = "noopener noreferrer"; // Security best practice
      
      // Toggle visibility
      linkEl.style.display = 'inline-block';
      loaderEl.style.display = 'none';
    }, 250);
  }

  loadGithubLink();
  document.addEventListener('pjax:success', loadGithubLink);
</script>