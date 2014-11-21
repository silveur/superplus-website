<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<link rel="stylesheet" type="text/css" href="style.css">
		<link rel="icon" type="image/jpg" href="images/favicon14px.jpg">
		<title>Superplus</title>
	</head>
	<script src="js/scripts.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<body>

		<div id="slides" class="shadow">
		<img class='opaque' src='images/1.jpg' height='504' width='754'>
		<?php
			$dir = "images";
			if ($handle = opendir($dir)) 
			{	
				$array = array();
	   			while (false !== ($entry = readdir($handle))) 
	   			{
	       			if ($entry != "." && $entry != ".." && $entry != ".DS_Store") 
			        {
			        	$fileUrl = $dir . "/" . $entry ;
			        	$fileUrl = str_replace(' ', '%20', $fileUrl);
			        	$extension = pathinfo($fileUrl);
			        	if ($extension['extension'] == "jpg" || $extension['extension'] == "gif")
			        	{
			        		if ($entry != "1.jpg")
			        			array_push($array, $entry);
			       		}
			        }
	    		}
	    		sort($array, SORT_NATURAL | SORT_FLAG_CASE);
	    		foreach ($array as $key => $val)
	    		{
   					echo "<img class='bottom' src=images/" . $val . " height='504' width='754'>";
				}
	    	}
	    	closedir($handle);
		?>
		</div>

		<div id="arrows">
			<span class="selected" onclick="loadPreviousSlide()"> <a href='#' > < </a></span>
			<span class="selected" onclick="loadNextSlide()"> <a href='#' > > </a></span>
		</div>
		
		<script>
		$( document ).ready(function() 
		{
			getWindowBoundaries();
			//showSlides();
			
			$("#arrows").on('click', 'span', function() {
		    $("#slides img").removeClass("opaque");
		    $("#slides img").eq(slideIndex).addClass("opaque");
		    $("#arrows span").removeClass("selected");
		    $(this).addClass("selected");
		  });
		});
		</script>
	</body>
</html>

<!-- Copyright Silvere Letellier https://github.com/silveur -->