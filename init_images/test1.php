<?php
// Create a 200 x 200 image

$canvas = imagecreate(50, 50);
$backgroundColor = imagecolorallocate($canvas, 255, 255, 255);
imagefill($canvas, 0, 0, $backgroundColor);
 
       
// Allocate colors


$green = imagecolorallocate($canvas, 50, 100, 150);



imagefilledrectangle($canvas, 5, 5, 45, 45, $green);

// Output and free from memory
//header('Content-Type: image/jpeg');

imagejpeg($canvas, 'rect.jpg');
//imagedestroy($canvas);
?>