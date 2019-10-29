
$('#btn_save').click(function(){
	//Concantenation is well mastered, we have learnt the initialization and 
	//writing on the html elements.
	//Finally we have been able to read the html form
	//Happy coding!!

		var Name='';
		Name=$('#Name').val();

		var Surname='';
		Surname=$('.Surname').val();

		var Age=0;//Very good , numbers
		Age=$('#Age').val();

		var Gender='';
		Gender=$('#Gender').val();

		var Comment='';
		Comment=$('.Comment').val();


		$('#display').html('Name is:        '+Name + ' Surname is: '+ Surname +
		 'Age is: '+Age +' Gender is: '+Gender+' Comment is:'+Comment );


});



