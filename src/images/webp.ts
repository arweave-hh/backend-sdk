import fs from "fs";
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

export default async function webp(id: string, data: Buffer): Promise<Buffer> {
  const path = `/tmp/${id}.webp`;
  await fs.writeFile(`/tmp/${id}.webp`, data, (err) => { if (err) throw Error(); });
  await imagemin([path], {
    destination: path,
    plugins: [
      imageminWebp()
    ]
  });
  const compressed = await fs.readFileSync(path);
  return compressed;
}