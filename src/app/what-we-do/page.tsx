import ImpactSection from "@/components/ImpactSection";
import NavbarDemo from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import ServiceSection from "@/components/ServiceSection";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import TimelineSection from "@/components/TimelineSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import WhatWeDoHero from "@/components/WhatWeDoHero";

export default function WhatWeDo() {
    return (
        <div className="bg-background font-sans">
            <NavbarDemo />
            <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16">
                <WhatWeDoHero />
            </div>

            {/* Mission Section */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="w-full md:w-1/2">
                        <p className="text-primary font-medium mb-2">Our Mission</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
                            Driving innovation through <span className="text-muted-foreground">purpose-led design.</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We believe that every digital product should tell a story and solve a problem. Our mission is to bridge the gap between complex technology and human-centric design, creating experiences that leave a lasting impact.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                            alt="Our Mission"
                            className="w-full h-[400px] object-cover"
                        />
                    </div>
                </div>
            </div>

            <ImpactSection />
            <ThemeSwitcher />
            <ServiceSection />

            {/* Detailed Services / Expertise */}
            <div className="bg-accent/5 py-20">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">Why Partners Choose Us</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We don't just build websites; we build business solutions that scale with your growth.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Strategic Excellence",
                                description: "We align every pixel and line of code with your business goals, ensuring maximum ROI."
                            },
                            {
                                title: "Modern Tech Stack",
                                description: "Leveraging Next.js, React, and Tailwind to build lightning-fast, future-proof applications."
                            },
                            {
                                title: "Iterative Approach",
                                description: "Agile methodology that keeps you in the loop at every stage of the development process."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-foreground">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <ProjectsSection />
            <TimelineSection />
            <Testimonials />
            <BlogSection />
            <FAQSection />
            <Footer />
        </div>
    );
}
