// https://swe-docs.netlify.app/js/array-push-pop.html

/**
 * Given an array, take the last element and put it on the front
 *
 * e.g. ['x', 'y', 'z'] => ['z', 'x', 'y']
 *
 * @param {Array} arr - The input array
 * @returns {Array} The array with the last element at the front
 */

// TODO

export function arrayRotate(arr) {
  const lastelement = arr.pop()
  arr.unshift(lastelement) 
  
}

//const testarray = [z,x,y]
//const result= arrayRotate(testarray)
//console.log(result)