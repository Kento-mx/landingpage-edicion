import { NavBar, PriceCardMinimo, PriceCardStandar } from "@/components";
import { AclaracionCard } from "@/components/cards/AclaracionCard";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-20 p-24">
      <NavBar />
      <div className="flex w-4/5 justify-evenly">
        <PriceCardMinimo />
        <PriceCardStandar />
      </div>
      <AclaracionCard />
    </main>
  );
}