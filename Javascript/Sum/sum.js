



$('#click_sum').click(function(){

var number1=0;
number1=parseIntt(      $('.txt_number1').val());


var number2=0;
number2=  parseInt( $('.txt_number2').val());

var sum=0;
sum= number1+number2;

$('#total_sum').html('the sum is:  '+sum);

})

