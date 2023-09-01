import "./index.css";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Block } from "./pages/Block/Block";
import { Reviews } from "./pages/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/block" element={<Block />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
