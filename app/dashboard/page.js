import ButtonAccount from "@/components/ButtonAccount";
import MembersList from "@/components/brand/MembersList";
import NewPost from "@/components/feed/NewPost";
export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
export default async function Dashboard() {
  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-xl mx-auto space-y-8">
        <ButtonAccount />
        <NewPost />
        <h4 className="">Your Feed</h4>
        <MembersList />
      </section>
    </main>
  );
}
