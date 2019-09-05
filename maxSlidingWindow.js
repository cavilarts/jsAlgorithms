let find_max_sliding_window = function(arr, window_size) {
	var result = [];
	
	for (let i=0; i < arr.length; i++) {
		let b = [...arr];
		let c = [...b.splice(i, window_size)];
		let d = -Infinity;

		for (let j=0; j < c.length; j++) {
			if(d < c[j]) {
				d = c[j];
			}
		}
	
		if(c.length === window_size) {
			result.push(d);
		}
	}

	return result;
};

let array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];
console.log("Array = " + array);
console.log("Max = " + find_max_sliding_window(array, 3));

let array1 = [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67]  
console.log("Array = " + array1);
console.log("Max = " + find_max_sliding_window(array1, 3));
