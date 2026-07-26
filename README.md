front-end-basics

A React + TypeScript frontend built to practice forms, API calls, and state wired up against the auth-basics backend to build a full, working login/register/dashboard flow.

Features

Login and registration forms with controlled inputs
Global auth session managed via React Context (AuthContext)
JWT-based session persisted in localStorage, with automatic session restoration and expiry handling on reload
Protected route guarding (ProtectedRoute) blocks unauthenticated access to /dashboard
Live profile data fetched from a real backend (auth-basics) and displayed on the dashboard

Stack: React, TypeScript, Vite, React Router

Pages

/login: authenticate against auth-basics
/register: create an account, then auto-logs in
/dashboard: protected route, shows the logged-in user's profile, includes logout

Setup

npm install
Ensure auth-basics is running locally (this app expects it at http://localhost:3000, with CORS enabled for http://localhost:5173)
npm run dev

Built as part of a self-directed full-stack learning path practice repo #3, Week 1-2.