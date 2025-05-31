import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUS/AboutUs";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/ContactUs" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
