$body = $('body').css({
    "background-color" : "gray"
});

var $json = new Array();

$.getJSON("package.json", function($data){

    $json = $data;
    other($json);

    //Obtiene las llaves del json
    function other(JSON){
        $.each(JSON, function (key, value) {
            if(isNaN(parseInt(key))){
                $body.append(key + "<br>");
            }
            var temp = JSON[key];
            other(temp);
        });
    }
});