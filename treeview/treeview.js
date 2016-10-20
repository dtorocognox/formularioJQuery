$body = $('body').css({
    "background-color" : "white"
});

var $json = new Array();
var z=0;
var $ul = $('<ul id="u0">');
$body.append($ul);
var id = "#u0";

$.getJSON("package.json", function($data){

    $json = $data;
    other($json);

    function other(JSON){
        $.each(JSON, function (key) {
            if(isNaN(parseInt(key))){
                if(z==0){
                    console.log(id);
                    $(id).append('<ul id="' + id);
                    id+="0";
                }
                console.log(id);
                $(id).append('<li>' + z + key + '</li>');
            }else{
                z = parseInt(key);
                console.log(z);
            }
            var temp = JSON[key];
            other(temp);
        });

    }

});