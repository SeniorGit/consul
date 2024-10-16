import Hero from "./_component/layouts/page";
import Discover from "./_component/layouts/discover";
import Master from "./_component/layouts/master";
import ContactSection from "./_component/layouts/kontak";
export default function Home() {
  return(
    <>
    <Hero />
    <Discover />
    <Master />
    <ContactSection />
    </>
  );
}