import express from "express";
import { connect } from "./config/database.js";

const app = express();

// import Service from "./service/tweet-service.js";

app.listen(3000, async () => {
  console.log(`server started`);
  await connect();
  console.log("Mongodb connected");
  // let ser = new Service();
  // await ser.create({ content: "Done with #refactor ?" });
});
