import { EmDash } from "components/EmDash";
import { ExternalLink } from "components/ExternalLink";
import { getPageLayout } from "components/Layout";
import { emails, fullRoutePath, routes, shortName, urls } from "config";
import { GetStaticProps } from "next";
import { Link } from "components/Link";
import { mailToLink } from "utils/mailToLink";
import { pageMeta, PageMeta } from "utils/pageMeta";
import type { BasePageProps } from "types/BasePageProps";

interface Props extends BasePageProps {
  meta: PageMeta;
}

export const getStaticProps: GetStaticProps = async () => {
  const props: Props = {
    meta: pageMeta(),
    seo: {
      title: "Privacy Policy",
      description: `${shortName} Privacy Policy`,
    },
  };

  return {
    props,
  };
};

PrivacyPolicy.pageLayout = getPageLayout;

export default function PrivacyPolicy() {
  return (
    <>
      <div className="relative py-16 overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-pink-900"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-pink-900"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-pink-900"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-80ch prose-lg mx-auto">
            <h1>
              <span className="block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                Privacy Policy
              </span>
              <span className="mt-2 block text-base text-center text-cyan-200 font-semibold tracking-wide uppercase">
                Last Updated: January 28, 2021
              </span>
            </h1>
            <p>
              <strong>
                Boring Cars Detailing & Wash Services LLC ("Boring Cars
                Detailing")
              </strong>{" "}
              respects your privacy and recognizes the importance of your
              personal information. This{" "}
              <strong>Privacy Policy ("Policy")</strong>
              describes how we collect, use, and disclose data. If you have any
              questions or concerns about this Policy, or our practices with
              regards to your personal information, please contact us at{" "}
              <ExternalLink href={mailToLink(emails.privacyPolicy)}>
                {emails.privacyPolicy}
              </ExternalLink>
              .
            </p>
            <p>
              This Policy applies to your use of Boring Cars Detailing's
              products, services, and Website located at{" "}
              <a href={urls.site}>www.boringcarsdetailing.com</a> on all
              platforms (collectively, our "Services"), as well as any related
              services, sales, marketing, or events. We are committed to
              protecting your information through our compliance with this
              Policy.
            </p>
            <p>
              <strong>
                Please read this Policy carefully as it will help you understand
                what we do with the information we collect.
              </strong>
            </p>
          </div>
          <div className="prose max-w-80ch prose-lg mx-auto">
            <section id="toc">
              <a className="headingLink" href="#toc">
                <h2 className="uppercase">Table of Contents</h2>
              </a>
              <ol>
                <li>
                  <a href="#info-we-collect" className="uppercase">
                    What information do we collect?
                  </a>
                </li>
                <li>
                  <a href="#how-we-use-your-info" className="uppercase">
                    How do we use your information?
                  </a>
                </li>
                <li>
                  <a href="#will-info-be-shared" className="uppercase">
                    Will your information be shared with anyone?
                  </a>
                </li>
                <li>
                  <a
                    href="#who-will-your-info-be-shared-with"
                    className="uppercase"
                  >
                    Who will your information be shared with?
                  </a>
                </li>
                <li>
                  <a
                    href="#how-long-do-we-keep-your-info"
                    className="uppercase"
                  >
                    How long do we keep your information?
                  </a>
                </li>
                <li>
                  <a href="#keeping-your-info-safe" className="uppercase">
                    How do we keep your information safe?
                  </a>
                </li>
                <li>
                  <a href="#collecting-info-from-minors" className="uppercase">
                    Do we collect information from minors?
                  </a>
                </li>
                <li>
                  <a href="#your-privacy-rights" className="uppercase">
                    What are your privacy rights?
                  </a>
                </li>
                <li>
                  <a
                    href="#controls-for-do-not-track-features"
                    className="uppercase"
                  >
                    Controls for do-not-track features
                  </a>
                </li>
                <li>
                  <a
                    href="#california-residents-specific-rights"
                    className="uppercase"
                  >
                    Do California residents have specific privacy rights?
                  </a>
                </li>
                <li>
                  <a href="#policy-updates" className="uppercase">
                    Do we make updates to this Policy?
                  </a>
                </li>
                <li>
                  <a href="#contact-us" className="uppercase">
                    How can you contact us about this Policy?
                  </a>
                </li>
                <li>
                  <a href="#review-update-delete-data" className="uppercase">
                    How can you review, update, or delete the data we collect
                    from you?
                  </a>
                </li>
              </ol>
            </section>
            <section id="info-we-collect">
              <a className="headingLink" href="#info-we-collect">
                <h2 className="uppercase">
                  1. What information do we collect?
                </h2>
              </a>
              <article>
                <h3>Personal information you disclose to us</h3>
                <p className="italic">
                  <strong>In Short:</strong> We collect personal information
                  that you provide to us.
                </p>
                <p>
                  We collect personal information that you voluntarily provide
                  to us when you express an interest in obtaining information
                  about us or our products and Services, when you participate in
                  activities on the Website or otherwise when you contact us.
                </p>
                <p>
                  The personal information that we collect depends on the
                  context of your interactions with us and the Website, the
                  choices you make and the products and features you use. The
                  personal information we collect may include the following:
                </p>
                <p>
                  <strong>Personal Information Provided by You.</strong> We
                  collect names; phone numbers; email addresses; mailing
                  addresses; debit/credit card numbers; billing addresses; and
                  other similar information.
                </p>
                <p>
                  <strong>Payment Data.</strong> We may collect data necessary
                  to process your payment if you make purchases, such as your
                  payment instrument number (such as a credit card number), and
                  the security code associated with your payment instrument. All
                  payment data is stored by Stripe. You may find their privacy
                  policy here:{" "}
                  <ExternalLink href={urls.stripe.privacyPolicy}>
                    {urls.stripe.privacyPolicy}
                  </ExternalLink>
                </p>
                <p>
                  All personal information that you provide to us must be true,
                  complete and accurate, and you must notify us of any changes
                  to such personal information.
                </p>
              </article>
              <article>
                <h3>Information automatically collected</h3>
                <p className="italic">
                  <strong>In Short:</strong> Some information <EmDash /> such as
                  your Internet Protocol (IP) address and/or browser and device
                  characteristics <EmDash /> is collected automatically when you
                  visit our Website.
                </p>
                <p>
                  We automatically collect certain information when you visit,
                  use or navigate the Website. This information does not reveal
                  your specific identity (like your name or contact information)
                  but may include device and usage information, such as your IP
                  address, browser and device characteristics, operating system,
                  language preferences, referring URLs, device name, country,
                  location, information about how and when you use our Website
                  and other technical information. This information is primarily
                  needed to maintain the security and operation of our Website,
                  and for our internal analytics and reporting purposes.
                </p>
                <p>The information we collect includes:</p>
                <ul>
                  <li>
                    <span className="italic">Log and Usage Data.</span> Log and
                    usage data is service-related, diagnostic, usage and
                    performance information our servers automatically collect
                    when you access or use our Website and which we record in
                    log files. Depending on how you interact with us, this log
                    data may include your IP address, device information,
                    browser type and settings and information about your
                    activity in the Website (such as the date/time stamps
                    associated with your usage, pages and files viewed, searches
                    and other actions you take such as which features you use),
                    device event information (such as system activity, error
                    reports (sometimes called 'crash dumps') and hardware
                    settings).
                  </li>
                  <li>
                    <span className="italic">Device Data.</span> We collect
                    device data such as information about your computer, phone,
                    tablet or other device you use to access the Website.
                    Depending on the device used, this device data may include
                    information such as your IP address (or proxy server),
                    device and application identification numbers, location,
                    browser type, hardware model, Internet Service Provider
                    and/or mobile carrier, operating system and system
                    configuration information.
                  </li>
                  <li>
                    <span className="italic">Location Data.</span> We collect
                    location data such as information about your device's
                    location, which can be either precise or imprecise. How much
                    information we collect depends on the type and settings of
                    the device you use to access the Website. For example, we
                    may use GPS and other technologies to collect geolocation
                    data that tells us your current location (based on your IP
                    address). You can opt out of allowing us to collect this
                    information either by refusing access to the information or
                    by disabling your Location setting on your device. Note
                    however, if you choose to opt out, you may not be able to
                    use certain aspects of the Services.
                  </li>
                </ul>
              </article>
            </section>

            <section id="how-we-use-your-info">
              <a className="headingLink" href="#how-we-use-your-info">
                <h2 className="uppercase">
                  2. How do we use your information?
                </h2>
              </a>
              <p className="italic">
                <strong>In Short:</strong> We process your information for
                purposes based on legitimate business interests, the fulfillment
                of our contract with you, compliance with our legal obligations,
                and/or your consent.
              </p>
              <p>
                We will use personal information collected via our Website for a
                variety of business purposes described below. We process your
                personal information for these purposes in reliance on our
                legitimate business interests, in order to enter into or perform
                a contract with you, with your consent, and/or for compliance
                with our legal obligations. We indicate the specific processing
                grounds we rely on next to each purpose listed below.
              </p>
              <p>We use the information we collect or receive:</p>
              <ul>
                <li>
                  <strong>
                    To facilitate account creation and logon process.
                  </strong>{" "}
                  If you choose to link your account with us to a third-party
                  account (such as your Google or Facebook account), we use this
                  information you allowed us to collect from those third parties
                  to facilitate account creation and logon process for the
                  performance of the contract.
                </li>
                <li>
                  <strong>To post testimonials.</strong> We post testimonials on
                  our Website that may contain personal information. Prior to
                  posting a testimonial, we will obtain your consent to use your
                  name and the content of the testimonial. If you wish to
                  update, or delete your testimonial, please contact us at{" "}
                  <ExternalLink href={mailToLink(emails.privacyPolicy)}>
                    {emails.privacyPolicy}
                  </ExternalLink>{" "}
                  and be sure to include your name, testimonial location, and
                  contact information.
                </li>
                <li>
                  <strong>Request feedback.</strong> We may use your information
                  to request feedback and to contact you about your use of our
                  Website.
                </li>
                <li>
                  <strong>To enable user-to-user communications.</strong> We may
                  use your information in order to enable user-to-user
                  communications with each user's consent.
                </li>
                <li>
                  <strong>To manage user accounts.</strong> We may use your
                  information for the purposes of managing our account and
                  keeping it in working order.
                </li>
                <li>
                  <strong>Fulfill and manage your orders.</strong> We may use
                  your information to fulfill and manage your orders, payments,
                  returns, and exchanges made through the Website.
                </li>
                <li>
                  <strong>Administer prize draws and competitions.</strong> We
                  may use your information to administer prize draws and
                  competitions when you elect to participate in our
                  competitions.
                </li>
                <li>
                  <strong>
                    To deliver and facilitate delivery of services to the user.
                  </strong>{" "}
                  We may use your information to provide you with the requested
                  service.
                </li>
                <li>
                  <strong>
                    To respond to user inquiries/offer support to users.
                  </strong>{" "}
                  We may use your information to respond to your inquiries and
                  solve any potential issues you might have with the use of our
                  Services.
                </li>
                <li>
                  <strong>
                    To send you marketing and promotional communications.
                  </strong>{" "}
                  We and/or our third-party marketing partners may use the
                  personal information you send to us for our marketing
                  purposes, if this is in accordance with your marketing
                  perferences. For example, when expressing an interest in
                  obtaining information about us or our Website, subscribing to
                  marketing or otherwise contacting us, we will collect personal
                  infromation from you. You can opt-out of our marketing emails
                  at any time (see the "
                  <a href="#your-privacy-rights" className="uppercase">
                    What are your privacy rights?
                  </a>
                  " below).
                </li>
                <li>
                  <strong>Deliver targeted advertising to you.</strong> We may
                  use your information to develop and display personalized
                  content and advertising (and work with third parties who do
                  so) tailored to your interests and/or location and to measure
                  its effectiveness.
                </li>
              </ul>
            </section>

            <section id="will-info-be-shared">
              <a className="headingLink" href="#will-info-be-shared">
                <h2 className="uppercase">
                  3. Will your information be shared with anyone?
                </h2>
              </a>
              <p className="italic">
                <strong>In Short:</strong> We only share information with your
                consent, to comply with laws, to provide you with services, to
                protect your rights, or to fulfill business obligations.
              </p>
              <p>
                We may process or share your data that we hold based on the
                following legal basis:
              </p>
              <ul>
                <li>
                  <strong>Consent:</strong> We may process your data if you have
                  given us specific consent to use your personal information for
                  a specific purpose.
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> We may process your
                  data when it is reasonably necessary to achieve our legitimate
                  business interests.
                </li>
                <li>
                  <strong>Performance of a Contract:</strong> Where we have
                  entered into a contract with you, we may process your personal
                  information to fulfill the terms of our contract.
                </li>
                <li>
                  <strong>Legal Obligations:</strong> We may disclose your
                  information where we are legally required to do so in order to
                  comply with applicable law, governmental requests, a judicial
                  proceeding, court order, or legal process, such as in response
                  to a court order or a subpoena (including in response to
                  public authorities to meet national security or law
                  enforcement requirements).
                </li>
                <li>
                  <strong>Vital Interests:</strong> We may disclose your
                  information where we believe it is necessary to investigate,
                  prevent, or take action regarding potential violations of our
                  policies, suspected fraud, situations involving potential
                  threats to the safety of any person and illegal activities, or
                  as evidence in litigation in which we are involved.
                </li>
              </ul>
              <p>
                More specifically, we may need to process your data or share
                your personal information in the following situations:
              </p>
              <ul>
                <li>
                  <strong>Business Transfers.</strong> We may share or transfer
                  your information in connection with, or during negoations of,
                  any merger, sale of company assets, financing, or acquisition
                  of all or a portion of our business to another company.
                </li>
                <li>
                  <strong>
                    Vendors, Consultants, and Other Third-Party Service
                    Providers.
                  </strong>{" "}
                  We may share your data with third-party vendors, service
                  providers, contractors or agents who perform services for us
                  or on our behalf and require acces to such information to do
                  that work. Examples include: payment processing, data
                  analysis, email delivery, hosting services, customer service
                  and marketing efforts. We may allow selected third parties to
                  use tracking technology on the Website, which will enable them
                  to collect data on our behalf about how you interact with our
                  Website over time. This information may be used to, among
                  other things, analyze and track data, determine the popularity
                  of certain content, pages or features, and better understand
                  online activity.{" "}
                  <strong>
                    Unless described in this Policy, we do not share, sell, rent
                    or trade any of your information with third parties for
                    their promotional purposes.
                  </strong>
                </li>
              </ul>
            </section>

            <section id="who-will-your-info-be-shared-with">
              <a
                className="headingLink"
                href="#who-will-your-info-be-shared-with"
              >
                <h2 className="uppercase">
                  4. Who will your information be shared with?
                </h2>
              </a>
              <p className="italic">
                <strong>In Short:</strong> We only share information with the
                following third parties.
              </p>
              <p>
                We only share and disclose your information with the following
                third parties. We have categorized each party so that you may
                easily understand the purpose of your data collection and
                processing practices. If we have processed your data based on
                your consent and you wish to revoke your consent, please contact
                us using the contact details provided in the section below
                titled{" "}
                <a href="#contact-us" className="uppercase">
                  How can you contact us about this Policy?
                </a>
                .
              </p>
              <ul>
                <li>
                  <strong>Cloud Computing Services</strong>
                  <div>Vercel</div>
                </li>
                <li>
                  <strong>Functionality and Infrastructure Optimization</strong>
                  <div>Cloud Firestore</div>
                </li>
                <li>
                  <strong>Invoice and Billing</strong>
                  <div>Stripe</div>
                </li>
                <li>
                  <strong>Web and Mobile Analytics</strong>
                  <div>Google Analytics</div>
                  <div>Vercel Analytics</div>
                </li>
                <li>
                  <strong>Web Hosting</strong>
                  <div>Vercel</div>
                </li>
                <li>
                  <strong>Email Subscription and Campaigns</strong>
                  <div>ConvertKit</div>
                </li>
              </ul>
            </section>

            <section id="how-long-do-we-keep-your-info">
              <a className="headingLink" href="#how-long-do-we-keep-your-info">
                <h2 className="uppercase">
                  5. How long do we keep your information?
                </h2>
              </a>
              <p className="italic">
                <strong>In Short:</strong> We keep your information for as long
                as necessary to fulfill the purposes outlined in this Policy
                unless otherwise required by law.
              </p>
              <p>
                We will only keep you personal information for as long as it is
                necessary for the purposes set out in this Policy, unless a
                longer retention period is required or permitted by law (such as
                tax, accounting or other legal requirements). No purpose in this
                Policy will require us keeping your personal information for
                longer than 90 days.
              </p>
              <p>
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such
                information, or, if this is not possible (for example, because
                your personal information has been stored in backup archives),
                then we will securely store your personal information and
                isolate it from any further processing until deletion is
                possible.
              </p>
            </section>

            <section id="keeping-your-info-safe">
              <a className="headingLink" href="#keeping-your-info-safe">
                <h2 className="uppercase">
                  6. How do we keep your information safe?
                </h2>
              </a>
              <p className="italic">
                <strong>In Short:</strong> We aim to protect your personal
                information through a system of organizational and technical
                security measures.
              </p>
              <p>
                We have implemented appropriate technical and organizational
                security measures designed to protect the security of any
                personal information we process. However, despite our safeguards
                and efforts to secure your information, no electronic
                transmission over the Internet or information storage technology
                can be guaranteed to be 100% secure, so we cannot promise or
                guarantee that hackers, cybercriminals, or other unauthorized
                third parties will not be able to defeat our security, and
                improperly collect, access, steal, or modify your information.
                Although we will do our best to protect your personal
                information, transmission of personal information to and from
                our Website is at your own risk. You should only access the
                Website within a secure environment.
              </p>
            </section>

            <section id="collecting-info-from-minors">
              <a className="headingLink" href="#collecting-info-from-minors">
                <h2 className="uppercase">
                  7. Do we collect information from minors?
                </h2>
              </a>
              <p className="italic">
                <strong>In Short:</strong> We do not knowingly collect data from
                or market to children under 18 years of age.
              </p>
              <p>
                We do not knowingly solicit data from or market to children
                under 18 years of age. By using the Website, you represent that
                you are at least 18 or that you are the parent or guardian of
                such a minor and consent to such minor dependent's use of the
                Website. If we learn that personal information from users less
                than 18 years of age has been collected, we will deactivate the
                account and take reasonable measures to promptly delete such
                data from our records. If you become aware of any data we may
                have collected from children under age 18, please contact us at{" "}
                <ExternalLink href={mailToLink(emails.privacyPolicy)}>
                  {emails.privacyPolicy}
                </ExternalLink>
                .
              </p>
            </section>

            <section id="your-privacy-rights">
              <a className="headingLink" href="#your-privacy-rights">
                <h2 className="uppercase">8. What are your privacy rights?</h2>
              </a>
              <p className="italic">
                <strong>In Short:</strong> You may review, change, or terminate
                your account at any time.
              </p>
              <p>
                If you are a resident in the European Economic Area and you
                believe we are unlawfully processing your personal information,
                you also have the right to complain to your local data
                protection supervisory authority. You can find their contact
                details here:{" "}
                <ExternalLink href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">
                  http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                </ExternalLink>
                .
              </p>
              <p>
                If you are a resident in Switzerland, the contact details for
                the data protection authorities are available here:{" "}
                <ExternalLink href="https://www.edoeb.admin.ch/edoeb/en/home.html">
                  https://www.edoeb.admin.ch/edoeb/en/home.html
                </ExternalLink>
                .
              </p>
            </section>

            <section id="controls-for-do-not-track-features">
              <a
                className="headingLink"
                href="#controls-for-do-not-track-features"
              >
                <h2 className="uppercase">
                  9. Controls for do-not-track features
                </h2>
              </a>
              <p>
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track ("DNT") feature or setting
                you can activate to signal your privacy preference not to have
                data about your online browsing activities monitored and
                collected. At this stage no uniform technology standard for
                recognizing and implementing DNT signals has been finalized. As
                such, we do not currently respond to DNT browser signals or any
                other mechanism that automatically communicates your choice not
                to be tracked online. If a standard for online tracking is
                adopted that we must follow in the future, we will inform you
                about that practice in a revised version of this Policy.
              </p>
            </section>

            <section id="california-residents-specific-rights">
              <a
                className="headingLink"
                href="#california-residents-specific-rights"
              >
                <h2 className="uppercase">
                  10. Do California residents have specific privacy rights?
                </h2>
              </a>
              <p className="italic">
                <strong>In Short:</strong> Yes, if you are a resident of
                California, you are granted specific rights regarding access to
                your personal information.
              </p>
              <p>
                California Civil Code Section 1798.83, also known as the "Shine
                The Light" law, permits our users who are California residents
                to request and obtain from us, once a year and free of charge,
                information about categories of personal information (if any) we
                disclosed to third parties for direct marketing purposes and the
                names and addresses of all third parties with which we shared
                personal information in the immediately preceding calendar year.
                If you are a California resident and would like to make such a
                request, please submit your request in writing to us using the
                contact information provided below.
              </p>
              <p>
                If you are under 18 years of age, reside in California, and have
                a registered account with the Website, you have the right to
                request removal of unwanted data that you publicly post on the
                Website. To request removal of such data, please contact us
                using the contact information provided below, and include the
                email address associated with your account and a statement that
                you reside in California. We will make sure the data is not
                publicly displayed on the Website, but please be aware that the
                data may not be completely or comprehensively removed from all
                our systems (e.g. backups, etc.).
              </p>
              <article>
                <h3>CCPA Privacy Notice</h3>
                <p>
                  The California Code of Regulations defines a "resident" as:
                </p>
                <ol>
                  <li>
                    every individual who is in the State of California for other
                    than a temporary or transitory purpose and
                  </li>
                  <li>
                    every individual who is domiciled in the State of California
                    who is outside the State of California for a temporary or
                    transitory purpose
                  </li>
                </ol>
                <p>All other individuals are defined as "non-residents."</p>
                <p>
                  If this definition of "resident" applies to you, we must
                  adhere to certain rights and obligations regarding your
                  personal information.
                </p>
                <h4>What categories of personal information do we collect?</h4>
                <p>
                  We have collected the following categories of personal
                  information in the past twelve (12) months:
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Examples</th>
                      <th>Collected</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>A. Identifiers</td>
                      <td>
                        Contact details, such as real name, alias, postal
                        address, telephone or mobile contact number, unique
                        personal identifier, online identifier, Internet
                        Protocol address, email address and account name
                      </td>
                      <td>YES</td>
                    </tr>
                    <tr>
                      <td>
                        B. Personal information categories listed in the
                        California Customer Records statute
                      </td>
                      <td>
                        Name, contact information, education, employment,
                        employment history and financial information
                      </td>
                      <td>YES</td>
                    </tr>
                    <tr>
                      <td>
                        C. Protected classification characteristics under
                        California or federal law
                      </td>
                      <td>Gender and date of birth</td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td>D. Commercial information</td>
                      <td>
                        Transaction information, purchase history, financial
                        details and payment information
                      </td>
                      <td>YES</td>
                    </tr>
                    <tr>
                      <td>E. Biometric information</td>
                      <td>Fingerprints and voiceprints</td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td>F. Internet or other similar network activity</td>
                      <td>
                        Browsing history, search history, online behavior,
                        interest data, and interactions with our and other
                        websites, applications, systems and advertisements
                      </td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td>G. Geolocation data</td>
                      <td>Device location</td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td>
                        H. Audio, electronic, visual, thermal, olfactory, or
                        similar information
                      </td>
                      <td>
                        Images and audio, video or call recordings created in
                        connection with our business activities
                      </td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td>I. Professional or employment-related information</td>
                      <td>
                        Business contact details in order to provide you our
                        services at a business level, job title as well as work
                        history and professional qualifications if you apply for
                        a job with us
                      </td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td>J. Education information</td>
                      <td>Student records and directory information</td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td>
                        K. Inferences drawn from other personal information
                      </td>
                      <td>
                        Inferences drawn from any of the collected personal
                        infromation listed above to create a profile or summary
                        about, for example, an individual's preferences and
                        characteristics
                      </td>
                      <td>NO</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  We may also collect other personal information outside of
                  these categories in instances where you interact with us
                  in-person, online, or by phone or mail in the context of:
                </p>
                <ul>
                  <li>Receiving help through our customer support channels;</li>
                  <li>Participation in customer surveys or contests; and</li>
                  <li>
                    Facilitation in the delivery of our Services and to respond
                    to your inquiries.
                  </li>
                </ul>
                <h4>How do we use and share your personal information?</h4>
                <p>
                  More information about our data collection and sharing
                  practices can be found in this Policy.
                </p>
                <p>
                  You may contact us by email at{" "}
                  <ExternalLink href={mailToLink(emails.privacyPolicy)}>
                    {emails.privacyPolicy}
                  </ExternalLink>
                  , by visiting{" "}
                  <Link href={routes.contact}>{fullRoutePath("contact")}</Link>,
                  or by referring to the contact details at the bottom of this
                  document.
                </p>
                <p>
                  If you are using an authorized agent to exercise your right to
                  opt-out, we may deny a request if the authorized agent does
                  not submit proof that they have been validly authorized to act
                  on your behalf.
                </p>
                <h4>Will your information be shared with anyone else?</h4>
                <p>
                  We may disclose your personal information wiht our service
                  providers pursuant to a written contract between us and each
                  service provider. Each service provider is a for-profit entity
                  that processes the information on our behalf.
                </p>
                <p>
                  The current list of our service providers can be found below.
                </p>
                <p>
                  We may use your personal information for our own business
                  purposes, such as for undertaking internal research for
                  technological development and demonstration. This is not
                  considered to be "selling" of your personal data.
                </p>
                <p>
                  Boring Cars Detailing & Wash Services LLC has disclosed the
                  following categories of personal information to third parties
                  for a business or commercial purpose in the preceding twelve
                  (12) months:
                </p>
                <ul>
                  <li>
                    Category A. Identifiers, such as contact details, like your
                    real name, alias, postal address, telephone or mobile
                    contact number, unique personal identifier, online
                    identifier, Internet Protocol address, email address and
                    account name.
                  </li>
                  <li>
                    Category B. Personal information, as defined in the
                    California Customer Records law, such as your name, contact
                    information, education, employment, employment history and
                    financial information.
                  </li>
                  <li>
                    {" "}
                    Category D. Commercial information, like transaction
                    information, purchase history, financial details and payment
                    information
                  </li>
                </ul>
                <p>
                  The categories of third parties to whom we disclosed personal
                  information for a business or commercial purpose can be found
                  under{" "}
                  <a
                    href="#who-will-your-info-be-shared-with"
                    className="uppercase"
                  >
                    Who will your information be shared with?
                  </a>
                  .
                </p>
                <h4>Your rights with respect to your personal data</h4>
                <h5>
                  Right to request deletion of the data - Request to delete
                </h5>
                <p>
                  You can ask for the deletion of your personal information. If
                  you ask us to delete your personal information, we will
                  respect your request and delete your personal information,
                  subject to certain exceptions provided by law, such as (but
                  not limited to) to the exercise by another consumer of his or
                  her right to free speech, our compliance requirements
                  resulting from a legal obligation or any processing that may
                  be required to protect against illegal activities.
                </p>
                <h5>Right to be informed - Request to know</h5>
                <p>Depending on the circumstances, you have a right to know:</p>
                <ul>
                  <li>whether we collect and use your personal information;</li>
                  <li>
                    the categories of personal information that we collect;
                  </li>
                  <li>
                    the purposes for which the collected personal information is
                    used;
                  </li>
                  <li>
                    whether we sell your personal information to third parties;
                  </li>
                  <li>
                    the categories of personal information that we sold or
                    disclosed for a business purpose;
                  </li>
                  <li>
                    the categories of third parties to whom the personal
                    information was sold or disclosed for a business purpose;
                    and
                  </li>
                  <li>
                    the business or commercial purpose for collecting or selling
                    personal information.
                  </li>
                </ul>
                <p>
                  In accordance with applicable law, we are not obligated to
                  provide or delete consumer information that is de-identified
                  in response to a consumer request or to re-identify individual
                  data to verify a consumer request.
                </p>
                <h5>
                  Right to Non-Discrimination for the Exercise of a Consumer's
                  Privacy Rights
                </h5>
                <p>
                  We will not discriminate against you if you exercise your
                  privacy rights.
                </p>
                <h5>Verification process</h5>
                <p>
                  Upon receiving your request, we will need to verify your
                  identity to determine you are the same person about whom we
                  have the information in our system. These verification efforts
                  require us to ask you to provide information so that we can
                  match it with information you have previously provided us. For
                  instance, depending on the type of request you submit, we may
                  ask you to provide certain information so that we can match
                  the information you provide with the information we already
                  have on file, or we may contact you through a communication
                  method (e.g. phone or email) that you have previously provided
                  to us. We may also use other verification methods as the
                  circumstances dictate.
                </p>
                <p>
                  We will only use personal information provided in your request
                  to verify your identity or authority to make the request. To
                  the extent possible, we will avoid requesting additional
                  information from you for the purposes of verification. If,
                  however, we cannot verify your identity from the information
                  already maintained by us, we may request that you provide
                  additional information for the purposes of verifying your
                  identity, and for security or fraud-prevention purposes. We
                  will delete such additionally provided information as soon as
                  we finish verifying you.
                </p>
                <h5>Other privacy rights</h5>
                <ul>
                  <li>
                    you may object to the processing of your personal data
                  </li>
                  <li>
                    you may request correction of your personal data if it is
                    incorrect or no longer relevant, or ask to restrict the
                    processing of the data
                  </li>
                  <li>
                    you can designate an authorized agent to make a request
                    under the CCPA on your behalf. We may deny a request from an
                    authorized agent that does not submit proof that they have
                    been validly authorized to act on your behalf in accordance
                    with the CCPA.
                  </li>
                  <li>
                    you may request to opt-out from future selling of your
                    personal information to third parties. Upon receiving a
                    request to opt-out, we will act upon the request as soon as
                    feasibly possible, but no later than 15 days from the date
                    of the request submission.
                  </li>
                </ul>
                <p>
                  To exercise these rights, you can contact us by email at{" "}
                  <ExternalLink href={mailToLink(emails.privacyPolicy)}>
                    {emails.privacyPolicy}
                  </ExternalLink>
                  , by visiting{" "}
                  <Link href={routes.contact}>{fullRoutePath("contact")}</Link>,
                  or by referring to the contact details at the bottom of this
                  document. If you have a complaint about how we handle your
                  data, we would like to hear from you.
                </p>
              </article>
            </section>

            <section id="policy-updates">
              <a className="headingLink" href="#policy-updates">
                <h2 className="uppercase">
                  11. Do we make updates to this Policy?
                </h2>
              </a>
              <p className="italic">
                <strong>In Short:</strong> Yes, we will update this Policy as
                necessary to stay compliant with relevant laws.
              </p>
              <p>
                We may update this Policy from time to time. The updated version
                will be indicated by an updated "Revised" date and the updated
                version will be effective as soon as it is accessible. If we
                make material changes to this Policy, we may notify you either
                by prominetly posting a notice of such changes or by directly
                sending you a notification. We encourage you to review this
                Policy frequently to be informed of how we are protecting your
                information.
              </p>
            </section>

            <section id="contact-us">
              <a className="headingLink" href="#contact-us">
                <h2 className="uppercase">
                  12. How can you contact us about this Policy?
                </h2>
              </a>
              <p>
                If you have questions or comments about this Policy, you may
                email us at{" "}
                <ExternalLink href={mailToLink(emails.privacyPolicy)}>
                  {emails.privacyPolicy}
                </ExternalLink>{" "}
                or by post to:
              </p>
              <p>
                Boring Cars Detailing & Wash Services LLC
                <br />
                1038 Second st Apt 24
                <br />
                Lafayette, CA 94549
                <br />
                United States
              </p>
            </section>

            <section id="review-update-delete-data">
              <a className="headingLink" href="#review-update-delete-data">
                <h2 className="uppercase">
                  13. How can you review, update, or delete the data we collect
                  from you?
                </h2>
              </a>
              <p>
                Based on the applicable laws of your country, you may have the
                right to request access to the personal information we collect
                from you, change that information, or delete it in some
                circumstances. To request to review, update, or delete your
                personal information, please submit a request form by clicking{" "}
                <Link href={routes.contact}>here</Link>. We will respond to your
                request within 30 days.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
