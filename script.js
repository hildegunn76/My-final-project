function compute() {
		var Principal = document.getElementById('principal').value;		 
		var Rate = document.getElementById('rate').value;
	    	var Years = document.getElementById('years').value;	
	  	
		if (Principal <= 0) {
    			alert("Enter a positive number");
			document.getElementById("principal").focus();
  			} 
		else {
        		var Interest = (Principal * Years * Rate)/100;

        		document.getElementById('result').innerHTML = PayoutYear(); 

        		var Result = "<br />If you deposit <span>" + Principal + "</span>,<br />" 

			Result = Result + " at an interest rate of <span>" + Rate + "% </span>. <br />" 
			Result = Result + "You will receive an amount of <span>" + Interest + "</span>,<br />" 
			Result = Result + "in the year <span>" + PayoutYear() + "</span>"; 

        		document.getElementById('result').innerHTML = Result;
			
		}
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




