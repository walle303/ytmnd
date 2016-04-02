var sansArr = ["you'll get bored here, you know","if you haven't gotten bored already, i mean","and then, you'll finally quit.","i know your type","you're, uh, very determined, aren't you?","you'll never give up, even if there's, uh...","absolutely NO benefit to persevering whatsoever.","if i can make that clear.","no matter what, you'll just keep going.","not out of any desire for good or evil...","but just because you think you can.","and because you \"can\"...","... you \"have to.\"","but now, you've reached the end.","there is nothing left for you now.","so, uh, in my personal opinion...","the most \"determined\" thing you can do here?","is to, uh, completely give up.","and... (yawn) do literally anything else.",""]
var sans = new Howl({
	src: ["audio/megalovania.ogg"],
	loop: true,
});
var update_time = new Date();
var percent_time = 1.47686;
var rate = 1;
var rate_timer = percent_time;
var currIndex = -1;
var rateUntilActivation = 6;
var rateIncreaseBeforeNextLineOfDialogue = 2;
function update() {
	var divwidth = document.getElementById('rumbling_sans').offsetWidth;
	var divheight = document.getElementById('rumbling_sans').offsetHeight;
	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());
	rate_timer -= rate * delta / 1000;
	if (rate_timer <= 0) {
		rate_timer += percent_time;
		rate += 0.01;
		sans.rate(rate);
		document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(0) + "%";
	}
	if(rate > rateUntilActivation){
	  currIndex = Math.floor((rate-rateUntilActivation)/rateIncreaseBeforeNextLineOfDialogue)
	  if(currIndex != -1 && currIndex < sansArr.length){
	      document.title = sansArr[currIndex];
	  }
	}
	document.getElementById("sans").style.top = ((rate - Math.random() * rate * 2)+((divheight-500)/2)) + "px";
	document.getElementById("sans").style.left = ((rate - Math.random() * rate * 2)+((divwidth-500)/2)) + "px";
	requestAnimationFrame(update);
}
function run() {
	sans.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
