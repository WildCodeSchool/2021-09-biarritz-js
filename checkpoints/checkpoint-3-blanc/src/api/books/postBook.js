const { createBook } = require('./models/book.js');

const postBook = (req, res) => {
  createBook(req.body)
    .then((book) => res.status(201).json(book))
    .catch((err) => res.sendStatus(404));
};

module.exports = postBook;
