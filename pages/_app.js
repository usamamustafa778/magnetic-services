import "@/styles/globals.css";
import { Roboto } from "next/font/google";

const myFont = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={myFont.className}>
      <Component {...pageProps} />
    </div>
  );
}
