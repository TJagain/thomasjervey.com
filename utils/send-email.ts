import type { ContactFormData } from "@/types/contact";

export async function sendEmail(data: ContactFormData) {
  const response = await fetch("/api/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error ?? "Unable to send message");
  }

  return result;
}
