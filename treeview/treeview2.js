$body = $('body').css({
    "background-color" : "gray"
});

var $json = new Array();
var $ul = $('<ul id="u0">');
$body.append($ul);
var id = "#u";
var z=0;
var arreglo = "";
var k=0;
var switche =0;
var $temp;

var size = new Array();
$.getJSON("package.json", function process($data){

    $json = $data["Procesos"];
    console.log($json);
    //
    // for (var key in $json) {
    //     console.log(key);
    // }

    other($json);
    function other(JSON){

        $.each(JSON, function (key, value) {
            if(value.length > 0){
                size[k++]=value.length;
            }
            // if(isNaN(parseInt(key))){
                arreglo+= (z + key + ",");
                $temp = key;
                $body.append( key + "<br>");
            // }else{
                z = parseInt(key);
            // }
            var temp = JSON[key];
            if(temp == 0){
                switche++;
            }
            other(temp);
        });
    }
    for(i=0;i<k;i++){
        console.log(size[i]);
    }

    // process($temp[0]);
});