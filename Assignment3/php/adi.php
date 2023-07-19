<!DOCTYPE html>
<html lang="en">
<head>
    <title>Form</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <style type="text/css">
        #CNAForm{
            box-shadow: 0px 0px 3px gray;
            margin-top: 40px;
            margin-bottom: 40px;
            box-shadow: 1px 1px 10px 10px rgb(29, 139, 88);
        }
        i.fa,b,label{color: rgb(29, 139, 88);}
        body{
            background-image: url(pumabg.jpg);
            background-size: 1500px;    
            background-repeat: no-repeat;
            background-position: top;
            background-blend-mode:luminosity;
        }
        .container{
            padding-top: 100px;    
        }
    </style>
</head>
<body>
    <form action="Feedback.php" method="post">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4
            col-lg-offset-4 col-lg-4" id="CNAForm">
                <h3 class="text-center">
                    <img src="puma.png" width="29px">
                    <label style="font-size: 30px;">PUMA Feedback</label><hr/>
                </h3>
                    <div class="form-group">
                        <b>Full Name:</b>
            
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="fa fa-users"></i> 
                        </span>
                        <input type="text" id="TxtFirstname" placeholder="Enter firstname here.." maxlength="20" class="form-control" name="Fname">
                    </div>
                    <div class="form-group">
                        <b>Email Id:</b>
            
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="fa fa-envelope"></i> 
                        </span>
                        <input type="text" id="TxtEmailId" placeholder="Enter Email-Id here.." maxlength="20" class="form-control" name="Email-id">
                    </div>

                    <div class="form-group">
                        <b>Product You Choose:</b>
            
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="fa fa-cart-plus"></i>
                            
                        </span>
                        <select id="DDL_Product" class="form-control"name="Product">
                            <option selected></option>
                            <option value="Shoes">Shoes</option>
                            <option value="T-Shirt">T-Shirt</option>
                            <option value="Hoodie">Hoodie</option>
                            <option value="Caps">Caps</option>
                            <option value="Eyewear">Eyewear</option>
                          </select>
                    </div>

                    <div class="form-group">
                        <b>Review:</b>
            
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="fa fa-star"></i>
                            
                        </span>
                        <select id="DDL_Gender" class="form-control" name="Review">
                            <option selected></option>
                            <option value="5">Very Good</option>
                            <option value="4">Good</option>
                            <option value="3">Average</option>
                            <option value="2">Bad</option>
                            <option value="1">Very Bad</option>
                          </select>
                    </div>

                    <div class="form-group">
                        <b>Description:</b>
            
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="fa fa-users"></i> 
                        </span>
                        <textarea id="Txtdes" maxlength="100" class="form-control" rows="4" cols="50" placeholder="Enter Detail Description here.." name="Descriptions">NULL</textarea>
                    </div>
                    
                    <div class="form-group">
                        <!-- <a href="" class="btn btn-primary" id="submit"><i class="fa fa-user-puls"></i>Submit</a> -->
                        <input type="submit" id="submit">
                    </div>

            
            </div>
        </div>
    </div>
</form>



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

$sql = "INSERT INTO FB_Table (Fname,Email_id,Product,Review,Descriptions)
VALUES ('".$_POST["Fname"]."','".$_POST["Email-id"]."','".$_POST["Product"]."','".$_POST["Review"]."','".$_POST["Descriptions"]."')";



if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
}
?>
</body>
</html>