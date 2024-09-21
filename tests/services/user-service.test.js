import UserService from "../../src/service/user-service.js";
import UserRepository from "../../src/repository/user-repository.js";

jest.mock("../../src/repository/user-repository.js");

describe("user service signup test", () => {
  test("should successfully create a user", async () => {
    const data = {
      email: "a@b.com",
      password: "12345",
    };
    UserRepository.prototype.create.mockReturnValue({
      ...data,
      createdAt: "2022-02012",
      updatedAt: "2022-02012",
    });
    const service = new UserService();
    const response = await service.signup();
    expect(response.email).toBe(data.email);
  });
});
