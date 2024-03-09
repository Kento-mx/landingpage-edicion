import { NavBar, PriceCardMinimo, PriceCardStandar } from "@/components";
import { AclaracionCard } from "@/components/cards/AclaracionCard";


export default function Home() {
  return (
    <main className="flex min-h-screen min-w-80 flex-col items-center justify-between gap-20 py-16">
      <NavBar />
      <div className="flex flex-wrap w-4/5 justify-evenly gap-10">
        <PriceCardMinimo />
        <PriceCardStandar />
      </div>
      <AclaracionCard />
    </main>
  );
}