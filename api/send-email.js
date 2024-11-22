import emailjs from "@emailjs/nodejs"; // Server-side EmailJS package for Node.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { from_name, from_email, message } = req.body;

  if (!from_name || !from_email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const response = await emailjs.send(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      { from_name, from_email, message },
      { publicKey: process.env.API_PUBLIC }
    );

    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ error: "Failed to send email", details: error });
  }
}
