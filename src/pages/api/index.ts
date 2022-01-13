import { VercelApiHandler } from "@vercel/node";
import * as fs from "fs";
import * as path from "path";

const CACHE_MAX_AGE = 60 * 60 * 24 * 31;

const handler: VercelApiHandler = async (_, res) => {
  try {
    const jsonPath = path.join(process.cwd(), "src", "assets", "kakugen.json");
    const kakugen = fs.readFileSync(jsonPath, "utf-8");

    res.status(200);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", `public, max-age=${CACHE_MAX_AGE}`);
    res.end(kakugen);
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
    res.status(500);
    res.end();
  }
};

export default handler;
