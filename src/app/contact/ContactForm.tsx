"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NavbarButton } from "@/components/ui/resizable-navbar";
import { IconSend, IconLoader2, IconCheck } from "@tabler/icons-react";
import { toast } from "sonner";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Message sent successfully!");
                setIsSubmitted(true);
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                toast.error(data.error || "Failed to send message.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
            >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <IconCheck size={40} />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground">
                    Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                </p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-primary hover:underline"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name
                    </label>
                    <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-background/50 backdrop-blur-sm border-muted-foreground/20 focus:border-primary transition-all py-6"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address
                    </label>
                    <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-background/50 backdrop-blur-sm border-muted-foreground/20 focus:border-primary transition-all py-6"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                </label>
                <Input
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="bg-background/50 backdrop-blur-sm border-muted-foreground/20 focus:border-primary transition-all py-6"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                </label>
                <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    className="min-h-[150px] bg-background/50 backdrop-blur-sm border-muted-foreground/20 focus:border-primary transition-all resize-none"
                />
            </div>

            <NavbarButton
                as="button"
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                className="group w-full py-4 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100"
            >
                <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                        <>
                            <IconLoader2 className="animate-spin" size={20} />
                            Sending...
                        </>
                    ) : (
                        <>
                            <IconSend size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            Send Message
                        </>
                    )}
                </span>
            </NavbarButton>
        </form>
    );
}
