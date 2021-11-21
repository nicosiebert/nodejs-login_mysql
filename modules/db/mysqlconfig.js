const mysql = require("mysql");

const MyDataBase = {
    host: process.env.HOSTDB,
    user: process.env.USERDB,
    password:process.env.PASSWDB,
    database:process.env.DB
};

let connection;

const handleDisconnect = e =>{
    connection = mysql.createConnection(MyDataBase);

    connection.connect(err=>{
        if(err){
            setTimeout(handleDisconnect,3000);
            console.error(`error al conectar: ${err.stack}`);
        }else{
            console.log(`connected success`);
        }
    });
    connection.on('error', err =>{
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){ 
          handleDisconnect();                         
        } else {                                      
          throw err;
        }
      });
};

handleDisconnect();



exports.connection = connection;