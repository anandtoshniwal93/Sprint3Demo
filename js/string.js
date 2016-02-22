function manipulation(str) {
    var distance = 0;
    var alphabate = "";
    var flag = false;

    for (var i = 0; i < str.length; i++) {


        var n = str.lastIndexOf(str[i]) - i;

        if (n > 0) {

            if (i == 0) {
                distance = n;
                alphabate = str[i];
                flag = true;

            } else {
                if (distance < n) {
                    distance = n;
                    alphabate = str[i];
                    flag = true;
                }
            }
        }

    }
    if (flag) {
        str = str.slice(0, (str.indexOf(alphabate))) + str.slice((str.indexOf(alphabate) + 1), (str.lastIndexOf(alphabate))) + str.slice((str.lastIndexOf(alphabate) + 1), str.length);

        str +=alphabate;
        flag = false;
        manipulation(str);

    } else {
        for(var j=0;j<str.length;j++)
        {
           if(str[j]=="_")
        {
            str=str.slice(0, j);


        }
        }
       document.getElementById("result").innerText = "Resulting string :- "+str;


    }


}
