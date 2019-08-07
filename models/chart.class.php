<?php
class Chart
{
    private $type;
    private $points;
    private $xlabel;
    private $ylabel;
    function __construct($type, $points, $xlabel, $ylabel) {
        $this->type=$type;
        $this->points=$points;
        $this->xlabel=$xlabel;
        $this->ylabel=$ylabel;
    }
    
    function draw($r)
    {
        require('./jpgraph-4.2.7/src/jpgraph.php');
        $graph = new Graph(300,250);
        $graph->SetScale("textlin");

        $theme_class=new UniversalTheme;

        $graph->SetTheme($theme_class);
        $graph->img->SetAntiAliasing(false);
        $graph->title->Set($this->ylabel);
        $graph->SetBox(false);

        $graph->SetMargin(40,20,36,63);

        $graph->img->SetAntiAliasing();

        $graph->yaxis->HideZeroLabel();
        $graph->yaxis->HideLine(false);
        $graph->yaxis->HideTicks(false,false);

        $graph->xgrid->Show();
        $graph->xgrid->SetLineStyle("solid");
        $x=array();
        $y=array();
        foreach($this->points as $point)
        {
           $x[]=$point['x'];
           $y[]=$point['y'];
        }
        $graph->xaxis->SetTickLabels($x);
      
        $graph->xgrid->SetColor('#E3E3E3');
        require('./jpgraph-4.2.7/src/jpgraph_'. $this->type .'.php');
        $type_u=ucfirst($this->type).'Plot';
        $graphelem=new $type_u($y);
        $graph->Add($graphelem);
        $path=$r.'graph'. date("Ymdhis") .'.jpg';
        $graph->Stroke($path);
        return $path;



    }
}
?>