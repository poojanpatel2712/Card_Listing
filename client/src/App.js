import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All from "./components/cards/All";
import Login from "./components/login/Login";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getById } from "./redux/user/userActions";

function App() {

  const [id, setId] = useState();
  useEffect(() => {
    if (localStorage.id) {
      console.log(localStorage.id);
      setId(localStorage.id);
    }
  }, [localStorage,setId])
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/Your" element={<Your />} /> */}
          <Route path="/:type" element={<Home id={id} />} />
          {/* <Route path="/Blocked" element={<Blocked />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
