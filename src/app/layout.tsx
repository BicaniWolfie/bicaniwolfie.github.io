"use client";
import { I18nextProvider } from "react-i18next";
import "./globals.css";
import i18n from "@/i18n";
import { Suspense } from "react";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Suspense>
          <I18nextProvider i18n={i18n}>
            <Navbar />
            <main className="h-screen w-screen">{children}</main>
          </I18nextProvider>
        </Suspense>
      </body>
    </html>
  );
}
