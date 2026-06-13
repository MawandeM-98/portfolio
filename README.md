# Maawande Msomi Portfolio - Glassmorphism Theme

## How to Deploy & Host Your Projects

### Option 1: Local Testing
1. Save all files in the structure shown above
2. Open `index.html` in your browser
3. Navigate through the multi-page portfolio

### Option 2: Deploy for Free (Recommended)

#### Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your entire portfolio folder
3. Your site is live at `your-name.netlify.app`

#### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your project folder
3. Deploy in one click

#### GitHub Pages
1. Create repo `yourusername.github.io`
2. Push all files
3. Enable GitHub Pages in repo settings

## About Your Projects Being "Hosted"

**Current setup:** Project cards link to your GitHub repos (Option A)

**If you want to actually embed projects** (Option B):
- Each project needs to be deployed separately (Netlify/Vercel)
- Then update `projects.js` with the live demo URLs

Example after deploying a project:
```javascript
{
    title: "DigitBreaker",
    demo: "https://digitbreaker.netlify.app"  // Add this
}