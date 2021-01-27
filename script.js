function compute() {
		var Principal = document.getElementById('principal').value;		 
		var Rate = document.getElementById('rate').value;
	    	var Years = document.getElementById('years').value;	
	  	
		if (Principal <= 0) 
    			alert("Enter a positive number");
			document.getElementById("principal").focus();
  			
		else 
        		var Interest = (Principal * Years * Rate)/100;

        		document.getElementById('result').innerHTML = PayoutYear(); 

        		var Result = "<br />If you deposit <strong>" + Principal + "</strong>,<br />" 

			Result = Result + " at an interest rate of <strong>" + Rate + "% </strong>. <br />" 
			Result = Result + "You will receive an amount of <strong>" + Interest + "</strong>,<br />" 
			Result = Result + "in the year <strong>" + PayoutYear() + "</strong>"; 

        		document.getElementById('result').innerHTML = Result;
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




