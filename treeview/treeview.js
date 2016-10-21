$body = $('body').css({
    "background-color" : "gray"
});

var $json = new Array();
var $ul = $('<ul id="u0">');
$body.append($ul);
var id = "#u";
var z=0;
var zero =0;
var temporal1;
var temporal2;
var j=0;
var k=0;
var $temp = new Array();
var size = new Array();

$.getJSON("package.json", function($data){

    $json = $data;
    other($json);

    function other(JSON){
        $.each(JSON, function (key, value) {
            if(value.length > 0){
                size[k++]=value.length;
            }
            if(isNaN(parseInt(key))){
                if(z==0){
                    zero++;
                    temporal1 = id;
                    temporal2 = id;
                    for(i=0; i<zero;i++){
                        temporal1 += z;
                    }
                    for(i=0; i<=zero;i++){
                        temporal2 += z;
                    }
                    $temp[j] = $('<ul>').attr("id",temporal2);
                    console.log($(temporal1));
                    $(temporal1).append($temp[j++]);
                }


                $body.append(z + key + "<br>");
            }else{
                z = parseInt(key);
            }
            var temp = JSON[key];
            other(temp);
        });
    }
    for(i=0;i<=k;i++){
        console.log(size[i]);
    }
});