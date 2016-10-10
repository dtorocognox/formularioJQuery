var boxId = new Array();
var i = 0;

function inicio() {


var template2 = '<tr>' +
                    '<td>' +
                        '<div class="input-field col s6">' +
                            '<input placeholder="Ej: 1234567" type="text" class="validate identificacion">' +
                        '</div>' +
                    '</td>' +
                    '<td>' +
                        '<div class="input-field col s6">' +
                            '<input placeholder="xxxxxx" type="text" class="validate">' +
                        '</div>' +
                    '</td>' +
                    '<td>' +
                        '<div class="input-field col s6">' +
                            '<input placeholder="xxxxxx" type="text" class="validate">' +
                        '</div>' +
                    '</td>' +
                    '<td>' +
                        '<div class="input-field col s6">' +
                            '<input placeholder="Tel ó Cel" type="text" class="validate">' +
                        '</div>' +
                    '</td>' +
                    '<td>' +
                        '<div class="input-field col s6">' +
                            '<input placeholder="Puesto"  type="text" class="validate">' +
                        '</div>' +
                    '</td>' +
                    '<td class="buttons">' +
                        '<input id="edit" type="submit" value="✎"/>' +
                        '<input id="delete" type="submit" value="✘"/>' +
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
                alert( index + ": " +  $value.val());
                boxId[index] = $value.val();
            }
        )});






}
