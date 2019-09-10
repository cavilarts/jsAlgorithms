const find_least_common_number = function (a, b, c) {
	for (let i=0; i<a.length; i++) {
		for (let j=0; j<b.length; j++) { 
			for (let k=0; k<c.length; k++) {
				if(a[i] === b[j] && c[k] === b[j]) {
					return a[i]
				}
			}
		}
	}

	return;
};
