function fib(){
	var start = 0;
	var next = 1;

	var fibArr = new Array();
	fibArr.push(start);
	fibArr.push(next);
 	// console.log(start);
 	// console.log(next);
	while (true){
		var final = start + next;
		start = next;
		next = final; 		
 		if(final > 610){ 	
 			console.log(fibArr);	
 			return;
 		}
        console.log(final);
 		fibArr.push(final);
	}  
}

fib()