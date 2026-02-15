import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const Terms = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
      <SectionTitle title="Terms & Conditions" subtitle="Legal" centered={false} />
      <div className="prose prose-stone max-w-none text-charcoal/80">
        <p>Last updated: February 2026</p>
        <h3>1. Agreement to Terms</h3>
        <p>These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Silvia Skin Studio (“we,” “us” or “our”), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).</p>
        
        <h3>2. Services</h3>
        <p>We provide skin treatments and massage therapy services. Appointments are subject to availability and our cancellation policy.</p>

        <h3>3. Cancellation Policy</h3>
        <p>We require at least 24 hours notice for cancellations. Cancellations made within 24 hours of the scheduled appointment time may incur a charge of 50% of the service fee.</p>

        <h3>4. Gift Certificates</h3>
        <p>Gift certificates are valid for 12 months from the date of purchase and are non-refundable.</p>

        <p><em>Note: This is a placeholder document. Please consult with a legal professional.</em></p>
      </div>
    </div>
  );
};

export default Terms;
