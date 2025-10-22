import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TaskManager from "./components/TaskManager";
import ApiData from "./pages/ApiData"; // You’ll create this page next

import "./index.css"; // Tailwind styles

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<TaskManager />} />
          <Route path="/api" element={<ApiData />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
