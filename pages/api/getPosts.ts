import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await prisma.post.findMany();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}
