const recursiveRactorial = (n) => {
	if (n === 0) {
		return 1;
	}
	return n * recursiveRactorial(n - 1);
}

console.log(recursiveRactorial(0)) // 1
console.log(recursiveRactorial(1)) // 1
console.log(recursiveRactorial(5)) // 120

// Big-O = O(n)

function fibonacci(num) {
  if (num <= 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(5));