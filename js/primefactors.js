
function primefactors() {
  if(!isNaN($('#number').val()))
  {
  var remainder=$('#number').val();
        var factors = [], i;

        for (i = 2; i <= remainder; i++) {
            while ((remainder % i) === 0) {

                factors.push(i);
                remainder /= i;
            }
        }

     var result=factors.join();
     document.getElementById('result').innerText="Prime factors:"+result;
  }
  else
    {
      document.getElementById('result').innerText="enter number";
    }
}
