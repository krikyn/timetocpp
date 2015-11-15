function draw_fon(enter,num,after_reg){

	var can_fon = document.getElementById('fon');
  	var ctx_fon = can_fon.getContext('2d');	
    
    //full size
    can_fon.height = h;
    can_fon.width = w;
    
    //create fon
    var canvas_fon = this.__canvas = new fabric.StaticCanvas('fon');
    
  	fabric.Object.prototype.transparentCorners = false;
    var padding = 0;
	
	fabric.Image.fromURL('img/fon_black.JPG', function(img) {

    img.scaleToWidth(500);

    var patternSourceCanvas = new fabric.StaticCanvas();
    patternSourceCanvas.add(img);

    var pattern = new fabric.Pattern({
      source: function() {
        patternSourceCanvas.setDimensions({
          width: img.getWidth() + padding,
          height: img.getHeight() + padding
        });
        return patternSourceCanvas.getElement();
      },
      repeat: 'repeat'
    });
   
   fabric.Image.fromURL('img/fon-iron.JPG', function(img) {

    img.scaleToWidth(210);

    var patternSourceCanvas = new fabric.StaticCanvas();
    patternSourceCanvas.add(img);

    var pattern2 = new fabric.Pattern({
      source: function() {
        patternSourceCanvas.setDimensions({
          width: img.getWidth() + padding,
          height: img.getHeight() + padding
        });
        return patternSourceCanvas.getElement();
      },
      repeat: 'repeat'
    });   
   
   fabric.Image.fromURL('img/b.JPG', function(img) {

    img.scaleToWidth(27);

    var patternSourceCanvas = new fabric.StaticCanvas();
    patternSourceCanvas.add(img);

    var pattern3 = new fabric.Pattern({
      source: function() {
        patternSourceCanvas.setDimensions({
          width: img.getWidth() + padding,
          height: img.getHeight() + padding
        });
        return patternSourceCanvas.getElement();
      },
      repeat: 'repeat'
    });  
    
      
   var rect1 = new fabric.Rect({ width: w*0.375, height: h, fill: pattern});
   var rect2 = new fabric.Rect({ width: w*0.625, height: h, fill: pattern, left: 0});
   var s_50 = 0.021*(h+w);
   var s_80 = 0.034*(h+w);
   var s_40 = 0.017*(h+w);
   var fig1 = new fabric.Polygon([
      {x: w*0.375, y: 0},
      {x: w*0.375-s_50, y: 0},
      {x: w*0.375-s_50, y: 0.2*h},
      {x: w*0.375-s_50-s_80, y: 0.2*h+s_80},
      {x: 0, y: 0.2*h+s_80},
      {x: 0, y: 0.2*h+s_80+s_40},
      {x: w*0.375-s_50-s_80, y: 0.2*h+s_80+s_40},
      {x: w*0.375-s_50, y: 0.2*h+s_80+s_40+s_80},
      {x: w*0.375-s_50, y: h},
      {x: w*0.375, y: h} ], 
      {
        left: 0,
        top: 0,
        fill: pattern2,
        stroke: 'black',
      });
   var rect3 = new fabric.Rect({ width: 25, height: h, fill: 'blue', left: w*0.375-25, fill: pattern3,stroke: 'black'});
   var fig2 = new fabric.Polygon([
      {x: w*0.375, y: 0},
      {x: w*0.375+s_50, y: 0},
      {x: w*0.375+s_50, y: 0.2*h},
      {x: w*0.375+s_50+s_80, y: 0.2*h+s_80},
      {x: w, y: 0.2*h+s_80},
      {x: w, y: 0.2*h+s_80+s_40},
      {x: w*0.375+s_50+s_80, y: 0.2*h+s_80+s_40},
      {x: w*0.375+s_50, y: 0.2*h+s_80+s_40+s_80},
      {x: w*0.375+s_50, y: h},
      {x: w*0.375, y: h} ], 
      {
        left: 0,
        top: 0,
        fill: pattern2,
        stroke: 'black', 
      });  
   var rect4 = new fabric.Rect({ width: 25, height: h, fill: 'yellow', left: 0, fill: pattern3,stroke: 'black'});  

  var group1 = new fabric.Group([ rect1,fig1,rect3], {
  left: -1,
  top: -1,
  });
  canvas_fon.add(group1);
  
  var group2 = new fabric.Group([ rect2,fig2,rect4], {
  left: w*0.375,
  top: -1,
  });
  canvas_fon.add(group2);
   
      //add more obj (if this first start)
  if(enter == 0){

    document.getElementById('butt2').disabled = true;
    document.getElementById('butt2').innerHTML = 'А вы не робот?';
 	  ///////
    var position_num = Math.floor((Math.random() * 3) + 1);


 	 	fabric.Image.fromURL('img/gold2.JPG', function(img) {
 	 		img.scaleToWidth(400);

    var patternSourceCanvas = new fabric.StaticCanvas();
    patternSourceCanvas.add(img);

    var pattern4 = new fabric.Pattern({
      source: function() {
        patternSourceCanvas.setDimensions({
          width: img.getWidth() + padding,
          height: img.getHeight() + padding
        });
        return patternSourceCanvas.getElement();
      },
      repeat: 'repeat'
    });
 	 	
 	 	var color_stroke = pattern4;
 	 	
 	 	var circle01 = new fabric.Circle({
  			radius: 28, fill: '#8F0000', left: 0, top: 0, strokeWidth: 7, stroke: color_stroke, opacity: 1, 
		});
    var circle001 = new fabric.Circle({
        radius: 28, fill: '#8F0000', left: 0, top: 0, strokeWidth: 7, stroke: color_stroke, opacity: 1, 
    });
		var rect01 = new fabric.Rect({ 
			width: 7, height: 62, fill: color_stroke, left: 28, top: 1 
		});
    var rect001 = new fabric.Rect({
      width: 62, height: 7, fill:color_stroke, left: 0, top: 29
    })
		var circle02 = new fabric.Circle({
  			radius: 10, fill: color_stroke, left: 22, top: 22
		});
    var circle002 =new fabric.Circle({
        radius: 10, fill: color_stroke, left: 22, top: 22
    })
		
		circle01.setGradient('fill', {
  			x1: 0,
  			y1: 28,
  			x2: 56,
  			y2: 28,
  			colorStops: {
    			0: '#670F0F',
    			1: '#D11919'
  			}
			});
    
  circle001.setGradient('fill', {
        x1: 0,
        y1: 28,
        x2: 56,
        y2: 28,
        colorStops: {
          0: '#003D14',
          1: '#009933'
        }
      });      
		
		var rect05 = new fabric.Rect({ 
			width: 200, height: 15, fill: '#A31919', opacity: 1, left: w*0.5 + 10, top: h*0.5 + 28 - 3.75, strokeWidth: 3, stroke: color_stroke
		});
		
		var path01 = new fabric.Path('m39.382622,0.321991l166.739662,0l0,0c21.843323,0 39.551178,19.088324 39.551178,42.626061c0,23.547371 -17.707855,42.628601 -39.551178,42.628601l-166.739662,0l0,0c-21.843288,0 -39.551323,-19.08123 -39.551323,-42.628601c0,-23.537737 17.708035,-42.626061 39.551323,-42.626061z');	
		var path02 = new fabric.Path('m44.136353,17.453217c-1.734879,-9.49926 -10.030487,-16.703217 -20.025635,-16.703217l0,7.346828c7.194077,0.011238 13.012024,5.833668 13.028938,13.029079c-0.016914,7.194084 -5.834862,13.013695 -13.028938,13.027802l0,7.350937c9.995148,-0.008392 18.290756,-7.210945 20.025635,-16.707352l8.613647,0l0,-7.344078l-8.613647,0zm-8.605141,3.672691c0,-6.30854 -5.113503,-11.421844 -11.421898,-11.421844c-5.020775,0 -9.276474,3.242477 -10.808014,7.746384l-12.5513,0l0,7.349571l12.5513,0c1.53022,4.502274 5.785812,7.747688 10.808014,7.747688c6.308395,0 11.421898,-5.11454 11.421898,-11.421799z');
		var path03 = new fabric.Path('m8.2973,22.49573l0,-17.85722l0,0c0,-7.67064 6.21814,-13.88895 13.88904,-13.88895l0,0l0,0c-0.4213,-0.48323 -0.13022,8.02911 0,7.93674l0,0l0,0c-3.28745,0 -5.95303,2.66478 -5.95303,5.95221l0,17.85722l-7.936,0z');
		
		var rect08 = new fabric.Rect({ 
			width: 1000, height: 8, fill: '#000000', opacity: 0.3, left: w*0.5 + 96, top: h*0.5 + 134, strokeWidth: 3
		});

    fabric.Image.fromURL('img/robot.svg', function(img){
    img.scale(0.22);
    img.set('opacity', 0.33);
    img.set('left', w*0.42);
    img.set('top', h*0.59);
    canvas_fon.add(img);
    });

		
    //red
		var group_left = new fabric.Group([circle01,rect01,circle02], {
  		left: w*0.5,
 	 		top: h*0.5,
  		});

    //green
    var group_green_left = new fabric.Group([circle001,rect001,circle002],{
      left: w*0.5,
      top: h*0.5,
    });

  		var group_mid = new fabric.Group([circle01,rect01,circle02], {
  			left: w*0.5 + 80,
 	 		top: h*0.5,
  		});

      var group_green_mid = new fabric.Group([circle001,rect001,circle002], {
        left: w*0.5 + 80,
      top: h*0.5,
      });
  		
  		var group_right = new fabric.Group([circle01,rect01,circle02], {
  			left: w*0.5 + 160,
 	 		top: h*0.5,
  		});

      var group_green_right = new fabric.Group([circle001,rect001,circle002], {
        left: w*0.5 + 160,
      top: h*0.5,
      });
  		
  		var group_down = new fabric.Group([circle01,rect01,circle02], {
  			scaleX: 2.5, scaleY: 2.5,
  			left: w - 75,
 	 		top: h*0.625 + 120 -55,
  		});
  		
  		var group05 = new fabric.Group([path01], {
  			left: w*0.5 - 12,
 	 		top: h*0.5 - 10,
 	 		fill: '#000000',
 	 		opacity: 0.5
  		});
  		
  		var group06 = new fabric.Group([path02], {
  			left: w*0.5 - 12 + 100,
 	 		top: h*0.5 - 10 + 85,
 	 		fill: '#000000',
 	 		opacity: 0.5,
 	 		angle: 90
  		});
  		
  		var group07 = new fabric.Group([path03], {
  			left: w*0.5 - 12 + 75,
 	 		top: h*0.5 - 10 + 85+ 67,
 	 		fill: '#000000',
 	 		opacity: 0.5,
 	 		angle: -90
  		});
  		
  		var group08 = new fabric.Group([path02], {
  			left: w+24,
 	 		top: h*0.5 - 10 + 85+ 85,
 	 		fill: '#000000',
 	 		opacity: 0.5,
 	 		angle: -180
  		});

      //add object for circle
      canvas_fon.add(group05,group06,rect08,group07,group08,rect05);

      //difrient position of red circle
      if(position_num == 1){
        canvas_fon.add(group_left,group_green_mid,group_green_right,group_down);

        //create button on circle
        var btn_circle = document.createElement('button');
        btn_circle.id = 'btn_circle';
        document.body.appendChild(btn_circle);
        var btn_top_c = h*0.5 - 40 + 'px';
        var btn_left_c =w*0.5 - 40 + 'px';
        document.getElementById('btn_circle').style.top = btn_top_c;
        document.getElementById('btn_circle').style.left = btn_left_c;
        document.getElementById('btn_circle').onclick = function(){
          //////////////////
      
      function anim_change_color(){
      group_left.item(0).setGradient('fill', {
        x1: 0,
        y1: 28,
        x2: 56,
        y2: 28,
        colorStops: {
          0: '#003D14',
          1: '#009933'
        }
      });
      rect05.setFill('#007A29');
      canvas_fon.renderAll();
      document.getElementById('btn_circle').remove();
      document.getElementById('butt2').disabled = false;
      document.getElementById('butt2').innerHTML = 'Новый ученик';
    }
    function anim_dop(){
      group_left.animate('top', '+=10', { onChange: canvas_fon.renderAll.bind(canvas_fon), duration: 200, onComplete: anim_change_color});
    }
      group_left.animate('left', '+=62', { onChange: canvas_fon.renderAll.bind(canvas_fon) });
      group_left.animate('angle', '90', { onChange: canvas_fon.renderAll.bind(canvas_fon) });
      group_left.animate('top', '-=9', { onChange: canvas_fon.renderAll.bind(canvas_fon), duration: 200, onComplete: anim_dop });
          ///////////////////
            };
      }


      if(position_num == 2){
        canvas_fon.add(group_green_left,group_mid,group_green_right,group_down);

        //create button on circle
        var btn_circle = document.createElement('button');
        btn_circle.id = 'btn_circle';
        document.body.appendChild(btn_circle);
        var btn_top_c = h*0.5 - 40 + 'px';
        var btn_left_c =w*0.5 - 40+ 80 + 'px';
        document.getElementById('btn_circle').style.top = btn_top_c;
        document.getElementById('btn_circle').style.left = btn_left_c;
        document.getElementById('btn_circle').onclick = function(){
          //////////////////

      function anim_change_color(){
      group_mid.item(0).setGradient('fill', {
        x1: 0,
        y1: 28,
        x2: 56,
        y2: 28,
        colorStops: {
          0: '#003D14',
          1: '#009933'
        }
      });
      rect05.setFill('#007A29');
      canvas_fon.renderAll();
      document.getElementById('btn_circle').remove();
      document.getElementById('butt2').disabled = false;
      document.getElementById('butt2').innerHTML = 'Новый ученик';
    }
    function anim_dop(){
      group_mid.animate('top', '+=10', { onChange: canvas_fon.renderAll.bind(canvas_fon), duration: 200, onComplete: anim_change_color});
    }
      group_mid.animate('left', '+=62', { onChange: canvas_fon.renderAll.bind(canvas_fon) });
      group_mid.animate('angle', '90', { onChange: canvas_fon.renderAll.bind(canvas_fon) });
      group_mid.animate('top', '-=9', { onChange: canvas_fon.renderAll.bind(canvas_fon), duration: 200, onComplete: anim_dop });
          ///////////////////
            };
      }
      if(position_num == 3){
        canvas_fon.add(group_green_left,group_green_mid,group_right,group_down);

        //create button on circle
        var btn_circle = document.createElement('button');
        btn_circle.id = 'btn_circle';
        document.body.appendChild(btn_circle);
        var btn_top_c = h*0.5 - 40 + 'px';
        var btn_left_c =w*0.5 - 40+ 160 + 'px';
        document.getElementById('btn_circle').style.top = btn_top_c;
        document.getElementById('btn_circle').style.left = btn_left_c;
        document.getElementById('btn_circle').onclick = function(){
          //////////////////

      function anim_change_color(){
      group_right.item(0).setGradient('fill', {
        x1: 0,
        y1: 28,
        x2: 56,
        y2: 28,
        colorStops: {
          0: '#003D14',
          1: '#009933'
        }
      });
      rect05.setFill('#007A29');
      canvas_fon.renderAll();
      document.getElementById('btn_circle').remove();
      document.getElementById('butt2').disabled = false;
      document.getElementById('butt2').innerHTML = 'Новый ученик';
    }
    function anim_dop(){
      group_right.animate('top', '+=10', { onChange: canvas_fon.renderAll.bind(canvas_fon), duration: 200, onComplete: anim_change_color});
    }
      group_right.animate('left', '+=62', { onChange: canvas_fon.renderAll.bind(canvas_fon) });
      group_right.animate('angle', '90', { onChange: canvas_fon.renderAll.bind(canvas_fon) });
      group_right.animate('top', '-=9', { onChange: canvas_fon.renderAll.bind(canvas_fon), duration: 200, onComplete: anim_dop });
          ///////////////////
            };
      }

  	});
  
  //ADD ADVICE BLOCK

  //create image for button to ticher
  fabric.Image.fromURL('img/f_ticher.svg', function(img){
    img.scale((w*0.8)/960);
    img.set('left', w*0.06);
    img.set('top', h*0.05);
    canvas_fon.add(img);
  });



  //add massge on main page
  fabric.Image.fromURL('img/f_robot.svg', function(img){

    img.set('scaleY',(h*0.9)/560)
    img.set('width',1400)
    img.set('left', w*0.5);
    img.set('top', h*0.365);
    canvas_fon.add(img);
  });

  fabric.Image.fromURL('img/f_m3.svg', function(img){
    img.set('height', h*0.98);
    img.set('width', w*0.8);
    img.set('left', w*0.48);
    img.set('top', h*0.05);
    canvas_fon.add(img);
  });

  fabric.Image.fromURL('img/f_t.svg', function(img){
    img.set('height', h*1);
    img.set('width', w*0.8);
    img.set('left', w*0.85);
    img.set('top', h*0.97);
    canvas_fon.add(img);
  });

  fabric.Image.fromURL('img/f_m2.svg', function(img){
    img.scale(((h+w)*0.24)/492);
    img.set('left', w*0.73);
    img.set('top', h*0.365);
    canvas_fon.add(img);
  });

  fabric.Image.fromURL('img/f_m4.svg', function(img){
    img.scale(((h+w)*0.15)/300);
    img.set('left', 0);
    img.set('top', h*0.365);
    canvas_fon.add(img);
  });

  fabric.Image.fromURL('img/f_m5.svg', function(img){
    img.scale(((h+w)*0.17)/300);
    img.set('left', 0);
    img.set('top', h*0.99-49*((h+w)*0.17)/300);
    canvas_fon.add(img);
  });

  //add ivideo
  document.getElementById('iv').innerHTML = '<iframe id="ivideo"  width="15%" height="15%" src="https://www.youtube.com/embed/WKw2DVNLsSY" frameborder="0" allowfullscreen></iframe>'
  //https://www.youtube.com/embed/Ywwu2dyEZ5w
  }
  /////////////////////////////////// 
   
  function anim(){ 
  group1.animate('left', -w*0.375, {
  		onChange: canvas_fon.renderAll.bind(canvas_fon),
  		duration: 2000,
  		easing: fabric.util.ease.easeOutExpo
		}); 
  group2.animate('left', w, {
  		onChange: canvas_fon.renderAll.bind(canvas_fon),
  		duration: 2000,
  		easing: fabric.util.ease.easeOutExpo
		})  
	}

  if(enter == 1) 
  	anim(); 
  if(num == 1)
    if(after_reg == 1)
  	  	{create_room('story-room',1);} else
            create_room('story-room');
	if(num == 2)
        create_story_room('story-room'); 	
    });
   });
  });
  
}
