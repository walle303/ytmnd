var sans = new Howl({
	src: ["audio/sans..ogg"],
	loop: true,
});

var update_time = new Date();

var percent_time = 0.57686;

bottomcount = 0
sansrot = 0
sansmod = Math.round(Math.random() * 4)

var rate = 1;
var rate_timer = percent_time;
function update() {

	var divwidth = document.getElementById('rumbling_sans').offsetWidth;
	var divheight = document.getElementById('rumbling_sans').offsetHeight;

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= rate * 25 / (delta / (rate * 5));

	if (rate_timer <= 0) {
		rate_timer += percent_time;
		rate -= (0.0001 * rate);
		if (rate <= 0.0001) {
			rate = 0.0001
		}		
		sans.rate(rate);
		document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(2) + "%";
	}
	//transform:rotate(25deg)
	document.getElementById("sans").style.transform = "rotate("+sansrot+"deg)";
	document.getElementById("sans").style.top = ((rate - Math.random() * rate * 2)+((divheight-500)/2)) + "px";
	document.getElementById("sans").style.left = ((rate - Math.random() * rate * 2)+((divwidth-500)/2)) + "px";
	sansrot = sansrot + ((Math.round(Math.random()) * 4 - sansmod) * rate)
	if (rate <= 0.9 && rate > 0.85) {
		document.title = "Sans... What are you doing?"
	}
	if (rate <= 0.85 && rate > 0.8) {
		document.title = "Stop it Sans."
	}
	if (rate <= 0.8 && rate > 0.75) {
		document.title = "Sans!"
	}
	if (rate <= 0.75 && rate > 0.7) {
		document.title = "Quit it out!"
	}
	if (rate <= 0.7 && rate > 0.65) {
		document.title = "If you don't stop this instant I'm calling Toriel!"
	}
	if (rate <= 0.65 && rate > 0.6) {
		document.title = "Sans?"
	}
	if (rate <= 0.6 && rate > 0.55) {
		document.title = "Are you okay Sans?"
	}
	if (rate <= 0.55 && rate > 0.5) {
		document.title = "I'm going to go get help."
	}
	if (rate <= 0.50) {
		document.title = "SANS. EXCEPT IT KEEPS GETTING SLOWER?"
	}
	if (rate == 0.0001) {
		document.title = '\uD83D\uDCA7\u264B\u25A0\u2B27\u270D'
		bottomcount++
		if (bottomcount => 100) {
			window.location.replace("https://walle303.github.io/ytmnd/gast-getting-gaster/");
		}	
	}
	requestAnimationFrame(update);
	
}

function run() {
	sans.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
