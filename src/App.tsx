import HeroText from "./components/HeroTextGroup/HeroTextGroup";
import Input from "./components/Input";

function App() {
  return (
    <main className="w-screen h-screen flex flex-col gap-12 justify-center items-center bg-background text-white">
      <HeroText firstName="Breaking" lastName="Bad" />
      <section className="flex gap-4">
        <Input label="First Name" />
        <Input label="Last Name" />
      </section>
    </main>
  );
}

export default App;
