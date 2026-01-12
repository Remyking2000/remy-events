import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Developer signature
console.log(
  "%c🚀 Remy Events",
  "color: #2563eb; font-size: 24px; font-weight: bold;"
);
console.log(
  "%cDeveloped by Remy and Saitoti",
  "color: #059669; font-size: 14px; font-weight: 500;"
);
console.log(
  "%cContact: remyevents@gmail.com",
  "color: #6b7280; font-size: 12px;"
);

createRoot(document.getElementById("root")!).render(<App />);
