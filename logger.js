const LOG_API = "http://4.224.186.213/evaluation-service/logs";

export const Log = async (
  level,
  packageName,
  message,
  accessToken
) => {
  try {
    const response = await fetch(LOG_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cXuqht}`,
      },
      body: JSON.stringify({
        stack: "frontend",
        level,
        package: packageName,
        message,
      }),
    });

    return await response.json();
  } catch (error) {
    console.error("Logging Failed:", error);
    return null;
  }
};