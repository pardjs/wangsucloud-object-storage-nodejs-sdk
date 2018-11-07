export const base64Encode = (raw: string) => {
  return Buffer.from(raw).toString("base64");
};

export const base64Decode = (encoded: string) => {
  return Buffer.from(encoded, "base64").toString("ascii");
};
