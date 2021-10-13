//console.log("Mi archivo funciona");
//invoke a io
/** 
 * io() => Enciende la conexion para que mi cliente 
 * pueda emitir y escuchar eventos 
 * io();
**/ 

const server = io();

//* cliente quiero que emitas un msm con el keyword
//* hello:peter para que mi servidr pueda reconocer este evento 
//? emit => Es el encargado de poder enviar eventos
server.emit("hello:petter", "Venon te metio en la tele xdd");

//? es el encargado de recibir eventos y solo se ve en el nave
server.on("bye:petter", (message) => {
    console.log(message);
});

server.on("new:comment", (message) => {
    console.log(`Message from server: ${message}`);
  });