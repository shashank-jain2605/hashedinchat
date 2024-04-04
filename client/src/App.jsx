import { useState } from "react";
import Login from "./pages/login/Login";
import SideBar from "./pages/home/SideBar";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Caching from "./pages/Caching";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/caching" element={<Caching />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
