import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, name, phone, message, tripType, pickup, drop, date, time, vehicle } = body;

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;

    let emailSubject = '';
    let emailHtml = '';

    if (type === 'booking') {
      emailSubject = `New Cab Booking Request - Esplanade Cabs`;
      emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #F59E0B; text-align: center; border-bottom: 2px solid #F59E0B; padding-bottom: 10px;">New Ride Booking</h2>
          <p>Here are the booking details from the website:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f0f0f0; width: 40%;">Customer Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Phone Number:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Trip Type:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; text-transform: capitalize;">${tripType}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Pickup Location:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${pickup}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Drop/Destination Location:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${drop || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Travel Date:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${date}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Pickup Time:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${time}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Vehicle Class:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${vehicle}</td>
            </tr>
          </table>
          <p style="margin-top: 25px; font-size: 12px; color: #777; text-align: center;">Submitted via Esplanade Cabs Website</p>
        </div>
      `;
    } else {
      // General Inquiry
      emailSubject = `New Contact Inquiry - Esplanade Cabs`;
      emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #14B8A6; text-align: center; border-bottom: 2px solid #14B8A6; padding-bottom: 10px;">New General Inquiry</h2>
          <p>Here are the inquiry details from the contact page:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f0f0f0; width: 30%;">Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Phone Number:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Message:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 25px; font-size: 12px; color: #777; text-align: center;">Submitted via Esplanade Cabs Website</p>
        </div>
      `;
    }

    console.log(`[Email Payload] Subject: "${emailSubject}"`);
    console.log(`[Email Payload] Content:\n`, emailHtml.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim());

    if (!gmailUser || !gmailPass) {
      console.warn("WARNING: GMAIL_USER or GMAIL_PASS environment variables are not set. Simulating email send successfully.");
      return NextResponse.json({ 
        success: true, 
        simulated: true, 
        message: "Email details logged in server console. To enable actual dispatch, please set GMAIL_USER and GMAIL_PASS in your environment." 
      });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: `"Esplanade Cabs Website" <${gmailUser}>`,
      to: gmailUser, // Send booking/inquiry email to the user's Gmail address itself
      subject: emailSubject,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
