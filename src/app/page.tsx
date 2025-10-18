"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Zap, ShieldCheck, Quote } from "lucide-react";

const assetMap = [
  {"id":"hero-bg","url":"https://images.pexels.com/photos/11167645/pexels-photo-11167645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Dynamic portrait with swirling neon lights creating an ethereal and futuristic vibe."},
  {"id":"about-bg","url":"https://images.pexels.com/photos/6204266/pexels-photo-6204266.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Hands poised for creativity on an empty notepad, ready to jot down ideas in a serene workspace."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="SaaS Dark"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Innovate Your Workflow"
            description="Cutting-edge solutions for modern businesses."
            imageSrc={(() => {const _a = assetMap.find(a => a.id === "hero-bg"); return _a?.url ?? "/public/images/placeholder.webp";})()}
            imagePosition="right"
            buttons={[
              { text: "Get Started", href: "features" },
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="About Us"
            description="Discover our mission and the journey behind our innovation."
            bulletPoints={[
              { title: "Efficiency", description: "Streamline processes like never before.", icon: Zap },
              { title: "Reliability", description: "Trusted by thousands globally.", icon: ShieldCheck }
            ]}
            imageSrc={(() => {const _a = assetMap.find(a => a.id === "about-bg"); return _a?.url ?? "/public/images/placeholder.webp";})()}
            imagePosition="left"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            title="Our Features"
            description="Explore the powerful tools and options available."
            features={[
              { title: "Advanced Security", description: "State-of-the-art protection for your data.", imageSrc: (() => {const _a = assetMap.find(a => a.id === "about-bg"); return _a?.url ?? "/public/images/placeholder.webp";})() },
              { title: "Seamless Integration", description: "Connect with your favorite tools effortlessly.", imageSrc: (() => {const _a = assetMap.find(a => a.id === "about-bg"); return _a?.url ?? "/public/images/placeholder.webp";})() }
            ]}
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardThree
            title="Choose Your Plan"
            description="Flexible pricing options tailored to meet your needs."
            plans={[              
              { id: "1", price: "$19/mo", name: "Starter", buttons: [], features: ["Basic Support", "100 GB Storage"] },
              { id: "2", badge: "Popular", price: "$49/mo", name: "Pro", buttons: [], features: ["Priority Support", "500 GB Storage"] },
              { id: "3", price: "$99/mo", name: "Enterprise", buttons: [], features: ["Dedicated Assistance", "Unlimited Storage"] }
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardThree
            title="What Clients Say"
            description="Hear from those who trust our service."
            testimonials={[
              { id: "1", name: "Sarah Johnson", role: "CEO, TechCorp", handle: "@sarah_tech", testimonial: "Absolutely wonderful! Exceeded all expectations.", icon: Quote },
              { id: "2", name: "Michael Chen", role: "CTO, InnovateLab", handle: "@m_chen", testimonial: "A game-changer for our organization.", icon: Quote },
              { id: "3", name: "Emily Rodriguez", role: "Marketing Director, GrowthCo", handle: "@emily_growth", testimonial: "This is the future of operations management.", icon: Quote },
              { id: "4", name: "David Kim", role: "Product Manager, StartupXYZ", handle: "@david_pm", testimonial: "Effortless integration and seamless service.", icon: Quote }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Stay Connected"
            title="Get in Touch"
            description="Join our newsletter for updates on our services and products."
            onSubmit={(email) => console.log(email)}            
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Company", items: [{ label: "About", href: "about" }, { label: "Contact", href: "contact" }] },
              { title: "Product", items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] }
            ]}
            copyrightText="© 2025 SaaS Dark"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
