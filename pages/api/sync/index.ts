// import methods from "micro-method-router";
import type { NextApiRequest, NextApiResponse } from "next";
import { base } from "lib/airtable";
import { ambosIndex } from "lib/algolia";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  base("Ambos")
    .select({
      pageSize: 5,
      view: "Grid view",
    })
    .eachPage(
      async function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        const objects = records.map((r) => {
          return {
            objectID: r.id,
            ...r.fields,
          };
        });

        await ambosIndex.saveObjects(objects)
        // console.log("objects", objects);

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        res.send("done");
        if (err) {
          console.error(err);
          return;
        }
      }
    );
}
