let binary_search = function(a, key) {
  if (a.length === 0) {
    return -1
  } else {
    var mid = Math.ceil((a.length -1) / 2);
    if (a[mid] === key) {
      return mid;
    } else if (a[mid] > key) {
      return binary_search(a.splice(0, mid), key)
    } else if (a[mid] < key) {
      return binary_search(a.splice(mid, a.length), key)
    } else {
      return -1
    }
  }
}
// TESTS
console.log('the key for 47 is: ' + binary_search([10,20,47,59,63,75,88,99,107,120,133,155,162,176,188,199,200,210,222], 47))
console.log('should be ' + binary_search([199,200,210,222], 175))
console.log('the key for 75 is: ' + binary_search([75,133,155,162,176,188,199,200,210,222], 75))

