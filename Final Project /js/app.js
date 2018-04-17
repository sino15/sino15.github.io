//write a function that would show the time 

function ShowTime() {
	// define, date, hour, minutes,seconds(this would go as an object)
	
	var date = new Date();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	

	if (seconds < 10){
		seconds = "0" + seconds
	} 
	 if (hour < 23){
	 	hour = "0" + hour 
	 

	 }
	  if(minutes < 10){
	  	minutes = "0" + minutes
	  }
	
	var time = hour + ":" + minutes + ":" + seconds;
	$("#watchDisplay").text(time);
  }
  setInterval(ShowTime, 1000);