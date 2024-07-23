import type { Metadata } from "next";
import "./scss/globals.scss";
import Header from "@/app/component/header/Header";

export const metadata: Metadata = {
  title: "Aditya Bhalerao | Full Stack designer",
  description:
    "full-stack designer, personal portfolio, Sahil Satpute, projects, front-end developer, react developer, next js developer, ui-ux developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}