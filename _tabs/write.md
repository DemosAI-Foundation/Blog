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
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const timeStr = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
    
    const org = "DemosAI-Foundation";
    const repo = "Blog";
    
    // We build the template as an array to guarantee line breaks (%0A)
    const templateLines = [
      "---",
      'title: "Welcome to DemosAI!"',
      `date: ${dateStr} ${timeStr}:00 +0000`,
      "categories: [Artificial general intelligence]",
      "tags: [agi, ai, news, open-source]",
      "pin: false",
      "---",
      "",
      "## Lorem ipsum",
      "Lorem ipsum",
      ""
    ];

    // Join with a real newline character
    const template = templateLines.join("\n");
    const encodedTemplate = encodeURIComponent(template);
    
    const githubUrl = `https://github.com/${org}/${repo}/new/main/_posts?filename=${dateStr}-guest-post.md&value=${encodedTemplate}&message=guest-post:%20new%20contribution`;

    const linkEl = document.getElementById('gh-link');
    const loaderEl = document.getElementById('gh-loader');

    if (linkEl && loaderEl) {
      linkEl.href = githubUrl;
      linkEl.style.display = 'inline-block';
      loaderEl.style.display = 'none';
    }
  }

  loadGithubLink();
  document.addEventListener('pjax:success', loadGithubLink);
</script>