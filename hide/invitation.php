<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>欢迎！我们的朋友们！</title>
</head>
<body>
<div>
<h2>Welcome</h2>
</div>
<?php

echo "<p>test</p>";
echo "<br/>connect to mysql:";
$con= new mysqli(localhost,sepmein,crimson87,sepmein_kky);

/* check connection */ 
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

/*
$query=("drop table invitation");
if ($con->query($query)) echo $query." successful!";
*/

/*
$query=("create table invitation
(	id int unsigned primary key auto_increment not null,
	name char(8) not null,
	checkin tinyint,
	jiaotong tinyint
);");

$con->query($query);
*/


?>

<?php
require 'footer.php';
?>
</body>
</html>
