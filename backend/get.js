// const { db } = require("./app"); // Import the 'db' object from your app.js

// const getfun = async (from) => {
//   console.log("getfrom/people=", "from=", from);
//   let peopledata;

//   if (from == "people") peopledata = db.collection("peopledata");
//   if (from == "left") peopledata = db.collection("left");
//   if (from == "right") peopledata = db.db("right").collection("right");

//   try {
//     const data = await peopledata.find({}).toArray();
//     console.log("Data retrieved from the 'peopledata' collection:", data);
//     return data; // Send the retrieved data as a JSON response
//   } catch (error) {
//     console.error("Error retrieving data:", error);
//     throw error; // You can throw the error here to be caught in app.js
//   }
// };

// module.exports = getfun;
