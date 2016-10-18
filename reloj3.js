var $circle = new Array();

$body = $('body').css({"background" : "gray",
						"margin" : "0"});


var $circle[0] = $('<div>').css({"background" : "white",
							"width" : "400px",
							"height" : "400px",
							"position" : "relative"});

var percentage = 100;
var colors = ["black", "orange"];
var position = ["static", "absolute"];
var select = 0;

for(i=1; i<=3; i++){
	$circle[i] = $circle[0].clone().css({"border-radius" : "50%",
				"background" : colors[select],
				"width" : percentage + "%",
				"height" : percentage + "%",
				"position" : position[select],
				"margin" : (select*10) + "px"});
	if(i == 0){
		select++;
	}
	percentage -= 5;
}


$circle[2].append($circle[3]);
$circle[1].append($circle[2]);
$circle[0].append($circle[0]);

$body.append($circle[0]);