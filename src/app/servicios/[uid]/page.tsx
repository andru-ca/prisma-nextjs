import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";

export default async function ServicioPage({ params }: { params: { uid: string } }) {
  const client = createClient();

  const servicio = await client.getByUID("service", params.uid).catch(() => null);

  if (!servicio) return notFound();

  return (
    <main>
        <section className="h-screen flex justify-center items-center">

    
      <h1>{servicio.data.title}</h1>
      <p>{servicio.data.description}</p>
          </section>
    </main>
  );
}
