import Hero from "../components/Hero";
import Featured from "../components/Featured";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <Featured />
    </div>
  );
}
