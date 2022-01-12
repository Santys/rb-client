import BooksContainer from '../../components/BooksContainer/BooksContainer';
import Searchbar from '../../components/Searchbar/Searchbar';
import booksExample from '../../books_example.json';

const Home = () => {
  return (
    <div className="mt-5 pb-5">
      <Searchbar />
      <p className="h1 text-dark-green">Top 10 books</p>
      <hr />
      <BooksContainer books={booksExample} />
    </div>
  );
};

export default Home;
