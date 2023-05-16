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
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
