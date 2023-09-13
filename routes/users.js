const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');// celebrate

const {
  editUserData,
  getUsersMe,
} = require('../controllers/users');

router.get('/me', getUsersMe);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
  }),
}), editUserData);

module.exports = router;
