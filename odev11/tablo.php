<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tablo Oluştur</title>
</head>
<body>

<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $rows = isset($_POST["rows"]) ? (int)$_POST["rows"] : 0;
    $columns = isset($_POST["columns"]) ? (int)$_POST["columns"] : 0;

    if ($rows > 0 && $columns > 0) {
        echo "<h2>Oluşturulan Tablo:</h2>";
        echo "<table border='1'>";
        for ($i = 1; $i <= $rows; $i++) {
            echo "<tr>";
            for ($j = 1; $j <= $columns; $j++) {
                $randomNumber = rand(1, 100);
                echo "<td>$randomNumber</td>";
            }
            echo "</tr>";
        }
        echo "</table>";
    } else {
        echo "Geçersiz satır veya sütun sayısı!";
    }
}
?>

<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
    <label for="rows">Satır Sayısı:</label>
    <input type="number" name="rows" id="rows" required>
    
    <label for="columns">Sütun Sayısı:</label>
    <input type="number" name="columns" id="columns" required>
    
    <input type="submit" value="Tablo Oluştur">
</form>
    
</body>
</html>
