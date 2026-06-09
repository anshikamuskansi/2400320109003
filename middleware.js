import { logger } from "./logger";

export const apiMiddleware = async (apiCall) => {
  try {
    logger("API Request Started");

    const response = await apiCall();

    logger("API Request Successful");

    return response;
  } catch (error) {
    logger(error.message, "ERROR");
    throw error;
  }
};