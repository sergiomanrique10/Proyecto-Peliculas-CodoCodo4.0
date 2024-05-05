let comentarioGuardado = localStorage.getItem("comentario");
const render = () => {
  $("#comments").prepend(comentarioGuardado);
  console.log(comentarioGuardado);
};
render();

// Función para manejar el envío del formulario
$("#commentForm").submit(function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Obtener los valores de los campos del formulario
  var movieTitle = $("#movieTitle").val();
  var comment = $("#comment").val();

  // Crear el elemento de comentario
  var commentElement =
    '<div class="card mt-3"><div class="card-body"><h5 class="card-title">' +
    movieTitle +
    '</h5><p class="card-text">' +
    comment +
    "</p></div></div>";
  localStorage.setItem("comentario", commentElement);
  // Agregar el comentario al contenedor de comentarios
  $("#comments").prepend(commentElement);
  // Limpiar los campos del formulario
  $("#movieTitle").val("");
  $("#comment").val("");
});
