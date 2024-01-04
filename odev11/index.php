<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1 - 100 arası tek sayılar</title>
</head>
<body>
    <a href="./tablo.php">Tablo</a>
<ul>
<?php    
    for ($x = 0; $x <= 100; $x++) {
        if ($x % 2 != 0){
            echo "<li> $x </li>";
        }
    }
?>  

</ul>
</body>
</html>