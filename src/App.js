import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} exact />
      </Route>
    </Routes>
  );
}

export default App;
