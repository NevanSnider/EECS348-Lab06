<html>
<body>
<?php
$n = $_POST["n"];

echo "<table>";
echo "<tr><td></td>";
for ($i = 1; $i <= $n; $i++){
	echo "<td>$i</td>";
}

echo "</tr>";

for ($i = 1; $i <= $n; $i++){
	echo "<tr>";
	echo "<td>$i</td>";
	for ($m = 1; $m <= $n; $m++){
		echo "<td>".($i*$m)."</td>";
	}
	echo "</tr>";
}

echo "</table>";
?>

</body>
</html>