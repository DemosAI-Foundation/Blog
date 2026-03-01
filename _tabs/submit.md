---
layout: page
title: Write for Us
permalink: /submit/
---

Fill in the form below and your post will be submitted for review.

<form id="submission-form" onsubmit="submitPost(event)">
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
  <button type="submit">Submit for Review →</button>
</form>

<div id="status"></div>

<script src="/assets/js/submit-post.js"></script>