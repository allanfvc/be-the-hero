const routes = require('express').Router();
const ongsController = require('./controllers/ongs.controller');
const incidentsController = require('./controllers/incidents.controller');
const sessionController = require('./controllers/sessions.controller');
const profileController = require('./controllers/profiles.controller');

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongsController.index);
routes.post('/ongs', ongsController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);




routes.get('/', (request, response) => {
    return response.json({
        evento: 'Semana omnistack',
        aluno: 'Allan Vidal'
    })
})

module.exports = routes;