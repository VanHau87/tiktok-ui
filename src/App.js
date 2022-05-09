import { BrowserRouter, Routes, Route } from "react-router-dom";
import Following from "./pages/Following";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/following" element={<Following />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
