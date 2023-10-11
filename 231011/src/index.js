import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import app from './fBase.js'
import 'normalize.css';
import './index.css'
import { AuthContextProvider } from './context/AuthContext';

console.log(app);


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
);