const containsDuplicate = nums => {
	let tmpObj = {};

	for (let i=0; i < nums.length; i++) {
		if (tmpObj[nums[i]] === nums[i]) {
			return true;
		}

		tmpObj[nums[i]] = nums[i];
	}

	return false;
};

const containsDuplicateNaive = nums => {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if(nums[i] === nums[j]) {
				return true;
			}
		}
	}

	return false
};

const arr1 = [1,2,3,1];
console.log(`${arr1} contains duplicate? : ${containsDuplicate(arr1)}`)

const arr2 = [1,2,3,4];
console.log(`${arr2} contains duplicate? : ${containsDuplicate(arr2)}`)

const arr3 = [1,1,1,3,3,4,3,2,4,2];
console.log(`${arr3} contains duplicate? : ${containsDuplicate(arr3)}`)

console.log(`${arr1} contains duplicate? : ${containsDuplicateNaive(arr1)}`)
console.log(`${arr2} contains duplicate? : ${containsDuplicateNaive(arr2)}`)
console.log(`${arr3} contains duplicate? : ${containsDuplicateNaive(arr3)}`)

