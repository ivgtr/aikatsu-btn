import { VercelApiHandler } from "@vercel/node";
import * as fs from "fs";
import * as path from "path";
import { Kakugen } from "../../../types/kakugen";

const CACHE_MAX_AGE = 60 * 60 * 24 * 31;

const handler: VercelApiHandler = async (req, res) => {
  try {
    const number = req.query.number;
    if (Array.isArray(number)) throw new Error("must not be array");

    const jsonPath = path.join(process.cwd(), "src", "assets", "kakugen.json");
    const jsonText = fs.readFileSync(jsonPath, "utf-8");
    const kakugen = JSON.parse(jsonText) as Kakugen[];

    const filterKakugen = kakugen.filter((item) => String(item.season) === number);

    res.status(200);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", `public, max-age=${CACHE_MAX_AGE}`);
    res.end(JSON.stringify(filterKakugen));
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
    res.status(500);
    res.end();
  }
};

export default handler;
