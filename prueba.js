var boxId = new Array();
var i = 0;


function inicio() {



    var template1 = '<tr>' +
        '<td>' +
        '<div class="input-field col s6">' +
        '<input placeholder="Ej: 1234567" id="id" type="text" class="validate">' +
        '<label for="id"></label>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="input-field col s6">' +
        '<input placeholder="xxxxxx" id="name" type="text" class="validate">' +
        '<label for="name"></label>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="input-field col s6">' +
        '<input placeholder="xxxxxx" id="last_name" type="text" class="validate">' +
        '<label for="last_name"></label>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="input-field col s6">' +
        '<input placeholder="Tel ó Cel" id="phone" type="text" class="validate">' +
        '<label for="phone"></label>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="input-field col s6">' +
        '<input placeholder="Puesto" id="position" type="text" class="validate">' +
        '<label for="position"></label>' +
        '</div>' +
        '</td>' +
        '<td class="buttons">' +
        '<input id="edit" type="submit" value="✎"/>' +
        '<input id="delete" type="submit" value="✘"/>' +
        '</td>' +
        '</tr>';




    var $add = $('#add');
    var $fields = $('#fields');

    $add.on("click", function(event){

        $fields.append(template1);

    });


    var $por = $('#por');


    $por.on("click", function(event){
        $('.identificacion').each(function(index, value ) {
                var $value = $(value);
                alert( index + ": " +  $value.val());
                boxId[i++] = $value.val();
            }
        )
    });

}
