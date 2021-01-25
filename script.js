function compute() {
		var Principal = document.getElementById('principal').value;		 
		var Rate = document.getElementById('rate').value;
	    var Years = document.getElementById('years').value;		 
        var Interest = Principal * Years * Rate/100;

        document.getElementById('result').innerHTML = PayoutYear(); 

        var Result = "<br />If you deposit <span>" + Principal + "</span>,<br />" 

        Result = Result + " at an interest rate of " + Rate + "%. <br />" 
        Result = Result + " You will receive an amount of " + Interest + ",<br />" 
        Result = Result + "in the year " + PayoutYear(); 

        

        document.getElementById('result').innerHTML = Result

		}
         
function PayoutYear()         { 
    var Years = 0;
    Years = document.getElementById('years').value;
    return 2021  + parseInt(Years);

}

function UpdateSlider(){
    var Rate = document.getElementById('rate').value;

    document.getElementById('rateAsText').innerHTML = Rate;

}




