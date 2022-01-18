import BooksContainer from '../../components/BooksContainer/BooksContainer';
import user from '../../user.json';
import { useEffect, useState } from 'react';
import { getUserBooks } from '../../services/user';
import { Spinner } from 'react-bootstrap';

const Profile = () => {
  const [userBooks, setUserBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserBooks()
      .then((response) => {
        setUserBooks(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setUserBooks([]);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="mt-3 pb-5">
      {isLoading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <p className="h3 text-dark-green">{`${user.username}'s recent updates`}</p>
          <hr />
          <BooksContainer books={user.booksReviewed || userBooks} />
        </>
      )}
    </div>
  );
};

export default Profile;
