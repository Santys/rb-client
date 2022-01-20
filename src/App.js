import './App.css';

import { Container } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Search from './pages/Search/Search';
import Profile from './pages/Profile/Profile';
import Book from './pages/Book/Book';
import Error from './pages/Error/Error';
import { useContext } from 'react';
import { AuthContext } from './context/auth.context';

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="App bg-grey">
      {isLoggedIn && <Navbar />}
      <Container className="bg-grey mb-3">
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={isLoggedIn ? <Navigate to="/" /> : <Signup />} />
          <Route path="/search" element={isLoggedIn ? <Search /> : <Navigate to="/login" />} />
          <Route path="/profile/:id" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/book/:bookId" element={isLoggedIn ? <Book /> : <Navigate to="/login" />} />
          <Route path="*" element={isLoggedIn ? <Error /> : <Navigate to="/login" />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
