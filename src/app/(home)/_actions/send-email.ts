"use server";

import { transporter } from "@/lib/nodemailer";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail({
  name,
  email,
  message,
}: ContactFormData) {
  try {
    const mailOptionsToMe = {
      from: process.env.SMTP_EMAIL,
      to: "yschouhan2002@gmail.com",
      subject: `Portfolio | New message from ${name} (${email})`,
      text: message,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };
    const mailOptionsToUser = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: "Thank you for contacting Yogendra.",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for reaching out!</h2>
          <p>Dear ${name},</p>
          <p>I have received your message and will get back to you as soon as possible. Thank you for your interest in my work.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h4 style="margin: 0 0 10px 0; color: #333;">Your message:</h4>
            <p style="margin: 0; color: #666;">${message}</p>
          </div>
          
          <p>Best regards,<br>
          <strong>Yogendra Singh Chouhan</strong></p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #888;">This is an automated confirmation email. Please do not reply to this email.</p>
        </div>
      `,
    };
    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptionsToMe),
      transporter.sendMail(mailOptionsToUser),
    ]);
    return { success: true };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return {
      success: false,
      error:
        process.env.NODE_ENV === "development"
          ? (error as Error).message
          : "Something went wrong. Please try again later.",
    };
  }
}
