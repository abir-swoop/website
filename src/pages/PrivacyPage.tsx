import Layout from '../components/layout/Layout';
import { CONTENT_MAP, type Locale } from '../config/contentConfig';

interface Props {
  locale?: Locale;
}

export default function PrivacyPage({ locale = 'NG' }: Props) {
  const content = CONTENT_MAP[locale];

  return (
    <Layout content={content}>
      <section className="w-full bg-white px-6 md:px-20 py-20 mt-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-[#07003b] mb-8">Privacy Policy</h1>

          <div className="prose prose-lg text-[#4a4a6a] space-y-6">
            {locale === 'SZ' ? <SZPrivacy /> : <NGPrivacy />}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function NGPrivacy() {
  return (
    <>
      <p className="text-base">Last Updated: 26th February 2026</p>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">1. INTRODUCTION</h2>
        <p>
          Thumo Delivery Limited (trading as "Swoop") ("Thumo", "we", "us", or "our") is committed to
          protecting the privacy and personal data of all users of our Platform. This Privacy Policy
          explains how we collect, use, store, share, and protect your personal data in compliance with
          the Nigeria Data Protection Act 2023 (NDPA), the Nigeria Data Protection Regulation 2019
          (NDPR), and other applicable data protection laws.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">2. DATA CONTROLLER</h2>
        <p>
          Thumo Delivery Limited is the data controller for personal data collected through the Platform.
          Our contact details are:
        </p>
        <p>Address: 2 Birrell Avenue, Yaba, Lagos</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">3. PERSONAL DATA WE COLLECT</h2>
        <h3 className="text-xl font-semibold text-[#07003b] mt-4 mb-2">3.1 Information You Provide</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Full name, email address, phone number, and delivery address</li>
          <li>Payment information (card details, bank account information)</li>
          <li>Profile photo (optional)</li>
          <li>Identity verification documents (for Riders and Merchants)</li>
          <li>Business registration details (for Merchants)</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#07003b] mt-4 mb-2">3.2 Information Collected Automatically</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Device information (device type, operating system, unique device identifiers)</li>
          <li>Location data (GPS coordinates when using the Platform)</li>
          <li>Usage data (pages visited, features used, order history)</li>
          <li>Log data (IP address, access times, app crashes)</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#07003b] mt-4 mb-2">3.3 Information from Third Parties</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Payment verification data from payment processors</li>
          <li>Background check results for Riders (where applicable)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">4. LEGAL BASIS FOR PROCESSING</h2>
        <p>We process your personal data on the following legal bases under the NDPA:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Consent:</strong> Where you have given clear consent for us to process your data for a specific purpose.</li>
          <li><strong>Contract Performance:</strong> Where processing is necessary to fulfil our obligations under a contract with you (e.g., processing your order).</li>
          <li><strong>Legitimate Interest:</strong> Where processing is necessary for our legitimate business interests, provided these do not override your rights.</li>
          <li><strong>Legal Obligation:</strong> Where processing is required to comply with Nigerian law.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">5. HOW WE USE YOUR DATA</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To create and manage your account on the Platform</li>
          <li>To process and fulfil orders, including delivery coordination</li>
          <li>To process payments and prevent fraud</li>
          <li>To communicate with you about your orders, account, and our services</li>
          <li>To improve and personalize your experience on the Platform</li>
          <li>To ensure safety and security of all Platform users</li>
          <li>To comply with legal and regulatory requirements</li>
          <li>To resolve disputes and enforce our agreements</li>
          <li>To send promotional communications (with your consent, which you may withdraw at any time)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">6. DATA SHARING AND DISCLOSURE</h2>
        <p>We may share your personal data with:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Merchants: Your name, delivery address, and order details to fulfil your order.</li>
          <li>Riders: Your name, phone number, and delivery address to complete delivery.</li>
          <li>Payment Processors: Payment data to process transactions securely.</li>
          <li>Service Providers: Third-party providers who assist us in operating the Platform.</li>
          <li>Law Enforcement: Where required by law, regulation, or valid legal process.</li>
        </ul>
        <p className="mt-3">We do not sell your personal data to third parties.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">7. DATA RETENTION</h2>
        <p>
          We retain your personal data only for as long as necessary to fulfil the purposes for which it was
          collected, or as required by law. Account data is retained for the duration of your account and
          for up to 6 years after account closure for legal and regulatory compliance. Transaction records
          are retained for a minimum of 6 years in accordance with Nigerian tax and commercial law.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">8. DATA SECURITY</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal data
          against unauthorized access, alteration, disclosure, or destruction. These include encryption of
          data in transit and at rest, access controls, regular security assessments, and employee training
          on data protection.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">9. YOUR RIGHTS</h2>
        <p>Under the NDPA, you have the following rights:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Right of Access:</strong> You may request a copy of the personal data we hold about you.</li>
          <li><strong>Right to Rectification:</strong> You may request correction of inaccurate or incomplete data.</li>
          <li><strong>Right to Erasure:</strong> You may request deletion of your personal data, subject to legal retention requirements.</li>
          <li><strong>Right to Restrict Processing:</strong> You may request that we limit how we use your data.</li>
          <li><strong>Right to Data Portability:</strong> You may request your data in a structured, machine-readable format.</li>
          <li><strong>Right to Object:</strong> You may object to processing based on legitimate interests or for direct marketing.</li>
          <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you may withdraw it at any time.</li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, please contact us at developer@swoop.team. We will respond within 30 days.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">10. COOKIES AND TRACKING</h2>
        <p>
          We use cookies and similar technologies to enhance your experience, analyze usage patterns,
          and deliver relevant content. You can manage your cookie preferences through your browser
          settings. Essential cookies required for the Platform to function cannot be disabled.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">11. INTERNATIONAL DATA TRANSFERS</h2>
        <p>
          Your personal data may be transferred to and processed in countries outside Nigeria where our
          service providers are located. We ensure that such transfers comply with the NDPA and that
          adequate safeguards are in place to protect your data.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">12. CHILDREN'S PRIVACY</h2>
        <p>
          The Platform is not intended for use by persons under the age of 18. We do not knowingly
          collect personal data from children. If we become aware that we have collected data from a
          child, we will take steps to delete it promptly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">13. CHANGES TO THIS POLICY</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of material changes
          through the Platform or by email. Your continued use of the Platform after such notification
          constitutes acceptance of the updated policy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">14. COMPLAINTS</h2>
        <p>
          If you are not satisfied with how we handle your personal data, you have the right to lodge a
          complaint with the Nigeria Data Protection Commission (NDPC). Contact details for the NDPC
          are available at https://ndpc.gov.ng.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">15. CONTACT US</h2>
        <p>For any questions or requests regarding this Privacy Policy or your personal data, please contact:</p>
        <p>
          Thumo Delivery Limited<br />
          No 2 Birrel Avenue, Yaba Lagos, Nigeria<br />
          Email: developer@swoop.team
        </p>
      </section>
    </>
  );
}

function SZPrivacy() {
  return (
    <>
      <p className="text-base">Last Updated: 26th February 2026</p>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">1. INTRODUCTION</h2>
        <p>
          Thumo (Pty) Ltd (trading as "Swoop") ("Thumo", "we", "us", or "our") is committed to protecting
          the privacy and personal data of all users of our Platform. This Privacy Policy explains how we
          collect, use, store, share, and protect your personal data in compliance with the Eswatini Data
          Protection Act, 2022 (DPA) and other applicable data protection laws.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">2. DATA CONTROLLER</h2>
        <p>
          Thumo (Pty) Ltd is the data controller for personal data collected through the Platform. Our
          contact details are:
        </p>
        <p>Address: Mom's Office Building, Lot 121 Dzeliwe, Mbabane, Eswatini</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">3. PERSONAL DATA WE COLLECT</h2>
        <h3 className="text-xl font-semibold text-[#07003b] mt-4 mb-2">3.1 Information You Provide</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Full name, email address, phone number, and delivery address</li>
          <li>Payment information (card details, bank account information)</li>
          <li>Profile photo (optional)</li>
          <li>Identity verification documents (for Riders and Merchants)</li>
          <li>Business registration details (for Merchants)</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#07003b] mt-4 mb-2">3.2 Information Collected Automatically</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Device information (device type, operating system, unique device identifiers)</li>
          <li>Location data (GPS coordinates when using the Platform)</li>
          <li>Usage data (pages visited, features used, order history)</li>
          <li>Log data (IP address, access times, app crashes)</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#07003b] mt-4 mb-2">3.3 Information from Third Parties</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Payment verification data from payment processors</li>
          <li>Background check results for Riders (where applicable)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">4. LEGAL BASIS FOR PROCESSING</h2>
        <p>
          We process your personal data on the following legal bases under the Eswatini Data Protection
          Act, 2022:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Consent:</strong> Where you have given clear consent for us to process your data for a specific purpose.</li>
          <li><strong>Contract Performance:</strong> Where processing is necessary to fulfil our obligations under a contract with you (e.g., processing your order).</li>
          <li><strong>Legitimate Interest:</strong> Where processing is necessary for our legitimate business interests, provided these do not override your rights.</li>
          <li><strong>Legal Obligation:</strong> Where processing is required to comply with Eswatini law.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">5. HOW WE USE YOUR DATA</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To create and manage your account on the Platform</li>
          <li>To process and fulfil orders, including delivery coordination</li>
          <li>To process payments and prevent fraud</li>
          <li>To communicate with you about your orders, account, and our services</li>
          <li>To improve and personalize your experience on the Platform</li>
          <li>To ensure safety and security of all Platform users</li>
          <li>To comply with legal and regulatory requirements</li>
          <li>To resolve disputes and enforce our agreements</li>
          <li>To send promotional communications (with your consent, which you may withdraw at any time)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">6. DATA SHARING AND DISCLOSURE</h2>
        <p>We may share your personal data with:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Merchants: Your name, delivery address, and order details to fulfil your order.</li>
          <li>Riders: Your name, phone number, and delivery address to complete delivery.</li>
          <li>Payment Processors: Payment data to process transactions securely.</li>
          <li>Service Providers: Third-party providers who assist us in operating the Platform (e.g., cloud hosting, analytics).</li>
          <li>Law Enforcement: Where required by law, regulation, or valid legal process.</li>
        </ul>
        <p className="mt-3">We do not sell your personal data to third parties.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">7. DATA RETENTION</h2>
        <p>
          We retain your personal data only for as long as necessary to fulfil the purposes for which it was
          collected, or as required by law. Account data is retained for the duration of your account and
          for up to 6 years after account closure for legal and regulatory compliance. Transaction records
          are retained for a minimum of 6 years in accordance with Eswatini tax and commercial law.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">8. DATA SECURITY</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal data
          against unauthorized access, alteration, disclosure, or destruction. These include encryption of
          data in transit and at rest, access controls, regular security assessments, and employee training
          on data protection.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">9. YOUR RIGHTS</h2>
        <p>Under the Eswatini Data Protection Act, 2022, you have the following rights:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Right of Access:</strong> You may request a copy of the personal data we hold about you.</li>
          <li><strong>Right to Rectification:</strong> You may request correction of inaccurate or incomplete data.</li>
          <li><strong>Right to Erasure:</strong> You may request deletion of your personal data, subject to legal retention requirements.</li>
          <li><strong>Right to Restrict Processing:</strong> You may request that we limit how we use your data.</li>
          <li><strong>Right to Data Portability:</strong> You may request your data in a structured, machine-readable format.</li>
          <li><strong>Right to Object:</strong> You may object to processing based on legitimate interests or for direct marketing.</li>
          <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you may withdraw it at any time.</li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, please contact us at privacy@thumo.com. We will respond within 30 days.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">10. COOKIES AND TRACKING</h2>
        <p>
          We use cookies and similar technologies to enhance your experience, analyze usage patterns,
          and deliver relevant content. You can manage your cookie preferences through your browser
          settings. Essential cookies required for the Platform to function cannot be disabled.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">11. INTERNATIONAL DATA TRANSFERS</h2>
        <p>
          Your personal data may be transferred to and processed in countries outside Eswatini where
          our service providers are located. We ensure that such transfers comply with the Eswatini Data
          Protection Act, 2022 and that adequate safeguards are in place to protect your data.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">12. CHILDREN'S PRIVACY</h2>
        <p>
          The Platform is not intended for use by persons under the age of 18. We do not knowingly
          collect personal data from children. If we become aware that we have collected data from a
          child, we will take steps to delete it promptly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">13. CHANGES TO THIS POLICY</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of material changes
          through the Platform or by email. Your continued use of the Platform after such notification
          constitutes acceptance of the updated policy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">14. COMPLAINTS</h2>
        <p>
          If you are not satisfied with how we handle your personal data, you have the right to lodge a
          complaint with the Eswatini Communications Commission (ECC), the authority responsible for
          data protection in Eswatini. Contact details are available at https://www.ecc.org.sz.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">15. CONTACT US</h2>
        <p>For any questions or requests regarding this Privacy Policy or your personal data, please contact:</p>
        <p>
          Thumo (Pty) Ltd<br />
          Mom's Office Building, Lot 121 Dzeliwe, Mbabane, Eswatini
        </p>
      </section>
    </>
  );
}
