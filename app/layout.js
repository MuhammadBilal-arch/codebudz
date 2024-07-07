import { Inter } from "next/font/google";
import "./globals.css";
import AOSWrapper from "@/components/aos-wrapper";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Codebudz",
  description: "Codebudz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto&family=Jost&display=swap"
        />
      </head>
      <body className="poppins-family">
        <AOSWrapper>{children}</AOSWrapper>
        <ToastContainer />
      </body>
    </html>
  );
}
