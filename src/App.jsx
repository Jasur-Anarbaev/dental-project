import "./index.css";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Block } from "./pages/Block/Block";
import { Reviews } from "./pages/Reviews/Reviews";
import { Contact } from "./pages/Contact/Contact";
import { Notfound } from "./pages/Page not found/Notfound";
import { Services } from "./pages/Services/Services";
import { Ourspecialists } from "./pages/Our specialists/Ourspecialists";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Ourspecialists" element={<Ourspecialists />} />
        <Route path="/notfound" element={<Notfound />} />
        <Route path="/block" element={<Block />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
