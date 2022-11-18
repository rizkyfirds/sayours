import './App.css';
import "./index.css"

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import EditProfile from './pages/EditProfile';
import Homepage from './pages/Homepage';
import Transaction from './pages/Transaction';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register  />} />
        <Route path="/editprofile" element={<EditProfile  />} />
        <Route path="/homepage" element={<Homepage  />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
