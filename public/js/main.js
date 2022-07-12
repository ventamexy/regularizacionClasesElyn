// --- Se establece el anio actual en el campo correspondiente.
window.addEventListener("load", function(){
    $(".anio-actual").text(new Date().getFullYear());
});