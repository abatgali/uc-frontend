'use client'
import Nav from "../components/nav";
import Footer from "../components/footer";
import SocialMediaBanner from "../components/socialmediaTopBanner";
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
