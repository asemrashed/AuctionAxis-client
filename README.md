# AuctionAxis — Online Auction Platform 🎯

![PawMart Banner](https://github.com/asemrashed/AuctionAxis-client/blob/main/auction-axis.png?raw=true)

AuctionAxis is a modern web application where users can **sell products**, **place bids**, manage listings, and track all bidding activity.  
This project uses **React**, **Vite**, **Firebase**, **JWT**, **TailwindCSS**, **DaisyUI**, and integrates with a **Node.js/Express/MongoDB** backend.

---

## 🌐 Live Demo & Repositories

- **Live Frontend:** [https://auction-axis-client.vercel.app/](https://auction-axis-client.vercel.app/)  
- **Backend API:** [https://auction-axis-server.vercel.app/](https://auction-axis-server.vercel.app/)  
- **Client Repository:** [GitHub](https://github.com/asemrashed/AuctionAxis-client)

---

## ✨ Features

### Authentication & User Management
- Firebase Email/Password authentication  
- JWT-based secure routes  
- Protected dashboard routes for authenticated users  

### Product Management
- Add new products for auction  
- Edit and delete user-listed products  
- View your listed products  

### Auction & Bidding
- Place bids on available products  
- View all your bids  
- Delete any of your bids  

### User Experience
- Responsive design (desktop, tablet, mobile)  
- Modern and intuitive UI/UX  
- Real-time notifications with React Toastify  
- SweetAlert2 for modal confirmations  

---

## 🛠️ Tech Stack

| Layer | Technology | Description |
|-------|------------|-------------|
| **Frontend** | ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) React | UI component library |
| | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) Vite | Dev server & build tool |
| | ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) Tailwind CSS | Utility-first CSS framework |
| | ![DaisyUI](https://img.shields.io/badge/DaisyUI-FAF0CA?style=flat) DaisyUI | Tailwind component library |
| | ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white) React Router | Client-side routing |
| | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white) Axios | HTTP client |
| | ![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=flat&logo=react&logoColor=black) React Icons | Icon library |
| | ![SweetAlert2](https://img.shields.io/badge/SweetAlert2-FF3E00?style=flat) SweetAlert2 | Modals & alerts |
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) Node.js | Runtime environment |
| | ![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white) Express.js | Backend framework |
| | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) MongoDB | Database |
| **Authentication** | ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black) Firebase | Authentication service |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) Vercel | Hosting (frontend & backend) |

---

## 📦 Dependencies

### Production
```

@tailwindcss/vite
axios
daisyui
firebase
react
react-dom
react-icons
react-router
react-router-dom
sweetalert2
tailwindcss

```

### Dev
```

@eslint/js
@types/react
@types/react-dom
@vitejs/plugin-react
eslint
eslint-plugin-react-hooks
eslint-plugin-react-refresh
globals
vite

````

---

## 🚀 Getting Started (Run Locally)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/asemrashed/AuctionAxis-client.git
cd AuctionAxis-client
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in root:

```
VITE_apiKey=your_firebase_apiKey
VITE_authDomain=your_firebase_authDomain
VITE_projectId=your_firebase_projectId
VITE_storageBucket=your_firebase_storageBucket
VITE_messagingSenderId=your_firebase_messagingSenderId
VITE_appId=your_firebase_appId

VITE_BACKEND_URL=https://auction-axis-server.vercel.app
```

### 4️⃣ Run development server

```bash
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 🤝 Let's Connect

| Platform     | Link                                                                               |
| ------------ | ---------------------------------------------------------------------------------- |
| 🌐 Portfolio | [https://asemrashed.pages.dev/](https://asemrashed.pages.dev/)                     |
| 💼 LinkedIn  | [https://www.linkedin.com/in/asem-rashed](https://www.linkedin.com/in/asem-rashed) |
