function append(array, toAppend) {
    const arrayCopy = [...array];
    if (toAppend.first) { //don't check undefined with falsy value
      arrayCopy.unshift(toAppend.first);
    }
    if (toAppend.last) { //don't check undefined with falsy value
      arrayCopy.push(toAppend.last);
    }
    return arrayCopy;
}

let getArray = append([10], { first: 0, last: false });
console.log(getArray);
//Expected : [0, 10, false]
//got : [10];
//don't not check undefined with falsy value.
//false, null, 0, NaN, '' are falsy values.