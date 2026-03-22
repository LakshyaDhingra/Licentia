export async function generateQuestions(homeCountry, destinationCountry) {
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
          content: `Generate exactly 10 driving knowledge questions in JSON format.

5 questions should test knowledge of driving rules in ${homeCountry}.
5 questions should test knowledge of driving rules in ${destinationCountry}.

Return ONLY a JSON array with no extra text, no markdown, no backticks. Each question object must have:
- id (number 1-10)
- question (string)
- options (array of 4 strings)
- correct (number 0-3, index of correct answer)
- category ("home" for ${homeCountry} questions, "destination" for ${destinationCountry} questions)

Make questions specific to real driving rules in those countries. Focus on differences that would trip up an international driver.`,
        },
      ],
    }),
  });

  const data = await response.json();
  const text = data.content[0].text;
  const questions = JSON.parse(text);
  return questions;
}
