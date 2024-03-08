import { ClientesVideos, NavBar, Presentacion } from "@/components";


export default function Home() {
  return (
    <main className="border flex min-h-screen flex-col items-center gap-10 py-20">
      <NavBar />
      <Presentacion />
      {/* <ClientesVideos /> */}
    </main>
  );
}
