var boxId = new Array();
var boxName = new Array();
var boxLastName = new Array();
var boxPhone = new Array();
var boxPosition = new Array();


function inicio() {


var template2 = '<tr>' +
                    '<td>' +
                        '<div class="input-field col s6">' +
                            '<input placeholder="Ej: 1234567" type="text" class="validate identificacion">' +
                        '</div>' +
                    '</td>' +
                    '<td>' +
                        '<div class="input-field col s6">' +
                            '<input placeholder="xxxxxx" type="text" class="validate nombre">' +
                        '</div>' +
                    '</td>' +
                    '<td>' +
                        '<div class="input-field col s6">' +
                            '<input placeholder="xxxxxx" type="text" class="validate apellido">' +
                        '</div>' +
                    '</td>' +
                    '<td>' +
                        '<div class="input-field col s6">' +
                            '<input placeholder="Tel ó Cel" type="text" class="validate telefono">' +
                        '</div>' +
                    '</td>' +
                    '<td>' +
                        '<div class="input-field col s6">' +
                            '<input placeholder="Puesto"  type="text" class="validate puesto">' +
                        '</div>' +
                    '</td>' +
                    '<td class="buttons">' +
                        '<input id="edit" type="submit" value="✎"/>' +
                        '<input id="delete" type="submit" value="✘" onclick="$(this).parent().parent().remove()" />' +
                    '</td>' +
                '</tr>';





    var $add = $('#add');
    var $fields = $('#container');


    $add.on("click", function(event){

        $fields.append(template2);
    });



    var $save = $('#save');


    $save.on("click", function(event){
        $('.identificacion').each(function(index, value ) {
                var $value = $(value);
                boxId[index] = $value.val();
            }
        )
        $('.nombre').each(function(index, value ) {
                var $value = $(value);
                boxName[index] = $value.val();
            }
        )
        $('.apellido').each(function(index, value ) {
                var $value = $(value);
                boxName[index] = $value.val();
            }
        )
        $('.telefono').each(function(index, value ) {
                var $value = $(value);
                boxName[index] = $value.val();
            }
        )
        $('.puesto').each(function(index, value ) {
                var $value = $(value);
                boxName[index] = $value.val();
            }
        )
    });



}
