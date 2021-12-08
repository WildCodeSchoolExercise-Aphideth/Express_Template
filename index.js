// Import des dépendences du serveur avec express / cors 
import express from 'express';
import cors from 'cors';
// Import du fichier de gestion des routes
import { setupRoutes } from './routes/routes.js';

const app = express();
const port = 8000;

// Configuration du serveur
app.use(cors('*')); // allow toutes les origines client
app.use(express.json()); // parse les requêtes en json
app.use(express.urlencoded({extended: true})); // parse les requêtes en urlencoded

// Serveur est routée grâce à cette ligne
setupRoutes(app);

// Serveur is running
app.listen(port, () => console.log('Server is running on port ' + port));