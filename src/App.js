import "./App.css";

import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import ChatRoom from "./Pages/ChatRoom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/room/:roomId" element={<ChatRoom/>}/>
      </Routes>
    </Router>
  );
}

export default App;
