"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Brain, LogIn, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function SuperAdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // --- Mock Authentication ---
    // In a real app, you would make an API call here.
    if (email === 'admin@example.com' && password === 'password') {
      // On successful login, store a token and redirect
      localStorage.setItem('superAdminAuth', 'true');
      router.push('/super-admin');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-sm bg-black/50 backdrop-blur-lg border-cyan-500/30">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-white">Super Admin Panel</CardTitle>
            <CardDescription className="text-gray-400">Please sign in to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email (admin@example.com)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800/50 border-gray-700 focus:border-cyan-500"
                  required
                />
                <Input
                  type="password"
                  placeholder="Password (password)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-800/50 border-gray-700 focus:border-cyan-500"
                  required
                />
              </div>
              {error && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-2 rounded-md">
                  <AlertCircle className="w-4 h-4" />
                  <p>{error}</p>
                </div>
              )}
              <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}