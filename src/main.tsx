import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import PricingPage from "./pages/pricing.tsx";
import IntegrationPage from "./pages/Integration.tsx";
import LoginPage from "./pages/login.tsx";
import DemoPage from "./pages/Demo.tsx";
import ClickToInstagramAdsPage from "./pages/click-to-instagram-ads.tsx";
import { Navbar } from "./components/navbar";

// Home page component
function Home() {
  return (
    <div className="min-h-screen">
      <App />
    </div>
  );
}

// Pricing page component with navbar
function PricingRoute() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PricingPage />
    </div>
  );
}

// Integration page component with navbar
function IntegrationRoute() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <IntegrationPage />
    </div>
  );
}

// Login page component with navbar
function LoginRoute() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <LoginPage />
    </div>
  );
}

// Demo page component with navbar
function DemoRoute() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <DemoPage />
    </div>
  );
}

// Click-to-Instagram Ads page component without navbar
function ClickToInstagramAdsRoute() {
  return (
    <div className="min-h-screen">
      <ClickToInstagramAdsPage />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pricing",
    element: <PricingRoute />,
  },
  {
    path: "/integration",
    element: <IntegrationRoute />,
  },
  {
    path: "/login",
    element: <LoginRoute />,
  },
  {
    path: "/demo",
    element: <DemoRoute />,
  },
  {
    path: "/click-to-instagram-ads",
    element: <ClickToInstagramAdsRoute />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);