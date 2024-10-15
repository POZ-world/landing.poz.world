// profile-fields.test.ts
import { ProfileFieldTypes } from "./profile-fields";

describe("ProfileFieldTypes", () => {
  const expectedValues: string[] = [
    "string",
    "url",
    "date",
    "datetime",
    "float",
    "boolean",
    "object",
    "location",
    "integer",
    "ft&in",
    "in/cm",
    "lbs/kg",
  ];

  it("should contain all expected values", () => {
    expectedValues.forEach((value) => {
      expect(ProfileFieldTypes).toContain(value);
    });
  });

  it("should not contain unexpected values", () => {
    const unexpectedValues: string[] = ["unexpected", "value"];
    unexpectedValues.forEach((value) => {
      expect(ProfileFieldTypes).not.toContain(value);
    });
  });
});
