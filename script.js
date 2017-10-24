// ///////////////////////////
// v1
// ///////////////////////////
console.info("Home Work v1.1")

var test_array = [5, 4, 3, 2, 1]


///////////////////////////////////////////////////////


Array.prototype.myForEachPolyFill = function (callback, thisArg) {

    var thisArg, key;

    if (this == null) {
        throw new TypeError(' this is null or not defined');
    }

    var Obj = Object(this);
    var len = Obj.length >>> 0;

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    if (arguments.length > 1) {
        thisArg = thisArg;
    }

    key = 0;

    while (key < len) {

        var kValue;
        if (key in Obj) {
            kValue = Obj[key];
            callback.call(thisArg, kValue, key, Obj);
        }

        key++;
    }
};


console.group("my ForEach PolyFill");
console.info(" ForEach")
console.log(test_array)

test_array.myForEachPolyFill(function (data) {
    console.log(data)
})

console.groupEnd();

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map

///////////////////////////////////////////////////////

Array.prototype.myMap = function (callback, thisArg) {
    var thisArg, array, key;
    if (this == null) {
        throw new TypeError(' this is null or not defined');
    }
    var Obj = Object(this);

    var len = Obj.length >>> 0;

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    if (arguments.length > 1) {
        thisArg = thisArg;
    }

    array = new Array(len);
    key = 0;
    while (key < len) {
        var kValue, mappedValue;

        if (key in Obj) {

            kValue = Obj[key];
            mappedValue = callback.call(thisArg, kValue, key, Obj);
            array[key] = mappedValue;
        }

        key++;
    }
    return array;
};

console.group("my Map PolyFill");
console.info(" map")
console.log(test_array)

test_array.myMap(function (data) {
    console.log(data)
})

console.groupEnd();


///////////////////////////////////////////////////////
//https://stackoverflow.com/questions/23449724/why-is-selection-sort-so-fast-in-javascript
// http://www.stoimen.com/blog/2010/07/09/friday-algorithms-javascript-bubble-sort/

Object.prototype.mySort = function (callBack) {

var is_sorted = false;
 while (!is_sorted) 
 {
    is_sorted = true;
    for (var n = 0; n < this.length - 1; n++) 
    {
      if (this[n] > this[n+1]){
        var x = this[n+1];
        this[n+1] = this[n];
        this[n] = x;
        is_sorted = false;
      }
    }
  }
  return this;

}

var test_array_v1 = [ 5, 4, 3, 2, 19, 3, 2, 1, 4, 7, 6, 5, 8, 'a', 'B', 'A', 'name']


test_array_v1.mySort()
test_array.mySort()

console.info(" mySort")
console.log(test_array)
 console.log( 'array_v1', test_array_v1 )
 console.groupEnd();