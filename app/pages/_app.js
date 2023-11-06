'use client'
import localFont from "next/font/local";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from "react";
const oswald = localFont({
  src: "../styles/Oswald/Oswald-VariableFont_wght.ttf",
});
const openSans = localFont({
  src: "../styles/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf",
});

export default function MyApp({ Component, pageProps }) {
    
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createPagesBrowserClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.session}
    >
      <main className={`${openSans}`}>
        <Component {...pageProps} />
      </main>
    </SessionContextProvider>
  );
}

export { oswald, openSans };
