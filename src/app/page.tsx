import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#445760]">
      {/* Barra de opções no topo */}
      <div  className="bg-white py-4 px-6 flex justify-between items-center">
        <div>
          <h1 className="text-fonts text-2xl font-bold">InfOlimpíadas</h1>
        </div>
        <div>
          <button className="text-fonts mr-6">Calendário</button>
          <button className="text-fonts mr-6">Países</button>
          <button className="text-fonts mr-6">Atletas</button>
          <button className="text-fonts mr-6">Esportes</button>
          <button className="text-fonts mr-6">Medalhas</button>
        </div>
        <div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col justify-center items-center p-4">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className="grid text-center max-w-4xl grid-cols-1 gap-6 mt-10">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">Docs</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          {/* Adicione outras opções aqui */}
        </div>
      </main>

      {/* Rodapé */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        Feito com ❤️ por Você
      </footer>
    </div>
  );
}
