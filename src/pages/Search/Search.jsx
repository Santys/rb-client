import BooksContainer from '../../components/BooksContainer/BooksContainer';
import Searchbar from '../../components/Searchbar/Searchbar';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { getBooksSearched } from '../../services/books';

const Search = () => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const termSearch = searchParams.get('s');
  const filter = searchParams.get('filter');

  useEffect(() => {
    getBooksSearched(termSearch, filter)
      .then((response) => {
        setSearchedBooks(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setSearchedBooks([]);
        setIsLoading(false);
      });
  }, [termSearch, filter]);

  return (
    <div className="mt-5 pb-5">
      <Searchbar filters={true} />
      {isLoading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <p className="h1 text-dark-green">{`${searchedBooks.length} found for '${termSearch}'`}</p>
          <hr />
          <BooksContainer books={searchedBooks} />
        </>
      )}
    </div>
  );
};

export default Search;
