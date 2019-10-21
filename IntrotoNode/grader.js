function average(scores) {
	var sum=0;
	scores.forEach(function(score) {
		sum += score;
	})
	var avg = sum/scores.length;
	return Math.round(avg);
}

var equal = average([1,1,1,1,1,10]);
console.log("Average grade: "+equal);