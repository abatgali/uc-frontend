import ClientLayout from "./components/LayoutClient";
import "./globals.css";
import config from "config";

// export const viewport = {
//   // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
//   themeColor: '#8b4513' ,
//   width: "device-width",
//   initialScale: 1,
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {config.domainName && (
        <head>
          <title>UMAA | United Myanmar American Association</title>
          <link rel="company icon" type="image/x-icon" href="./favicon.ico" />
        </head>
      )}
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
