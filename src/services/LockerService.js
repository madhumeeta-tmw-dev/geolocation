const API_URL = process.env.REACT_APP_API_URL; // should be set to https://3k3uvssd8i.execute-api.ap-south-1.amazonaws.com/dev
const API_KEY = process.env.REACT_APP_API_KEY;

export async function openLocker(lockerId) {
  // Convert lockerId to string explicitly
  const lockerIdStr = String(lockerId);

  console.log("🧾 lockerId:", lockerIdStr, "| Type:", typeof lockerIdStr);
  console.log("📦 Sending API request to:", `${API_URL}/open-locker`);

  const response = await fetch(`${API_URL}/open-locker`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
    body: JSON.stringify({ locker_id: lockerIdStr }),  // sending lockerId as string inside JSON body
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
