import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Wishlist from "./pages/Wishlist/Wishlist";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/wish" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
