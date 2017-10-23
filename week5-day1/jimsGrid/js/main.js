$( '#investCycle' ).change(function () {
	//when the user selects a date
    $( '#investCycle option:selected' ).each(function() {
	var date = new Date((this).value);
	console.log(date);
	var quarter = Math.floor((date.getMonth() + 3) / 3);//date to month and reduce month to quarter
	
		switch(quarter){	 
		case 1:
			$( '#quarters' ).text('April, July, October');
		break;
		case 2:
			$( '#quarters' ).text('July, October, January');
		break;
		case 3:
			$( '#quarters' ).text('October, January, April');
        break;
		case 4:
			$( '#quarters' ).text('January, April, July');
        break;
		}
    });    
  })
  .change();