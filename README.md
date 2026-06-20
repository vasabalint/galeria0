Images: Add your real artwork images to the public/paintings/ folder and update the filenames in src/data/paintings.ts.
Contact Form: Go to Web3Forms, get a free API key, and paste it into src/components/ContactSection.tsx (line 13) replacing "YOUR_ACCESS_KEY_HERE" so the contact form routes to your email natively!

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/28eb439d-1b5f-48b6-99d3-1f8ec3243ee1

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
