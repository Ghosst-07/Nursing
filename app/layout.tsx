import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import { Navbar } from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import WhatsAppFabButton from "@/components/WhatsappFAB";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Phyoli Health Care",
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
        <SpeedInsights />
        <Footer />
        <WhatsAppFabButton phoneNumber={"+919634390655"} message={"Hii"} />
      </body>
    </html>
  );
}
