import TweetRepository from "../../src/repository/tweet-repository.js";
import Tweet from "../../src/models/tweet.js";
jest.mock("../../src/models/tweet.js");

describe("create tweet tests", () => {
  test("should create a new tweet and return it", async () => {
    const data = {
      content: "Testing tweet",
    };
    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      return { ...data, createdAt: "2022-02012", updatedAt: "2022-02012" };
    });
    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data);
    expect(spy).toHaveBeenCalled();
    expect(tweet.content).toBe(data.content);
  });

  test("should not create a tweet and throw exception", async () => {
    const data = {
      content: "Testing tweet",
    };
    const spy = jest.spyOn(Tweet, "create").mockImplementation(() => {
      throw new Error("something went wrong");
    });
    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data).catch((err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("something went wrong");
    });
  });
});

describe("get all tweet tests", () => {
  test("testing limit for getall", async () => {
    const data = {
      content: "Testing tweet",
    };
    const tweetsArray = [
      { ...data, createdAt: "2022-02012", updatedAt: "2022-02012" },
      { ...data, createdAt: "2022-02012", updatedAt: "2022-02012" },
      { ...data, createdAt: "2022-02012", updatedAt: "2022-02012" },
    ];
    const findResponse = { tweetsArray };
    findResponse.limit = jest.fn((limit) =>
      findResponse.tweetsArray.slice(0, limit)
    );

    findResponse.skip = jest.fn((offset) => findResponse);
    findResponse;
    const spy = jest.spyOn(Tweet, "find").mockImplementation(() => {
      return findResponse;
    });
    const tweetRepository = new TweetRepository();
    const tweets = await tweetRepository.getAll(0, 2);
    expect(spy).toHaveBeenCalled();
    console.log(tweets);
    expect(tweets).toHaveLength(2);
  });
});

// test("actur", async () => {
//   const data = {
//     content: "#big",
//   };
//   const tweet = await Tweet.create(data);
//   expect(tweet).toBeUndefined();
// });
