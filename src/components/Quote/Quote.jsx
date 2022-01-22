import { Card } from 'react-bootstrap';

const Quote = () => {
  const quotes = [
    'So many books, so little time.',
    'A room without books is like a body without a soul.',
    "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
    'Books are a uniquely portable magic.',
    'A mind needs books as a sword needs a whetstone, if it is to keep its edge.',
    "That's the thing about books. They let you travel without moving your feet.",
    'The purpose of a storyteller is not to tell you how to think, but to give you questions to think upon.',
    'Life before Death. Strength before Weakness. Journey before Destination.',
    'I have learned all kinds of things from my many mistakes. The one thing I never learn is to stop making them.',
  ];
  return (
    <Card className="shadow-lg bg-dark-blue opacity-75">
      <Card.Body>
        <Card.Text className="text-middle h4 fst-italic text-light">
          “{quotes[Math.round(Math.random() * quotes.length)]}”
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Quote;
