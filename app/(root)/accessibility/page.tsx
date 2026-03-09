const AccessibilityPage = () => {
  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="bg-white border border-slate-200 p-8 md:p-12">
          <section className="accessibility-statement">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Accessibility Statement</h1>

            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> March 2026
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Heart Filled Toastmasters is committed to making our website accessible and
              usable for everyone. We aim to provide an inclusive experience regardless of
              ability or technology.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                <a href="#our-commitment" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  1. Our Commitment
                </a>
                <a href="#accessibility-features" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  2. Accessibility Features
                </a>
                <a href="#ongoing-improvements" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  3. Ongoing Improvements
                </a>
                <a href="#third-party-content" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  4. Third-Party Content
                </a>
                <a href="#feedback" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  5. Feedback and Assistance
                </a>
              </nav>
            </div>

            <h2 id="our-commitment" className="text-2xl font-semibold text-gray-900 mb-4 mt-8 scroll-mt-20">
              1. Our Commitment
            </h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
              We are working to align our website with recognized accessibility best
              practices, including clear content structure, keyboard-friendly interaction,
              and meaningful text alternatives where appropriate.
            </p>

            <h2 id="accessibility-features" className="text-2xl font-semibold text-gray-900 mb-4 mt-8 scroll-mt-20">
              2. Accessibility Features
            </h2>

            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2 ml-4">
              <li>Responsive layouts for different screen sizes and zoom levels</li>
              <li>Readable text with consistent heading hierarchy</li>
              <li>Keyboard-focusable navigation and controls</li>
              <li>Alternative text support for informative images</li>
            </ul>

            <h2 id="ongoing-improvements" className="text-2xl font-semibold text-gray-900 mb-4 mt-8 scroll-mt-20">
              3. Ongoing Improvements
            </h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Accessibility is an ongoing effort. We regularly review content and design
              updates to improve usability and reduce barriers for all visitors.
            </p>

            <h2 id="third-party-content" className="text-2xl font-semibold text-gray-900 mb-4 mt-8 scroll-mt-20">
              4. Third-Party Content
            </h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Some pages may include third-party tools or embedded content. While we aim
              to choose accessible services, we cannot guarantee full accessibility for
              third-party elements not controlled by our team.
            </p>

            <h2 id="feedback" className="text-2xl font-semibold text-gray-900 mb-4 mt-8 scroll-mt-20">
              5. Feedback and Assistance
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              If you experience an accessibility barrier, have trouble accessing content,
              or need help completing an action on this website, please email us directly.
              We take accessibility feedback seriously and review each request with care.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              To help us resolve your issue as quickly as possible, please include as much
              detail as you can in your email, such as:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
              <li>The page URL where the issue happened</li>
              <li>A brief description of what you were trying to do</li>
              <li>The accessibility barrier you encountered</li>
              <li>Your device, browser, and operating system (if known)</li>
              <li>Any assistive technology you were using (for example, a screen reader)</li>
              <li>Optional screenshots or screen recordings that show the issue</li>
            </ul>

            <p className="text-gray-700 mb-4 leading-relaxed">
              You can also tell us what support you need from our team (for example,
              help obtaining specific information or completing a form). We will make a
              reasonable effort to provide an accessible alternative and help you move
              forward without unnecessary delay.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              We review accessibility-related emails as promptly as possible and will
              follow up with updates while we investigate and address the issue.
              Resolution time can vary depending on the complexity of the request,
              but we will make reasonable efforts to keep you informed throughout the
              process.
            </p>

            <p className="text-gray-700 mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:heartfilledtoastmasters@gmail.com"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                heartfilledtoastmasters@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityPage;
