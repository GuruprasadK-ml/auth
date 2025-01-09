import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryMaster from "./pages/CategoryMaster";
import ProductMaster from "./pages/ProductMaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategoryMaster/>}/>
        <Route path="/categories" element={<CategoryMaster />} />
        <Route path="/products" element={<ProductMaster />} />
      </Routes>
    </Router>
  );
}

export default App;
