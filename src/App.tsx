import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Men from "./pages/Men";
import Women from "./pages/Women";
import DeliveryInfo from "./pages/DeliveryInfo";
import WishList from "./pages/WishList";
import Payments from "./pages/Payments";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/cart"
        element={<Cart />}
      />
      <Route
        path="/men"
        element={<Men />}
      />
      <Route
        path="/women"
        element={<Women />}
      />
      <Route
        path="/deliveryInfo"
        element={<DeliveryInfo />}
      />
      <Route
        path="/wishList"
        element={<WishList />}
      />
      <Route
        path="/payments"
        element={<Payments />}
      />
      <Route
        path="/checkout"
        element={<CheckOut />}
      />
    </Routes>
  );
}

export default App;
