<?php
// Create a 200 x 200 image

$canvas = imagecreate(70, 70);
$backgroundColor = imagecolorallocate($canvas, 255, 255, 255);
imagefill($canvas, 0, 0, $backgroundColor);
 
       
// Allocate colors


$green = imagecolorallocate($canvas, 50, 100, 150);



imagefilledellipse($canvas, 35, 35, 25, 25, $green);

// Output and free from memory
//header('Content-Type: image/jpeg');

imagejpeg($canvas, 'circle.jpg');
//imagedestroy($canvas);
?>