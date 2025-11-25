import JSON5 from "json5";

export function repairAndParse(raw) {
    let s = raw.trim();

    // Remove outer wrapping quotes if present
    if (s.startsWith('"') && s.endsWith('"')) {
        s = s.slice(1, -1);
    }

    // Replace curly quotes
    s = s.replace(/[“”]/g, '"');

    // Fix double quotes at end of URLs
    s = s.replace(/"(https?:\/\/[^"]+)"+"/g, '"$1"');

    // Fix URLs missing quotes
    s = s.replace(/https?:\/\/[^\s,}]+/g, m => `"${m}"`);

    // Fix unquoted dates → wrap YYYY-MM-DD in quotes
    s = s.replace(/:\s*(\d{4}-\d{2}-\d{2})/g, ':"$1"');

    // Fix trailing commas inside strings
    s = s.replace(/",\s*([a-zA-Z])/g, '", $1');

    // Fix unclosed string before comma or }
    s = s.replace(/:"([^"]+)(?=[},])/g, '"$1"');

    // Fix: summary":"Tendai Biti", a prominent...
    s = s.replace(/",\s*([^"])/g, '", "$1');

    // Ensure keys are quoted (JSON5 handles unquoted keys, but we normalize)
    s = s.replace(/(\w+)\s*:/g, '"$1":');

    console.log("json tried fix -> ", s);

    try {
        const parsed = JSON5.parse(s); // JSON5 can parse relaxed JSON
        return parsed;
    } catch (e) {
        console.error("Failed repaired string:\n", s);
        throw new Error("Still malformed — send again and I will auto-repair.");
    }
}
