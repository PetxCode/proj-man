import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { NextFont } from "next/dist/compiled/@next/font";
import { dbConfig } from "@/utils/dbConfig";
import MainSession from "./components/MainSession";

const inter: NextFont = Inter({ subsets: ["latin"] });
const poppins: NextFont = Poppins({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Management App",
  description: "Manage all your Project in One Place",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await dbConfig();
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className={poppins.className}>
          <MainSession>{children}</MainSession>
        </div>
      </body>
    </html>
  );
}
