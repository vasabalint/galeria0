You can click the Actions tab at the top of your GitHub repository to watch the build process.
Once it turns green, your site will be live at the URL GitHub provides.
💡 Final Polish Checklist before Launching:
Images: Add your real artwork images to the public/paintings/ folder and update the filenames in src/data/paintings.ts.
Contact Form: Go to Web3Forms, get a free API key, and paste it into src/components/ContactSection.tsx (line 13) replacing "YOUR_ACCESS_KEY_HERE" so the contact form routes to your email


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
