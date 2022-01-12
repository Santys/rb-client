import './App.css';

import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Search from './pages/Search/Search';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="App bg-grey">
      <Navbar />
      <Container className="bg-grey">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
