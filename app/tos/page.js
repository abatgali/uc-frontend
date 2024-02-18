import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
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
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: November 25, 2023

**1. Acceptance of Terms**
By accessing or using the website https://unitedmyanmar.org ("Site"), operated by UCA (United Chin Association Corp.), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, do not use the Site.

**2. Description of Service**
The Site provides a platform for the American Burmese community, offering memberships, merchandise, and event tickets. Access to certain content may be restricted to members only.

**3. Membership and Purchases**
- Users may purchase memberships, merchandise, and event tickets through the Site.
- Ownership of purchased items is restricted to personal use; resale is prohibited.
- A full refund for merchandise is available within 7 days of purchase, subject to conditions outlined on the Site.

**4. User Information**
- The Site collects personal information such as name, email, and payment information for transactions.
- Users consent to the collection and use of their data in accordance with our Privacy Policy, available at https://unitedmyanmar.org/privacy-policy.

**5. Non-Personal Data Collection**
- The Site uses cookies to enhance user experience. By using the Site, you consent to the use of cookies.

**6. User Conduct**
- Users must comply with all applicable laws and regulations.
- Misuse of the Site or its services is strictly prohibited.

**7. Intellectual Property**
- All content on the Site, including text, graphics, logos, and software, is the property of UCA or its licensors and is protected by copyright and other laws.

**8. Governing Law**
- These Terms are governed by the laws of the United States.

**9. Changes to Terms**
- UCA reserves the right to modify these Terms at any time.
- Users will be notified of any changes via email.

**10. Contact Information**
For any questions or concerns regarding these Terms, please contact unitedchin.uci@gmail.com.

**11. Acknowledgement**
By using the Site, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
