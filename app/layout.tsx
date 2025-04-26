import { Inter } from "next/font/google";
import { SidebarProvider } from "@/context/SidebarContext";
import "./globals.css";

export const metadata = {
  title: "SaaS Starter Kit - Launch Projects Faster",
  description: "Build your SaaS application with this modern dashboard template powered by Next.js and Supabase.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-inter">
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
