const express = require("express");
const connect = require("./config/database");

const app = express();

const TweetRepository = require("./repository/tweet-repository");
const Comment = require("./models/comments");

app.listen(3000, async () => {
  console.log(`server started`);
  await connect();
  console.log("Mongodb connected");
  // const tweet = await Tweet.create({
  //   content: "third tweet",
  //   userEmail: "a@b.com",
  // });
  const tweetRepo = new TweetRepository();
  // const tweet = await tweetRepo.getAll(0, 4);
  // console.log(tweet[0].contentWithEmail);
  //console.log(tweet);

  // console.log(tweet);
  // tweet.comments.push({ content: "first comment" });
  // await tweet.save();
  // console.log(tweet);
});
