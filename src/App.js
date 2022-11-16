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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register  />} />
        <Route path="/editprofile" element={<EditProfile  />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
