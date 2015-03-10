function parse() {
	var req = new XMLHttpRequest();

	req.open("get", "data.json", true);

	req.onreadystatechange = function() {
		if (req.readyState == 4 && req.status == 200) {
			var vals = JSON.parse(req.responseText);
			var result = "";
        	for (i = 0; i < vals.length; i++) {
					result += "<p>" + vals[i]['content'] + " - " + vals[i]['username'] + "</p>";
			}
        	document.getElementById("messages").innerHTML = result;
    	}
   }
   req.send();
}