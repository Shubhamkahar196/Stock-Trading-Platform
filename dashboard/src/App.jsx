import "./App.css";
import Home from "../src/components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Router>
            <Route  path="/" element={<Home/>}/>
          </Router>
        </Routes>
      </Router>
    </>
  );
}

export default App;
