export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-6 rounded-md bg-white max-w-2xl shadow-md">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-4xl font-bold mb-6">Digite Rápido</h1>
          <p className="text-center text-balance text-2xl leading-normal">
            Quantas palavras com 5 letras você consegue escrever em 60 segundos?
          </p>
          <button className="bg-slate-900 text-white px-8 text-xl cursor-pointer py-2 rounded-md">
            Play!
          </button>
        </div>
      </div>
    </div>
  );
}
