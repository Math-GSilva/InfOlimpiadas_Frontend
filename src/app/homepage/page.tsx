'use client';

import React from 'react';
import DefaultHeader from '../components/defaultHeader';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <DefaultHeader/>
      <main className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-lg p-8 bg-white shadow-md rounded">
          <h1 className="text-2xl font-bold mb-6 text-start">Home-Page</h1>
        </div>
      </main>
    </div>
  );
};
