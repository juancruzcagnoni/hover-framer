import AnimatedLink from "./components/AnimatedLink";
import "./App.css";

function App() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-black font-inter">
      <AnimatedLink text="Twitter" href="#" />
      <AnimatedLink text="Linkedin" href="#" />
      <AnimatedLink text="Facebook" href="#" />
      <AnimatedLink text="Instagram" href="#" />
    </section>
  );
}

export default App;
