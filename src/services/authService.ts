import axios, { AxiosInstance } from 'axios';

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
  };
}

interface RegisterResponse {
  message: string;
}

interface RegisterData {
  nome: string;
  sobrenome: string;
  email: string;
  password: string;
}

class AuthService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async login(email: string, password: string): Promise<LoginResponse> {
    try {
      const response = await this.api.post<LoginResponse>('/login', { email, password });
      return response.data;
    } catch (error) {
      console.error('Failed to login:', error);
      throw new Error('Login failed');
    }
  }

  async register(data: RegisterData): Promise<RegisterResponse> {
    try {
      console.log(data);
      const response = await this.api.post<RegisterResponse>('/usuario', data);
      return response.data;
    } catch (error) {
      console.error('Failed to register:', error);
      throw new Error('Registration failed');
    }
  }
}

export default new AuthService();
