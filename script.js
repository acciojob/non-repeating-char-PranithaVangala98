function firstNonRepeatedChar(str) {
 // Write your code here
	if(!str){
		return null
	}
	let frechar = new Map()

	for (let char of str) {
		if(frechar.get(char)){
			frechar.set(char, frechar.get(char)+1)
		}else{
			frechar.set(char, 1)
		}	
	}
	for (let char of str) { 
		if(frechar.get(char)===1){
			return char
		}
	}
	return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
