import React, { useEffect, useState } from "react";
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
import Logout from "./components/Logout";

export const UserContext = React.createContext();
export const ProgramsContext = React.createContext();


function App() {
  const userState = useState(null)
  const [user, setUser] = userState
  const programsState = useState(null)
  const [programs, setPrograms] = programsState
  

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });

    fetch('/programs')
      .then((r) => r.json())
      .then((data) => setPrograms(data))
  }, []);

  return (
    <div className="App" style={{backgroundColor:"#ece0cd"}}>
      <BrowserRouter>
      <UserContext.Provider value={userState}>
      <ProgramsContext.Provider value={programsState}>
        <header className="App-header">
          <Header />
          {user && <Logout setUser={setUser} />}
          
          
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/donate" element={<Donate programs={programs} />} />
          <Route path="/admin-form" element={<AdminForm />} />
        </Routes>
        </ProgramsContext.Provider>
        </UserContext.Provider> 
      </BrowserRouter>
    </div>
  );
}

export default App;
