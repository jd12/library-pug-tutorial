const homelist = (req, res) => {
    res.render('index', { title: 'Home' });
  };

  const bookInfo = (req, res) => {
    res.render('book-info', { title: 'Book Info' });
  };

  const addReview = (req, res) => {
    res.render('book-review-form', { title: 'Add review' });
  };

  module.exports = {
    homelist,
    bookInfo,
    addReview
  };