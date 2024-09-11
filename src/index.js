import express from "express";
import bodyParser from "body-parser";
import { connect } from "./config/database.js";

import apiRoutes from "./routes/index.js";
import { UserRepository, TweetRepository } from "./repository/index.js";
import LikeService from "./service/like-service.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(3000, async () => {
  console.log(`server started`);
  await connect();
  console.log("Mongodb connected");

  // const userrepo = new UserRepository();
  // const tweetrepo = new TweetRepository();
  // const tweets = await tweetrepo.getAll(0, 10);
  // const users = await userrepo.getAll();

  // const likeService = new LikeService();
  // await likeService.toggleLike(tweets[0].id, "Tweet", users[0].id);
});
