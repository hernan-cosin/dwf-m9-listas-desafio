import algoliasearch from "algoliasearch"

const client = algoliasearch("XKXU80RKHF", "daad036789b29b47924780cd72721625");
export const ambosIndex = client.initIndex("ambos");