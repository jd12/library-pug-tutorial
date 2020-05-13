const homelist = (req, res) => {
    res.render('index', { title: 'Home' });
  };

  const heroInfo = (req, res) => {
    res.render('hero-info', { title: 'Hero Info' });
  };

  const addReview = (req, res) => {
    res.render('hero-review-form', { title: 'Add review' });
  };

  module.exports = {
    homelist,
    heroInfo,
    addReview
  };