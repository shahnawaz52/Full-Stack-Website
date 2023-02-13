import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FirebaseApp } from 'firebase/app';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjjBIu4g69a_Zx8C8WNpeuz8pgYjLoGpg",
  authDomain: "my-blog-7850e.firebaseapp.com",
  projectId: "my-blog-7850e",
  storageBucket: "my-blog-7850e.appspot.com",
  messagingSenderId: "697811561558",
  appId: "1:697811561558:web:c8cbd767fa13c33897dff7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);