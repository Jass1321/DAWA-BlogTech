const server = io();

//? emit => Es el encargado de poder enviar eventos
server.emit("hello:petter", "Venon te metio en la tele xdd");

//? es el encargado de recibir eventos y solo se ve en el nave
server.on("bye:petter", (message) => {
    console.log(message);
});

/*---Capturar los texto de mis inputs---*/
//* Primero capture mi formulario que tiene la clase form-comment
const form = document.querySelector(".form-comment");

//? Cuando detectectes el evento submit de este form haz lo siguiente
form.addEventListener("submit", function (e) {
  //? Evitar que recargue la pagina
  e.preventDefault();
  console.log(e);
  const comment = e.target[0].value;
  const author = e.target[1].value;
  const body = { comment, author };

  e.target[0].value = "";
  e.target[1].value = "";
  
  //* Envia el evento al servidor para que este guarde mensaje
  server.emit("new:comment", body);
  console.log(body);  
  
  //* Esta a la espera de una respuesta
  server.on("save:comment", (message) => {
  console.log(message);
  });

});