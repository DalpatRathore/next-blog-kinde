import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { ThemeProvider } from "@/components/ui/theme-provider";
import SpeedDial from "@/components/SpeedDial";
import toast, { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Blog Kinde",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Container>
            <Toaster position="top-center" reverseOrder={false} />
            <Header></Header>
            {children}
            <Footer></Footer>
            <SpeedDial></SpeedDial>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
