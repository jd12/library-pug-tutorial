const mongoose = require('mongoose');
const Hero = mongoose.model('Heroe');
const request = require('request');

const heroInfo = (req, res) => {
  const query = Hero.findById(req.params.heroid);
  query.exec((err, result) => {
    if (err) {
      return renderErrorPage(req, res, err);
    }
    const hero = result.toObject();
    const options = {
      method: 'GET',
      url: 'https://superhero-search.p.rapidapi.com/',
      qs: { id: hero.api_id },
      headers: {
        'x-rapidapi-host': 'superhero-search.p.rapidapi.com',
        'x-rapidapi-key': '0404f80475msh8d9a06d13ecc424p1fe049jsncb15fbe9c101',
        useQueryString: true,
      },
    };

    request(options, function (error, response, body) {
      if (error) {
        renderErrorPage(req, res, error);
      }
      renderHeroInfoPage(req, res, hero, JSON.parse(body));
    });
  });
};

const renderErrorPage = (req, res, error) => {
  res.render('error', {
    message: 'Unable to find specific Hero',
    error,
  });
};

const renderHeroInfoPage = (req, res, hero, hero_api) => {
  res.render('hero-info', { title: 'Hero Info', hero, hero_api });
};

module.exports = {
  heroInfo,
};
