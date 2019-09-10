let binary_search_rotated = (arr, key) => {
	const mid = Math.ceil(arr.length / 2);
	
	if(arr.length !== 0) {
		if (arr[mid] === key) {
			return mid;
		} else if (key > arr[mid] && arr[0] > arr[mid]) {
			return 0 + binary_search_rotated(arr.splice(0, mid), key);
		} else {
			return mid + binary_search_rotated(arr.splice(mid, arr.length), key);
		}
	}
	
	return -1;
};

const arr1 = [4,5,6,1,2,3];
console.log(`${arr1} finds 6? : ${binary_search_rotated(arr1, 6)}`);

const arr2 = [1,2,3];
console.log(`${arr2} finds 3? : ${binary_search_rotated(arr1, 3)}`);

