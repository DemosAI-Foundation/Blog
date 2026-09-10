---
title: Reference a Dictionary for better LLM AI answers
slug: Reference a Dictionary for better LLM AI answers
date: 2026-02-28 14:30:00 +0800
categories: [Prompting]
tags: [prompt, llm, system]
pin: false
image:
  path: https://upload.wikimedia.org/wikipedia/commons/5/5c/Woerterbuchstapel_Langenscheidt.jpg
  alt: So easy a dog can do it
---

## Prompting for better answers
Recently stumbeled upon the study of "Prompt Repetition Improves Non-Reasoning LLMs" https://arxiv.org/html/2512.14982v1, which coincides
with my previous work of having the LLM "look up" a dictionary before answering. I made the LLM system perform a dictionary mutation on the words in the prompt and define them, and then reformulate as a question. I was was amazed about the quality of the expanded information the LLM presented compared to a regular prompt or question. I had it generate answers for things I consider myself very knowledgable in, eg. guitars to verify the facts. 

It is a bit convulated, and could easily be turned into a system but here is a step by step guide on how to improve your long, technical answers:

### 1. Write this before you original question or prompt, works best on shorter ones.
```
Define each word in the prompt based on its context, using a dictionary:
```
### 2. Then from that, still in the same context window have it generate a question
```
Based on these words and their definitions, create a lengthy and descriptive question:
```
### 3. Now one of the key parts, avoiding context rot
Open a new chat window or clear your context and propose the generated question.
The answers are very verbose but factually correct, as much as LLMs tend to be. 

It even managed to solve the infamous "strawberry double R" problem once upon a time. All without "thinking" tags etc.
