$body = $('body').css({
    "background-color" : "gray"
});

var $json = new Array();
var size =1;



$.getJSON("package.json", function($data){

    $json = $data;

    other($json);

    function other(JSON){
        $.each(JSON, function (key, value) {
            size = value.length;
            $body.append(key);
            console.log(JSON);
            JSON = JSON[key][0];
            console.log(JSON);
            other(JSON);
            if(JSON == false){
                console.log(JSON);
            }
        });
    }




});