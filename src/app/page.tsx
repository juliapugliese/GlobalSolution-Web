
import styles from "./page.module.css";
import { Section1 } from "@/components/Section1";
import { Section2 } from "@/components/Section2";
import { Proposal } from "@/components/Proposal";
import { Campanha } from "@/components/Campanha";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Section1/>
      <Section2/>
      <Proposal/>
      <Campanha/>
      <Footer/>
    </main>
  );
}
