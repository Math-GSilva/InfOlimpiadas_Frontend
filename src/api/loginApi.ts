import { NextApiRequest, NextApiResponse } from 'next';
import AuthService from '../services/authService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { nome, sobrenome, email, password } = req.body;

  try {
    const data = await AuthService.register({ nome, sobrenome, email, password });
    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
}
