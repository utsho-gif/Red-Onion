import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Heade from "./Pages/Shared/Header/Heade";
import Breakfasts from "./Pages/Home/Breakfasts/Breakfasts";
import Lunches from "./Pages/Home/Lunches/Lunches";
import Dinners from "./Pages/Home/Dinners/Dinners";

function App() {
  return (
    <div className="App">
      <Heade></Heade>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}>
          <Route path="/home/breakfast" element={<Breakfasts></Breakfasts>}></Route>
          <Route path="/home/lunch" element={<Lunches></Lunches>}></Route>
          <Route path="/home/dinner" element={<Dinners></Dinners>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
