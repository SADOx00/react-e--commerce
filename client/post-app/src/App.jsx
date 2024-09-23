import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import BillPage from "./pages/BillPage";
import CustomersPage from "./pages/CustomersPage";
import Statistic from "./pages/Statistic";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/bills" element={<BillPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/statistic" element={<Statistic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
