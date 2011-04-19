<html>
<head></head>
<body>
<?php

echo "<p>test</p>";
echo "<br/>connect to mysql:";
$con= new mysqli(localhost,sepmein,crimson87,sepmein_kky);

/* check connection */ 
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query=("drop table invitation");
if ($con->query($query)) echo $query." successful!";

?>
</body>
</html>