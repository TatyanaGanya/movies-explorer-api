const router = require('express').Router();
const signin = require('./signin');
const signup = require('./signup');
const auth = require('../middlewares/auth');

const usersRouter = require('./users');
const moviesRouter = require('./movies');

router.use('/signup', signup);
router.use('/signin', signin);
router.use(auth);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

module.exports = router;
