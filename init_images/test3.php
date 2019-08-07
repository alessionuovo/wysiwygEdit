<?php
// Create a 200 x 200 image

$canvas = imagecreate(50, 50);
$backgroundColor = imagecolorallocate($canvas, 255, 255, 255);
imagefill($canvas, 0, 0, $backgroundColor);
 
       
// Allocate colors


$green = imagecolorallocate($canvas, 50, 100, 150);



imageline($canvas, 40, 40, 5, 5, $green);

// Output and free from memory
//header('Content-Type: image/jpeg');

imagejpeg($canvas, 'line.jpg');
//imagedestroy($canvas);
?>