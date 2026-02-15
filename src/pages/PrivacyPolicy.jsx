import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
      <SectionTitle title="Privacy Policy" subtitle="Legal" centered={false} />
      <div className="prose prose-stone max-w-none text-charcoal/80">
        <p>Last updated: February 2026</p>
        <h3>1. Introduction</h3>
        <p>Silvia Skin Studio ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
        
        <h3>2. Data We Collect</h3>
        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
        <ul>
            <li>Identity Data: name, username or similar identifier.</li>
            <li>Contact Data: email address and telephone numbers.</li>
            <li>Transaction Data: details about payments to and from you and other details of products and services you have purchased from us.</li>
        </ul>

        <h3>3. How We Use Your Data</h3>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
        </ul>
        
        <p><em>Note: This is a placeholder policy. Please consult with a legal professional to ensure full GDPR compliance.</em></p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
