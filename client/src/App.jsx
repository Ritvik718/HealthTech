import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Userinputs from "./components/Userinputs/Userinputs";
import Recommendation from "./components/Recommendation/Recommendation";
import DiseasePage from "./components/Diseases/Diseases";
import FindDoctorPage from "./components/Doctor/FindDoctorPage";
import DoctorDetailsPage from "./components/Doctor/DoctorDetailsPage"; // Import DoctorDetailsPage

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
          <Route path="/diseases" element={<DiseasePage />} />
          <Route path="/findadoctor" element={<FindDoctorPage />} />
          <Route path="/doctor/:id" element={<DoctorDetailsPage />} />{" "}
          {/* Route for DoctorDetailsPage */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
