import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Only initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  projectType: z.string().min(1, 'Project type is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = contactSchema.parse(body);

    // If RESEND_API_KEY is not configured, return success without sending
    // This allows the form to work in development without setting up Resend
    if (!process.env.RESEND_API_KEY || !resend) {
      console.log('Contact form submission (Resend not configured):', validatedData);
      return NextResponse.json(
        { message: 'Message received (email not configured)' },
        { status: 200 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'FORME Contact <onboarding@resend.dev>', // Change this to your verified domain
      to: 'hello@forme.studio', // Change this to your email
      replyTo: validatedData.email,
      subject: `New Contact Form Submission - ${validatedData.projectType}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #0A0A0A; }
              .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
              .header { border-bottom: 1px solid #E5E5E5; padding-bottom: 20px; margin-bottom: 30px; }
              .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #6B6B6B; margin-bottom: 5px; }
              .value { font-size: 16px; margin-bottom: 20px; }
              .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #E5E5E5; font-size: 12px; color: #6B6B6B; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px; font-weight: 500;">New Contact Form Submission</h1>
              </div>
              
              <div class="label">Name</div>
              <div class="value">${validatedData.name}</div>
              
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${validatedData.email}">${validatedData.email}</a></div>
              
              <div class="label">Project Type</div>
              <div class="value">${validatedData.projectType}</div>
              
              <div class="label">Message</div>
              <div class="value">${validatedData.message.replace(/\n/g, '<br>')}</div>
              
              <div class="footer">
                Sent from FORME contact form
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { message: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid form data', errors: error.errors },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
