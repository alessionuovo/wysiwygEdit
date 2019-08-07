
      
function BlogEditorViewModel()
{
	var script = document.createElement('script');
script.onload = function () {
    //do stuff with the script
};
script.src = './node_modules/vue/dist/vue.js';
alert(document.body);
document.body.appendChild(script);
script = document.createElement('script');
script.onload = function () {
    //do stuff with the script
};
script.src = './node_modules/jquery/dist/jquery.js';

document.head.appendChild(script);
    self=this;
    self.init=function()
    {
       new Vue({
           el: '#editor',
           data: {
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
           },
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
                $.get('ImageCreator.php', data,  function(res)
                {
                   
                    self.components.push({'type':'pict', 'src': res});
                    self.components.push({type: 'textelem', contenteditable:true, style: 'border: 1px solid black;'});
                    self.dialogShown=-1;
                    
                });
               }
           },
           components: {
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
       })
    };
}
var blogEditor=new BlogEditorViewModel();
blogEditor.init();