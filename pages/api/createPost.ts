import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../prisma/client";

type postProps = {
  title: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post: postProps = JSON.parse(req.body);
    if (req.method === "POST") {
      if (!post.title.length) {
        res.status(500).json({ message: "plase do not leave this empty" });
      }
      try {
        const data = await prisma.post.create({
          data: {
            title: post.title,
          },
        });
        res.status(200).json(data);
      } catch (error) {
        return res.status(500).json({ message: "error creating a new post" });
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}
