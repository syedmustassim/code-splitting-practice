import {lazy, Suspense} from "react"
import { Route, Routes } from "react-router-dom";
const Contacts = lazy(() => import("./pages/Contacts"));
const Home = lazy(() => import ("./pages/Home"));
const Products = lazy(() => import("./pages/Products")) ;
const Services = lazy(() => import("./pages/Services")) ;

const AppRoutes = () => {
  return (
    <Suspense fallback={<h2>...loading</h2>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/service" element={<Services />} />
      <Route path="/contact" element={<Contacts />} />
    </Routes>
    </Suspense>
  );
};

export default AppRoutes;
