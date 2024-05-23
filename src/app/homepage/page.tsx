'use client';

import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthService from '../../services/authService';
import { setTokenCookie } from '@/utils/cookie';

interface FormData {
  email: string;
  password: string;
}

export default function HomePage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
        console.log("login")
        const data = await AuthService.login(formData.email, formData.password);
        localStorage.setItem('tokenJwt', data);
        console.log("este foi o token salvo: ", localStorage.getItem('tokenJwt'));
    } catch (error) {
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-[#f9f8f6] py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="flex items-center">
            {/* Add your logo here */}
          </div>
          <nav className="flex space-x-4">
            <button className="px-4 py-2 rounded">Calendário</button>
            <button className="px-4 py-2 rounded">Países</button>
            <button className="px-4 py-2 rounded">Atletas</button>
            <button className="px-4 py-2 rounded">Esportes</button>
            <button className="px-4 py-2 rounded">Medalhas</button>
          </nav>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-lg p-8 bg-white shadow-md rounded">
          <h1 className="text-2xl font-bold mb-6 text-start">Home-Page</h1>
        </div>
      </main>
    </div>
  );
};
