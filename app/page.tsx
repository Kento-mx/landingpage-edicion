import { ClientesVideos, NavBar, Presentacion } from "@/components";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <NavBar />
      <Presentacion />
      <ClientesVideos />
    </main>
  );
}
