var width = 1400;
		var height = 700;
		var graphic;
		var dropsPerSec = 1;
		var windStrength = 0;
		graphic = d3.select("#graphicContainer").append("svg")
			.attr("width", width)
			.attr("height", height)
			.attr("id", "graphic")
			.attr("overflow", "hidden");
		function makeRain() { 
			
			for (var i = 0; i < dropsPerSec; i++) {
				startX = Math.random() * width,
				startY = Math.random() * 100 - 100,
				endX = startX;
				endY = height + 200;
				//console.log("startX", startX, "startY", startY);
				graphic.insert("circle")
				.attr("cx", startX)
				.attr("cy", startY)
				.attr("r", 3)
				.style("fill","blue")
				.transition()
					.duration(2000)
					.attr("cx", endX)
					.attr("cy", endY)		
					.remove();
			};
		}
		d3.timer(makeRain, 10);