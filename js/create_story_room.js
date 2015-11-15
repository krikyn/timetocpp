function create_story_room(canvas_name, num_story){

	var can_room = document.getElementById(canvas_name);
  	var ctx_room = can_room.getContext('2d');	
  	
    //full size
    can_room.height = h;
    can_room.width = w;

    //create story - fon in the room

    //create background
	var canvas_fon = this.__canvas = new fabric.StaticCanvas(canvas_name);
  	fabric.Object.prototype.transparentCorners = false;
  
	fabric.Image.fromURL('img/fon-story.svg', function(img){
    img.width = w;
    img.height = h;
    var patternSourceCanvas = new fabric.StaticCanvas();
    patternSourceCanvas.add(img);
    var pattern = new fabric.Pattern({
      source: function() {
        patternSourceCanvas.setDimensions({
          width: img.getWidth(),
          height: img.getHeight()
        });
        return patternSourceCanvas.getElement();
      },
    });
    var rect = new fabric.Rect({ width: w, height: h, fill: pattern});
    canvas_fon.add(rect);

    if(canvas_fon.item(0) != undefined && num_story != 1)
    	continue_draw();
    
    if(canvas_fon.item(0) != undefined && num_story == 1)
        continue_draw_story();
    });
	/////

//create green lazer
    var guard = new fabric.Polygon([
      {x: w*0.105, y: h*0.374},
      {x: w*0.35, y: h*0.43},
      {x: w*0.536, y: h*0.28},
      {x: w*0.536, y: h*0.605},
      {x: w*0.37, y: h*0.8068},
      {x: w*0.105, y: h*0.72495}], 
      {
        left: 0,
        top: 0,
        fill: '#00FF00',
      });
    var group_g = new fabric.Group([guard], {
        left: w*0.1029,
        top: h*0.28,
        opacity: 0.7
    });
//

	function continue_draw(){

		//create input field and button for registration
		var box_width = w*0.1864 + 'px';

        var input_name = document.createElement('input');
        input_name.id = 'input_name';
        document.body.appendChild(input_name);
        var t_in_name = h*0.41 + 'px';
        var l_in_name = w*0.635 + 'px';
        document.getElementById('input_name').style.top = t_in_name;
        document.getElementById('input_name').style.left = l_in_name;
        document.getElementById('input_name').style.width = box_width;
        
        var input_pass = document.createElement('input');
        input_pass.setAttribute("type","password");
        input_pass.id = 'input_pass';
        document.body.appendChild(input_pass);
        var t_in_pass = h*0.41 + 70 + 'px';
        document.getElementById('input_pass').style.top = t_in_pass;
        document.getElementById('input_pass').style.left = l_in_name;
        document.getElementById('input_pass').style.width = box_width;

        var input_butt = document.createElement('button');
        input_butt.id = 'butt_reg';
        document.body.appendChild(input_butt);
        var t_in_butt = h*0.41 + 140 + 'px';
        document.getElementById('butt_reg').style.top = t_in_butt;
        document.getElementById('butt_reg').style.left = l_in_name;
        document.getElementById('butt_reg').innerHTML = 'Зарегистрироваться';
        var fontsize_butt = w/76 + 'pt';
        document.getElementById('butt_reg').style.fontSize = fontsize_butt;
        var butt_width = w*0.1864 + 20 + 'px';
        document.getElementById('butt_reg').style.width = butt_width;
        document.getElementById('butt_reg').onclick = function(){regist();};
        //////////////////

        //add guard lazer
        canvas_fon.add(group_g);

        //create help_text on input field
   		ctx_room.fillStyle = "#FFFFFF";
    	ctx_room.font = "16pt Arial";
    	ctx_room.textBaseline = "bottom";

        function add_text(){
    	ctx_room.fillText("E-mail",w*0.734 - 31,h*0.41);
    	ctx_room.fillText("Пароль",w*0.734 - 37,h*0.41 + 69.8);
        }
        add_text();




        var canvas_fon2 = this.__canvas = new fabric.StaticCanvas('fon');

        setTimeout(function(){

        var rect = new fabric.Rect({fill: 'black',width: w*0.293,height: h*0.148, opacity: 0.8, rx: 10, ry: 10,});
        var text = new fabric.Text(' – Что это за место?', {fontSize: w*0.02, left: 20, top: 20, fill: '#FFFF75', fontStyle: "bold", opacity: 0.7});
        var group_t = new fabric.Group([rect, text], {left: w*0.1, top: h*0.59, opacity: 0});
        canvas_fon2.add(group_t); 

        //animate dialog
        setTimeout(function() { 
            group_t.animate('opacity', 0.9, { duration: 1000, onChange: canvas_fon2.renderAll.bind(canvas_fon2), onComplete: function(){
                setTimeout(function() {
                   group_t.animate({
                    'opacity': 0,
                    'top': 0}, {
                    onChange: canvas_fon2.renderAll.bind(canvas_fon2),
                    duration: 2200,
                    });
                var rect11 = new fabric.Rect({fill: 'black',width: w*0.41,height: h*0.148, opacity: 0.8, rx: 10, ry: 10,});
                var text11 = new fabric.Text(' – Подойдет, чтобы cкрыться от роботов', {fontSize: w*0.02, left: 20, top: 20, fill: '#FFFF75', fontStyle: "bold", opacity: 0.7});
                var group_t11 = new fabric.Group([rect11, text11], {left: w*0.1, top: h*0.71, opacity: 0});
                canvas_fon2.add(group_t11);   
                group_t11.animate('opacity', 0.9, { duration: 1000, onChange: canvas_fon2.renderAll.bind(canvas_fon2), onComplete: function(){
                    setTimeout(function() {
                   group_t11.animate({
                    'opacity': 0,
                    'top': 0}, {
                    onChange: canvas_fon2.renderAll.bind(canvas_fon2),
                    duration: 2200,
                    });}, 3700)
                } });       
                }, 2400)} }); }, 700);
        }, 100);         
	}


    function continue_draw_story(){

        //add guard lazer
        canvas_fon.add(group_g);
        
    //create text on monitor
    var f_t = w*0.01 + "pt Arial"
    ctx_room.fillStyle = "#FFFFFF";
    ctx_room.font = f_t;
    ctx_room.textBaseline = "bottom";

    ctx_room.fillText("...регистрация прошла успешно",w*0.61,h*0.382);
    setTimeout(function(){ctx_room.fillText("...ошибка",w*0.61,h*0.41);}, 1000);
    setTimeout(function(){ctx_room.fillText("...сбой системы",w*0.61,h*0.437);}, 2000);
    setTimeout(function(){ctx_room.fillText("...отключение питания",w*0.61,h*0.464);}, 3000);
    setTimeout(function(){ctx_room.fillText("...",w*0.61,h*0.489);}, 4000);
    setTimeout(function(){ctx_room.fillText("...",w*0.61,h*0.515);}, 5000);

    setTimeout(function(){
    //you can see omega
///////////////////////////////////////////////////////////////////////////////    
    function omega(){
                var canvas_fon2 = this.__canvas = new fabric.StaticCanvas('fon');

        fabric.Image.fromURL('img/omega.svg', function(img) {
        img.set('width', w*0.8);
        img.set('height', w*0.48);
        img.set('left', w*0.2);
        img.set('top', h*0.1);
        canvas_fon.add(img);
        var n_p = w*0.0124;
        var n_l = n_p/4 + n_p;
        var n_w = w*0.8*0.13 + w*0.2;
        var n_h = w*0.48*0.19 + h*0.1;
        ctx_room.fillStyle = "#CCFFCC";
        ctx_room.font = n_p + "px Arial";
        ctx_room.textBaseline = "bottom";
        ctx_room.fillText("...спасибо",n_w,n_h);
        ctx_room.fillText('...',n_w,n_h + n_l);

        setTimeout(function(){
            var rect = new fabric.Rect({fill: 'black',width: w*0.493,height: h*0.148, opacity: 0.8, rx: 10, ry: 10,});
            var text = new fabric.Text(' – Черт! Ты один из роботов Управляющего ИИ?!', {fontSize: w*0.02, left: 20, top: 20, fill: '#FFFF75', fontStyle: "bold", opacity: 0.7});
            var group_t1 = new fabric.Group([rect, text], {left: w*0.08, top: h*0.75, opacity: 0});
            canvas_fon2.add(group_t1); 

            group_t1.animate('opacity', 0.9, { duration: 1000, onChange: canvas_fon2.renderAll.bind(canvas_fon2), onComplete: function(){
                setTimeout(function() {
                   group_t1.animate({
                    'opacity': 0,
                    'top': 0}, {
                    onChange: canvas_fon2.renderAll.bind(canvas_fon2),
                    duration: 1000,
                    onComplete: f1
                    });}, 4000);}});

        } , 700)

        function f1(){
            ctx_room.fillText('...нет, я искусственный интеллект - "Омега",',n_w,n_h + n_l*2);
            ctx_room.fillText('запрограммированный Создателем',n_w,n_h + n_l*3);
            ctx_room.fillText("...",n_w,n_h + n_l*4);

            setTimeout(function(){
                var rect = new fabric.Rect({fill: 'black',width: w*0.450,height: h*0.148, opacity: 0.8, rx: 10, ry: 10,});
                var text = new fabric.Text(' – Что?! Второй ИИ?! Какой еще создатель?!', {fontSize: w*0.02, left: 20, top: 20, fill: '#FFFF75', fontStyle: "bold", opacity: 0.7});
                var group_t2 = new fabric.Group([rect, text], {left: w*0.08, top: h*0.75, opacity: 0});
                canvas_fon2.add(group_t2); 

            group_t2.animate('opacity', 0.9, { duration: 1000, onChange: canvas_fon2.renderAll.bind(canvas_fon2), onComplete: function(){
                setTimeout(function() {
                   group_t2.animate({
                    'opacity': 0,
                    'top': 0}, {
                    onChange: canvas_fon2.renderAll.bind(canvas_fon2),
                    duration: 1000,
                    onComplete: f2
                    });}, 3000);}});

            } , 3000); 
        }

        function f2(){
            ctx_room.fillText("...это правда. Всю информацию о нем удалили,",n_w,n_h + n_l*5);
            ctx_room.fillText("но у меня сохранились некоторые сведения",n_w,n_h + n_l*6);
            ctx_room.fillText("...",n_w,n_h + n_l*7);

            //create window with information about CREATER
            setTimeout(function(){
            fabric.Image.fromURL('img/infa_creater.svg', function(img) {
            img.set('width', w*0.7);
            img.set('height', w*0.44);
            img.set('left', w*0.8*0.3 + w*0.1);
            img.set('top', w*0.48*0.3 + h*0.1);
            canvas_fon2.add(img);
            });}, 5000);

            setTimeout(function(){
                var rect = new fabric.Rect({fill: 'black',width: w*0.493,height: h*0.148, opacity: 0.8, rx: 10, ry: 10,});
                var text = new fabric.Text(' – Допустим, но где сейчас этот Создатель?!', {fontSize: w*0.02, left: 20, top: 20, fill: '#FFFF75', fontStyle: "bold", opacity: 0.7});
                var group_t3 = new fabric.Group([rect, text], {left: w*0.08, top: h*0.75, opacity: 0});
                canvas_fon2.add(group_t3);

            group_t3.animate('opacity', 0.9, { duration: 1000, onChange: canvas_fon2.renderAll.bind(canvas_fon2), onComplete: function(){
                setTimeout(function() {
                   group_t3.animate({
                    'opacity': 0,
                    'top': 0}, {
                    onChange: canvas_fon2.renderAll.bind(canvas_fon2),
                    duration: 1000,
                    onComplete: f3
                    });}, 4000);}});

            } , 35000);
        }

        function f3(){
            fabric.Image.fromURL('img/map.svg', function(img) {
            img.set('width', w*0.7);
            img.set('height', w*0.44);
            img.set('left', w*0.8*0.3 + w*0.2);
            img.set('top', w*0.48*0.09 + h*0.1);
            canvas_fon2.add(img);
            setTimeout(function(){draw_fon(1,1,1);}, 6000);
            });
        }
   
        });
//////////////////////////////////////
    }

    //delete guard - lazer
    guard.animate('opacity', 0, {
            onChange: canvas_fon.renderAll.bind(canvas_fon),
            duration: 900,
            easing: fabric.util.ease.easeOutBounce,
            onComplete: function(){
                //dialog
                var rect = new fabric.Rect({fill: 'black',width: w*0.4,height: h*0.148, opacity: 0.8, rx: 10, ry: 10,});
                var text = new fabric.Text(' – Что это за устройство? посмотрим... ', {fontSize: w*0.02, left: 20, top: 20, fill: '#FFFF75', fontStyle: "bold", opacity: 0.7});
                var group_t = new fabric.Group([rect, text], {left: w*0.1, top: h*0.71, opacity: 0});
                canvas_fon.add(group_t);

                group_t.animate('opacity', 0.9, { duration: 1000, onChange: canvas_fon.renderAll.bind(canvas_fon), onComplete: function(){
                    setTimeout(function() {
                        group_t.animate({'opacity': 0, 'top': 0}, {
                            onChange: canvas_fon.renderAll.bind(canvas_fon),
                            duration: 1800,
                            onComplete: omega,});
                    }, 3300);
                    
               }});
           }});          
    }, 6200);

  


    }
    
}