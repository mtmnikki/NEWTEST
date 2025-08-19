# ClinicalRxQ Airtable Setup (Simple Guide)

This app is already connected to your “ClinicalRxQ Files” Airtable base.
You do NOT need to change code to use it. You only need to add your Airtable key as an environment variable.

What you will do:
1) Paste your Airtable key into a safe place in Vercel (or your computer for local use).
2) Deploy.

That’s it.

---

## 1) Your Airtable info

- Base ID: appuo6esxsc55yCgI
- API Key: patZD489KhUcFqxWN.202c504fb6ca866cbe365d974e319bddccb651e5be3800d6aaee1212c90137bb

Important: Do not paste your key into the source code. Only add it to an environment variable named AIRTABLE_API_KEY.

---

## 2) Add the key for local use (optional)

If you run the app locally:

- Create a file named `.env.local` in the project root.
- Put this line in it (replace YOUR_KEY with your actual Airtable key):

AIRTABLE_API_KEY=YOUR_KEY

Save the file. Do not commit it to Git.

---

## 3) Add the key in Vercel (recommended for launch)

- Open Vercel dashboard
- Select your project
- Go to: Settings → Environment Variables
- Add a new variable:
  - Name: AIRTABLE_API_KEY
  - Value: YOUR_KEY
  - Environment: Production (and Preview if you want)
- Click “Save” and redeploy

That’s it. The website will read the key at build time.

---

## 4) How the app uses Airtable (no action required)

- The app’s Airtable logic lives in `src/services/api/airtable.ts`.
- It already points to your base ID and uses your table and field IDs.
- The app only needs AIRTABLE_API_KEY to read data.

No screens inside the app ask for API keys. There’s nothing for you to configure in the UI.

---

## 5) Quick test after deploy

- Visit the site
- Log in or go to Programs
- You should see Programs load and program pages show their content tabs

If something doesn’t load, double‑check that AIRTABLE_API_KEY is present in Vercel’s Environment Variables, then redeploy.

---

## 6) Security note

Anyone with the deployed build can’t see your key if you only put it into Vercel’s Environment Variables. Never paste the key directly into the code files. If you need help, ask and we’ll do it for you.