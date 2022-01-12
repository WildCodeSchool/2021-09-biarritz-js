const connection = require('../db-config');

const getAll = () => {
  return connection
    .promise()
    .query('SELECT * FROM album')
    .then(([results]) => results);
};

const getById = (id) => {
  return connection
    .promise()
    .query('SELECT * FROM album where id = ?', [id])
    .then(([results]) => results[0]);
};

const create = (album) => {
  return connection
    .promise()
    .query(
      'INSERT INTO album (title, artist, genre, picture) VALUES (?,?,?,?)',
      [album.title, album.artist, album.genre, album.picture]
    )
    .then(([result]) => result.insertId);
};

const deleteOne = (id)=>{
  return connection
    .promise()
    .query(
      'DELETE FROM album WHERE id = ?',
      [id]
    )
    .then(([result]) => result.affectedRows === 1);  
}

const update = (id, album) => {
  let sql = 'UPDATE album SET '
  let sqlValues = [];
  let oneValue = false;
  if (album.title){
    sql += ' title = ? '
    sqlValues.push(album.title);
    oneValue = true;
  }
  if (album.genre){
    sql += oneValue ? ', genre = ?': ' genre = ? ';
    sqlValues.push(album.genre);
    oneValue = true;
  }
  if (album.picture){
    sql += oneValue ? ', picture = ?': ' picture = ? ';
    sqlValues.push(album.picture);
    oneValue = true;
  }
  if (album.artist){
    sql += oneValue ? ', artist = ?': ' artist = ? ';
    sqlValues.push(album.artist);
  }
  sql += ' WHERE id = ?';
  sqlValues.push(id);
  return connection
    .promise()
    .query(
      sql, sqlValues
    )
    .then(([result]) => result.affectedRows === 1);    
}

module.exports = { getAll, getById, create, deleteOne, update };
