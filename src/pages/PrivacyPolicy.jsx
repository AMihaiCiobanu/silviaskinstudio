/** @format */

import React from "react";
import SectionTitle from "../components/ui/SectionTitle";
import SEO from "../components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
      <SEO
        title="Silvia Skin Studio | Privacy Policy"
        description="Read Silvia Skin Studio's privacy policy to learn how we collect, use, and protect your personal data and cookie preferences."
      />
      <SectionTitle title="Privacy Policy" subtitle="Legal" centered={false} />
      <div className="prose prose-stone max-w-none text-charcoal/80">
        <p>Last updated: February 2026</p>
        <h3>1. Introduction</h3>
        <p>
          Silvia Skin Studio ("we", "our", or "us") respects your privacy and is
          committed to protecting your personal data. This privacy policy will
          inform you as to how we look after your personal data when you visit
          our website (regardless of where you visit it from) and tell you about
          your privacy rights and how the law protects you.
        </p>

        <h3>2. Data We Collect</h3>
        <p>
          We may collect, use, store and transfer different kinds of personal
          data about you which we have grouped together follows:
        </p>
        <ul>
          <li>Identity Data: name, username or similar identifier.</li>
          <li>Contact Data: email address and telephone numbers.</li>
          <li>
            Transaction Data: details about payments to and from you and other
            details of products and services you have purchased from us.
          </li>
          <li>
            Technical Data: includes internet protocol (IP) address, browser
            type and version, time zone setting and location, browser plug-in
            types and versions, operating system and platform.
          </li>
          <li>
            Usage Data: information about how you use our website, products and
            services.
          </li>
        </ul>

        <h3>3. Cookies and Analytics</h3>
        <p>
          Our website uses cookies to distinguish you from other users of our
          website. This helps us to provide you with a good experience when you
          browse our website and also allows us to improve our site.
        </p>
        <p>
          <strong>Google Analytics:</strong> We use Google Analytics to analyze
          the use of our website. Google Analytics gathers information about
          website use by means of cookies. The information gathered relating to
          our website is used to create reports about the use of our website.
          Google's privacy policy is available at:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            https://policies.google.com/privacy
          </a>
        </p>
        <p>
          You can choose to accept or decline cookies. Most web browsers
          automatically accept cookies, but you can usually modify your browser
          setting to decline cookies if you prefer. You can manage your cookie
          preferences through our cookie consent banner.
        </p>
        <p>
          <strong>Cookie Consent Storage:</strong> Your cookie preferences are
          stored for the following periods:
        </p>
        <ul>
          <li>
            If you <strong>accept</strong> cookies: Your choice is saved for{" "}
            <strong>365 days (1 year)</strong>
          </li>
          <li>
            If you <strong>decline</strong> cookies: Your choice is saved for{" "}
            <strong>30 days</strong>, after which you'll be asked again
          </li>
        </ul>
        <p>
          You can change your preferences at any time by clearing your browser's
          storage or waiting for the consent period to expire.
        </p>

        <h3>4. How We Use Your Data</h3>
        <p>
          We will only use your personal data when the law allows us to. Most
          commonly, we will use your personal data in the following
          circumstances:
        </p>
        <ul>
          <li>
            Where we need to perform the contract we are about to enter into or
            have entered into with you.
          </li>
          <li>
            Where it is necessary for our legitimate interests (or those of a
            third party) and your interests and fundamental rights do not
            override those interests.
          </li>
          <li>
            Where we need to comply with a legal or regulatory obligation.
          </li>
          <li>
            To improve our website and services through analytics and
            understanding user behavior.
          </li>
        </ul>

        <h3>5. Your Rights</h3>
        <p>Under data protection law, you have rights including:</p>
        <ul>
          <li>
            Your right of access - You have the right to ask us for copies of
            your personal information.
          </li>
          <li>
            Your right to rectification - You have the right to ask us to
            rectify information you think is inaccurate.
          </li>
          <li>
            Your right to erasure - You have the right to ask us to erase your
            personal information in certain circumstances.
          </li>
          <li>
            Your right to withdraw consent - When we rely on consent to process
            your personal data, you have the right to withdraw your consent at
            any time.
          </li>
        </ul>

        <h3>6. Contact Us</h3>
        <p>
          If you have any questions about this privacy policy or our privacy
          practices, please contact us at:{" "}
          <a
            href="mailto:silvia.skinstudio@gmail.com"
            className="text-gold underline"
          >
            silvia.skinstudio@gmail.com
          </a>
        </p>

        <p>
          <em>
            Note: This is a basic policy template. Please consult with a legal
            professional to ensure full GDPR compliance.
          </em>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
