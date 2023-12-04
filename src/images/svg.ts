import fs from "fs";
import imagemin from "imagemin";
import imageminSvgo from "imagemin-svgo";

export default async function svg(id: string, data: Buffer): Promise<Buffer> {
  const path = `/tmp/${id}.svg`;
  await fs.writeFile(`/tmp/${id}.svg`, data, (err) => { if (err) throw Error(); });
  await imagemin([path], {
    destination: path,
    plugins: [
      imageminSvgo()
    ]
  });
  const compressed = await fs.readFileSync(path);
  return compressed;
}