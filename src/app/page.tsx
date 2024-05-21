'use client'

import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import AuthService from '../services/authService';
import { useRouter } from 'next/navigation';


interface FormData {
  nome: string;
  sobrenome: string;
  email: string;
  password: string;
  confirmarSenha: string;
}

export default function Home() {
  const router = useRouter();

  const goToLogin = () => {
    router.push('/login');
  };

  const [formData, setFormData] = useState<FormData>({
    nome: '',
    sobrenome: '',
    email: '',
    password: '',
    confirmarSenha: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await AuthService.register(formData);
      console.log('Registration successful:', data);
      goToLogin();
    } catch (error) {
      console.error('Registration failed:');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-[#f9f8f6] py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="flex items-center">
            {/* <Image src={logo} alt="Logo das Olimpíadas" width={50} height={50} /> */}
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
          <h1 className="text-2xl font-bold mb-6 text-center">Criar Conta</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
                <input id="nome" name="nome" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleChange} />
              </div>
              <div className="flex-1">
                <label htmlFor="sobrenome" className="block text-sm font-medium text-gray-700">Sobrenome</label>
                <input id="sobrenome" name="sobrenome" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleChange} />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" name="email" type="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleChange} />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                <input id="password" name="password" type="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleChange} />
              </div>
              <div className="flex-1">
                <label htmlFor="confirmarSenha" className="block text-sm font-medium text-gray-700">Confirme sua Senha</label>
                <input id="confirmarSenha" name="confirmarSenha" type="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleChange} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Fazer Login</a>
              <button type="submit" className="bg-[#c3c3c3] text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Criar Conta
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
