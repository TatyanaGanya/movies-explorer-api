const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');// celebrate
const { urlEdit } = require('../utils/constant');
const {
  getMovies,
  addMovies,
  deleteMovies,
} = require('../controllers/movies');

router.get('/', getMovies);

// POST /movies
router.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(urlEdit),
    trailerLink: Joi.string().required().pattern(urlEdit),
    thumbnail: Joi.string().required().pattern(urlEdit),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
}), addMovies);

// DELETE /movies/_id
router.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().length(24).hex().required(),
  }),
}), deleteMovies);

module.exports = router;
