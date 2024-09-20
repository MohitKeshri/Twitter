import { execute } from "../../src/service/dummy-service.js";
import { helper } from "../../src/service/helper-service.js";

jest.mock("../../src/service/helper-service.js");

test("result is true and return learning js", () => {
  helper.mockReturnValue(true);
  const result = execute();
  expect(result).toBe("learning js");
});

test("result is false and return learning reactjs", () => {
  helper.mockReturnValue(false);
  const result = execute();
  expect(result).toBe("learning reactjs");
});
