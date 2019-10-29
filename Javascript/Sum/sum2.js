

$('#calc_total').click(function() {

var x=0;
x=parseInt($('#n1').val()) ;

var x2=0;
x2= parseInt(  $('#n2').val() );

var x3=0;
x3= parseInt( $('#n3').val() );

var xn= x+x2-x3;

$('.display').html('Sum is ' +xn);


	// body...
})
