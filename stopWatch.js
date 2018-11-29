//global variables
var time = 0;
var interval;
var started = false;
var resetted = false;
var recorded = false;
var timeCapture;

//execute functions
setUp();

//define functions

function startTimer(){
	interval = setInterval(function(){
		time++;
		document.getElementById("timer").innerHTML = time / 100;
	},10)
	started = true;
}

function stopTimer(){
	clearInterval(interval);
	started = false;
}

function setUp(){
	document.getElementById("timer").innerHTML = time + ".00";

	//Allows the timer to start counting
	document.getElementById('startStop').addEventListener('click', function(){

		if (started == false){
			startTimer();
			document.getElementById('startStop').style.background='#DC143C';	
		}
		
		else{ 
			stopTimer();
			document.getElementById('startStop').style.background='#32CD32';
		}
	})
	
	//Resets the timer
	document.getElementById('reset').addEventListener('click', function(){
		location.reload();
	})

	//Adds the time when Record was pressed to the Past Times without stopping the watch
	document.getElementById('recordTime').addEventListener('click', function(){
		var timerColor = document.getElementById('timer').style.color;
		if (timerColor !== '#FF0000'){
		  document.getElementById('timer').style.color='#FF0000';
		  setTimeout(() =>{
		  	document.getElementById('timer').style.color=timerColor;
		  },100)
		}

		timeCapture = time / 100;
		document.getElementById('listedTimes').innerHTML += timeCapture + '<br>';
	})
}
