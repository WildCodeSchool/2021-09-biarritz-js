const connection = require("./db-config");
const cors = require('cors');
const express = require('express');
const app = express();
// utilise le package cors pour autoriser les appels extérieurs
app.use(cors({
    origin: '*'
}));

const port = process.env.PORT || 8000;

// se connecte à la base de données en récupérant l'objet connection (dans db-config.js)
connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
    } else {
      console.log('connected to database with threadId :  ' + connection.threadId);
    }
  });

  // Application, écoute les requêtes de type GET envoyées à '/api/users
  app.get('/api/users', (req, res) => {
    //récupére le paramètre name
    const name = req.query.name;
    // par défaut, on récupére tous les users
    let sqlQuery = 'SELECT * FROM users';
    // si le paramètre name est indiqué, on souhaite filtrer les utilisateurs
    if (name !== undefined){
        sqlQuery += ` WHERE firstname LIKE '%${name}%'`;
    }
    connection.query(sqlQuery, (err, result) => {
      if (err) {
        res.status(500).send('Error retrieving data from database');
      } else {
        // ralentit le retour pour afficher chargement
        setTimeout(() => {  res.status(200).json(result) }, 2000);
       
      }
    });
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });