'use client';

import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthService from '../../services/authService';
import { setTokenCookie } from '@/utils/cookie';

interface FormData {
  email: string;
  password: string;
}

export default function LoginPage() {
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
          <h1 className="text-2xl font-bold mb-6 text-start">Login</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center justify-between">
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Esqueci Minha Senha
              </a>
              <button
                type="submit"
                className="bg-[#c3c3c3] text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
