// Sophia S Kim
// Section C 1:30
// sophiaki@andrew.cmu.edu 
// Project-04-StringArt

var x1
var y1 
var x2
var y2 

function setup() {
	createCanvas(400, 300); 
	var x1 = 400;
	var y1 = 100;
	var x2 = 50; 
	var y2 = 300;
}

function draw() {
	background(0);
	//white line
	x1 = 600;
	y1 = 0;
	x2 = 500;
	y2 = 200;

	for (var i = 0; i < 150; i += 1) {
		stroke(255)
		line(x1, y1, x2, y2)
		x1 -= 10
		y2 += 10
	}
	//white 2 line
	x1 = 0;
	y1 = 0;
	x2 = 600;
	y2 = 5;

	for (var i = 0; i < 150; i += 1) {
		stroke(90)
		line(x1, y1, x2, y2)
		x2 -= 10
		y1 += 50
	}
		// light yellow curve line
	x1 = 200;
	y1 = 600;
	x2 = 400;
	y2 = 0;

	for (var i = 0; i < 100; i += 1) {
		stroke(251, 255, 132)
		line(x1, y1, x2, y2)
		x1 -= 30
		y2 += 7
	}
	// light blue curve line
	x1 = 0;
	y1 = 0;
	x2 = 400;
	y2 = 0;
	for (var i = 0; i < 50; i += 1) {
		stroke(148, 191, 255)
		line(x1, y1, x2, y2)
		x1 += 13
		y2 += 10
	}
	// light green curve line
	x1 = 350;
	y1 = 0;
	x2 = 0;
	y2 = 0;

	for (var i = 0; i < 70; i += 1) {
		stroke(155, 255, 124)
		line(x1, y1, x2, y2)
		x1 -= 8
		y2 += 10
	}
	//light red curve line
	x1 = 500;
	y1 = 300;
	x2 = 0;
	y2 = 400;

	for (var i = 0; i < 100; i += 1) {
		stroke(255, 124, 124)
		line(x1, y1, x2, y2)
		x1 -= 8
		y2 -= 7
	}
	//blue curve line
	x1 = 0;
	y1 = 0;
	x2 = 500;
	y2 = 0;
	for (var i = 0; i < 50; i += 1) {
		stroke(11, 34, 255)
		line(x1, y1, x2, y2)
		x1 += 13
		y2 += 10
	}
	//green curve line
	x1 = 250;
	y1 = 0;
	x2 = 0;
	y2 = 0;

	for (var i = 0; i < 70; i += 1) {
		stroke(60, 239, 5)
		line(x1, y1, x2, y2)
		x1 -= 8
		y2 += 10
	}
	//red curve line
	x1 = 400;
	y1 = 300;
	x2 = 0;
	y2 = 400;

	for (var i = 0; i < 100; i += 1) {
		stroke(255, 63, 11)
		line(x1, y1, x2, y2)
		x1 -= 8
		y2 -= 7
	}
	//yellow curve line
	x1 = 400;
	y1 = 600;
	x2 = 400;
	y2 = 0;

	for (var i = 0; i < 100; i += 1) {
		stroke(255, 252, 11)
		line(x1, y1, x2, y2)
		x1 -= 30
		y2 += 7
	}
}