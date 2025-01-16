"use client";

import Link from "next/link";

export default function Play() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-center text-4xl font-bold mb-10">Digite Rápido</h1>
      <p className="text-center text-balance text-2xl leading-normal">
        Quantas palavras você consegue escrever em 60 segundos?
      </p>
      <Link
        href={"/game"}
        className="bg-slate-900 text-white mt-6 px-8 text-xl cursor-pointer py-2 rounded-md"
      >
        Play!
      </Link>
    </div>
  );
}
