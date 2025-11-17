const riskLevels = ["Critical", "High", "Medium"];
const sources = ["Reuters", "BBC", "Bloomberg", "The Guardian", "Al Jazeera"];
const countries = ["US", "UK", "UAE", "Singapore", "South Africa"];

// Generate dummy alerts (scalable to 1,000+)
export const generateDummyAlerts = (count = 10) =>
  Array.from({ length: count }, (_, i) => {
    const risk = riskLevels[Math.floor(Math.random() * riskLevels.length)];
    const source = sources[Math.floor(Math.random() * sources.length)];
    const country = countries[Math.floor(Math.random() * countries.length)];
    return {
      id: i + 1,
      entity: `Entity ${i + 1}`,
      riskType: risk,
      summary: `Alert ${
        i + 1
      }: Investigation reported regarding ${risk.toLowerCase()} activities.`,
      source,
      date: new Date(
        2025,
        Math.floor(Math.random() * 11),
        Math.floor(Math.random() * 28) + 1
      ).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      country,
      risk,
    };
  });
