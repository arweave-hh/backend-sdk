import fs from "fs";
import imagemin from "imagemin";
import imageminPngquant from "imagemin-pngquant";

export default async function png(id: string, data: Buffer): Promise<Buffer> {
  const path = `/tmp/${id}.png`;
  await fs.writeFile(`/tmp/${id}.png`, data, (err) => { if (err) throw Error(); });
  await imagemin([path], {
    destination: path,
    plugins: [
      imageminPngquant()
    ]
  });
  const compressed = await fs.readFileSync(path);
  return compressed;
}