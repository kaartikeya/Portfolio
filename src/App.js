import { Navbar } from "./components/Navbar/navbar";
import { Intro } from "./components/Intro/intro";
import { Skills } from "./components/Skills/skills";
import { Works } from "./components/Works/works";
import { Contact } from "./components/Contact/contact";
import { Footer } from "./components/Footer/footer";
import { Experience } from "./components/Experience/experience";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
