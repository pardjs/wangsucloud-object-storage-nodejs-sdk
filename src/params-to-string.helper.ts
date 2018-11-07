import { SaveKeyVar } from "./save-key-var.enum";

export const paramsToBodyString = (...params: string[]) => {
  return params.map(param => `${param}=$(${param})`).join("&");
};

export const paramsToSaveKeyString = (...params: SaveKeyVar[]) => {
  return params.map(param => `$(${param})`).join("/");
};
