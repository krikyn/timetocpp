//function - delete all elements of html
	function hide(){
		document.getElementById('login').style.visibility = 'hidden';
        document.getElementById('password').style.visibility = 'hidden';
        document.getElementById('butt').style.visibility = 'hidden';
        document.getElementById('butt2').style.visibility = 'hidden';
        document.getElementById('ivideo').style.visibility = 'hidden';
	}
//global var
var user_password;
var user_email;
var user_level = 0;
var user_name1 = '';
var user_name2 = '';
var user_place = 0;
var user_send_mail = 1;
var user_theme = 0;
var user_shop = '';

var h = document.documentElement.clientHeight;
var w = document.documentElement.clientWidth;