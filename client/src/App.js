import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './pages/Home'
import Teachers from './pages/Teachers'
import Programs from "./pages/Programs";
import Profile from "./pages/Profile";
import Donate from "./pages/Donate";
import AdminForm from "./pages/AdminForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/admin-form" element={<AdminForm />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
