// Kadane's algorithm 
let find_buy_sell_stock_prices = function(array) {
	if (!array || array.length < 2) {
		return [-1, -1];
	}
	
 	let current = array[0];
	let global = array[1];
	let global_profit = global - current;
	let current_profit = 0;

	for (let i=1; i<array.length; i++) {
		current_profit = array[i] - current;

		if (current_profit > global_profit) {
			global_profit = current_profit;
			global = array[i];
		}

		if (current > array[i]) {
			current = array[i]
		}

	}
	
	return  [global - global_profit, global];
};

console.log(find_buy_sell_stock_prices([8,6,5,4,3,2,1]));
console.log(find_buy_sell_stock_prices([1,2,3,4,3,2,1,2,5]));

