// ///////////////////////////
// v1
// ///////////////////////////
console.info("Home Work v1.1")

var test_array = [5, 4, 3, 2, 1]


Object.prototype.myForEach = function( data ){
	for ( i = 0; i <= this.length; i++ ) {
	data(  this[i],  Object.prototype.toString.call(data) === '[object Array]' )
	// console.log(i, data[i]);
	}
}

 test_array.myForEach(function(data){
 	console.log( data )
 })


 // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map


  Array.prototype.myMap = function(callback, thisArg) {
  	var T, A, k;
    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }
    var O = Object(this);

    var len = O.length >>> 0;

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    if (arguments.length > 1) {
      T = thisArg;
    }

    A = new Array(len);   
    k = 0;
    while (k < len) {
      var kValue, mappedValue;
     
      if (k in O) {
      
        kValue = O[k];

        mappedValue = callback.call(T, kValue, k, O);


        A[k] = mappedValue;
      }

      k++;
    }
    return A;
  };


 test_array.myMap(function(data){
 	console.log( data )
 })
