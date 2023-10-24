const express = require("express");
const app = express();
const mongodb = require("mongodb");
const cors = require("cors");
app.use(cors());
require("dotenv").config();

app.use(express.json());
let db;
// import { getfun } from "./get";
// const getfun = require("./get");
async function connectToDatabase() {
  try {
    const url = process.env.URL;

    const client = await mongodb.MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = client.db();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB: " + err);
  }
}

connectToDatabase();

app.get("/", (req, res) => {
  res.send("This is a GET request route.");
});

app.post("/people", async (req, res) => {
  if (!db) {
    return res.status(500).send("Database not connected");
  }
  const from = req.body.from;
  console.log("from=/people=", req.body.formData);
  let peopledata;
  if (from == "people") {
    peopledata = db.collection("peopledata");
  }
  if (from == "left") {
    peopledata = db.collection("left");
  }
  if (from == "right") {
    peopledata = db.collection("right");
  }

  try {
    const result = await peopledata.insertOne(req.body.formData);
    console.log(result.insertedId);
    res.send("Data inserted into the database.");
  } catch (err) {
    console.error("Error inserting data into the database: " + err);
    res.status(500).send("Internal Server Error");
  }
});
app.post("/deletepeople", async (req, res) => {
  const index = req.body.key;
  const from = req.body.from;
  let peopledata;
  console.log("indelevvvvvvvvvvvvvvvvvvvvv", index);
  if (from == "people") {
    peopledata = db.collection("peopledata");
  }
  if (from == "left") {
    peopledata = db.collection("left");
  }
  if (from == "right") {
    peopledata = db.collection("right");
  }

  const documentsToDelete = await peopledata
    .find({})
    .skip(index) // Skip the first 3 documents (0-based index)
    .limit(1) // Limit the result to 1 document (the 4th document)
    .toArray();

  if (documentsToDelete.length === 1) {
    // If a document was found, delete it
    const deletedDocument = documentsToDelete[0];
    await peopledata.deleteOne({ _id: deletedDocument._id });
    console.log(`${index + 1}th document deleted successfully.`);
  } else {
    console.log("No 4th document found.");
  }
  res.send({ ok: 1 });
});

// app.get("/people", async (req, res) => {
//   // const peopledata = db.collection("peopledata");
//   // const data = await peopledata.find({}).then((r) => {
//   //   console.log("kkkkk", r);
//   // });
//   // const from = req.body.from;
//   console.log("'getreq at /people");
//   const data = getfun("people");
//   console.log(data);
// });
app.get("/people", async (req, res) => {
  try {
    const data = await getfun("people");
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/left", async (req, res) => {
  try {
    const data = await getfun("left");
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/right", async (req, res) => {
  try {
    const data = await getfun("right");
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).send("Internal Server Error");
  }
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is running on port =", port);
});
module.exports = {
  db,
};

const getfun = async (from) => {
  console.log("getfrom/people=", "from=", from);
  let peopledata;

  if (from == "people") peopledata = db.collection("peopledata");
  if (from == "left") peopledata = db.collection("left");
  if (from == "right") peopledata = db.collection("right");

  try {
    const data = await peopledata.find({}).toArray();
    console.log("Data retrieved from the 'peopledata' collection:", data);
    return data; // Send the retrieved data as a JSON response
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw error; // You can throw the error here to be caught in app.js
  }
};
