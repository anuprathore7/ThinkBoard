import rateLimiter from "../config/upstash.js";

const FirstRateLimiter = async (req, res, next) => {
  try {
    const { success } = await rateLimiter.limit("your-unique-id-here");
    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many requests, please try again later" });
    }
    next(); // Don’t forget this!
  } catch (error) {
    console.error(`Oops, too many requests: ${error}`);
    return res.status(500).json({ message: "Internal Server Error" });
    
  }
};

export default FirstRateLimiter;
