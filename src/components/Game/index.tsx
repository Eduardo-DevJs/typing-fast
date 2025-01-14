export default function Game() {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <header>
        <h2>pontuação: {3}</h2>
        <h2>Tempo: {5}</h2>
      </header>
      <main className="flex items-center flex-col justify-center gap-4">
        <h1 className="text-2xl">Digite a palavra:</h1>
        <h4 className="text-3xl font-bold">Eduardo</h4>
      </main>

      <footer>
        <div>
          <h2>pontuação máxima: {19}</h2>
        </div>
      </footer>
    </div>
  );
}
