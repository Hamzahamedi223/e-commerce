import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Correct import statement
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'
import ModalProvider from "@/providers/modal-provider";
// Incorrect function name 'poppins' should be 'Poppins' to match the imported function
const poppins = Poppins({
   subsets: ["latin"], 
   weight : ["100","200","300","400","500","600","700","800","900"],
   });

export const metadata: Metadata = {
  title: "store app",
  description: "store by store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.className}>
        <ModalProvider/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
