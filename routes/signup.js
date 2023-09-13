const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');// celebrate
const { addUser } = require('../controllers/users');

router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }).unknown(true),
}), addUser);

module.exports = router;
