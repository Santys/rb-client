import BooksContainer from '../../components/BooksContainer/BooksContainer';
import Card1 from '../../components/Card1/Card1';
import Searchbar from '../../components/Searchbar/Searchbar';
import bookExample from '../../book_example.json';
import booksExample from '../../books_example.json';

const Home = () => {
  return (
    <>
      <Searchbar />
      <BooksContainer books={booksExample} />
      <Card1 book={bookExample} />
    </>
  );
};

export default Home;
