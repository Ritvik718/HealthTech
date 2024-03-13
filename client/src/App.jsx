import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
// import "./App.css ";
import Login from "./components/Login/Login";
// import Register from "./components/Register/Register";
import Signup from "./components/Signup/Signup";
import Userinputs from "./components/Userinputs/Userinputs";
import Recommendation from "./components/Recommendation/Recommendation";

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userinputs" element={<Userinputs />} />
          <Route path="/recommendation" element={<Recommendation />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
