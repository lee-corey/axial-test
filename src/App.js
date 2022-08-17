import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./screens/Home";
import Detail from "./screens/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
