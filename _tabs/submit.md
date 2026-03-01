---
layout: page
title: Write for Us
permalink: /submit/
---

<div id="post-form">
  <p>Sign in with GitHub to submit a guest post for review.</p>
  <button id="login-btn" onclick="githubLogin()">Sign in with GitHub</button>

  <form id="submission-form" style="display:none" onsubmit="submitPost(event)">
    <label>Post Title *
      <input type="text" id="title" required />
    </label>
    <label>Your Name *
      <input type="text" id="author" required />
    </label>
    <label>Short Description *
      <input type="text" id="description" required />
    </label>
    <label>Tags (comma separated)
      <input type="text" id="tags" placeholder="linux, tutorial" />
    </label>
    <label>Post Content (Markdown) *
      <textarea id="content" rows="20" required></textarea>
    </label>
    <button type="submit">Submit for Review</button>
  </form>

  <div id="status"></div>
</div>

<script src="/assets/js/submit-post.js"></script>