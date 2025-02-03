// Function to check if a number is prime
function isPrime(num) {
	if (num < 2) return false;
	for (let i = 2; i * i <= num; i++) {
		if (num % i === 0) return false;
	}
	return true;
}

// Function to check if a number is perfect
function isPerfect(num) {
	let sum = 1;
	for (let i = 2; i * i <= num; i++) {
		if (num % i === 0) {
			sum += i;
			if (i !== num / i) sum += num / i;
		}
	}
	return sum === num && num !== 1;
}

// Function to check if a number is an Armstrong number
function isArmstrong(num) {
	const digits = num.toString().split("").map(Number);
	const power = digits.length;
	const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
	return sum === num;
}

// Function to determine properties
function getProperties(num) {
	const properties = [];
	if (isArmstrong(num)) properties.push("armstrong");
	properties.push(num % 2 === 0 ? "even" : "odd");
	return properties;
}

export { isPrime, isPerfect, getProperties };
