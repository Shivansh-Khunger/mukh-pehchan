import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Forms from "./Components/Form";
import "./index.css";
import Home from "./Pages/Home";
import AddImage from "./Components/AddImage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
