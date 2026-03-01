const GITHUB_TOKEN = "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"; // fine-grained, issues-only on this repo
const GITHUB_OWNER = "DemosAI-Foundation";
const GITHUB_REPO  = "Blog";
const CATEGORY_NAME = "Post Submissions";

async function graphql(query, variables = {}) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });
  return res.json();
}

async function getRepoAndCategoryId() {
  const data = await graphql(`
    query($owner: String!, $repo: String!) {
      repository(owner: $owner, name: $repo) {
        id
        discussionCategories(first: 20) {
          nodes { id name }
        }
      }
    }
  `, { owner: GITHUB_OWNER, repo: GITHUB_REPO });

  const repo       = data.data.repository;
  const category   = repo.discussionCategories.nodes.find(c => c.name === CATEGORY_NAME);
  return { repoId: repo.id, categoryId: category?.id };
}

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

  try {
    const { repoId, categoryId } = await getRepoAndCategoryId();

    if (!categoryId) {
      setStatus(`Could not find the "${CATEGORY_NAME}" discussion category.`, "error");
      return;
    }

    const data = await graphql(`
      mutation($input: CreateDiscussionInput!) {
        createDiscussion(input: $input) {
          discussion { url }
        }
      }
    `, {
      input: {
        repositoryId: repoId,
        categoryId,
        title: `[POST] ${title}`,
        body,
      }
    });

    if (data.data?.createDiscussion) {
      document.getElementById("submission-form").style.display = "none";
      setStatus("🎉 Submitted! We'll review your post shortly.", "success");
    } else {
      setStatus("Submission failed. Please try again.", "error");
    }
  } catch (e) {
    setStatus("Submission failed. Please try again.", "error");
  }
}

function setStatus(msg, type) {
  const el = document.getElementById("status");
  el.textContent = msg;
  el.className = `submit-status submit-status--${type}`;
}