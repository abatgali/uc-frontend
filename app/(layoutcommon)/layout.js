import Nav from "../components/nav"
import Footer from "../components/footer"

export const metadata = {
  id: 1,
  title: "UC Cup - United Chin International",
  description:
    "Unlock a universe of excitement, camaraderie, and competition with ClubConnect, your all-access pass to clubs, events, and contests. Say hello to limitless opportunities.",
}

export default function CommonLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
