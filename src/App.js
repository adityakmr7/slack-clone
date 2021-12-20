import "./App.css";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import ChatRoom from "./Pages/ChatRoom";
import { useAppState } from "./context/AppProvider";

function App() {
  const {dispatch} = useAppState();
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/room/:roomId" element={<ChatRoom/>}/>
      </Routes>
  );
}

export default App;
