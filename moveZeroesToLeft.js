// Naive solution
/*
let move_zeros_to_left = A => {
	let tmp = [];
	let cp = [...A];

	if (A.length) {
		for (let i=0; i<A.length; i++) {
			if (cp[i] === 0) {
				tmp.push(0);
				cp.splice(i, 1);
			}
		}
		return tmp.concat(cp);
	}

	return;
}*/
// Write-Read approach
let move_zeros_to_left = function (A) {
	if(A.length < 1) {
		return;
	}

	let lengthA = A.length;
	let write_index = lengthA - 1;
	let read_index = lengthA -1;

	while (read_index >= 0) {
		if (A[read_index] !== 0) {
			A[write_index] = A[read_index];
			write_index--;
		}

		read_index--;
	}

	while(write_index >= 0) {
		A[write_index] = 0;
		write_index--;
	}

	return A;
}

console.log(move_zeros_to_left([1,10,-1,11,5,0,-7,0,25,-35]))
