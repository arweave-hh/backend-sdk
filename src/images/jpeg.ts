import fs from "fs";
import imagemin from "imagemin";
import imageJpegtran from "imagemin-jpegtran";

export default async function jpeg(id: string, data: Buffer): Promise<Buffer> {
  const path = `/tmp/${id}.jpg`;
  await fs.writeFile(`/tmp/${id}.jpg`, data, (err) => { if (err) throw Error(); });
  await imagemin([path], {
    destination: path,
    plugins: [
      imageJpegtran()
    ]
  });
  const compressed = await fs.readFileSync(path);
  return compressed;
}