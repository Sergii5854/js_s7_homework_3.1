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

// http://www.stoimen.com/blog/2010/07/09/friday-algorithms-javascript-bubble-sort/

Object.prototype.mySort = function (callBack) {
    // var swapped
    // do {
    //     swapped = false;
    //     for (var i = 0; i < this.length - 1; i++) {
    //         if (this[i] > this[i + 1]) {
    //             var temp = this[i]
    //             this[i] = this[i + 1]
    //             this[i + 1] = temp
    //             swapped = true
    //         }
    //     }
    // } while (swapped);
}


test_array.mySort()
console.group("bubble sort");
console.info(" mySort")
console.log(test_array)

console.groupEnd();