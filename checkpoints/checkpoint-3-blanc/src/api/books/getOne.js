const { getById } = require('./models/book.js');

const getOne = (req, res) => {
  getById(req.params.id)
    .then((book) => {
      book ? res.json(book) : res.sendStatus(404);
    })
    .catch((err) => res.sendStatus(404));
};

module.exports = getOne;
