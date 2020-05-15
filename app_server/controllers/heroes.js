const homelist = (req, res) => {
  res.render('index', {
    title: 'Home',
    heroes: [
      {
        name: 'Spiderman',
        image_url:
          'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/620-spider-man.jpg',
        affiliation: 'Marvel',
        reviews: [
          {
            name: 'Joe Bum',
            rating: 1,
            review: 'I could do what he does',
          },
          {
            name: 'Jill Awesome',
            rating: 5,
            review: "He's the friendly neighborhood spiderman",
          },
        ],
      },
      {
        name: 'Iron Man',
        image_url:
          'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/346-iron-man.jpg',
        affiliation: 'Marvel',
        reviews: [],
      },
    ],
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
