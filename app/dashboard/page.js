import Feed from "@/components/feed/Feed";
import NewPost from "@/components/feed/NewPost";
export const dynamic = "force-dynamic";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import config from "@/config";

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect(config.auth.loginUrl);
  }

  return (
    <main className="min-h-screen">
      <section className="max-w-xl mx-auto space-y-8 sm:py-5">
        <NewPost />
        <span className="flex items-center">
          <span className="pr-6">UCA Feed & News</span>
          <span className="h-px flex-1 bg-gray-200"></span>
        </span>
        <Feed />
      </section>
    </main>
  );
}
