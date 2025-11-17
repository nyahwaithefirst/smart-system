import neo4j from "neo4j-driver";

const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("neo4j", "12345678"),
  { encrypted: false, trust: "TRUST_ALL_CERTIFICATES" }
);

export async function runQuery(cypher, params = {}) {
  const session = driver.session();
  try {
    const results = await session.run(cypher, params);
    return results;
  } finally {
    await session.close();
  }
}
