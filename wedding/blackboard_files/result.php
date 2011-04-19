<?php
include_once 'connect.php';

$comment = $_POST['comment'];
//插入
$query = "insert into comment (\"comment\") values (\"".$comment."\")";
$connect->query($query);

//检索
$query="select comment_id,comment from blackboard order by comment_id desc limit 0,1";
$result= $connect->query($query);
while ($row=mysqli_fetch_array($result)){
	echo "<p id=\"".$row["comment_id"]."\">";
	echo $row["comment"];
	echo "</p>";
}
?>