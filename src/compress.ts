import { Metadata } from "./utils";
import { images } from "./images";

export async function compress(data: Buffer, metadata: Metadata): Promise<Buffer> {
  return await images[metadata.fileType](metadata.id, data);
}