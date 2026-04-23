import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.setTimeout(() => {
      const target = document.querySelector(location.hash);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
