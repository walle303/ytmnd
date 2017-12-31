var gaster = new Howl({
	src: ["audio/gaster.ogg"],
	loop: true,
});

var update_time = new Date();

var percent_time = 0.57686;

var rate = 1;
var rate_timer = percent_time;

function update() {

	var divwidth = document.getElementById('mystery_man').offsetWidth;
	var divheight = document.getElementById('mystery_man').offsetHeight;

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= rate * delta / 1000;

	if (rate_timer <= 0) {
		rate_timer += percent_time;
		rate += 0.01;
		gaster.rate(rate);
		document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(0) + "%";
	}
	if (rate >= 6.66) {
		document.getElementById("mystery").style.visibility = "hidden";
		document.getElementById("mystery2").style.visibility = "visible";
		document.getElementById("mystery2").style.top = ((rate - Math.random() * rate * 2)+((divheight-500)/2)) + "px";
		document.getElementById("mystery2").style.left = ((rate - Math.random() * rate * 2)+((divwidth-500)/2)) + "px";
	} else {
		document.getElementById("mystery").style.visibility = "block";
		document.getElementById("mystery").style.top = ((rate - Math.random() * rate * 2)+((divheight-500)/2)) + "px";
		document.getElementById("mystery").style.left = ((rate - Math.random() * rate * 2)+((divwidth-500)/2)) + "px";
	}

	if (rate >= 6.66) {
		document.getElementById("mystery").style.visibility = "hidden";
		document.getElementById("mystery2").style.visibility = "visible";
		document.getElementById("mystery2").style.top = ((rate - Math.random() * rate * 2)+((divheight-500)/2)) + "px";
		document.getElementById("mystery2").style.left = ((rate - Math.random() * rate * 2)+((divwidth-500)/2)) + "px";
		var newOpacity = 1-(rate-6.66)/660;
		if(newOpacity < 0)newOpacity = 0;
		document.getElementById("mystery2").style.opacity = newOpacity+"";
	    }
	requestAnimationFrame(update);
}

function run() {
	gaster.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
