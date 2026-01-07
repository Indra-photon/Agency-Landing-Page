import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Contact from '@/app/api/models/Contact';

export async function POST(request: Request) {
    try {
        await dbConnect();

        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { success: false, error: 'All fields are required' },
                { status: 400 }
            );
        }

        const newContact = await Contact.create({
            name,
            email,
            subject,
            message,
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Message sent successfully!',
                data: newContact
            },
            { status: 201 }
        );

    } catch (error: any) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            {
                success: false,
                error: error.message || 'Internal Server Error'
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await dbConnect();
        const contacts = await Contact.find({}).sort({ createdAt: -1 });

        return NextResponse.json({
            success: true,
            contacts
        });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

