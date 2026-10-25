import { About } from "@/components/About";
import { Collections } from "@/components/Collections";
import { Contact } from "@/components/Contact";
import { Craft } from "@/components/Craft";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Collections />
      <About />
      <Craft />
      <Contact />
    </main>
  );
}
