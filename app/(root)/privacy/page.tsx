import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="bg-white border border-slate-200 p-8 md:p-12">
          <section className="privacy-policy">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 2026
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Heart Filled Toastmasters ("we," "our," or "us") operates{" "}
              <strong>heartfilledtoastmasters.com</strong>, an independent website for the
              Heart Filled Toastmasters club. While our club is affiliated with Toastmasters
              International, this website is operated independently and is not owned or
              controlled by Toastmasters International.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              We respect your privacy and are committed to protecting personal information
              collected through our website.
            </p>

            {/* Table of Contents */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                <a href="#information-we-collect" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  1. Information We Collect
                </a>
                <a href="#how-we-use" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  2. How We Use Your Information
                </a>
                <a href="#legal-basis" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  3. Legal Basis for Processing
                </a>
                <a href="#third-party" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  4. Third-Party Service Providers
                </a>
                <a href="#cookies" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  5. Cookies and Analytics
                </a>
                <a href="#data-retention" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  6. Data Retention
                </a>
                <a href="#international" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  7. International Users
                </a>
                <a href="#your-rights" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  8. Your Rights
                </a>
                <a href="#data-security" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  9. Data Security
                </a>
                <a href="#children" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  10. Children's Privacy
                </a>
                <a href="#changes" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  11. Changes to This Policy
                </a>
                <a href="#contact" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  12. Contact Us
                </a>
              </nav>
            </div>

            <h2 id="information-we-collect" className="text-2xl font-semibold text-gray-900 mb-4 mt-8 scroll-mt-20">
              1. Information We Collect
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              We collect personal information that you voluntarily provide when you contact us through our website, including:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Message content</li>
            </ul>

            <p className="text-gray-700 mb-4 leading-relaxed">
              We also collect limited technical information automatically when a form is submitted:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
              <li>IP address</li>
              <li>User agent (browser and device information)</li>
            </ul>

            <p className="text-gray-700 mb-8 leading-relaxed">
              This technical information is used to help prevent spam, detect duplicate submissions,
              and maintain website security.
            </p>

            <h2 id="how-we-use" className="text-2xl font-semibold text-gray-900 mb-4 mt-8 scroll-mt-20">
              2. How We Use Your Information
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">We use the information we collect to:</p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
              <li>Respond to inquiries and messages</li>
              <li>Communicate with prospective and current club members</li>
              <li>Manage and review contact form submissions</li>
              <li>Prevent spam, abuse, and fraudulent activity</li>
              <li>Maintain the security and functionality of our website</li>
            </ul>

            <p className="text-gray-700 mb-8 leading-relaxed">
              We do <strong>not</strong> use personal information for marketing, advertising,
              or promotional purposes.
            </p>

            <h2 id="legal-basis" className="text-2xl font-semibold text-gray-900 mb-4 mt-8 scroll-mt-20">
              3. Legal Basis for Processing
            </h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
              We process personal information based on our legitimate interests in operating
              and securing our website and responding to inquiries. Where required by law,
              we rely on your consent when you voluntarily submit information through our
              contact forms.
            </p>

            <h2 id="third-party" className="text-2xl font-semibold text-gray-900 mb-4 mt-8 scroll-mt-20">
              4. Third-Party Service Providers
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              We use trusted third-party service providers to support the operation of our
              website and communications. These providers may process limited personal
              information on our behalf for purposes such as:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
              <li>Website hosting and deployment</li>
              <li>Email delivery and communication</li>
              <li>Website security and performance</li>
              <li>Data storage and form submission management</li>
              <li>Displaying map or location information</li>
            </ul>

            <p className="text-gray-700 mb-4 leading-relaxed">
              These service providers are authorized to process personal information only as
              necessary to perform services on our behalf and are contractually required to
              protect it and use it solely for authorized purposes.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              A current list of service providers is available upon request.
            </p>

            <h2 id="cookies" className="text-2xl font-semibold text-gray-900 mb-4 mt-8 scroll-mt-20">
              5. Cookies and Analytics
            </h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
              We do <strong>not</strong> use cookies, tracking technologies, or analytics tools
              on this website.
            </p>

            <h2 id="data-retention" className="text-2xl font-semibold text-gray-900 mb-4 mt-8 scroll-mt-20">
              6. Data Retention
            </h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
              We retain personal information only for as long as necessary to respond to
              inquiries, manage club communications, and fulfill security or administrative
              purposes. Technical data such as IP addresses and user agent information is
              retained for a limited period and is not used for profiling.
            </p>

            <h2 id="international" className="text-2xl font-semibold text-gray-900 mb-4 mt-8 scroll-mt-20">
              7. International Users
            </h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Our website is accessible worldwide. While Heart Filled Toastmasters primarily
              meets in person in the United States, visitors may access our website from other
              countries. Personal information may be processed and stored in the United States
              or other locations where our service providers operate.
            </p>

            <h2 id="your-rights" className="text-2xl font-semibold text-gray-900 mb-4 mt-8 scroll-mt-20">
              8. Your Rights
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Depending on your location, you may have the right to:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction or deletion of your personal information</li>
              <li>Object to or request restriction of certain processing activities</li>
            </ul>

            <p className="text-gray-700 mb-8 leading-relaxed">
              To exercise your rights, please contact us using the information below.
            </p>

            <h2 id="data-security" className="text-2xl font-semibold text-gray-900 mb-4 mt-8 scroll-mt-20">
              9. Data Security
            </h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
              We implement reasonable administrative and technical measures to protect personal
              information from unauthorized access, disclosure, alteration, or misuse.
              However, no method of transmission over the internet is completely secure.
            </p>

            <h2 id="children" className="text-2xl font-semibold text-gray-900 mb-4 mt-8 scroll-mt-20">
              10. Children's Privacy
            </h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
              This website is not intended for children under the age of 13, and we do not
              knowingly collect personal information from children.
            </p>

            <h2 id="changes" className="text-2xl font-semibold text-gray-900 mb-4 mt-8 scroll-mt-20">
              11. Changes to This Policy
            </h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted
              on this page with an updated effective date.
            </p>

            <h2 id="contact" className="text-2xl font-semibold text-gray-900 mb-4 mt-8 scroll-mt-20">
              12. Contact Us
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have questions about this Privacy Policy or our data practices, please
              contact us at:
            </p>

            <p className="text-gray-700 mb-8">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:heartfilledtoastmaster@gmail.com"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                heartfilledtoastmaster@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
