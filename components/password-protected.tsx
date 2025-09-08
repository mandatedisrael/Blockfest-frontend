"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface PasswordProtectedProps {
  children: React.ReactNode;
}

const INSIGHTS_PASSWORD = process.env.NEXT_PUBLIC_INSIGHTS_PASSWORD;

export function PasswordProtected({ children }: PasswordProtectedProps) {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already authenticated (stored in sessionStorage)
  useEffect(() => {
    const stored = sessionStorage.getItem("insights_authenticated");
    if (stored === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === INSIGHTS_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
      sessionStorage.setItem("insights_authenticated", "true");
    } else {
      setError("Invalid password. Please try again.");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("insights_authenticated");
    setPassword("");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F2CB45] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-ping"></div>
        </div>

        <div className="relative z-10 max-w-md w-full mx-4">
          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#F2CB45] to-yellow-300 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m0 0h.01M12 17H12m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Access Restricted
              </h1>
              <p className="text-gray-300">
                Enter the password to view event insights
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F2CB45] focus:border-transparent"
                  placeholder="Enter password..."
                  required
                />
              </div>

              {error && (
                <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#F2CB45] to-yellow-300 text-black font-semibold py-3 rounded-lg hover:from-yellow-300 hover:to-[#F2CB45] transition-all duration-200"
              >
                Access Insights
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-400">
                Contact the admin team if you need access
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Logout Button */}
      <div className="absolute top-4 right-4 z-50">
        <Button
          onClick={handleLogout}
          variant="outline"
          size="sm"
          className="bg-red-500/20 border-red-500/30 text-red-200 hover:bg-red-500/30 hover:border-red-500/50"
        >
          Logout
        </Button>
      </div>
      {children}
    </div>
  );
}
