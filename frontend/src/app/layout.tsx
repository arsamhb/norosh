'use client'
import Footer from "@/components/layout/Footer";
import "./globals.css";
import Nav from "@/components/layout/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className="min-h-screen max-w-screen w-screen flex flex-col">
        <Nav />
        <main className="grow grid place-items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
