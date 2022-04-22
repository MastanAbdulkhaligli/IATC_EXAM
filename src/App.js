import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cryptos from "./pages/Cryptos";
import Trends from "./pages/Trends";
import Navbar from "./components/Navbar";
import TaskSeven from "./pages/TaskSeven";
import TaskSevenContinue from "./pages/TaskSevenContinue";
import { useState } from "react";

import { Context } from "./Context";

function App() {
  const [value, setValue] = useState([
    {
      id: "",
      image: "",
      name: "",
      price: "",
    },
  ]);

  return (
    <div>
      <Context.Provider value={(value, setValue)}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cryptos" element={<Cryptos />} />
            <Route path="/trends" element={<Trends />} />
            <Route path="/taskseven" element={<TaskSeven />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
