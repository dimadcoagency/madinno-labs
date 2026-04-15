# MADINNO LABS — Website

Official website for **MADINNO LABS** — Making Dynamic Innovation.

A Filipino-built digital agency combining creative design and modern software development.

## Project Structure

```
madinno-labs/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Portfolio, modal, nav, scroll animations
├── images/
│   ├── favicon.svg     # Infinity logo favicon
│   ├── founder.jpg     # Founder photo
│   ├── project-grabmedia.jpg
│   └── project-businessclass.jpg
├── vercel.json         # Vercel deployment config
├── .gitignore
└── README.md
```

## Deployment to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
cd madinno-labs
vercel
```

### Option 2: GitHub + Vercel
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Deploy — done

### Connect Custom Domain
1. In Vercel dashboard → Project → Settings → Domains
2. Add `madinnolabs.com` (or your domain)
3. Update DNS at your registrar:
   - **A Record**: `76.76.21.21`
   - **CNAME**: `cname.vercel-dns.com` (for www subdomain)

## Adding New Portfolio Projects

In `js/main.js`, add a new object to the `projects` array:

```javascript
{
  id: 7,
  cat: 'web',                    // web | app | creative | software
  title: 'Project Name',
  desc: 'Description of the project...',
  client: 'Client Name',
  duration: '3 Weeks',
  tech: 'React, Node.js',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  color: 'var(--teal)',          // fallback color if no image
  img: 'images/project-name.jpg', // 1600x1000px recommended
  link: 'https://live-project.com'
}
```

## Brand Colors

| Name   | Hex     | Use               |
|--------|---------|-------------------|
| Coral  | #FF7A45 | Energy, CTAs      |
| Gold   | #FFD447 | Optimism, accents |
| Lime   | #A6E064 | Growth, success   |
| Teal   | #2ED9C3 | Innovation, links |
| Sky    | #4DA6FF | Trust, info       |

## Fonts

- **Syne** — Headlines & display
- **DM Sans** — Body text & UI
- **JetBrains Mono** — Code, labels, tags

## Contact

- **Email**: hello@madinnolabs.com
- **Facebook**: [facebook.com/dimadcreatives](https://facebook.com/dimadcreatives)
- **Website**: [madinnolabs.com](https://madinnolabs.com)

---

© 2026 MADINNO LABS. Making Dynamic Innovation.
