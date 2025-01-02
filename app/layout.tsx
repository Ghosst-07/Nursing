import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pyoli Nursing Services",
  description: "In-Home Patient Care in Dehradun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " overflow-x-hidden "}>
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
