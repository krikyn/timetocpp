
function logg(){
    document.getElementById('butt').disabled = true;
    document.getElementById('butt').innerHTML = "Загрузка...";
	var login = $('#login').val().toLowerCase();
    var pwd = $('#password').val().toLowerCase();

	if(login&&pwd){
	$.ajax({
                type: "POST",
                url: "http://timetoc.azurewebsites.net/php/login.php",
                data: "login="+login+"&password="+pwd,
                
                error: function(req, text, error) {
            		alert('Ошибка AJAX: ' + text + ' | ' + error);
                },
                success: function (data) {
            		if(data[0]){
            			//set global var
                        user_password = pwd;
                        user_email = login;
                        user_level = data[1];
                        user_name1 = data[2];
                        user_name2 = data[3];
                        user_place = data[4];
                        user_send_mail = data[5];
                        user_theme = data[6];
                        user_shop = data[7];
            			//delete all elements of html
            			hide();
                		draw_fon(1,1);
           		 			} else {
                				document.getElementById('login').style.borderColor = '#FF8080';
                				document.getElementById('password').style.borderColor = '#FF8080';
                                document.getElementById('butt').disabled = false;
                                document.getElementById('butt').innerHTML = 'Войти';
            					}
        				},
        	  dataType: 'json'
        });
    }  else{
		document.getElementById('login').style.borderColor = '#FF8080';
        document.getElementById('password').style.borderColor = '#FF8080';
        document.getElementById('butt').disabled = false;
        document.getElementById('butt').innerHTML = 'Войти';
	}
}