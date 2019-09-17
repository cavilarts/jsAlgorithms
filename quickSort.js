let quick_sort = function (a) {
	if (a.length <= 1) return a;

	let pivot = a[0];
	let l = [];
	let r = [];

	for (let i = 1; i<a.length; i++){
		if(a[i] < pivot) {
			l.push(a[i]);
		} else {
			r.push(a[i]);
		}
	}

	return [...quick_sort(l), pivot, ...quick_sort(r)];
}

console.log(quick_sort([33,6,21,12,19,29,38,22,14,40]));
console.log(quick_sort([4, 2, 6, 7, 1,7 ,8, 4, 2]))
