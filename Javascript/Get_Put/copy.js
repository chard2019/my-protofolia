var copy=0;
copy=$('#GET').html();
$('#PUT').html(copy);
// This has taken the value of GET and display it in PUT
var copy2=0;
copy2=$('.GET2').html();
$('.PUT2').html(copy2);

var copy3=0;
copy3=$('.GET3').val();//INPUT TYPE=> get
$('.PUT3').val(copy3);//put

var copy4=0;
copy4=$('.GET4').val(); //input type
$('.PUT4').html(copy4);


$('#txt_holder').html('The variable of put 4 is: '+copy4 + ' Rfw'  );