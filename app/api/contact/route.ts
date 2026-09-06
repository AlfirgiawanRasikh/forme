import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().trim().email('Invalid email address').max(254, 'Email is too long'),
  projectType: z.enum([
    'Brand Identity',
    'Digital Experience',
    'Creative Development',
    'Other',
  ]),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be 5000 characters or fewer'),
  website: z.string().trim().max(200).optional().default(''),
});

const contactEnvironmentSchema = z.object({
  RESEND_API_KEY: z.string().trim().min(1),
  CONTACT_TO_EMAIL: z.string().trim().email(),
});

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&#039;';
      default:
        return character;
    }
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const validatedData = contactSchema.parse(body);

    if (validatedData.website) {
      return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
    }

    const contactEnvironment = contactEnvironmentSchema.safeParse({
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
    });

    if (!contactEnvironment.success) {
      return NextResponse.json(
        { message: 'The contact form is temporarily unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    const resend = new Resend(contactEnvironment.data.RESEND_API_KEY);
    const safeName = escapeHtml(validatedData.name);
    const safeEmail = escapeHtml(validatedData.email);
    const safeProjectType = escapeHtml(validatedData.projectType);
    const safeMessage = escapeHtml(validatedData.message).replace(/\n/g, '<br>');

    const { error } = await resend.emails.send({
      from: 'FORME Contact <onboarding@resend.dev>',
      to: contactEnvironment.data.CONTACT_TO_EMAIL,
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
              <div class="value">${safeName}</div>
              
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
              
              <div class="label">Project Type</div>
              <div class="value">${safeProjectType}</div>
              
              <div class="label">Message</div>
              <div class="value">${safeMessage}</div>
              
              <div class="footer">
                Sent from FORME contact form
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Contact form delivery failed.');
      return NextResponse.json(
        { message: 'Unable to send your message. Please try again later.' },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid form data', errors: error.errors },
        { status: 400 }
      );
    }

    console.error('Contact form request failed.');
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
