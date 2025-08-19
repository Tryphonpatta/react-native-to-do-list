# React Native Setup with Node.js and twrnc

This guide explains how to create a React Native app using **Node.js** and **Expo**, and set up **twrnc** (Tailwind for React Native).

---

## Prerequisites

- **Node.js** (LTS recommended, ≥16.x)
  [Download Node.js](https://nodejs.org)
  Check installation:

  ```bash
  node -v
  npm -v
  ```

- **npm** (comes with Node.js) or **yarn** (optional)
- **Expo Go app** (for running on your phone)

  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

---

## 1. Create a new React Native project

```bash
expo init --npm
```

---

## 2. Go to React Native directory

```bash
cd ...
```

---

## 3. Install twrnc (Tailwind for React Native)

```bash
npm install twrnc
```

## 4. Start development server

```bash
npm start
```

- Scan the QR code with **Expo Go** to see the app.
