import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/service" element={<Services />} />
      <Route path="/contact" element={<Contacts />} />
    </Routes>
  );
};

export default AppRoutes;
