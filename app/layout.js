import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>UMAA | United Myanmar American Association</title>
        <link rel="company icon" type="image/x-icon" href="./favicon.ico" />
      </head>
      <body >{children}</body>
    </html>
  );
}
