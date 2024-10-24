// // servidor de expres
// const express = require('express');
// const app = express()
// // servidor de socket 
// const server = require('http').createServer(app);


// // configuracion del socket server
// const io = require('socket.io')(server);

// // desplegar el directorio publico
// app.use( express.static(__dirname+ '/public'))

// io.on('connection', (socket) => { 
//         console.log('cliente conectado : '+ socket.id);
//         socket.emit('mensaje-bienvenida', 'bienvenido al server')
    
//         socket.on('mensaje-cliente',(data)=>{
//                 // console.log('servido emitio algo');
//                 console.log(data); 
//             })
        
//             socket.on('mensaje-to-server',(data)=>{
//                     // console.log('servido emitio algo');
//                     console.log(data); 
            
//                     socket.emit('mensaje-from-server', data)
//                 })
//             });
            
            
//             server.listen(8080, ()=>{
//                     console.log('server corriendo en puerto: 8080');
                
//                 });
                               
// ------------------------------ esta es una refactorizacion de codigo  
                
const Server = require("./models/server");

require('dotenv').config();

const server = new Server()

server.execute();

