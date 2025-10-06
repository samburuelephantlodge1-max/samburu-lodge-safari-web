import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { updatePageMeta } from "@/utils/seo";

const PrivacyPolicy = () => {
  useEffect(() => {
    updatePageMeta(
      "Privacy Policy - Samburu Elephant Lodge",
      "Learn about how Samburu Elephant Lodge collects, uses, and protects your personal information.",
      "/privacy-policy"
    );
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
          <p className="text-muted-foreground">
            <strong>Effective Date:</strong> October 1, 2025
          </p>

          <p>
            Welcome to Samburu Elephant Lodge. We are deeply committed to protecting the privacy and security of the personal information entrusted to us by our guests. This Privacy Policy describes how Samburu Elephant Lodge ("the Lodge," "we," "us," or "our") collects, uses, shares, and protects the personal data of our guests, visitors to our website, and individuals who interact with our services.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">1. Scope and Consent</h2>
            <p>
              By making a reservation, staying at the Lodge, using our website, or otherwise providing us with your information, you consent to the collection and use of your personal data as described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">2. Information We Collect</h2>
            <p>
              We collect information necessary to process reservations, provide services, and ensure a memorable guest experience. This information falls into the following categories:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">A. Information You Provide Directly to Us</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact and Personal Details:</strong> Name, email address, postal address, phone number, nationality, and date of birth.</li>
              <li><strong>Reservation Details:</strong> Arrival and departure dates, room preferences, dietary requirements, special requests (e.g., medical needs, mobility assistance), and passport/ID details (where legally required for check-in or for safari permits).</li>
              <li><strong>Payment Information:</strong> Payment card details (collected securely by third-party processors and not stored by the Lodge, except for a secure token if applicable) and billing address.</li>
              <li><strong>Communication Data:</strong> Records of your correspondence with us via email, telephone, or feedback forms.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">B. Information Collected Automatically</h3>
            <p>
              <strong>Website Usage Data:</strong> IP address, browser type, device type, referring/exit pages, and time stamps when you interact with our website.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">C. Cookies and Tracking Technologies</h3>
            <p>
              Our website uses "cookies" and similar tracking technologies to enhance your experience. A cookie is a small file stored on your device that helps us recognize you and remember your preferences.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function correctly (e.g., remembering your reservation items during a single session).</li>
              <li><strong>Analytics Cookies:</strong> We use these to understand how our visitors use the website, what pages are most popular, and how we can improve our services. The data collected is aggregated and anonymized.</li>
              <li><strong>Functionality Cookies:</strong> These remember choices you make (such as language preference or region) to provide a more personalized experience.</li>
            </ul>
            <p className="mt-3">
              You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. However, this may prevent you from taking full advantage of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>To Fulfill Reservations and Services:</strong> Processing, confirming, and managing your booking, providing check-in/check-out services, and arranging specific requests (e.g., transfers, safari excursions, special occasion planning).</li>
              <li><strong>Communication:</strong> Sending reservation confirmations, pre-arrival information, post-stay surveys, and responding to your inquiries.</li>
              <li><strong>Security and Legal Compliance:</strong> Ensuring the safety and security of our guests and premises, maintaining required records under Kenyan law (including national park entry permits), and managing any legal claims.</li>
              <li><strong>Internal Operations:</strong> Improving the quality of our services, training staff, and performing internal analysis and auditing.</li>
              <li><strong>Marketing (with Consent):</strong> Sending you promotional offers, newsletters, and updates about the Lodge, conservation efforts, and special safari packages, provided you have explicitly opted-in to receive such communications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">4. Data Sharing and Disclosure</h2>
            <p>
              We only share your personal data with trusted third parties necessary to provide our services or as required by law:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">A. Safari and Activity Operators</h3>
            <p>
              For any third-party excursions, game drives, transfers, or safaris you book through us, we must share necessary personal data with the external operators to secure your booking and ensure seamless service. This data is limited to what is strictly required, which typically includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Your full name and contact information.</li>
              <li>Passport details or ID number (for park gate entry permits or flight bookings).</li>
              <li>Any special dietary or medical requirements relevant to the activity.</li>
            </ul>
            <p className="mt-3">
              We only partner with reputable operators who commit to protecting your data. The Lodge is not responsible for the privacy practices of these third-party operators.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">B. Other Service Providers</h3>
            <p>
              We share necessary information with partners who perform functions on our behalf, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Payment Processors:</strong> Securely handling your payment transactions.</li>
              <li><strong>IT and Systems Support:</strong> Maintaining our reservation and operational systems.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">C. Legal Requirements</h3>
            <p>
              We will disclose your information when required to do so by law, court order, or governmental authorities (e.g., immigration, police, or wildlife management bodies) in Kenya or another relevant jurisdiction.
            </p>
            <p className="mt-3">
              We require all third parties to respect the security of your personal data and to treat it in accordance with the law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">5. Data Security</h2>
            <p>
              The Lodge takes appropriate technical and organizational measures to protect your personal data from accidental loss, unauthorized access, use, alteration, or disclosure. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Using secure servers and encryption technologies (SSL/TLS) for data transmission.</li>
              <li>Restricting access to your personal data to authorized employees and contractors who have a business need to know.</li>
              <li>Implementing physical security measures at our premises.</li>
            </ul>
            <p className="mt-3">
              While we strive to protect your data, no security system is impenetrable, and we cannot guarantee the absolute security of information transmitted over the Internet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">6. Data Retention</h2>
            <p>
              We will retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purpose of satisfying any legal, accounting, or reporting requirements. Generally, reservation data is retained for a period necessary to comply with tax and audit regulations in Kenya. Marketing data (with consent) is retained until you opt out.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">7. Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have the following rights concerning your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right of Access:</strong> The right to request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> The right to request the correction of incomplete or inaccurate data we hold about you.</li>
              <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> The right to request the deletion or removal of personal data where there is no good reason for us to continue processing it.</li>
              <li><strong>Right to Object:</strong> The right to object to the processing of your personal data for direct marketing purposes.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us using the details provided below. We may require specific information from you to help us confirm your identity and ensure your right to access the data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">8. Contact Information</h2>
            <p>
              If you have any questions about this Privacy Policy or our data protection practices, please contact us on email at{" "}
              <a href="mailto:info@samburuelephantlodge.co.ke" className="text-primary hover:underline">
                info@samburuelephantlodge.co.ke
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
