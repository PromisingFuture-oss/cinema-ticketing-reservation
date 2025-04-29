import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import QueryProvider from "@/hooks/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket Reservation System"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} select-none`}>
        <QueryProvider>{children}</QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
