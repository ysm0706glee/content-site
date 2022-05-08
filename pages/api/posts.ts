import type { NextApiRequest, NextApiResponse } from "next";

globalThis.posts = globalThis.posts ?? [];
globalThis.id = globalThis.id ?? 1;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const body: Post = req.body;
    body.id = globalThis.id;
    globalThis.id++;
    globalThis.posts.push(body);
  }

  res.json({ posts: globalThis.posts });
}
