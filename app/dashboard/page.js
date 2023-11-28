import MembersList from "@/components/brand/MembersList";
import Feed from "@/components/feed/Feed";
import NewPost from "@/components/feed/NewPost";
export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
export default async function Dashboard() {
  return (
    <main className="min-h-screen pt-8 px-2 pb-24">
      <section className="max-w-xl mx-auto space-y-8">
        <NewPost />
        <span className="flex items-center">
          <span className="pr-6">UMAA Feed & News</span>
          <span className="h-px flex-1 bg-gray-200"></span>
        </span>
        <Feed />
        <MembersList />
      </section>
    </main>
  );
}
