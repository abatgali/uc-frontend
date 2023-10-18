'use client'
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function CommonLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
