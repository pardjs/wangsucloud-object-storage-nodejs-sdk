import { base64Encode } from "./base64-encode.helper";
import { UploadPolicy } from "./upload-policy.class";
import { createHmac } from "crypto";
export const generateToken = (uploadPolicy: UploadPolicy) => {
  const accessKey = process.env.WCOS_ACCESS_KEY;
  const secretKey = process.env.WCOS_SECRET_KEY;
  const strUploadPolicy = JSON.stringify(uploadPolicy);
  console.log(strUploadPolicy);
  const base64UploadPolicy = base64Encode(strUploadPolicy);
  const sign = createHmac("sha1", secretKey as string)
    .update(base64UploadPolicy)
    .digest()
    .toString("hex");
  const encodeSign = base64Encode(sign);
  return [accessKey, encodeSign, base64UploadPolicy].join(":");
};
