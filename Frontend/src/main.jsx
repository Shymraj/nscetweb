import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/poppins/800.css';
import '@fontsource/manrope/700.css';
import '@fontsource/alegreya-sans-sc/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import App from './App.jsx';
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);