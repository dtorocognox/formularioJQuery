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

//7. crear y  ocultar anclas

// var $a = $("<a/>", {
//     'text' : 'hol',
//     'href' : 'http://www.google.com'
// });
//
// var $but = $('<input>', {
//    'type' : 'button',
//     'value' : 'desaparecer'
// });
//
//
// $('div').append($a);
// $('div').append("<br><a href='http://www.bing.com'>Bing</a> ");
// $('div').after($but);
//
// $but.click(function(){
//     $('div').hide();
// });

//8. enlaces y botones

// var $a = $("<a/>", {
//     'text' : 'hol',
//     'href' : 'http://www.google.com'
// });
//
// var $but = $('<input>', {
//     'type' : 'button',
//     'value' : 'desaparecer'
// });
//
// var $but2 = $('<input>', {
//     'type' : 'button',
//     'value' : 'desaparecer 2'
// });
//
// var $a2 = $("<br><a href='http://www.bing.com'>Bing</a>" );
//
// $('div').append($a);
// $('div').append($but);
// $('div').append($a2);
// $('div').append($but2);
//
//
// $but.click(function(){
//     $a.hide();
// });
//
// $but2.click(function(){
//     $a2.hide();
// });

//10  Crear un documento con una tabla. Poner el fondo de las filas pares
// en rojo (usar el método .css("background-color","red"). A continuación poner
// el fondo de las filas impares en verde ..css("background-color","green")


// var template =         '<table style="width:100%">'+
//                         '<tr>'+
//                         '<th>Firstname</th>'+
//                         '<th>Lastname</th>'+
//                         '<th>Age</th>'+
//                         '</tr>'+
//                         '<tr>'+
//                         '<td>Jill</td>'+
//                         '<td>Smith</td>'+
//                         '<td>50</td>'+
//                         '</tr>'+
//                         '<tr>'+
//                         '<td>Eve</td>'+
//                         '<td>Jackson</td>'+
//                         '<td>94</td>'+
//                         '</tr>'+
//                         '</table>';
// var $div = $('div');
//
// // var $trowOdd = $div.find('tr:odd'); //Impares
// // var $trowEven= $('tr:even'); //Pares
//
//
//
// $div.append(template);
//
// var $button = $('<input type="button" value="botón">');
//
// $('div').append($button);
//
// $button.click(function(){
//         $div.find('tr:odd').css("background-color", "green");
//         $div.find('tr:even').css("background-color", "red");
//     }
// );


// 11 Crear un documento con un párrafo, el cuál se oculte al clicar
// dos veces sobre él.

// var template = "<p>Crear un documento con un párrafo, el cuál se oculte al clicar dos veces sobre él.</p>";
//
// var $div = $('div');
//
// $div.append(template);
//
// $('div').find('p').dblclick(function(){
//     $(this).hide();
// });


//12. Crear un documento con un párrafo tal que aparezca un aviso alert()
// cuando se presiona el botón izquierdo del ratón.

// var $all = $('body');
//
// var template = "<p>Crear un documento con un párrafo tal que aparezca un aviso alert() cuando se presiona el botón izquierdo del ratón. </p>";
//
// var $div = $('div');
//
// $div.append(template);
//
// $all.mousedown(function(event){
//    if(event.which == 3){
//        alert("Funciona");
//    }
// });

//13. Utiliza el método hover() para lanzar un mensaje cuando nos posicionamos
// sobre un párrafo y otro cuando salgamos de él.

var $all = $('body');

var template = "<p>13. Utiliza el método hover() para lanzar un mensaje cuando nos posicionamos sobre un párrafo y otro cuando salgamos de él. </p>";

var $div = $('div');

$div.append(template);

$div.find('p').mouseenter(function(){
    $(this).fadeOut(100);
    alert("me pisó");
}).mouseleave(function(){
     $(this).fadeIn(100);
    alert("no me pisó");
});


//14. Utiliza los métodos focus() y blur() para cambiar el color de dos cuadros de texto cuando posicionamos el foco y cuando lo retiramos.