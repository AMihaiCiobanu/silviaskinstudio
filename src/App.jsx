/** @format */

import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Certificates from "./pages/Certificates";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import AllProducts from "./pages/AllProducts";
import * as analytics from "./utils/analytics";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Check if user has already consented and initialize GA
    analytics.checkConsentAndInitialize();
  }, []);

  useEffect(() => {
    // Track page view on route change (only if GA is initialized)
    analytics.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="products" element={<AllProducts />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
      </Route>
    </Routes>
  );
}

export default App;
