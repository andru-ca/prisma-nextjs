import { createClient } from "@/prismicio";
import Link from "next/link";

export default async function ServiciosPage() {
  const client = createClient();

  // documento único de listado
  const serviciosPage = await client.getSingle("services_page");

  // documentos individuales
  const servicios = await client.getAllByType("service");

  return (
    <main>
        <section className="h-screen flex justify-center items-center">

       
      <h1>{serviciosPage.data.title}</h1>
      <p>{serviciosPage.data.description}</p>

      <ul>
        {servicios.map((s) => (
          <li key={s.id}>
            <Link href={`/servicios/${s.uid}`}>{s.data.title}</Link>
          </li>
        ))}
      </ul>
       </section>
    </main>
  );
}
