<template>
<div id='editor'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Editor Menu</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                  </ul>
                  <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </div>
              </nav>
              <modal v-if="dialogShown==1" @close="dialogShown = -1">
                  <!--
                    you can use custom content here to overwrite
                    default content
                  -->
                  <h3 slot="header">Define length and angle</h3>
                  <div slot='body'>
                      <div class='row'>
                          <span class='col-md-1'>Length:</span> <select class='col-md-1' v-model="lineParams.selectedLength" ><option v-for='i in numbers'>{{i}}</option></select></div>
                        <div class='row'>
                          <span class='col-md-1'>Angle:</span> <select class='col-md-1' v-model='lineParams.selectedAngle'><option>15</option><option>30</option><option>60</option><option>90</option></select>
                        </div>
                  </div>
                  <div slot='footer'>
                      <button class='btn btn-primary'  v-on:click='createLine'>Apply</button>
                 
                    </div>
                </modal>
                
              <modal  v-if='dialogShown==2' @close="dialogShown = -1">
                  <h1 slot='header'>Insert radius</h1>
                  <div slot='body'>
                    <span>Radius:</span> <select v-model="circleParams.selectedRadius" ><option v-for='i in numbers'>{{i}}</option></select></div>
                  
                  <div slot='footer'>
                    <button class='btn btn-primary' value='Apply' v-on:click='createCircle'/>
                  </div>
              </modal>
              <modal  v-if='dialogShown==3' @close="dialogShown = -1">
                  <h1 slot='header'>Insert width and height</h1>
                  <div slot='body'>
                  <div >
                    <span>Width:</span> <select v-model="rectParams.selectedWidth" v-for='i in numbers'><option>{{i}}</option></select></div>
                  
                 
                      <div>
                          <span>Height:</span> <select v-model="rectParams.selectedHeight" v-for='i in numbers'><option>{{i}}</option></select></div>
                        </div> 
                        <div slot='footer'>
                    <button class='btn btn-primary' value='Apply' v-on:click='createRect'/>
                  
              </div>
            </modal>
            <modal  v-if='dialogShown==4' @close="dialogShown = -1">
              <h1 slot='header'>Insert graph details</h1>
              <div slot='body'>
              <div >
                <span>Type:</span> <select v-model="chartParams.type" ><option>line</option><option>chart</option><option>scatter</option></select></div>
              <div>Title: <input type='text' v-model='chartParams.title'></div>
              <div>X Title: <input type='text' v-model='chartParams.x_title'></div>
                  <div>
                      <span>Num points:</span> <input type='text' v-model='chartParams.numpoints'></div>
                      <div>
                        <button v-on:click='showpoints' >Apply</button>
                    </div> 
                    <div v-for='point in chartParams.points'>
                       <div>
                         X: <input type="text" v-model='point.x'>
                       </div>
                       <div>
                          Y: <input type="text" v-model='point.y'>
                       </div>
                    </div>
                    
               </div>
               <div slot='footer'>
                  <button class='btn btn-primary'  v-on:click='createChart'>Apply </button>
        
              </div>
                </modal>
              </modal>
           
              <div class="col-md-12">
                  

                   
                         Figures: 
                       
                         
                                 
                                  <img  class='col-md-1'src='./init_images/line.jpg' v-on:click='dialogShown=1' />
                                   
                                  
                                
                                  <img class='col-md-1'src='./init_images/circle.jpg' v-on:click='dialogShown=2'/>
                                  
                         
                             
                                    <img class='col-md-1' src='./init_images/rect.jpg' v-on:click='dialogShown=3'/>
                              
                             
                           
                           
                                <img class='col-md-1' src='./init_images/graph.jpg' v-on:click='dialogShown=4' />
                              
                           
         
                           
                          
                  <div  v-for="component in components">
                     
                      <component :is='component.type' v-bind='component'></component>
                
              </div>
              
        </div>
        </div>
</template>
<script>
  module.exports= {
           
           data: function() { return {
             elements: [],
             components:[{type: 'textelem', contenteditable:true, style: 'border: 1px solid black;'}],
             currentChosen:'',
             dialogShown: -1,
             rectShown: false,
             circleShown: false,
             lineParams: {
                 selectedLength: 0,
                 selectedAngle: 0
             },
             circleParams: {
                 selectedRadius: 0
             },
             rectParams: {
                 selectedHeight:0,
                 selectedWidth:0
             },
             chartParams: {
                type:'',
                points:[],
                numpoints:0,
                title:'',
                x_title: ''
            },
             numbers: 30
           } },
           methods: {
               createCircle:function()
               {
                   this.createImage({'action': 'circle', 'radius': this.circleParams.selectedRadius});
                   
                   
                    
               },
               createRect: function()
               {
                this.createImage({'action': 'rect', 'width': this.rectParams.selectedWidth, 'height': this.rectParams.selectedHeight});
               },
               createChart:function()
               {
                   self=this;
                   self.createImage({'action': 'chart', 'type': this.chartParams.type, 'title': this.chartParams.title, 'x_title': this.chartParams.x_title, 'points': JSON.stringify(this.chartParams.points)});
                    
               },
               showpoints: function()
               {
                   for(i=0; i<this.chartParams.numpoints; i++)
                   {
                       this.chartParams.points.push({'x': 0, 'y': 0});
                   }
               },
               createLine: function()
               {
                self=this;
                data={'action': 'line', 'angle': this.lineParams.selectedAngle, 'length': this.lineParams.selectedLength};
                self.createImage(data);
                
               },
               createImage: function(data)
               {
                 self=this;
                $.get('./apis/ImageCreator.php', data,  function(res)
                {
                   
                    self.components.push({'type':'pict', 'src': res});
                    self.components.push({type: 'textelem', contenteditable:true, style: 'border: 1px solid black;'});
                    self.dialogShown=-1;
                    
                });
               }
           },
           components: 
           {
            'modal': {
                template: '<transition name="modal"> \
                <div class="modal-mask"> \
                  <div class="modal-wrapper">\
                    <div class="modal-container">\
            \
                      <div class="modal-header">\
                        <slot name="header">\
                            <h1>Insert length(px) and choose angle</h1>\
                        </slot>\
                      </div>\
            \
                      <div class="modal-body">\
                        <slot name="body">\
                          default body\
                        </slot>\
                      </div>\
            \
                      <div class="modal-footer">\
                        <slot name="footer">\
                          default footer\
                          <button class="modal-default-button" @click="$emit(\'close\')">\
                            OK\
                          </button>\
                        </slot>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
              </transition>'
              },
            'my-component': {
                template: '<div>I am a new component </div>'
                
            },
            'pict': {
                template: '<img />'
            },
            'graph': {
                template: '<img src=' + this.currentChosen + '/>'
            },
            'circle-m': {
                template: "<svg style='display:inline-block' width='100' height='100' id='cvgFigures'> <circle style='display:inline-block' cx='50' cy='50' r='40' stroke='green' stroke-width='4' fill='yellow' /> </svg>"
            },
            'textelem': {
                template: '<div></div>'
            },
            'rect-m': {
                template: ' <svg display="inline-block"><rect style="display:inline-block" width="50" height="50" stroke="green" stroke-width="4" fill="yellow" /></svg>'
            }
            
        }
  }
</script>
<style type="text/css">
         [v-cloak] { display:none;}
         .modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 1;
  transition: opacity 0.2s ease;
}
        </style>