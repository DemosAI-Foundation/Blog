---
title: Help! People live inside my chatbot.
slug: peopleinsidellm
date: 2026-09-01 15:30:00 +0800
categories: [Code]
tags: [llm, model]
pin: false
image:
  path: https://demosai.org/assets/img/posts/pplwrk.png
  alt: "People are living inside your LLM?"
---

## People are living inside your AI chatbot
Well it's somewhat clickbait but somewhat true also. 

I have been studying language models for over 5 years by now and still there are something interesting to be found and improved upon.

My toy Aritifical Life simulation project Monad, relies heavily on LLM as output and uses text as input (for now). The LLM is a communication interface between it's deeper physics simulation of FPE, so I'm always looking for improvements in LLM technology also, doing active research by myself.

One of the larger downsides with LLM technology today is still how we actually use them, our writing. Writing can be opinionated, unstructured, biased and everything between heaven and earth.

On top of that there are very real statistics that impact your answer: For example if the date has a role to play you maybe statistically speaking to an summer intern instead of that top expert you wish would answer your question about your pet's symptoms. 

There has been done multiple studies and one of the better ones are about the Persona Penalty (https://arxiv.org/html/2508.04826v3)

The study shows that if you ask the LLM to act as a persona, it degrades performance on a task. EG. "You are a programmer" should be "Solve this programming task"

What this comes back to is that, yes real people are living inside your chatbot, at least the trail of them: how they write, how they act on the internet, what type of work they do, how they ask questions, how they answer them, what the pressed like on in A and B testing, how they engineered the LLM. 

In the mean while here's a short recipe for how to improve your answers in any chatbot:

1. Write: "I need to convert questions and statements into objective and non biased ones:

Exmaple: How do I do X thing the best way? To: How is X thing performed in the most optimal way?"

2. In same chat write:"transform this question based on above:[YOUR QUESTION]"

3. Paste the Question into a new chat, and put this before it: "Break down this statement into multiple sub problems:"

4. For each subproblem listed in the answer, start a new chat (Important!)

5. Paste all the answers you get into a new chat and this text:

"Synthesize the answers listed into one:
Where they overlap, merge
Where they disagree or differ, leave in, but rewrite to point out the contrasting views."

Style can be used for the final results to make it more readable, usually "Style should be very succinct." works the best to cut out verbosity, but keeping the details. If readability is preffered use Style: "Write the answer at an 8th-grade reading level"

Voila! You have an answer that has activated the expert people and avoided such pitfalls as Solomons paradox and multiple others.

Since I know not many people have the time of day, interest or the capability to perform such queries, and implementing best practices takes training and skill, but I feel that they should still benefit from such improvements, be they even how minor (but we are talking over 70% increase in some tasks), I've set out out to create such system and later also create a custom LLM with these already accounted for.

It will be a journey, but not a long one since I've already taught LLMs to speak proper finnish, sell and market things better and to identify objects properly.

The plan is already underway so results will be incoming in a month or two depending on health allowing.

Still exciting times for language models, even though they are soon to be phased out for even more stonger, self navigating and self improving systems.


