import { JWKInterface } from "arbundles/node";

export function jsonToJWKInterface(key: Record<string, string> | string | object): JWKInterface {
  return JSON.parse(key.toString());
}