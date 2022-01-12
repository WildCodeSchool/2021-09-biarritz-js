const { deleteBookById } = require('./models/book.js');

const deleteBook = (req, res) => {
  deleteBookById(req.params.id)
    .then((bookDeleted) =>
      bookDeleted ? res.sendStatus(204) : res.sendStatus(404)
    )
    .catch((err) => res.sendStatus(404));
};

module.exports = deleteBook;
