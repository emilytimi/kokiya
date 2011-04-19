<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>just a test</title>
<script src="http://code.jquery.com/jquery-1.5.2.min.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="invitation.css" media="all"  />
</head>

<body>
<div>
<ul>
<li id="invitation">
invitation
</li>
<div></div>
<!--<p>whatever</p>-->
<form action="invitation.php" method="post">
<input type="text" name="name" value="输入姓名 or Press A" accesskey="a"/>
<input type="submit" name="go" value="go"/>
</form>
</ul>
</div>
</body>
<script>
$("#invitation").click(function(){
$("form").toggle("slow");}
);


</script>
</html>