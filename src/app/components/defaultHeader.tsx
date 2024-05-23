'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function DefaultHeader() {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <header className="bg-[#f9f8f6] py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="flex items-center">
          {/* Adicione o seu logo aqui */}
        </div>
        <nav className="flex space-x-4">
          <button onClick={() => navigateTo('/calendario')} className="px-4 py-2 rounded">Calendário</button>
          <button onClick={() => navigateTo('/paises')} className="px-4 py-2 rounded">Países</button>
          <button onClick={() => navigateTo('/atletas')} className="px-4 py-2 rounded">Atletas</button>
          <button onClick={() => navigateTo('/esportes')} className="px-4 py-2 rounded">Esportes</button>
          <button onClick={() => navigateTo('/medalhas')} className="px-4 py-2 rounded">Medalhas</button>
        </nav>
      </div>
    </header>
  );
}
