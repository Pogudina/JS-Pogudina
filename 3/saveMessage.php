<?php

	$dbhost = 'localhost';
	$dbuser = 'a0765723_prop';
	$dbpass = 'prop';
	$dbname = 'a0765723_prop';
	$dblink = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
	
	if ($dblink->connect_errno) {
		printf("Failed to connect to database");
		exit();
	}
	$sql = "INSERT INTO `messages` (`id`, `name`, `msg`, `email`, `datepub`) VALUES (NULL, '{$_POST['name']}', '{$_POST['msg']}', '{$_POST['email']}', '{$_POST['datepub']}')";
	if ($dblink->query($sql) === TRUE) {
		echo "New record created successfully";
	} else {
	    
		echo "Error: " . $sql . "<br>" . $dblink->error;
	}

	$dblink->close();
	
?>
