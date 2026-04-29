import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Works } from "./components/Works";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Nav />
      <Hero />
      <Works />
      <Skills />
      <About />
      <Contact />
      <footer className="border-t border-[#e8e8e8] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[12px] text-[#999999]">
            &copy; {new Date().getFullYear()} Tanna
          </p>
        </div>
      </footer>
    </main>
  );
}
