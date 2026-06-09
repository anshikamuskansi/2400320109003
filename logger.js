// const LOG_API = "http://4.224.186.213/evaluation-service/logs";

// export const Log = async (
//   level,
//   packageName,
//   message,
//   accessToken
// ) => {
//   try {
//     const response = await fetch(LOG_API, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${accessToken}`,
//       },
//       body: JSON.stringify({
//         stack: "frontend",
//         level,
//         package: packageName,
//         message,
//       }),
//     });

//     return await response.json();
//   } catch (error) {
//     console.error("Logging Failed:", error);
//     return null;
//   }
// };
const LOG_API = "http://4.224.186.213/evaluation-service/logs";

const accessToken = "cXuqht";

export const Log = async (
  stack,
  level,
  packageName,
  message
) => {
  try {
    console.log("Stack:", stack);
    console.log("Level:", level);
    console.log("Package:", packageName);
    console.log("Message:", message);

    const response = await fetch(LOG_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message,
      }),
    });

    const data = await response.json();

    console.log("Log Response:", data);
    alert("Log Response: " + JSON.stringify(data));

    return data;
  } catch (error) {
    console.error("Logging failed:", error);
    alert("Logging failed: " + error.message);
  }
};