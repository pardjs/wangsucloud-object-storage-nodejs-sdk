import {
  paramsToBodyString,
  CallbackBodyVar,
  paramsToSaveKeyString,
  SaveKeyVar
} from "../src";

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

test("expected body params", () => {
  expect(
    paramsToBodyString(CallbackBodyVar.Bucket, CallbackBodyVar.ClientIP)
  ).toBe("bucket=$(bucket)&ip=$(ip)");
});

test("expected save key", () => {
  expect(
    paramsToSaveKeyString(SaveKeyVar.Year, SaveKeyVar.Day, SaveKeyVar.Hour)
  ).toBe("$(year)/$(day)/$(hour)");
});
