import './App.css';
import "./index.css"

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import EditProfile from './pages/EditProfile';
import Homepage from './pages/Homepage';
import Transaction_1 from './pages/Transaction-1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register  />} />
        <Route path="/editprofile" element={<EditProfile  />} />
        <Route path="/homepage" element={<Homepage  />} />
        <Route path="/transaction-1" element={<Transaction_1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
