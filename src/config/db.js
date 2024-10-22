
        // este modulo será utilizado apenas para conectar o banco de dados
        // para isto utilizamos o mongoose, que é uma ferramenta que facilita a maneira como os documentos são armazenados
        const mongoose = require ("mongoose") 

            // esta função assíncrona faz a conexão com o banco
            const connectDB = async () => {
               
                 mongoose
                    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_ADRESS}/${process.DB_NAME}`)   // o programa vai tentar conectar ao mongo    
                    .then(() => console.log('Connected to mongoDB'))  // se a ação for bem sucedida, a seguinte mensagem será impressa 
                    .catch((error) => console.log(error));      // caso o contrário, o erro será mostrado na tela
                
        }

    module.exports = connectDB;