import HeaderBlog from "./_assets/components/HeaderBlog";

export default async function LayoutBlog({ children }) {
  return (
    <div>
      {/* <HeaderBlog /> */}

      <main className="min-h-screen max-w-6xl mx-auto px-8 py-28 sm:py-48">{children}</main>

      <div className="h-24" />

    </div>
  );
}
