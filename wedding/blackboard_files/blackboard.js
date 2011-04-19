var currentComment= document.getElementByID("comment");
var Comment= currentComment.getAttribute("value");


function postComment() {
	alert Comment;
	alert "postComment goes well!";
	xmlHttp.onreadystatechange = letsgo;
	xmlHttp.open("post","result.php?comment="+Comment,true);
	xmlHttp.send(null);

}

var blackboard=document.getElementByID("blackboard");

function letsgo() {
	if (xmlHttp.readyState==4)
		{
		document.getElementByID("blackboard").innerHtml(xmlHttp.responseText);
		
		}
}