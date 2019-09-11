const rotate_array = (arr, n) => {
	let spl;
	let tmp = [];

	if (arr.length === 0 || n === 0) {
		return arr;
	} else if (n < 0) {
		spl = arr.splice(0, -n);
		return tmp.concat(arr, spl);
	} else {
		spl = arr.splice(arr.length - n);
		return tmp.concat(spl, arr);
	}
};

console.log(rotate_array([1, 2, 3, 4, 5], 2))
console.log(rotate_array([1, 2, 3, 4, 5], -3))
console.log(rotate_array([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], -1))
console.log(rotate_array([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], 2))
