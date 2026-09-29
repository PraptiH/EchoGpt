import { appendFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";

export interface WaitlistEntry {
  email: string;
  createdAt: string;
}

const LOCAL_STORE = path.join(process.cwd(), ".data", "waitlist.jsonl");

async function saveToWebhook(url: string, entry: WaitlistEntry) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...entry, source: "landing-page" }),
    signal: AbortSignal.timeout(8000),
  });

  if (!response.ok) {
    throw new Error(`Waitlist webhook responded with ${response.status}`);
  }
}

async function saveToLocalFile(entry: WaitlistEntry) {
  await mkdir(path.dirname(LOCAL_STORE), { recursive: true });

  const existing = await readFile(LOCAL_STORE, "utf8").catch(() => "");
  if (!existing.includes(`"email":${JSON.stringify(entry.email)}`)) {
    await appendFile(LOCAL_STORE, `${JSON.stringify(entry)}\n`, "utf8");
  }
}

export async function saveWaitlistEntry(email: string) {
  const entry: WaitlistEntry = { email, createdAt: new Date().toISOString() };
  const webhook = process.env.WAITLIST_WEBHOOK_URL;

  if (webhook) {
    await saveToWebhook(webhook, entry);
  } else {
    await saveToLocalFile(entry);
  }
}
