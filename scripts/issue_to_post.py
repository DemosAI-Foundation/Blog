import os
import re
import subprocess
from datetime import datetime
from slugify import slugify

def extract_field(body: str, label: str) -> str:
    pattern = rf"### {re.escape(label)}\s*\n+(.+?)(?=\n+###|\Z)"
    match = re.search(pattern, body, re.DOTALL)
    return match.group(1).strip() if match else ""

number = os.environ["DISCUSSION_NUMBER"]
title  = os.environ["DISCUSSION_TITLE"]
body   = os.environ["DISCUSSION_BODY"]
repo   = os.environ["REPO"]

title       = extract_field(body, "Post Title") or title
description = extract_field(body, "Short Description")
tags_raw    = extract_field(body, "Tags")
author      = extract_field(body, "Your Name") or "Guest"
content     = extract_field(body, "Post Content (Markdown)")

today    = datetime.utcnow().strftime("%Y-%m-%d")
time_now = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")
slug     = slugify(title)
filename = f"_posts/{today}-{slug}.md"

tags_list = "\n".join(
    f"  - {t.strip()}" for t in tags_raw.split(",") if t.strip()
)

post_content = f"""---
title: "{title}"
date: {time_now} +0000
author: {author}
description: "{description}"
tags:
{tags_list}
comments: true
---

{content}
"""

os.makedirs("_posts", exist_ok=True)
with open(filename, "w") as f:
    f.write(post_content)

branch = f"post/discussion-{number}-{slug}"

subprocess.run(["git", "config", "user.name",  "github-actions[bot]"], check=True)
subprocess.run(["git", "config", "user.email", "github-actions[bot]@users.noreply.github.com"], check=True)
subprocess.run(["git", "checkout", "-b", branch], check=True)
subprocess.run(["git", "add", filename], check=True)
subprocess.run(["git", "commit", "-m", f"feat: add guest post '{title}' (discussion #{number})"], check=True)
subprocess.run(["git", "push", "origin", branch], check=True)

from github import Github

g       = Github(os.environ["GITHUB_TOKEN"])
gh_repo = g.get_repo(repo)

pr = gh_repo.create_pull(
    title=f"Guest Post: {title}",
    body=(
        f"Automatically generated from discussion #{number}.\n\n"
        f"**Author:** {author}\n"
        f"**Description:** {description}\n\n"
        f"Review the post and merge to publish."
    ),
    head=branch,
    base="main",
)

print(f"Pull request created: {pr.html_url}")

