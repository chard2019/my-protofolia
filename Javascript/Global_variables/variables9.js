alert('javascript test')

var n1=0,n2=0,n3,n4=0,n5=0,n6=0,n7=0,n8=0,n9=0,n0=0,
sum=0,sub=0,div=0,prod=0;

$('#sum').click(function(){

	n1= parseInt( $('.txt1').val());
	n2= parseInt( $('.txt2').val());
	n3= parseInt( $('.txt3').val());
	n4= parseInt( $('.txt4').val());
	n5= parseInt( $('.txt5').val());
	n6= parseInt( $('.txt6').val());
	n7= parseInt( $('.txt7').val());
	n8= parseInt( $('.txt8').val());
	n9= parseInt( $('.txt9').val());
	n0= parseInt( $('.txt0').val());
	$('.result').html(sum);

});

$('#sub').click(function(){

	n1=  $('.txt1').val();
	n2=  $('.txt2').val();
	n3=  $('.txt3').val();
	n4=  $('.txt4').val();
	n5=  $('.txt5').val();
	n6=  $('.txt6').val();
	n7=  $('.txt7').val();
	n8=  $('.txt8').val();
	n9=  $('.txt9').val();
	n0=  $('.txt0').val();
	$('.result').html(sub);

});

$('#div').click(function(){

	n1=  $('.txt1').val();
	n2=  $('.txt2').val();
	n3=  $('.txt3').val();
	n4=  $('.txt4').val();
	n5=  $('.txt5').val();
	n6=  $('.txt6').val();
	n7=  $('.txt7').val();
	n8=  $('.txt8').val();
	n9=  $('.txt9').val();
	n0=  $('.txt0').val();
	$('.result').html(div);

});

 $('#prod').click(function(){

	n1=  $('.txt1').val();
	n2=  $('.txt2').val();
	n3=  $('.txt3').val();
	n4=  $('.txt4').val();
	n5=  $('.txt5').val();
	n6=  $('.txt6').val();
	n7=  $('.txt7').val();
	n8=  $('.txt8').val();
	n9=  $('.txt9').val();
	n0=  $('.txt0').val();
	$('.result').html(prod);

});