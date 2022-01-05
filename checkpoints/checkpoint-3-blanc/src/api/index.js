const { Router } = require('express');
const books = require('./books/books.routes');
const router = Router();

router.use('/books', books);

module.exports = router;
