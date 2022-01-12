import BooksContainer from '../../components/BooksContainer/BooksContainer';
import Searchbar from '../../components/Searchbar/Searchbar';
import booksExample from '../../books_example.json';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams] = useSearchParams();
  const termSearch = searchParams.get('s');
  return (
    <div className="mt-5 pb-5">
      <Searchbar />
      <p className="h1 text-dark-green">{`${booksExample.length} found for '${termSearch}'`}</p>
      <hr />
      <BooksContainer books={booksExample} />
    </div>
  );
};

export default Search;
