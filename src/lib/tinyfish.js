export async function bookDMVTest(state, testType = "learner") {
  const goal =
    testType === "learner"
      ? `Find the official DMV website for ${state} and locate the page where someone can book or schedule a learner's permit knowledge test. Return only the direct URL to that booking page.`
      : `Find the official DMV website for ${state} and locate the page where someone can book or schedule an in-car road test or driving test. Return only the direct URL to that booking page.`;

  const response = await fetch("/api/bookdmv", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ state, goal }),
  });
  const data = await response.json();
  console.log("tinyfish response:", data);
  return data;
}
