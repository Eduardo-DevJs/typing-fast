"use client";

import Card from "@/components/Card";
import { words } from "@/data/words";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Game() {
  const [palavraAtual, setPalavraAtual] = useState(0);
  const [letraAtual, setLetraAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [tempo, setTempo] = useState(60);

  const palavra = words.map((item) => {
    return item.split("");
  });

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (tempo === 0) return;

      const key = event.key;
      const letrasPalavrasAtual = palavra[palavraAtual];

      if (key === letrasPalavrasAtual[letraAtual]) {
        if (letraAtual < letrasPalavrasAtual.length - 1) {
          setLetraAtual((prev) => prev + 1);
        } else {
          setPalavraAtual((prev) => prev + 1);
          setPontuacao((prev) => prev + 1);
          setLetraAtual(0);
        }
      } else {
        setPalavraAtual((prev) => prev + 1);
        setLetraAtual(0);
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [palavra, palavraAtual, letraAtual]);

  useEffect(() => {
    if (tempo > 0) {
      const timer = setTimeout(() => {
        setTempo((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [tempo]);

  const handleResetGame = () => {
    window.location.href = window.location.href;
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <span className="text-xl mb-4">
        Quantidade total de palavras: {words.length}
      </span>
      <Card>
        <div className="w-full flex flex-col gap-8">
          <header className="flex items-center justify-between">
            <h2 className="font-semibold text-3xl">
              pontuação: <span>{pontuacao}</span>
            </h2>
            <h2 className="font-semibold text-3xl">
              tempo: <span>{tempo}</span>
            </h2>
          </header>
          <main className="flex items-center flex-col justify-center gap-3 mt-6">
            <h1 className="text-2xl font-semibold">Digite a palavra:</h1>
            <h4 className="text-4xl font-bold">
              {palavra[palavraAtual].map((letra, index) => (
                <span
                  key={index}
                  className={index < letraAtual ? "text-green-500" : ""}
                >
                  {letra}
                </span>
              ))}
            </h4>
          </main>
          <footer className="mt-10 flex items-center justify-center">
            <div className="flex gap-2 items-center">
              <button
                className="py-1 px-4 font-semibold bg-gray-600 rounded-md text-white"
                onClick={handleResetGame}
              >
                Reset
              </button>
              <Link href={"/"}>Página inicial</Link>
            </div>
          </footer>
        </div>
      </Card>
    </div>
  );
}
