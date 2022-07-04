import methods from "micro-method-router";
import type { NextApiRequest, NextApiResponse } from "next";
import {getOffsetAndLimitFromReq} from "lib/requests"
import { base } from "airtable";

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { limit, offset } = getOffsetAndLimitFromReq(req, 100, 10000);
  res.send({ limit, offset });
}
