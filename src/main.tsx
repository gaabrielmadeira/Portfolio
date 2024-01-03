import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AnimationProvider } from "./providers/animationContext/animationContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AnimationProvider>
      <App />
    </AnimationProvider>
  </React.StrictMode>,
)
