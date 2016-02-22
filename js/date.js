$(document).ready(function(){

    $('#dob').datepicker();
    $('#errormsg').hide();

});
function agecalulator()
{
  var dtRegex = new RegExp(/\b\d{1,2}[\/-]\d{1,2}[\/-]\d{4}\b/);
  if(!$('#dob').val()=="" && dtRegex.test($('#dob').val()))
  {


   var dob=new Date($('#dob').val());

   var dob_month=dob.getMonth();
   var today=new Date();
   var days=((today.getFullYear() - dob.getFullYear())*365.25);
      days += ((today.getMonth()- dob.getMonth())*30.44);
      days +=(today.getDate() - dob.getDate());
  document.getElementById('days').innerText =Math.ceil(days);
  document.getElementById('hours').innerText=Math.ceil(days)*24;
   document.getElementById('min').innerText=Math.ceil(days)*24*60;
 }
 else
 {
     document.getElementById('errormsg').innerText="Enter Date of birth first or check date format(mm-dd-yyyy)";
     $('#errormsg').show();
 }
}
function reset()
{
    $('#errormsg').hide();
  $('#dob').val('');
  document.getElementById('days').innerText ="";
  document.getElementById('hours').innerText="";
   document.getElementById('min').innerText="";
}
