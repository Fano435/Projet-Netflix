import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Détails from "./pages/Détails-films";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="page" element={<Détails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
