var $circle = new Array();

$body = $('body').css({"background" : "gray",
						"margin" : "0"});


var $container = $('<div>').css({"background" : "white",
							"width" : "400px",
							"height" : "400px",
							"position" : "relative"});

var percentage = 100;
var colors = ["black", "orange"];

for(i=0; i<=4; i++){
	$circle[1] = $container.clone().css({"border-radius" : "50%",
				"background" : "orange",
				"width" : percentage + "%",
				"height" : percentage + "%",
				"position" : "absolute"});;
}


$container.append($circle[1]);
$body.append($container);