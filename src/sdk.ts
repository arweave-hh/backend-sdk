import Bundler from "./bundler";
import Signer from "./signer";
import { jsonToJWKInterface } from "./utils";

export default class SDK {

  private signer: Signer;
  private bundler: Bundler;

  constructor(privateKey: string) {
    this.signer = new Signer({ jwk: jsonToJWKInterface(privateKey) });
    this.bundler = new Bundler();
  }

  async upload(data: Buffer): Promise<Record<string, string>> {
    const result = {};
    
    return result;
  }

}