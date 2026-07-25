"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle, ArrowLeft, Sparkles, ShieldCheck } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong during login.");
      }
      router.push("/home");
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-center relative overflow-hidden selection:bg-zinc-800">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="absolute top-6 left-6 z-10">
        <Link
          href="/home"
          className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-100 bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800/80 px-3.5 py-2 rounded-lg backdrop-blur-md transition-all duration-200"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4 z-10 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-2.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-2xl mb-4">
            <Image
              src="/image/Logo.png"
              alt="Procesio Logo"
              width={40}
              height={40}
              className="w-9 h-9 object-contain grayscale opacity-90"
            />
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-[11px] font-medium tracking-widest text-zinc-400 uppercase bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-zinc-400" /> Procesio Portal
            </span>
          </div>
          <h2 className="text-3xl font-normal tracking-tight text-zinc-100 sm:text-4xl">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-zinc-400 font-light">
            Enter your credentials to access your account
          </p>
        </div>

        <div className="bg-zinc-900/50 backdrop-blur-xl py-8 px-6 shadow-2xl rounded-2xl sm:px-8 border border-zinc-800/80 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/20 to-transparent" />

          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-950/20 border border-red-900/40 rounded-xl p-4 flex items-start space-x-3 text-red-400 animate-in fade-in duration-200">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="flex-1 text-sm font-light leading-relaxed">
                  {error}
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-zinc-400 mb-2">
                Email address
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3.5 py-2.5 bg-zinc-950/70 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400/30 focus:border-zinc-500 transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-medium uppercase tracking-wider text-zinc-400 mb-2">
                Password
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-10 py-2.5 bg-zinc-950/70 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400/30 focus:border-zinc-500 transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-500 hover:text-zinc-300 transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-zinc-800 bg-zinc-950 text-zinc-100 focus:ring-zinc-400 cursor-pointer accent-zinc-200"
                />
                <label htmlFor="remember-me" className="ml-2 block text-xs text-zinc-400 cursor-pointer select-none">
                  Remember me
                </label>
              </div>

              <div className="text-xs">
                <a href="#" className="text-zinc-300 hover:text-white transition-colors underline underline-offset-4">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-xl shadow-md text-sm font-medium text-zinc-950 bg-zinc-100 hover:bg-white active:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-400/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-zinc-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  <>
                    <span>Sign in to account</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
          <div className="mt-6 pt-6 border-t border-zinc-800/80 text-center">
            <p className="text-xs text-zinc-400">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-zinc-200 hover:text-white font-medium transition-colors underline underline-offset-4">
                Create one now
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-8 text-center flex items-center justify-center gap-1.5 text-xs text-zinc-500">
          <ShieldCheck className="w-4 h-4 text-zinc-400" />
          <span>Encrypted 256-bit secure authentication</span>
        </div>
      </div>
    </div>
  );
}