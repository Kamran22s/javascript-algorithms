const factorial = (n) => {
	let fac = 1;
	for (let i = 2; i <= n; i++) {
		fac = fac * i;
	}
	return fac;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

// Big-O = O(n)