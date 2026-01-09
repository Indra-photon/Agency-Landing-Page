import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Contact from '@/app/api/models/Contact';

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect();
        const { id } = params;

        const deletedContact = await Contact.findByIdAndDelete(id);

        if (!deletedContact) {
            return NextResponse.json(
                { success: false, error: 'Contact not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Contact deleted successfully'
        });
    } catch (error: any) {
        console.error('Delete Contact Error:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
