// servidor de expres
const express = require('express');
// servidor de socket 
const http = require('http')

// configuracion del socket server
const socketio = require('socket.io');

const path = require('path');
const Sockets = require('./sockets');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // this.port = 8080;

        this.server = http.createServer(this.app);

        this.io = socketio( this.server, { })

    }
    middlewares(){        
        // desplegar el directorio publico
        this.app.use(express.static(path.resolve(__dirname, '../public')));
    }

    configuracionSockets(){
        new Sockets(this.io)
    }

    execute() {
        // inicializar middlewares
        this.middlewares()

        this.configuracionSockets()

        // inicializar server
        this.server.listen(this.port , ()=>{
        console.log('server corriendo en puerto: ', this.port );
    
        });

    }
}

module.exports = Server;