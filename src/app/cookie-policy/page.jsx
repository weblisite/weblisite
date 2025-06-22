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
            Cookie Policy
          </h1>

          <div className="space-y-12 text-white font-poppins">
            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                1. What Are Cookies
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                Cookies are small text files that are placed on your computer or
                mobile device when you visit our website. They are widely used
                to make websites work more efficiently and provide a better
                browsing experience.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                2. How We Use Cookies
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                We use cookies to understand how you interact with our website,
                remember your preferences, and improve your overall experience.
                This includes essential cookies necessary for the website to
                function and optional analytics cookies.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                3. Types of Cookies We Use
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                Essential Cookies: Required for basic website functionality
                <br />
                Analytics Cookies: Help us understand how visitors use our site
                <br />
                Preference Cookies: Remember your settings and preferences
                <br />
                Marketing Cookies: Track your activity for targeted advertising
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                4. Managing Cookies
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                You can control and manage cookies through your browser
                settings. Please note that removing or blocking cookies may
                impact your website experience and some features may not
                function properly.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                5. Third-Party Cookies
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                Some of our pages may contain content from third-party services
                (like social media or analytics) which may set their own
                cookies. We do not control these cookies and recommend reviewing
                their respective privacy policies.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                6. Cookie Consent
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                By continuing to use our website, you consent to our use of
                cookies as described in this policy. You can withdraw your
                consent at any time by adjusting your browser settings.
              </p>
            </section>

            <section className="transform transition-all duration-300 hover:translate-y-[-4px]">
              <h2 className="text-2xl font-semibold text-[#FF9933] mb-4">
                7. Updates to This Policy
              </h2>
              <p className="leading-relaxed text-[#B8C7FF]">
                We may update this Cookie Policy periodically to reflect changes
                in our practices or for operational, legal, or regulatory
                reasons. Please check back regularly for updates.
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