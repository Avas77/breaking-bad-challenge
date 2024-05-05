import { useState } from "react";
import Button from "./components/Button";
import HeroText from "./components/HeroTextGroup/HeroTextGroup";
import Input from "./components/Input";

function App() {
  const [firstName, setFirstName] = useState("Breaking");
  const [lastName, setLastName] = useState("Bad");
  return (
    <main className="w-screen h-screen flex flex-col gap-12 justify-center items-center bg-background text-white">
      <HeroText firstName={firstName} lastName={lastName} />
      <section className="w-[405px]">
        <section className="flex gap-4">
          <Input label="First Name" value={firstName} onChange={setFirstName} />
          <Input label="Last Name" value={lastName} onChange={setLastName} />
        </section>
        <Button label="Breakify" />
      </section>
    </main>
  );
}

export default App;
