// alert('this is me')

var n1=0,n2=0,
sum=0,prod=0,sub=0,div=0;

$('#sum').click(function(){
		 n1= parseInt( $('.txt1').val());
		 n2= parseInt($('.txt2').val());
		 sum= parseInt(n1+n2);
		$('.result').html(sum);

});


$('#prod').click(function(){

		n1=$('.txt1').val();
		 n2=$('.txt2').val();
		 prod=n1*n2;
		 $('.result').html(prod);
});

$('#sub').click(function(){

n1=$('.txt1').val();
 n2=$('.txt2').val();
 sub=n1-n2;
 $('.result').html(sub);
});

$('#div').click(function(){
		n1=$('.txt1').val();
		 n2=$('.txt2').val();
		 div=n1/n2;
		 $('.result').html(div);

});

