Partial Solution:

function tripledouble(num1, num2) {

  var digits1 = (""+num1).split("");
  var possibleSolutions = [];
  var found = -1;
  
  if(digits1.length < 3){
	possibleSolutions = undefined;
  } else {
	for(let i=0; i<digits1.length-3;i++){
		if(digits1[i] === digits1[i+1] && digits1[i] === digits1[i+2]){
			let tmp = digits1[i] + digits1[i+1] + digits1[i+2];
			console.log(tmp);
			possibleSolutions = tmp.toString();
		}
	}
  }
  
  var digits2 = (""+num2).split("");

  if(possibleSolutions !== undefined && digits2.length > 2){
	let searchString = possibleSolutions[0] +  possibleSolutions[1];
	searchString = searchString.toString();
	console.log('searchString = ' + searchString );
	numStr = num2.toString();
	console.log('numStr = ' + numStr );
	found = numStr.indexOf(searchString);
	console.log('found = ' + found); 
  } else {
  	possibleSolutions = undefined;
  }  
  
  if(found > -1){
     return 1;
  } else {
	  return 0;
  }
  
}

Sample Tests:
