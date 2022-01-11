import './App.css';
import Card1 from './components/Card1/Card1';
import BooksContainer from './components/BooksContainer/BooksContainer';

// import Searchbar from './components/Searchbar/Searchbar';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import AuthForm from './components/Form/Form';

function App() {
  return (
    <div className="App bg-grey">
      <Navbar />
      <Container>
        <h1></h1>
        {/* <Searchbar /> */}
        <AuthForm action={'Log in'} />
        <h1></h1>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
