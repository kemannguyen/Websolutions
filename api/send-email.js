import emailjs from "@emailjs/nodejs"; // Server-side EmailJS package for Node.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const data = req.body;

  try {
    const response = await emailjs.sendForm(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      data,
      process.env.API_PUBLIC
    );

    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ error: "Failed to send email", details: error });
  }
}
