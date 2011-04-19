<?php
include_once 'connect.php';

$comment = $_GET['comment'];

$query = "INSERT INTO `sepmein_kky`.`blackboard` (`comment_id`, `invitation_id`, `comment`, `time`) VALUES (NULL, \'\', \'".$comment."\', \'\');";
$connect->query($query);



$query="select comment_id,comment from blackboard order by comment_id asc";
$result= $connect->query($query);

while($row = mysqli_fetch_array($result)){
	echo "<p id=\"".$row["comment_id"]."\">";
	echo $row["comment"];
	echo "</p>";
}

?>