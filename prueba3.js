//Punto 1, ocultar todo

// var $boton = $('input');
// var $all = $('*');
//
// $boton.click(function () {
//     $all.hide();
// });


//2. Ocultar el botón
// var $boton2 = $('input');
//
// $boton2.click(function(){
//    $(this).hide();
// });

//3. Ocultar encabezado y primer párrafo

// var $classIntro = $('.intro');
// var $boton2 = $('input');
//
// $boton2.click(function(){
//     $classIntro.hide();
// });

//4. ocualtar igual anterior pero diferente selector el 1° parrafo

// var $classIntro = $('.intro, p:first' );
// var $boton = $('input');
//
// $boton.click(function(){
//     $classIntro.hide();
// });
//
// //5. seleccionar primer elemento
//
// var $primerLista = $('ul li:first-child');
//
// $primerLista.click(function(){
//     $(this).hide();
// });

//7. ocultar anclas

var $anclas = $('<a');

$anclas.click(function(){
    $anclas.hide("slow");
});