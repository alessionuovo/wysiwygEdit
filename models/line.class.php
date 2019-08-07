<?php
class Line
{
    private $length;
    private $angle;
    function __construct($length, $angle) {
        $this->length=$length;
        $this->angle=$angle;
    }
    function draw($r)
    {
        $x1=1;
        $y1=1;
        $x2=$this->length*cos(deg2rad($this->angle));
        $y2=$this->length*sin(deg2rad($this->angle));
        $canvas = imagecreate($x2+50, $y2+50);
$backgroundColor = imagecolorallocate($canvas, 255, 255, 255);
imagefill($canvas, 0, 0, $backgroundColor);
 
       
// Allocate colors


$green = imagecolorallocate($canvas, 50, 100, 150);



imagefilledrectangle($canvas, $x1, $y1, $x2, $y2, $green);
$path=$r.'line'. date("Ymdhis") .'.jpg';
imagejpeg($canvas, $path);
return $path;
    }
}
?>