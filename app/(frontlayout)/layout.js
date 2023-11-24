import Nav from "@/components/nav"
import Footer from "@/components/brand/footer";
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
