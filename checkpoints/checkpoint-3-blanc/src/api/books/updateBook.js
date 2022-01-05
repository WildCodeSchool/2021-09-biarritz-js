const { updateBookById } = require('./models/book.js');

const updateBook = (req, res) => {
  updateBookById(req.params.id, req.body)
    .then((bookUpdated) =>
      bookUpdated ? res.sendStatus(204) : res.sendStatus(404)
    )
    .catch((err) => res.sendStatus(404));
};

module.exports = updateBook;
