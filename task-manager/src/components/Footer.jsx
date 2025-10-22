import React from "react";

const Footer = () => (
  <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 text-center py-4 mt-10">
    <p>
      &copy; {new Date().getFullYear()} Task Manager App. All rights reserved.
    </p>
  </footer>
);

export default Footer;
