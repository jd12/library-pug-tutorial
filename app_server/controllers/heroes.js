const mongoose = require('mongoose');
const Hero = mongoose.model('Heroe');

const homelist = (req, res) => {
  // Grab all heroes out of the database
  var query = Hero.find({'publishers': 'DC'});

  query.exec((err, results) => {
    err = {status: '404',
          stack: 'Happened somewhere over there'
  }
    if (err) {
      return handleError(req, res, err);
    }
    const heroes = results.map((result) => {
      return result.toObject();
    });
    renderHomepage(req, res, heroes);
  });
};

const handleError = (req, res, error) => {
  res.render('error', {
    message: 'Unable to load page',
    error
  });
};

const renderHomepage = (req, res, responseBody) => {
  res.render('index', {
    title: 'Home',
    heroes: responseBody,
  });
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
  addReview,
};
