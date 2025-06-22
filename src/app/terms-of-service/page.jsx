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
            Terms of Service
          </h1>

          <div className="space-y-12 text-white font-poppins">
            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                By accessing and using this website, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                2. User Account Responsibilities
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                You are responsible for maintaining the confidentiality of your
                account and password. You agree to accept responsibility for all
                activities that occur under your account.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                3. Intellectual Property Rights
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                All content included on this website, such as text, graphics,
                logos, images, and software, is the property of our company or
                its content suppliers and protected by international copyright
                laws.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                4. Prohibited Activities
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                You may not use our service for any illegal or unauthorized
                purpose. You must not transmit any worms, viruses, or any code
                of a destructive nature.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                5. Service Modifications
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                We reserve the right to modify or discontinue, temporarily or
                permanently, the service with or without notice at any time.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                6. Limitation of Liability
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                We shall not be liable for any indirect, incidental, special,
                consequential or punitive damages resulting from your use of or
                inability to use the service.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                7. Governing Law
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                These terms shall be governed by and construed in accordance
                with the laws of the jurisdiction in which we operate.
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