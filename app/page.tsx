import { ClientesVideos, NavBar, Presentacion } from "@/components";


export default function Home() {
  return (
    <main className="flex min-h-screen min-w-80 flex-col items-center gap-20 py-16">
      <NavBar />
      <Presentacion />
      <ClientesVideos />
    </main>
  );
}
