import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Basket from "./pages/Basket";
import Contact from "./pages/Contact";
import Connexion from "./pages/Connexion";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} exact />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/basket" element={<Basket />}/>
      </Route>
    </Routes>
  );
}

export default App;
