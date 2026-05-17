# LIVINGLYPH

LIVINGLYPH is an art project born from the words "Living" and "Glyph."

文字を、情報を伝えるためだけの記号ではなく、余白・感情・存在を持つ生命体として扱うブランドサイトです。

## File Structure

```text
.
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── vercel.json
└── assets
    ├── css
    │   └── styles.css
    ├── icons
    │   └── instagram.svg
    ├── images
    │   ├── bengal-tiger-story.png
    │   ├── bengal-tiger.png
    │   ├── coming-soon.png
    │   ├── livinglyph-logo.png
    │   ├── process-composite.png
    │   ├── process-final.png
    │   ├── process-photo.png
    │   ├── tatsunootoshigo.png
    │   ├── tiger-background.png
    │   └── uroboros.png
    ├── video
    │   └── livinglyph.mp4
    └── js
        └── app.js
```

## Local Preview

This is a static site, so it can be opened directly in a browser.

```bash
open index.html
```

For a closer production-like preview, run a simple local server:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Deploy to Vercel

1. Create a GitHub repository.
2. Push this folder to the `main` branch.
3. In Vercel, choose **Add New Project**.
4. Import the GitHub repository.
5. Use these settings:
   - Framework Preset: `Other`
   - Build Command: leave empty
   - Output Directory: leave empty or use `.`
   - Root Directory: `.`
6. Deploy.

After this, every push to `main` will trigger a new production deployment.

## Custom Domain

Recommended primary domain:

```text
www.livinglyph.com
```

Use `livinglyph.com` as the redirect source and redirect it to `www.livinglyph.com`.

In Vercel:

1. Open the project.
2. Go to **Settings → Domains**.
3. Add `www.livinglyph.com`.
4. Add `livinglyph.com`.
5. Set `www.livinglyph.com` as the primary domain.
6. Redirect `livinglyph.com` to `www.livinglyph.com`.

DNS example:

```text
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns-0.com
```

If Vercel shows different recommended values in the Domains screen, use the values shown by Vercel.

## Production Checklist

- Hero MP4 loops and plays inline.
- `JP / EN` switching works and persists after reload.
- SHOP opens `https://livinglyph.official.ec/`.
- Instagram opens `https://www.instagram.com/livinglyph.art`.
- Hamburger menu works on mobile.
- Gallery images load without 404s.
- `© LIVINGLYPH` is visible.
- `robots.txt` and `sitemap.xml` are accessible.
- `http://livinglyph.com` redirects to HTTPS.
- `livinglyph.com` redirects to `www.livinglyph.com`.

## Performance Note

The hero uses `assets/video/livinglyph.mp4` with `autoplay`, `muted`, `loop`, and `playsinline`, keeping the first view lighter and smoother than the original GIF.
