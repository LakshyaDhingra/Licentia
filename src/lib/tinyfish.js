export async function bookDMVTest(state) {
  const response = await fetch("/api/bookdmv", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ state }),
  });
  const data = await response.json();
  console.log("tinyfish response:", data);
  return data;
}
