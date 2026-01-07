import React from 'react';
import { Metadata } from 'next';
import NavbarDemo from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { ContactForm } from './ContactForm';
import {
    IconMail,
    IconMapPin,
    IconPhone,
    IconBrandTwitter,
    IconBrandGithub,
    IconBrandLinkedin,
    IconMessageCircle
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: 'Contact Us | DesignLab',
    description: 'Get in touch with DesignLab. We would love to hear from you and discuss how we can help with your next project.',
    keywords: ['contact designlab', 'design agency contact', 'web development inquiry', 'project consultation'],
};

export default function ContactPage() {
    return (
        <div className="bg-background min-h-screen font-sans overflow-x-hidden">
            <NavbarDemo />
            <ThemeSwitcher />

            <main className="relative pt-32 pb-20">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    {/* Header Section */}
                    <div className="flex flex-col items-center mb-16 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                            <IconMessageCircle size={16} />
                            <span>Get in touch</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight">
                            Let&apos;s build something <br />
                            <span className="text-primary italic">extraordinary</span>
                        </h1>
                        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl leading-relaxed">
                            Have a project in mind? We&apos;d love to hear about it. Fill out the form below or reach out via our social channels.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Contact Info - Left Column */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-3xl p-8 shadow-xl">
                                <h2 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0 transition-transform hover:scale-110">
                                            <IconMail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Email us</p>
                                            <a href="mailto:hello@designlab.com" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                                                hello@designlab.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0 transition-transform hover:scale-110">
                                            <IconPhone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Call us</p>
                                            <a href="tel:+1234567890" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                                                +1 (234) 567-890
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0 transition-transform hover:scale-110">
                                            <IconMapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Visit us</p>
                                            <p className="text-lg font-semibold text-foreground">
                                                123 Design Street, <br />
                                                Creative Valley, CA 90210
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-border/50">
                                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Follow us</p>
                                    <div className="flex gap-4">
                                        <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                                            <IconBrandTwitter size={20} />
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                                            <IconBrandGithub size={20} />
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                                            <IconBrandLinkedin size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form - Right Column */}
                        <div className="lg:col-span-8">
                            <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                                {/* Form Inner Glow */}
                                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -z-10" />

                                <h2 className="text-3xl font-bold mb-8 text-foreground">Send a Message</h2>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
