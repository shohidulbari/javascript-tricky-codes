function append(array, toAppend) {
    const arrayCopy = array.slice();
    if ('first' in toAppend) {
      arrayCopy.unshift(toAppend.first);
    }
    if ('last' in toAppend) {
      arrayCopy.push(toAppend.last);
    }
    return arrayCopy;
}
let getArray = append([10], {first : 0, last: null});
console.log(getArray);
//'prop' in obj: verify whether the object has an own or inherited property
// obj.hasOwnProperty('prop'): verify whether the object has an own property
// obj.prop !== undefined: compare against undefined directly
// typeof obj.prop !== 'undefined': verify the property value type