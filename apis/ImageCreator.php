<?php
$action=$_REQUEST['action'];
$draw='';
$option='';
$r='../models/';
switch($action)
{
    case 'chart':    $type=$_REQUEST['type'];
    $points= json_decode($_REQUEST["points"], true);;
    $ylabel=$_REQUEST['title'];
    $xlabel=$_REQUEST['x_title'];
    require($r.'chart.class.php');
    $option=new Chart($type, $points, $xlabel, $ylabel);     
    break; 
    case 'rect':    $width=$_REQUEST['width'];
    $height=$_REQUEST['height'];
    require($r.'rect.class.php');
    $option=new Rect($width, $height);     
    break; 
    case 'circle': $radius=$_REQUEST['radius'];
                    require($r.'circle.class.php');
                    $option=new Circle($radius);
                     break; 
    case 'line': 
    default:  $length=$_REQUEST['length'];
              $angle=$_REQUEST['angle'];
              require($r.'line.class.php');
              $option=new Line($length, $angle);
              break; 
}
$r='../images/';
$draw=$option->draw($r);
echo $draw;
?>