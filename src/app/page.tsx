import About from "./sections/About";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import WorkExperience from "./sections/WorkExperience";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      
      <WorkExperience />
    </main>
  );
}
