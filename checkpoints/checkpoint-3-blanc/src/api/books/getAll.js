const { getAllBooks } = require('./models/book.js');

const getAll = (req, res) => {
  getAllBooks()
    .then((books) => res.json(books))
    .catch((err) => res.sendStatus(404));
};

module.exports = getAll;
