// ///////////////////////////
// v1
// ///////////////////////////
console.info("Home Work v1.1")

var test_array = [5, 4, 3, 2, 1]


Object.prototype.myForEach = function (data) {
    for (i = 0; i <= this.length; i++) {
        data(this[i], Object.prototype.toString.call(data) === '[object Array]')
        // console.log(i, data[i]);
    }
}

console.group("my ForEach ");
console.info(" ForEach")
console.log(test_array)

test_array.myForEach(function (data) {
    console.log(data)
})

console.groupEnd();
///////////////////////////////////////////////////////


Array.prototype.myForEachPolyFill = function (callback, thisArg) {

    var T, k;

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

    k = 0;

    while (k < len) {

        var kValue;
        if (k in O) {
            kValue = O[k];
            callback.call(T, kValue, k, O);
        }

        k++;
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

console.group("my Map PolyFill");
console.info(" map")
console.log(test_array)

test_array.myMap(function (data) {
    console.log(data)
})

console.groupEnd();


///////////////////////////////////////////////////////

// http://www.stoimen.com/blog/2010/07/09/friday-algorithms-javascript-bubble-sort/

Object.prototype.mySort = function (data) {
    var swapped
    do {
        swapped = false;
        for (var i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {
                var temp = this[i]
                this[i] = this[i + 1]
                this[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped);
}

test_array.mySort()
console.group("bubble sort");
console.info(" mySort")
console.log(test_array)

console.groupEnd();