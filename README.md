


<h1 align="center">
  Decode — AI Code Debugger & Explainer
</h1>

<p align="center">
  <img src="./image.jpg" alt="Decode Logo" width="500" />
</p>

<p align="center">
  ✨ Built for <b>InnoHack 2.0</b> — with AI, React, and Firebase ✨
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue" />
  <img alt="Made With React" src="https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react" />
  <img alt="Hosted on Vercel" src="https://img.shields.io/badge/Hosted%20on-Vercel-black?logo=vercel" />
  <img alt="Firebase" src="https://img.shields.io/badge/Backend-Firebase-orange?logo=firebase" />
  <img alt="Hugging Face" src="https://img.shields.io/badge/AI-HuggingFace-yellow?logo=huggingface" />
</p>

---

## 🚀 Overview

> **Decode** is a single-page AI web application that allows users to paste code, detect bugs, and get simplified explanations — all powered by **Hugging Face** and securely wrapped with **Firebase Authentication**.

---

## 🔑 Key Features

- 🔐 **User Authentication** (Firebase Login, Signup, Logout)
- 💻 **Code Editor** with live AI analysis
- 🤖 **Bug Detection & Explanation** using StarCoder via Hugging Face API
- ⚡ **Fast, Modular Architecture** with Vite + React
- ☁️ **Deployed on Vercel** with serverless functions
- 🎨 **No CSS frameworks** — all custom styles via `App.css` / `main.css`

---

## 🧩 Tech Stack

| Frontend      | Backend/API         | AI Layer          | Auth & DB      | Deployment   |
|---------------|---------------------|-------------------|----------------|--------------|
| React + Vite  | Vercel Serverless API (`analyze.js`) | Hugging Face (StarCoder) | Firebase (Auth + Firestore) | Vercel |

---

## 📁 Folder Structure

```
decode/
├── api/
│   └── analyze.js              # Serverless Hugging Face handler
├── public/
│   ├── index.html              # App metadata + Google Fonts
│   └── logo.png                # App logo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── CodeEditor.jsx
│   │   └── AIOutput.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── firebase/
│   │   └── config.js
│   ├── lib/
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── main.css
├── .env                        # Firebase + Hugging Face secrets
├── vercel.json                # SPA routing
├── vite.config.js             # Vite setup
├── bunfig.toml                # Bun config
├── package.json
└── README.md                  # This file
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/decode.git
cd decode
```

### 2. Install Dependencies

```bash
bun install     # or npm install / yarn
```

### 3. Create `.env`

```env
# Firebase
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Hugging Face (server-side only)
HF_API_KEY=your_huggingface_api_token
```

---

## 🧪 Local Development

```bash
bun run dev   # or npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ⬆️ Deployment on Vercel

1. Push the repo to GitHub
2. Connect to [vercel.com](https://vercel.com/)
3. Add the `.env` variables in **Project Settings → Environment Variables**
4. Trigger a deploy 🚀

Vercel uses `vercel.json` to redirect all SPA routes to `/`.

---

## 💡 Usage Flow

1. User signs up/logs in via Firebase
2. Pastes code into the editor
3. Hits **“Analyze Code”**
4. Frontend → `/api/analyze` → Hugging Face API
5. AI output (suggestions + explanation) appears in `AIOutput`

---

## 🔐 Security Notes

- Hugging Face token is stored **only in `.env`**
- Frontend Firebase vars use `VITE_` prefix (public keys only)
- No hardcoded secrets in client code

---

## 🎯 Goals for Expansion

- ⏱ Save code history per user (Firestore)
- 🌐 Support for multiple languages (auto-detect)
- 🪄 Better formatting & syntax highlighting
- 📊 Usage analytics and error tracking

---

## 👥 Meet the Team – Decode @ InnoHack 2.0

| Name                | Role                     |
|---------------------|--------------------------|
| **Utkarsh Vidwat**  | Full Stack / Firebase Lead |
| **Ganesh Beldar**   | React Developer          |
| **Sanskruti Neharkar** | AI Prompt & UX Engineer |
| **Prajakta Salunke** | Design & Documentation  |

---
