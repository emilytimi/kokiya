function postComment() {
	var currentComment= document.getElementById("comment").value;
	alert(currentComment);
	createXMLHttpRequest();
	xmlHttp.onreadystatechange = letsgo;
	xmlHttp.open("get","result.php?comment=klklklklk",true);
	xmlHttp.send(null);
}

var blackboard=document.getElementByID("blackboard");

function letsgo() {
	if (xmlHttp.readyState==4)
		{
 			document.getElementById("blackboard").innerHTML=xmlHttp.responseText; 
		}
}