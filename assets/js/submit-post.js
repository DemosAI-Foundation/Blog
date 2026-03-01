const GITHUB_TOKEN = "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"; // fine-grained, issues-only on this repo
const GITHUB_OWNER = "DemosAI-Foundation";
const GITHUB_REPO  = "Blog";

async function submitPost(event) {
  event.preventDefault();
  setStatus("Submitting...", "info");

  const title       = document.getElementById("title").value.trim();
  const author      = document.getElementById("author").value.trim();
  const description = document.getElementById("description").value.trim();
  const tags        = document.getElementById("tags").value.trim();
  const content     = document.getElementById("content").value.trim();

  const body = [
    `### Post Title\n\n${title}`,
    `### Your Name\n\n${author}`,
    `### Short Description\n\n${description}`,
    `### Tags\n\n${tags}`,
    `### Post Content (Markdown)\n\n${content}`,
  ].join("\n\n");

  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/issues`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title:  `[POST] ${title}`,
        body,
        labels: ["post-submission"],
      }),
    }
  );

  if (res.ok) {
    document.getElementById("submission-form").style.display = "none";
    setStatus("🎉 Submitted! We'll review your post shortly.", "success");
  } else {
    setStatus("Submission failed. Please try again.", "error");
  }
}