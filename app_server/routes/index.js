const express = require('express');
const router = express.Router();
const ctrlHeroes = require('../controllers/heroes');
const ctrlHero = require('../controllers/hero');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlHeroes.homelist);
router.get('/hero/:heroid', ctrlHero.heroInfo);
router.get('/hero/:heroid/review/new', ctrlHeroes.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
