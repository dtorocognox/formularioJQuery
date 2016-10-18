$body = $('body').css({
    "background-color" : "gray"
});

var $json = new Array();
var size;

$.getJSON("package.json", function($data){

    var keys = "_0";
    console.log($data);
    $json = $data[keys];
    size = $json.length;
    console.log($json.length);
    $json = $data[0];
    for(i=0; i<$json.length; i++){
        keys = "_0" + i;
        console.log($json);
        console.log($json["_01"]);
        console.log($json["_01"][0]);
        console.log($json["_01"][0][0]);
        // for(j=0; j<$json[keys].length; j++){
        //
        // }

    }
});