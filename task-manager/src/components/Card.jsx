import React from "react";

const Card = ({ children, header }) => (
  <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
    {header && <h3 className="text-xl font-semibold mb-4">{header}</h3>}
    {children}
  </div>
);

export default Card;
