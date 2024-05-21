import axios, { AxiosInstance } from 'axios';
import { setTokenCookie } from '../utils/cookie';

interface LoginResponse {
  token: string;
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
      baseURL: "https://localhost:7037/",
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async login(email: string, password: string): Promise<string> {
    try {
      const response = await this.api.post<string>('/usuario/login', { email, password });
      console.log(response.data);
      return response.data.toString();
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
