# Unity Threads

Boutique-style ecommerce storefront for an autism advocacy and activism focused clothing brand.

## Get started

### 1. Install dependencies (first time only)

```bash
npm install
```

### 2. Stop any other dev servers

If you’ve run `npm run dev` before, other terminals or tabs might still have a server running. Close those terminals or stop the process so only one dev server runs.

- **macOS/Linux:** In a terminal, run:
  ```bash
  pkill -f "next dev"
  ```
- Or close any terminal windows where you ran `npm run dev`.

### 3. Start the dev server

In the project folder, run:

```bash
npm run dev
```

Wait until you see something like:

```
✓ Ready in 1.2s
- Local: http://localhost:3000
```

### 4. Open the app in your browser

- Go to **http://localhost:3000** (or the port shown in the terminal, e.g. 3001 or 3002 if 3000 was in use).
- You should see the Unity Threads home page with the header, hero section, and footer.

### If you see “too many open files”

On macOS you can raise the limit and then start the dev server again:

```bash
ulimit -n 10240
npm run dev
```

### If the page is blank or errors

1. Make sure you’re using the **exact URL** from the terminal (e.g. `http://localhost:3000`).
2. Try a hard refresh: **Cmd+Shift+R** (Mac) or **Ctrl+Shift+R** (Windows/Linux).
3. Open the browser **Developer Tools** (F12 or right‑click → Inspect), check the **Console** tab for errors, and the **Network** tab to see if the page request returns 200 or an error.

## Scripts

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run start` — run production server (after `npm run build`)
- `npm run lint` — run ESLint
- `npm run test` — run Vitest tests
