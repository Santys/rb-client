const createNewReview = (content, rate, user) => {
  return Promise.resolve({ status: 200, data: 'OK' });
};

const deleteReview = (idReview) => {
  return Promise.resolve({ status: 200, data: 'OK' });
};

const modifyReview = (content, rate, idReview) => {
  return Promise.resolve({ status: 200, data: 'OK' });
};

export { createNewReview, deleteReview, modifyReview };
