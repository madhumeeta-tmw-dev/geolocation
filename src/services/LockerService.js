const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

console.log("🌐 API_URL:", API_URL);
console.log("🔐 API_KEY:", API_KEY);

/**
 * Sends a request to open a specific locker.
 * @param {number} lockerId
 */
export async function openLocker(lockerId) {
  console.log("📦 Sending API request to:", `${API_URL}/openLocker/${lockerId}`);

  const response = await fetch(`${API_URL}/openLocker/${lockerId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
    body: JSON.stringify({ locker_id: lockerId }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("❌ API error response:", errorText);
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }

  const json = await response.json();
  console.log("✅ API response:", json);
  return json;
}
