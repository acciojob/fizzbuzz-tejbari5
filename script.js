//your JS code here. If required.
let I = prompt("Enter a Number Between 1-100");

for(let N=1; N<=I; N++){
	if(N%3==0 && N%5==0){
	alert("FizzBuzz");
}else if(N%3==0){
	alert("Fizz");
}else if(N%5==0){
	alert("Buzz");
}
}