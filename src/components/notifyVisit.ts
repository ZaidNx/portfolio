// This script runs on the client and notifies the backend on first page load
export async function notifyVisit() {
  if (typeof window === 'undefined') return;
  try {
    const userAgent = navigator.userAgent;
    const visitTime = new Date().toLocaleString();
    await fetch('/api/notify-visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userAgent, visitTime }),
    });
  } catch {
    // Fail silently
  }
}
