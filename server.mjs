import express from 'express';
import { obtenerSuperheroePorIdController, buscarSuperheroePorAtributoController, obtenerSuperheroeMayoresDe30Controller } from './controllers/superheroesController.mjs';

const app = express();
const PORT = 3005;

// Rutas:
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroePorAtributoController);
app.get('/superheroes/edad/mayorA30', obtenerSuperheroeMayoresDe30Controller);

// Levantar el servidor en el puerto 3005.
app.listen(PORT, () => {
  console.log(`Servidor de Mar- José está corriendo en el puerto ${PORT}`);
}); 