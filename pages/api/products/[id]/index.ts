import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const product = await prisma.product.findMany({
        where: {
          id: req?.query?.id?.toString(),
        },
        include: {
          image: true,
        },
      });
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
