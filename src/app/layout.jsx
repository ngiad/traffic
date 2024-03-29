import { Inter } from "next/font/google";
import "../assets/styles/globals.css";
import ReduxProvider from "@/components/Providers/Redux";
import Cookies from "@/components/Providers/Cookies";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
     title: "Sorni link",
     description: "Smart traffic",
};

export default function RootLayout({ children }) {
     return (
          <Cookies>
               <ReduxProvider>
                    <html lang="en">
                         <body>{children}</body>
                    </html>
               </ReduxProvider>
          </Cookies>
     );
}
