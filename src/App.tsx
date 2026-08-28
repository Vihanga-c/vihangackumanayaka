import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import "./index.css";

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
      </main>
    </>
  );
}

export default App;