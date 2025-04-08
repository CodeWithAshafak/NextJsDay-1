import Image from "next/image";
import styles from "./page.module.css";
import Header from "./componetns/Header";
import Hero from "./componetns/Hero";
import Latest from "./componetns/Latest";
import Service from "./componetns/Service";
import Aboutus from "./componetns/Aboutus";

export default function Home() {
  return (
   <>
   
   <Hero/>
  <Latest/>
  <Service/>
  <Aboutus/>
   
   </>
  );
}
