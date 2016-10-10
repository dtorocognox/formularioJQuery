var $boxId = new Array();


function inicio() {


var template2 = '<tr>' +
                    '<td>' +
                        '<div class="input-field col s6">' +
                            '<input placeholder="Ej: 1234567" id="id" type="text" class="validate identificacion">' +
                        '</div>' +
                    '</td>' +
                    '<td>' +
                        '<div class="input-field col s6">' +
                            '<input placeholder="xxxxxx" id="name" type="text" class="validate">' +
                        '</div>' +
                    '</td>' +
                    '<td>' +
                        '<div class="input-field col s6">' +
                            '<input placeholder="xxxxxx" id="last_name" type="text" class="validate">' +
                        '</div>' +
                    '</td>' +
                    '<td>' +
                        '<div class="input-field col s6">' +
                            '<input placeholder="Tel ó Cel" id="phone" type="text" class="validate">' +
                        '</div>' +
                    '</td>' +
                    '<td>' +
                        '<div class="input-field col s6">' +
                            '<input placeholder="Puesto" id="position" type="text" class="validate">' +
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
            }
        )
    });






}
