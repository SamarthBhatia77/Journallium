import Image from "next/image";
import Inputs from "./components/inputs";
import Navbar from "./components/navbar";
import HomepageHeader from "./components/homepageheader";
export default function Home() {
  return (
    <div>
      <HomepageHeader/>
      <Inputs/>
    </div>
  );
}
