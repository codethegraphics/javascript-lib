


(function (root, factory, ud) {
	if (typeof define === 'function' && define.amd) {
		console.log("Hello, I am Define and Your Journey is started.");
		define(factory);
	} else if (typeof exports === 'object') {
		console.log("Hello, I am Module Export and Your Journey is started.");
		module.exports = factory;
	} else {
		console.log("Hello, I am Window and Your Journey is started.");
		root.started = factory(root);
	}
}(
	this,
	function (global) {
		console.log("Hello, I am Graphics. Do stuff using me.");

		var version = "1.0.0";

		global.Graph = function () {};

		Graph.prototype.greet = function(){
			return "Howdy";
		};

		Graph.prototype.$ = function (tar) {
			return document.getElementById(tar);
		};
	}
));





dimensions = {
	x0: 200,
	y0: 200,
	radius: 200
}

Graph.prototype.drawCircle = function(dimensions) {
 	// body...

	var x = dimensions.radius;
	var y = 0;
	var decision_var = 1 - x;

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var imgData = ctx.createImageData(1,1);

	// pixel color
	imgData.data[0] = 0;
	imgData.data[1] = 255;
	imgData.data[2] = 0;
	imgData.data[3] = 255;

	var x0 = dimensions.x0,
		y0 = dimensions.y0;

	while (y <= x) {
		ctx.putImageData (imgData,  x + x0,  y + y0);// Octant 1
		ctx.putImageData (imgData,  y + x0,  x + y0); // Octant 2
		ctx.putImageData (imgData, -x + x0,  y + y0); // Octant 4
		ctx.putImageData (imgData, -y + x0,  x + y0); // Octant 3
		ctx.putImageData (imgData, -x + x0, -y + y0); // Octant 5
		ctx.putImageData (imgData, -y + x0, -x + y0); // Octant 6
		ctx.putImageData (imgData,  x + x0, -y + y0); // Octant 7
		ctx.putImageData (imgData,  y + x0, -x + y0); // Octant 8

		y++;
		if (decision_var <= 0) {
			decision_var += 2 * y + 1;
		} else {
			x--;
			decision_var += 2 * (y-x) + 1; 
		}
	}   
};


var obj = new Graph ();
obj.drawCircle ();
