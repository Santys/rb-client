import BooksContainer from '../../components/BooksContainer/BooksContainer';
import booksExample from '../../books_example.json';
import user from '../../user.json';

const Profile = () => {
  return (
    <div className="mt-3 pb-5">
      <p className="h3 text-dark-green">{`${user.username}'s recent updates`}</p>
      <hr />
      <BooksContainer books={user.booksReviewed || booksExample} />
    </div>
  );
};

export default Profile;
