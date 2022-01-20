import BooksContainer from '../../components/BooksContainer/BooksContainer';
import { useContext, useEffect, useState } from 'react';
import { getUserBooks } from '../../services/user';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../../context/auth.context';

const Profile = () => {
  const [userBooks, setUserBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    getUserBooks(user._id)
      .then((response) => {
        setUserBooks(response.data.books);
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
          <BooksContainer books={userBooks} />
        </>
      )}
    </div>
  );
};

export default Profile;
