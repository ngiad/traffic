import { Inter } from "next/font/google";
import "../assets/globals.css";

import ReduxProvider from "@/components/Providers/Redux";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sorni link",
  description: "Smart traffic",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}
