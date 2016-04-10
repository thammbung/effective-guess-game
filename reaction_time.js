	var box = document.getElementById("box");
	var clickedTime; var createdTime; var reactionTime; var clicks; var total; var avg;
	var myArray = new Array();
	function getRandomColor() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
	}	
		
	function makeBox() {
		var time = Math.random()*2000;
		var radius = Math.floor((Math.random()*300)+ 10);
		radius += "px";
		var width = Math.floor((Math.random()*300)+ 10);
		width += "px";
		var height = Math.floor((Math.random()*300)+ 10);
		height += "px";
		var borderLeft = Math.floor((Math.random()*300)+ 10);
		borderLeft += "px";
		var borderRight = Math.floor((Math.random()*300)+ 10);
		borderLeft += "px";
		var borderBottom = Math.floor((Math.random()*300)+ 300);
		borderBottom += "px";
		var top = Math.floor((Math.random()*100));
		top += "px";
		var left = Math.floor((Math.random()*1000));
		left += "px";
		var right = Math.floor((Math.random()*1000));
		right += "px";
		setTimeout(function(){
				box.style.backgroundColor = getRandomColor();
				box.style.borderRadius = radius;
				box.style.width = width;
				box.style.height = height;
				box.style.borderLeft = borderLeft;
				box.style.borderRight = borderRight;
				box.style.borderBottom = borderBottom;
				box.style.top = top;
				box.style.left = left;
				box.style.right = right;
				box.style.display = "block";
				createdTime = Date.now();
			}, time);
		}
		
		
		function clickbox(){
		clicks = 0;
		box.onclick = function(){
			clicks++;
			document.getElementById("clicks").innerHTML = clicks;
			
			clickedTime = Date.now();
			reactionTime =(clickedTime - createdTime)/1000;
			document.getElementById("time").innerHTML = reactionTime;
			box.style.display = "none";
			over();			
			makeBox();	
			myArray.push(reactionTime);
			console.log(myArray);	
		}
		}
		function over(){
			if(clicks == 10){
				alert("Game Over! Click the results button to see your time.");
				clicks = 0;
				makebox() = false;
			}
		}
		function table(){
			document.getElementById("results").onclick = function(){
			document.getElementById("array").innerHTML = myArray;	
			}
		}
		function averageMean(){
		total = 0;
		
		for(var i = 0; i < myArray.length; i++) {
		total += myArray[i];
		}
		avg = total / myArray.length;
		document.getElementById("mean").onclick = function(){
		document.getElementById("average").innerHTML = (myArray.sort())[0];
		}
		}	
	function main(){
		makeBox();	
		clickbox();
		
		
			
	}
		

	
	main();
	table();
	averageMean();
			
			