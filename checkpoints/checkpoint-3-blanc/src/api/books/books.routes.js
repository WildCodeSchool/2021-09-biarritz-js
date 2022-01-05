const { Router } = require('express');

const getAll = require('./getAll');
const getOne = require('./getOne');
const postBook = require('./postBook');
const updateBook = require('./updateBook');
const deleteBook = require('./deleteBook');

const router = Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', postBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
