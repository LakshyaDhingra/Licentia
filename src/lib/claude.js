export async function generateQuestions(
  homeCountry,
  destinationCountry,
  destinationState,
) {
  console.log(
    "generating for:",
    homeCountry,
    destinationCountry,
    destinationState,
  );

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": import.meta.env.VITE_CLAUDE_API_KEY,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 2000,
      messages: [
        {
          role: "user",
          content: `Generate exactly 10 driving knowledge questions as a JSON array.

Questions 1-5: driving rules ONLY in ${homeCountry}
Questions 6-10: driving rules ONLY in ${destinationState}, ${destinationCountry}

Return ONLY the JSON array, nothing else, no markdown.

Format:
[{"id":1,"question":"In ${homeCountry}, ...?","options":["A","B","C","D"],"correct":0,"category":"home"},...]

Use category "home" for questions 1-5, "destination" for questions 6-10.`,
        },
      ],
    }),
  });

  const data = await response.json();
  const text = data.content[0].text.trim();

  let questions;
  try {
    questions = JSON.parse(text);
  } catch {
    const match = text.match(/\[[\s\S]*\]/);
    if (!match) throw new Error("No JSON found");
    questions = JSON.parse(match[0]);
  }
  return questions;
}
