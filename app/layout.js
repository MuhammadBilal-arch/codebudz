import { Inter } from "next/font/google";
import "./globals.css";
import AOSWrapper from "@/components/aos-wrapper";
import { ToastContainer } from "react-toastify";
import { Providers } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inference Admin Panel",
  description: "Inference Admin Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&family=Inter:wght@400;700&display=swap"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <AOSWrapper>{children}</AOSWrapper>
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
