function interest() {
    var choice = $("input[name=option]:checked").val();
    var period_choice = $("input[name=type]:checked").val();
    var p = $('#principle').val();
    var n = $('#period').val();
    var r = $('#rate').val() / 100;
    if (choice == "ci") {


        if (period_choice == "weekly") {
             var ans=p*Math.pow(1 +(r/52),n/52);
            document.getElementById('result').innerText = ans.toFixed(2);
        } else if (period_choice == "monthly") {
          var ans=p*Math.pow(1 +(r/12),n/12);
            document.getElementById('result').innerText = ans.toFixed(2);
        } else if (period_choice == "yearly") {
      
           var a = p*Math.pow((1 + r), n);

            document.getElementById('result').innerText = a.toFixed(2);
        }
        document.getElementById('resultl').innerText = "Interest";
    } else {



        if (period_choice == "weekly") {

            r = r / 52;
            n = n * 52;

        } else if (period_choice == "monthly") {
            r = r / 12;
            n = n * 12;
        }


        var total = Math.round((p * r * Math.pow((1 + r), n) / [Math.pow((1 + r), n) - 1]));
        document.getElementById('resultl').innerText = "EMI    ";
        document.getElementById('result').innerText = total;
    }

}

$(document).ready(function() {
    $('.h').hide();
    $('#radio2').on("change", function(event) {
        $('.h').show();
        document.getElementById('result').innerText = "";
    });
    $('#radio1').on("change", function(event) {
        $('.h').hide();
        document.getElementById('result').innerText = "";
    });
});
