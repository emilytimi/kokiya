<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>kokiya.blackboard</title>
<script type="text/javascript" src="ajax.js"></script>
<script type="text/javascript" src="blackboard.js"></script>
</head>

<body>

	<div id="blackboard">
		<p class="comment" id="cm_1">first comment</p>
		<?php
		include_once 'connect.php';

		$query="select * from blackboard";
		$result = $connect->query($query);

		//		$num_results = $result->num_rows;
		while($row = mysqli_fetch_array($result)){
			echo "<p class=\"comment\" id=\"".$row["comment_id"]."\">";
			echo $row["comment"];
			echo "</p>";
		}

		?>
	</div>

	<div id="addMessage">
		<input id="comment" type="text" value="想说点啥？" /> <input type="button" value="提交"
			onclick=postComment() />
	</div>
</body>
</html>
