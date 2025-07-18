# API Endpoints

This repository contains static web assets for various small projects. Several files reference external services and APIs. The following endpoints were found in the codebase.

## DareDeck (old)
- `https://api.apispreadsheets.com/data/HaJq0aukSZemyk7U/` – used in `daredeck_old/index.html` to retrieve leaderboard data.
- `https://docs.google.com/forms/d/e/1FAIpQLSe4kJnSwFDUefNOQzVsm-XHkzRvF5-dKE0KHbjrPWlgc_u97g/formResponse` – form submission target in `daredeck_old/index.html` and `form.html`.
- `https://n8n.oakljen.com` – linked in `daredeck_old/old_index.html`.

## Location Game
The file `location-game/script.js` includes a Firebase configuration for project `location-81172`:
```
const firebaseConfig = {
  apiKey: "AIzaSyDszjPNZDTZBNHc_Vfl5RrRt7ycpnLNBFI",
  authDomain: "location-81172.firebaseapp.com",
  projectId: "location-81172",
  storageBucket: "location-81172.firebasestorage.app",
  messagingSenderId: "199121467881",
  appId: "1:199121467881:web:c8b2569016b1b581a33378"
};
```
These values indicate the app communicates with Firebase services (Auth and Firestore) using the standard Google API endpoints.

## Onshot React App
Compiled assets under `onshot/assets` contain references to React’s error documentation and Firebase authentication endpoints, e.g. strings such as `https://react.dev/errors/` and `https://securetoken.google.com/`.

## Miscellaneous
- The repo redirects `redirect.txt` to `https://oakljen.com/linktree`.
- `linktree.html` links to several external profiles such as `https://github.com/oakljen` and `https://oakljen.com/whatsapp`.

---
These are the notable API or external service endpoints referenced in this project based on the available source files.
