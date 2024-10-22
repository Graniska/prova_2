

    // o programa começa neste modulo
    
        //importando o framework que disponibiliza ferramentas para a criação de um servidor
            //import express from "express";
            const express = require('express');
            
        // importando os roteadores
            const maintenanceRouter = require ("/routers/maintenanceRouter.js")
            const vehicleRouter = require ("/routers/vehicleRouter.js")
            const workshopRouter = require("/routers/worskshopRouter.js")
            
        // assim que "connectDB" for mencionado no modulo atual,
        // a conexão com o banco de dados será possível por conta da importação seguinte
            const connectDB = require ("/config/db.js")
            
        //instância para a conexão com o banco de dados
            connectDB();


        // instância do servidor express, faz referência ao mesmo toda vez que mencionado no codigo
            const app = express();


        //app.use cria um middleware
        //Um código pode ter vários middlewares, que possuem algumas finalidades como por exemplo realizar a verificação de uma req ou res de acordo
        //com o que foi especificado em seus parâmetros
        //por exemplo: Para atualizar uma página no Youtube, sua requisição pode passar por um middleware responsável por verificar se você já está logado
        //e se estiver, outro middleware vai atualizar a pagina de acordo com os videos que você curtiu, ou seja, eles verificam uma requisição de acordo com o que
        //foi pedido
        // neste caso estamos pedindo para o middleware "aceitar" apenas respostas e requisições no formato JSON
            app.use(express.json());

        //agora estes middlewares possuem outra finalidade, filtrar as requisições e enviá-las para os roteadores
            app.use('/workshop', workshopRouter); 
            app.use('/vehicle', vehicleRouter);
            app.use('/maintenance', maintenanceRouter);

        // esta linha inicializa o servidor especificando a porta 
        // e imprimindo uma mensagem notificando que a ação foi bem sucedida

            app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
