"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

<<<<<<< HEAD
  const hideLayoutRoutes = ["/login", "/join-as-trainer"];
  const hideLayout = hideLayoutRoutes.includes(pathname);
=======
 const hideLayout =
  pathname.startsWith("/profile") ||
  pathname.startsWith("/login") ||
  pathname.startsWith("/about");
>>>>>>> abc59070672bd4d755510fc257a89ab561c0606b

  return (
    <>
      {!hideLayout && <Navbar />}

      <main className="flex-1">
        {children}
      </main>

      {!hideLayout && <Footer />}
    </>
  );
}