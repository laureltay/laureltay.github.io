Adding images to your blog posts is easy! Here's everything you need to know.

## Step 1: Add Your Image

Place your image files in the `public/images/` directory. For example:

```
public/
  images/
    my-photo.jpg
    screenshot.png
```

## Step 2: Reference in Markdown

Use standard markdown image syntax:

```markdown
![Alt text description](/images/my-photo.jpg)
```

## Image Best Practices

### Alt Text
Always include descriptive alt text for accessibility:

```markdown
![A sunset over the ocean with orange and pink clouds](/images/sunset.jpg)
```

### File Naming
- Use lowercase letters and hyphens
- Be descriptive: `project-screenshot.png` not `img1.png`
- Common formats: `.jpg`, `.png`, `.gif`, `.webp`

### Image Size
- Optimize images before uploading (keep under 1-2MB)
- Use tools like [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
- Images automatically resize to fit the content width

## Example

Here's how you'd add an image to a blog post about a project:

```markdown
## My Cool Project

I built a weather app using React and a public API.

![Weather app showing current temperature and forecast](/images/weather-app.png)

The app displays current weather conditions and a 5-day forecast.
```

## Multiple Images

You can add as many images as you want in a post:

```markdown
![First image](/images/image1.jpg)

Some text between images...

![Second image](/images/image2.jpg)
```

That's it! Your images will display beautifully in your posts with automatic responsive sizing and rounded corners.
