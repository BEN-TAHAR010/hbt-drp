const
	// importe le module express
  express = require('express'),
	// créer une instance qui s'apelle app de la fonction express()
	// est une fonction de niveau supérieur importé par le module express.
  app = express(),
  //https = require('https'),
  appGet = require('./api/routes/app-get-local'),
  appPost = require('./api/routes/app-post-local'),
  appDelete = require('./api/routes/app-delete-local'),
	// ou '127.0.0.1'; est une adresse privée spéciale que les ordinateurs utilisent 
	// pour se désigner eux-mêmes localhost => serveur locale.
  hostName = 'localhost',
	// 8000 et 8080 sont généralement utilisés comme ports par défaut
	// dans le développement 3000 est le numéro de port hors ligne.
	// conclusion http://localhost:8000 */
  port = process.env.PORT || 8000;

app.set('port', port); //process.env.PORT lorsque vous déployez votre application dans un environnement hébergé

app.use(
  appGet,
  appPost,
  appDelete
);

//const server = http.createServer(app); //créer un serveur HTTP
/*https.createServer(app).listen(
	port,
  hostName,
  () => console.log(`Serveur en cours d'exécution sur https://${hostName}:${port}`)
)*/

app.listen(
  port,
  hostName,
  () => console.log(`Serveur en cours d'exécution sur http://${hostName}:${port}`)
)
