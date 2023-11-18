export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <main>
      <h1>Devstore</h1>
    </main>
  )
}
