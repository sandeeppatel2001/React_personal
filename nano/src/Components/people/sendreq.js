// Define the submitDataToBackend function
export const submitDataToBackend = async (formData, from, type) => {
  try {
    console.log("sendreq.jsfile", JSON.stringify(formData), "from=", from);
    // Make an API request to send the formData to the backend
    // http://localhost:3001/${type === "GET" ? from : "people"}
    const response = await fetch(
      `https://stark.adaptable.app/${type === "GET" ? from : "people"}`,
      {
        method: type, // Use POST for adding data
        body: type === "POST" ? JSON.stringify({ formData, from }) : null, // Convert your data to JSON
        headers: {
          "Content-Type": "application/json", // Set the content type
        },
      }
    );

    if (type === "GET") {
      const responseData = await response.json();
      // Request was successful, you can handle it here
      console.log(`Data successfully GET to the backend`, responseData);
      return responseData;
    } else {
      // Handle errors or dispatch an error action
      console.log("post method");
      return;
    }
  } catch (error) {
    console.error("Error sending data:", error);
  }
};
export const deletmain = async (key, from) => {
  console.log("delete.js runnig", key);

  try {
    // http://localhost:3001/deletepeople
    const response = await fetch(
      "https://stark.adaptable.app/deletepeople",
      {
        method: "POST", // Use POST for adding data
        body: JSON.stringify({ key, from }), // Convert your data to JSON
        headers: {
          "Content-Type": "application/json", // Set the content type
        },
      }
    );

    if (response.ok) {
      console.log("deletesuc");
      return;
    } else {
      // Handle errors or dispatch an error action
      // console.error("delete erroorror");
      return;
    }
  } catch (error) {
    console.error("Error deletesending data:", error);
  }
};
