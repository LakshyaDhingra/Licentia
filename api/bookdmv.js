export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  const { goal, state } = req.body;

  const response = await fetch("https://agent.tinyfish.ai/v1/agent/stream", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TINYFISH_KEY}`,
    },
    body: JSON.stringify({
      url: `https://www.google.com/search?q=${encodeURIComponent(state + " DMV official website")}`,
      goal: goal,
    }),
  });

  const text = await response.text();
  const lines = text.split("\n");

  let result = null;
  for (const line of lines) {
    if (line.startsWith("data: ")) {
      try {
        const data = JSON.parse(line.slice(6));
        if (data.type === "COMPLETE") {
          result = data.result;
          break;
        }
      } catch (e) {}
    }
  }

  return res.status(200).json({
    url:
      result ||
      `https://www.google.com/search?q=${encodeURIComponent(state + " DMV knowledge test booking")}`,
  });
}
