import React from "react";
import { I18nextProvider } from "react-i18next";
import { Navbar } from "../components/Navbar";
import i18n from "../lib/i18n";
import "./Layout.css";
import "./tailwind.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>
    </I18nextProvider>
  );
}
