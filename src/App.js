import "./App.css";
import Payment from "./Components/Payment/Payment";
import Navbar from "./Components/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import SignUp from "./Components/Authentication/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
