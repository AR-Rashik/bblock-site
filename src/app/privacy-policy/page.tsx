/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { Footer } from "@/components/shared/footer/Footer";
import { Navbar } from "@/components/shared/navbar/Navbar";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="mb-32 mt-24 px-10 md:container md:mx-auto md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-black tracking-tighter text-primary md:leading-snug lg:text-6xl">
            Privacy Policy
          </h1>
          <div className="h-3 w-96 bg-primary opacity-20"></div>
          <h3 className="mx-auto mt-2 w-5/6 pb-6 text-center text-base font-medium text-foreground/80 sm:w-4/6">
            Last updated on August 28, 2024
          </h3>
          <p className="text-jus mt-5 text-base leading-6 text-muted-foreground ">
            Thank you for visiting our website. We are committed to protecting
            your privacy and ensuring the security of your personal information.
            This Privacy Policy outlines the types of data we collect, how we
            use it, and the choices you have regarding your information.
          </p>
          <p className="mt-5 text-justify text-base leading-6 text-muted-foreground ">
            Concerned about respecting the privacy of its users, B-block is
            committed to ensuring the protection of the personal data of its
            users. Therefore, no data transmitted through our website can be
            accessed by an unauthorized third party. B-block takes all necessary
            precautions to preserve the security of this data, notably
            preventing it from being distorted or damaged.
          </p>
          <p className="mt-10 text-justify text-base font-medium leading-6 text-foreground/80">
            B-block processes all user data in accordance with this privacy
            policy.
          </p>
        </div>

        {/* Policy content */}
        <div className="mx-auto my-10 flex flex-col items-center justify-center gap-12 text-justify text-base leading-6 text-muted-foreground">
          <div>
            <h3 className="pb-4 text-left text-xl font-bold text-foreground/90">
              I. Definitions
            </h3>
            <ul style={{ listStyleType: "disc" }} className="ml-10">
              <li>
                Personal data: any information relating to an identified or
                identifiable natural person, directly or indirectly, by
                reference to an identification number or one or more elements
                specific to that person.
              </li>
              <li>
                User: any adult individual, or legal entity, using the services
                offered on the{" "}
                <a
                  href="https://bblock.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sky-500 underline-offset-2 hover:underline  dark:text-sky-600"
                >
                  bblock.fr{" "}
                </a>{" "}
                website, which can be either an individual or a professional.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="pb-4 text-left text-xl font-bold text-foreground/90">
              II. Collection and dissemination of personal data
            </h3>
            B-block may collect personal data related to the User, particularly
            when:
            <br /> <br />
            <ul style={{ listStyleType: "disc" }} className="ml-10">
              <li>Browsing the Site</li>
              <li>TCreating an account</li>
              <li>Creating/Submitting a Document</li>
              <li>Payment for a Service</li>
              <li>Requesting information or contacting</li>
              <li>Writing a comment</li>
            </ul>
            <br />
            The information that may be collected by B-block relates to the
            User's identity, postal and/or electronic contact details, a credit
            card number, or connection data. <br />
            All personal data collected by B-block is mandatory and necessary to
            benefit from the services offered by B-block . Each data collected
            by the Company is in accordance with the purpose(s) pursued. <br />
            All personal data collected by B-block may be transmitted to
            external service providers to ensure the proper functioning of the
            Services, particularly the effective processing of payment. During
            online payment, all transmitted personal data is protected. <br />
          </div>
          <div>
            <h3 className="pb-4 text-left text-xl font-bold text-foreground/90">
              III. Retention of personal data
            </h3>
            The User's personal data is kept until its deletion at the request
            of the User or by the Company. <br />
            B-block will keep proof of the transaction, including the purchase
            order and the invoice, in its computer systems and under reasonable
            security conditions, in accordance with the provisions of the
            Commercial Code relating to the retention period of books and
            documents created on the occasion of commercial activities, and the
            Consumer Code relating to the retention of contracts concluded
            electronically, namely ten years.
          </div>
          <div>
            <h3 className="pb-4 text-left text-xl font-bold text-foreground/90">
              IV. Hosting of personal data
            </h3>
            The{" "}
            <a
              href="https://bblock.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-500 underline-offset-2 hover:underline  dark:text-sky-600"
            >
              bblock.fr{" "}
            </a>{" "}
            website is hosted by{" "}
            <a
              href="https://www.digitalocean.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-500 underline-offset-2 hover:underline  dark:text-sky-600"
            >
              DigitalOcean{" "}
            </a>{" "}
            Inc. Address:{" "}
            <address className="inline-flex">
              101 6th Ave, New York, NY 10013, United States.
            </address>{" "}
            Phone:{" "}
            <a
              href="tel:+1 347-903-7918"
              className="font-semibold text-sky-500 underline-offset-2 hover:underline  dark:text-sky-600"
            >
              +1 347-903-7918
            </a>{" "}
            .&nbsp; The storage of Users' personal data is exclusively carried
            out on data centers ("clusters") located in Member States of the
            European Union of the company DigitalOcean Inc.
          </div>
          <div>
            <h3 className="pb-4 text-left text-xl font-bold text-foreground/90">
              V. Right of access and deletion of personal data by the User
            </h3>
            In accordance with the provisions of Law 78-17 of January 6, 1978,
            as amended, the User has the right to access the information
            collected by B-block :
            <br /> <br />
            <ul style={{ listStyleType: "disc" }} className="ml-10">
              <li>
                The User can request the modification of their data at any time.
              </li>
              <li>
                The User can request the correction of erroneous data at any
                time.
              </li>
              <li>
                The User can request the deletion of existing data at any time.
              </li>
            </ul>
            <br />
            To exercise this right, it will be up to the User to send a message
            to the following address: &nbsp;
            <a
              href="mailto:bblock1971@gmail.com."
              className="font-semibold text-sky-500 underline-offset-2 hover:underline  dark:text-sky-600"
            >
              bblock1971@gmail.com
            </a>
            .
          </div>
          <div>
            <h3 className="pb-4 text-left text-xl font-bold text-foreground/90">
              VI. Use of cookies
            </h3>
            B-block informs the User that it may use cookies. The latter
            expressly accepts the use of cookies by continuing to browse the
            site. <br />
            A cookie is a text file that may be saved in a terminal when
            consulting an online service with browsing software. A cookie file
            allows its issuer, during its validity period, to recognize the
            relevant terminal each time that terminal accesses digital content
            containing cookies from the same issuer. <br /> <br />
            The cookies issued by B-block allow us to: <br /> <br />
            <ul style={{ listStyleType: "disc" }} className="ml-10">
              <li>
                Establish statistics and traffic volumes and use of the various
                elements that make up our Site, allowing us to improve the
                configuration, interest, design, and ergonomics of our services.
              </li>
              <li>
                Adapt the presentation of our Site to the display preferences of
                your terminal (language used, display resolution, operating
                system used, etc.) during your visits to our Site, according to
                the hardware and software for visualization or reading that your
                terminal contains.
              </li>
              <li>
                Remember information about products, services, or information
                that you have chosen on our Site (contents of a shopping cart,
                etc.).
              </li>
            </ul>{" "}
            <br />
            You can configure your browsing software at any time so that cookies
            are saved in your terminal or, on the contrary, rejected (either
            systematically or depending on their issuer). You can also configure
            your browsing software so that the acceptance or refusal of cookies
            is offered to you punctually, before a cookie can be saved in your
            terminal. <br />
            Please note: any settings may modify your Internet browsing and your
            access conditions to certain services requiring the use of cookies.{" "}
            <br />
            For managing cookies and your choices, the configuration of each
            browser (Internet Explorer, Firefox, Safari, Google Chrome) is
            different. It is described in the help menu of your browser, which
            will allow you to know how to modify your wishes regarding cookies.
            Below is information about the main browsers. <br />
          </div>
          <div>
            <h3 className="pb-4 text-left text-xl font-bold text-foreground/90">
              Google Analytics
            </h3>
            B-block uses the functions of the web analysis service{" "}
            <a
              href="https://analytics.google.com/analytics/web/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-500 underline-offset-2 hover:underline  dark:text-sky-600"
            >
              Google Analytics{" "}
            </a>{" "}
            <span className="italic">
              (Google Inc, 1600 Amphitheatre Parkway Mountain View, CA 94043,
              USA)
            </span>
            . Google Analytics uses cookies. The information generated by the
            cookies regarding your use of our site will generally be transmitted
            to a Google server in the United States and stored there. <br />
            If the User does not wish to transmit information to Google
            Analytics, they have the possibility to download and install this
            module on their web browser. The User can download the Google
            Analytics deactivation module by clicking on this link:{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-500 underline-offset-2 hover:underline  dark:text-sky-600"
            >
              https://tools.google.com/dlpage/gaoptout?hl=fr
            </a>
            . <br />
            For more information about privacy and security related to Google
            Analytics, the User can click on the following link:{" "}
            <a
              href="https://support.google.com/analytics/answer/6004245?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-500 underline-offset-2 hover:underline  dark:text-sky-600"
            >
              https://support.google.com/analytics/answer/6004245?hl=fr
            </a>{" "}
            .
          </div>
          <div>
            <h3 className="pb-4 text-left text-xl font-bold text-foreground/90">
              Google AdWords Conversion-Tracking
            </h3>
            B-block uses the online advertising program "Google AdWords" and
            conversion tracking. Google's conversion tracking is an analysis
            service from Google Inc.{" "}
            <span className="italic">
              (1600 Amphitheatre Parkway Mountain View, CA 94043, USA)
            </span>
            . <br />
            If the User does not wish to participate in this tracking, they can
            refuse this use by configuring their browser. More information on
            this:{" "}
            <a
              href="https://www.google.com/intl/fr/policies/technologies/ads/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-500 underline-offset-2 hover:underline  dark:text-sky-600"
            >
              https://www.google.com/intl/fr/policies/technologies/ads/
            </a>
            .
          </div>
          <div>
            <h3 className="pb-4 text-left text-xl font-bold text-foreground/90">
              Contact Us
            </h3>
            If you have any questions or concerns about our Privacy Policy or
            how we handle your personal information, please contact us at &nbsp;
            <a
              href="mailto:bblock1971@gmail.com."
              className="font-semibold text-sky-500 underline-offset-2 hover:underline  dark:text-sky-600"
            >
              bblock1971@gmail.com
            </a>
            &nbsp; or &nbsp;
            <a
              href="tel:+33 7 58 20 44 30"
              className="font-semibold text-sky-500 underline-offset-2 hover:underline  dark:text-sky-600"
            >
              +33 7 58 20 44 30
            </a>{" "}
            .
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
