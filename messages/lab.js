req = new XMLHttpRequest();

		// Set up the request
		// WARNING: Please bear in mind that XHR is subject (largely) to JavaScript's Same Origin Policy
		req.open("get", "data.json", true);
		// Set up handler for the response
		req.onreadystatechange = myCallbackFunction;

		// Execute the request
		req.send();

		function myCallbackFunction() {
			console.log("In my callback function " + req.readyState);
			if (req.readyState == 4 && req.status == 200) {
				alert("Got data back!");
				data = JSON.parse(req.responseText);
				/*var result = "";
				for (i = 0; i < data.length; i++) {
					result += "<p>" + data[i]['username'] + " - " + data[i]["content"] + "</p>";
				}*/
				document.getElementById("list").innerHTML = req.responseText;
				function update() {
				theMessage = document.getElementById("msg").value;
				toUpdate = document.getElementById("content");
				
				// The idea: create a new node and prepend to the first node in the "content" div
				newElem = document.createElement("p");
				newElem.innerHTML = '<p class="message">' +theMessage + " #FML</p>";
				toUpdate.insertBefore(newElem, toUpdate.childNodes[0]);// Your JavaScript goes here...