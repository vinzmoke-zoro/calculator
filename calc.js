
var resfield = $("#result");
function insert(number){
    var existno = resfield.val();
    resfield.val(existno + number);
};

function clearRes(){
    resfield.val('');
}

function calculate(){
   var res = eval(resfield.val());
   resfield.val(res);

}
function deletenum(){
var  presvalue = resfield.val();
if(presvalue !=''){
    resfield.val(presvalue.slice(0,-1));
 }
}
function plusminus(number){
    var existno = resfield.val();

        resfield.val( number + existno);
}

