<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>You are invited!</title>
</head>

<body>
<div id="container">
<?php
$name = trim($_POST['name']);


if(!get_magic_quotes_gpc()) {
	$name = addslashes($name);
}

//connect
@ $connect = new MySQLi('localhost', 'sepmein', 'crimson87' ,'sepmein_kky');
$query = "select * from invitation where name like ('".$name."')";
if (mysqli_connect_errno()) {
	echo 'Error: Could not connect to database. Please try again later or contact spencer.';
	exit;
}

if (!$name) {
	echo "<h1>Oops ! 没填？</h1>";
} elseif (!$connect->query($query)) {
	echo "<h1>哎。。。。。。你懂的。。。。。</h1>";
}
else {
	showInvitation($name);
}

function showInvitation($name){
echo "<h1>You are invited</h1>";
echo "<p>尊敬的<strong>".$name."</strong>您好：</p>";
}

?>
<form method="post">

</form>
</div>
</body>
</html>