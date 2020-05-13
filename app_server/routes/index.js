const express = require('express');
const router = express.Router();
const ctrlHeroes = require('../controllers/heroes');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlHeroes.homelist);
router.get('/hero', ctrlHeroes.heroInfo);
router.get('/hero/review/new', ctrlHeroes.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
