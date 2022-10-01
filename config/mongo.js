const mongoose = require("mongoose");

const dbConnect = () => {

    const DB_URI = process.env.DB_URI;
    mongoose.connect(
        DB_URI,
         {
        //userNewUrlParser:true,
        useUnifiedTopology:true,
    },
    (err,res) => {
        
        if(!err){
            console.log('Conexion ha sido exitosa')
        }else{
             console.log(err)
        }
    }
    );

};

module.exports = dbConnect