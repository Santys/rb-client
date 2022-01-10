import Card1 from '../Card1/Card1';

const BooksContainer = ({ books }) => {
  return (
    <div className="container">
      <div className="row">
        {books.map((book) => {
          return (
            <div key={book.id} className="col-4">
              <Card1 book={book} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BooksContainer;
