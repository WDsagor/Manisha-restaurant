import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import StoreProvider from "./StoreProvider";

const oswald = Oswald({
  weight: ["200", "300", "400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Manisha",
  description: "Manisha is Indian Restaurant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.className} mx-auto`}>
        <StoreProvider>
          <Navbar />
          <div className="min-h-svh">{children}</div>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
