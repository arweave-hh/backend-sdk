import { compress } from "./compress";
import { irys } from "./irys";
import { Metadata } from "./utils";

export default class SDK {

  async upload(data: Buffer, metadata: Metadata): Promise<Record<string, any>> {
    const compressedData = await compress(data, metadata);
    if (!compressedData) {
      throw new Error("Failed to compress data");
    }
    const receipt = await irys.upload(data);
    return { ...receipt };
  }
}