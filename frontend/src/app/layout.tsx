'use client'
import "./globals.css";
import Footer from "@/components/layout/main/Footer";
import Nav from "@/components/layout/main/Nav";
import TabController from "@/components/layout/panel/TabController";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tabs = [
    {
      navigateTo: "/test1",
      title: "تایتل اول",
    },
    {
      navigateTo: "/test2",
      title: "تایتل دوم",
    },
    {
      navigateTo: "/test3",
      title: "تایتل سوم",
    },
  ]

  return (
    <html lang="en" dir="rtl">
      <body className="min-h-screen max-w-screen w-screen flex flex-col">
        {/* <Nav /> */}
        
        <main className="grow grid place-items-center">
          {children}
        </main>
        <TabController tabsList={tabs} />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
