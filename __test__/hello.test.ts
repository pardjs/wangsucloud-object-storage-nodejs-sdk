import {
  paramsToBodyString,
  CallbackBodyVar,
  paramsToSaveKeyString,
  SaveKeyVar,
  UploadPolicy,
  base64Decode,
  ReturnBodyVar
} from "../src";

import { config } from "dotenv";
import { generateToken } from "../src/generate-token.helper";
config();

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

test("generate valid token", () => {
  const uploadPolicy = new UploadPolicy(
    process.env.WCOS_BUCKET_NAME as string,
    Date.now() + 60 * 60 * 1000,
    Date.now().toString() + "_upload_file_test.mp4",
    undefined,
    0,
    0,
    undefined,
    paramsToBodyString(ReturnBodyVar.FileKey)
  );
  const token = generateToken(uploadPolicy);
  console.log(token);
  expect(token).not.toBeNull();
});

test("decode return body hash", () => {
  const decodedBody = base64Decode(
    "a2V5PTE1NDE2NjA0MTQwMTFfdXBsb2FkX2ZpbGVfdGVzdC5tcDQmaGFzaD1sanNGVF9JblRhU2ktZ2hDYWdyNVZhUy1ycHNB"
  );
  expect(decodedBody).toBe(
    "key=1541660414011_upload_file_test.mp4&hash=ljsFT_InTaSi-ghCagr5VaS-rpsA"
  );
});
