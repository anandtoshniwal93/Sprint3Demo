function pivalue(){
  var n =$('#text1').val();
  if(n>=0 && n<=20)

    document.getElementById('result').innerText="pi value:  " + Math.PI.toFixed(n);

  else
  {

     document.getElementById('result').innerText="enter number between 0 to 20";
  }

}
