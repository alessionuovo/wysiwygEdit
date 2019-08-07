import { Component, OnInit } from '@angular/core';
import 'rxjs';
import $ from "jquery";
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class App implements OnInit {
      ngOnInit()
      {

      };
      elements= [];
      components=[{type: 'textelem', contenteditable:true, style: 'border: 1px solid black;'}];
      currentChosen='';
      dialogShown= -1;
      rectShown= false;
      circleShown= false;
      lineParams= {
          selectedLength: 0,
          selectedAngle: 0
      };
      circleParams= {
          selectedRadius: 0
      };
      rectParams= {
          selectedHeight:0,
          selectedWidth:0
      };
      chartParams= {
         type:'',
         points:[{}],
         numpoints:0,
         title:'',
         x_title: ''
     };
      numbers= 30;
    
    
        createCircle  ()
        {
            this.createImage({'action': 'circle', 'radius': this.circleParams.selectedRadius});
            
            
             
        }
        createRect  ()
        {
         this.createImage({'action': 'rect', 'width': this.rectParams.selectedWidth, 'height': this.rectParams.selectedHeight});
        }
        createChart  ()
        {
           this.createImage({'action': 'chart', 'type': this.chartParams.type, 'title': this.chartParams.title, 'x_title': this.chartParams.x_title, 'points': JSON.stringify(this.chartParams.points)});
             
        }
        showpoints  ()
        {
            for(var i=0; i<this.chartParams.numpoints; i++)
            {
                this.chartParams.points.push({'x': 0, 'y': 0});
            }
        }
        createLine  ()
        {
        
         
         this.createImage({'action': 'line', 'angle': this.lineParams.selectedAngle, 'length': this.lineParams.selectedLength});
         
        }
        createImage  (data)
        {
          
         $.get('./apis/ImageCreator.php', data,  function(res)
         {
            
             this.components.push({'type':'pict', 'src': res});
             this.components.push({type: 'textelem', contenteditable:true, style: 'border: 1px solid black;'});
             this.dialogShown=-1;
             
         });
        }
    
    }