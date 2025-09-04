import React from 'react'

const Privacy = () => {
  return (

    <div className="bg-[#161717] w-full max-w-4xl shadow-xl mt-20 rounded-md mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 md:py-20">
      <h2 className="text-center font-bold text-4xl text-[#FFD700] underline mb-16">
        Pharoahs Hounds Privacy Policy
      </h2>


      <div className="text-white space-y-8">
        <div className="text-center mb-8">
          <p className="text-lg">Effective Date: 31/07/2025</p>
          <p className="mt-4">
            Pharaoh's Hound ("we", "our", "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, services, and platforms.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">1. Information We Collect</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, location, date of birth, payment details (where applicable).</li>
            <li><strong>Account Information:</strong> Username, password, profile details.</li>
            <li><strong>Technical Information:</strong> IP address, browser type, operating system, cookies, device identifiers.</li>
            <li><strong>User Content:</strong> Any creative work, media, or information submitted on our platform.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">2. How We Use Your Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>To register and manage user accounts.</li>
            <li>To process payments and voting (through Paystack or other secure gateways).</li>
            <li>To communicate updates, promotions, and service notices.</li>
            <li>To improve our services, content, and user experience.</li>
            <li>To comply with Nigerian laws and regulations.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">3. Sharing of Information</h3>
          <p className="mb-3">We do not sell or rent your personal data. However, we may share information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>With trusted service providers (e.g., Paystack, web hosting, analytics).</li>
            <li>With legal authorities if required by law.</li>
            <li>With partners only where consent has been given.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">4. Cookies & Tracking</h3>
          <p>Our website uses cookies to enhance user experience and track analytics. You may disable cookies in your browser, but certain functions may be limited.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">5. Data Storage & Security</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>We implement encryption, firewalls, and secure servers.</li>
            <li>Data may be stored in or outside Nigeria, in compliance with NDPR.</li>
            <li>Users are responsible for keeping their login credentials secure.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">6. User Rights (NDPR)</h3>
          <p className="mb-3">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your data.</li>
            <li>Correct or update inaccurate information.</li>
            <li>Request deletion of your data.</li>
            <li>Withdraw consent for certain processing.</li>
          </ul>
          <p className="mt-3">Requests can be made via enquiries@pharoahshounds.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">7. Children's Privacy</h3>
          <p>Our services are not directed to children under 16. Parental consent is required for minors who register.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">8. Changes to Privacy Policy</h3>
          <p>We may update this policy. Updates will be posted on the website with a revised effective date.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">9. Contact Us</h3>
          <p className="mb-2">For questions about this Privacy Policy:</p>
          <p><strong>Email:</strong> inquiries@pharoahshoundtattoostudios.com</p>
          <p><strong>Address:</strong> 28 Fola Osibo Street, Lekki Phase 1, Lagos or No. 470 Amina Kano Crescent, Wuse 2, Abuja</p>
        </div>
      </div>
    </div>
  )
}

export default Privacy