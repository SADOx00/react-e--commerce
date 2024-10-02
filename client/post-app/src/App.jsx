import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import BillPage from "./pages/BillPage";
import CustomersPage from "./pages/CustomersPage";
import Statistic from "./pages/Statistic";
import RegisterPage from "./pages/auth/RegisterPage";
import Login from "./pages/auth/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/cart"
          element={
            <RouteController>
              {" "}
              {/* NOTE - Heryere Böyle Kontrol Ekleyebilirsin */}
              <CartPage />
            </RouteController>
          }
        />
        <Route path="/bills" element={<BillPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

export const RouteController = ({ children }) => {
  if (localStorage.getItem("popUser")) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
