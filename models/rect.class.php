<?php
class Rect
{
    private $length;
    private $width;
    function __construct($length, $width) {
        $this->length=$length;
        $this->width=$width;
    }
    function draw($r)
    {
        $x1=5;
        $y1=5;
        $x2=$this->length+$x1;
        $y2=$this->width+$y1;
        $canvas = imagecreate($x2+50, $y2+50);
$backgroundColor = imagecolorallocate($canvas, 255, 255, 255);
imagefill($canvas, 0, 0, $backgroundColor);
 
       
// Allocate colors


$green = imagecolorallocate($canvas, 50, 100, 150);



imagefilledrectangle($canvas, $x1, $y1, $x2, $y2, $green);
$path=$r.'rect'. date("Ymdhis") .'.jpg';
imagejpeg($canvas, $path);
return $path;
    }
}
?>