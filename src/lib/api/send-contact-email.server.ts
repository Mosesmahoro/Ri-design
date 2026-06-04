import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactEmailSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string(),
  service: z.string(),
  message: z.string().min(1),
});

type ContactEmailData = z.infer<typeof contactEmailSchema>;

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator(contactEmailSchema)
  .handler(async ({ data }: { data: ContactEmailData }) => {
    try {
      // Submit to FormSubmit.co service which handles email delivery
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("service", data.service);
      formData.append("message", data.message);
      formData.append("_subject", `New message from ${data.name} - ${data.service}`);
      formData.append("_captcha", "false");
      formData.append("_next", `${process.env.VITE_SITE_URL || "http://localhost:5173"}/contact?status=success`);

      const response = await fetch("https://formsubmit.co/ajax/mosesmahoro744@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        return {
          success: true,
          message: "Message sent successfully! We'll get back to you within 24 hours.",
        };
      } else {
        console.error("FormSubmit response:", response.status);
        return {
          success: false,
          message: "Failed to send message. Please try again or contact us directly.",
        };
      }
    } catch (error) {
      console.error("Email send error:", error);
      return {
        success: false,
        message: "Failed to send message. Please try again or contact us directly.",
      };
    }
  });

