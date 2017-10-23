// ///////////////////////////
// v1
// ///////////////////////////
console.info("Home Work v1.1");

var test_array = [5, 4, 3, 2, 1]


Object.prototype.myForEach = function( data ){
	for ( i = 0; i <= this.length; i++ ) {
	data(  this[i] );
	// console.log(i, data[i]);
	}
}



 test_array.myForEach(function(data){
 	console.log(data);

 })
