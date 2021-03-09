<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    // Database connection
    $conn = new mysqli('localhost','root','','contactus');
    if($conn->connect_error){
        echo "$conn->connect_error";
        die("Connection Failed : ". $conn->connect_error);
    } else {
        $stmt = $conn->prepare("insert into usermessage(name, email, subject, message) values(?, ?, ?, ?)");
        $stmt->bind_param("ssss", $name, $email, $subject, $message);
        $execval = $stmt->execute();
        echo $execval;
        echo "Thank you for contacting us, $name. You will get a reply within 24 hours.";
        $stmt->close();
        $conn->close();

        //  To redirect form on a particular page
}
    

?>