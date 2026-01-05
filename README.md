# My GitHub Pages Blog

A simple, clean blog built with React, Vite, and GitHub Pages, inspired by the Anthropic newsroom design.

## Features

- Clean, minimal design
- Write posts in Markdown
- React components for fast, interactive UI
- Automatic date and category display
- Responsive layout
- Fast static site generation with Vite

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 3. Write a New Post

**Step 1:** Create a markdown file in `public/posts/` directory:

```bash
public/posts/my-new-post.md
```

**Step 2:** Add the post metadata to `src/posts.js`:

```javascript
{
  slug: 'my-new-post',
  title: 'My New Post',
  date: '2025-01-05',
  category: 'Tutorial',
  excerpt: 'A short description of your post'
}
```

**Step 3:** Write your content in the markdown file using standard markdown syntax.

### 4. Publish to GitHub Pages

**Step 1:** Enable GitHub Pages in your repository settings:
- Go to Settings → Pages
- Under "Build and deployment", select "GitHub Actions" as the source

**Step 2:** Push your changes to GitHub:

```bash
git add .
git commit -m "Add new blog post"
git push origin main
```

The GitHub Action will automatically build and deploy your site to `https://laureltay9.github.io`

## File Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages deployment
├── public/
│   └── posts/               # Your markdown blog posts
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Site header
│   │   └── Footer.jsx       # Site footer
│   ├── pages/
│   │   ├── Home.jsx         # Home page (lists posts)
│   │   └── Post.jsx         # Individual post page
│   ├── App.jsx              # Main app component
│   ├── App.css              # Styling
│   ├── main.jsx             # App entry point
│   └── posts.js             # Post metadata
├── index.html               # HTML template
├── package.json             # Dependencies
└── vite.config.js           # Vite configuration
```

## Writing in Markdown

Markdown is simple! Here are the basics:

- `# Heading 1`, `## Heading 2`, `### Heading 3`
- `**bold**` or `__bold__`
- `*italic*` or `_italic_`
- `[link text](URL)`
- `` `inline code` ``
- Code blocks with triple backticks
- Lists with `-` or `1.`

## Customization

### Change Colors & Styling

Edit `src/App.css` to customize colors, fonts, and spacing.

### Modify Components

Edit files in `src/components/` and `src/pages/` to change the structure and behavior.

### Update Site Title

Edit `src/components/Header.jsx` to change the site title.

### Customize Blog Description

Edit the blog description in `src/pages/Home.jsx`:

```javascript
<p className="blog-description">
  Your custom description here...
</p>
```

### Add Images to Posts

**Step 1:** Create the images directory and add your image:

```bash
mkdir -p public/images
# Add your images to public/images/
```

**Step 2:** Reference the image in your markdown:

```markdown
![Alt text description](/images/your-image.jpg)
```

Images will automatically resize to fit the content width with rounded corners.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Support

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
