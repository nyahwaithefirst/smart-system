import { runQuery } from "@/lib/neo4j";

export async function GET() {
  const cypher = `
    MATCH (n)-[r]->(m)
    RETURN n, r, m
    LIMIT 50
  `;
  const result = await runQuery(cypher);

  const nodes = [];
  const links = [];

  result.records.forEach((record) => {
    const n = record.get("n");
    const m = record.get("m");
    const r = record.get("r");

    nodes.push({ id: n.identity.toInt(), label: n.labels[0], ...n.properties });
    nodes.push({ id: m.identity.toInt(), label: m.labels[0], ...m.properties });
    links.push({
      source: n.identity.toInt(),
      target: m.identity.toInt(),
      type: r.type,
    });
  });

  // remove duplicates
  const uniqueNodes = Array.from(new Map(nodes.map((n) => [n.id, n])).values());

  return Response.json({ nodes: uniqueNodes, links });
}
