# The Algorithmic Gaze Website

Static site built with Eleventy (11ty) using Liquid templates.

## Image Sizing Conventions

When adding images to collaboration posts, resize to these dimensions:

- **Cover/main image:** 1920px on the long side (landscape or portrait — CSS `object-fit: cover` handles cropping)
- **Thumbnail:** 600x600px square (center-cropped)
- **Inline/gallery images:** 1920px on the long side
- **Screenshots:** 1920px wide

Images go in `/static/media/{slug}/` with naming pattern `{slug}-cover.jpg`, `{slug}-thumb.jpg`, `{slug}-01.jpg` etc.
