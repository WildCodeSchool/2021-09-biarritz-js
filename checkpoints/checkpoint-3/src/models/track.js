const connection = require('../db-config');

const getAll = () => {
  return connection
    .promise()
    .query('SELECT * FROM track')
    .then(([results]) => results);
};

const getById = (id) => {
  return connection
    .promise()
    .query('SELECT * FROM track where id = ?', [id])
    .then(([results]) => results[0]);
};

const getTracksByIdAlbum = (idAlbum) => {
  return connection
    .promise()
    .query('SELECT * FROM track where id_album = ?', [idAlbum])
    .then(([results]) => results);
};


const create = (track) => {
  const {title, youtube_url, id_album} = track;
  return connection
    .promise()
    .query(
      'INSERT INTO track (title, youtube_url, id_album) VALUES (?,?,?)',
      [title, youtube_url, id_album]
    )
    .then(([result]) => result.insertId);
};

const deleteOne = (id)=>{
  return connection
    .promise()
    .query(
      'DELETE FROM track WHERE id = ?',
      [id]
    )
    .then(([result]) => result.affectedRows === 1);  
}

const update = (id, track) => {
  let sql = 'UPDATE track SET '
  let sqlValues = [];
  let oneValue = false;
  if (track.title){
    sql += ' title = ? '
    sqlValues.push(track.title);
    oneValue = true;
  }
  if (track.youtube_url){
    sql += oneValue ? ', youtube_url = ?': ' youtube_url = ? ';
    sqlValues.push(track.youtube_url);
    oneValue = true;
  }
  if (track.id_album){
    sql += oneValue ? ', id_album = ?': ' id_album = ? ';
    sqlValues.push(track.id_album);
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

module.exports = { getAll, getById,create, deleteOne, getTracksByIdAlbum, update };
