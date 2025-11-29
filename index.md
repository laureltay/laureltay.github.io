---
title: Laurel Tay
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #0f172a;
      --card: rgba(255, 255, 255, 0.04);
      --card-border: rgba(255, 255, 255, 0.07);
      --text: #e2e8f0;
      --muted: #94a3b8;
      --accent: #7c3aed;
      --accent-2: #22d3ee;
      --glow: 0 10px 50px rgba(124, 58, 237, 0.25);
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      color: var(--text);
      background: radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.08), transparent 35%),
                  radial-gradient(circle at 80% 0%, rgba(34, 211, 238, 0.12), transparent 35%),
                  var(--bg);
      min-height: 100vh;
    }

    main {
      max-width: 1100px;
      margin: 0 auto;
      padding: 72px 24px 96px;
    }

    header {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 48px;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border-radius: 999px;
      border: 1px solid var(--card-border);
      background: var(--card);
      color: var(--muted);
      font-size: 14px;
      letter-spacing: 0.02em;
    }

    .eyebrow::before {
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: linear-gradient(120deg, var(--accent), var(--accent-2));
      box-shadow: 0 0 12px rgba(124, 58, 237, 0.6);
    }

    h1 {
      font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
      font-size: clamp(44px, 7vw, 64px);
      letter-spacing: -0.02em;
      margin: 0;
    }

    .lead {
      font-size: 18px;
      color: var(--muted);
      max-width: 720px;
      line-height: 1.6;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 18px;
      margin: 24px 0 48px;
    }

    .card {
      position: relative;
      padding: 24px;
      border-radius: 18px;
      border: 1px solid var(--card-border);
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent);
      backdrop-filter: blur(6px);
      box-shadow: var(--glow);
      transition: transform 180ms ease, border-color 180ms ease;
    }

    .card:hover {
      transform: translateY(-4px);
      border-color: rgba(124, 58, 237, 0.5);
    }

    .card h3 {
      margin-top: 4px;
      margin-bottom: 10px;
      font-size: 20px;
      letter-spacing: -0.01em;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 10px;
      background: rgba(124, 58, 237, 0.08);
      color: #d8b4fe;
      border-radius: 999px;
      font-size: 12px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .pill::before {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 12px rgba(124, 58, 237, 0.6);
    }

    .meta {
      color: var(--muted);
      font-size: 14px;
      margin: 0 0 8px;
    }

    .meta strong {
      color: var(--text);
    }

    .section-title {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 8px 0 16px;
      font-size: 15px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--muted);
    }

    .section-title::before {
      content: "";
      width: 36px;
      height: 1px;
      background: linear-gradient(90deg, var(--accent), transparent);
      opacity: 0.7;
    }

    .list {
      display: grid;
      gap: 12px;
      margin-bottom: 48px;
    }

    .list-item {
      padding: 18px 16px;
      border-radius: 14px;
      border: 1px solid var(--card-border);
      background: var(--card);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .list-item strong {
      letter-spacing: -0.01em;
    }

    .list-item span {
      color: var(--muted);
      font-size: 14px;
    }

    footer {
      margin-top: 16px;
      padding: 18px 0 8px;
      color: var(--muted);
      font-size: 14px;
      border-top: 1px solid var(--card-border);
    }

    a.button {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 16px;
      margin-right: 10px;
      border-radius: 12px;
      background: linear-gradient(120deg, rgba(124, 58, 237, 0.8), rgba(34, 211, 238, 0.8));
      color: white;
      text-decoration: none;
      font-weight: 600;
      box-shadow: var(--glow);
      transition: transform 160ms ease;
    }

    a.button.secondary {
      background: rgba(255, 255, 255, 0.08);
      color: var(--text);
      border: 1px solid var(--card-border);
      box-shadow: none;
    }

    a.button:hover { transform: translateY(-2px); }

    .actions { margin-top: 12px; display: flex; flex-wrap: wrap; }

    @media (max-width: 720px) {
      .list-item { flex-direction: column; align-items: flex-start; }
      .actions { gap: 8px; }
      .card { padding: 20px; }
    }
  </style>
</head>
<body>
  <main>
    <header>
      <div class="eyebrow">Personal blog + build log</div>
      <h1>Laurel Tay — building thoughtful products and writing about the process.</h1>
      <p class="lead">
        Welcome to a corner of the internet where experiments, essays, and shipping notes live together. 
        Expect ideas on design systems, developer tools, product strategy, and the occasional late-night build log.
      </p>
      <div class="actions">
        <a class="button" href="mailto:you@example.com">Say hello</a>
        <a class="button secondary" href="#writing">Skip to writing</a>
      </div>
    </header>

    <div class="section-title">What you'll find here</div>
    <div class="grid">
      <article class="card">
        <div class="pill">Essays</div>
        <h3>Opinionated takes on building software</h3>
        <p class="meta">Designing resilient systems, shipping faster with constraints, and lessons learned from shipping real products.</p>
      </article>
      <article class="card">
        <div class="pill">Build logs</div>
        <h3>Behind the scenes</h3>
        <p class="meta">Step-by-step notes from experiments, including what broke and what eventually worked.</p>
      </article>
      <article class="card">
        <div class="pill">Playground</div>
        <h3>Interactive demos and prototypes</h3>
        <p class="meta">Little tools, design explorations, and other curiosities that may grow into something bigger.</p>
      </article>
    </div>

    <div id="writing" class="section-title">Latest writing</div>
    <div class="list">
      <div class="list-item">
        <div>
          <strong>Designing guardrails for fast-moving teams</strong><br>
          <span>How to ship quickly without sacrificing quality.</span>
        </div>
        <span>August 2024</span>
      </div>
      <div class="list-item">
        <div>
          <strong>Build log #07: a better changelog workflow</strong><br>
          <span>Notes from turning a messy process into one-click releases.</span>
        </div>
        <span>July 2024</span>
      </div>
      <div class="list-item">
        <div>
          <strong>Interfaces that explain themselves</strong><br>
          <span>Simple patterns that help users feel confident the first time.</span>
        </div>
        <span>June 2024</span>
      </div>
    </div>

    <div class="section-title">Projects</div>
    <div class="grid">
      <article class="card">
        <h3>Compass</h3>
        <p class="meta">A lightweight system for documenting decisions that pairs well with any issue tracker.</p>
      </article>
      <article class="card">
        <h3>Tone Lab</h3>
        <p class="meta">Micro-tool for testing interface copy and seeing how small wording tweaks change user sentiment.</p>
      </article>
      <article class="card">
        <h3>Frameworkless UI kit</h3>
        <p class="meta">A set of small, accessible components built with modern CSS and zero dependencies.</p>
      </article>
    </div>

    <footer>
      Built with intention. If you want to collaborate or chat, drop a note at <a href="mailto:you@example.com" style="color: var(--accent-2); text-decoration: none;">you@example.com</a>.
    </footer>
  </main>
</body>
</html>
