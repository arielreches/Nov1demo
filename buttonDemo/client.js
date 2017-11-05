/*
Client side JS, when the button is pressed
this sends an AJAX request to the node
server (see server.js) and then the 
server replies with a string and the amt
of times the button has been pressed, which
is displayed in div1.
*/



$(document).ready(function () {
	//HTML <button> clicked function
	$("button").click(function() {
	console.log("button pressed");

		//sends an AJAX POST request to the localhost node server
		$.ajax({url:"http://localhost:3000/button-click",
			type: "POST", 

			//on a successful request
			success: function(result){

				//set <div id="div1"> to the text received
				$("#div1").html(result);
				console.log("recieved server:" + result);
			}
		});
	});
});