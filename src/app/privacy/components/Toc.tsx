import React from 'react'

const Toc = () => {
  return (
   <div className="bg-[#161717] w-full max-w-4xl shadow-xl mt-20 rounded-md mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 md:py-20">
      <h2 className="text-center font-bold text-4xl text-[#FFD700] underline mb-16">
        Terms & Conditions – Pharaoh's Hound Website
      </h2>
      
      <div className="text-white space-y-8">
        <div className="text-center mb-8">
          <p className="text-lg">Effective Date: 31/07/2025</p>
          <p className="mt-4">
            Welcome to Pharaoh's Hound. By accessing or using our website and services, you agree to these Terms & Conditions. Please read them carefully.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">1. Eligibility</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Users must be at least 16 years old.</li>
            <li>Users under 18 require parental/guardian consent.</li>
            <li>Registration requires accurate, complete information.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">2. User Obligations</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>You agree not to engage in fraud, spam, or misuse of the website.</li>
            <li>You must not upload unlawful, defamatory, obscene, or infringing content.</li>
            <li>You are responsible for maintaining your login credentials securely.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">3. Intellectual Property</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>All website design, logos, and content are owned by Pharaoh's Hound unless stated otherwise.</li>
            <li>Users retain ownership of their uploaded creative works but grant Pharaoh's Hound a non-exclusive, royalty-free license to display, promote, and distribute them for campaign purposes.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">4. User-Generated Content Disclaimer</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pharaoh's Hound does not endorse or guarantee user content.</li>
            <li>Users are solely responsible for their uploaded materials.</li>
            <li>Pharaoh's Hound reserves the right to remove or block any content at its discretion.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">5. Payments & Voting</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Voting and payments are processed securely via Paystack or other integrated payment gateways.</li>
            <li>All transactions are final and non-refundable, except as required by law.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">6. Limitation of Liability</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pharaoh's Hound is not liable for any damages, data loss, or third-party misconduct.</li>
            <li>Services are provided "as is" without warranty of uninterrupted availability.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">7. Suspension & Termination</h3>
          <p>We may suspend or terminate accounts that violate these Terms.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">8. Governing Law & Dispute Resolution</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>These Terms are governed by the laws of the Federal Republic of Nigeria.</li>
            <li>Disputes shall first be resolved amicably; if unresolved, they will be referred to arbitration in Lagos under the Arbitration and Conciliation Act.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">9. Amendments</h3>
          <p>Pharaoh's Hound reserves the right to amend these Terms. Updated versions will be posted on the website.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">10. Contact Us</h3>
          <p><strong>Email:</strong> inquiries@pharoahshoundtattoostudios.com</p>
          <p><strong>Address:</strong> 28 Fola Osibo Street, Lekki Phase 1, Lagos or No. 470 Amina Kano Crescent, Wuse 2, Abuja</p>
        </div>
      </div>
    </div>
  )
}

export default Toc