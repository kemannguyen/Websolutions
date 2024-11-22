import emailjs from "@emailjs/browser";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false, // Disable body parsing for FormData
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Form parsing error:", err);
      return res.status(500).json({ message: "Error parsing form data" });
    }

    try {
      const result = await emailjs.sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        fields,
        process.env.PUBLIC_KEY
      );

      return res
        .status(200)
        .json({ message: "Email sent successfully!", result });
    } catch (error) {
      console.error("EmailJS Error:", error);
      return res.status(500).json({ message: "Failed to send email", error });
    }
  });
}
