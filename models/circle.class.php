<?php
class Circle
{
    private $radius;
    
    function __construct($radius) {
        
        $this->radius=$radius;
    }
    function draw($r)
    {
       
        $canvas = imagecreate($this->radius*2+50, $this->radius*2+50);
$backgroundColor = imagecolorallocate($canvas, 255, 255, 255);
imagefill($canvas, 0, 0, $backgroundColor);
 
       
// Allocate colors


$green = imagecolorallocate($canvas, 50, 100, 150);



imagefilledellipse($canvas, $this->radius+25, $this->radius+25, $this->radius*2, $this->radius*2, $green);
$path=$r.'circle'. date("Ymdhis") .'.jpg';
imagejpeg($canvas, $path);
return $path;
    }
}
?>