/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
// Fonts are self-hosted (bundled woff2, latin subset picked by unicode-range)
// instead of the render-blocking Google Fonts stylesheet.
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/cormorant-garamond/wght.css";
import "@fontsource-variable/cormorant-garamond/wght-italic.css";
import "./index.css";
import App from "./App.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* LazyMotion + `m` components: only the DOM animation features are
        bundled (fades, slides, whileInView, AnimatePresence), not the full
        motion component with layout/drag. `strict` flags any stray motion.* */}
    <LazyMotion features={domAnimation} strict>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </LazyMotion>
  </StrictMode>,
);
