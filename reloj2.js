var $all = $('body').css("background","grey");

//Circulo Principal
var $circle1 = $('<div>').css({
    "background-color": "purple",
    "height": "400px",
    "width": "400px",
    "border-radius": "100%",
    "position": "relative"
});

//Ciruculo medio usado para tapar lineas medias
var $circle2 = $circle1.clone();
$circle2.css({
    "height": "340px",
    "width": "340px",
    "left": "7%",
    "top": "7%"
});

//Circulo 3,4,5 eje de rotación de las maencillas
var $circle3 =  $('<div>').css({
    "background-color": "black",
    "height": "35px",
    "width": "35px",
    "border-radius": "100%",
    "position": "absolute",
    // "top" : "47%",
    // "left" : "46%",
        "top" : "47%",
    "left" : "46%",
    'transform' : 'rotate(180deg)'
});

var $circle4 = $circle3.clone();
var $circle5 = $circle4.clone();



var width = ["20px", "10px"];
var left = ["190px", "195px"];
var transform = 0;
var X = 0;


for(i=0; i<=5; i++){
    if(i==0 || i==3){
        X = 0;
    }else{
        X = 1;
    }
    var $temp = $('<div>').css({
        "background-color": "black",
        "height": "400px",
        "width": width[X],
        "position": "absolute",
        "left": left[X]
    });
    $temp.css("transform", 'rotate( '+ (transform) +'deg)');
    transform+=30;
    $circle1.append($temp);
}


var $hand1 = $('<div>').css({
        'background-color': 'black',
        'height': '160px' ,
        'width': '16px' ,
        'position': 'absolute',
        'left': '25%',
        'top' : '15%'
});

var $hand2 = $hand1.clone();
$hand2.css({
    "height" : "120px",
    "width" : "20px"
});

var $hand3 = $hand1.clone();
$hand3.css({
    "height" : "160px",
    "width" : "12px"
});

//Agrega las manecillas
$circle5.append($hand3);
$circle4.append($hand2);
$circle3.append($hand1);
$circle1.append($circle2, $circle3, $circle4, $circle5);
$all.append($circle1);

//obtiene la hora actual
var time = new Date();
var hour = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();

//Ubica las manecillas en la hora actual
var S = 186 + (seconds * 6);
var M = 186 + (minutes * 6);
var H = 180 + (hour * 30);
var sec = 0;

$circle3.css("transform" , 'rotate('+ M +'deg)');
$circle4.css("transform" , 'rotate('+ H +'deg)');
$circle5.css("transform" , 'rotate('+ S +'deg)');

///Mueve las manecillas
setInterval(function(){
    $circle5.css("transform" , 'rotate('+ S +'deg)');
    S+=6;
    sec++;
    if(sec==60){
        $circle3.css("transform" , 'rotate('+ M +'deg)');
        M+=6;
        sec=0;
        $circle4.css("transform" , 'rotate('+ H +'deg)');
        H+=0.5;
    }
}, 1000);


