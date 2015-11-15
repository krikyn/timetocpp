function load_location(){
	var h = document.documentElement.clientHeight;
	var w = document.documentElement.clientWidth;

	//location input
	var str_top = h*0.625 + 'px';
	var str_left = (w*0.375)*0.16 + 'px';
	var str_top2 = h*0.625 + 65 + 'px';
	var str_top3 = h*0.625 + 130 + 'px';

	var str_w = ((w*0.375-25)*0.5) + 'px';
	var str_w_butt = ((w*0.375-25)*0.5)+45 + 'px';
	var str_w2 = (w*0.375+25)*1.1 + 'px';
	var str_w_butt2 = (w -(w*0.375-25))*0.85 + 'px';

	document.getElementById('login').style.top = str_top;
	document.getElementById('login').style.left = str_left;
	document.getElementById('password').style.top = str_top2;
	document.getElementById('password').style.left = str_left;
	document.getElementById('butt').style.top = str_top3;
	document.getElementById('butt').style.left = str_left;
	document.getElementById('login').style.width = str_w;
	document.getElementById('password').style.width = str_w;
	document.getElementById('butt').style.width = str_w_butt;

	document.getElementById('butt2').style.top = str_top3;
	document.getElementById('butt2').style.left = str_w2;
	document.getElementById('butt2').style.width = str_w_butt2;
}