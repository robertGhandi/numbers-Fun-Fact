// Purpose: Controller for handling requests to get number properties
import { getNumberFunFact, calculateNumberProperties } from "../services/numberService.js";

const getNumberProperties = async (req, res) => {
	const { number } = req.query;
	const parsedNum = Number(number);

	if (!number || isNaN(parsedNum) ||!Number.isInteger(parsedNum)) {
		return res.status(400).json({
			number: number || "missing number in query",
			error: true,
		});
	}

	try {
		const [ funFact, properties ] = await Promise.all([
            getNumberFunFact(parsedNum),
            calculateNumberProperties(parsedNum),
        ]);

		return res.status(200).json({
			number: parsedNum,
			...properties,
			fun_fact: funFact,
		});
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch fun fact" });
	}
};

export default getNumberProperties;
