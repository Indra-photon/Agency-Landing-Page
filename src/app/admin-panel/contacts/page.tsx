"use client";

import React, { useEffect, useState } from 'react';
import { Mail, Trash2, Calendar, User, MessageCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface Contact {
    _id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string;
}

export default function ContactsAdminPage() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchContacts = async () => {
        try {
            const response = await fetch('/api/contact');
            const data = await response.json();
            if (data.success) {
                setContacts(data.contacts);
            } else {
                toast.error(data.error || 'Failed to fetch contacts');
            }
        } catch (error) {
            console.error('Error fetching contacts:', error);
            toast.error('An error occurred while fetching contacts');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this contact message?')) return;

        try {
            const response = await fetch(`/api/contact/${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();

            if (data.success) {
                toast.success('Contact message deleted');
                setContacts(contacts.filter(contact => contact._id !== id));
            } else {
                toast.error(data.error || 'Failed to delete contact');
            }
        } catch (error) {
            console.error('Error deleting contact:', error);
            toast.error('An error occurred while deleting');
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Contact Inquiries</h1>
                    <p className="text-muted-foreground mt-1">Manage and respond to messages from your website visitors.</p>
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 flex items-center gap-2">
                    <MessageCircle size={16} />
                    <span>{contacts.length} Total Messages</span>
                </div>
            </div>

            {contacts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 bg-card rounded-3xl border border-dashed border-border shadow-sm">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                        <Mail className="text-muted-foreground" size={32} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">No messages found</h3>
                    <p className="text-muted-foreground">When visitors contact you, their messages will appear here.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    {contacts.map((contact) => (
                        <div
                            key={contact._id}
                            className="group bg-card hover:bg-accent/30 border border-border rounded-3xl p-6 transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <User size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-foreground leading-tight">{contact.name}</h3>
                                            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                                <Mail size={14} />
                                                {contact.email}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleDelete(contact._id)}
                                        className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl transition-all"
                                        title="Delete message"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>

                                <div className="bg-background/50 rounded-2xl p-5 mb-6 flex-1 border border-border/50">
                                    <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <MessageCircle size={14} />
                                        Subject: {contact.subject}
                                    </p>
                                    <p className="text-foreground leading-relaxed whitespace-pre-wrap italic">
                                        &quot;{contact.message}&quot;
                                    </p>
                                </div>

                                <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} />
                                        <span>{new Date(contact.createdAt).toLocaleDateString(undefined, {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-primary">
                                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                        <span>New Inquiry</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
