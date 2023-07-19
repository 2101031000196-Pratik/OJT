<!-- THE PHP CODE  -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "Feedback";



// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO FB_Table (Fname,Lname,Contact,Email,Mess)
VALUES ('".$_POST["Fname"]."', '".$_POST["Lname"]."','".$_POST["Contact"]."','".$_POST["Email"]."','".$_POST["Mess"]."')";



if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
}
?>
