import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: November 25, 2023*

1. Introduction
This Privacy Policy applies to the website https://unitedmyanmar.org ("Site"), operated by UMAA (United Myanmar American Association Corp.), a non-profit organization for the American Burmese community. By using the Site, you consent to the data practices described in this policy.

2. Data Collection
- We collect personal data such as name, email, and payment information primarily for order processing.
- Non-personal data, like web cookies, is collected to enhance user experience on the Site.

3. Use of Data
- Personal data is used solely for processing orders and providing services requested by the users.
- Non-personal data may be used to improve the Site's functionality and user experience.

4. Data Sharing
- We do not share personal data with any third parties except as necessary to process orders or comply with legal obligations.

5. Children's Privacy
- The Site does not knowingly collect any personal information from children under the age of 13.

6. Security of Your Information
- We take reasonable measures to protect the personal information provided via the Site from loss, misuse, and unauthorized access, disclosure, alteration, or destruction.

7. Changes to This Privacy Policy
- UMAA reserves the right to update or change our Privacy Policy at any time.
- Users will be notified of any changes via email.

8. Contact Information
For any questions or concerns regarding this Privacy Policy, please contact us at unitedchin.uci@gmail.com.

9. Acknowledgement
By using the Site, you acknowledge that you have read, understood, and agree to the terms of this Privacy Policy.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
