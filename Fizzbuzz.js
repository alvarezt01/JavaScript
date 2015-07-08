for (i = 1; i <= 100; i++){
	if (i % 3 == 0 && i % 5 == 0){
		document.writeln(i + " FizzBuzz");
	}
	else if (i % 3 == 0){
		document.writeln(i + " Fizz");
	}
	else if (i % 5 == 0){
		document.writeln(i + " Buzz");
	}
	else{
		document.writeln(i);
	}
}




