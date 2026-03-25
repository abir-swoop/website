import Layout from '../components/layout/Layout';
import { CONTENT_MAP, type Locale } from '../config/contentConfig';

interface Props {
  locale?: Locale;
}

export default function TermsPage({ locale = 'NG' }: Props) {
  const content = CONTENT_MAP[locale];

  // Locale-specific content for full terms & conditions
  const getTitle = () => locale === 'NG' ? 'Nigeria' : 'the Kingdom of Eswatini';
  const getCompany = () => locale === 'NG'
    ? 'Thumo Delivery Limited, a company incorporated in Nigeria with its registered office at 2 Birrell Avenue, Yaba, Lagos, Nigeria'
    : 'Thumo (Pty) Ltd, a company duly incorporated and trading in Eswatini with its registered office at Lot 121 Dzeliwe Street, Mbabane, Hhohho, Eswatini';
  const getPhoneType = () => locale === 'NG' ? 'Nigerian' : 'Eswatini';
  const getCurrencyName = () => locale === 'NG' ? 'Nigerian Naira (₦)' : 'Eswatini Lilangeni (SZL)';
  const getPaymentMethods = () => locale === 'NG'
    ? 'Bank transfer (Nigeria), Debit and credit card payments (Visa, Mastercard, Verve), Swoop Wallet'
    : 'Card payment via Flutterwave (Visa, Mastercard), Swoop Wallet, Cash on Delivery (subject to order value limits)';
  const getProcessors = () => locale === 'NG'
    ? 'Flutterwave, Monnify, and Paystack'
    : 'Flutterwave and Paystack';
  const getLiabilityAmount = () => locale === 'NG' ? 'Twenty Thousand Naira (₦20,000)' : 'One Hundred Eswatini Lilangeni (E100 SZL)';
  const getDataProtection = () => locale === 'NG'
    ? 'In Nigeria, we process personal data in compliance with the Nigeria Data Protection Act 2023 (NDPA) and the Nigeria Data Protection Regulation 2019 (NDPR).'
    : 'In the Kingdom of Eswatini, we process personal data in compliance with the Data Protection Act of 2022 of the Kingdom of Eswatini and any subsidiary regulations thereunder.';
  const getArbitration = () => locale === 'NG'
    ? 'arbitration under the Arbitration and Mediation Act 2023 of Nigeria. The seat of arbitration shall be Lagos, Nigeria'
    : 'arbitration under the Arbitration Act of Eswatini. The seat of arbitration shall be Mbabane, Eswatini';
  const getRegistration = () => locale === 'NG'
    ? 'Corporate Affairs Commission (CAC) registration in Nigeria'
    : 'equivalent business registration requirements in Eswatini';
  const getContactName = () => locale === 'NG'
    ? 'Thumo Delivery Limited (trading as Swoop)'
    : 'Thumo (Pty) Ltd (trading as Swoop)';
  const getContactAddress = () => locale === 'NG'
    ? '2 Birrell Avenue, Yaba, Lagos, Nigeria'
    : 'Lot 121 Dzeliwe Street, Mbabane, Hhohho, Eswatini';

  return (
    <Layout content={content}>
      <section className="w-full bg-white px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-[#07003b] mb-2">Swoop Terms and Conditions</h1>
          <p className="text-[#595672] mb-8">Applicable to Users, Merchants, and Riders - {getTitle()}</p>
          <p className="text-sm text-[#95889e] mb-12">Last Updated: March 2026</p>

          <div className="prose prose-lg text-[#4a4a6a] space-y-6">

            <section>
              <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">1. INTRODUCTION AND ACCEPTANCE OF TERMS</h2>
              <p>These Terms and Conditions ("Terms") constitute a legally binding agreement between you and {getCompany()}, trading as "Swoop" ("Swoop", "we", "us", or "our").</p>
              <p>These Terms govern your access to and use of the Swoop mobile applications, websites, and all related services (collectively, the "Platform"), whether you access the Platform as a customer ordering goods ("User"), a business listing goods for sale ("Merchant"), or a delivery service provider fulfilling deliveries ("Rider").</p>
              <p>By downloading, installing, accessing, or using the Platform, you confirm that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, and any additional terms or policies referenced herein. If you do not agree to these Terms, you must not access or use the Platform.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">2. ELIGIBILITY</h2>
              <p>You must be at least eighteen (18) years of age to create an Account and use the Platform. By creating an Account, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into a binding agreement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">3. ACCOUNT REGISTRATION AND SECURITY</h2>
              <h3 className="text-xl font-semibold text-[#07003b] mt-4 mb-2">3.1 User Accounts</h3>
              <p>Users may register by providing their full name, email address, and {getPhoneType()} phone number. Phone number verification via One-Time Password (OTP) is required to complete registration.</p>
              <h3 className="text-xl font-semibold text-[#07003b] mt-4 mb-2">3.2 Account Security</h3>
              <p>You are responsible for maintaining the confidentiality of your Account credentials and for all activities that occur under your Account. You must notify Swoop immediately if you become aware of any unauthorised use of your Account or any security breach.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">4. THE PLATFORM AND SERVICES</h2>
              <p>Swoop operates as a technology platform that connects Users with Merchants and facilitates the delivery of Goods through Riders. Swoop is not a food manufacturer, restaurant, grocery store, pharmacy, or delivery company.</p>
              <p>Swoop does not prepare, manufacture, store, or handle any Goods listed on the Platform. The Merchant is solely responsible for the quality, safety, accuracy of description, and regulatory compliance of all Goods sold through the Platform.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">5. ORDERS AND TRANSACTIONS</h2>
              <p>By placing an Order, the User makes an offer to purchase the selected Goods from the Merchant at the displayed price, plus applicable Delivery Fees and Service Fees. Prices are displayed in {getCurrencyName()}.</p>
              <p>An Order is not confirmed until payment has been successfully processed and the Merchant has accepted the Order. Swoop reserves the right to cancel any Order that has not been accepted by the Merchant.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">6. DELIVERY</h2>
              <p>Delivery times displayed on the Platform are estimates only and are not guaranteed. Estimated delivery times are calculated based on store preparation time, rider proximity, and travel distance, and may be affected by traffic, weather, or other factors beyond Swoop's control.</p>
              <p>Delivery is verified through the Delivery PIN system. The User must provide the four-digit Delivery PIN to the Rider to confirm receipt. An Order is deemed delivered upon successful PIN verification.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">7. PRICING AND FEES</h2>
              <p>Product prices are set by Merchants and displayed on the Platform. Swoop may apply a markup to product prices to cover platform operating costs.</p>
              <p>Delivery Fees are calculated based on delivery distance, location zone, order complexity, and prevailing conditions. Delivery Fees are displayed to the User before Order confirmation.</p>
              <p>All fees are inclusive of applicable taxes unless expressly stated otherwise.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">8. PAYMENT</h2>
              <p>The Platform supports the following payment methods: {getPaymentMethods()}.</p>
              <p>Payment processing is handled by third-party payment processors including {getProcessors()}. By using these payment methods, you also agree to the terms and conditions of the applicable payment processor.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">9. REFUNDS</h2>
              <p>Refunds for cancelled or failed Orders are credited to the User's Swoop Wallet unless otherwise determined by Swoop.</p>
              <p>Refunds for missing or incorrect items are processed after investigation by Swoop's support team. Swoop's determination on refund eligibility is final.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">10. MERCHANT-SPECIFIC TERMS</h2>
              <p>Merchants must ensure that all Goods listed on the Platform are accurately described, priced, and comply with all applicable food safety, health, pharmaceutical, and consumer protection laws and regulations in their jurisdiction of operation.</p>
              <p>Merchants are solely responsible for obtaining and maintaining all licences, permits, and registrations required to operate their business, including {getRegistration()}.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">11. RIDER-SPECIFIC TERMS</h2>
              <p>Riders operate as independent contractors and not as employees of Swoop. Riders are responsible for providing and maintaining their own vehicle, mobile device, and any equipment necessary to perform deliveries.</p>
              <p>Riders must comply with all applicable road traffic laws, regulations, and safety standards at all times during deliveries.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">12. PROHIBITED CONDUCT</h2>
              <p>All Platform participants (Users, Merchants, and Riders) are prohibited from:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Using the Platform for any unlawful, fraudulent, or unauthorised purpose</li>
                <li>Impersonating any person or entity</li>
                <li>Interfering with, disrupting, or attempting to gain unauthorised access to the Platform</li>
                <li>Uploading or transmitting any viruses, malware, or other harmful code</li>
                <li>Engaging in harassment, abuse, threats, or discriminatory conduct</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">13. INTELLECTUAL PROPERTY</h2>
              <p>The Platform, including its design, software, features, content, trademarks, logos, and all associated intellectual property rights, are owned by or licensed to {locale === 'NG' ? 'Thumo Delivery Limited' : 'Thumo (Pty) Ltd'}. All rights are reserved.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">14. DATA PROTECTION AND PRIVACY</h2>
              <p>Swoop collects, processes, and stores personal data in accordance with its Privacy Policy, which forms an integral part of these Terms.</p>
              <p>{getDataProtection()}</p>
              <p>You may exercise your data protection rights by contacting developer@swoop.team. We will respond within thirty (30) days.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">15. DISCLAIMER AND LIMITATION OF LIABILITY</h2>
              <p>The Platform is provided on an "as is" and "as available" basis. Swoop makes no warranties, express or implied, regarding the Platform's fitness for a particular purpose, reliability, accuracy, or uninterrupted availability.</p>
              <p>To the maximum extent permitted by applicable law, Swoop's total aggregate liability shall not exceed the greater of: (a) the total fees paid by or to you through the Platform in the six (6) months preceding the claim; or (b) {getLiabilityAmount()}.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">16. SUSPENSION AND TERMINATION</h2>
              <p>Swoop may suspend or terminate your Account at any time, with or without notice, for any reason, including breach of these Terms, fraudulent activity, or non-compliance with payment obligations.</p>
              <p>You may terminate your Account at any time by contacting support. Account termination does not release you from any outstanding obligations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">17. GOVERNING LAW AND DISPUTE RESOLUTION</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of {locale === 'NG' ? 'the Federal Republic of Nigeria' : 'the Kingdom of Eswatini'}.</p>
              <p>Any dispute arising out of or relating to these Terms that cannot be resolved amicably within thirty (30) days of written notice shall be referred to and finally resolved by {getArbitration()}.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#07003b] mt-8 mb-4">18. CONTACT US</h2>
              <p>For questions, complaints, or requests relating to these Terms, please contact:</p>
              <p>
                {getContactName()}<br/>
                {getContactAddress()}<br/>
                Email: developer@swoop.team<br/>
                Support: Available through the in-app support function
              </p>
            </section>

          </div>
        </div>
      </section>
    </Layout>
  );
}
