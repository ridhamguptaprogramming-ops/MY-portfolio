# Fix Build Error - Missing Hero.mp4

## Steps to complete:
- [x] Analyze the issue (Hero.mp4 missing, use hero.png instead)
- [x] Edit Hero.jsx: Replace video import with image import, replace `<video>` with `<img>`
- [x] Test: Run `npm run build` to verify no more import errors

---

# Fix Render Deployment - No Open Ports Detected

## Steps to complete:
- [x] Analyze the issue (Vite preview server binds to localhost, Render scans 0.0.0.0)
- [x] Edit vite.config.js: Add `server` and `preview` config to bind to `0.0.0.0` and respect `PORT` env variable
- [x] Edit package.json: Update `start` script to use `--host 0.0.0.0 --port $PORT`
- [x] Test: Run `npm run build` to verify build still succeeds

