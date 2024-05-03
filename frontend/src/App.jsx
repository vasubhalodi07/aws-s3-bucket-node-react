import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fetch from "./components/Fetch";
import Add from "./components/Add";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Fetch />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
