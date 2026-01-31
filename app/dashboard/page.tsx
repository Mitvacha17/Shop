"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, Folder, ArrowRight, LogOut, Lock } from "lucide-react";
import { customers, SITE_PASSWORD } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Login state
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("valentine-auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setError("");

    // Simulate a small delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (password === SITE_PASSWORD) {
      sessionStorage.setItem("valentine-auth", "true");
      setIsAuthenticated(true);
    } else {
      setError("Incorrect password. Try again with love!");
    }
    setIsLoggingIn(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("valentine-auth");
    setIsAuthenticated(false);
    setPassword("");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" />
          <span className="text-muted-foreground">Loading...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-background via-rose-50/50 to-lavender-50/30 relative overflow-hidden">
        {/* Decorative floating hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            >
              <Heart
                className="text-primary"
                size={20 + Math.random() * 30}
                fill="currentColor"
              />
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-md px-6">
          <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-10 border border-border/50">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="w-8 h-8 text-primary" fill="currentColor" />
              </div>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-2">
                Welcome, My Love
              </h1>
              <p className="text-muted-foreground">
                Enter the secret password to continue
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="password"
                  placeholder="Enter password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12 text-base bg-background border-border focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              {error && (
                <p className="text-destructive text-sm text-center animate-shake">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Checking...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Unlock My Heart
                  </span>
                )}
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Hint: What do we say to each other every day?
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
          }
          .animate-float { animation: float ease-in-out infinite; }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }
          .animate-shake { animation: shake 0.3s ease-in-out; }
        `}</style>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-primary" fill="currentColor" />
            <h1 className="text-xl font-serif text-foreground">Valentine&apos;s Hub</h1>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="text-muted-foreground hover:text-foreground"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Title section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Choose Your Valentine
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Select a special person to view their personalized love letter, photos, and more
          </p>
        </div>

        {/* Customer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers.map((customer, index) => (
            <button
              key={customer.id}
              onClick={() => router.push(`/dashboard/${customer.id}`)}
              className="group bg-card rounded-2xl border border-border p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 text-left relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />

              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Folder className="w-8 h-8 text-primary" />
                </div>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                  {customer.displayName}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  A special message awaits...
                </p>

                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Open letter</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <Heart
                className="absolute bottom-4 right-4 w-6 h-6 text-primary/20 group-hover:text-primary/40 transition-colors"
                fill="currentColor"
              />
            </button>
          ))}
        </div>

        <p className="text-center text-muted-foreground/60 mt-16 font-cursive text-xl">
          Every love story is beautiful, but ours is my favorite
        </p>
      </div>
    </main>
  );
}
