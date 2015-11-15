function regist(){
	document.getElementById('butt_reg').disabled = true;
    document.getElementById('butt_reg').innerHTML = "Загрузка...";
    
    var email = $('#input_name').val().toLowerCase();
    var pass = $('#input_pass').val().toLowerCase();

    if(!email.match(/^[a-z_0-9\-\.]+@[a-z_0-9\-\.]+\.[a-z]{2,6}$/i)){
    	document.getElementById('input_name').value = '';
    	document.getElementById('input_name').setAttribute("placeholder","Некорректный email");
    	document.getElementById('butt_reg').disabled = false;
    	document.getElementById('butt_reg').innerHTML = "Зарегистрироваться";
    	document.getElementById('input_name').style.background = '#FFCCCC';
    	} else 
    		if(!pass.match(/[A-Za-z0-9А]/)){
    			document.getElementById('input_pass').value = '';
    			document.getElementById('input_pass').setAttribute("placeholder","Латинские буквы,цифры");
    			document.getElementById('butt_reg').disabled = false;
    			document.getElementById('butt_reg').innerHTML = "Зарегистрироваться";
    			document.getElementById('input_pass').style.background = '#FFCCCC';
    		} else{
    			//alert start registration, link with server
				$.ajax({
                	type: "POST",
                	url: "http://timetoc.azurewebsites.net/php/register.php",
                	data: "email="+email+"&password="+pass,

                	error: function(req, text, error) {
            		alert('Ошибка AJAX: ' + text + ' | ' + error);},

            		success: function (data) {
            		if(data[0]){
            			//set global var
                        user_password = pass;
                        user_email = email;
                        /*user_level = 0;
                        user_name1 = '';
                        user_name2 = '';
                        user_place = 0;
                        user_send_mail = 1;
                        user_theme = 0;
                        user_shop = '';*/
            			//delete all elements of html
            			document.getElementById('input_name').style.visibility = 'hidden';
            			document.getElementById('input_pass').style.visibility = 'hidden';
            			document.getElementById('butt_reg').style.visibility = 'hidden';
                        //delete help - text
                        create_story_room('story-room', 1);
           		 		} else {
           		 			//if email = email
                			if(data[1] == 1){
								document.getElementById('input_name').value = '';
    							document.getElementById('input_name').setAttribute("placeholder","email уже используется");
    							document.getElementById('butt_reg').disabled = false;
    							document.getElementById('butt_reg').innerHTML = "Зарегистрироваться";
    							document.getElementById('input_name').style.background = '#FFCCCC';
    							document.getElementById('input_pass').value = '';
								}
							if(data[1] == 2){
								document.getElementById('input_name').value = '';
								document.getElementById('input_pass').value = '';
								document.getElementById('input_name').style.background = '#FFCCCC';
								document.getElementById('input_pass').style.background = '#FFCCCC';
                                document.getElementById('butt_reg').disabled = false;
                                document.getElementById('butt_reg').innerHTML = "Зарегистрироваться";
                                alert("error with insert");
							}	

            				}
        				},

        	  		dataType: 'json'});
    		}
}