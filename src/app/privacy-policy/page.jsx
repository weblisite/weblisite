"use client";
import React from "react";

function MainComponent() {
  // Dynamic date function to get current month and year
  const getCurrentMonthYear = () => {
    const now = new Date();
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return {
      month: monthNames[now.getMonth()],
      year: now.getFullYear()
    };
  };
  
  const currentDate = getCurrentMonthYear();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F2C] via-[#1A1B4B] to-[#4A1B8C]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 md:p-12 shadow-xl">
          <h1 className="text-5xl font-bold text-[#FF9933] mb-12 font-poppins animate-glow">
            Privacy Policy
          </h1>

          <div className="space-y-12 text-white font-poppins">
            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                1. Information We Collect
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                We collect information that you provide directly to us,
                including your name, email address, and any other information
                you choose to provide.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                2. How We Use Your Information
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                We use the information we collect to provide, maintain, and
                improve our services, to communicate with you, and to comply
                with legal obligations.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                3. Information Sharing
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                We do not sell, trade, or otherwise transfer your personally
                identifiable information to outside parties except when we have
                your permission or are required by law.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                4. Data Security
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                We implement appropriate security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                5. Cookies
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                We use cookies and similar tracking technologies to track
                activity on our website and hold certain information to improve
                your experience.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                6. Changes to This Policy
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                7. Contact Us
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                If you have any questions about this Privacy Policy, please
                contact us at support@weblisite.com
              </p>
            </section>

            <div className="pt-8 text-sm text-[#B8C7FF] border-t border-white/10">
              Last updated: {currentDate.month} {currentDate.year}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes glow {
          0% { text-shadow: 0 0 10px rgba(255, 153, 51, 0.5); }
          50% { text-shadow: 0 0 20px rgba(255, 153, 51, 0.7); }
          100% { text-shadow: 0 0 10px rgba(255, 153, 51, 0.5); }
        }
        .animate-glow {
          animation: glow 3s infinite;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;