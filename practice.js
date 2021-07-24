function b() {
	// body...
	var myVar;
	console.log(myVar);
}
a();
function a() {
	// body...
	var myVar=2;
	console.log(myVar);
	b();

}
var myVar=1;
console.log(myVar);
