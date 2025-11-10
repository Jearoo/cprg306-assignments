"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await gitHubSignIn();
    } catch (error) {
      console.error("GitHub Sign-In Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Sign-Out Error:", error);
    }
  };

  if (!user) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <div className="bg-white text-black p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome to Week 9</h1>
          <p className="text-gray-700 mb-6">
            Please sign in with GitHub to continue.
          </p>
          <button
            onClick={handleLogin}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all disabled:bg-gray-400"
          >
            {loading ? "Signing in..." : "Login with GitHub"}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="bg-white text-black p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">
          Welcome, {user.displayName}{user.email}!
        </h1>
        <p className="text-gray-700 mb-6">{user.email}</p>
        <div className="flex flex-col gap-4">
          <Link
            href="/week-9/shopping-list"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-all"
          >
            Go to Shopping List
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}
