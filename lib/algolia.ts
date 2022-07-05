import algoliasearch from "algoliasearch";

const client = algoliasearch("XKXU80RKHF", "4dc1cf6f26dd703ad16fbf48e8846275");
export const ambosIndex = client.initIndex("ambos");
