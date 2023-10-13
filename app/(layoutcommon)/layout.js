'use client'
import Nav from "../components/nav";
import Footer from "../components/footer";
import { AuthContextProvider } from "../context/AuthContext";

export default function CommonLayout({ children }) {
  return (
    <>
      <AuthContextProvider>
      <Nav />
      {children}
      <Footer />
      </AuthContextProvider>
    </>
  );
}
