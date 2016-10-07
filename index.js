
var template = '<tr>' +
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
                        '<input id="add" type="submit" value="➕"/>' +
                    '</td>' +
                '</tr>' ;

function inicio() {

    var $edit = $('#edit');
    var $delete = $('#delete');
    var $add = $('#add');

    var $fields = $('#fields');

    $edit.on("click", function(event){
        var $this = $(this);
        $this.animate({'fontSize': '25px'},'slow');
        $fields.append(template);
        console.log(fields);
    });




}
