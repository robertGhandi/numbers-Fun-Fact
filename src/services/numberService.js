import { isPrime, isPerfect, getProperties } from "../utils/numberUtils.js";
import axiosInstance from "../config/axiosInstance.js";

const getNumberFunFact = async (number) => {
	try {
		const response = await axiosInstance.get(
			`http://numbersapi.com/${number}/math`
		);
		return response.data;
	} catch (error) {
		throw new Error("Failed to fetch fun fact");
	}
};

const calculateNumberProperties = (number) => {
	return {
		is_prime: isPrime(number),
		is_perfect: isPerfect(number),
		properties: getProperties(number),
		digit_sum: Math.abs(number)
			.toString()
			.split("")
			.reduce((acc, digit) => acc + Number(digit), 0),
	};
};

export { getNumberFunFact, calculateNumberProperties };
