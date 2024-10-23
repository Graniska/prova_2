

      /*  const mongoose = require ("mongoose") 

            // esta função assíncrona faz a conexão com o banco
            const connectDB = async () => {
               
                 mongoose
                    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_ADRESS}/${process.DB_NAME}`)  
                    .then(() => console.log('Connected to mongoDB')) 
                
        }

    module.exports = connectDB;*/

    const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_ADRESS}/${process.env.DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectDB;
