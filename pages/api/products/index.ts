import methods from "micro-method-router" 
import type { NextApiRequest, NextApiResponse } from "next";

export default methods({
    async get(req: NextApiRequest, res: NextApiResponse) {
      const q = req.query.q;
      const limit = req.query.limit;
      const offset = req.query.offset;

      res.send({q, limit, offset})
  
    //   res.status(200).json({
    //     body: req.body,
    //     query: req.query,
    //     cookies: req.cookies,
    //     message: "Se envió un codigo a tu email " + email,
    //   });
    },
  });