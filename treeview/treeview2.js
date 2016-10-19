$body = $('body').css({
    "background-color" : "gray"
});

var $JSON;

$.getJSON("package.json", function($data){
    $JSON = JSON.stringify($data);
    console.log($JSON);

});