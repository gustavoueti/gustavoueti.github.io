const e=`---
title: "Meta Post: Everything about this project"
date: "2026-04-01"
slug: "meta-post"
tags: ["blog", "first-post"]
excerpt: "Who I am, why I built this, and the stack behind it — all in one post."
published: true
---

## Hey, I'm Gustavo — but you can call me Ueti

Brazilian, data engineer by trade and curious person by nature. I spend most of my day thinking about data pipelines, but I also think about coffee, capybaras, and why my code works in dev but not in prod.

This is my corner of the internet. No brand, no personal marketing strategy — just me writing about things I find interesting. If you're here, welcome.

---

## My honest motivations

I'm a data engineer. My day-to-day revolves around pipelines, data quality, orchestration, distributed systems — that world. Nowadays, I feel fairly comfortable there.

But that wasn't true for most of my journey. I constantly felt lost in the tech world. That's tough, because tech is huge and I never knew exactly which path I wanted to follow — and honestly, I'm not sure if anyone does.

Happily, during my first degree I ended up at a tech startup and got my first opportunity as an actual Data Engineer. The startup offered projects and solutions for marketing, so I started my journey learning mostly about analytics and how to work with big data in that industry.

That was the best thing that could have happened to me. I met a lot of competent engineers who taught me so much, and I'm deeply grateful for it.

So, my first motivation to start this blog: <span style="color: var(--color-accent)"><strong>Gratitude</strong></span>. I try to give back everything others gave to me through the colleagues I meet along the way, by teaching everything I know as best I can. But I see this website as a chance to reach anyone interested, anywhere in the world — and it will last forever.

My second motivation is a side of myself: <span style="color: var(--color-accent)"><strong>curiosity</strong></span>. I've spent a lot of time studying and working in data engineering and never really stopped to explore web development — I like to use my free time to relax, play games, and do sports. But I felt that now was a good time to start this new learning path. Even if I'm not going to go too deep, I want to at least see how some of the stacks I always heard about really work.

Finally, my third motivation: <span style="color: var(--color-accent)"><strong>personal archive</strong></span>. Writing is how I consolidate what I learn — and I learn something new every day. I just want to document it my way and share it along the way. This is a place of my own. No algorithm, no feed, no forced engagement. Just text.

---

## The stack — and why each choice

### React

I started my career at the same time React began to gain popularity. I always heard about it but never had time to actually build something with it or study it properly, even though I had genuine curiosity about how it works. So, here it is — my first real shot at this tool.

The core idea is simple: you describe *how the interface should look* given a state, and React takes care of updating whatever needs to change in the browser. Instead of manipulating the DOM by hand, you just say "when this changes, show that."

### Vite

It's the build tool. Think of it like a transformation job: it takes your \`.jsx\`, \`.css\`, and other files, and returns an optimized bundle of static files the browser can run. For someone coming from data engineering, it's analogous to a build process that produces a production-ready artifact.

### React Router

Here I learned something I didn't know: in React applications, there's no real "navigating to another page" — it's all a single HTML file. React Router simulates that navigation inside the browser, swapping the components on screen as the URL changes.

One important detail: we're using \`HashRouter\`, which puts a \`#\` in the URL (\`uetistack.dev/#/post/slug\`). That exists because GitHub Pages can't handle server-side routes — without the \`#\`, refreshing the page would return a 404.

### gray-matter + react-markdown

Posts are plain \`.md\` files with a YAML header at the top:

\`\`\`markdown
---
title: "Post title"
date: "2026-04-02"
tags: ["example"]
---

Markdown content here.
\`\`\`

\`gray-matter\` reads that header and extracts the metadata. \`react-markdown\` renders the content as HTML. Together they turn a plain text file into a readable page.

### GitHub Pages

Free hosting from GitHub itself. But there's one relevant detail: it only serves **static files** — it doesn't execute server-side code. Perfect for this project.

---

## No backend. Why?

That was one of the things that surprised me most in the process. I assumed every web project would have some server running — even if just a simple Express app.

But in a blog, there's nothing dynamic happening on the server. The posts are always the same for everyone, there's no authentication, no database being queried in real time. Vite generates everything at build time, and GitHub Pages delivers the ready-made files.

It's literally the equivalent of an S3 bucket with static website hosting enabled. For a blog, it's more than enough — and it costs nothing.

---

## What's coming

I plan to write about:

- Data engineering: pipelines, data quality, tooling
- Web development: my impressions from building this project
- Thoughts on career and continuous learning

If you're curious about what happens before the data hits the dashboard — there might be something here for you.

See you in the next post.
`;export{e as default};
