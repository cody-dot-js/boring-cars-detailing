import { ExternalLink } from "components/ExternalLink";
import { getPageLayout } from "components/Layout";
import { GetStaticProps } from "next";
import { Link } from "components/Link";
import { PageMeta, pageMeta } from "utils/pageMeta";
import { emails, name, routes, shortName } from "config";
import { mailToLink } from "utils/mailToLink";
import type { BasePageProps } from "types/BasePageProps";
import { Page } from "types/PageLayout";

interface Props extends BasePageProps {
  meta: PageMeta;
}

export const getStaticProps: GetStaticProps = async () => {
  const props: Props = {
    meta: pageMeta(),
    seo: {
      title: "Terms of Service",
      description: `${shortName} Terms of Service`,
    },
  };

  return {
    props,
  };
};

const TermsOfService: Page = () => {
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
                TERMS OF SERVICE
              </span>
              <span className="mt-2 block text-base text-center text-cyan-200 font-semibold tracking-wide uppercase">
                Last Updated: January 30, 2021
              </span>
            </h1>
            <h2>OVERVIEW</h2>
            <p>
              This website is operated by{" "}
              <strong>
                {name} (&quot;{shortName}&quot;)
              </strong>{" "}
              . Throughout the site, the terms “we”, “us” and “our” refer to{" "}
              <strong>{shortName}</strong>. <strong>{shortName}</strong> offers
              this website, including all information, tools and services
              available from this site to you, the user, conditioned upon your
              acceptance of all terms, conditions, policies and notices stated
              here.
            </p>
            <p>
              By visiting our site and/or purchasing something from us, you
              engage in our “Service” and agree to be bound by the following
              terms and conditions (“Terms of Service”, “Terms”), including
              those additional terms and conditions and policies referenced
              herein and/or available by hyperlink. These Terms of Service apply
              to all users of the site, including without limitation users who
              are browsers, vendors, customers, merchants, and/ or contributors
              of content.
            </p>
            <p>
              <strong>
                Please read these Terms of Service carefully before accessing or
                using our website. By accessing or using any part of the site,
                you agree to be bound by these Terms of Service. If you do not
                agree to all the terms and conditions of this agreement, then
                you may not access the website or use any services. If these
                Terms of Service are considered an offer, acceptance is
                expressly limited to these Terms of Service.
              </strong>
            </p>
            <p>
              Any new features or tools which are added to the current store
              shall also be subject to the Terms of Service. You can review the
              most current version of the Terms of Service at any time on this
              page. We reserve the right to update, change or replace any part
              of these Terms of Service by posting updates and/or changes to our
              website. It is your responsibility to check this page periodically
              for changes. Your continued use of or access to the website
              following the posting of any changes constitutes acceptance of
              those changes.
            </p>
            <p>
              Our store is hosted on Vercel and backed by Stripe. They provide
              us with the online e-commerce platform that allows us to sell our
              products and services to you.
            </p>
          </div>
          <div className="prose max-w-prose prose-lg mx-auto">
            <section id="toc">
              <a className="headingLink" href="#toc">
                <h2 className="uppercase">Table of Contents</h2>
              </a>
              <ul>
                <li>
                  <a href="#online-store-terms" className="uppercase">
                    Section 1 - Online Store Terms
                  </a>
                </li>
                <li>
                  <a href="#general-conditions" className="uppercase">
                    Section 2 - General Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#accuracy-completeness-timeliness-info"
                    className="uppercase"
                  >
                    Section 3 - Accuracy, Completeness and Timeliness of
                    Information
                  </a>
                </li>
                <li>
                  <a
                    href="#modifications-to-service-and-prices"
                    className="uppercase"
                  >
                    Section 4 - Modifications to the Service and Prices
                  </a>
                </li>
                <li>
                  <a href="#products-or-services" className="uppercase">
                    Section 5 - Products or Services (if applicable)
                  </a>
                </li>
                <li>
                  <a
                    href="#accuracy-billing-account-info"
                    className="uppercase"
                  >
                    Section 6 - Accuracy of Billing and Account Information
                  </a>
                </li>
                <li>
                  <a href="#optional-tools" className="uppercase">
                    Section 7 - Optional Tools
                  </a>
                </li>
                <li>
                  <a href="#third-party-links" className="uppercase">
                    Section 8 - Third-Party Links
                  </a>
                </li>
                <li>
                  <a
                    href="#user-comments-feedback-submissions"
                    className="uppercase"
                  >
                    Section 9 - User Comments, Feedback and Other Submissions
                  </a>
                </li>
                <li>
                  <a href="#personal-info" className="uppercase">
                    Section 10 - Personal Information
                  </a>
                </li>
                <li>
                  <a
                    href="#errors-inaccuracies-omissions"
                    className="uppercase"
                  >
                    Section 11 - Errors, Inaccuracies and Omissions
                  </a>
                </li>
                <li>
                  <a href="#prohibited-uses" className="uppercase">
                    Section 12 - Prohibited Uses
                  </a>
                </li>
                <li>
                  <a
                    href="#disclaimer-warranties-limitation-of-liability"
                    className="uppercase"
                  >
                    Section 13 - Disclaimer of Warranties; Limitation of
                    Liability
                  </a>
                </li>
                <li>
                  <a href="#idemnification" className="uppercase">
                    Section 14 - Idemnification
                  </a>
                </li>
                <li>
                  <a href="#severability" className="uppercase">
                    Section 15 - Severability
                  </a>
                </li>
                <li>
                  <a href="#termination" className="uppercase">
                    Section 16 - Termination
                  </a>
                </li>
                <li>
                  <a href="#entire-agreement" className="uppercase">
                    Section 17 - Entire Agreement
                  </a>
                </li>
                <li>
                  <a href="#governing-law" className="uppercase">
                    Section 18 - Governing Law
                  </a>
                </li>
                <li>
                  <a href="#tos-changes" className="uppercase">
                    Section 19 - Changes to Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#contact-info" className="uppercase">
                    Section 20 - Contact Information
                  </a>
                </li>
              </ul>
            </section>

            <section id="online-store-terms">
              <a className="headingLink" href="#online-store-terms">
                <h2 className="uppercase">SECTION 1 - ONLINE STORE TERMS</h2>
              </a>
              <p>
                By agreeing to these Terms of Service, you represent that you
                are at least the age of majority in your state or province of
                residence, or that you are the age of majority in your state or
                province of residence and you have given us your consent to
                allow any of your minor dependents to use this site.
              </p>
              <p>
                You may not use our products for any illegal or unauthorized
                purpose nor may you, in the use of the Service, violate any laws
                in your jurisdiction (including but not limited to copyright
                laws).
              </p>
              <p>
                You must not transmit any worms or viruses or any code of a
                destructive nature.
              </p>
              <p>
                A breach or violation of any of the Terms will result in an
                immediate termination of your Services.
              </p>
            </section>

            <section id="general-conditions">
              <a className="headingLink" href="#general-conditions">
                <h2 className="uppercase">SECTION 2 - GENERAL CONDITIONS</h2>
              </a>
              <p>
                We reserve the right to refuse service to anyone for any reason
                at any time.
              </p>
              <p>
                You understand that your content (not including credit card
                information), may be transferred unencrypted and involve (a)
                transmissions over various networks; and (b) changes to conform
                and adapt to technical requirements of connecting networks or
                devices. Credit card information is always encrypted during
                transfer over networks.
              </p>
              <p>
                You agree not to reproduce, duplicate, copy, sell, resell or
                exploit any portion of the Service, use of the Service, or
                access to the Service or any contact on the website through
                which the service is provided, without express written
                permission by us.
              </p>
              <p>
                The headings used in this agreement are included for convenience
                only and will not limit or otherwise affect these Terms.
              </p>
            </section>

            <section id="accuracy-completeness-timeliness-info">
              <a
                className="headingLink"
                href="#accuracy-completeness-timeliness-info"
              >
                <h2 className="uppercase">
                  SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF
                  INFORMATION
                </h2>
              </a>
              <p>
                We are not responsible if information made available on this
                site is not accurate, complete or current. The material on this
                site is provided for general information only and should not be
                relied upon or used as the sole basis for making decisions
                without consulting primary, more accurate, more complete or more
                timely sources of information. Any reliance on the material on
                this site is at your own risk.
              </p>
              <p>
                This site may contain certain historical information. Historical
                information, necessarily, is not current and is provided for
                your reference only. We reserve the right to modify the contents
                of this site at any time, but we have no obligation to update
                any information on our site. You agree that it is your
                responsibility to monitor changes to our site.
              </p>
            </section>

            <section id="modifications-to-service-and-prices">
              <a
                className="headingLink"
                href="#modifications-to-service-and-prices"
              >
                <h2 className="uppercase">
                  SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES
                </h2>
              </a>
              <p>
                Prices for our products are subject to change without notice.
              </p>
              <p>
                We reserve the right at any time to modify or discontinue the
                Service (or any part or content thereof) without notice at any
                time.
              </p>
              <p>
                We shall not be liable to you or to any third-party for any
                modification, price change, suspension or discontinuance of the
                Service.
              </p>
            </section>

            <section id="products-or-services">
              <a className="headingLink" href="#products-or-services">
                <h2 className="uppercase">
                  SECTION 5 - PRODUCTS OR SERVICES (if applicable)
                </h2>
              </a>
              <p>
                Certain products or services may be available exclusively online
                through the website. These products or services may have limited
                quantities and are subject to return or exchange only according
                to our Return Policy.
              </p>
              <p>
                We have made every effort to display as accurately as possible
                the colors and images of our products that appear at the store.
                We cannot guarantee that your computer monitor&apos;s display of any
                color will be accurate.
              </p>
              <p>
                We reserve the right, but are not obligated, to limit the sales
                of our products or Services to any person, geographic region or
                jurisdiction. We may exercise this right on a case-by-case
                basis. We reserve the right to limit the quantities of any
                products or services that we offer. All descriptions of products
                or product pricing are subject to change at anytime without
                notice, at the sole discretion of us. We reserve the right to
                discontinue any product at any time. Any offer for any product
                or service made on this site is void where prohibited.
              </p>
              <p>
                We do not warrant that the quality of any products, services,
                information, or other material purchased or obtained by you will
                meet your expectations, or that any errors in the Service will
                be corrected.
              </p>
            </section>

            <section id="accuracy-billing-account-info">
              <a className="headingLink" href="#accuracy-billing-account-info">
                <h2 className="uppercase">
                  SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION
                </h2>
              </a>
              <p>
                We reserve the right to refuse any order you place with us. We
                may, in our sole discretion, limit or cancel quantities
                purchased per person, per household or per order. These
                restrictions may include orders placed by or under the same
                customer account, the same credit card, and/or orders that use
                the same billing and/or shipping address. In the event that we
                make a change to or cancel an order, we may attempt to notify
                you by contacting the e-mail and/or billing address/phone number
                provided at the time the order was made. We reserve the right to
                limit or prohibit orders that, in our sole judgment, appear to
                be placed by dealers, resellers or distributors.
              </p>
              <p>
                You agree to provide current, complete and accurate purchase and
                account information for all purchases made at our store. You
                agree to promptly update your account and other information,
                including your email address and credit card numbers and
                expiration dates, so that we can complete your transactions and
                contact you as needed.
              </p>
              {/* TODO(cody): make a returns policy? */}
              <p>For more detail, please review our Returns Policy.</p>
            </section>

            <section id="optional-tools">
              <a className="headingLink" href="#optional-tools">
                <h2 className="uppercase">SECTION 7 - OPTIONAL TOOLS</h2>
              </a>
              <p>
                We may provide you with access to third-party tools over which
                we neither monitor nor have any control nor input.
              </p>
              <p>
                You acknowledge and agree that we provide access to such tools
                ”as is” and “as available” without any warranties,
                representations or conditions of any kind and without any
                endorsement. We shall have no liability whatsoever arising from
                or relating to your use of optional third-party tools.
              </p>
              <p>
                Any use by you of optional tools offered through the site is
                entirely at your own risk and discretion and you should ensure
                that you are familiar with and approve of the terms on which
                tools are provided by the relevant third-party provider(s).
              </p>
              <p>
                We may also, in the future, offer new services and/or features
                through the website (including, the release of new tools and
                resources). Such new features and/or services shall also be
                subject to these Terms of Service.
              </p>
            </section>

            <section id="third-party-links">
              <a className="headingLink" href="#third-party-links">
                <h2 className="uppercase">SECTION 8 - THIRD-PARTY LINKS</h2>
              </a>
              <p>
                Certain content, products and services available via our Service
                may include materials from third-parties.
              </p>
              <p>
                Third-party links on this site may direct you to third-party
                websites that are not affiliated with us. We are not responsible
                for examining or evaluating the content or accuracy and we do
                not warrant and will not have any liability or responsibility
                for any third-party materials or websites, or for any other
                materials, products, or services of third-parties.
              </p>
              <p>
                We are not liable for any harm or damages related to the
                purchase or use of goods, services, resources, content, or any
                other transactions made in connection with any third-party
                websites. Please review carefully the third-party&apos;s policies and
                practices and make sure you understand them before you engage in
                any transaction. Complaints, claims, concerns, or questions
                regarding third-party products should be directed to the
                third-party.
              </p>
            </section>

            <section id="user-comments-feedback-submissions">
              <a
                className="headingLink"
                href="#user-comments-feedback-submissions"
              >
                <h2 className="uppercase">
                  SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS
                </h2>
              </a>
              <p>
                If, at our request, you send certain specific submissions (for
                example contest entries) or without a request from us you send
                creative ideas, suggestions, proposals, plans, or other
                materials, whether online, by email, by postal mail, or
                otherwise (collectively, &apos;comments&apos;), you agree that we may, at
                any time, without restriction, edit, copy, publish, distribute,
                translate and otherwise use in any medium any comments that you
                forward to us. We are and shall be under no obligation (1) to
                maintain any comments in confidence; (2) to pay compensation for
                any comments; or (3) to respond to any comments.
              </p>
              <p>
                We may, but have no obligation to, monitor, edit or remove
                content that we determine in our sole discretion are unlawful,
                offensive, threatening, libelous, defamatory, pornographic,
                obscene or otherwise objectionable or violates any party’s
                intellectual property or these Terms of Service.
              </p>
              <p>
                You agree that your comments will not violate any right of any
                third-party, including copyright, trademark, privacy,
                personality or other personal or proprietary right. You further
                agree that your comments will not contain libelous or otherwise
                unlawful, abusive or obscene material, or contain any computer
                virus or other malware that could in any way affect the
                operation of the Service or any related website. You may not use
                a false e-mail address, pretend to be someone other than
                yourself, or otherwise mislead us or third-parties as to the
                origin of any comments. You are solely responsible for any
                comments you make and their accuracy. We take no responsibility
                and assume no liability for any comments posted by you or any
                third-party.
              </p>
            </section>

            <section id="personal-info">
              <a className="headingLink" href="#personal-info">
                <h2 className="uppercase">SECTION 10 - PERSONAL INFORMATION</h2>
              </a>
              <p>
                Your submission of personal information through the store is
                governed by our Privacy Policy. To view our Privacy Policy,
                click <Link href={routes.privacyPolicy}>here</Link>.
              </p>
            </section>

            <section id="errors-inaccuracies-omissions">
              <a className="headingLink" href="#errors-inaccuracies-omissions">
                <h2 className="uppercase">
                  SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS
                </h2>
              </a>
              <p>
                Occasionally there may be information on our site or in the
                Service that contains typographical errors, inaccuracies or
                omissions that may relate to product descriptions, pricing,
                promotions, offers, product shipping charges, transit times and
                availability. We reserve the right to correct any errors,
                inaccuracies or omissions, and to change or update information
                or cancel orders if any information in the Service or on any
                related website is inaccurate at any time without prior notice
                (including after you have submitted your order).
              </p>
              <p>
                We undertake no obligation to update, amend or clarify
                information in the Service or on any related website, including
                without limitation, pricing information, except as required by
                law. No specified update or refresh date applied in the Service
                or on any related website, should be taken to indicate that all
                information in the Service or on any related website has been
                modified or updated.
              </p>
            </section>

            <section id="prohibited-uses">
              <a className="headingLink" href="#prohibited-uses">
                <h2 className="uppercase">SECTION 12 - PROHIBITED USES</h2>
              </a>
              <p>
                In addition to other prohibitions as set forth in the Terms of
                Service, you are prohibited from using the site or its content:
                (a) for any unlawful purpose; (b) to solicit others to perform
                or participate in any unlawful acts; (c) to violate any
                international, federal, provincial or state regulations, rules,
                laws, or local ordinances; (d) to infringe upon or violate our
                intellectual property rights or the intellectual property rights
                of others; (e) to harass, abuse, insult, harm, defame, slander,
                disparage, intimidate, or discriminate based on gender, sexual
                orientation, religion, ethnicity, race, age, national origin, or
                disability; (f) to submit false or misleading information; (g)
                to upload or transmit viruses or any other type of malicious
                code that will or may be used in any way that will affect the
                functionality or operation of the Service or of any related
                website, other websites, or the Internet; (h) to collect or
                track the personal information of others; (i) to spam, phish,
                pharm, pretext, spider, crawl, or scrape; (j) for any obscene or
                immoral purpose; or (k) to interfere with or circumvent the
                security features of the Service or any related website, other
                websites, or the Internet. We reserve the right to terminate
                your use of the Service or any related website for violating any
                of the prohibited uses.
              </p>
            </section>

            <section id="disclaimer-warranties-limitation-of-liability">
              <a
                className="headingLink"
                href="#disclaimer-warranties-limitation-of-liability"
              >
                <h2 className="uppercase">
                  SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
                </h2>
              </a>
              <p>
                We do not guarantee, represent or warrant that your use of our
                service will be uninterrupted, timely, secure or error-free.
              </p>
              <p>
                We do not warrant that the results that may be obtained from the
                use of the service will be accurate or reliable.
              </p>
              <p>
                You agree that from time to time we may remove the service for
                indefinite periods of time or cancel the service at any time,
                without notice to you.
              </p>
              <p>
                You expressly agree that your use of, or inability to use, the
                service is at your sole risk. The service and all products and
                services delivered to you through the service are (except as
                expressly stated by us) provided &apos;as is&apos; and &apos;as available&apos; for
                your use, without any representation, warranties or conditions
                of any kind, either express or implied, including all implied
                warranties or conditions of merchantability, merchantable
                quality, fitness for a particular purpose, durability, title,
                and non-infringement.
              </p>
              <p>
                In no case shall <strong>{shortName}</strong>, our directors,
                officers, employees, affiliates, agents, contractors, interns,
                suppliers, service providers or licensors be liable for any
                injury, loss, claim, or any direct, indirect, incidental,
                punitive, special, or consequential damages of any kind,
                including, without limitation lost profits, lost revenue, lost
                savings, loss of data, replacement costs, or any similar
                damages, whether based in contract, tort (including negligence),
                strict liability or otherwise, arising from your use of any of
                the service or any products procured using the service, or for
                any other claim related in any way to your use of the service or
                any product, including, but not limited to, any errors or
                omissions in any content, or any loss or damage of any kind
                incurred as a result of the use of the service or any content
                (or product) posted, transmitted, or otherwise made available
                via the service, even if advised of their possibility. Because
                some states or jurisdictions do not allow the exclusion or the
                limitation of liability for consequential or incidental damages,
                in such states or jurisdictions, our liability shall be limited
                to the maximum extent permitted by law.
              </p>
            </section>

            <section id="idemnification">
              <a className="headingLink" href="#idemnification">
                <h2 className="uppercase">SECTION 14 - INDEMNIFICATION</h2>
              </a>
              <p>
                You agree to indemnify, defend and hold harmless Boring Cars
                Detailing & Wash Services LLC and our parent, subsidiaries,
                affiliates, partners, officers, directors, agents, contractors,
                licensors, service providers, subcontractors, suppliers, interns
                and employees, harmless from any claim or demand, including
                reasonable attorneys’ fees, made by any third-party due to or
                arising out of your breach of these Terms of Service or the
                documents they incorporate by reference, or your violation of
                any law or the rights of a third-party.
              </p>
            </section>

            <section id="severability">
              <a className="headingLink" href="#severability">
                <h2 className="uppercase">SECTION 15 - SEVERABILITY</h2>
              </a>
              <p>
                In the event that any provision of these Terms of Service is
                determined to be unlawful, void or unenforceable, such provision
                shall nonetheless be enforceable to the fullest extent permitted
                by applicable law, and the unenforceable portion shall be deemed
                to be severed from these Terms of Service, such determination
                shall not affect the validity and enforceability of any other
                remaining provisions.
              </p>
            </section>

            <section id="termination">
              <a className="headingLink" href="#termination">
                <h2 className="uppercase">SECTION 16 - TERMINATION</h2>
              </a>
              <p>
                The obligations and liabilities of the parties incurred prior to
                the termination date shall survive the termination of this
                agreement for all purposes.
              </p>
              <p>
                These Terms of Service are effective unless and until terminated
                by either you or us. You may terminate these Terms of Service at
                any time by notifying us that you no longer wish to use our
                Services, or when you cease using our site.
              </p>
              <p>
                If in our sole judgment you fail, or we suspect that you have
                failed, to comply with any term or provision of these Terms of
                Service, we also may terminate this agreement at any time
                without notice and you will remain liable for all amounts due up
                to and including the date of termination; and/or accordingly may
                deny you access to our Services (or any part thereof).
              </p>
            </section>

            <section id="entire-agreement">
              <a className="headingLink" href="#entire-agreement">
                <h2 className="uppercase">SECTION 17 - ENTIRE AGREEMENT</h2>
              </a>
              <p>
                The failure of us to exercise or enforce any right or provision
                of these Terms of Service shall not constitute a waiver of such
                right or provision.
              </p>
              <p>
                These Terms of Service and any policies or operating rules
                posted by us on this site or in respect to The Service
                constitutes the entire agreement and understanding between you
                and us and govern your use of the Service, superseding any prior
                or contemporaneous agreements, communications and proposals,
                whether oral or written, between you and us (including, but not
                limited to, any prior versions of the Terms of Service).
              </p>
              <p>
                Any ambiguities in the interpretation of these Terms of Service
                shall not be construed against the drafting party.
              </p>
            </section>

            <section id="governing-law">
              <a className="headingLink" href="#governing-law">
                <h2 className="uppercase">SECTION 18 - GOVERNING LAW</h2>
              </a>
              <p>
                These Terms of Service and any separate agreements whereby we
                provide you Services shall be governed by and construed in
                accordance with the laws of 1038 Second st Apt 24, Lafayette,
                CA, 94549, United States.
              </p>
            </section>

            <section id="tos-changes">
              <a className="headingLink" href="#tos-changes">
                <h2 className="uppercase">
                  SECTION 19 - CHANGES TO TERMS OF SERVICE
                </h2>
              </a>
              <p>
                You can review the most current version of the Terms of Service
                at any time at this page.
              </p>
              <p>
                We reserve the right, at our sole discretion, to update, change
                or replace any part of these Terms of Service by posting updates
                and changes to our website. It is your responsibility to check
                our website periodically for changes. Your continued use of or
                access to our website or the Service following the posting of
                any changes to these Terms of Service constitutes acceptance of
                those changes.
              </p>
            </section>

            <section id="contact-info">
              <a className="headingLink" href="#contact-info">
                <h2 className="uppercase">SECTION 20 - CONTACT INFORMATION</h2>
              </a>
              <p>
                Questions about the Terms of Service should be sent to us at{" "}
                <ExternalLink href={mailToLink(emails.tos)}>
                  {emails.tos}
                </ExternalLink>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

TermsOfService.pageLayout = getPageLayout;

export default TermsOfService;
