import "./App.css";
import Payment from "./Components/Payment/Payment";
import ProceedAndBack from "./Components/ProceedAndBack/ProceedAndBack";
import Navbar from "./Components/Shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Payment />
      <ProceedAndBack />
    </div>
  );
}

export default App;
