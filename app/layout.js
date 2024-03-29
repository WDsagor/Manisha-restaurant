import { Inter, Montserrat, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/Navbar";

const inter = Inter({ subsets: ["latin"] });
const oswald = Montserrat({
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
      <body className={oswald.className}>
        <Navbar />
        <div className="px-2">{children}</div>
      </body>
    </html>
  );
}
