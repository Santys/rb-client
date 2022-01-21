import axios from 'axios';

const review = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/review`,
  timeout: 5000,
  headers: {},
});

const createNewReview = (content, rate, user, bookId) => {
  const newReview = {
    owner: user.username,
    content,
    rate,
    idUser: user._id,
    idApi: bookId,
  };
  return review.post('/create', { data: newReview });
};

const deleteReview = (idReview, idUser) => {
  return review.delete('/delete', { data: { idReview, idUser } });
};

const modifyReview = (content, rate, idReview, idUser) => {
  const modifyReview = {
    content,
    rate,
    idReview,
    idUser,
  };
  return review.put('/modify', { data: modifyReview });
};

export { createNewReview, deleteReview, modifyReview };
