"use client"
import React, { useState, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// API manzili o'zgartirishingiz mumkin
const API_URL = 'http://127.0.0.1:8000/api/v1/login/';

interface LoginProps {
  access: string;
}

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post<LoginProps>(
        API_URL,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      localStorage.setItem('access_token', response.data.access);
      router.push('/'); 
      window.location.reload();
      
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="max-w-md w-full mx-auto my-[277px] p-8 border rounded shadow-lg">
      <h2 className="text-xl font-semibold text-center mb-6">Login to Your Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="email" className="text-white">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Emailingizni kiriting"
          />
        </div>

        <div className="mb-6">
          <Label htmlFor="password" className="text-white">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Parolingizni kiriting"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {loading ? 'Kirish...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
