import Nav from "@/components/Nav"
import Footer from "@/components/brand/Footer";
import SocialMediaBanner from "@/components/brand/SocialMediaBanner";
export default function CommonLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <SocialMediaBanner />
      <Footer />
    </>
  );
}
