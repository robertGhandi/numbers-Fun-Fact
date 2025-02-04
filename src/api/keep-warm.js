import axiosInstance from "../config/axiosInstance.js"; 

let START_TIME = null; // Variable to store the start time of the cron job

export default async function handler(req, res) {
    // If START_TIME hasn't been set, initialize it with the current time
    if (!START_TIME) {
        START_TIME = Date.now();
        console.log("Cron job started.");
    }

    const elapsedTime = Date.now() - START_TIME; // Calculate elapsed time
    const maxDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    if (elapsedTime >= maxDuration) {
        console.log("Cron job stopped after 24 hours.");
        return res.status(200).json({ message: "Keep-warm job stopped after 24 hours" });
    }

    try {
        // Send the keep-warm request 
        await axiosInstance.get("https://numbers-fun-fact.vercel.app/api/classify-number?number=42");
        res.status(200).json({ message: "Keep-warm triggered" });
    } catch (error) {
        console.error("Keep-warm request failed:", error);
        res.status(500).json({ error: "Failed to keep warm" });
    }
}
