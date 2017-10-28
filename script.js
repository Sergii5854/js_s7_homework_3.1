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

Array.prototype.mySort = function(callback) {
 callback = callback || function (a, b) {
    if (a === b) {
      return a > b ? 1 : a < b ? -1 : 0;
    } 
  }

var is_sorted = false;
 while (!is_sorted) 
 {
    is_sorted = true;
    for (var i = 0; i < this.length - 1; i++) 
    {
      if (this[i] > this[i+1]){
        var x = this[i+1];
        this[i+1] = this[i];
        this[i] = x;
        is_sorted = false;
      }
    }
  }
  return this;
}


var test_array_v1 = [ 5, 4, 3, 2, 19, 3, 2, 1, 4, 7, 6, 5, 8, 'a', 'B', 'A', 'name']
var tes = [{name:'Tim'},{name:'Anna'},{name:'Marfha'},{name:'Katrin'}]



test_array_v1.mySort()
test_array.mySort()
tes.mySort(function(a,b){
     console.log(a,a)
    return a.name > b.name ? -1 : 0
})
tes.mySort()
console.group("mySort");
console.info(" mySort")
console.log(test_array)
console.log(tes)
console.log( 'array_v1', test_array_v1 )
console.groupEnd();

var itemsArray = [
  ['Anne', 'a'],
  ['Bob', 'b'],
  ['Henry', 'b'],
  ['Andrew', 'd'],
  ['Jason', 'c'],
  ['Thomas', 'b']
];

var sortingArr = ['b', 'c', 'b', 'b', 'a', 'd'];
sortingArr.mySort()
console.log(sortingArr);
itemsArray.mySort(function(a,b){
     console.log(a, b)
    return a.a > b.b ? -1 : 0
})
