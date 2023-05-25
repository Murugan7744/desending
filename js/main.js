


var a=prompt("enter a value");
var b=prompt("enter b value");
var c=prompt("enter c value");

if(a>b&&a>c){
	 if(b>c){
		 document.write(a+" "+b+" "+c);
	 }
	 else{
		 document.write(a+" "+c+" "+b);
	 }
}

else if(b>c&&b>a){
	 if(a>c){
		document.write(b+" "+a+" "+c);
	 }
	 else{
		 document.write(b+" "+c+" "+a);
	 }
		 
}
else if(c>a&&c>b){
	if(a>b){
		document.write(c+" "+a+" "+b);
	}
	else{
		document.write(c+" "+b+" "+a);
	}
}
	
