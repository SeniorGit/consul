import Hero from "./_component/layouts/page";
import Discover from "./_component/layouts/discover";
import Consulin from "./_component/layouts/consulin";
import ContactSection from "./_component/layouts/kontak";
export default function Home() {
  return(
    <>
    <Hero />
    <Discover />
    <Consulin />
    <ContactSection />
    </>
  );
}