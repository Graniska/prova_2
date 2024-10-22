
//importando o roteador
const { Router } = require ("express");

// importando as funções, pois precisamos das mesmas para que a API consiga
// redirecioná-las para o modulo controllers 
    const { store, index, update, destroy} = require('../controllers/MaintenanceController.js');

// instanciando o roteador
    const router = Router();

    router.post('/', store); //req do tipo criar será direcionada para função store
    router.get('/', index); // req do tipo listar
    router.put('/:id', update); // req do tipo atualizar
    router.delete('/:id', destroy); // req do tipo deletar

    module.exports =  router; // exportação do roteador