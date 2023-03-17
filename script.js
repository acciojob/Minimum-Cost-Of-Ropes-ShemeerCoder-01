function calculateMinCost() {
	
	var inputData = document.querySelector("#rope-lengths").value;
	var inputArr = inputData.split(",");
	for(var i = 0; i < inputArr.length; i++){
		inputArr[i] = Number(inputArr[i]);
	}
	var cost = 0;
	while(inputArr.length > 1){
		inputArr.sort(function(a,b){return a-b;});
		var rope = inputArr[0] + inputArr[1];
		cost += rope;
		inputArr.splice(0,2);
		inputArr.push(rope);
	}

	document.getElementById("result").innerHTML = cost;

  
}  
