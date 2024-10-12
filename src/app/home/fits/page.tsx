import db from "@local/lib/db";

export default async function Fits() {
  const fits = await db.fits.findMany();

  return (
      <main>

        <h1>Fits</h1>

        <ul>
          {fits.map((fit) => (
            <li key={fit.id}>
              <h2>{fit.name}</h2>
              <p>{fit.description}</p>
            </li>
          ))}
        </ul>

      </main>
  )
}
