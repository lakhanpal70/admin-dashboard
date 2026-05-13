import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
=======

>>>>>>> abc59070672bd4d755510fc257a89ab561c0606b
import LayoutWrapper from "./components/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Top Trainer",
  description: "Find the best trainers for your growth",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
<<<<<<< HEAD
        <LayoutWrapper>{children}</LayoutWrapper>
=======
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
>>>>>>> abc59070672bd4d755510fc257a89ab561c0606b
      </body>
    </html>
  );
}