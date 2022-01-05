const connection = require('../../../db-config');

const getAllBooks = () => {
  return connection
    .promise()
    .query(`SELECT * FROM books`)
    .then(([results]) => results);
};

const getById = (idBooks) => {
  return connection
    .promise()
    .query('SELECT * FROM books WHERE idBooks = ?', [idBooks])
    .then(([results]) => results[0]);
};

const deleteBookById = (idBooks) => {
  return connection
    .promise()
    .query('DELETE FROM books WHERE idBooks = ?', [idBooks])
    .then(([results]) => results.affectedRows === 1);
};

const createBook = (book) => {
  return connection
    .promise()
    .query(
      'INSERT INTO books (title, genre, picture, artist, summary, year) VALUES(?,?,?,?,?,?)',
      [
        book.title,
        book.genre,
        book.picture,
        book.artist,
        book.summary,
        book.year,
      ]
    )
    .then(([results]) => {
      return { idbooks: results.insertId, ...book };
    });
};

const updateBookById = (idbook, book) => {
  let sql = 'UPDATE books SET ';
  let sqlValues = [];
  let oneValue = false;

  if (book.title) {
    sql += 'title = ? ';
    sqlValues.push(book.title);
    oneValue = true;
  }
  if (book.gender) {
    sql += oneValue ? ', gender = ? ' : ' gender = ? ';
    sqlValues.push(book.gender);
    oneValue = true;
  }
  if (book.picture) {
    sql += oneValue ? ', picture = ? ' : ' picture = ? ';
    sqlValues.push(book.picture);
    oneValue = true;
  }
  if (book.artist) {
    sql += oneValue ? ', artist = ? ' : ' artist = ? ';
    sqlValues.push(book.artist);
    oneValue = true;
  }
  if (book.summary) {
    sql += oneValue ? ', summary = ? ' : ' summary = ? ';
    sqlValues.push(book.summary);
    oneValue = true;
  }
  if (book.year) {
    sql += oneValue ? ', year = ? ' : ' year = ? ';
    sqlValues.push(book.year);
    oneValue = true;
  }
  sql += ' WHERE idBooks = ?';
  sqlValues.push(idbook);
  console.log(sql, sqlValues);

  return connection
    .promise()
    .query(sql, sqlValues)
    .then(([results]) => results.affectedRows === 1);
};

module.exports = {
  getAllBooks,
  getById,
  deleteBookById,
  createBook,
  updateBookById,
};
