import "./App.css";
import Payment from "./Components/Payment/Payment";
import Navbar from "./Components/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Authentication/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
