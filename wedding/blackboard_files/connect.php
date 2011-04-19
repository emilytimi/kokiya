<?php
@ $connect =new mysqli("localhost","sepmein","crimson87","sepmein_kky");
$connect->query("SET NAMES utf8");
if (mysqli_connect_errno()) {
	echo 'Could not connect: ' . mysqli_connect_error();
	exit;
}
?>