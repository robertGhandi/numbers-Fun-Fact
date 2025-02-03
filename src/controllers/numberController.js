import axios from 'axios';
import { isPrime, isPerfect, getProperties } from "../utils/numberUtils.js";

const getNumberProperties = async (req, res) => {
    const { number } = req.query;
    const parsedNum = Number(number);

    if (!number || isNaN(parsedNum)) {
        return res.status(400).json({
            number: number || "missing number in query",
            error: true,
            
        });
    }

    try {
        const funFactResponse = await axios.get(`http://numbersapi.com/${parsedNum}/math`);
        const funFact = funFactResponse.data;

        res.status(200).json({
            number: parsedNum,
            is_prime: isPrime(parsedNum),
            is_perfect: isPerfect(parsedNum),
            properties: getProperties(parsedNum),
            digit_sum: parsedNum.toString().split('').reduce((acc, digit) => acc + Number(digit), 0),
            fun_fact: funFact
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch fun fact' });
    }
};

export default getNumberProperties;
