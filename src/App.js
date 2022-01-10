import './App.css';
import Card1 from './components/Card1/Card1';
import BooksContainer from './components/BooksContainer/BooksContainer';

import bookExample from './book_example.json';
import booksExample from './books_example.json';
// import Searchbar from './components/Searchbar/Searchbar';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <h1>Hola!</h1>
        <h1>Hello</h1>
        {/* <Searchbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Card1 book={bookExample} />
        <BooksContainer books={booksExample} />
      </Container>
    </div>
  );
}

export default App;
