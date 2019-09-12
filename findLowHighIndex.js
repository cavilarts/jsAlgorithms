// Naive solution;
/*
let find_low_index = (arr, key) => {
	if (arr.length) {
		for (let i=0; i<arr.length; i++) {
			if(arr[i] === key) {
				return i;
			}
		}
	}

	return -1;
};

let find_high_index = (arr, key) => {
	if (arr.length) {
		for (let i=arr.length; i>0; i--) {
			if(arr[i] === key) {
				return i;
			}
		}
	}

	return -1
}*/

// Binary search solution

let find_low_index = (arr, key) => {
	let high = arr.length -1;
	let mid = Math.floor(high / 2);
	let low = 0;

	while (low <= high) {
		let mid_elem = arr[mid];

		if (mid_elem < key) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
		
		mid = low + Math.floor((high - low) /2); 
	}

	if(arr[low] === key) {
		return low;
	}

	return -1;
}

let find_high_index = (arr, key) => {
	let high = arr.length -1;
	let low = 0;
	let mid = 0;

	while (low <= high) {
		let mid_elem = arr[mid];

		if (mid_elem <= key) {
			low = mid + 1;
		} else {
			high = mid -1;
		}

		mid = low + Math.floor((high - low) /2);
	}

	if(arr[high] === key) {
		return high;
	}

	return -1;
}

const arr = [1,1,1,2,2,2,2,2,3,3,3,4,4,4,4,5,5,5,6,6,6,6,6,6];
const el = 5;
const min = find_low_index(arr, el);
const max = find_high_index(arr, el);

console.log(`The min index is: ${min} and max index is: ${max}`);
