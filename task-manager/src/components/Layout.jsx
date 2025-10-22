import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <Navbar
      brand="TaskApp"
      links={[
        { label: "Tasks", href: "/" },
        { label: "API Data", href: "/api" },
      ]}
    />
    <main className="flex-grow container mx-auto p-6">{children}</main>
    <Footer />
  </div>
);

export default Layout;
