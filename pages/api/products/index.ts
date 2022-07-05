import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";
import { getOffsetAndLimitFromReq } from "lib/requests";
import { ambosIndex } from "lib/algolia";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    const { limit, offset } = getOffsetAndLimitFromReq(req, 100, 100);
    const q = req.query.q;

    const results = await ambosIndex.search(q as string, {
      offset: offset,
      length: limit,
    });

    res.send({
      results: results.hits,
      pagination: {
        offset: offset,
        limit: limit,
        total: results.nbHits,
      },
    });
  },
});
