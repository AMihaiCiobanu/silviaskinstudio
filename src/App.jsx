/** @format */

import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import * as analytics from "./utils/analytics";

const Home = lazy(() => import("./pages/Home"));
const Certificates = lazy(() => import("./pages/Certificates"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const AllProducts = lazy(() => import("./pages/AllProducts"));

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
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-butter text-charcoal">
          Loading…
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
